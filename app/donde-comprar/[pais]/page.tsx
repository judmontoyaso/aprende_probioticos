import { tiendasData } from '../data';
import Link from 'next/link';
import { slugify } from '../utils';
import OptimizedImagePlaceholder from '../../components/OptimizedImagePlaceholder';
import ArticleBanner from '../../components/ArticleBanner';
import SEOSchema from '../../components/SEOSchema';
import { Metadata } from 'next';

interface Tienda {
  nombre: string;
  direccion: string;
  ciudad: string;
  pais: string;
  whatsapp?: string;
  web?: string;
  horarios?: string;
  confiabilidad: string;
  fechaVerificacion: string;
  tiposProbioticos: string[];
}

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { pais: string } }): Promise<Metadata> {
  const paisSlug = params.pais;
  const pais = paisSlug.charAt(0).toUpperCase() + paisSlug.slice(1).replace('-', ' ');
  
  const countryImageMap: { [key: string]: string } = {
    'colombia': 'donde-comprar-colombia.png',
    'españa': 'donde-comprar-españa.png', 
    'argentina': 'donde-comprar-argentina.png',
    'mexico': 'donde-comprar-mexico.png'
  };
  
  const imageFileName = countryImageMap[paisSlug] || 'donde-comprar.png';
  const tiendas = tiendasData.filter(t => slugify(t.pais) === paisSlug);
  
  return {
    title: `Tiendas de Probióticos en ${pais}: Directorio Completo | Probióticos Para Todos`,
    description: `Encuentra ${tiendas.length} tiendas verificadas de probióticos en ${pais}. Herbolarios, farmacias y tiendas naturales con direcciones, horarios y contacto actualizado.`,
    keywords: [`probióticos ${pais.toLowerCase()}`, `tiendas probióticos ${pais.toLowerCase()}`, `herbolarios ${pais.toLowerCase()}`, `donde comprar probióticos ${pais.toLowerCase()}`, 'suplementos digestivos', 'salud intestinal'],
    openGraph: {
      title: `Tiendas de Probióticos en ${pais}`,
      description: `Directorio completo de ${tiendas.length} tiendas verificadas donde comprar probióticos en ${pais}.`,
      url: `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}`,
      siteName: 'Probióticos Para Todos',
      images: [{
        url: `https://www.probioticosparatodos.com/images/${imageFileName}`,
        width: 1200,
        height: 630,
        alt: `Tiendas de probióticos en ${pais}`
      }],
      locale: 'es_ES',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Directorio: Tiendas de Probióticos en ${pais}`,
      description: `${tiendas.length} tiendas verificadas donde comprar probióticos en ${pais}.`,
      images: [`https://www.probioticosparatodos.com/images/${imageFileName}`]
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
      canonical: `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}`
    }
  };
}

