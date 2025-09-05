'use client';

import { useState, useEffect } from 'react';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';
import ArticleBanner from '../components/ArticleBanner';
import SEOSchema from '../components/SEOSchema';
import Head from 'next/head';

export default function ComoElegir() {
  const [activeTab, setActiveTab] = useState('alimentos');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Configurar metadatos SEO dinámicamente
  useEffect(() => {
    // Actualizar el título de la página
    document.title = 'Cómo Elegir el Probiótico Adecuado: Guía Completa 2024 | Probióticos Para Todos';
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía basada en evidencia científica para elegir probióticos. Aprende a identificar cepas, verificar potencia UFC, comparar suplementos vs alimentos fermentados. ✅ Criterios expertos.');
    }

    // Agregar keywords si no existe
    if (!document.querySelector('meta[name="keywords"]')) {
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = 'cómo elegir probióticos, guía probióticos, mejores probióticos, cepas probióticas, UFC probióticos, suplementos probióticos';
      document.head.appendChild(metaKeywords);
    }

    // Limpiar al desmontar el componente
    return () => {
      // Opcional: restablecer título por defecto
    };
  }, []);

  // Datos estructurados optimizados para el esquema de artículo
  const articleData = {
    title: "Cómo Elegir el Probiótico Adecuado: Guía Completa",
    description: "Guía basada en evidencia científica para seleccionar los probióticos adecuados según tus necesidades específicas. Aprende a identificar cepas, verificar potencia UFC y elegir entre suplementos y alimentos fermentados.",
    publishDate: "2024-05-15T10:00:00+00:00",
    author: "Probióticos Para Todos",
    image: "https://www.probioticosparatodos.com/images/hermo_como_elegir.png?v=2",
    url: "https://www.probioticosparatodos.com/como-elegir"
  };

  // Datos estructurados expandidos para FAQ
  const faqData = [
    {
      question: "¿Cómo identificar un buen probiótico?",
      answer: "Un buen probiótico debe especificar las cepas completas (género, especie y designación), garantizar la potencia en UFC hasta la fecha de caducidad, y contar con estudios clínicos que respalden su eficacia para la condición específica que quieres tratar."
    },
    {
      question: "¿Qué cantidad de UFC debe tener un probiótico?",
      answer: "La mayoría de los estudios han utilizado dosis entre 1 y 10 mil millones de UFC por día. La dosis adecuada depende de la condición específica a tratar y de las cepas utilizadas."
    },
    {
      question: "¿Son mejores los suplementos o los alimentos fermentados?",
      answer: "Ambos tienen ventajas. Los suplementos suelen tener dosis más altas y cepas específicas para diferentes necesidades. Los alimentos fermentados (yogur, kéfir, chucrut) ofrecen probióticos junto con otros nutrientes beneficiosos, aunque en dosis generalmente menores."
    },
    {
      question: "¿Quién debe consultar a un médico antes de tomar probióticos?",
      answer: "Personas con sistema inmunológico comprometido, enfermedades graves, post-cirugía reciente, o con alergias graves a componentes que puedan estar en los probióticos deben consultar con un profesional de la salud antes de comenzar un régimen probiótico."
    },
    {
      question: "¿Cómo almacenar correctamente los probióticos?",
      answer: "Muchos probióticos requieren refrigeración para mantener su viabilidad. Almacénalos en un lugar fresco y seco, alejados de la luz directa y la humedad. Siempre revisa las instrucciones específicas del fabricante."
    },
    {
      question: "¿Cuánto tiempo debo tomar probióticos para ver resultados?",
      answer: "Los efectos pueden variar según la persona y la condición tratada. Generalmente, se pueden notar mejoras en 2-4 semanas, pero algunos beneficios pueden tomar 2-3 meses en manifestarse completamente."
    }
  ];

  // Datos estructurados para HowTo Schema
  const howToData = {
    name: "Cómo elegir el probiótico adecuado",
    description: "Guía paso a paso para seleccionar el probiótico más adecuado según tus necesidades específicas de salud",
    image: "https://www.probioticosparatodos.com/images/infografia_como_elegir.png",
    totalTime: "PT15M",
    estimatedCost: {
      currency: "USD",
      value: "20-50"
    },
    step: [
      {
        name: "Identifica tu objetivo de salud",
        text: "Define específicamente qué quieres lograr: mejorar digestión, fortalecer inmunidad, o tratar una condición particular",
        image: "https://www.probioticosparatodos.com/images/hermo_como_elegir.png"
      },
      {
        name: "Busca evidencia científica",
        text: "Investiga qué cepas específicas han demostrado efectividad para tu condición en estudios clínicos",
        image: "https://www.probioticosparatodos.com/images/infografia_como_elegir.png"
      },
      {
        name: "Verifica calidad y potencia",
        text: "Asegúrate de que el producto garantice la cantidad de UFC hasta la fecha de vencimiento",
        image: "https://www.probioticosparatodos.com/images/infografia_como_elegir.png"
      },
      {
        name: "Compara opciones disponibles",
        text: "Evalúa diferentes marcas y productos basándote en los criterios establecidos",
        image: "https://www.probioticosparatodos.com/images/hermo_como_elegir.png"
      },
      {
        name: "Toma la decisión informada",
        text: "Selecciona el probiótico que mejor se ajuste a tus necesidades específicas y presupuesto",
        image: "https://www.probioticosparatodos.com/images/hermo_como_elegir.png"
      }
    ]
  };

  return (
    <>
      {/* Head para metadatos SEO */}
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content="Cómo Elegir el Probiótico Adecuado: Guía Completa" />
        <meta property="og:description" content="Guía experta para seleccionar probióticos basada en evidencia científica. Aprende criterios de calidad, cepas específicas y comparación de productos." />
        <meta property="og:image" content="https://www.probioticosparatodos.com/images/hermo_como_elegir.png" />
        <meta property="og:url" content="https://www.probioticosparatodos.com/como-elegir" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Probióticos Para Todos" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guía Completa: Cómo Elegir el Probiótico Adecuado" />
        <meta name="twitter:description" content="Aprende a elegir probióticos con criterios científicos. Guía experta con infografía incluida." />
        <meta name="twitter:image" content="https://www.probioticosparatodos.com/images/hermo_como_elegir.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.probioticosparatodos.com/como-elegir" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Additional SEO */}
        <meta name="author" content="Probióticos Para Todos" />
        <meta name="category" content="Salud y Bienestar" />
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
      </Head>

      <main className="min-h-screen bg-gray-50">
      {/* Schema.org estructurado - múltiples esquemas */}
      <SEOSchema type="both" data={{ article: articleData, faq: faqData }} />
      
      {/* Datos estructurados adicionales para HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": howToData.name,
            "description": howToData.description,
            "image": howToData.image,
            "totalTime": howToData.totalTime,
            "estimatedCost": howToData.estimatedCost,
            "step": howToData.step.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.name,
              "text": step.text,
              "image": step.image
            }))
          })
        }}
      />

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
                "name": "Cómo Elegir Probióticos",
                "item": "https://www.probioticosparatodos.com/como-elegir"
              }
            ]
          })
        }}
      />
      
      {/* Hero section moderna con semántica mejorada */}
      <section className="py-12 bg-aqua-squeeze" itemScope itemType="https://schema.org/Article">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Columna de texto */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 bg-apple/10 text-apple font-medium rounded-full text-sm">
                    Guía de Selección
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-biscay leading-tight" itemProp="headline">
                    Cómo Elegir el Probiótico Adecuado
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed" itemProp="description">
                    Guía basada en evidencia para seleccionar los probióticos adecuados según tus necesidades específicas.
                  </p>
                  <meta itemProp="author" content="Probióticos Para Todos" />
                  <meta itemProp="datePublished" content="2024-05-15T10:00:00+00:00" />
                  <meta itemProp="dateModified" content="2024-12-04T10:00:00+00:00" />
                </div>
                
                {/* Puntos clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Identifica cepas específicas',
                    'Verifica la potencia',
                    'Basado en evidencia',
                    'Considera tu condición'
                  ].map((punto, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                      <div className="w-2 h-2 bg-apple rounded-full flex-shrink-0"></div>
                      <span className="text-biscay font-medium text-sm">{punto}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna de imagen */}
              <div className="order-first lg:order-last">
                <figure className="relative w-full max-w-xs mx-auto lg:max-w-sm">
                  <div className="relative h-[320px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <OptimizedImagePlaceholder 
                      src="/images/hermo_como_elegir.png?v=2"
                      alt="Persona eligiendo probióticos de forma informada"
                      width={350}
                      height={400}
                      className="object-contain w-full h-full transition-transform duration-300 hover:scale-105 bg-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de infografía */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                Guía Visual: Proceso de Selección
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sigue esta infografía paso a paso para tomar la mejor decisión al elegir tu probiótico
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen de la infografía */}
              <div className="order-2 lg:order-1">
                <figure className="relative">
                  <div className="relative h-[700px] lg:h-[800px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <OptimizedImagePlaceholder 
                      src="/images/infografia_como_elegir.png"
                      alt="Infografía completa: Pasos para elegir el probiótico ideal"
                      width={400}
                      height={600}
                      className="object-contain w-full h-full p-4"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-apple rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📋</span>
                  </div>
                </figure>
              </div>

              {/* Contenido explicativo */}
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-apple/5 to-apple/10 p-6 rounded-2xl border-l-4 border-apple">
                    <h3 className="text-xl font-bold text-biscay mb-3">🎯 Paso 1: Define tu Objetivo</h3>
                    <p className="text-gray-700">
                      Identifica específicamente qué quieres lograr: ¿mejorar digestión, fortalecer inmunidad, o tratar una condición particular? Cada objetivo requiere cepas diferentes.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-st-tropaz/5 to-st-tropaz/10 p-6 rounded-2xl border-l-4 border-st-tropaz">
                    <h3 className="text-xl font-bold text-biscay mb-3">🔬 Paso 2: Busca Evidencia Científica</h3>
                    <p className="text-gray-700">
                      Investiga qué cepas específicas han demostrado efectividad para tu condición en estudios clínicos. No todas las cepas funcionan igual.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-seagull/5 to-seagull/10 p-6 rounded-2xl border-l-4 border-seagull">
                    <h3 className="text-xl font-bold text-biscay mb-3">📊 Paso 3: Verifica Calidad y Potencia</h3>
                    <p className="text-gray-700">
                      Asegúrate de que el producto garantice la cantidad de UFC hasta la fecha de vencimiento y tenga certificaciones de calidad.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-san-marino/5 to-san-marino/10 p-6 rounded-2xl border-l-4 border-san-marino">
                    <h3 className="text-xl font-bold text-biscay mb-3">✅ Paso 4: Toma la Decisión Informada</h3>
                    <p className="text-gray-700">
                      Con toda la información recopilada, selecciona el probiótico que mejor se ajuste a tus necesidades específicas y presupuesto.
                    </p>
                  </div>
                </div>

                {/* Call to action */}
                <div className="bg-gossip/20 p-6 rounded-2xl">
                  <h4 className="font-bold text-biscay mb-3">💡 Consejo Profesional</h4>
                  <p className="text-gray-700 mb-4">
                    Descarga o guarda esta infografía para tenerla como referencia cuando vayas a comprar probióticos. Te ayudará a no olvidar ningún factor importante.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 bg-apple/10 text-apple rounded-full text-sm font-medium">
                      📱 Guarda en tu móvil
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-st-tropaz/10 text-st-tropaz rounded-full text-sm font-medium">
                      🛒 Lleva de compras
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-seagull/10 text-seagull rounded-full text-sm font-medium">
                      👨‍⚕️ Consulta con profesional
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas y datos adicionales */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-apple/5 rounded-2xl">
                <div className="text-3xl font-bold text-apple mb-2">5</div>
                <div className="text-sm text-gray-600">Criterios principales a evaluar</div>
              </div>
              <div className="text-center p-6 bg-st-tropaz/5 rounded-2xl">
                <div className="text-3xl font-bold text-st-tropaz mb-2">1-10B</div>
                <div className="text-sm text-gray-600">UFC recomendadas por día</div>
              </div>
              <div className="text-center p-6 bg-seagull/5 rounded-2xl">
                <div className="text-3xl font-bold text-seagull mb-2">200+</div>
                <div className="text-sm text-gray-600">Especies diferentes existentes</div>
              </div>
              <div className="text-center p-6 bg-san-marino/5 rounded-2xl">
                <div className="text-3xl font-bold text-san-marino mb-2">24°C</div>
                <div className="text-sm text-gray-600">Temperatura máxima de almacenamiento</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Factores clave */}
          <section className="mb-16" aria-labelledby="factores-clave">
            <div className="text-center mb-12">
              <h2 id="factores-clave" className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                Factores Clave para Elegir
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estos son los elementos fundamentales que debes considerar al seleccionar un probiótico
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Factor 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-apple/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-xl font-bold text-biscay mb-4">Cepas Específicas</h3>
                <p className="text-gray-600 mb-4">
                  Los beneficios son específicos de cada cepa. Busca suplementos que listen las cepas completas con género, especie y designación.
                </p>
                <div className="bg-apple/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="text-apple">Ejemplo:</strong> <em>Lactobacillus rhamnosus GG</em> o <em>Bifidobacterium longum BB536</em>
                  </p>
                </div>
              </div>

              {/* Factor 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-st-tropaz/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-biscay mb-4">Potencia y Viabilidad</h3>
                <p className="text-gray-600 mb-4">
                  Verifica el número de UFC por dosis. La mayoría de estudios usan entre 1-10 mil millones de UFC por día.
                </p>
                <div className="bg-st-tropaz/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="text-st-tropaz">Importante:</strong> Garantía hasta fecha de caducidad, no solo fabricación
                  </p>
                </div>
              </div>

              {/* Factor 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-seagull/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-biscay mb-4">Evidencia Científica</h3>
                <p className="text-gray-600 mb-4">
                  Busca probióticos estudiados clínicamente para tu condición específica. Diferentes cepas son efectivas para diferentes afecciones.
                </p>
                <div className="bg-seagull/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="text-seagull">Tip:</strong> Revisa estudios peer-reviewed y meta-análisis
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tabla de condiciones */}
          <section className="mb-16" aria-labelledby="condiciones-salud">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 id="condiciones-salud" className="text-2xl font-bold text-biscay mb-6">Cepas por Condición de Salud</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table" aria-label="Cepas probióticas recomendadas por condición de salud">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-4 pr-6 font-semibold text-biscay">Condición</th>
                      <th className="pb-4 font-semibold text-biscay">Cepas con Mayor Evidencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-4 pr-6 font-medium text-gray-800">Diarrea asociada a antibióticos</td>
                      <td className="py-4 text-gray-600"><em>Lactobacillus rhamnosus GG, Saccharomyces boulardii</em></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-gray-800">Síndrome del intestino irritable</td>
                      <td className="py-4 text-gray-600"><em>Bifidobacterium infantis 35624, Lactobacillus plantarum 299v</em></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-gray-800">Enfermedad inflamatoria intestinal</td>
                      <td className="py-4 text-gray-600"><em>VSL#3 (mezcla de 8 cepas), Escherichia coli Nissle 1917</em></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-gray-800">Infecciones respiratorias</td>
                      <td className="py-4 text-gray-600"><em>Lactobacillus rhamnosus GG, Lactobacillus casei DN-114</em></td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-gray-800">Salud vaginal</td>
                      <td className="py-4 text-gray-600"><em>Lactobacillus rhamnosus GR-1, Lactobacillus reuteri RC-14</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Banner de artículo */}
          <ArticleBanner />

          {/* Tipos de productos con tabs */}
          <section className="mb-16" aria-labelledby="tipos-productos">
            <div className="text-center mb-12">
              <h2 id="tipos-productos" className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                Tipos de Productos
              </h2>
              <p className="text-lg text-gray-600">
                Conoce las diferencias entre suplementos y alimentos fermentados
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-2">
                <button
                  onClick={() => setActiveTab('suplementos')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'suplementos'
                      ? 'bg-apple text-white shadow-lg'
                      : 'text-gray-600 hover:text-apple'
                  }`}
                >
                  Suplementos
                </button>
                <button
                  onClick={() => setActiveTab('alimentos')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'alimentos'
                      ? 'bg-apple text-white shadow-lg'
                      : 'text-gray-600 hover:text-apple'
                  }`}
                >
                  Alimentos Fermentados
                </button>
              </div>
            </div>

            {/* Contenido de tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === 'suplementos' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-biscay">Suplementos Dietéticos</h3>
                  <p className="text-gray-600 text-lg">
                    Disponibles en cápsulas, tabletas, polvos y líquidos. Estos productos suelen contener dosis más altas y cepas específicas.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gossip/20 p-6 rounded-xl">
                      <h4 className="font-bold text-biscay mb-4">¿Qué buscar?</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                          Cepas claramente identificadas
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                          Número garantizado de UFC
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                          Tecnología de protección
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                          Almacenamiento adecuado
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-seagull/10 p-6 rounded-xl">
                      <h4 className="font-bold text-biscay mb-4">Factores que afectan viabilidad</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-st-tropaz rounded-full mr-3"></span>
                          Temperatura de almacenamiento
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-st-tropaz rounded-full mr-3"></span>
                          Humedad
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-st-tropaz rounded-full mr-3"></span>
                          Exposición al oxígeno
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-st-tropaz rounded-full mr-3"></span>
                          Tecnología de encapsulación
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'alimentos' && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-biscay mb-4">Fuentes Naturales de Probióticos</h3>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                      Los alimentos fermentados tradicionales han sido consumidos durante milenios y ofrecen probióticos 
                      naturales junto con una amplia gama de nutrientes beneficiosos.
                    </p>
                  </div>

                  {/* Grid de alimentos fermentados detallado */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Lácteos fermentados */}
                    <div className="bg-gradient-to-br from-apple/10 to-apple/5 rounded-xl p-6 border border-apple/20">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-apple rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl text-white">🥛</span>
                        </div>
                        <h4 className="font-bold text-apple">Lácteos Fermentados</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Yogur Natural</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> L. bulgaricus, S. thermophilus
                          </p>
                          <p className="text-xs text-gray-500">
                            1-10 mil millones UFC por taza. Busca &quot;cultivos vivos activos&quot;
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Kéfir de Leche</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> 12+ cepas diferentes
                          </p>
                          <p className="text-xs text-gray-500">
                            10-34 mil millones UFC por taza. Mayor diversidad que yogur
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Quesos Madurados</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> L. helveticus, L. casei
                          </p>
                          <p className="text-xs text-gray-500">
                            Variable según tipo. Gouda y Cheddar son buenas opciones
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Vegetales fermentados */}
                    <div className="bg-gradient-to-br from-st-tropaz/10 to-st-tropaz/5 rounded-xl p-6 border border-st-tropaz/20">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-st-tropaz rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl text-white">🥬</span>
                        </div>
                        <h4 className="font-bold text-st-tropaz">Vegetales Fermentados</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Chucrut Casero</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> L. plantarum, L. brevis
                          </p>
                          <p className="text-xs text-gray-500">
                            100M-1B UFC por ½ taza. Evita versiones pasteurizadas
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Kimchi Coreano</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> L. sakei, Weissella
                          </p>
                          <p className="text-xs text-gray-500">
                            100-500M UFC por ½ taza. Rico en vitaminas A y C
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Aceitunas Fermentadas</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> L. plantarum, L. pentosus
                          </p>
                          <p className="text-xs text-gray-500">
                            Moderado contenido. Elige fermentadas, no en salmuera simple
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bebidas fermentadas */}
                    <div className="bg-gradient-to-br from-seagull/10 to-seagull/5 rounded-xl p-6 border border-seagull/20">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-seagull rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl text-white">🍄</span>
                        </div>
                        <h4 className="font-bold text-seagull">Bebidas Fermentadas</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Kombucha</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> S. cerevisiae, Acetobacter
                          </p>
                          <p className="text-xs text-gray-500">
                            10-100M UFC por taza. Combina probióticos y antioxidantes
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Kéfir de Agua</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> L. casei, Leuconostoc
                          </p>
                          <p className="text-xs text-gray-500">
                            Opción vegana. Menor carga calórica que kéfir de leche
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <h5 className="font-semibold text-gray-800 text-sm">Jun (Honey Kombucha)</h5>
                          <p className="text-xs text-gray-600 mb-1">
                            <strong>Probióticos:</strong> Z. kombuchaensis
                          </p>
                          <p className="text-xs text-gray-500">
                            Fermentado con miel cruda. Propiedades antibacterianas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comparación: Alimentos vs Suplementos */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-apple to-st-tropaz p-6">
                      <h4 className="text-xl font-bold text-white text-center">
                        Alimentos Fermentados vs Suplementos: ¿Cuál Elegir?
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="text-lg font-bold text-apple flex items-center">
                            <span className="bg-apple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">✓</span>
                            Ventajas de Alimentos Fermentados
                          </h5>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-apple/20 text-apple rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                              <div>
                                <strong>Nutrientes adicionales:</strong> Vitaminas B, K2, enzimas digestivas, péptidos bioactivos
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-apple/20 text-apple rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                              <div>
                                <strong>Matriz alimentaria:</strong> Los probióticos están protegidos naturalmente por la matriz del alimento
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-apple/20 text-apple rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                              <div>
                                <strong>Costo-efectividad:</strong> Generalmente más económicos a largo plazo
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-apple/20 text-apple rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                              <div>
                                <strong>Diversidad natural:</strong> Contienen múltiples cepas que trabajan sinérgicamente
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-apple/20 text-apple rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                              <div>
                                <strong>Fácil integración:</strong> Se incorporan naturalmente en la dieta diaria
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h5 className="text-lg font-bold text-st-tropaz flex items-center">
                            <span className="bg-st-tropaz text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">⚡</span>
                            Ventajas de Suplementos
                          </h5>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-st-tropaz/20 text-st-tropaz rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                              <div>
                                <strong>Dosis específicas:</strong> Concentraciones altas y estandarizadas (1-100 mil millones UFC)
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-st-tropaz/20 text-st-tropaz rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                              <div>
                                <strong>Cepas específicas:</strong> Dirigidos a condiciones de salud particulares
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-st-tropaz/20 text-st-tropaz rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                              <div>
                                <strong>Conveniencia:</strong> Fácil dosificación y portabilidad
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-st-tropaz/20 text-st-tropaz rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                              <div>
                                <strong>Evidencia clínica:</strong> Muchos estudios se realizan con suplementos específicos
                              </div>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-st-tropaz/20 text-st-tropaz rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                              <div>
                                <strong>Control de calidad:</strong> Mejor trazabilidad y garantía de potencia
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guía de selección de alimentos fermentados */}
                  <div className="bg-gradient-to-br from-apple/5 to-st-tropaz/5 rounded-xl p-8 mb-8">
                    <h4 className="text-xl font-bold text-biscay mb-6 text-center">
                      Cómo Elegir Alimentos Fermentados de Calidad
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-apple mb-4 flex items-center">
                          <span className="bg-apple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">✓</span>
                          Qué Buscar
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                            <strong>Etiqueta &quot;cultivos vivos activos&quot;</strong> o &quot;no pasteurizado&quot;
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                            <strong>Lista específica de cepas</strong> probióticas contenidas
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                            <strong>Fecha de caducidad clara</strong> y almacenamiento adecuado
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                            <strong>Ingredientes mínimos</strong> y sin conservantes artificiales
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                            <strong>Proceso de fermentación tradicional</strong> mencionado
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-apple rounded-full mr-3"></span>
                            <strong>Refrigeración requerida</strong> (indica que están vivos)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-red-600 mb-4 flex items-center">
                          <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">✗</span>
                          Qué Evitar
                        </h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                            <strong>Productos pasteurizados</strong> después de la fermentación
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                            <strong>Alto contenido de azúcares añadidos</strong> (más de 15g por porción)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                            <strong>Conservantes químicos</strong> como benzoato de sodio
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                            <strong>Colorantes y sabores artificiales</strong>
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                            <strong>Almacenamiento a temperatura ambiente</strong> (sospechoso)
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                            <strong>Etiquetas vagas</strong> sin especificidad de cepas
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Recomendaciones prácticas */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-apple/10 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-apple rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl text-white">🏠</span>
                      </div>
                      <h5 className="font-bold text-apple mb-3">Preparación Casera</h5>
                      <p className="text-sm text-gray-700 mb-4">
                        Hacer fermentados en casa te da control total sobre ingredientes y proceso.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Fáciles de empezar:</strong> Chucrut, kéfir de agua, yogur casero
                      </div>
                    </div>

                    <div className="bg-st-tropaz/10 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-st-tropaz rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl text-white">💰</span>
                      </div>
                      <h5 className="font-bold text-st-tropaz mb-3">Relación Costo-Beneficio</h5>
                      <p className="text-sm text-gray-700 mb-4">
                        Los alimentos fermentados suelen ser más económicos que suplementos.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Tip:</strong> Compra granos de kéfir una vez, úsalos indefinidamente
                      </div>
                    </div>

                    <div className="bg-seagull/10 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-seagull rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl text-white">📈</span>
                      </div>
                      <h5 className="font-bold text-seagull mb-3">Introducción Gradual</h5>
                      <p className="text-sm text-gray-700 mb-4">
                        Comienza con pequeñas cantidades para permitir adaptación digestiva.
                      </p>
                      <div className="text-xs text-gray-600">
                        <strong>Progresión:</strong> 1 cucharada → ¼ taza → ½ taza diaria
                      </div>
                    </div>
                  </div>

                  {/* Consejo final */}
                  <div className="bg-gradient-to-r from-apple/10 to-st-tropaz/10 rounded-xl p-6 border border-apple/20">
                    <div className="flex items-start">
                      <div className="bg-apple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 mt-1">💡</div>
                      <div>
                        <h5 className="font-bold text-biscay mb-2">Estrategia Combinada Recomendada</h5>
                        <p className="text-gray-700 text-sm mb-3">
                          Para obtener máximos beneficios, considera combinar alimentos fermentados para uso diario 
                          con suplementos específicos para necesidades particulares de salud.
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li>• <strong>Base diaria:</strong> Yogur o kéfir en el desayuno, chucrut con comidas</li>
                          <li>• <strong>Necesidades específicas:</strong> Suplemento con cepas documentadas clínicamente</li>
                          <li>• <strong>Viajes o antibióticos:</strong> Suplemento de S. boulardii</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          {/* Consideraciones especiales */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-biscay mb-8">Consideraciones Especiales</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-biscay mb-4">Condiciones Preexistentes</h3>
                    <p className="text-gray-600 mb-4">
                      Consulta con un profesional de la salud antes de comenzar si tienes:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Sistema inmunológico comprometido
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Enfermedades graves
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Post-cirugía reciente
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Alergias graves
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-biscay mb-4">Prebióticos y Simbióticos</h3>
                    <p className="text-gray-600 mb-4">
                      Los prebióticos son fibras que alimentan las bacterias beneficiosas. Los simbióticos combinan probióticos y prebióticos.
                    </p>
                    <div className="bg-apple/5 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong className="text-apple">Tip:</strong> Un producto con prebióticos puede mejorar la efectividad de los probióticos.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-biscay mb-4">Consideraciones por Edad</h3>
                  <div className="space-y-4">
                    <div className="bg-seagull/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-biscay mb-2">Bebés y Niños</h4>
                      <p className="text-sm text-gray-700">
                        Busca cepas estudiadas en poblaciones pediátricas con dosis apropiadas para su edad.
                      </p>
                    </div>
                    <div className="bg-gossip/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-biscay mb-2">Adultos Mayores</h4>
                      <p className="text-sm text-gray-700">
                        La microbiota cambia con la edad. Algunas cepas pueden ser más beneficiosas para adultos mayores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-apple/5 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong className="text-apple">Recordatorio importante:</strong> Los probióticos no son medicamentos y no están destinados a diagnosticar, tratar, curar o prevenir enfermedades. Son complementos que pueden apoyar la salud general.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16" aria-labelledby="preguntas-frecuentes">
            <div className="text-center mb-12">
              <h2 id="preguntas-frecuentes" className="text-3xl lg:text-4xl font-bold text-biscay mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-gray-600">
                Resolvemos las dudas más comunes sobre la selección de probióticos
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-biscay pr-4">{faq.question}</span>
                      <span className={`text-apple transform transition-transform duration-200 ${
                        activeFaq === index ? 'rotate-180' : ''
                      }`}>
                        ↓
                      </span>
                    </button>
                    {activeFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Checklist final */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-apple/5 to-seagull/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-biscay mb-4">Checklist Final</h2>
                <p className="text-gray-600">
                  Usa esta lista para verificar que has considerado todos los factores importantes
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    'Identifica tu necesidad específica de salud',
                    'Busca cepas con evidencia para esa condición',
                    'Verifica que las cepas estén claramente identificadas',
                    'Asegúrate de una dosis adecuada (UFC)'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg">
                      <span className="w-6 h-6 bg-apple text-white rounded-full flex items-center justify-center text-sm mr-3">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {[
                    'Comprueba la fecha de caducidad',
                    'Verifica las condiciones de almacenamiento',
                    'Considera prebióticos y simbióticos',
                    'Consulta con un profesional si es necesario'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg">
                      <span className="w-6 h-6 bg-st-tropaz text-white rounded-full flex items-center justify-center text-sm mr-3">
                        ✓
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}