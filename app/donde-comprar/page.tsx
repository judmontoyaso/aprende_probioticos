import { tiendasData } from './data';
import Link from 'next/link';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';
import ArticleBanner from '../components/ArticleBanner';
import SEOSchema from '../components/SEOSchema';
import { Metadata } from 'next';
import DondeComprarPageClient from './DondeComprarPageClient';

// Metadatos para SEO
export const metadata: Metadata = {
  title: 'Dónde Comprar Probióticos: Directorio de Tiendas Verificadas | Probióticos Para Todos',
  description: 'Encuentra herbolarios, tiendas naturales y mercados orgánicos donde comprar probióticos de calidad. Directorio verificado con información actualizada por país y ciudad.',
  keywords: ['donde comprar probióticos', 'tiendas probióticos', 'herbolarios', 'mercados orgánicos', 'directorio tiendas naturales', 'probióticos España', 'probióticos México', 'probióticos Colombia', 'probióticos Argentina'],
  openGraph: {
    title: 'Directorio de Tiendas de Probióticos por País',
    description: 'Encuentra herbolarios y tiendas naturales verificadas donde comprar probióticos de calidad en países hispanohablantes.',
    url: 'https://www.probioticosparatodos.com/donde-comprar',
    siteName: 'Probióticos Para Todos',
    images: [{
      url: 'https://www.probioticosparatodos.com/images/donde-comprar.png',
      width: 1200,
      height: 630,
      alt: 'Directorio de tiendas de probióticos'
    }],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Directorio: Dónde Comprar Probióticos por País',
    description: 'Encuentra herbolarios y tiendas naturales verificadas donde comprar probióticos de calidad.',
    images: ['https://www.probioticosparatodos.com/images/donde-comprar.png']
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
    canonical: 'https://www.probioticosparatodos.com/donde-comprar'
  }
};

