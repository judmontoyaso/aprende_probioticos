import { Metadata } from 'next';
import { recetasData } from './data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Recetas Probióticas Caseras | Alimentos Fermentados Naturales',
  description: 'Descubre recetas fáciles de alimentos fermentados caseros: yogur, kéfir, chucrut, kombucha y más. Guías paso a paso para crear probióticos naturales en casa.',
  keywords: 'recetas probióticas, alimentos fermentados, yogur casero, kéfir, chucrut, kombucha, probióticos naturales',
  openGraph: {
    title: 'Recetas Probióticas Caseras | Alimentos Fermentados',
    description: 'Aprende a preparar alimentos fermentados ricos en probióticos con nuestras recetas detalladas y fáciles de seguir.',
    type: 'website',
    images: ['/images/hero-recetas.png']
  }
};

export default function RecetasIndexPage() {
  const recetaSlugs = Object.keys(recetasData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-aqua-squeeze to-gossip">
      {/* Header con gradiente */}
      <header className="bg-gradient-to-r from-apple to-st-tropaz text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Navegación" className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-seagull hover:text-white transition-colors">
                Inicio
              </Link>
              <span className="text-seagull mx-2">›</span>
              <span className="text-white font-medium">Recetas Probióticas</span>
            </div>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Recetas Probióticas
                <span className="block text-seagull mt-2">Caseras y Naturales</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                Transforma tu cocina en un laboratorio de salud. Descubre el arte ancestral de la fermentación con recetas fáciles y científicamente respaldadas.
              </p>
              
              {/* Estadísticas */}
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
              <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/hero-recetas.png"
                    alt="Recetas probióticas caseras - alimentos fermentados naturales"
                    className="w-full h-auto object-cover"
                    width={800}
                    height={600}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sección de beneficios */}
      <section className="py-16 bg-white">
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
                descripcion: "Hasta 10x más bacterias vivas que productos comerciales pasteurizados."
              },
              {
                icon: "🌿",
                titulo: "Ingredientes 100% Naturales",
                descripcion: "Control total sobre ingredientes, sin conservantes ni aditivos artificiales."
              },
              {
                icon: "💰",
                titulo: "Ahorro Económico",
                descripcion: "Reduce costos hasta 75% comparado con productos premium comerciales."
              }
            ].map((beneficio, index) => (
              <div key={index} className="bg-aqua-squeeze p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4 text-center">{beneficio.icon}</div>
                <h3 className="text-xl font-bold text-biscay mb-3 text-center">{beneficio.titulo}</h3>
                <p className="text-gray-600 text-center">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de recetas mejorado */}
      <main>
        <section id="recetas" className="py-16 bg-gradient-to-br from-gossip to-aqua-squeeze">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                Nuestras Recetas Probióticas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada receta incluye guía paso a paso, consejos de experto, información nutricional y beneficios específicos para la salud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recetaSlugs.map((slug) => {
                const receta = recetasData[slug];
                return (
                  <article key={slug} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-8px] border border-gray-100">
                    <div className="relative h-56 overflow-hidden">
                      <Image 
                        src={receta.imagenPrincipal.src} 
                        alt={receta.imagenPrincipal.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        width={400}
                        height={300}
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
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {receta.porciones} porciones
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-biscay mb-3 hover:text-apple transition-colors">
                        {receta.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {receta.descripcion}
                      </p>
                      
                      {/* Beneficios principales */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {receta.beneficiosPrincipales?.slice(0, 2).map((beneficio, index) => (
                          <span 
                            key={index}
                            className="bg-gossip text-apple text-xs px-2 py-1 rounded-full font-medium"
                          >
                            {beneficio}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={`/recetas/${slug}`}
                        className="inline-block w-full text-center bg-gradient-to-r from-apple to-st-tropaz text-white font-semibold py-3 px-6 rounded-full hover:from-st-tropaz hover:to-apple transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Ver Receta →
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
              Preguntas Frecuentes sobre Recetas Probióticas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre la preparación de alimentos fermentados en casa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  pregunta: "¿Es seguro hacer alimentos fermentados en casa?",
                  respuesta: "Sí, es completamente seguro cuando sigues las recetas correctamente. Los alimentos fermentados tienen miles de años de historia y las técnicas caseras son muy seguras si mantienes condiciones básicas de higiene y sigues las proporciones de sal/azúcar indicadas."
                },
                {
                  pregunta: "¿Qué equipos necesito para comenzar?",
                  respuesta: "Para la mayoría de recetas solo necesitas frascos de vidrio, sal marina sin refinar, y los ingredientes base. No requieres equipos especializados costosos. Un termómetro de cocina es útil para yogur, pero muchas fermentaciones se hacen a temperatura ambiente."
                },
                {
                  pregunta: "¿Cuánto tiempo duran los alimentos fermentados caseros?",
                  respuesta: "Depende del tipo: el yogur dura 1-2 semanas refrigerado, el chucrut puede durar 6 meses, el kéfir se mantiene fresco por 1-2 semanas, y la kombucha dura 2-4 semanas. Su acidez natural los preserva."
                },
                {
                  pregunta: "¿Cómo sé si mi fermentación está funcionando correctamente?",
                  respuesta: "Busca signos como burbujas, aroma ácido agradable (no putrefacto), cambio en textura y sabor. Cada receta tiene indicadores específicos, pero en general, un olor desagradable o moho peludo indican problemas."
                },
                {
                  pregunta: "¿Puedo usar agua del grifo para las fermentaciones?",
                  respuesta: "Es mejor usar agua filtrada o dejar reposar el agua del grifo 24 horas para que se evapore el cloro. El cloro puede inhibir las bacterias beneficiosas necesarias para la fermentación."
                },
                {
                  pregunta: "¿Los probióticos caseros son mejores que los suplementos?",
                  respuesta: "Los alimentos fermentados caseros suelen contener mayor diversidad de cepas probióticas y están en su forma natural con cofactores nutricionales. Además, son más económicos y no requieren refrigeración especial hasta estar listos."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-aqua-squeeze rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-biscay mb-3">
                    {faq.pregunta}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Banner */}
      <section className="py-16 bg-gradient-to-br from-gossip to-aqua-squeeze">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-6">
              Comienza tu Transformación de Salud Hoy
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              No necesitas ser un experto en fermentación. Nuestras recetas incluyen todo lo que necesitas saber para crear alimentos probióticos de calidad profesional en tu propia cocina.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-biscay mb-3">Guías Completas</h3>
                <p className="text-gray-600">Instrucciones paso a paso con fotos</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-biscay mb-3">Base Científica</h3>
                <p className="text-gray-600">Información respaldada por investigación</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-biscay mb-3">Consejos de Experto</h3>
                <p className="text-gray-600">Trucos para resultados garantizados</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tipos" 
                className="bg-gradient-to-r from-apple to-st-tropaz text-white font-semibold px-8 py-3 rounded-full hover:from-st-tropaz hover:to-apple transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Conocer los Probióticos
              </Link>
              <a 
                href="/como-elegir" 
                className="bg-white text-apple font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-apple"
              >
                Guía para Elegir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-apple to-st-tropaz text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para Comenzar tu Aventura Probiótica?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Únete a miles de personas que han transformado su salud digestiva con alimentos fermentados caseros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/como-elegir" 
              className="bg-white text-apple font-semibold px-8 py-3 rounded-full hover:bg-aqua-squeeze transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Guía para Principiantes
            </a>
            <a 
              href="/beneficios" 
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-apple transition-all duration-300"
            >
              Conocer Beneficios
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema - Agregado de forma segura */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Recetas Probióticas Caseras",
            "description": "Colección de recetas de alimentos fermentados ricos en probióticos naturales",
            "url": "https://probioticos-nicho.com/recetas",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": recetaSlugs.length,
              "itemListElement": recetaSlugs.map((slug, index) => ({
                "@type": "Recipe",
                "position": index + 1,
                "name": recetasData[slug].titulo,
                "description": recetasData[slug].descripcion,
                "url": `https://probioticos-nicho.com/recetas/${slug}`,
                "image": recetasData[slug].imagenPrincipal.src
              }))
            }
          })
        }}
      />

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Es seguro hacer alimentos fermentados en casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, es completamente seguro cuando sigues las recetas correctamente. Los alimentos fermentados tienen miles de años de historia y las técnicas caseras son muy seguras si mantienes condiciones básicas de higiene y sigues las proporciones de sal/azúcar indicadas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué equipos necesito para comenzar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para la mayoría de recetas solo necesitas frascos de vidrio, sal marina sin refinar, y los ingredientes base. No requieres equipos especializados costosos. Un termómetro de cocina es útil para yogur, pero muchas fermentaciones se hacen a temperatura ambiente."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo duran los alimentos fermentados caseros?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depende del tipo: el yogur dura 1-2 semanas refrigerado, el chucrut puede durar 6 meses, el kéfir se mantiene fresco por 1-2 semanas, y la kombucha dura 2-4 semanas. Su acidez natural los preserva."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo sé si mi fermentación está funcionando correctamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Busca signos como burbujas, aroma ácido agradable (no putrefacto), cambio en textura y sabor. Cada receta tiene indicadores específicos, pero en general, un olor desagradable o moho peludo indican problemas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo usar agua del grifo para las fermentaciones?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Es mejor usar agua filtrada o dejar reposar el agua del grifo 24 horas para que se evapore el cloro. El cloro puede inhibir las bacterias beneficiosas necesarias para la fermentación."
                }
              },
              {
                "@type": "Question",
                "name": "¿Los probióticos caseros son mejores que los suplementos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los alimentos fermentados caseros suelen contener mayor diversidad de cepas probióticas y están en su forma natural con cofactores nutricionales. Además, son más económicos y no requieren refrigeración especial hasta estar listos."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
