/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://probioticosparatodos.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin/' },
    ],
    additionalSitemaps: [
      'https://probioticosparatodos.com/sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/cookies'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  // Configuración internacional para SEO
  transform: async (config, path) => {
    // Configuración por defecto
    const defaultTransform = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      // Agregar información de idioma y países objetivo
      alternateRefs: [
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-ES',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-MX',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-AR',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-CO',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-PE',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-VE',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-CL',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-EC',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-GT',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-CU',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-BO',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-DO',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-HN',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-PY',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-SV',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-NI',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-CR',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-PA',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-UY',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'es-US',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'x-default',
        },
      ],
    };

    // Prioridades específicas para páginas importantes
    if (path === '/') {
      defaultTransform.priority = 1.0;
      defaultTransform.changefreq = 'daily';
    } else if (path.includes('/tipos/') || path.includes('/beneficios') || path.includes('/como-elegir')) {
      defaultTransform.priority = 0.9;
      defaultTransform.changefreq = 'weekly';
    } else if (path.includes('/condiciones/') || path.includes('/recetas/')) {
      defaultTransform.priority = 0.8;
      defaultTransform.changefreq = 'weekly';
    }

    return defaultTransform;
  },
} 