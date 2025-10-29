'use client';

import { useEffect } from 'react';

interface InternationalSEOProps {
  baseUrl?: string;
  defaultLanguage?: string;
  siteName?: string;
}

export default function InternationalSEO({ 
  baseUrl = 'https://probioticosparatodos.com',
  defaultLanguage = 'es',
  siteName = 'Probióticos Para Todos'
}: InternationalSEOProps) {

  useEffect(() => {
    // Remover meta tags existentes para evitar duplicados
    const existingGeoTags = document.querySelectorAll('meta[name^="geo."], meta[name="ICBM"], meta[name="DC.title"]');
    existingGeoTags.forEach(tag => tag.remove());

    // Configuración de meta tags para SEO geográfico e internacional
    const metaTags = [
      // Geolocalización general para países hispanohablantes
      { name: 'geo.region', content: 'ES;MX;AR;CO;PE;VE;CL;EC;GT;CU;BO;DO;HN;PY;SV;NI;CR;PA;UY;US' },
      { name: 'geo.placename', content: 'España, México, Argentina, Colombia, Perú, Venezuela, Chile, Ecuador, Guatemala, Cuba, Bolivia, República Dominicana, Honduras, Paraguay, El Salvador, Nicaragua, Costa Rica, Panamá, Uruguay, Estados Unidos' },
      { name: 'language', content: defaultLanguage },
      { name: 'audience', content: 'all' },
      { name: 'distribution', content: 'global' },
      { name: 'target', content: 'all' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Dublin Core para mejor indexación internacional
      { name: 'DC.title', content: siteName },
      { name: 'DC.creator', content: siteName },
      { name: 'DC.language', content: 'es' },
      { name: 'DC.coverage', content: 'España, Latinoamérica, Estados Unidos' },
      { name: 'DC.type', content: 'text' },
      { name: 'DC.format', content: 'text/html' },
      
      // Configuración para motores de búsqueda internacionales
      { name: 'google', content: 'notranslate' }, // Evita traducciones automáticas
      { name: 'format-detection', content: 'telephone=no' },
    ];

    // Crear y agregar meta tags
    metaTags.forEach(({ name, content }) => {
      const metaTag = document.createElement('meta');
      metaTag.name = name;
      metaTag.content = content;
      document.head.appendChild(metaTag);
    });

    // Agregar link alternativo para sitemap internacional
    const sitemapLink = document.createElement('link');
    sitemapLink.rel = 'sitemap';
    sitemapLink.type = 'application/xml';
    sitemapLink.href = `${baseUrl}/sitemap.xml`;
    document.head.appendChild(sitemapLink);

    // Cleanup function
    return () => {
      const addedTags = document.querySelectorAll('meta[name^="geo."], meta[name="ICBM"], meta[name="DC."], meta[name="google"], meta[name="format-detection"], meta[name="HandheldFriendly"], meta[name="MobileOptimized"], meta[name="apple-mobile-web-app-capable"], meta[name="apple-mobile-web-app-status-bar-style"], meta[name="language"], meta[name="audience"], meta[name="distribution"], meta[name="target"], link[rel="sitemap"]');
      addedTags.forEach(tag => tag.remove());
    };
  }, [baseUrl, defaultLanguage, siteName]);

  return null;
}
