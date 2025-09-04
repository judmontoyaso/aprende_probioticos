'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';

interface TipoProbioticosTemplateProps {
  titulo: string;
  descripcion: string;
  imagenPrincipal: {
    src: string;
    alt: string;
  };
  fechaPublicacion: string;
  introduccion: string;
  caracteristicas: {
    titulo: string;
    descripcion: string;
  }[];
  beneficios: {
    titulo: string;
    descripcion: string;
  }[];
  cepasPopulares: {
    nombre: string;
    descripcion: string;
    beneficios: string[];
    condiciones?: string[];
  }[];
  alimentosNaturales?: {
    nombre: string;
    descripcion: string;
    imagen?: {
      src: string;
      alt: string;
    };
  }[];
  estudiosRelevantes: {
    titulo: string;
    autores: string;
    año: string;
    publicacion: string;
    url?: string;
    resumen: string;
  }[];
  faq: {
    pregunta: string;
    respuesta: string;
  }[];
  seccionesContenido?: {
    titulo: string;
    contenido: React.ReactNode;
  }[];
}

export default function TipoProbioticosTemplate({
  titulo,
  descripcion,
  imagenPrincipal,
  fechaPublicacion,
  introduccion,
  caracteristicas,
  beneficios,
  cepasPopulares,
  alimentosNaturales,
  estudiosRelevantes,
  faq,
  seccionesContenido
}: TipoProbioticosTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);

  // Datos estructurados JSON-LD para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": titulo,
    "description": descripcion,
    "image": {
      "@type": "ImageObject",
      "url": `https://www.probioticosparatodos.com${imagenPrincipal.src}`,
      "width": 1200,
      "height": 630,
      "alt": imagenPrincipal.alt
    },
    "author": {
      "@type": "Organization",
      "name": "Probióticos Para Todos",
      "url": "https://www.probioticosparatodos.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Probióticos Para Todos",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.probioticosparatodos.com/images/logo_transparente.png"
      }
    },
    "datePublished": fechaPublicacion,
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.probioticosparatodos.com/tipos/${titulo.toLowerCase().replace(/\s+/g, '-')}`
    },
    "articleSection": "Salud y Bienestar",
    "keywords": [`${titulo}`, "probióticos", "salud digestiva", "microbioma", "bacterias beneficiosas"]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.respuesta
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleStudy = (index: number) => {
    setExpandedStudy(expandedStudy === index ? null : index);
  };

  return (
    <>
      {/* Datos estructurados JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Header moderno con gradient */}
      <header className="bg-gradient-to-r from-apple to-st-tropaz text-white py-16 relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" itemProp="headline">
              {titulo}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-green-100 max-w-3xl mx-auto" itemProp="description">
              {descripcion}
            </p>
            
            {/* Breadcrumbs */}
            <nav aria-label="Navegación por migas de pan" className="mt-8" role="navigation">
              <ol className="flex flex-wrap justify-center text-sm opacity-90" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                  <Link href="/" itemProp="item" className="hover:text-green-200 transition-colors">
                    <span itemProp="name">Inicio</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                  <span className="mx-2">→</span>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                  <Link href="/tipos" itemProp="item" className="hover:text-green-200 transition-colors">
                    <span itemProp="name">Tipos</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                  <span className="mx-2">→</span>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name" className="text-green-200 font-medium" aria-current="page">{titulo}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Imagen hero moderna */}
      <section className="py-12 bg-aqua-squeeze">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Columna de texto */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 bg-apple/10 text-apple font-medium rounded-full text-sm">
                    Probióticos Naturales
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-biscay leading-tight">
                    {titulo}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {descripcion}
                  </p>
                </div>
                
                {/* Beneficios destacados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {beneficios.slice(0, 4).map((beneficio, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                      <div className="w-2 h-2 bg-apple rounded-full flex-shrink-0"></div>
                      <span className="text-biscay font-medium text-sm">
                        {typeof beneficio === 'string' ? beneficio : beneficio.titulo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna de imagen */}
              <div className="order-first lg:order-last">
                <figure className="relative w-full max-w-sm mx-auto lg:max-w-md">
                  <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                    titulo.includes('Bifidobacterium') 
                      ? 'h-[360px] sm:h-[400px] lg:h-[450px]' 
                      : 'h-[400px] sm:h-[450px] lg:h-[500px]'
                  }`}>
                    <OptimizedImagePlaceholder 
                      src={imagenPrincipal.src} 
                      alt={imagenPrincipal.alt}
                      width={350}
                      height={450}
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

      {/* Layout principal con grid moderno */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Contenido principal */}
          <main className="lg:col-span-3 space-y-12" role="main">
            
            {/* Introducción con diseño moderno */}
            <article className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-apple">
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: introduccion }} 
                  className="text-gray-700 leading-relaxed"
                />
              </div>
            </article>

            {/* Características con cards modernas */}
            <section aria-labelledby="caracteristicas-heading">
              <h2 id="caracteristicas-heading" className="text-3xl font-bold mb-8 text-biscay flex items-center">
                <span className="w-8 h-8 bg-apple rounded-full flex items-center justify-center text-white mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
                Características Principales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caracteristicas.map((caracteristica, index) => (
                  <article key={index} className="bg-gradient-to-br from-gossip to-aqua-squeeze p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                    <header>
                      <h3 className="text-xl font-semibold mb-3 text-biscay flex items-center">
                        <span className="w-6 h-6 bg-apple rounded-full flex items-center justify-center text-white text-sm mr-2">
                          {index + 1}
                        </span>
                        {caracteristica.titulo}
                      </h3>
                    </header>
                    <p className="text-gray-700 leading-relaxed">{caracteristica.descripcion}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Beneficios con iconos modernos */}
            <section aria-labelledby="beneficios-heading">
              <h2 id="beneficios-heading" className="text-3xl font-bold mb-8 text-biscay flex items-center">
                <span className="w-8 h-8 bg-st-tropaz rounded-full flex items-center justify-center text-white mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </span>
                Beneficios para la Salud
              </h2>
              <div className="space-y-6">
                {beneficios.map((beneficio, index) => (
                  <article key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-seagull hover:shadow-lg transition-shadow duration-300">
                    <header>
                      <h3 className="text-xl font-semibold mb-3 text-st-tropaz">{beneficio.titulo}</h3>
                    </header>
                    <p className="text-gray-700 leading-relaxed">{beneficio.descripcion}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Cepas populares con diseño moderno */}
            <section aria-labelledby="cepas-heading">
              <h2 id="cepas-heading" className="text-3xl font-bold mb-8 text-biscay flex items-center">
                <span className="w-8 h-8 bg-san-marino rounded-full flex items-center justify-center text-white mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 008 21a8.014 8.014 0 003.756-5.243z"/>
                  </svg>
                </span>
                Cepas Más Estudiadas
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {cepasPopulares.map((cepa, index) => (
                  <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-ghost">
                    <header className="mb-6">
                      <h3 className="text-2xl font-bold mb-3 text-biscay">{cepa.nombre}</h3>
                      <p className="text-gray-600 leading-relaxed">{cepa.descripcion}</p>
                    </header>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-st-tropaz mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Beneficios Principales
                        </h4>
                        <ul className="space-y-1">
                          {cepa.beneficios.map((beneficio, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-start">
                              <span className="w-1.5 h-1.5 bg-apple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {beneficio}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {cepa.condiciones && cepa.condiciones.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-st-tropaz mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8v2h1a1 1 0 100-2h-1zm-6 0a1 1 0 100 2v-2z" clipRule="evenodd"/>
                            </svg>
                            Condiciones de Salud
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cepa.condiciones.map((condicion, i) => (
                              <span key={i} className="text-xs bg-seagull bg-opacity-20 text-st-tropaz px-3 py-1 rounded-full">
                                {condicion}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Alimentos naturales con grid moderno */}
            {alimentosNaturales && alimentosNaturales.length > 0 && (
              <section aria-labelledby="alimentos-heading">
                <h2 id="alimentos-heading" className="text-3xl font-bold mb-8 text-biscay flex items-center">
                  <span className="w-8 h-8 bg-de-york rounded-full flex items-center justify-center text-white mr-3">
                    🍽️
                  </span>
                  Fuentes Alimentarias Naturales
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {alimentosNaturales.map((alimento, index) => (
                    <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
                      {alimento.imagen && (
                        <figure className="relative w-full h-48 overflow-hidden">
                          <OptimizedImagePlaceholder 
                            src={alimento.imagen.src}
                            alt={alimento.imagen.alt}
                            width={300}
                            height={200}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          />
                        </figure>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-biscay">{alimento.nombre}</h3>
                        <p className="text-gray-700 leading-relaxed">{alimento.descripcion}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Secciones de contenido adicional */}
            {seccionesContenido && seccionesContenido.map((seccion, index) => (
              <section key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-biscay border-b border-gossip pb-4">{seccion.titulo}</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {seccion.contenido}
                </div>
              </section>
            ))}

            {/* Referencias científicas con diseño académico moderno */}
            <section aria-labelledby="estudios-heading">
              <h2 id="estudios-heading" className="text-3xl font-bold mb-8 text-biscay flex items-center">
                <span className="w-8 h-8 bg-san-marino rounded-full flex items-center justify-center text-white mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </span>
                Evidencia Científica
              </h2>
              <div className="space-y-6">
                {estudiosRelevantes.map((estudio, index) => (
                  <article key={index} className="bg-white border border-ghost rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <button
                      onClick={() => toggleStudy(index)}
                      className="w-full p-6 text-left hover:bg-aqua-squeeze transition-colors rounded-xl"
                      aria-expanded={expandedStudy === index}
                      aria-controls={`study-content-${index}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-4">
                          <h3 className="text-lg font-semibold mb-2 text-biscay leading-tight">
                            {estudio.titulo}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                              </svg>
                              {estudio.autores}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                              </svg>
                              {estudio.año}
                            </span>
                            <span className="flex items-center italic">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                              </svg>
                              {estudio.publicacion}
                            </span>
                          </div>
                        </div>
                        <svg 
                          className={`w-5 h-5 text-st-tropaz transform transition-transform ${expandedStudy === index ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {expandedStudy === index && (
                      <div id={`study-content-${index}`} className="px-6 pb-6">
                        <div className="border-t border-gossip pt-4">
                          <p className="text-gray-700 leading-relaxed mb-4">{estudio.resumen}</p>
                          {estudio.url && (
                            <a 
                              href={estudio.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-st-tropaz hover:text-san-marino transition-colors font-medium"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Ver estudio completo
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* FAQ con acordeón moderno */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-3xl font-bold mb-8 text-biscay flex items-center">
                <span className="w-8 h-8 bg-seagull rounded-full flex items-center justify-center text-white mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </span>
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <article key={index} className="bg-white border border-ghost rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left hover:bg-aqua-squeeze transition-colors rounded-xl"
                      aria-expanded={expandedFaq === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-biscay pr-4">{item.pregunta}</h3>
                        <svg 
                          className={`w-5 h-5 text-st-tropaz transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <div id={`faq-answer-${index}`} className="px-6 pb-6">
                        <div className="border-t border-gossip pt-4">
                          <p className="text-gray-700 leading-relaxed">{item.respuesta}</p>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar moderno */}
          <aside className="lg:col-span-1" role="complementary">
            <div className="sticky top-6 space-y-8">
              
              {/* Contenido relacionado */}
              <div className="bg-gradient-to-br from-aqua-squeeze to-gossip p-6 rounded-2xl shadow-lg border border-ghost">
                <h3 className="text-xl font-bold mb-6 text-biscay flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                  </svg>
                  Contenido Relacionado
                </h3>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/que-son" className="flex items-center text-st-tropaz hover:text-san-marino transition-colors group">
                        <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        ¿Qué son los probióticos?
                      </Link>
                    </li>
                    <li>
                      <Link href="/beneficios" className="flex items-center text-st-tropaz hover:text-san-marino transition-colors group">
                        <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Beneficios de los probióticos
                      </Link>
                    </li>
                    <li>
                      <Link href="/como-elegir" className="flex items-center text-st-tropaz hover:text-san-marino transition-colors group">
                        <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Cómo elegir probióticos
                      </Link>
                    </li>
                    <li>
                      <Link href="/referencias" className="flex items-center text-st-tropaz hover:text-san-marino transition-colors group">
                        <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Referencias científicas
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              
              {/* Otros tipos de probióticos */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-ghost">
                <h3 className="text-xl font-bold mb-6 text-biscay flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  Otros Tipos
                </h3>
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/tipos/lactobacillus" className="flex items-center text-apple hover:text-st-tropaz transition-colors group p-2 rounded-lg hover:bg-aqua-squeeze">
                        <span className="w-6 h-6 bg-apple rounded-full flex items-center justify-center text-white text-xs mr-3 group-hover:bg-st-tropaz transition-colors">L</span>
                        Lactobacillus
                      </Link>
                    </li>
                    <li>
                      <Link href="/tipos/bifidobacterium" className="flex items-center text-san-marino hover:text-st-tropaz transition-colors group p-2 rounded-lg hover:bg-aqua-squeeze">
                        <span className="w-6 h-6 bg-san-marino rounded-full flex items-center justify-center text-white text-xs mr-3 group-hover:bg-st-tropaz transition-colors">B</span>
                        Bifidobacterium
                      </Link>
                    </li>
                    <li>
                      <Link href="/tipos/saccharomyces" className="flex items-center text-de-york hover:text-st-tropaz transition-colors group p-2 rounded-lg hover:bg-aqua-squeeze">
                        <span className="w-6 h-6 bg-de-york rounded-full flex items-center justify-center text-white text-xs mr-3 group-hover:bg-st-tropaz transition-colors">S</span>
                        Saccharomyces
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* CTA destacado */}
              <div className="bg-gradient-to-r from-apple to-st-tropaz p-6 rounded-2xl shadow-lg text-white">
                <h3 className="text-lg font-bold mb-3">¿Necesitas ayuda personalizada?</h3>
                <p className="text-sm mb-4 text-green-100">
                  Encuentra el probiótico perfecto para tus necesidades específicas.
                </p>
                <Link 
                  href="/como-elegir" 
                  className="inline-flex items-center bg-white text-apple px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Guía de selección
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
} 