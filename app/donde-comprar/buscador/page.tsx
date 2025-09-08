import Link from 'next/link';
import { Metadata } from 'next';
import BuscadorClient from './BuscadorClient';
import SEOSchema from '../../components/SEOSchema';

// Metadatos para SEO
export const metadata: Metadata = {
  title: 'Buscador de Tiendas de Probióticos: Encuentra Tu Tienda Ideal | Probióticos Para Todos',
  description: 'Busca y filtra tiendas de probióticos por país, ciudad y tipo de establecimiento. Encuentra herbolarios, farmacias y tiendas naturales verificadas con nuestro buscador avanzado.',
  keywords: ['buscador probióticos', 'filtrar tiendas probióticos', 'encontrar herbolarios', 'tiendas naturales cerca', 'directorio probióticos', 'búsqueda avanzada probióticos', 'filtro por país', 'filtro por ciudad', 'tipo establecimiento'],
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
    description: 'Busca y filtra tiendas verificadas de probióticos por país, ciudad y tipo.',
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
        {/* Schema.org estructurado */}
        <SEOSchema type="article" data={{
          title: "Buscador de Tiendas de Probióticos: Encuentra Tu Tienda Ideal",
          description: "Busca y filtra tiendas de probióticos por país, ciudad y tipo de establecimiento. Encuentra herbolarios, farmacias y tiendas naturales verificadas.",
          publishDate: "2024-09-08T10:00:00+00:00",
          author: "Probióticos Para Todos",
          image: "https://www.probioticosparatodos.com/images/buscador-probioticos.png",
          url: "https://www.probioticosparatodos.com/donde-comprar/buscador"
        }} />

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
                Descubre herbolarios, tiendas naturales y mercados orgánicos verificados donde comprar probióticos de calidad. Filtra por país, ciudad y tipo de establecimiento.
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

        {/* Sección de búsqueda y filtros */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <BuscadorClient />
          </div>
        </section>

        {/* Sección informativa */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  ¿Cómo usar nuestro buscador?
                </h2>
                <p className="text-lg text-gray-600">
                  Encuentra fácilmente las mejores tiendas de probióticos con nuestros filtros avanzados
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-apple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-3">Filtra por Ubicación</h3>
                  <p className="text-gray-600">
                    Selecciona tu país y ciudad para encontrar tiendas cerca de ti. Los filtros se actualizan automáticamente.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-st-tropaz/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-3">Tipo de Establecimiento</h3>
                  <p className="text-gray-600">
                    Filtra por herbolarios, farmacias, tiendas naturales, supermercados o mercados orgánicos según tus preferencias.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-apple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-3">Búsqueda por Texto</h3>
                  <p className="text-gray-600">
                    Busca por nombre de tienda, dirección o cualquier palabra clave para encontrar exactamente lo que necesitas.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-apple/10 to-st-tropaz/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-biscay mb-4">
                  ¿No encuentras tu tienda favorita?
                </h3>
                <p className="text-gray-600 mb-6">
                  Ayúdanos a mejorar nuestro directorio sugiriendo nuevas tiendas de probióticos verificadas.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-apple text-white font-semibold rounded-lg hover:bg-apple/90 transition-colors"
                >
                  📧 Sugerir una tienda
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