export default function PaisPage({ params }: { params: { pais: string } }) {
  const paisSlug = params.pais;
  const pais = paisSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const tiendasDelPais = tiendasData.filter(tienda => 
    slugify(tienda.pais) === paisSlug
  );

  if (tiendasDelPais.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">País no encontrado</h1>
          <p className="text-gray-600 mb-8">No se encontraron tiendas para este país.</p>
          <Link href="/donde-comprar" className="bg-apple text-white px-6 py-3 rounded-lg hover:bg-apple/90 transition-colors">
            Volver al directorio
          </Link>
        </div>
      </div>
    );
  }

  const ciudades = [...new Set(tiendasDelPais.map(t => t.ciudad))];

  // Schema.org para LocalBusiness por país
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Tiendas de Probióticos en ${pais}`,
    "description": `Directorio de tiendas verificadas donde comprar probióticos en ${pais}`,
    "url": `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}`,
    "numberOfItems": tiendasDelPais.length,
    "itemListElement": tiendasDelPais.map((tienda, index) => ({
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pais,
        "item": `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}`
      }
    ]
  };

  if (!pais) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">❌</span>
          </div>
          <h1 className="text-3xl font-bold text-biscay mb-4">País no encontrado</h1>
          <p className="text-gray-600 mb-8">El país que buscas no está disponible en nuestro directorio.</p>
          <Link 
            href="/donde-comprar" 
            className="inline-flex items-center px-8 py-4 bg-apple text-white font-semibold rounded-2xl hover:bg-apple/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="mr-2">🏠</span>
            Volver al Directorio
          </Link>
        </div>
      </main>
    );
  }

  // Mapeo de países a nombres de archivos de imagen
  const countryImageMap: { [key: string]: string } = {
    'colombia': 'donde-comprar-colombia.png',
    'españa': 'donde-comprar-españa.png', 
    'argentina': 'donde-comprar-argentina.png',
    'mexico': 'donde-comprar-mexico.png'
  };

  const imageFileName = countryImageMap[paisSlug] || 'donde-comprar.png';

  // Datos estructurados para el artículo
  const articleData = {
    title: `Tiendas de Probióticos en ${pais}`,
    description: `Directorio completo de herbolarios, tiendas naturales y mercados orgánicos donde comprar probióticos en ${pais}. Información verificada y actualizada.`,
    publishDate: "2024-09-08T10:00:00+00:00",
    author: "Probióticos Para Todos",
    image: `https://www.probioticosparatodos.com/images/${imageFileName}`,
    url: `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}`
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
        <SEOSchema type="article" data={articleData} />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": pais,
                  "item": `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}`
                }
              ]
            })
          }}
        />

        {/* Hero section moderna */}
        <section className="py-12 bg-aqua-squeeze" itemScope itemType="https://schema.org/Article">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Columna de texto */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 bg-apple/10 text-apple font-medium rounded-full text-sm">
                      Directorio {pais}
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-biscay leading-tight" itemProp="headline">
                      Tiendas de Probióticos en {pais}
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
                      Descubre herbolarios, tiendas naturales y mercados orgánicos especializados en probióticos en {pais}.
                    </p>
                    <meta itemProp="author" content="Probióticos Para Todos" />
                    <meta itemProp="datePublished" content="2024-09-08T10:00:00+00:00" />
                  </div>
                  
                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-apple">{ciudades.length}</div>
                      <div className="text-sm text-gray-600">Ciudades disponibles</div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-st-tropaz">
                        {tiendasData.filter((tienda: Tienda) => slugify(tienda.pais) === paisSlug).length}
                      </div>
                      <div className="text-sm text-gray-600">Tiendas verificadas</div>
                    </div>
                  </div>

                  {/* Navegación rápida */}
                  <div className="pt-4">
                    <Link 
                      href="/donde-comprar" 
                      className="inline-flex items-center px-6 py-3 bg-white/80 text-biscay font-medium rounded-xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg mr-4"
                    >
                      <span className="mr-2">←</span>
                      Volver al Directorio
                    </Link>
                  </div>
                </div>

                {/* Columna de imagen */}
                <div className="order-first lg:order-last">
                  <figure className="relative w-full max-w-xs mx-auto lg:max-w-sm">
                    <OptimizedImagePlaceholder 
                      src={`/images/${imageFileName}`}
                      alt={`Tiendas de probióticos en ${pais}`}
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

        {/* Sección de ciudades */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  Selecciona tu Ciudad
                </h2>
                <p className="text-lg text-gray-600">
                  Encuentra tiendas especializadas en tu ciudad
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ciudades.map((ciudad: string) => (
                  <Link
                    key={ciudad}
                    href={`/donde-comprar/${paisSlug}/${slugify(ciudad)}`}
                    className="group bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-apple/10 to-st-tropaz/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg">🏙️</span>
                      </div>
                      <span className="block text-lg font-semibold text-biscay group-hover:text-apple transition-colors duration-300">
                        {ciudad}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Banner de artículo */}
        <ArticleBanner />

        {/* Sección de beneficios específicos del país */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  ¿Por Qué Elegir Tiendas Naturales en {pais}?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ventajas específicas de comprar en herbolarios y tiendas especializadas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Beneficio 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-apple/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Selección Especializada</h3>
                  <p className="text-gray-600">
                    Marcas de calidad premium y productos artesanales difíciles de encontrar en supermercados convencionales.
                  </p>
                </div>

                {/* Beneficio 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-st-tropaz/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Productos Frescos y Locales</h3>
                  <p className="text-gray-600">
                    Acceso a alimentos fermentados elaborados por productores locales, apoyando la economía de tu región.
                  </p>
                </div>

                {/* Beneficio 3 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-seagull/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Asesoría Personalizada</h3>
                  <p className="text-gray-600">
                    Personal capacitado que puede orientarte según tus necesidades específicas de salud y bienestar.
                  </p>
                </div>

                {/* Beneficio 4 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-san-marino/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Variedad de Formatos</h3>
                  <p className="text-gray-600">
                    Desde kéfir y kombucha caseros hasta fórmulas específicas en cápsulas, polvos y líquidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gossip/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-biscay mb-4">¿Conoces otra tienda en {pais}?</h2>
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
