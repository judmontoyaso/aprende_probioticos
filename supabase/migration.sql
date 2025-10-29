-- =====================================================
-- MIGRACIÓN BLOG A SUPABASE
-- Base de datos para probioticosparatodos.com
-- =====================================================

-- 1. CREAR TABLA PRINCIPAL DE ARTÍCULOS
-- =====================================================
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT, -- Contenido MDX/Markdown
  image_url TEXT NOT NULL,
  image_alt TEXT NOT NULL,
  category TEXT NOT NULL,
  published_at TIMESTAMPTZ NOT NULL,
  read_time TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  use_template BOOLEAN DEFAULT true,
  author TEXT DEFAULT 'Equipo de Probióticos',
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  meta_keywords TEXT[], -- Array de keywords para SEO
  meta_og_image TEXT, -- URL de imagen Open Graph personalizada
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived'))
);

-- 2. ÍNDICES PARA PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_featured ON articles(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status) WHERE status = 'published';

-- 3. FULL-TEXT SEARCH EN ESPAÑOL
-- =====================================================
-- Agregar columna para búsqueda
ALTER TABLE articles ADD COLUMN IF NOT EXISTS searchable tsvector;

-- Crear índice GIN para búsqueda rápida
CREATE INDEX IF NOT EXISTS idx_articles_search ON articles USING GIN(searchable);

-- Función para actualizar el campo searchable automáticamente
CREATE OR REPLACE FUNCTION articles_search_update() 
RETURNS trigger AS $$
BEGIN
  NEW.searchable := to_tsvector('spanish', 
    COALESCE(NEW.title, '') || ' ' || 
    COALESCE(NEW.description, '') || ' ' || 
    COALESCE(NEW.content, '') || ' ' ||
    COALESCE(array_to_string(NEW.meta_keywords, ' '), '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar searchable en INSERT/UPDATE
DROP TRIGGER IF EXISTS articles_search_trigger ON articles;
CREATE TRIGGER articles_search_trigger 
  BEFORE INSERT OR UPDATE ON articles
  FOR EACH ROW 
  EXECUTE FUNCTION articles_search_update();

-- 4. FUNCIÓN PARA ACTUALIZAR updated_at AUTOMÁTICAMENTE
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_articles_updated_at ON articles;
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 5. FUNCIÓN PARA INCREMENTAR VISTAS
-- =====================================================
CREATE OR REPLACE FUNCTION increment_article_views(article_slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE articles 
  SET views = views + 1 
  WHERE slug = article_slug AND status = 'published';
END;
$$ LANGUAGE plpgsql;

-- 6. TABLA DE CATEGORÍAS (OPCIONAL)
-- =====================================================
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  color TEXT, -- Color hex para UI (#3B82F6)
  icon TEXT, -- Emoji o nombre de icono
  article_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insertar categorías iniciales
INSERT INTO categories (slug, name, description, color, icon) VALUES
  ('salud-mental', 'Salud Mental', 'Artículos sobre probióticos y bienestar mental', '#8B5CF6', '🧠'),
  ('belleza-salud', 'Belleza y Salud', 'Probióticos para piel, cabello y belleza', '#EC4899', '💆‍♀️'),
  ('salud-humana', 'Salud Humana', 'Probióticos y salud general del ser humano', '#10B981', '🏥'),
  ('alimentacion', 'Alimentación', 'Alimentos fermentados y nutrición probiótica', '#F59E0B', '🥗'),
  ('nutricion-animal', 'Nutrición Animal', 'Probióticos en mascotas y ganadería', '#6366F1', '🐾'),
  ('agricultura', 'Agricultura', 'Probióticos para cultivos sostenibles', '#22C55E', '🌱'),
  ('salud-materno-infantil', 'Salud Materno-Infantil', 'Probióticos en embarazo y lactancia', '#F472B6', '🤱'),
  ('salud-digestiva', 'Salud Digestiva', 'Probióticos para sistema digestivo', '#14B8A6', '🔬'),
  ('nutricion', 'Nutrición', 'Probióticos y nutrición general', '#EAB308', '🍎'),
  ('salud-infantil', 'Salud Infantil', 'Probióticos para niños', '#06B6D4', '👶'),
  ('salud', 'Salud', 'Artículos generales de salud', '#3B82F6', '💊')
ON CONFLICT (slug) DO NOTHING;

-- 7. POLÍTICAS DE ROW LEVEL SECURITY (RLS)
-- =====================================================
-- Habilitar RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Política: Todos pueden leer artículos publicados
CREATE POLICY "Anyone can read published articles" 
  ON articles FOR SELECT 
  USING (status = 'published');

-- Política: Solo autenticados pueden editar (para futuro panel admin)
CREATE POLICY "Authenticated users can insert articles" 
  ON articles FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update articles" 
  ON articles FOR UPDATE 
  TO authenticated 
  USING (true);

-- Política: Todos pueden leer categorías
CREATE POLICY "Anyone can read categories" 
  ON categories FOR SELECT 
  USING (true);

-- 8. VISTA PARA ARTÍCULOS CON ESTADÍSTICAS
-- =====================================================
CREATE OR REPLACE VIEW articles_with_stats AS
SELECT 
  a.*,
  c.name as category_name,
  c.color as category_color,
  c.icon as category_icon,
  EXTRACT(EPOCH FROM (NOW() - a.published_at)) / 86400 AS days_since_published,
  CASE 
    WHEN a.published_at > NOW() - INTERVAL '7 days' THEN true 
    ELSE false 
  END AS is_new
FROM articles a
LEFT JOIN categories c ON a.category = c.slug
WHERE a.status = 'published';

-- 9. FUNCIONES ÚTILES PARA CONSULTAS
-- =====================================================

-- Función: Obtener artículos relacionados (por categoría)
CREATE OR REPLACE FUNCTION get_related_articles(article_slug TEXT, max_results INTEGER DEFAULT 3)
RETURNS TABLE (
  id UUID,
  slug TEXT,
  title TEXT,
  description TEXT,
  image_url TEXT,
  category TEXT,
  published_at TIMESTAMPTZ,
  read_time TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id, a.slug, a.title, a.description, a.image_url, 
    a.category, a.published_at, a.read_time
  FROM articles a
  WHERE 
    a.category = (SELECT a2.category FROM articles a2 WHERE a2.slug = article_slug)
    AND a.slug != article_slug
    AND a.status = 'published'
  ORDER BY a.published_at DESC
  LIMIT max_results;
END;
$$ LANGUAGE plpgsql;

-- Función: Búsqueda avanzada con ranking
CREATE OR REPLACE FUNCTION search_articles(search_query TEXT)
RETURNS TABLE (
  id UUID,
  slug TEXT,
  title TEXT,
  description TEXT,
  image_url TEXT,
  category TEXT,
  rank REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id, a.slug, a.title, a.description, a.image_url, a.category,
    ts_rank(a.searchable, websearch_to_tsquery('spanish', search_query)) AS rank
  FROM articles a
  WHERE 
    a.searchable @@ websearch_to_tsquery('spanish', search_query)
    AND a.status = 'published'
  ORDER BY rank DESC
  LIMIT 20;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FIN DEL SCRIPT
-- =====================================================

-- VERIFICAR INSTALACIÓN:
SELECT 'articles' as table_name, COUNT(*) as total_rows FROM articles
UNION ALL
SELECT 'categories' as table_name, COUNT(*) as total_rows FROM categories;