export default function DondeComprarPage() {
  const paises = [...new Set(tiendasData.map(t => t.pais))];

  const ciudadesPorPais = paises.reduce((acc, pais) => {
    acc[pais] = [...new Set(tiendasData.filter(t => t.pais === pais).map(t => t.ciudad))];
    return acc;
  }, {} as Record<string, string[]>);

  // Schema.org para LocalBusiness directory
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Directorio de Tiendas de Probióticos",
    "description": "Directorio completo de herbolarios, tiendas naturales y mercados orgánicos donde comprar probióticos de calidad",
    "url": "https://www.probioticosparatodos.com/donde-comprar",
    "numberOfItems": tiendasData.length,
    "itemListElement": tiendasData.map((tienda, index) => ({
      "@type": "LocalBusiness",
      "position": index + 1,
      "name": tienda.nombre,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": tienda.direccion,
        "addressLocality": tienda.ciudad,
        "addressCountry": tienda.pais
      },
      "telephone": tienda.whatsapp || undefined,
      "url": tienda.web || undefined,
      "openingHours": tienda.horarios || undefined,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": tienda.confiabilidad === 'Muy Alta' ? '5' : tienda.confiabilidad === 'Alta' ? '4' : '3',
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
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
      }
    ]
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Schema.org estructurado */}
        <SEOSchema type="article" data={{
          title: "Dónde Comprar Probióticos: Directorio de Tiendas por País",
          description: "Directorio completo y verificado de herbolarios, tiendas naturales y mercados orgánicos donde comprar probióticos de calidad en países hispanohablantes.",
          publishDate: "2024-09-08T10:00:00+00:00",
          author: "Probióticos Para Todos",
          image: "https://www.probioticosparatodos.com/images/donde-comprar.png",
          url: "https://www.probioticosparatodos.com/donde-comprar"
        }} />
        
        {/* Hero section moderna */}
        <section className="py-12 bg-aqua-squeeze" itemScope itemType="https://schema.org/Article">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Columna de texto */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 bg-apple/10 text-apple font-medium rounded-full text-sm">
                      Directorio Verificado
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-biscay leading-tight" itemProp="headline">
                      Dónde Comprar Probióticos
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
                      Directorio completo de herbolarios, tiendas naturales y mercados orgánicos donde encontrar probióticos de calidad en países hispanohablantes.
                    </p>
                    <meta itemProp="author" content="Probióticos Para Todos" />
                    <meta itemProp="datePublished" content="2024-09-08T10:00:00+00:00" />
                    <meta itemProp="dateModified" content="2024-09-08T10:00:00+00:00" />
                  </div>
                  
                  {/* Puntos clave */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Tiendas verificadas',
                      'Información actualizada',
                      'Múltiples países',
                      'Asesoría especializada'
                    ].map((punto, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-2 h-2 bg-apple rounded-full flex-shrink-0"></div>
                        <span className="text-biscay font-medium text-sm">{punto}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA principal */}
                  <div className="pt-4">
                    <Link 
                      href="/donde-comprar/buscador" 
                      className="inline-flex items-center px-8 py-4 bg-apple text-white font-semibold rounded-2xl hover:bg-apple/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <span className="mr-2">🔍</span>
                      Ir al Buscador de Tiendas
                    </Link>
                  </div>
                </div>

                {/* Columna de imagen */}
                <div className="order-first lg:order-last">
                  <figure className="relative w-full max-w-xs mx-auto lg:max-w-sm">
                    <OptimizedImagePlaceholder 
                      src="/images/donde-comprar.png"
                      alt="Persona comprando probióticos en herbolario especializado"
                      width={350}
                      height={400}
                      className="w-full h-[310px] sm:h-[342px] lg:h-[350px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 bg-white"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de características del directorio */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  ¿Qué Encontrarás en Este Directorio?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Información completa y verificada para encontrar los mejores lugares donde comprar probióticos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Característica 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-apple/10">
                  <div className="w-16 h-16 bg-apple/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Fichas Detalladas</h3>
                  <p className="text-gray-600 text-sm">
                    Dirección completa, contacto, web o redes sociales y tipos de probióticos disponibles en cada tienda.
                  </p>
                </div>

                {/* Característica 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-st-tropaz/10">
                  <div className="w-16 h-16 bg-st-tropaz/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Tiendas Especializadas</h3>
                  <p className="text-gray-600 text-sm">
                    Herbolarios, mercados orgánicos y tiendas naturales seleccionadas por su calidad y especialización.
                  </p>
                </div>

                {/* Característica 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-seagull/10">
                  <div className="w-16 h-16 bg-seagull/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Información Práctica</h3>
                  <p className="text-gray-600 text-sm">
                    Marcas disponibles, formatos (fermentados/suplementos), venta online y horarios de atención.
                  </p>
                </div>

                {/* Característica 4 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-san-marino/10">
                  <div className="w-16 h-16 bg-san-marino/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Verificado</h3>
                  <p className="text-gray-600 text-sm">
                    Información actualizada y verificada. Última revisión: septiembre 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner de artículo */}
        <ArticleBanner />

        <DondeComprarPageClient paises={paises} ciudadesPorPais={ciudadesPorPais} />

        {/* Sección de beneficios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  ¿Por Qué Comprar en Tiendas Especializadas?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Las ventajas de elegir herbolarios y tiendas naturales para tus probióticos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Beneficio 1 */}
                <div className="bg-gradient-to-r from-apple/5 to-apple/10 p-8 rounded-2xl border-l-4 border-apple">
                  <h3 className="text-xl font-bold text-biscay mb-4 flex items-center">
                    <span className="w-8 h-8 bg-apple text-white rounded-full flex items-center justify-center text-sm mr-3">🎯</span>
                    Selección Especializada
                  </h3>
                  <p className="text-gray-700">
                    Marcas de calidad premium y productos artesanales difíciles de encontrar en supermercados convencionales.
                  </p>
                </div>

                {/* Beneficio 2 */}
                <div className="bg-gradient-to-r from-st-tropaz/5 to-st-tropaz/10 p-8 rounded-2xl border-l-4 border-st-tropaz">
                  <h3 className="text-xl font-bold text-biscay mb-4 flex items-center">
                    <span className="w-8 h-8 bg-st-tropaz text-white rounded-full flex items-center justify-center text-sm mr-3">👨‍⚕️</span>
                    Asesoría Personalizada
                  </h3>
                  <p className="text-gray-700">
                    Personal capacitado que puede orientarte según tus necesidades específicas de salud y bienestar.
                  </p>
                </div>

                {/* Beneficio 3 */}
                <div className="bg-gradient-to-r from-seagull/5 to-seagull/10 p-8 rounded-2xl border-l-4 border-seagull">
                  <h3 className="text-xl font-bold text-biscay mb-4 flex items-center">
                    <span className="w-8 h-8 bg-seagull text-white rounded-full flex items-center justify-center text-sm mr-3">🌱</span>
                    Productos Frescos y Locales
                  </h3>
                  <p className="text-gray-700">
                    Acceso a alimentos fermentados elaborados por productores locales, apoyando la economía regional.
                  </p>
                </div>

                {/* Beneficio 4 */}
                <div className="bg-gradient-to-r from-san-marino/5 to-san-marino/10 p-8 rounded-2xl border-l-4 border-san-marino">
                  <h3 className="text-xl font-bold text-biscay mb-4 flex items-center">
                    <span className="w-8 h-8 bg-san-marino text-white rounded-full flex items-center justify-center text-sm mr-3">📦</span>
                    Variedad de Formatos
                  </h3>
                  <p className="text-gray-700">
                    Desde kéfir y kombucha caseros hasta fórmulas específicas en cápsulas, polvos y líquidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action final */}
        <section className="py-16 bg-gossip/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-biscay mb-4">¿Conoces una Tienda que Deberíamos Incluir?</h2>
                <p className="text-gray-600 mb-6">
                  Ayúdanos a mejorar nuestro directorio. Todas las propuestas se verifican con fuentes públicas antes de ser publicadas.
                </p>
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center px-8 py-4 bg-apple text-white font-semibold rounded-2xl hover:bg-apple/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="mr-2">📧</span>
                  Sugerir una Tienda
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
