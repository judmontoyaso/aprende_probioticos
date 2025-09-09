import { tiendasData } from '../../data';
import Link from 'next/link';
import { slugify } from '../../utils';
import OptimizedImagePlaceholder from '../../../components/OptimizedImagePlaceholder';
import ArticleBanner from '../../../components/ArticleBanner';
import SEOSchema from '../../../components/SEOSchema';
import CiudadPageClient from './CiudadPageClient';

// Define a custom type for the page props
export type CiudadPageProps = {
  params: Promise<{
    pais: string;
    ciudad: string;
  }>;
};

// Override the default PageProps type
export const dynamicParams = false;

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: CiudadPageProps) {
  const resolvedParams = await params;
  const { pais, ciudad } = resolvedParams;
  const paisSlug = pais;
  const ciudadSlug = ciudad;
  const paisCapitalized = paisSlug.charAt(0).toUpperCase() + paisSlug.slice(1).replace('-', ' ');
  const ciudadCapitalized = ciudadSlug.charAt(0).toUpperCase() + ciudadSlug.slice(1).replace('-', ' ');
  
  const countryImageMap: { [key: string]: string } = {
    'colombia': 'donde-comprar-colombia.png',
    'españa': 'donde-comprar-españa.png', 
    'argentina': 'donde-comprar-argentina.png',
    'mexico': 'donde-comprar-mexico.png'
  };
  
  const imageFileName = countryImageMap[paisSlug] || 'donde-comprar.png';
  const tiendas = tiendasData.filter(t => slugify(t.pais) === paisSlug && slugify(t.ciudad) === ciudadSlug);
  
  return {
    title: `Tiendas de Probióticos en ${ciudadCapitalized}, ${paisCapitalized}: Guía Completa | Probióticos Para Todos`,
    description: `Encuentra ${tiendas.length} tiendas verificadas de probióticos en ${ciudadCapitalized}, ${paisCapitalized}. Herbolarios, farmacias y tiendas naturales con direcciones exactas, horarios y contacto.`,
    keywords: [`probióticos ${ciudadCapitalized.toLowerCase()}`, `tiendas probióticos ${ciudadCapitalized.toLowerCase()} ${paisCapitalized.toLowerCase()}`, `herbolarios ${ciudadCapitalized.toLowerCase()}`, `donde comprar probióticos ${ciudadCapitalized.toLowerCase()}`, 'suplementos digestivos', 'salud intestinal'],
    openGraph: {
      title: `Tiendas de Probióticos en ${ciudadCapitalized}, ${paisCapitalized}`,
      description: `Guía completa de ${tiendas.length} tiendas verificadas donde comprar probióticos en ${ciudadCapitalized}, ${paisCapitalized}.`,
      url: `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}/${ciudadSlug}`,
      siteName: 'Probióticos Para Todos',
      images: [{
        url: `https://www.probioticosparatodos.com/images/${imageFileName}`,
        width: 1200,
        height: 630,
        alt: `Tiendas de probióticos en ${ciudadCapitalized}, ${paisCapitalized}`
      }],
      locale: 'es_ES',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Directorio: Tiendas de Probióticos en ${ciudadCapitalized}, ${paisCapitalized}`,
      description: `${tiendas.length} tiendas verificadas donde comprar probióticos en ${ciudadCapitalized}.`,
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
      canonical: `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}/${ciudadSlug}`
    }
  };
}

export default async function CiudadPage({ params }: CiudadPageProps) {
  const resolvedParams = await params;
  const paisSlug = resolvedParams.pais;
  const ciudadSlug = resolvedParams.ciudad;

  const tiendas = tiendasData.filter(
    (tienda) =>
      slugify(tienda.pais) === paisSlug &&
      slugify(tienda.ciudad) === ciudadSlug
  );

  const pais = tiendas.length > 0 ? tiendas[0].pais : '';
  const ciudad = tiendas.length > 0 ? tiendas[0].ciudad : '';

  // Schema.org para LocalBusiness por ciudad
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Tiendas de Probióticos en ${ciudad}, ${pais}`,
    "description": `Directorio de tiendas verificadas donde comprar probióticos en ${ciudad}, ${pais}`,
    "url": `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}/${ciudadSlug}`,
    "numberOfItems": tiendas.length,
    "itemListElement": tiendas.map((tienda, index) => ({
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": ciudad,
        "item": `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}/${ciudadSlug}`
      }
    ]
  };

  if (tiendas.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-biscay mb-4">No se encontraron tiendas</h1>
          <p className="text-gray-600 mb-8">No tenemos datos para la ciudad o país especificado en nuestro directorio.</p>
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
    title: `Tiendas de Probióticos en ${ciudad}, ${pais}`,
    description: `Guía completa de herbolarios, tiendas naturales y mercados orgánicos donde comprar probióticos en ${ciudad}, ${pais}. Direcciones, contactos y productos disponibles.`,
    publishDate: "2024-09-08T10:00:00+00:00",
    author: "Probióticos Para Todos",
    image: `https://www.probioticosparatodos.com/images/${imageFileName}`,
    url: `https://www.probioticosparatodos.com/donde-comprar/${paisSlug}/${ciudadSlug}`
  };

  // Datos para FAQ
  const faqData = [
    {
      question: "¿Qué diferencia hay entre un probiótico alimentario y uno en cápsula?",
      answer: "Los alimentarios (kéfir, kombucha) contienen consorcios microbianos naturales; las cápsulas suelen contener cepas específicas y dosis estandarizadas."
    },
    {
      question: "¿Puedo encontrar marcas internacionales en estas tiendas?",
      answer: "Sí, muchas de las tiendas listadas ofrecen tanto marcas nacionales como internacionales. Revisa la ficha de cada una para más detalles."
    },
    {
      question: "¿Cómo sé si la información es confiable?",
      answer: "Cada ficha incluye la fuente de verificación (sitio oficial, Google Maps, etc.) y la fecha de nuestra última comprobación para asegurar la mayor precisión posible."
    }
  ];

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
        <SEOSchema type="both" data={{ article: articleData, faq: faqData }} />

        {/* Hero section moderna */}
        <section className="py-12 bg-aqua-squeeze" itemScope itemType="https://schema.org/Article">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Columna de texto */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 bg-apple/10 text-apple font-medium rounded-full text-sm">
                      {ciudad}, {pais}
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-biscay leading-tight" itemProp="headline">
                      Tiendas de Probióticos en {ciudad}
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
                      Guía detallada de herbolarios, tiendas naturales y mercados especializados en probióticos en {ciudad}.
                    </p>
                    <meta itemProp="author" content="Probióticos Para Todos" />
                    <meta itemProp="datePublished" content="2024-09-08T10:00:00+00:00" />
                  </div>
                  
                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-apple">{tiendas.length}</div>
                      <div className="text-sm text-gray-600">Tiendas verificadas</div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-st-tropaz">
                        {[...new Set(tiendas.flatMap(t => t.tiposProbioticos))].length}
                      </div>
                      <div className="text-sm text-gray-600">Tipos disponibles</div>
                    </div>
                  </div>

                  {/* Navegación */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Link 
                      href={`/donde-comprar/${paisSlug}`}
                      className="inline-flex items-center px-4 py-2 bg-white/80 text-biscay font-medium rounded-xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    >
                      <span className="mr-2">←</span>
                      {pais}
                    </Link>
                    <Link 
                      href="/donde-comprar" 
                      className="inline-flex items-center px-4 py-2 bg-white/80 text-biscay font-medium rounded-xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    >
                      <span className="mr-2">🏠</span>
                      Directorio
                    </Link>
                  </div>
                </div>

                {/* Columna de imagen */}
                <div className="order-first lg:order-last">
                  <figure className="relative w-full max-w-xs mx-auto lg:max-w-sm">
                    <OptimizedImagePlaceholder 
                      src={`/images/${imageFileName}`}
                      alt={`Tiendas de probióticos en ${ciudad}, ${pais}`}
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

        {/* Sección de tiendas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  Tiendas Verificadas
                </h2>
                <p className="text-lg text-gray-600">
                  Herbolarios y tiendas naturales especializadas en probióticos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CiudadPageClient tiendas={tiendas} />
              </div>
            </div>
          </div>
        </section>

        {/* Banner de artículo */}
        <ArticleBanner />

        {/* Sección de consejos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  Consejos Antes de Comprar en {ciudad}
                </h2>
                <p className="text-lg text-gray-600">
                  Recomendaciones para elegir los mejores probióticos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-apple/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Fecha de Caducidad</h3>
                  <p className="text-gray-600">
                    Revisa la fecha de caducidad y las condiciones de almacenamiento, especialmente para productos refrigerados.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-st-tropaz/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Cepas y UFC</h3>
                  <p className="text-gray-600">
                    Para suplementos, prefiere aquellos con descripción de cepas y UFC (Unidades Formadoras de Colonias).
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-seagull/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay mb-4">Alimentos Fermentados</h3>
                  <p className="text-gray-600">
                    Para alimentos fermentados, pregunta si son pasteurizados (los no pasteurizados conservan más cultivos vivos).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                  Preguntas Frecuentes
                </h2>
                <p className="text-lg text-gray-600">
                  Resuelve tus dudas sobre dónde comprar probióticos en {ciudad}
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="px-8 py-6">
                      <h3 className="text-lg font-semibold text-biscay mb-3">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
