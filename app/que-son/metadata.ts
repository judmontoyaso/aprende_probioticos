import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Qué son los Probióticos? Guía Científica Completa 2024 | Probióticos Para Todos',
  description: 'Descubre qué son los probióticos, su historia, tipos principales, mecanismos de acción y aplicaciones en salud. Guía científica completa con evidencia actualizada sobre microorganismos beneficiosos.',
  keywords: 'qué son probióticos, definición probióticos, tipos probióticos, Lactobacillus, Bifidobacterium, microbioma intestinal, bacterias beneficiosas, historia probióticos, Metchnikoff, salud digestiva',
  
  openGraph: {
    title: '¿Qué son los Probióticos? - Guía Científica Completa',
    description: 'Todo lo que necesitas saber sobre probióticos: definición, tipos, historia y aplicaciones en salud respaldadas por ciencia.',
    url: 'https://www.probioticosparatodos.com/que-son',
    siteName: 'Probióticos Para Todos',
    images: [
      {
        url: '/images/mujer_exlpicando_probioticos.png',
        width: 600,
        height: 350,
        alt: 'Mujer explicando qué son los probióticos - Guía científica completa'
      }
    ],
    locale: 'es_ES',
    type: 'article',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué son los Probióticos? - Guía Científica Completa',
    description: 'Todo sobre probióticos: definición, tipos, historia y aplicaciones respaldadas por ciencia.',
    images: ['/images/mujer_exlpicando_probioticos.png'],
  },
  
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/que-son',
  },
  
  other: {
    'article:author': 'Probióticos Para Todos',
    'article:section': 'Educación en Salud',
    'article:tag': 'probióticos, microbioma, salud digestiva, bacterias beneficiosas',
  },
};
