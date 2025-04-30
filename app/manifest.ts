import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Probióticos Para Todos',
    short_name: 'Probióticos',
    description: 'Información basada en evidencia científica sobre probióticos',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#15803d', // verde-600
    lang: 'es',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    orientation: 'portrait',
    categories: ['health', 'education', 'lifestyle'],
    dir: 'ltr',
    prefer_related_applications: false,
    related_applications: [],
    id: 'probioticos-para-todos',
    scope: '/',
    shortcuts: [
      {
        name: '¿Qué son los probióticos?',
        short_name: '¿Qué son?',
        description: 'Aprende qué son los probióticos y cómo funcionan',
        url: '/que-son',
        icons: [{ src: '/icons/bacterias_probioticos.png', sizes: '96x96' }]
      },
      {
        name: 'Beneficios de los probióticos',
        short_name: 'Beneficios',
        description: 'Descubre los beneficios de los probióticos para la salud',
        url: '/beneficios',
        icons: [{ src: '/icons/salud_bienestar.png', sizes: '96x96' }]
      },
      {
        name: 'Cómo elegir probióticos',
        short_name: 'Elegir',
        description: 'Guía para seleccionar los probióticos adecuados',
        url: '/como-elegir',
        icons: [{ src: '/icons/suplementos_capsulas.png', sizes: '96x96' }]
      }
    ]
  };
} 