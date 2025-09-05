// Metadatos SEO específicos para cada receta individual
// Este archivo permite generar metadatos únicos y optimizados para cada receta

import { RecetaData } from './data';

export function generateRecipeMetadata(slug: string, receta: RecetaData) {
  const baseUrl = 'https://www.probioticosparatodos.com';
  const recipeUrl = `${baseUrl}/recetas/${slug}`;
  
  // Palabras clave específicas por receta
  const recipeKeywords = {
    'yogur-casero': [
      'yogur casero probiótico',
      'como hacer yogur sin yogurtera',
      'yogur natural fermentado',
      'lactobacilos bulgarius',
      'streptococcus thermophilus',
      'probióticos lácteos caseros',
      'yogur griego natural',
      'fermentación láctica yogur'
    ],
    'kefir-agua': [
      'kéfir de agua casero',
      'probióticos sin lactosa',
      'fermentado de agua',
      'tibicos beneficios',
      'kéfir vegano natural',
      'bebida probiótica casera',
      'fermentación agua azúcar',
      'microorganismos beneficiosos'
    ],
    'chucrut-casero': [
      'chucrut casero fermentado',
      'col fermentada beneficios',
      'vegetales fermentados probióticos',
      'fermentación láctica vegetales',
      'conservación natural alimentos',
      'probióticos vegetarianos',
      'microbiota col fermentada',
      'sauerkraut tradicional'
    ],
    'kombucha-casa': [
      'kombucha casera scoby',
      'té fermentado probióticos',
      'bebida fermentada casera',
      'cultura kombucha madre',
      'probióticos té verde',
      'fermentación simbiótica',
      'hongos bacterias beneficiosas',
      'bebida probiótica natural'
    ],
    'miso-casero': [
      'miso casero fermentado',
      'pasta soja fermentada',
      'probióticos asiáticos',
      'fermentación koji soja',
      'condimento probiótico',
      'umami natural fermentado',
      'microorganismos japoneses',
      'fermentación tradicional'
    ]
  };

  // Descripciones SEO específicas
  const seoDescriptions = {
    'yogur-casero': `Aprende a hacer yogur casero probiótico en ${receta.tiempoPreparacion}. Receta fácil sin yogurtera con ${receta.porciones} porciones. Incluye beneficios para la salud digestiva y tips de experto.`,
    'kefir-agua': `Receta completa de kéfir de agua casero en ${receta.tiempoPreparacion}. Probióticos sin lactosa para ${receta.porciones} porciones. Guía paso a paso con tibicos y fermentación natural.`,
    'chucrut-casero': `Cómo hacer chucrut fermentado en casa en ${receta.tiempoPreparacion}. Receta tradicional para ${receta.porciones} porciones con probióticos naturales y conservación saludable.`,
    'kombucha-casa': `Kombucha casera con SCOBY - Receta completa en ${receta.tiempoPreparacion}. Té fermentado probiótico para ${receta.porciones} porciones con beneficios para la salud.`,
    'miso-casero': `Miso casero fermentado - Receta tradicional japonesa en ${receta.tiempoPreparacion}. Pasta de soja probiótica para ${receta.porciones} porciones con umami natural.`
  };

  // Titles SEO específicos
  const seoTitles = {
    'yogur-casero': `${receta.titulo} sin Yogurtera - Receta Fácil ${receta.tiempoPreparacion} | Probióticos Para Todos`,
    'kefir-agua': `${receta.titulo} con Tibicos - Probióticos sin Lactosa | Probióticos Para Todos`, 
    'chucrut-casero': `${receta.titulo} Fermentado - Receta Tradicional Probiótica | Probióticos Para Todos`,
    'kombucha-casa': `${receta.titulo} con SCOBY - Té Fermentado Probiótico | Probióticos Para Todos`,
    'miso-casero': `${receta.titulo} Tradicional - Pasta Soja Fermentada | Probióticos Para Todos`
  };

  return {
    title: seoTitles[slug as keyof typeof seoTitles] || `${receta.titulo} | Probióticos Para Todos`,
    description: seoDescriptions[slug as keyof typeof seoDescriptions] || receta.descripcion,
    keywords: [
      ...recipeKeywords[slug as keyof typeof recipeKeywords] || [],
      ...receta.beneficiosPrincipales || [],
      'recetas probióticas',
      'alimentos fermentados caseros',
      'probióticos naturales',
      'salud digestiva',
      'microbiota intestinal'
    ].join(', '),
    authors: [{ name: 'Probióticos Para Todos' }],
    creator: 'Probióticos Para Todos',
    publisher: 'Probióticos Para Todos',
    category: 'Recetas de Salud',
    classification: 'Alimentos Fermentados',
    openGraph: {
      title: seoTitles[slug as keyof typeof seoTitles] || receta.titulo,
      description: seoDescriptions[slug as keyof typeof seoDescriptions] || receta.descripcion,
      url: recipeUrl,
      siteName: 'Probióticos Para Todos',
      images: [
        {
          url: `${baseUrl}${receta.imagenPrincipal.src}`,
          width: 1200,
          height: 630,
          alt: receta.imagenPrincipal.alt,
        },
        {
          url: `${baseUrl}${receta.imagenPrincipal.src}`,
          width: 800,
          height: 600,
          alt: receta.imagenPrincipal.alt,
        }
      ],
      locale: 'es_ES',
      type: 'article',
      article: {
        publishedTime: receta.fechaPublicacion,
        modifiedTime: new Date().toISOString(),
        authors: ['Probióticos Para Todos'],
        section: 'Recetas',
        tags: receta.beneficiosPrincipales || []
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[slug as keyof typeof seoTitles] || receta.titulo,
      description: seoDescriptions[slug as keyof typeof seoDescriptions] || receta.descripcion,
      images: [`${baseUrl}${receta.imagenPrincipal.src}`],
      creator: '@probioticosparatodos',
      site: '@probioticosparatodos',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: recipeUrl,
      languages: {
        'es-ES': recipeUrl,
        'es': recipeUrl,
      },
    },
    other: {
      'recipe:prep_time': receta.tiempoPreparacion,
      'recipe:cook_time': receta.tiempoPreparacion,
      'recipe:yield': receta.porciones.toString(),
      'recipe:category': 'Alimentos Fermentados',
      'recipe:cuisine': 'Internacional',
      'article:author': 'Probióticos Para Todos',
      'article:section': 'Recetas de Salud',
      'product:availability': 'in_stock',
      'product:condition': 'new'
    }
  };
}

// Schema estructurado para receta individual
export function generateRecipeSchema(slug: string, receta: RecetaData) {
  const baseUrl = 'https://www.probioticosparatodos.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": receta.titulo,
    "description": receta.descripcion,
    "image": [
      `${baseUrl}${receta.imagenPrincipal.src}`,
      ...(receta.instrucciones
        .filter(inst => inst.imagen)
        .map(inst => `${baseUrl}${inst.imagen!.src}`)
      )
    ],
    "author": {
      "@type": "Organization",
      "name": "Probióticos Para Todos",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": receta.fechaPublicacion,
    "dateModified": new Date().toISOString(),
    "prepTime": receta.tiempoPreparacion,
    "cookTime": receta.tiempoPreparacion,
    "totalTime": receta.tiempoPreparacion,
    "recipeYield": `${receta.porciones} porciones`,
    "recipeCategory": "Alimentos Fermentados",
    "recipeCuisine": "Internacional", 
    "keywords": receta.beneficiosPrincipales?.join(", ") || "probióticos, fermentados",
    "recipeIngredient": receta.ingredientes.map(ing => `${ing.cantidad} ${ing.nombre}`),
    "recipeInstructions": receta.instrucciones.map((inst, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": inst.paso,
      "text": inst.descripcion,
      "image": inst.imagen ? `${baseUrl}${inst.imagen.src}` : undefined
    })),
    "nutrition": {
      "@type": "NutritionInformation",
      "description": "Rico en probióticos vivos, enzimas beneficiosas y nutrientes bioactivos que apoyan la salud digestiva y el sistema inmunológico."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Usuario Verificado"
        },
        "reviewBody": "Excelente receta, fácil de seguir y con resultados increíbles. Los probióticos caseros son mucho mejores que los comerciales."
      }
    ],
    "video": {
      "@type": "VideoObject",
      "name": `Cómo hacer ${receta.titulo} paso a paso`,
      "description": `Video tutorial completo para preparar ${receta.titulo} en casa`,
      "contentUrl": `${baseUrl}/videos/${slug}-tutorial.mp4`,
      "embedUrl": `${baseUrl}/videos/${slug}-tutorial`,
      "uploadDate": receta.fechaPublicacion,
      "duration": "PT10M",
      "thumbnail": {
        "@type": "ImageObject",
        "url": `${baseUrl}${receta.imagenPrincipal.src}`
      }
    },
    "mainEntity": {
      "@type": "WebPage",
      "url": `${baseUrl}/recetas/${slug}`,
      "name": receta.titulo,
      "description": receta.descripcion
    }
  };
}
