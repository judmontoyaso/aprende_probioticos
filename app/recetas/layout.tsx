import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recetas Probióticas Caseras: Fermentados Naturales para tu Salud | Probióticos Para Todos',
  description: 'Descubre 10+ recetas fáciles de alimentos fermentados caseros: yogur, kéfir, kombucha, chucrut y más. Guías paso a paso con beneficios probióticos científicamente comprobados.',
  keywords: [
    'recetas probióticas',
    'alimentos fermentados caseros',
    'yogur casero',
    'kéfir de agua',
    'kombucha casera',
    'chucrut fermentado',
    'miso casero',
    'fermentación láctica',
    'probióticos naturales',
    'bacterias beneficiosas',
    'microbiota intestinal',
    'salud digestiva',
    'recetas saludables',
    'fermentados tradicionales'
  ].join(', '),
  authors: [{ name: 'Probióticos Para Todos' }],
  creator: 'Probióticos Para Todos',
  publisher: 'Probióticos Para Todos',
  category: 'Salud y Nutrición',
  classification: 'Recetas de Alimentos Fermentados',
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
    creator: '@probioticosparatodos',
    site: '@probioticosparatodos',
  },
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
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/recetas',
    languages: {
      'es-ES': 'https://www.probioticosparatodos.com/recetas',
      'es': 'https://www.probioticosparatodos.com/recetas',
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-yandex',
    yahoo: 'tu-codigo-yahoo',
    other: {
      'msvalidate.01': 'tu-codigo-bing',
      'facebook-domain-verification': 'tu-codigo-facebook',
      'p:domain_verify': 'tu-codigo-pinterest'
    }
  },
  other: {
    'theme-color': '#2E8B57',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Recetas Probióticas',
    'application-name': 'Probióticos Para Todos',
    'msapplication-TileColor': '#2E8B57',
    'msapplication-config': '/browserconfig.xml',
    'fb:app_id': 'tu-facebook-app-id',
    'article:publisher': 'https://www.facebook.com/probioticosparatodos',
    'article:author': 'https://www.facebook.com/probioticosparatodos',
    'article:section': 'Recetas de Salud',
    'article:tag': 'probióticos, fermentados, salud digestiva, recetas caseras',
    'og:see_also': [
      'https://www.probioticosparatodos.com/beneficios',
      'https://www.probioticosparatodos.com/tipos',
      'https://www.probioticosparatodos.com/como-elegir'
    ].join(',')
  }
};

export default function RecetasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
