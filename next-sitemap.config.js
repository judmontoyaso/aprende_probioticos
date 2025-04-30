/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://probioticosparatodos.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin/' },
    ],
  },
  exclude: ['/admin/*', '/cookies'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
} 