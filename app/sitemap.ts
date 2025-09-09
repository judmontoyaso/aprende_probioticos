import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://probioticosparatodos.com';
  
  // Páginas principales
  const mainRoutes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' },
    { path: '/que-son', priority: 0.9, changeFreq: 'monthly' },
    { path: '/beneficios', priority: 0.9, changeFreq: 'monthly' },
    { path: '/como-elegir', priority: 0.9, changeFreq: 'monthly' },
    { path: '/tipos', priority: 0.8, changeFreq: 'monthly' },
    { path: '/donde-comprar', priority: 0.8, changeFreq: 'monthly' },
    { path: '/recetas', priority: 0.8, changeFreq: 'weekly' },
    { path: '/alimentos-fermentados', priority: 0.8, changeFreq: 'monthly' },
    { path: '/blog', priority: 0.8, changeFreq: 'weekly' },
    { path: '/agricultura', priority: 0.6, changeFreq: 'monthly' },
  ];

  // Páginas de tipos de probióticos (dinámicas - solo las que existen)
  const tiposRoutes = [
    { path: '/tipos/lactobacillus', priority: 0.7, changeFreq: 'monthly' },
  ];

  // Páginas de recetas (dinámicas - solo las que existen)
  const recetasRoutes = [
    { path: '/recetas/yogur-casero', priority: 0.6, changeFreq: 'monthly' },
    { path: '/recetas/kefir-agua', priority: 0.6, changeFreq: 'monthly' },
    { path: '/recetas/chucrut-casero', priority: 0.6, changeFreq: 'monthly' },
    { path: '/recetas/kombucha-casa', priority: 0.6, changeFreq: 'monthly' },
    { path: '/recetas/miso-casero', priority: 0.5, changeFreq: 'monthly' },
    { path: '/recetas/yogur-cultivos-puros', priority: 0.5, changeFreq: 'monthly' },
  ];

  // Páginas del blog
  const blogRoutes = [
    { path: '/blog/alimentos-fermentados', priority: 0.7, changeFreq: 'monthly' },
    { path: '/blog/salud-humana', priority: 0.7, changeFreq: 'monthly' },
    { path: '/blog/nutricion-animal', priority: 0.6, changeFreq: 'monthly' },
    { path: '/blog/agricultura-sostenible', priority: 0.6, changeFreq: 'monthly' },
  ];

  // Páginas institucionales
  const institutionalRoutes = [
    { path: '/sobre-nosotros', priority: 0.5, changeFreq: 'yearly' },
    { path: '/contacto', priority: 0.6, changeFreq: 'monthly' },
  ];

  // Páginas legales
  const legalRoutes = [
    { path: '/politica-privacidad', priority: 0.3, changeFreq: 'yearly' },
    { path: '/cookies', priority: 0.3, changeFreq: 'yearly' },
    { path: '/terminos-servicio', priority: 0.3, changeFreq: 'yearly' },
    { path: '/descargo-responsabilidad', priority: 0.3, changeFreq: 'yearly' },
  ];

  // Combinar todas las rutas
  const allRoutes = [
    ...mainRoutes,
    ...tiposRoutes,
    ...recetasRoutes,
    ...blogRoutes,
    ...institutionalRoutes,
    ...legalRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq as 'weekly' | 'monthly' | 'yearly',
    priority: route.priority,
  }));

  return allRoutes;
} 