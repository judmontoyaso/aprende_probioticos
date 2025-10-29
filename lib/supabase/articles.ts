import { supabase } from './client';
import type { Article, ArticleWithStats } from './types';

/**
 * Obtener todos los artículos publicados ordenados por fecha
 */
export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
  
  return data;
}

/**
 * Obtener artículo por slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
    
  if (error) {
    if (error.code === 'PGRST116') {
      // No encontrado
      return null;
    }
    console.error('Error fetching article:', error);
    throw error;
  }
  
  return data;
}

/**
 * Obtener artículos con estadísticas (usando la vista)
 */
export async function getArticlesWithStats(): Promise<ArticleWithStats[]> {
  const { data, error } = await supabase
    .from('articles_with_stats')
    .select('*')
    .order('published_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching articles with stats:', error);
    throw error;
  }
  
  return data;
}

/**
 * Obtener artículos destacados
 */
export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(limit);
    
  if (error) {
    console.error('Error fetching featured articles:', error);
    throw error;
  }
  
  return data;
}

/**
 * Obtener artículos por categoría
 */
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .eq('category', category)
    .order('published_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching articles by category:', error);
    throw error;
  }
  
  return data;
}

/**
 * Buscar artículos (full-text search)
 */
export async function searchArticles(query: string): Promise<Article[]> {
  const { data, error } = await supabase
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .rpc('search_articles', { search_query: query } as any);
    
  if (error) {
    console.error('Error searching articles:', error);
    throw error;
  }
  
  return data as unknown as Article[];
}

/**
 * Obtener artículos relacionados
 */
export async function getRelatedArticles(slug: string, limit = 3): Promise<Article[]> {
  const { data, error } = await supabase
    .rpc('get_related_articles', { 
      article_slug: slug,
      max_results: limit 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
    
  if (error) {
    console.error('Error fetching related articles:', error);
    throw error;
  }
  
  return data as unknown as Article[];
}

/**
 * Incrementar vistas de un artículo
 */
export async function incrementViews(slug: string): Promise<void> {
  const { error } = await supabase
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .rpc('increment_article_views', { article_slug: slug } as any);
  
  if (error) {
    console.error('Error incrementing views:', error);
  }
}

/**
 * Obtener todos los slugs para generateStaticParams
 */
export async function getAllArticleSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('slug')
    .eq('status', 'published')
    .eq('use_template', true);
    
  if (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
  
  return (data || []).map((article: { slug: string }) => article.slug);
}

/**
 * Obtener artículos recientes
 */
export async function getRecentArticles(limit = 5): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);
    
  if (error) {
    console.error('Error fetching recent articles:', error);
    throw error;
  }
  
  return data;
}

/**
 * Obtener categorías disponibles
 */
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
    
  if (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
  
  return data;
}

/**
 * Contar artículos totales
 */
export async function getArticleCount(): Promise<number> {
  const { count, error } = await supabase
    .from('articles')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');
    
  if (error) {
    console.error('Error counting articles:', error);
    throw error;
  }
  
  return count || 0;
}

// =====================================================
// FUNCIONES DE ADMINISTRACIÓN (CREATE, UPDATE, DELETE)
// =====================================================

/**
 * Crear un nuevo artículo
 */
export async function createArticle(articleData: Partial<Article>): Promise<Article> {
  const { data, error } = await supabase
    .from('articles')
    .insert([articleData as never])
    .select()
    .single();
    
  if (error) {
    console.error('Error creating article:', error);
    throw error;
  }
  
  return data;
}

/**
 * Actualizar un artículo existente
 */
export async function updateArticle(slug: string, articleData: Partial<Article>): Promise<Article> {
  const { data, error } = await supabase
    .from('articles')
    .update(articleData as never)
    .eq('slug', slug)
    .select()
    .single();
    
  if (error) {
    console.error('Error updating article:', error);
    throw error;
  }
  
  return data;
}

/**
 * Eliminar un artículo
 */
export async function deleteArticle(slug: string): Promise<void> {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('slug', slug);
    
  if (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
}

/**
 * Obtener todos los artículos (incluyendo borradores) - Solo para admin
 */
export async function getAllArticlesAdmin(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching all articles:', error);
    throw error;
  }
  
  return data;
}
