'use client';

import Link from 'next/link';
import { tiposData, tipoSlugs } from './data';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';
import ArticleBanner from '../components/ArticleBanner';
import { useState } from 'react';

export default function TiposIndexPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Datos estructurados JSON-LD para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tipos de Probióticos: Guía Completa de Géneros y Especies 2024",
    "description": "Descubre los diferentes tipos de probióticos: Lactobacillus, Bifidobacterium y Saccharomyces boulardii. Guía completa con beneficios específicos, aplicaciones clínicas y evidencia científica.",
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
        "url": "https://www.probioticosparatodos.com/images/logo_transparente.png",
        "width": 200,
        "height": 200
      }
    },
    "datePublished": "2024-06-01T08:00:00+00:00",
    "dateModified": "2024-12-01T08:00:00+00:00",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.probioticosparatodos.com/images/tipos_probioticos.png",
      "width": 1200,
      "height": 630,
      "alt": "Tipos y clasificación de probióticos"
    },
    "url": "https://www.probioticosparatodos.com/tipos",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.probioticosparatodos.com/tipos"
    },
    "articleSection": "Educación en Salud",
    "keywords": [
      "tipos de probióticos",
      "Lactobacillus",
      "Bifidobacterium", 
      "Saccharomyces boulardii",
      "géneros probióticos",
      "especies probióticas",
      "clasificación probióticos",
      "bacterias lácticas",
      "microbioma intestinal"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Probióticos",
        "description": "Microorganismos vivos beneficiosos para la salud"
      },
      {
        "@type": "Thing", 
        "name": "Microbioma",
        "description": "Comunidad de microorganismos en el cuerpo humano"
      }
    ],
    "mentions": [
      {
        "@type": "MedicalCondition",
        "name": "Salud digestiva"
      },
      {
        "@type": "MedicalCondition", 
        "name": "Sistema inmunológico"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre género, especie y cepa de probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El género es la categoría más amplia (ej: Lactobacillus), la especie es más específica (ej: L. acidophilus), y la cepa es la identificación única de una bacteria específica (ej: L. acidophilus NCFM). Cada nivel tiene características y beneficios más específicos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de probiótico es mejor para la salud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No existe un probiótico universalmente mejor. La efectividad depende de necesidades específicas: Lactobacillus para salud digestiva general, Bifidobacterium para salud del colon, y Saccharomyces boulardii para diarrea asociada a antibióticos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo combinar diferentes tipos de probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, muchos suplementos contienen múltiples cepas porque la diversidad puede ser beneficiosa. Sin embargo, es importante verificar compatibilidad y dosis apropiadas. Consulta con un profesional de salud antes de combinar múltiples suplementos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los alimentos fermentados contienen diferentes tipos de probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, cada alimento fermentado contiene diferentes tipos: el yogur tiene principalmente Lactobacillus y Streptococcus, el kéfir incluye múltiples especies y levaduras, mientras que el kimchi y chucrut contienen Lactobacillus plantarum."
        }
      }
    ]
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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

      {/* Header semántico optimizado */}
      <header className="bg-gradient-to-r from-apple to-st-tropaz text-white py-12 sm:py-16" role="banner">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" itemProp="headline">
              Tipos de Probióticos
            </h1>
            <p className="text-xl sm:text-2xl mb-6 text-green-100" itemProp="description">
              Descubre los diferentes géneros y especies de probióticos
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Explora las características únicas, beneficios específicos y aplicaciones de cada tipo 
              de probiótico para optimizar tu salud digestiva e inmunológica.
            </p>
            
            {/* Breadcrumbs semánticos */}
            <nav aria-label="Navegación por migas de pan" className="mt-8" role="navigation">
              <ol className="flex flex-wrap justify-center text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                  <Link href="/" itemProp="item" className="hover:text-green-200 transition-colors">
                    <span itemProp="name">Inicio</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                  <span className="mx-2" aria-hidden="true">→</span>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                  <span itemProp="name" className="text-green-200 font-medium" aria-current="page">Tipos de Probióticos</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Sección de introducción educativa */}
      <section className="py-12 bg-aqua-squeeze" aria-labelledby="intro-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <article>
                <h2 id="intro-heading" className="text-3xl font-bold mb-6 text-biscay">
                  La Diversidad del Mundo Probiótico
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  No todos los probióticos son iguales. Cada género, especie y cepa tiene propiedades 
                  únicas y puede ofrecer beneficios específicos para diferentes aspectos de la salud.
                </p>
                <p className="text-gray-600 mb-6">
                  La investigación científica ha identificado cientos de cepas probióticas, pero algunas 
                  destacan por su evidencia clínica y aplicaciones terapéuticas documentadas.
                </p>
                
                <aside className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-apple">
                  <h3 className="font-semibold text-biscay mb-2">💡 ¿Sabías que?</h3>
                  <p className="text-gray-700 text-sm">
                    La eficacia de los probióticos es específica de cada cepa. Esto significa que 
                    L. acidophilus NCFM puede tener efectos diferentes a L. acidophilus DDS-1, 
                    incluso siendo la misma especie.
                  </p>
                </aside>
              </article>
              
              <figure className="flex justify-center">
                <OptimizedImagePlaceholder 
                  src="/images/tipos_probioticos.png"
                  alt="Clasificación y tipos de probióticos - géneros principales"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <figcaption className="sr-only">
                  Diagrama que muestra los principales tipos de probióticos y su clasificación
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Clasificación visual de tipos principales */}
      <section className="py-12" aria-labelledby="classification-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="classification-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Principales Géneros de Probióticos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" role="list">
              {/* Lactobacillus */}
              <article className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-san-marino" role="listitem">
                <header className="text-center mb-4">
                  <div className="w-16 h-16 bg-seagull rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay">Lactobacillus</h3>
                  <p className="text-sm text-gray-600">Bacterias lácticas</p>
                </header>
                <ul className="text-sm text-gray-700 space-y-2" role="list">
                  <li>• Producen ácido láctico</li>
                  <li>• Mejoran la digestión</li>
                  <li>• Apoyan la inmunidad</li>
                  <li>• Previenen infecciones</li>
                </ul>
                <footer className="mt-4 text-xs text-gray-500">
                  <strong>Especies populares:</strong> L. acidophilus, L. rhamnosus, L. casei
                </footer>
              </article>

              {/* Bifidobacterium */}
              <article className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-st-tropaz" role="listitem">
                <header className="text-center mb-4">
                  <div className="w-16 h-16 bg-gossip rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay">Bifidobacterium</h3>
                  <p className="text-sm text-gray-600">Bacterias bífidas</p>
                </header>
                <ul className="text-sm text-gray-700 space-y-2" role="list">
                  <li>• Dominan en bebés</li>
                  <li>• Producen vitaminas B</li>
                  <li>• Protegen el colon</li>
                  <li>• Mejoran el tránsito</li>
                </ul>
                <footer className="mt-4 text-xs text-gray-500">
                  <strong>Especies populares:</strong> B. bifidum, B. longum, B. breve
                </footer>
              </article>

              {/* Saccharomyces */}
              <article className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-de-york" role="listitem">
                <header className="text-center mb-4">
                  <div className="w-16 h-16 bg-seagull rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <span className="text-2xl">🍄</span>
                  </div>
                  <h3 className="text-xl font-bold text-biscay">Saccharomyces</h3>
                  <p className="text-sm text-gray-600">Levaduras beneficiosas</p>
                </header>
                <ul className="text-sm text-gray-700 space-y-2" role="list">
                  <li>• Resistente a antibióticos</li>
                  <li>• Combate diarrea</li>
                  <li>• Apoya la barrera intestinal</li>
                  <li>• Efecto antiinflamatorio</li>
                </ul>
                <footer className="mt-4 text-xs text-gray-500">
                  <strong>Especie principal:</strong> S. boulardii
                </footer>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de artículo */}
      <ArticleBanner />

      {/* Nueva sección: Comparación detallada */}
      <section className="py-12 bg-white" aria-labelledby="comparison-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="comparison-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Comparación Detallada de Tipos de Probióticos
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-apple to-st-tropaz text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tipo de Probiótico</th>
                    <th className="px-6 py-4 text-left font-semibold">Ubicación Principal</th>
                    <th className="px-6 py-4 text-left font-semibold">Beneficios Clave</th>
                    <th className="px-6 py-4 text-left font-semibold">Supervivencia Gástrica</th>
                    <th className="px-6 py-4 text-left font-semibold">Fuentes Alimentarias</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-apple">Lactobacillus</td>
                    <td className="px-6 py-4">Intestino delgado, vagina</td>
                    <td className="px-6 py-4">Digestión lactosa, salud vaginal, sistema inmune</td>
                    <td className="px-6 py-4"><span className="text-yellow-600">★★★☆☆</span> Moderada</td>
                    <td className="px-6 py-4">Yogur, kéfir, chucrut, kimchi</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-st-tropaz">Bifidobacterium</td>
                    <td className="px-6 py-4">Intestino grueso (colon)</td>
                    <td className="px-6 py-4">Síntesis vitaminas B, salud del colon, antienvejecimiento</td>
                    <td className="px-6 py-4"><span className="text-green-600">★★★★☆</span> Buena</td>
                    <td className="px-6 py-4">Productos lácteos fermentados, algunos vegetales fermentados</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-seagull">Saccharomyces</td>
                    <td className="px-6 py-4">Intestino delgado y grueso</td>
                    <td className="px-6 py-4">Resistencia antibióticos, anti-diarrea, detoxificación</td>
                    <td className="px-6 py-4"><span className="text-green-600">★★★★★</span> Excelente</td>
                    <td className="px-6 py-4">Kombucha, algunos suplementos especializados</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Historia y evolución científica */}
      <section className="py-12 bg-gray-50" aria-labelledby="history-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="history-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Historia del Descubrimiento de los Tipos Probióticos
            </h2>
            
            <div className="space-y-8">
              <article className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-apple">
                <h3 className="text-xl font-bold mb-4 text-apple flex items-center">
                  <span className="bg-apple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                  1857 - Primeros Lactobacillus
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Louis Pasteur</strong> fue el primero en observar bacterias lácticas durante sus estudios sobre la fermentación. 
                  Sin embargo, no fue hasta 1919 que <strong>Henri Tissier</strong> identificó formalmente el género Lactobacillus 
                  en el intestino humano, estableciendo las bases para entender su papel en la salud digestiva.
                </p>
                <div className="bg-apple/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Dato histórico:</strong> El primer Lactobacillus identificado fue L. acidophilus, 
                    descubierto por Moro en 1900 en las heces de bebés lactantes.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-st-tropaz">
                <h3 className="text-xl font-bold mb-4 text-st-tropaz flex items-center">
                  <span className="bg-st-tropaz text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                  1899 - Descubrimiento de Bifidobacterium
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Henri Tissier</strong> del Instituto Pasteur identificó las primeras bacterias bífidas en las heces de bebés alimentados con leche materna. 
                  Observó que estos bebés tenían menos problemas digestivos y propuso que estas bacterias "bifurcadas" 
                  (por su forma característica en Y) podrían ser beneficiosas para la salud infantil.
                </p>
                <div className="bg-st-tropaz/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Evolución científica:</strong> No fue hasta la década de 1960 que se estableció la nomenclatura moderna 
                    del género Bifidobacterium y se comenzó a estudiar sistemáticamente su papel en la salud.
                  </p>
                </div>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-seagull">
                <h3 className="text-xl font-bold mb-4 text-seagull flex items-center">
                  <span className="bg-seagull text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                  1920s - Saccharomyces boulardii
                </h3>
                <p className="text-gray-700 mb-4">
                  El microbiólogo francés <strong>Henri Boulard</strong> aisló esta levadura única en 1923 mientras estudiaba 
                  el uso tradicional de la piel de lichi y mangostán en el sudeste asiático para tratar el cólera. 
                  S. boulardii se convirtió en el primer probiótico no bacteriano en ser estudiado científicamente.
                </p>
                <div className="bg-seagull/10 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Aplicación moderna:</strong> Hoy en día, S. boulardii es ampliamente utilizada en hospitales 
                    europeos para prevenir la diarrea asociada a antibióticos y tratar infecciones por C. difficile.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Mecanismos de acción específicos */}
      <section className="py-12 bg-white" aria-labelledby="mechanisms-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="mechanisms-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              ¿Cómo Actúan los Diferentes Tipos en tu Cuerpo?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <article className="bg-gradient-to-br from-apple/10 to-apple/5 rounded-xl p-8 border border-apple/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-apple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-apple">Lactobacillus</h3>
                  <p className="text-sm text-gray-600">Mecanismos de Acción</p>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-apple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Producción de Ácido Láctico</h4>
                      <p className="text-sm text-gray-600">Acidifica el ambiente intestinal, inhibiendo patógenos como E. coli y Salmonella</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-apple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Competencia por Nutrientes</h4>
                      <p className="text-sm text-gray-600">Compite por hierro y otros nutrientes esenciales para bacterias dañinas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-apple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Estimulación Inmune</h4>
                      <p className="text-sm text-gray-600">Activa macrófagos y células NK (Natural Killer) para fortalecer defensas</p>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="bg-gradient-to-br from-st-tropaz/10 to-st-tropaz/5 rounded-xl p-8 border border-st-tropaz/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-st-tropaz rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⚗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-st-tropaz">Bifidobacterium</h3>
                  <p className="text-sm text-gray-600">Funciones Especializadas</p>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-st-tropaz text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Síntesis de Vitaminas B</h4>
                      <p className="text-sm text-gray-600">Produce B1, B2, B6, B12 y ácido fólico esenciales para el metabolismo</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-st-tropaz text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Producción de Butirato</h4>
                      <p className="text-sm text-gray-600">Genera ácidos grasos de cadena corta que nutren las células del colon</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-st-tropaz text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Modulación del pH Colónico</h4>
                      <p className="text-sm text-gray-600">Mantiene un ambiente ácido que previene la putrefacción intestinal</p>
                    </div>
                  </li>
                </ul>
              </article>

              <article className="bg-gradient-to-br from-seagull/10 to-seagull/5 rounded-xl p-8 border border-seagull/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-seagull rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-seagull">Saccharomyces</h3>
                  <p className="text-sm text-gray-600">Propiedades Únicas</p>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-seagull text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Resistencia a Antibióticos</h4>
                      <p className="text-sm text-gray-600">Como levadura, no es afectada por antibióticos que eliminan bacterias</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-seagull text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Neutralización de Toxinas</h4>
                      <p className="text-sm text-gray-600">Secreta proteasas que degradan toxinas de C. difficile y otros patógenos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-seagull text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Fortalecimiento Barrera</h4>
                      <p className="text-sm text-gray-600">Aumenta la producción de IgA secretora y fortalece tight junctions</p>
                    </div>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de tipos individuales */}
      <section className="py-12 bg-aqua-squeeze" aria-labelledby="individual-types-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="individual-types-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Explora Cada Tipo en Detalle
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {tipoSlugs.map((slug) => {
                const tipo = tiposData[slug];
                return (
                  <Link href={`/tipos/${slug}`} key={slug} className="group" role="listitem">
                    <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] h-full">
                      <header className="relative w-full h-48 overflow-hidden">
                        <OptimizedImagePlaceholder 
                          src={tipo.imagenPrincipal.src}
                          alt={tipo.imagenPrincipal.alt}
                          width={400}
                          height={200}
                          className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                      </header>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-biscay group-hover:text-apple transition-colors">
                          {tipo.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {tipo.descripcion}
                        </p>
                        
                        {/* Mini características */}
                        {tipo.caracteristicas && tipo.caracteristicas.length > 0 && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2" role="list">
                              {tipo.caracteristicas.slice(0, 2).map((carac, index) => (
                                <span key={index} className="bg-gossip text-apple text-xs px-2 py-1 rounded-full" role="listitem">
                                  {carac.titulo}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <footer className="flex items-center justify-between">
                          <div className="flex items-center text-apple text-sm font-medium">
                            Leer más
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <time className="text-xs text-gray-400" dateTime={tipo.fechaPublicacion}>
                            {new Date(tipo.fechaPublicacion).toLocaleDateString('es-ES', { 
                              year: 'numeric', 
                              month: 'long'
                            })}
                          </time>
                        </footer>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sección educativa sobre especificidad de cepas */}
      <section className="py-12" aria-labelledby="importance-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gossip to-aqua-squeeze rounded-2xl p-8">
              <h2 id="importance-heading" className="text-2xl font-bold mb-6 text-biscay text-center">
                ¿Por qué es importante conocer los diferentes tipos?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
                <article role="listitem">
                  <h3 className="font-semibold text-biscay mb-3 flex items-center">
                    <span className="w-8 h-8 bg-apple text-white rounded-full flex items-center justify-center text-sm mr-3" aria-hidden="true">1</span>
                    Especificidad Terapéutica
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Cada tipo de probiótico tiene mecanismos de acción únicos y beneficios específicos. 
                    Conocerlos te permite elegir el más adecuado para tus necesidades.
                  </p>
                </article>
                
                <article role="listitem">
                  <h3 className="font-semibold text-biscay mb-3 flex items-center">
                    <span className="w-8 h-8 bg-san-marino text-white rounded-full flex items-center justify-center text-sm mr-3" aria-hidden="true">2</span>
                    Diversidad del Microbioma
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Un microbioma saludable requiere diversidad. Combinar diferentes tipos de 
                    probióticos puede maximizar los beneficios para tu salud.
                  </p>
                </article>
                
                <article role="listitem">
                  <h3 className="font-semibold text-biscay mb-3 flex items-center">
                    <span className="w-8 h-8 bg-st-tropaz text-white rounded-full flex items-center justify-center text-sm mr-3" aria-hidden="true">3</span>
                    Interpretación de Etiquetas
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Comprender la nomenclatura te ayuda a evaluar mejor los productos y 
                    tomar decisiones informadas sobre suplementos probióticos.
                  </p>
                </article>
                
                <article role="listitem">
                  <h3 className="font-semibold text-biscay mb-3 flex items-center">
                    <span className="w-8 h-8 bg-de-york text-white rounded-full flex items-center justify-center text-sm mr-3" aria-hidden="true">4</span>
                    Investigación Científica
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    La investigación sobre probióticos es específica de cada cepa. Conocer 
                    los tipos te permite entender mejor los estudios científicos.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Tipos de probióticos en fuentes naturales */}
      <section className="py-12 bg-white" aria-labelledby="natural-sources-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="natural-sources-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Dónde Encontrar Cada Tipo de Probiótico Naturalmente
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Lactobacillus en fuentes naturales */}
              <article className="bg-gradient-to-br from-apple/10 to-apple/5 rounded-xl p-8 border border-apple/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-apple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">�</span>
                  </div>
                  <h3 className="text-xl font-bold text-apple">Género Lactobacillus</h3>
                  <p className="text-sm text-gray-600">Fuentes Alimentarias Principales</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-apple">
                    <h4 className="font-semibold text-gray-800 mb-2">L. acidophilus</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Yogur, kéfir, miso, tempeh
                    </p>
                    <p className="text-xs text-gray-500">
                      Más abundante en productos lácteos fermentados a temperaturas moderadas
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-apple">
                    <h4 className="font-semibold text-gray-800 mb-2">L. plantarum</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Chucrut, kimchi, aceitunas fermentadas
                    </p>
                    <p className="text-xs text-gray-500">
                      Dominante en fermentaciones vegetales sin oxígeno
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-apple">
                    <h4 className="font-semibold text-gray-800 mb-2">L. casei</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Quesos madurados, kéfir de agua
                    </p>
                    <p className="text-xs text-gray-500">
                      Resistente al ácido, sobrevive bien en el estómago
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-l-4 border-apple">
                    <h4 className="font-semibold text-gray-800 mb-2">L. rhamnosus</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Algunos yogures específicos, suplementos
                    </p>
                    <p className="text-xs text-gray-500">
                      Menos común en alimentos tradicionales, más en productos comerciales
                    </p>
                  </div>
                </div>
              </article>

              {/* Bifidobacterium en fuentes naturales */}
              <article className="bg-gradient-to-br from-st-tropaz/10 to-st-tropaz/5 rounded-xl p-8 border border-st-tropaz/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-st-tropaz rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-st-tropaz">Género Bifidobacterium</h3>
                  <p className="text-sm text-gray-600">Bacterias Bífidas en Alimentos</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-st-tropaz">
                    <h4 className="font-semibold text-gray-800 mb-2">B. lactis</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Yogures probióticos, kéfir, algunos quesos
                    </p>
                    <p className="text-xs text-gray-500">
                      Añadida comercialmente a productos lácteos por sus beneficios digestivos
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-st-tropaz">
                    <h4 className="font-semibold text-gray-800 mb-2">B. longum</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Leche materna, algunos fermentados asiáticos
                    </p>
                    <p className="text-xs text-gray-500">
                      Naturalmente presente en bebés, difícil de encontrar en alimentos comunes
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-st-tropaz">
                    <h4 className="font-semibold text-gray-800 mb-2">B. bifidum</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Productos lácteos fermentados especializados
                    </p>
                    <p className="text-xs text-gray-500">
                      Principalmente disponible en suplementos o productos fortificados
                    </p>
                  </div>

                  <div className="bg-st-tropaz/10 rounded-lg p-4">
                    <p className="text-xs text-gray-700">
                      <strong>Nota:</strong> Las bifidobacterias son menos comunes en alimentos tradicionales 
                      y más abundantes en suplementos probióticos específicos.
                    </p>
                  </div>
                </div>
              </article>

              {/* Saccharomyces y otros tipos */}
              <article className="bg-gradient-to-br from-seagull/10 to-seagull/5 rounded-xl p-8 border border-seagull/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-seagull rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🍄</span>
                  </div>
                  <h3 className="text-xl font-bold text-seagull">Levaduras y Otros Tipos</h3>
                  <p className="text-sm text-gray-600">Probióticos No Bacterianos</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-seagull">
                    <h4 className="font-semibold text-gray-800 mb-2">S. boulardii</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Principalmente suplementos, algunas kombuchas
                    </p>
                    <p className="text-xs text-gray-500">
                      Levadura tropical, raramente en alimentos tradicionales occidentales
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-seagull">
                    <h4 className="font-semibold text-gray-800 mb-2">S. cerevisiae</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Kombucha, levadura nutricional, pan de masa madre
                    </p>
                    <p className="text-xs text-gray-500">
                      Levadura común en fermentaciones alcohólicas y de panadería
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-seagull">
                    <h4 className="font-semibold text-gray-800 mb-2">Enterococcus faecium</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Fuentes:</strong> Algunos quesos artesanales, aceitunas
                    </p>
                    <p className="text-xs text-gray-500">
                      Controvertido - beneficioso en ciertos contextos, preocupante en otros
                    </p>
                  </div>

                  <div className="bg-seagull/10 rounded-lg p-4">
                    <p className="text-xs text-gray-700">
                      <strong>Ventaja de levaduras:</strong> Resistentes a antibióticos y ambientes ácidos, 
                      complementan perfectamente a las bacterias probióticas.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Tabla comparativa: Tipos vs Fuentes Alimentarias */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-apple to-st-tropaz p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  Guía Rápida: Tipos de Probióticos por Fuente Alimentaria
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Alimento</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Tipos Principales</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Beneficio Específico del Tipo</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Disponibilidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-apple/5">
                      <td className="px-6 py-4 font-medium">Yogur Natural</td>
                      <td className="px-6 py-4"><span className="text-apple font-semibold">L. bulgaricus, S. thermophilus</span></td>
                      <td className="px-6 py-4">Digestión de lactosa, proteínas biodisponibles</td>
                      <td className="px-6 py-4"><span className="text-green-600">●●●●●</span> Alta</td>
                    </tr>
                    <tr className="hover:bg-st-tropaz/5">
                      <td className="px-6 py-4 font-medium">Kéfir</td>
                      <td className="px-6 py-4"><span className="text-st-tropaz font-semibold">L. kefiri, B. lactis, Levaduras</span></td>
                      <td className="px-6 py-4">Diversidad microbiana, tolerancia lactosa</td>
                      <td className="px-6 py-4"><span className="text-yellow-600">●●●○○</span> Media</td>
                    </tr>
                    <tr className="hover:bg-apple/5">
                      <td className="px-6 py-4 font-medium">Chucrut</td>
                      <td className="px-6 py-4"><span className="text-apple font-semibold">L. plantarum, L. brevis</span></td>
                      <td className="px-6 py-4">Resistencia patógenos, vitamina C</td>
                      <td className="px-6 py-4"><span className="text-green-600">●●●●○</span> Alta (casero)</td>
                    </tr>
                    <tr className="hover:bg-seagull/5">
                      <td className="px-6 py-4 font-medium">Kombucha</td>
                      <td className="px-6 py-4"><span className="text-seagull font-semibold">S. cerevisiae, Acetobacter</span></td>
                      <td className="px-6 py-4">Antioxidantes, desintoxicación hepática</td>
                      <td className="px-6 py-4"><span className="text-yellow-600">●●●○○</span> Media</td>
                    </tr>
                    <tr className="hover:bg-apple/5">
                      <td className="px-6 py-4 font-medium">Kimchi</td>
                      <td className="px-6 py-4"><span className="text-apple font-semibold">L. sakei, Weissella koreensis</span></td>
                      <td className="px-6 py-4">Antiinflamatorio, metabolismo</td>
                      <td className="px-6 py-4"><span className="text-orange-600">●●○○○</span> Baja</td>
                    </tr>
                    <tr className="hover:bg-st-tropaz/5">
                      <td className="px-6 py-4 font-medium">Miso</td>
                      <td className="px-6 py-4"><span className="text-st-tropaz font-semibold">Aspergillus oryzae, L. plantarum</span></td>
                      <td className="px-6 py-4">Enzimas digestivas, umami natural</td>
                      <td className="px-6 py-4"><span className="text-yellow-600">●●●○○</span> Media</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Consejos para maximizar tipos específicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-apple/5 to-apple/10 rounded-xl p-6 border border-apple/20">
                <h4 className="text-lg font-bold text-apple mb-4 flex items-center">
                  <span className="bg-apple text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">🎯</span>
                  Para Maximizar Lactobacillus
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-apple mr-2">•</span>
                    <span>Consume yogur y kéfir <strong>no pasteurizados</strong> después de la producción</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple mr-2">•</span>
                    <span>Prepara <strong>chucrut casero</strong> - contiene más L. plantarum que versiones comerciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple mr-2">•</span>
                    <span>Busca productos con <strong>"cultivos vivos activos"</strong> en la etiqueta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple mr-2">•</span>
                    <span>Consume en ayunas o con <strong>alimentos grasos</strong> para mejor supervivencia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-st-tropaz/5 to-st-tropaz/10 rounded-xl p-6 border border-st-tropaz/20">
                <h4 className="text-lg font-bold text-st-tropaz mb-4 flex items-center">
                  <span className="bg-st-tropaz text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">🔬</span>
                  Para Optimizar Bifidobacterium
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-st-tropaz mr-2">•</span>
                    <span>Elige <strong>productos específicamente fortificados</strong> con bifidobacterias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-st-tropaz mr-2">•</span>
                    <span>Combina con <strong>prebióticos</strong> como inulina (alcachofa, ajo, cebolla)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-st-tropaz mr-2">•</span>
                    <span>Considera <strong>suplementos</strong> ya que son escasas en alimentos tradicionales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-st-tropaz mr-2">•</span>
                    <span>Consume con <strong>fibra soluble</strong> para favorecer su crecimiento en el colon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Criterios de selección */}
      <section className="py-12 bg-gray-50" aria-labelledby="selection-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="selection-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Cómo Elegir el Tipo de Probiótico Adecuado para Ti
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <article className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-apple flex items-center">
                  <span className="bg-apple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">🎯</span>
                  Por Objetivo de Salud
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-apple/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Digestión y Estreñimiento</h4>
                    <p className="text-sm text-gray-600 mb-2">Lactobacillus casei, L. rhamnosus, Bifidobacterium lactis</p>
                    <p className="text-xs text-gray-500">Mejoran la motilidad intestinal y la consistencia de las heces</p>
                  </div>
                  
                  <div className="border-l-4 border-st-tropaz/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Diarrea y SII</h4>
                    <p className="text-sm text-gray-600 mb-2">Saccharomyces boulardii, L. rhamnosus GG, B. infantis</p>
                    <p className="text-xs text-gray-500">Restauran el equilibrio microbiano y reducen la inflamación</p>
                  </div>
                  
                  <div className="border-l-4 border-seagull/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Sistema Inmune</h4>
                    <p className="text-sm text-gray-600 mb-2">L. casei, L. paracasei, B. lactis, B. bifidum</p>
                    <p className="text-xs text-gray-500">Fortalecen la respuesta inmunitaria y reducen infecciones</p>
                  </div>
                  
                  <div className="border-l-4 border-apple/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Salud Vaginal</h4>
                    <p className="text-sm text-gray-600 mb-2">L. rhamnosus GR-1, L. reuteri RC-14, L. crispatus</p>
                    <p className="text-xs text-gray-500">Mantienen el pH ácido y previenen infecciones urogenitales</p>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-st-tropaz flex items-center">
                  <span className="bg-st-tropaz text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">👥</span>
                  Por Grupo de Edad
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-apple/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Bebés (0-2 años)</h4>
                    <p className="text-sm text-gray-600 mb-2">Bifidobacterium infantis, B. breve, L. rhamnosus GG</p>
                    <p className="text-xs text-gray-500">Apoyan el desarrollo del sistema inmune y digestivo</p>
                  </div>
                  
                  <div className="border-l-4 border-st-tropaz/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Niños (3-12 años)</h4>
                    <p className="text-sm text-gray-600 mb-2">L. casei, L. rhamnosus, B. lactis, B. longum</p>
                    <p className="text-xs text-gray-500">Previenen alergias y fortalecen las defensas escolares</p>
                  </div>
                  
                  <div className="border-l-4 border-seagull/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Adultos (18-65 años)</h4>
                    <p className="text-sm text-gray-600 mb-2">Combinaciones multi-cepa, S. boulardii para viajes</p>
                    <p className="text-xs text-gray-500">Manejo del estrés, dieta irregular y antibióticos</p>
                  </div>
                  
                  <div className="border-l-4 border-apple/30 pl-4">
                    <h4 className="font-semibold text-gray-800">Adultos Mayores (+65 años)</h4>
                    <p className="text-sm text-gray-600 mb-2">B. longum, B. bifidum, L. acidophilus, multi-especies</p>
                    <p className="text-xs text-gray-500">Compensan la disminución natural de bifidobacterias</p>
                  </div>
                </div>
              </article>
            </div>

            {/* Tabla de dosificación recomendada */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-apple to-st-tropaz p-6">
                <h3 className="text-xl font-bold text-white text-center">Dosificación Recomendada por Tipo</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Tipo de Probiótico</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Dosis Diaria (UFC)</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Duración Mínima</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">Mejor Momento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Lactobacillus (preventivo)</td>
                      <td className="px-6 py-4">1-10 mil millones</td>
                      <td className="px-6 py-4">4-6 semanas</td>
                      <td className="px-6 py-4">Con el desayuno</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Bifidobacterium (mantenimiento)</td>
                      <td className="px-6 py-4">5-20 mil millones</td>
                      <td className="px-6 py-4">8-12 semanas</td>
                      <td className="px-6 py-4">Con la cena</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">S. boulardii (terapéutico)</td>
                      <td className="px-6 py-4">250-500 mg (5-10 mil millones)</td>
                      <td className="px-6 py-4">2-4 semanas</td>
                      <td className="px-6 py-4">Entre comidas</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Multi-cepa (integral)</td>
                      <td className="px-6 py-4">10-50 mil millones</td>
                      <td className="px-6 py-4">12+ semanas</td>
                      <td className="px-6 py-4">Con alimento graso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-800">Nota importante:</strong> Las dosis pueden variar según la marca, concentración y condición específica. 
                  Siempre consulta con un profesional de salud antes de iniciar cualquier suplementación, especialmente si tienes condiciones médicas preexistentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ expandible */}
      <section className="py-12 bg-aqua-squeeze" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12 text-biscay">
              Preguntas Frecuentes sobre Tipos de Probióticos
            </h2>
            
            <div className="space-y-4" role="list">
              {[
                {
                  id: 'diferencias',
                  question: '¿Cuál es la diferencia entre género, especie y cepa?',
                  answer: 'El género es la categoría más amplia (ej: Lactobacillus), la especie es más específica (ej: L. acidophilus), y la cepa es la identificación única de una bacteria específica (ej: L. acidophilus NCFM). Cada nivel tiene características y beneficios más específicos.'
                },
                {
                  id: 'mejor',
                  question: '¿Qué tipo de probiótico es mejor?',
                  answer: 'No existe un "mejor" probiótico universal. La efectividad depende de tus necesidades específicas, condiciones de salud y objetivos. Es recomendable consultar con un profesional de la salud para determinar qué tipos son más apropiados para ti.'
                },
                {
                  id: 'combinar',
                  question: '¿Puedo combinar diferentes tipos de probióticos?',
                  answer: 'Sí, muchos suplementos contienen múltiples cepas porque la diversidad puede ser beneficiosa. Sin embargo, es importante verificar que las cepas sean compatibles y que las dosis sean apropiadas. Siempre consulta con un profesional antes de combinar múltiples suplementos.'
                },
                {
                  id: 'alimentos',
                  question: '¿Los alimentos fermentados contienen diferentes tipos?',
                  answer: 'Sí, cada alimento fermentado tradicionalmente contiene diferentes tipos de probióticos. Por ejemplo, el yogur contiene principalmente Lactobacillus y Streptococcus, mientras que el kéfir tiene una mayor diversidad incluyendo levaduras beneficiosas.'
                }
              ].map((faq) => (
                <article key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200" role="listitem">
                  <button
                    onClick={() => toggleSection(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    aria-expanded={expandedSection === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="font-semibold text-biscay">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${expandedSection === faq.id ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === faq.id && (
                    <div id={`faq-answer-${faq.id}`} className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section mejorada */}
      <section className="py-12" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-apple to-st-tropaz rounded-2xl p-8 text-white text-center">
              <h2 id="cta-heading" className="text-3xl font-bold mb-4">¿Listo para aplicar este conocimiento?</h2>
              <p className="text-xl mb-8 text-green-100">
                Descubre cómo incorporar estos probióticos a tu vida diaria
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
                <Link href="/recetas" className="bg-white text-apple px-6 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg group" role="listitem">
                  <div className="text-2xl mb-2" aria-hidden="true">🍽️</div>
                  <div className="group-hover:text-st-tropaz transition-colors">Recetas Probióticas</div>
                  <div className="text-sm text-gray-600 mt-1">Preparaciones caseras</div>
                </Link>
                
                <Link href="/condiciones" className="bg-white text-apple px-6 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg group" role="listitem">
                  <div className="text-2xl mb-2" aria-hidden="true">🏥</div>
                  <div className="group-hover:text-st-tropaz transition-colors">Condiciones de Salud</div>
                  <div className="text-sm text-gray-600 mt-1">Aplicaciones específicas</div>
                </Link>
                
                <Link href="/como-elegir" className="bg-white text-apple px-6 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg group" role="listitem">
                  <div className="text-2xl mb-2" aria-hidden="true">✅</div>
                  <div className="group-hover:text-st-tropaz transition-colors">Cómo Elegir</div>
                  <div className="text-sm text-gray-600 mt-1">Guía de selección</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}