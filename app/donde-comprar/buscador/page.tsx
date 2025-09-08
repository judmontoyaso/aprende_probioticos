'use client';

import { useState, useMemo, useEffect } from 'react';
import { tiendasData } from '../data';
import Link from 'next/link';
import { slugify } from '../utils';
import OptimizedImagePlaceholder from '../../components/OptimizedImagePlaceholder';
import ArticleBanner from '../../components/ArticleBanner';
import Head from 'next/head';
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

export default function BuscadorTiendasPage() {
  const [selectedPais, setSelectedPais] = useState('');
  const [selectedCiudad, setSelectedCiudad] = useState('');

  const paises = useMemo(() => [...new Set(tiendasData.map(t => t.pais))], []);
  const ciudades = useMemo(() => {
    if (!selectedPais) return [];
    return [...new Set(tiendasData.filter(t => t.pais === selectedPais).map(t => t.ciudad))];
  }, [selectedPais]);

  const filteredTiendas = useMemo(() => {
    let tiendas = tiendasData;
    if (selectedPais) {
      tiendas = tiendas.filter(t => t.pais === selectedPais);
    }
    if (selectedCiudad) {
      tiendas = tiendas.filter(t => t.ciudad === selectedCiudad);
    }
    return tiendas.reduce((acc, tienda) => {
      if (!acc[tienda.pais]) {
        acc[tienda.pais] = [];
      }
      acc[tienda.pais].push(tienda);
      return acc;
    }, {} as Record<string, typeof tiendasData>);
  }, [selectedPais, selectedCiudad]);

  const handlePaisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPais(e.target.value);
    setSelectedCiudad(''); // Reset city when country changes
  };

  // Configurar structured data para SEO
  useEffect(() => {
    // Schema.org para SearchAction
    const searchActionSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Probióticos Para Todos - Buscador",
      "url": "https://www.probioticosparatodos.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.probioticosparatodos.com/donde-comprar/buscador?pais={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
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

    // ItemList Schema para los resultados
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Directorio de Tiendas de Probióticos",
      "description": "Buscador avanzado de tiendas verificadas donde comprar probióticos",
      "url": "https://www.probioticosparatodos.com/donde-comprar/buscador",
      "numberOfItems": Object.values(filteredTiendas).flat().length,
      "itemListElement": Object.values(filteredTiendas).flat().map((tienda, index) => ({
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
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": tienda.confiabilidad === 'Muy Alta' ? '5' : tienda.confiabilidad === 'Alta' ? '4' : '3',
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    };

    const searchScript = document.createElement('script');
    searchScript.type = 'application/ld+json';
    searchScript.textContent = JSON.stringify(searchActionSchema);
    document.head.appendChild(searchScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    const itemListScript = document.createElement('script');
    itemListScript.type = 'application/ld+json';
    itemListScript.textContent = JSON.stringify(itemListSchema);
    document.head.appendChild(itemListScript);

    return () => {
      document.head.removeChild(searchScript);
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(itemListScript);
    };
  }, [filteredTiendas]);

  return (
    <>
      <Head>
        <title>Buscador de Tiendas de Probióticos | Probióticos Para Todos</title>
        <meta name="description" content="Encuentra tiendas, herbolarios y mercados de probióticos cerca de ti. Filtro por país y ciudad con información verificada." />
      </Head>
      
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

        {/* Filtros Mejorados */}
        <div className="container mx-auto px-4 -mt-8 relative z-10 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-biscay mb-2">Filtros de Búsqueda</h2>
                <p className="text-gray-600">Personaliza tu búsqueda para encontrar exactamente lo que necesitas</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="pais-filter" className="block text-sm font-semibold text-biscay mb-2">
                    🌍 Selecciona tu País
                  </label>
                  <select
                    id="pais-filter"
                    value={selectedPais}
                    onChange={handlePaisChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-apple focus:border-apple transition-all duration-200 bg-white hover:border-gray-300"
                  >
                    <option value="">🌎 Todos los países</option>
                    {paises.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="ciudad-filter" className="block text-sm font-semibold text-biscay mb-2">
                    🏙️ Selecciona tu Ciudad
                  </label>
                  <select
                    id="ciudad-filter"
                    value={selectedCiudad}
                    onChange={(e) => setSelectedCiudad(e.target.value)}
                    disabled={!selectedPais}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-apple focus:border-apple transition-all duration-200 bg-white hover:border-gray-300 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  >
                    <option value="">{selectedPais ? '🏘️ Todas las ciudades' : '🔒 Primero selecciona un país'}</option>
                    {ciudades.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              
              {/* Estadísticas */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-apple/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-apple">{Object.values(filteredTiendas).flat().length}</div>
                    <div className="text-sm text-gray-600">Tiendas encontradas</div>
                  </div>
                  <div className="bg-biscay/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-biscay">{Object.keys(filteredTiendas).length}</div>
                    <div className="text-sm text-gray-600">Países disponibles</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Verificadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor de resultados */}
        <div className="container mx-auto px-4">
          {Object.keys(filteredTiendas).length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-biscay mb-2">No hay resultados</h3>
                <p className="text-gray-600 text-lg mb-6">No se encontraron tiendas con los filtros seleccionados.</p>
                <button 
                  onClick={() => {setSelectedPais(''); setSelectedCiudad('');}}
                  className="inline-flex items-center px-6 py-3 bg-apple text-white font-semibold rounded-xl hover:bg-apple/90 transition-all duration-300"
                >
                  🔄 Limpiar filtros
                </button>
              </div>
            </div>
          )}

          {Object.entries(filteredTiendas).map(([pais, tiendas]) => (
            <section key={pais} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-biscay mb-2">{pais}</h2>
                  <p className="text-gray-600">{tiendas.length} tienda{tiendas.length !== 1 ? 's' : ''} disponible{tiendas.length !== 1 ? 's' : ''}</p>
                </div>
                <div className="text-4xl">
                  {pais === 'España' ? '🇪🇸' : pais === 'México' ? '🇲🇽' : pais === 'Colombia' ? '🇨🇴' : pais === 'Argentina' ? '🇦🇷' : '🌍'}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tiendas.map((tienda) => (
                  <div key={tienda.nombre} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-apple/20 transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-biscay group-hover:text-apple transition-colors duration-300 flex-grow pr-2">
                          {tienda.nombre}
                        </h3>
                        <span className={`text-xs font-bold py-1 px-3 rounded-full flex-shrink-0 ${
                          tienda.confiabilidad === 'Muy Alta' ? 'bg-green-100 text-green-800' :
                          tienda.confiabilidad === 'Alta' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {tienda.confiabilidad}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-2">
                          <span className="text-gray-400 mt-1">📍</span>
                          <p className="text-gray-600 text-sm leading-relaxed">{tienda.direccion}</p>
                        </div>
                        
                        {tienda.whatsapp && (
                          <div className="flex items-center space-x-2">
                            <span className="text-green-500">📱</span>
                            <p className="text-sm text-gray-700">{tienda.whatsapp}</p>
                          </div>
                        )}
                        
                        {tienda.horarios && (
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-500">🕒</span>
                            <p className="text-sm text-gray-700">{tienda.horarios}</p>
                          </div>
                        )}
                        
                        <div className="flex items-start space-x-2">
                          <span className="text-apple mt-1">🦠</span>
                          <div className="flex-grow">
                            <p className="text-sm text-gray-700 font-medium mb-1">Tipos disponibles:</p>
                            <div className="flex flex-wrap gap-1">
                              {tienda.tiposProbioticos.map((tipo, index) => (
                                <span key={index} className="text-xs bg-apple/10 text-apple px-2 py-1 rounded-full">
                                  {tipo}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {tienda.web ? (
                          <Link 
                            href={tienda.web} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-4 py-2 bg-apple text-white text-sm font-semibold rounded-lg hover:bg-apple/90 transition-all duration-300 transform hover:scale-105"
                          >
                            🌐 Visitar web
                          </Link>
                        ) : (
                          <div className="text-sm text-gray-400">Sin sitio web</div>
                        )}
                        
                        <span className="text-xs text-gray-500">
                          ✅ {tienda.fechaVerificacion}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
