import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.probioticosparatodos.com';
  
  // Definir todas las rutas del sitio
  const mainRoutes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' },
    { path: '/que-son', priority: 0.9, changeFreq: 'monthly' },
    { path: '/beneficios', priority: 0.9, changeFreq: 'monthly' },
    { path: '/como-elegir', priority: 0.9, changeFreq: 'monthly' },
    { path: '/referencias', priority: 0.7, changeFreq: 'monthly' },
  ];
  
  // Páginas legales
  const legalRoutes = [
    { path: '/politica-privacidad', priority: 0.5, changeFreq: 'yearly' },
    { path: '/cookies', priority: 0.5, changeFreq: 'yearly' },
  ];
  
  // Combinar todas las rutas y formatearlas
  const allRoutes = [...mainRoutes, ...legalRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq as 'weekly' | 'monthly' | 'yearly',
    priority: route.priority,
  }));

  return allRoutes;
} 