import { tiendasData } from '../data';
import Link from 'next/link';
import { Metadata } from 'next';
import BuscadorPageClient from './BuscadorPageClient';

// Metadatos para SEO
export const metadata: Metadata = {
  title: 'Buscador de Tiendas de Probióticos: Encuentra Tu Tienda Ideal | Probióticos Para Todos',
  description: 'Busca y filtra tiendas de probióticos por país, ciudad y tipo. Encuentra herbolarios, farmacias y tiendas naturales verificadas con nuestro buscador avanzado.',
  keywords: ['buscador probióticos', 'filtrar tiendas probióticos', 'encontrar herbolarios', 'tiendas naturales cerca', 'directorio probióticos', 'búsqueda avanzada probióticos'],
  openGraph: {
    title: 'Buscador Avanzado de Tiendas de Probióticos',
    description: 'Encuentra la tienda de probióticos perfecta con nuestro buscador. Filtra por país, ciudad y tipo de establecimiento.',
    url: 'https://www.probioticosparatodos.com/donde-comprar/buscador',
    siteName: 'Probióticos Para Todos',
    images: [{
      url: 'https://www.probioticosparatodos.com/images/buscador-probioticos.png',
      width: 1200,
      height: 630,
      alt: 'Buscador de tiendas de probióticos'
    }],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buscador: Encuentra Tu Tienda de Probióticos Ideal',
    description: 'Busca y filtra tiendas verificadas de probióticos por ubicación y tipo.',
    images: ['https://www.probioticosparatodos.com/images/buscador-probioticos.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/donde-comprar/buscador'
  }
};

export default function BuscadorPage() {
  const paises = [...new Set(tiendasData.map(t => t.pais))];
  const tiposEstablecimiento = [...new Set(tiendasData.flatMap(t => t.tiposProbioticos || []))];

  // Search Schema
  const searchSchema = {
    "@context": "https://schema.org",
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.probioticosparatodos.com/donde-comprar/buscador?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.probioticosparatodos.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dónde Comprar",
        "item": "https://www.probioticosparatodos.com/donde-comprar"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Buscador",
        "item": "https://www.probioticosparatodos.com/donde-comprar/buscador"
      }
    ]
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(searchSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-aqua-squeeze to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biscay to-apple text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 text-white font-medium rounded-full text-sm backdrop-blur-sm">
                  🔍 Buscador Inteligente
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Encuentra Tu Tienda de Probióticos Ideal
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Descubre herbolarios, tiendas naturales y mercados orgánicos verificados donde comprar probióticos de calidad en tu ciudad.
              </p>
              
              {/* Breadcrumb */}
              <nav className="flex justify-center items-center space-x-2 text-white/80">
                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>→</span>
                <Link href="/donde-comprar" className="hover:text-white transition-colors">Dónde Comprar</Link>
                <span>→</span>
                <span className="text-white">Buscador</span>
              </nav>
            </div>
          </div>
        </section>

        <BuscadorPageClient 
          paises={paises} 
          tiposEstablecimiento={tiposEstablecimiento}
          tiendasData={tiendasData}
        />
      </main>
    </>
  );
}
