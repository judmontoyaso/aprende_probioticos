import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recetas Probióticas Caseras: Fermentados Naturales para tu Salud | Probióticos Para Todos',
  description: 'Descubre 10+ recetas fáciles de alimentos fermentados caseros: yogur, kéfir, kombucha, chucrut y más. Guías paso a paso con beneficios probióticos científicamente comprobados.',
  keywords: 'recetas probióticas, alimentos fermentados caseros, yogur casero, kéfir, kombucha, chucrut, fermentación, probióticos naturales, bacterias beneficiosas, microbiota intestinal',
  openGraph: {
    title: 'Recetas Probióticas Caseras: Fermentados Naturales para tu Salud',
    description: 'Guías completas para preparar alimentos fermentados en casa. Yogur, kéfir, kombucha, chucrut y más recetas probióticas con beneficios para la salud.',
    url: 'https://www.probioticosparatodos.com/recetas',
    siteName: 'Probióticos Para Todos',
    images: [
      {
        url: 'https://www.probioticosparatodos.com/images/hero-recetas.png',
        width: 1200,
        height: 630,
        alt: 'Recetas probióticas caseras - alimentos fermentados naturales',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recetas Probióticas Caseras: Fermentados Naturales para tu Salud',
    description: 'Guías completas para preparar alimentos fermentados en casa con beneficios probióticos.',
    images: ['https://www.probioticosparatodos.com/images/hero-recetas.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/recetas',
  },
};

export default function RecetasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
