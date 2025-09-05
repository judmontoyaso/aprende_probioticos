'use client';

import { recetasData, RecetaData } from '../recetas/data';

export default function RecipesSchema() {
  const recetasArray = Object.entries(recetasData);
  
  const recipeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Recetas Probióticas Caseras",
    "description": "Colección de recetas para preparar alimentos fermentados y probióticos en casa",
    "url": "https://www.probioticosparatodos.com/recetas",
    "numberOfItems": recetasArray.length,
    "itemListElement": recetasArray.map(([slug, receta]: [string, RecetaData], index: number) => ({
      "@type": "Recipe",
      "position": index + 1,
      "name": receta.titulo,
      "description": receta.descripcion,
      "image": `https://www.probioticosparatodos.com${receta.imagenPrincipal.src}`,
      "url": `https://www.probioticosparatodos.com/recetas/${slug}`,
      "author": {
        "@type": "Organization",
        "name": "Probióticos Para Todos"
      },
      "datePublished": receta.fechaPublicacion,
      "prepTime": receta.tiempoPreparacion,
      "cookTime": receta.tiempoPreparacion,
      "totalTime": receta.tiempoPreparacion,
      "recipeYield": `${receta.porciones} porciones`,
      "recipeCategory": "Alimentos Fermentados",
      "recipeCuisine": "Internacional",
      "keywords": receta.beneficiosPrincipales?.join(", ") || "probióticos, fermentados, salud digestiva",
      "nutrition": {
        "@type": "NutritionInformation",
        "description": "Rico en probióticos y enzimas beneficiosas para la salud digestiva"
      },
      "recipeIngredient": receta.ingredientes.map(ing => `${ing.cantidad} ${ing.nombre}`),
      "recipeInstructions": receta.instrucciones.map((instruccion, i: number) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "text": instruccion.descripcion,
        "name": instruccion.paso
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.probioticosparatodos.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Recetas",
        "item": "https://www.probioticosparatodos.com/recetas"
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Recetas Probióticas Caseras",
    "description": "Guías completas para preparar alimentos fermentados en casa con beneficios probióticos",
    "url": "https://www.probioticosparatodos.com/recetas",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Recetas de Alimentos Fermentados",
      "numberOfItems": recetasArray.length
    },
    "breadcrumb": breadcrumbStructuredData,
    "publisher": {
      "@type": "Organization",
      "name": "Probióticos Para Todos",
      "url": "https://www.probioticosparatodos.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.probioticosparatodos.com/logo.png"
      }
    },
    "dateModified": "2024-12-01",
    "datePublished": "2024-01-01",
    "inLanguage": "es-ES"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(recipeStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
    </>
  );
}
