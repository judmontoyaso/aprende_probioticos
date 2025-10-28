# Estructura del Blog - Probióticos

## Resumen

El blog ha sido reorganizado para ser más escalable y mantenible. Ahora soporta dos tipos de artículos:

1. **Artículos personalizados**: Con páginas completamente customizadas (como los existentes)
2. **Artículos con plantilla**: Nuevos artículos que usan una plantilla estándar y contenido en Markdown

## Estructura de archivos

```
app/blog/
├── articles.ts                    # Lista centralizada de todos los artículos
├── page.tsx                       # Página principal del blog
├── content/                       # Archivos Markdown de los artículos
│   ├── probioticos-sistema-inmune.md
│   ├── probioticos-embarazo-lactancia.md
│   ├── probioticos-sindrome-intestino-irritable.md
│   ├── probioticos-perdida-peso.md
│   └── probioticos-ninos.md
├── [slug]/
│   └── page.tsx                   # Plantilla dinámica para nuevos artículos
├── eje-intestino-cerebro/
│   └── page.tsx                   # Artículo personalizado
├── probioticos-cabello-piel/
│   └── page.tsx                   # Artículo personalizado
├── salud-humana/
│   └── page.tsx                   # Artículo personalizado
├── alimentos-fermentados/
│   └── page.tsx                   # Artículo personalizado
├── nutricion-animal/
│   └── page.tsx                   # Artículo personalizado
└── agricultura-sostenible/
    └── page.tsx                   # Artículo personalizado
```

## Cómo agregar un nuevo artículo

### Opción 1: Artículo con plantilla (recomendado para artículos estándar)

1. **Crear el archivo Markdown** en `app/blog/content/nombre-articulo.md`
   - Usar Markdown estándar
   - Incluir headers, listas, enlaces, etc.
   - No necesita frontmatter

2. **Agregar metadata al array** en `app/blog/articles.ts`:
   ```typescript
   {
     slug: 'nombre-articulo',
     title: 'Título del artículo',
     description: 'Descripción breve',
     imageSrc: '/images/imagen.png',
     imageAlt: 'Texto alternativo',
     category: 'Categoría',
     date: 'DD de mes, YYYY',
     readTime: 'X min',
     featured: false,        // true para destacar
     useTemplate: true       // IMPORTANTE: true para usar plantilla
   }
   ```

3. **¡Listo!** El artículo aparecerá automáticamente en `/blog/nombre-articulo`

### Opción 2: Artículo personalizado (para diseños únicos)

1. **Crear carpeta** en `app/blog/nombre-articulo/`

2. **Crear archivo** `page.tsx` con el diseño personalizado

3. **Agregar metadata al array** en `app/blog/articles.ts`:
   ```typescript
   {
     slug: 'nombre-articulo',
     title: 'Título del artículo',
     description: 'Descripción breve',
     imageSrc: '/images/imagen.png',
     imageAlt: 'Texto alternativo',
     category: 'Categoría',
     date: 'DD de mes, YYYY',
     readTime: 'X min',
     featured: false,
     useTemplate: false      // false para usar página personalizada
   }
   ```

## Artículos actuales

### Con páginas personalizadas (`useTemplate: false`)
- `eje-intestino-cerebro` - Eje intestino-cerebro y estado de ánimo
- `probioticos-cabello-piel` - Probióticos para cabello y piel
- `salud-humana` - Salud humana integral
- `alimentos-fermentados` - Enciclopedia de fermentados
- `nutricion-animal` - Nutrición animal
- `agricultura-sostenible` - Agricultura sostenible

### Con plantilla Markdown (`useTemplate: true`)
- `probioticos-sistema-inmune` - Sistema inmunológico
- `probioticos-embarazo-lactancia` - Embarazo y lactancia
- `probioticos-sindrome-intestino-irritable` - SII
- `probioticos-perdida-peso` - Pérdida de peso
- `probioticos-ninos` - Guía para padres

## Características de la plantilla

La plantilla automática (`app/blog/[slug]/page.tsx`) incluye:

- ✅ SEO optimizado con metadata dinámica
- ✅ Breadcrumbs automáticos
- ✅ Imagen destacada
- ✅ Procesamiento de Markdown a HTML
- ✅ Estilos de prosa profesionales (Tailwind Typography)
- ✅ Artículos relacionados automáticos (por categoría)
- ✅ Call-to-action al final
- ✅ Diseño responsive
- ✅ Schema.org para SEO

## Formato del contenido Markdown

### Estructura recomendada

```markdown
# Título Principal del Artículo

## Introducción

Párrafo introductorio...

## Sección 1

Contenido...

### Subsección 1.1

Más contenido...

## Sección 2

Contenido...

### Listas

- Punto 1
- Punto 2
- Punto 3

### Listas numeradas

1. Primero
2. Segundo
3. Tercero

## Referencias científicas

1. Autor, et al. (2023). Título. *Revista*, volumen(número), páginas.
2. ...
```

### Elementos soportados

- Headers (H1-H6)
- Párrafos
- Listas (ordenadas y no ordenadas)
- Enlaces `[texto](url)`
- Énfasis `*cursiva*` y `**negrita**`
- Citas `> cita`
- Código inline `` `código` ``
- Bloques de código
- Imágenes `![alt](url)`

## Categorías disponibles

- Salud Mental
- Belleza y Salud
- Salud Humana
- Alimentación
- Nutrición Animal
- Agricultura
- Salud Materno-Infantil
- Salud Digestiva
- Nutrición
- Salud Infantil

## Mantenimiento

### Para actualizar un artículo con plantilla

1. Editar el archivo `.md` en `app/blog/content/`
2. Los cambios aparecerán automáticamente

### Para actualizar un artículo personalizado

1. Editar el archivo `page.tsx` en la carpeta del artículo
2. Modificar según sea necesario

### Para cambiar el orden o destacar artículos

1. Editar `app/blog/articles.ts`
2. Cambiar `featured: true` para destacar
3. Reordenar el array para cambiar el orden de aparición

## Tecnologías utilizadas

- **Next.js 14+**: Framework principal
- **TypeScript**: Tipado estático
- **Remark**: Procesamiento de Markdown
- **Remark-HTML**: Conversión Markdown → HTML
- **Tailwind CSS**: Estilos
- **Tailwind Typography**: Estilos de prosa

## Notas importantes

1. **Imágenes**: Asegúrate de que las imágenes existan en `/public/images/`
2. **Slugs**: Deben ser únicos y usar formato kebab-case
3. **Fechas**: Formato consistente "DD de mes, YYYY"
4. **SEO**: Cada artículo genera metadata automática
5. **Build**: Los artículos con plantilla se generan estáticamente en build time
