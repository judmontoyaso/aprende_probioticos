import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://probioticosparatodos.com'
  
  // Páginas principales con imágenes optimizadas
  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      images: [
        `${baseUrl}/images/probiotics-hero.png`,
        `${baseUrl}/images/beneficios-probioticos-salud.png`, 
        `${baseUrl}/images/tipos-probioticos-lactobacillus-bifidobacterium.png`,
        `${baseUrl}/images/alimentos-fermentados-yogur-kefir.png`,
        `${baseUrl}/images/suplementos-probioticos-capsulas.png`
      ]
    },
    {
      url: `${baseUrl}/beneficios`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tipos`,
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alimentos-fermentados`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/como-elegir`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/condiciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/recetas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]

  return pages
}
