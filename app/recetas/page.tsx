'use client';

import Link from 'next/link';
import { useState } from 'react';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';
import { recetasData, recetaSlugs } from './data';

// Categorías disponibles para filtrar
const CATEGORIAS = ['Todas', 'Lácteos', 'Vegetales', 'Bebidas', 'Fermentados'];

// Función para categorizar recetas
const categorizarReceta = (slug: string) => {
  switch (slug) {
    case 'yogur-casero':
      return ['Lácteos', 'Fermentados'];
    case 'kefir-agua':
      return ['Bebidas', 'Fermentados'];
    case 'chucrut-casero':
      return ['Vegetales', 'Fermentados'];
    case 'kombucha-casa':
      return ['Bebidas', 'Fermentados'];
    case 'miso-casero':
      return ['Fermentados'];
    default:
      return ['Fermentados'];
  }
};

export default function RecetasIndexPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  // Filtrar recetas según la categoría seleccionada
  const recetasFiltradas = categoriaActiva === 'Todas' 
    ? recetaSlugs 
    : recetaSlugs.filter(slug => {
        const categorias = categorizarReceta(slug);
        return categorias.includes(categoriaActiva);
      });

  return (
    <>
      {/* Datos estructurados JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Recetas Probióticas Caseras",
            "description": "Colección completa de recetas de alimentos fermentados caseros con beneficios probióticos",
            "url": "https://www.probioticosparatodos.com/recetas",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Recetas de Alimentos Fermentados",
              "numberOfItems": recetaSlugs.length,
              "itemListElement": recetaSlugs.map((slug, index) => ({
                "@type": "Recipe",
                "position": index + 1,
                "name": recetasData[slug].titulo,
                "url": `https://www.probioticosparatodos.com/recetas/${slug}`,
                "description": recetasData[slug].descripcion,
                "prepTime": recetasData[slug].tiempoPreparacion,
                "recipeYield": recetasData[slug].porciones
              }))
            },
            "breadcrumb": {
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
                  "name": "Recetas Probióticas",
                  "item": "https://www.probioticosparatodos.com/recetas"
                }
              ]
            }
          })
        }}
      />

      {/* Header moderno con gradient */}
      <header className="bg-gradient-to-r from-apple to-st-tropaz text-white py-16 relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido del header */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Recetas Probióticas
                <span className="block text-seagull mt-2">Caseras y Naturales</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                Transforma tu cocina en un laboratorio de salud. Descubre el arte ancestral de la fermentación con recetas fáciles y científicamente respaldadas.
              </p>
              
              {/* Estadísticas destacadas */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-de-york">{recetaSlugs.length}+</div>
                  <div className="text-sm text-gray-200">Recetas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-de-york">100%</div>
                  <div className="text-sm text-gray-200">Naturales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-de-york">0</div>
                  <div className="text-sm text-gray-200">Aditivos</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#recetas" 
                  className="bg-white text-apple font-semibold px-8 py-3 rounded-full hover:bg-aqua-squeeze transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ver Recetas
                </a>
                <Link 
                  href="/tipos" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-apple transition-all duration-300"
                >
                  Conocer Probióticos
                </Link>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="order-first lg:order-last">
              <div className="relative w-full max-w-md mx-auto lg:max-w-lg leading-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl inline-block">
                  <OptimizedImagePlaceholder 
                    src="/images/hero-recetas.png"
                    alt="Recetas probióticas caseras - alimentos fermentados naturales"
                    width={400}
                    height={400}
                    className="object-cover block"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sección de beneficios */}
      <section className="py-16 bg-aqua-squeeze">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
              ¿Por qué Preparar Fermentados en Casa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los alimentos fermentados caseros superan a los comerciales en calidad, potencia probiótica y beneficios para la salud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🧬",
                titulo: "Mayor Potencia Probiótica",
                descripcion: "Hasta 10x más bacterias vivas que productos comerciales pasteurizados.",
                detalle: "100 mil millones+ UFC por porción vs 1-10 mil millones en productos comerciales"
              },
              {
                icon: "🌿",
                titulo: "Ingredientes 100% Naturales",
                descripcion: "Control total sobre ingredientes, sin conservantes ni aditivos artificiales.",
                detalle: "Solo materias primas naturales seleccionadas por ti"
              },
              {
                icon: "💰",
                titulo: "Ahorro Económico",
                descripcion: "Reduce costos hasta 75% comparado con productos premium comerciales.",
                detalle: "Inversión inicial se recupera en 2-3 meses de preparación regular"
              },
              {
                icon: "🌍",
                titulo: "Sostenibilidad Ambiental",
                descripcion: "Reduce envases plásticos y huella de carbono del transporte.",
                detalle: "Hasta 90% menos residuos de packaging"
              },
              {
                icon: "🏺",
                titulo: "Tradición Ancestral",
                descripcion: "Conecta con técnicas milenarias de conservación y nutrición.",
                detalle: "Métodos utilizados por civilizaciones durante más de 9,000 años"
              },
              {
                icon: "🔬",
                titulo: "Calidad Personalizada",
                descripcion: "Adapta sabores, textura y concentración según tus preferencias.",
                detalle: "Controla tiempo de fermentación y tipo de cultivos específicos"
              }
            ].map((beneficio, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4 text-center">{beneficio.icon}</div>
                <h3 className="text-xl font-bold text-biscay mb-3 text-center">{beneficio.titulo}</h3>
                <p className="text-gray-600 mb-3 text-center">{beneficio.descripcion}</p>
                <div className="bg-gossip p-3 rounded-lg">
                  <p className="text-sm text-apple font-medium text-center">{beneficio.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de recetas mejorado */}
      <section id="recetas" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
              Nuestras Recetas Probióticas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Cada receta incluye guía paso a paso, consejos de experto, información nutricional y beneficios específicos para la salud.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              {categoriaActiva === 'Todas' 
                ? `Mostrando todas las ${recetasFiltradas.length} recetas` 
                : `Mostrando ${recetasFiltradas.length} recetas de ${categoriaActiva.toLowerCase()}`
              }
            </p>
            
            {/* Filtros por categoría */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {CATEGORIAS.map((categoria) => (
                <button 
                  key={categoria}
                  onClick={() => setCategoriaActiva(categoria)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    categoria === categoriaActiva
                      ? 'bg-apple text-white shadow-lg' 
                      : 'bg-ghost text-gray-600 hover:bg-apple hover:text-white'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recetasFiltradas.map((slug) => {
              const receta = recetasData[slug];
              return (
                <Link href={`/recetas/${slug}`} key={slug} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-8px] border border-gray-100 h-[460px] flex flex-col">
                    <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                      <OptimizedImagePlaceholder 
                        src={receta.imagenPrincipal.src} 
                        alt={receta.imagenPrincipal.alt}
                        width={400}
                        height={224}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-apple text-xs font-bold px-3 py-1 rounded-full">
                        {receta.dificultad}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="flex items-center text-white text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {receta.tiempoPreparacion}
                          <span className="mx-2">•</span>
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12a1 1 0 002 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 6.414V12z"/>
                            <path d="M9 18a1 1 0 002 0v-3a1 1 0 00-2 0v3z"/>
                          </svg>
                          {receta.porciones} porciones
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-biscay group-hover:text-apple transition-colors leading-tight">
                        {receta.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                        {receta.descripcion}
                      </p>
                      
                      {/* Beneficios destacados */}
                      {receta.beneficiosPrincipales && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {receta.beneficiosPrincipales.slice(0, 2).map((beneficio, index) => (
                              <span key={index} className="bg-gossip text-apple text-xs px-2 py-1 rounded-full font-medium">
                                {beneficio}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-apple text-sm font-bold">
                          Ver Receta Completa
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="text-xs text-gray-400">
                          Leer más →
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección científica */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-6">
                Ciencia de la Fermentación
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-apple/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-apple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-biscay mb-2">Lactofermentación</h3>
                    <p className="text-gray-600">Las bacterias del ácido láctico convierten azúcares en ácido láctico, creando un ambiente hostil para patógenos y preservando nutrientes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-st-tropaz/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-st-tropaz" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12a1 1 0 002 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 6.414V12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-biscay mb-2">Biodisponibilidad</h3>
                    <p className="text-gray-600">La fermentación pre-digiere proteínas y descompone antinutrientes, aumentando la absorción de vitaminas B, K2 y minerales.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-seagull/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-seagull" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-biscay mb-2">Microbiota Diversa</h3>
                    <p className="text-gray-600">Cada alimento fermentado aporta cepas únicas de probióticos, creando un ecosistema intestinal más robusto y resiliente.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-aqua-squeeze to-gossip p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-biscay mb-4">Datos Científicos</h3>
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-apple mb-1">10,000x</div>
                    <div className="text-sm text-gray-600">Mayor concentración probiótica vs suplementos</div>
                  </div>
                  <div className="bg-white/80 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-st-tropaz mb-1">400%</div>
                    <div className="text-sm text-gray-600">Aumento en absorción de minerales</div>
                  </div>
                  <div className="bg-white/80 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-seagull mb-1">50+</div>
                    <div className="text-sm text-gray-600">Cepas probióticas diferentes en alimentos fermentados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA mejorado */}
      <section className="py-16 bg-gradient-to-r from-biscay to-st-tropaz text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Comienza tu Transformación de Salud Hoy
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            No necesitas ser un experto en fermentación. Nuestras recetas incluyen todo lo que necesitas saber para crear alimentos probióticos de calidad profesional en tu propia cocina.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold mb-2">Guías Completas</h3>
              <p className="text-sm text-gray-200">Instrucciones paso a paso con fotos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold mb-2">Base Científica</h3>
              <p className="text-sm text-gray-200">Información respaldada por investigación</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold mb-2">Consejos de Experto</h3>
              <p className="text-sm text-gray-200">Trucos para resultados garantizados</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tipos" 
              className="bg-white text-biscay font-bold px-8 py-4 rounded-full hover:bg-aqua-squeeze transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Conocer los Probióticos
            </Link>
            <Link 
              href="/como-elegir" 
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-biscay transition-all duration-300"
            >
              Guía para Elegir
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 