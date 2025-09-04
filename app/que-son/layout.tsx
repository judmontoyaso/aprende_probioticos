import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Qué son los Probióticos? Guía Científica Completa 2024',
  description: 'Descubre qué son los probióticos, su historia, tipos principales, mecanismos de acción y aplicaciones en salud. Guía completa con evidencia científica actualizada.',
  keywords: [
    'probióticos',
    'microbioma intestinal',
    'bacterias beneficiosas',
    'Lactobacillus',
    'Bifidobacterium',
    'salud digestiva',
    'sistema inmunológico',
    'flora intestinal',
    'microorganismos vivos',
    'bienestar intestinal',
    'definición probióticos',
    'tipos de probióticos',
    'cómo funcionan probióticos',
    'historia probióticos',
    'evidencia científica probióticos'
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
    title: '¿Qué son los Probióticos? Guía Científica Completa',
    description: 'Descubre todo sobre los probióticos: definición, tipos, beneficios y aplicaciones. Guía respaldada por evidencia científica.',
    url: 'https://www.probioticosparatodos.com/que-son',
    siteName: 'Probióticos Para Todos',
    images: [
      {
        url: 'https://www.probioticosparatodos.com/images/mujer_exlpicando_probioticos.png',
        width: 1200,
        height: 630,
        alt: 'Mujer explicando qué son los probióticos - Guía completa',
      },
    ],
    locale: 'es_ES',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué son los Probióticos? Guía Científica Completa',
    description: 'Descubre todo sobre los probióticos: definición, tipos, beneficios y aplicaciones.',
    images: ['https://www.probioticosparatodos.com/images/mujer_exlpicando_probioticos.png'],
    creator: '@probioticosparatodos',
  },
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/que-son',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  category: 'Salud',
  classification: 'Educación en Salud',
};

export default function QueSonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
