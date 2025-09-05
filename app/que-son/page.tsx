'use client';

import Link from 'next/link';
import OptimizedImage from '../components/OptimizedImage';
import ArticleBanner from '../components/ArticleBanner';
import { useState } from 'react';

export default function QueSon() {
  const [referencesOpen, setReferencesOpen] = useState(false);

  // Datos estructurados JSON-LD para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "¿Qué son los Probióticos? Guía Científica Completa",
    "description": "Descubre qué son los probióticos, su historia, tipos principales, mecanismos de acción y aplicaciones en salud.",
    "author": {
      "@type": "Organization",
      "name": "Probióticos Para Todos"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Probióticos Para Todos",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.probioticosparatodos.com/images/logo_transparente.png"
      }
    },
    "datePublished": "2024-06-01T08:00:00+00:00",
    "dateModified": "2024-12-01T08:00:00+00:00",
    "image": "https://www.probioticosparatodos.com/images/mujer_exlpicando_probioticos.png",
    "url": "https://www.probioticosparatodos.com/que-son",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.probioticosparatodos.com/que-son"
    },
    "articleSection": "Educación en Salud",
    "keywords": "probióticos, microbioma, Lactobacillus, Bifidobacterium, salud digestiva"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué son los probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los probióticos son microorganismos vivos que, cuando se administran en cantidades adecuadas, proporcionan beneficios a la salud del huésped, según la definición establecida por la Organización Mundial de la Salud (OMS) y la FAO."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son los principales tipos de probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los principales tipos incluyen bacterias de los géneros Lactobacillus (L. acidophilus, L. rhamnosus, L. casei), Bifidobacterium (B. bifidum, B. longum, B. breve), y levaduras como Saccharomyces boulardii."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funcionan los probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los probióticos funcionan compitiendo por receptores intestinales, produciendo sustancias antimicrobianas, modulando el sistema inmunológico, manteniendo la barrera intestinal y sintetizando nutrientes esenciales."
        }
      }
    ]
  };
  /*
  const faqData = [
    {
      question: "¿Qué son los probióticos?",
      answer: "Los probióticos son microorganismos vivos —principalmente bacterias y algunas levaduras— que, cuando se administran en cantidades adecuadas, proporcionan beneficios a la salud del huésped, según la definición establecida por la Organización Mundial de la Salud (OMS) y la FAO."
    },
    {
      question: "¿Cuáles son los principales tipos de probióticos?",
      answer: "Los principales tipos incluyen bacterias de los géneros Lactobacillus (L. acidophilus, L. rhamnosus, L. casei, L. plantarum), Bifidobacterium (B. bifidum, B. longum, B. breve, B. infantis), levaduras como Saccharomyces boulardii y bacterias como Streptococcus thermophilus."
    },
    {
      question: "¿Cómo funcionan los probióticos?",
      answer: "Los probióticos funcionan a través de varios mecanismos: compiten por receptores de adhesión intestinal bloqueando bacterias patógenas, producen sustancias antimicrobianas, modulan el sistema inmunológico, mantienen la barrera intestinal y sintetizan nutrientes esenciales como vitaminas del complejo B y ácidos grasos de cadena corta."
    },
    {
      question: "¿Por qué es importante la especificidad de cepa en los probióticos?",
      answer: "La eficacia de los probióticos es cepa-específica, lo que significa que no todas las cepas de una misma especie producen los mismos efectos. Por ello, es importante elegir productos con cepas documentadas clínicamente según el objetivo deseado."
    }
  ];
  */

  return (
    <>
      {/* Datos estructurados JSON-LD para SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Schema.org estructurado (temporarily disabled) */}
      {/* <SEOSchema type="faq" data={faqData} /> */}
      
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">¿Qué son los Probióticos?</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Una explicación científica de los probióticos, su naturaleza y cómo interactúan con nuestro cuerpo.
          </p>
          
          {/* Breadcrumbs mejorados para SEO */}
          <nav aria-label="Navegación por migas de pan" className="mt-4">
            <ol className="flex flex-wrap text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                <Link href="/" itemProp="item" className="hover:text-green-200 transition-colors">
                  <span itemProp="name">Inicio</span>
                </Link>
                <meta itemProp="position" content="1" />
                <span className="mx-2">→</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                <span itemProp="name" className="text-green-200 font-medium">¿Qué son los Probióticos?</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
        </div>
      </header>
      
      {/* Ad Banner Top (temporarily disabled) */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="top" /> */}
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Definición científica</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Los probióticos son microorganismos vivos —principalmente bacterias y algunas levaduras— que, cuando se administran en cantidades adecuadas, proporcionan beneficios a la salud del huésped, según la definición establecida por la Organización Mundial de la Salud (OMS) y la FAO <a href="#ref1" className="text-green-600 font-semibold">[1]</a>. Estas bacterias beneficiosas coexisten en armonía con nuestro cuerpo, especialmente en el sistema digestivo, donde forman parte de la microbiota intestinal.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                A lo largo de las últimas décadas, múltiples investigaciones han demostrado que ciertas cepas probióticas pueden mejorar la salud digestiva, fortalecer el sistema inmunológico, prevenir trastornos gastrointestinales, e incluso influir en el estado de ánimo y la función cerebral, a través del llamado eje intestino-cerebro <a href="#ref2" className="text-green-600 font-semibold">[2]</a><a href="#ref3" className="text-green-600 font-semibold">[3]</a>.
              </p>
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4 sm:my-6 text-sm sm:text-base">
                &ldquo;El término &apos;probiótico&apos; proviene del latín pro (&apos;a favor de&apos;) y del griego bios (&apos;vida&apos;), lo que refleja su papel esencial en el equilibrio intestinal y la salud general del organismo.&rdquo;
              </blockquote>
            </section>
            
            {/* Imagen fuera del recuadro */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-full max-w-[600px] h-[200px] sm:h-[300px] md:h-[350px]">
                <OptimizedImage 
                  src="/images/mujer_exlpicando_probioticos.png" 
                  alt="Mujer explicando los diferentes tipos de probióticos"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 600px, 600px"
                  priority
                />
              </div>
            </div>
            
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Tipos principales de probióticos</h2>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Las cepas probióticas más estudiadas y utilizadas en suplementos y alimentos fermentados pertenecen a los siguientes géneros:
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600 flex items-center">
                    <div className="h-6 w-6 mr-2">
                      <OptimizedImage 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Lactobacillus"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    Lactobacillus
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Uno de los géneros más comunes de bacterias probióticas, presentes naturalmente en el tracto gastrointestinal y urogenital. Algunas cepas ayudan a digerir la lactosa, refuerzan la inmunidad y reducen episodios de diarrea <a href="#ref4" className="text-green-600 font-semibold">[4]</a>.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    <strong>Cepas destacadas:</strong> L. acidophilus, L. rhamnosus, L. casei, L. plantarum.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600 flex items-center">
                    <div className="h-6 w-6 mr-2">
                      <OptimizedImage 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Bifidobacterium"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    Bifidobacterium
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Estas bacterias colonizan principalmente el colon, especialmente en etapas tempranas de la vida, y son clave para la digestión de fibra, la síntesis de vitaminas y la prevención de infecciones intestinales <a href="#ref5" className="text-green-600 font-semibold">[5]</a>.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    <strong>Cepas destacadas:</strong> B. bifidum, B. longum, B. breve, B. infantis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600 flex items-center">
                    <div className="h-6 w-6 mr-2">
                      <OptimizedImage 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Saccharomyces"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    Saccharomyces boulardii
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Una levadura probiótica con eficacia comprobada en la prevención y tratamiento de la diarrea asociada a antibióticos, infecciones intestinales y desequilibrios de la flora intestinal <a href="#ref6" className="text-green-600 font-semibold">[6]</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600 flex items-center">
                    <div className="h-6 w-6 mr-2">
                      <OptimizedImage 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Streptococcus"
                        width={24}
                        height={24}
                        priority
                      />
                    </div>
                    Streptococcus thermophilus
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Frecuente en la elaboración de yogures y quesos. Mejora la digestión de lactosa y posee propiedades antiinflamatorias.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">¿Cómo funcionan los probióticos?</h2>
              
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Los mecanismos de acción de los probióticos son diversos y complejos, y varían según la cepa específica. Algunos de los efectos más conocidos incluyen:
              </p>
              
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                <li>
                  <strong>Competencia por receptores de adhesión intestinal:</strong> Los probióticos bloquean la unión de bacterias patógenas <a href="#ref7" className="text-green-600 font-semibold">[7]</a>.
                </li>
                <li>
                  <strong>Producción de sustancias antimicrobianas:</strong> Como ácidos orgánicos y bacteriocinas que inhiben microorganismos dañinos <a href="#ref8" className="text-green-600 font-semibold">[8]</a>.
                </li>
                <li>
                  <strong>Modulación del sistema inmunológico:</strong> Interactúan con células inmunitarias intestinales para fortalecer las defensas naturales <a href="#ref9" className="text-green-600 font-semibold">[9]</a>.
                </li>
                <li>
                  <strong>Mantenimiento de la barrera intestinal:</strong> Previenen la &ldquo;permeabilidad intestinal&rdquo; o &ldquo;intestino permeable&rdquo;, relacionada con inflamación crónica <a href="#ref10" className="text-green-600 font-semibold">[10]</a>.
                </li>
                <li>
                  <strong>Síntesis de nutrientes esenciales:</strong> Algunas cepas generan vitaminas del complejo B y ácidos grasos de cadena corta como el butirato, vital para la salud del colon <a href="#ref11" className="text-green-600 font-semibold">[11]</a>.
                </li>
              </ul>
              
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong className="text-green-700">Nota clave:</strong> La eficacia de los probióticos es cepa-específica, lo que significa que no todas las cepas de una misma especie producen los mismos efectos. Por ello, es importante elegir productos con cepas documentadas clínicamente según el objetivo deseado.
                </p>
              </div>
            </section>
            
            {/* Banner de artículo */}
            <ArticleBanner />
            
            {/* Nueva sección: Historia y evolución */}
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Historia y evolución del concepto</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Orígenes históricos</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    El concepto de probióticos tiene raíces que se remontan a principios del siglo XX. El científico ruso <strong>Élie Metchnikoff</strong>, ganador del Premio Nobel de Fisiología en 1908, fue quien primero propuso que el consumo de bacterias beneficiosas podría prolongar la vida y mejorar la salud.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Metchnikoff observó que los campesinos búlgaros, que consumían regularmente yogur fermentado, tenían una longevidad excepcional. Esto lo llevó a investigar las bacterias lácticas y su papel en la salud intestinal, sentando las bases de lo que hoy conocemos como terapia probiótica.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Evolución científica moderna</h3>
                  
                  {/* Timeline visual */}
                  <div className="relative">
                    {/* Línea vertical del timeline */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-300"></div>
                    
                    <div className="space-y-6">
                      {/* 1950s-1960s */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="ml-16">
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-bold text-green-800 mb-1">1950s - 1960s</h4>
                            <p className="text-sm text-green-700">Identificación y aislamiento de cepas específicas</p>
                            <p className="text-xs text-green-600 mt-1">Primeros estudios de caracterización microbiana</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* 1970s-1980s */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="ml-16">
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-1">1970s - 1980s</h4>
                            <p className="text-sm text-blue-700">Primeros estudios clínicos controlados</p>
                            <p className="text-xs text-blue-600 mt-1">Establecimiento de metodologías de investigación</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* 1990s */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="ml-16">
                          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <h4 className="font-bold text-purple-800 mb-1">1990s</h4>
                            <p className="text-sm text-purple-700">Desarrollo de tecnologías de encapsulación</p>
                            <p className="text-xs text-purple-600 mt-1">Mejoras en supervivencia y estabilidad</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* 2000s */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="ml-16">
                          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <h4 className="font-bold text-orange-800 mb-1">2000s</h4>
                            <p className="text-sm text-orange-700">Proyecto del microbioma humano</p>
                            <p className="text-xs text-orange-600 mt-1">Revolución en comprensión del ecosistema intestinal</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* 2010s-presente */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="ml-16">
                          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <h4 className="font-bold text-red-800 mb-1">2010s - Presente</h4>
                            <p className="text-sm text-red-700">Medicina personalizada basada en microbioma</p>
                            <p className="text-xs text-red-600 mt-1">Inteligencia artificial y terapias dirigidas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Nueva sección: Microbioma intestinal */}
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">El ecosistema del microbioma intestinal</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Composición del microbioma</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    El intestino humano alberga aproximadamente <strong>100 billones de microorganismos</strong>, superando en número a nuestras propias células. Este complejo ecosistema incluye:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-800 mb-2">Bacterias (99%)</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Firmicutes (60-80%)</li>
                        <li>• Bacteroidetes (15-25%)</li>
                        <li>• Actinobacteria (3-5%)</li>
                        <li>• Proteobacteria (1-3%)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Otros microorganismos</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Levaduras y hongos</li>
                        <li>• Arqueas metanogénicas</li>
                        <li>• Virus intestinales</li>
                        <li>• Protozoarios</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Funciones del microbioma</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-semibold text-gray-800">Metabólicas</h4>
                      <p className="text-sm text-gray-700">Fermentación de fibras, síntesis de vitaminas K y B, producción de ácidos grasos de cadena corta</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-gray-800">Protectoras</h4>
                      <p className="text-sm text-gray-700">Barrera contra patógenos, competencia por nutrientes, colonización resistente</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-semibold text-gray-800">Inmunológicas</h4>
                      <p className="text-sm text-gray-700">Modulación de respuestas inmunes, desarrollo del sistema inmune adaptativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Nueva sección: Criterios científicos */}
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Criterios científicos para probióticos</h2>
              
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                Para que un microorganismo sea considerado probiótico, debe cumplir con estrictos criterios establecidos por organizaciones internacionales:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">1. Criterios de seguridad</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                    <li><strong>Origen humano:</strong> Preferiblemente aislados del tracto gastrointestinal humano</li>
                    <li><strong>Historial de uso seguro:</strong> GRAS (Generally Recognized as Safe) o QPS (Qualified Presumption of Safety)</li>
                    <li><strong>Ausencia de patogenicidad:</strong> No hemólisis, no resistencia a antibióticos transferible</li>
                    <li><strong>Estabilidad genética:</strong> Sin genes de virulencia o toxinas</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">2. Criterios funcionales</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                    <li><strong>Supervivencia gastrointestinal:</strong> Resistencia a ácido gástrico y sales biliares</li>
                    <li><strong>Adhesión intestinal:</strong> Capacidad de adherirse al epitelio intestinal</li>
                    <li><strong>Actividad antimicrobiana:</strong> Inhibición de patógenos intestinales</li>
                    <li><strong>Modulación inmune:</strong> Efectos beneficiosos en respuestas inmunitarias</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">3. Criterios tecnológicos</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                    <li><strong>Viabilidad durante procesamiento:</strong> Estabilidad en condiciones de manufactura</li>
                    <li><strong>Vida útil adecuada:</strong> Mantenimiento de viabilidad durante almacenamiento</li>
                    <li><strong>Propiedades organolépticas:</strong> No alteración negativa del sabor o textura</li>
                    <li><strong>Escalabilidad industrial:</strong> Posibilidad de producción comercial</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Nueva sección: Aplicaciones clínicas */}
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Áreas de aplicación en salud</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">Salud digestiva</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Equilibrio intestinal</h4>
                      <p className="text-sm text-gray-700">Apoyo en el mantenimiento de una microbiota saludable durante y después de tratamientos médicos.</p>
                    </div>
                    <div className="border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Digestión saludable</h4>
                      <p className="text-sm text-gray-700">Contribución al proceso digestivo normal y bienestar gastrointestinal general.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Bienestar general</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-800 text-sm mb-1">Función inmune</h4>
                      <p className="text-xs text-blue-700">Apoyo al sistema inmunológico natural</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-800 text-sm mb-1">Absorción de nutrientes</h4>
                      <p className="text-xs text-blue-700">Optimización de procesos nutritivos</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-800 text-sm mb-1">Bienestar cotidiano</h4>
                      <p className="text-xs text-blue-700">Contribución al bienestar diario</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Investigación activa</h3>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-gray-700 mb-3">
                      Los científicos continúan investigando el potencial de los probióticos en diversas áreas:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                        <li>Conexión intestino-cerebro</li>
                        <li>Metabolismo y nutrición</li>
                        <li>Salud cardiovascular</li>
                        <li>Envejecimiento saludable</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                        <li>Salud infantil y materna</li>
                        <li>Bienestar urogenital</li>
                        <li>Salud oral</li>
                        <li>Recuperación y vitalidad</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Nueva sección: Futuro y tendencias */}
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Futuro de los probióticos y tendencias emergentes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">Probióticos de próxima generación</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-indigo-400 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Probióticos sintéticos</h4>
                      <p className="text-sm text-gray-700">Microorganismos genéticamente modificados para funciones específicas, como producción dirigida de metabolitos terapéuticos.</p>
                    </div>
                    <div className="border-l-4 border-indigo-400 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Consorcios microbianos</h4>
                      <p className="text-sm text-gray-700">Combinaciones específicas de múltiples cepas diseñadas para trabajar sinérgicamente en funciones complejas.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">Medicina personalizada</h3>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <p className="text-sm text-gray-700 mb-3">
                      El futuro apunta hacia la <strong>terapia probiótica personalizada</strong> basada en:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-indigo-700">
                      <li>Análisis del microbioma individual</li>
                      <li>Perfiles genéticos del huésped</li>
                      <li>Biomarcadores metabólicos específicos</li>
                      <li>Historial clínico y estilo de vida</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-600">Tecnologías innovadoras</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-indigo-100 rounded-full p-2 mt-1">
                        <span className="text-indigo-600 font-bold text-xs">AI</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Inteligencia Artificial</h4>
                        <p className="text-sm text-gray-700">Análisis de big data para identificar patrones microbioma-salud y predecir respuestas terapéuticas.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-indigo-100 rounded-full p-2 mt-1">
                        <span className="text-indigo-600 font-bold text-xs">3D</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Modelos 3D intestinales</h4>
                        <p className="text-sm text-gray-700">Orgánoides y chips intestinales para testeo más preciso de eficacia probiótica antes de ensayos clínicos.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-indigo-100 rounded-full p-2 mt-1">
                        <span className="text-indigo-600 font-bold text-xs">💊</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Sistemas de liberación inteligentes</h4>
                        <p className="text-sm text-gray-700">Cápsulas que liberan probióticos en sitios específicos del tracto gastrointestinal según condiciones locales.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Referencias científicas - Desplegable */}
            <section className="bg-white rounded-lg shadow-sm mb-6 sm:mb-8 border border-gray-200" id="referencias">
              <button 
                onClick={() => setReferencesOpen(!referencesOpen)}
                className="w-full p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                aria-expanded={referencesOpen}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
                    <span className="mr-3">📚</span>
                    Referencias Científicas
                    <span className="ml-2 text-sm font-normal text-gray-600">
                      ({referencesOpen ? 'Ocultar' : 'Ver'} {14} referencias)
                    </span>
                  </h2>
                  <svg 
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${referencesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {referencesOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-sm text-gray-600 mb-4 italic">
                      Todas las referencias han sido verificadas y provienen de fuentes científicas peer-reviewed
                    </p>
                    <ol className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <li id="ref1">FAO/WHO. <em>Guidelines for the Evaluation of Probiotics in Food</em> (2002). <a href="https://isappscience.org/wp-content/uploads/2019/04/probiotic_guidelines.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enlace al documento</a></li>
                      
                      <li id="ref2">Cryan J.F. &amp; Dinan T.G. <em>Mind-altering microorganisms: the impact of the gut microbiota on brain and behaviour</em>. Nature Reviews Neuroscience, 2012. DOI: <a href="https://doi.org/10.1038/nrn3346" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1038/nrn3346</a></li>
                      
                      <li id="ref3">Wang H. et al. <em>Effect of Probiotics on Central Nervous System Functions in Animals and Humans</em>. Frontiers in Microbiology, 2016.</li>
                      
                      <li id="ref4">Ouwehand A.C. et al. <em>Probiotics: mechanisms and established effects</em>. International Dairy Journal, 2002. DOI: <a href="https://doi.org/10.1016/S0958-6946(01)00159-5" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1016/S0958-6946(01)00159-5</a></li>
                      
                      <li id="ref5">Turroni F. et al. <em>Bifidobacterium bifidum as an example of a specialized human gut commensal</em>. Applied and Environmental Microbiology, 2008. DOI: <a href="https://doi.org/10.1128/AEM.02216-08" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1128/AEM.02216-08</a></li>
                      
                      <li id="ref6">McFarland L.V. <em>Systematic review and meta-analysis of Saccharomyces boulardii in adult patients</em>. World Journal of Gastroenterology, 2010.</li>
                      
                      <li id="ref7">Servin A.L. <em>Antagonistic activities of lactobacilli and bifidobacteria against microbial pathogens</em>. FEMS Microbiology Reviews, 2004. DOI: <a href="https://doi.org/10.1016/j.femsre.2004.01.003" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1016/j.femsre.2004.01.003</a></li>
                      
                      <li id="ref8">Corr S.C. et al. <em>Bacteriocin production as a mechanism for the antiinfective activity of Lactobacillus salivarius UCC118</em>. Proceedings of the National Academy of Sciences, 2007. DOI: <a href="https://doi.org/10.1073/pnas.0700440104" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1073/pnas.0700440104</a></li>
                      
                      <li id="ref9">Bron P.A. et al. <em>Emerging molecular insights into the interaction between probiotics and the host intestinal mucosa</em>. Nature Reviews Microbiology, 2012.</li>
                      
                      <li id="ref10">Wells J.M. et al. <em>Epithelial crosstalk at the microbiota-mucosal interface</em>. Proceedings of the National Academy of Sciences, 2017.</li>
                      
                      <li id="ref11">Louis P. &amp; Flint H.J. <em>Formation of propionate and butyrate by the human colonic microbiota</em>. Environmental Microbiology, 2017.</li>
                      
                      <li id="ref12">Sender R., Fuchs S. &amp; Milo R. <em>Revised Estimates for the Number of Human and Bacteria Cells in the Body</em>. PLoS Biology, 2016. DOI: <a href="https://doi.org/10.1016/j.cell.2016.01.013" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1016/j.cell.2016.01.013</a></li>
                      
                      <li id="ref13">Qin J. et al. <em>A human gut microbial gene catalogue established by metagenomic sequencing</em>. Nature, 2010. DOI: <a href="https://doi.org/10.1038/nature08821" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1038/nature08821</a></li>
                      
                      <li id="ref14">Metchnikoff E. <em>The Prolongation of Life: Optimistic Studies</em>, 1907. <span className="text-gray-500">Libro de dominio público disponible en bibliotecas digitales.</span></li>
                    </ol>
                  </div>
                </div>
              )}
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Datos interesantes</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El cuerpo humano contiene más microorganismos que células humanas (aprox. 39 billones vs. 30 billones) <a href="#ref12" className="text-green-600 font-semibold">[12]</a>.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    La microbiota intestinal puede estar compuesta por hasta 1,000 especies distintas de bacterias <a href="#ref13" className="text-green-600 font-semibold">[13]</a>.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Los probióticos han sido utilizados ancestralmente en alimentos fermentados como el kéfir, chucrut, kimchi y miso.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El científico ruso Elie Metchnikoff, Premio Nobel de Medicina, propuso en 1907 que las bacterias del yogurt podían promover la longevidad <a href="#ref14" className="text-green-600 font-semibold">[14]</a>.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Temas relacionados</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <Link href="/beneficios" className="text-green-600 hover:text-green-700 transition-colors">
                      Beneficios de los probióticos para la salud
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <Link href="/como-elegir" className="text-green-600 hover:text-green-700 transition-colors">
                      Cómo elegir el probiótico adecuado
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <a href="#referencias" className="text-green-600 hover:text-green-700 transition-colors">
                      Referencias científicas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="bottom" /> */}
      </div>
    </>
  );
} 