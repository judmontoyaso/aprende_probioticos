import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tipos de Probióticos: Guía Completa de Géneros y Especies 2024',
  description: 'Descubre los diferentes tipos de probióticos: Lactobacillus, Bifidobacterium, Saccharomyces. Guía completa con beneficios específicos de cada género y especie.',
  keywords: [
    'tipos de probióticos',
    'géneros probióticos',
    'especies probióticas',
    'Lactobacillus',
    'Bifidobacterium',
    'Saccharomyces boulardii',
    'cepas probióticas',
    'clasificación probióticos',
    'bacterias lácticas',
    'bacterias bífidas',
    'levaduras probióticas',
    'microorganismos beneficiosos',
    'diversidad microbiana',
    'especificidad de cepas',
    'nomenclatura probióticos'
  ],
  authors: [{ name: 'Probióticos Para Todos' }],
  creator: 'Probióticos Para Todos',
  publisher: 'Probióticos Para Todos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Tipos de Probióticos: Guía Completa de Géneros y Especies',
    description: 'Explora los diferentes tipos de probióticos, desde Lactobacillus hasta Saccharomyces. Conoce sus beneficios específicos y aplicaciones.',
    url: 'https://www.probioticosparatodos.com/tipos',
    siteName: 'Probióticos Para Todos',
    images: [
      {
        url: 'https://www.probioticosparatodos.com/images/tipos_probioticos.png',
        width: 1200,
        height: 630,
        alt: 'Tipos y clasificación de probióticos - Géneros principales',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tipos de Probióticos: Guía Completa de Géneros y Especies',
    description: 'Descubre los diferentes tipos de probióticos y sus beneficios específicos para la salud.',
    images: ['https://www.probioticosparatodos.com/images/tipos_probioticos.png'],
    creator: '@probioticosparatodos',
  },
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/tipos',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  category: 'Salud',
  classification: 'Educación en Salud',
};

export default function TiposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
