import { MetadataRoute } from 'next';
import { recetasData, recetaSlugs } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.probioticosparatodos.com';
  
  // Página principal de recetas
  const recipesPage = {
    url: `${baseUrl}/recetas`,
    lastModified: new Date('2024-12-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  // Páginas individuales de recetas
  const recipePages = recetaSlugs.map((slug: string) => {
    const receta = recetasData[slug];
    return {
      url: `${baseUrl}/recetas/${slug}`,
      lastModified: new Date(receta.fechaPublicacion),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });

  return [recipesPage, ...recipePages];
}
