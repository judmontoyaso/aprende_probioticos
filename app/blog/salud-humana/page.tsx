import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import BlogArticleTemplate from '@/app/templates/BlogArticleTemplate';

export const metadata: Metadata = {
  title: 'Probióticos en la salud humana: de la microbiota a la dieta | Blog',
  description: 'Análisis integral del papel de los probióticos en la salud digestiva, inmunológica y general del ser humano. Información científica actualizada sobre microbioma y probióticos.',
  keywords: 'probióticos, microbioma, salud humana, sistema inmunológico, salud digestiva, intestino, microbiota intestinal',
  openGraph: {
    title: 'Probióticos en la salud humana: de la microbiota a la dieta',
    description: 'Análisis integral del papel de los probióticos en la salud digestiva, inmunológica y general del ser humano.',
    images: ['/images/blog-salud.png'],
    type: 'article',
    publishedTime: '2023-05-10T00:00:00Z',
    authors: ['Probióticos Para Todos'],
  },
  alternates: {
    canonical: 'https://probioticosparatodos.com/blog/salud-humana',
  },
};

const tableOfContents = [
  { id: 'definicion', title: 'Definición de probióticos según la FAO/OMS' },
  { id: 'microbioma', title: 'El microbioma humano: nuestro ecosistema interior' },
  { id: 'digestiva', title: 'Probióticos y salud digestiva' },
  { id: 'inmune', title: 'Sistema inmunológico y probióticos' },
  { id: 'salud-mental', title: 'El eje intestino-cerebro: probióticos y salud mental' },
  { id: 'fuentes', title: 'Fuentes de probióticos en la dieta' },
  { id: 'suplementacion', title: 'Suplementación con probióticos: indicaciones y precauciones' },
  { id: 'futuro', title: 'El futuro de los probióticos en la medicina personalizada' },
  { id: 'conclusion', title: 'Conclusiones' }
];

const sidebarFacts = [
  { text: 'El cuerpo humano contiene aproximadamente 100 billones de microorganismos.' },
  { text: 'El 70% del sistema inmunológico se encuentra en el intestino.' },
  { text: 'Existen más de 1000 especies bacterianas en nuestro microbioma.' },
  { text: 'Los probióticos pueden sobrevivir al ácido gástrico cuando están en las cepas adecuadas.' }
];

const relatedArticles = [
  { href: '/blog/alimentos-fermentados', title: 'Alimentos fermentados y probióticos', subtitle: 'Fuentes naturales de microorganismos beneficiosos' },
  { href: '/blog/nutricion-animal', title: 'Nutrición animal con probióticos', subtitle: 'Aplicaciones en ganadería' },
  { href: '/como-elegir', title: 'Cómo elegir el probiótico adecuado', subtitle: 'Guía práctica de selección' }
];

export default function SaludHumanaPage() {
  return (
    <BlogArticleTemplate
      badge="Recurso Completo"
      title="Probióticos en la salud humana: de la microbiota a la dieta"
      date="10 de mayo, 2023"
      author="Equipo Científico de Probióticos Para Todos"
      description="Un análisis integral del papel fundamental de los probióticos en la salud digestiva, inmunológica y general del ser humano."
      heroImage="/images/blog-salud.png"
      heroImageAlt="Probióticos y salud humana"
      tableOfContents={tableOfContents}
      sidebarFacts={sidebarFacts}
      relatedArticles={relatedArticles}
    >
      {/* Introduction */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-[#163660]">
          La relación entre los microorganismos y los seres humanos ha evolucionado durante millones de años, 
          creando una simbiosis compleja que apenas estamos comenzando a comprender en toda su magnitud. 
          Los probióticos, como parte integral de esta relación, representan una frontera fascinante 
          en la medicina moderna y la nutrición.
        </p>
        <p className="text-gray-700 mt-6">
          Este artículo explora en profundidad el papel de los probióticos en la salud humana, desde sus 
          definiciones científicas hasta las aplicaciones prácticas en diversas condiciones de salud. 
          Analizaremos la evidencia científica actual, las recomendaciones clínicas y las perspectivas 
          futuras de estos microorganismos beneficiosos.
        </p>
      </div>

      {/* Section 1: Definition */}
      <section id="definicion" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">Definición de probióticos según la FAO/OMS</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            De acuerdo con la definición conjunta de la Organización de las Naciones Unidas para la Alimentación y 
            la Agricultura (FAO) y la Organización Mundial de la Salud (OMS), los probióticos son:
          </p>
          <blockquote className="bg-[#eef8f2] border-l-4 border-[#48a537] p-6 my-8 rounded-r-lg">
            <p className="text-[#163660] italic text-lg">
              &ldquo;Microorganismos vivos que, cuando se administran en cantidades adecuadas, confieren un beneficio 
              a la salud del huésped.&rdquo;
            </p>
          </blockquote>
          <p className="text-gray-700">
            Esta definición, establecida en 2001 y confirmada en 2014, destaca tres componentes esenciales:
          </p>
          <ul className="text-gray-700">
            <li><strong>Microorganismos vivos:</strong> Deben estar vivos en el momento de administración para ejercer su efecto.</li>
            <li><strong>Cantidad adecuada:</strong> La dosis es crítica para obtener el efecto deseado.</li>
            <li><strong>Beneficio para la salud:</strong> Debe existir evidencia científica que respalde sus efectos positivos.</li>
          </ul>
          <p className="text-gray-700">
            No todos los microorganismos pueden considerarse probióticos. Para que una cepa microbiana reciba esta 
            designación, debe cumplir con criterios específicos:
          </p>
          <div className="bg-white p-6 rounded-lg my-6 border border-[#c4ccd7] shadow-sm">
            <h4 className="text-lg font-semibold mb-4 text-[#163660]">✅ Criterios para ser considerado probiótico</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Estar completamente caracterizada a nivel de cepa</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Sobrevivir al tránsito gastrointestinal</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Adherirse a la mucosa intestinal</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Producir sustancias antimicrobianas</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Demostrar eficacia en estudios clínicos controlados</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Ser segura para su uso en humanos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Microbiome */}
      <section id="microbioma" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">El microbioma humano: nuestro ecosistema interior</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            El cuerpo humano alberga aproximadamente 100 billones de microorganismos, superando en número a 
            nuestras propias células. Este conjunto de bacterias, virus, hongos y arqueas constituye el microbioma 
            humano, un ecosistema dinámico que varía según la región corporal.
          </p>
          <div className="bg-[#eef8f2] p-6 rounded-lg my-6 border border-[#c4ccd7]">
            <h3 className="text-xl font-semibold mb-4 text-[#163660]">Datos fascinantes sobre el microbioma humano</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Contiene más de 1,000 especies diferentes de bacterias</li>
              <li>El intestino alberga la mayor densidad de microorganismos</li>
              <li>El genoma microbiano colectivo (microbioma) contiene 100 veces más genes que nuestro genoma humano</li>
              <li>Cada persona tiene una composición única, similar a una &ldquo;huella dactilar microbiana&rdquo;</li>
              <li>Se establece principalmente durante los primeros 1,000 días de vida</li>
            </ul>
          </div>
          <p className="text-gray-700">
            El microbioma intestinal, en particular, desempeña funciones esenciales:
          </p>
          <ul className="text-gray-700">
            <li><strong>Metabólicas:</strong> Fermentación de fibras no digeribles, producción de vitaminas (K, B12), absorción de minerales.</li>
            <li><strong>Protectoras:</strong> Competencia con patógenos, fortalecimiento de la barrera intestinal, producción de antimicrobianos naturales.</li>
            <li><strong>Estructurales:</strong> Desarrollo y maduración del sistema inmunitario intestinal, producción de mucina.</li>
            <li><strong>Inmunológicas:</strong> Modulación del sistema inmune, tolerancia a antígenos alimentarios, prevención de inflamación crónica.</li>
          </ul>
          <p className="text-gray-700">
            La disbiosis, o desequilibrio en la composición y función del microbioma, se ha asociado con 
            numerosas condiciones patológicas, desde enfermedades intestinales hasta trastornos metabólicos, 
            neurológicos y psiquiátricos. Aquí es donde los probióticos pueden desempeñar un papel terapéutico, 
            ayudando a restaurar el equilibrio microbiano alterado.
          </p>
          
          {/* Infografía del Microbioma */}
          <div className="my-12 bg-gradient-to-br from-[#eef8f2] via-[#f0f9ff] to-[#fef3f2] p-8 rounded-2xl border border-[#c4ccd7] shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-[#163660]">El Microbioma Humano en Números</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Estadística 1 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#48a537] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#48a537] mb-2">100 billones</div>
                <div className="text-gray-700 font-medium">Microorganismos en el cuerpo humano</div>
              </div>
              
              {/* Estadística 2 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#275b9e] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#275b9e] mb-2">1,000+</div>
                <div className="text-gray-700 font-medium">Especies bacterianas diferentes</div>
              </div>
              
              {/* Estadística 3 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#dc2626] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#dc2626] mb-2">70%</div>
                <div className="text-gray-700 font-medium">Del sistema inmune está en el intestino</div>
              </div>
            </div>
            
            {/* Comparación visual */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e7eb]">
              <h4 className="text-lg font-semibold mb-4 text-center text-[#163660]">Comparación: Microbioma vs. Genoma Humano</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-6xl mb-2">🧬</div>
                  <div className="text-lg font-bold text-[#163660] mb-2">Genoma Humano</div>
                  <div className="text-2xl font-bold text-[#275b9e] mb-1">~23,000</div>
                  <div className="text-gray-600">genes</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">🦠</div>
                  <div className="text-lg font-bold text-[#163660] mb-2">Microbioma Humano</div>
                  <div className="text-2xl font-bold text-[#48a537] mb-1">~2.3 millones</div>
                  <div className="text-gray-600">genes</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-500 bg-[#eef8f2] p-2 rounded">
                  💡 El microbioma contiene <strong>100 veces más genes</strong> que nuestro propio genoma
                </div>
              </div>
            </div>
            
            {/* Timeline de desarrollo */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-center text-[#163660]">Desarrollo del Microbioma</h4>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#c4ccd7]"></div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#48a537] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">0</div>
                    <div>
                      <div className="font-medium text-[#163660]">Nacimiento</div>
                      <div className="text-sm text-gray-600">Microbioma estéril, primeras colonizaciones</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#275b9e] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">3</div>
                    <div>
                      <div className="font-medium text-[#163660]">3 años</div>
                      <div className="text-sm text-gray-600">Microbioma similar al adulto</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">∞</div>
                    <div>
                      <div className="font-medium text-[#163660]">Toda la vida</div>
                      <div className="text-sm text-gray-600">Evolución continua del ecosistema microbiano</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Digestive Health */}
      <section id="digestiva" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">Probióticos y salud digestiva</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            La evidencia más sólida sobre los beneficios de los probióticos se encuentra en el ámbito de la 
            salud digestiva. Diversas cepas han demostrado eficacia en condiciones específicas:
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Síndrome del Intestino Irritable (SII)</h3>
          <p className="text-gray-700">
            El SII es uno de los trastornos digestivos funcionales más comunes, afectando entre el 10-15% de la 
            población mundial. Varios metaanálisis han demostrado que los probióticos pueden:
          </p>
          <div className="bg-gradient-to-r from-[#eef8f2] to-[#f0f9ff] p-6 rounded-lg my-6 border border-[#c4ccd7]">
            <h4 className="text-lg font-semibold mb-4 text-[#163660] flex items-center">
              <span className="w-6 h-6 bg-[#48a537] rounded-full flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </span>
              Beneficios comprobados en SII
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Reducir la gravedad general de los síntomas</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Disminuir el dolor e hinchazón abdominal</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Mejorar la frecuencia y consistencia de las deposiciones</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#48a537] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Reducir la producción de gas intestinal</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            Las cepas con mayor evidencia incluyen <em>Bifidobacterium infantis 35624</em>, 
            <em>Lactobacillus plantarum 299v</em>, y <em>Lactobacillus rhamnosus GG</em>.
          </p>

          <div className="flex justify-center my-8">
            <Link href="/beneficios" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#48a537] via-[#5db649] to-[#48a537] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#275b9e] via-[#3d73c4] to-[#275b9e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <span className="mr-3">✨</span>
                Descubre todos los beneficios de los probióticos
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-70 animate-ping"></div>
            </Link>
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Enfermedad Inflamatoria Intestinal (EII)</h3>
          <p className="text-gray-700">
            La EII, que incluye la enfermedad de Crohn y la colitis ulcerosa, se caracteriza por una inflamación 
            crónica del tracto gastrointestinal. Los probióticos han mostrado resultados prometedores:
          </p>
          <ul className="text-gray-700">
            <li>En colitis ulcerosa: Ayudan a mantener la remisión, especialmente la mezcla probiótica VSL#3 y <em>E. coli Nissle 1917</em></li>
            <li>En pouchitis (inflamación del reservorio ileal): Previenen recurrencias</li>
            <li>En enfermedad de Crohn: Resultados variables, con beneficios más limitados</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Diarrea asociada a antibióticos</h3>
          <p className="text-gray-700">
            Esta es una de las aplicaciones con mayor evidencia. Los antibióticos alteran el equilibrio del 
            microbioma intestinal, lo que puede resultar en diarrea en hasta el 35% de los pacientes. Los 
            probióticos han demostrado:
          </p>
          <ul className="text-gray-700">
            <li>Reducir el riesgo de diarrea asociada a antibióticos en aproximadamente un 60%</li>
            <li>Prevenir infecciones por <em>Clostridioides difficile</em></li>
            <li>Ser más efectivos cuando se inician junto con el antibiótico</li>
          </ul>
          <p className="text-gray-700">
            <em>Saccharomyces boulardii</em> y <em>Lactobacillus rhamnosus GG</em> son particularmente efectivos para esta indicación.
          </p>
        </div>
      </section>

      {/* Section 4: Immune System */}
      <section id="inmune" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">Sistema inmunológico y probióticos</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            El 70-80% de nuestras células inmunitarias se encuentran en el intestino, formando el tejido linfoide 
            asociado al intestino (GALT). Esta concentración no es coincidencia: el sistema inmune intestinal debe 
            mantener un delicado equilibrio entre tolerar los microorganismos beneficiosos y los alimentos, mientras 
            reacciona contra los patógenos.
          </p>
          <p className="text-gray-700">
            Los probióticos interactúan con el sistema inmunitario a múltiples niveles, pudiendo:
          </p>
          <div className="bg-white p-6 rounded-lg my-6 border-l-4 border-[#48a537] shadow-sm">
            <h4 className="text-lg font-semibold mb-4 text-[#163660] flex items-center">
              🛡️ Mecanismos de acción inmunológica
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#275b9e] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Fortalecer la barrera intestinal, reduciendo la permeabilidad intestinal</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#275b9e] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Modular la producción de citocinas pro y antiinflamatorias</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#275b9e] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Regular la actividad de células inmunes como macrófagos, células dendríticas y linfocitos</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#275b9e] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-700">Competir con patógenos por nutrientes y sitios de adhesión</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            La evidencia clínica muestra beneficios en áreas como:
          </p>
          <div className="bg-[#eef8f2] p-6 rounded-lg my-6 border border-[#c4ccd7]">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#48a537] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🫁</span>
                </div>
                <h5 className="font-semibold text-[#163660] mb-2">Infecciones Respiratorias</h5>
                <p className="text-sm text-gray-600">Prevención y reducción de la duración</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#275b9e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤧</span>
                </div>
                <h5 className="font-semibold text-[#163660] mb-2">Alergias</h5>
                <p className="text-sm text-gray-600">Especialmente en niños</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#dc2626] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔄</span>
                </div>
                <h5 className="font-semibold text-[#163660] mb-2">Infecciones Urinarias</h5>
                <p className="text-sm text-gray-600">Reducción de recurrencias en mujeres</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Mecanismos inmunológicos específicos</h3>
          <p className="text-gray-700">
            Los probióticos ejercen sus efectos inmunológicos a través de varios mecanismos bien documentados<span className="text-xs align-super text-[#275b9e] font-medium">[8]</span>:
          </p>
          <div className="bg-[#eef8f2] p-6 rounded-lg my-6 border border-[#c4ccd7]">
            <h4 className="text-lg font-semibold mb-3 text-[#163660]">Mecanismos clave de acción inmunológica</h4>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Exclusión competitiva:</strong> Compiten con patógenos por sitios de adhesión en la mucosa intestinal</li>
              <li><strong>Producción de antimicrobianos:</strong> Secretan bacteriocinas, ácidos orgánicos y peróxido de hidrógeno</li>
              <li><strong>Modulación de citocinas:</strong> Regulan la producción de IL-10 (antiinflamatoria) y reducen IL-6 y TNF-α (proinflamatorias)</li>
              <li><strong>Estimulación de IgA secretoria:</strong> Fortalecen la primera línea de defensa inmunitaria</li>
            </ul>
          </div>
          <p className="text-gray-700">
            Estudios controlados han demostrado que cepas específicas como <em>Lactobacillus casei Shirota</em> pueden 
            reducir la incidencia de infecciones respiratorias en un 20-30% en poblaciones susceptibles<span className="text-xs align-super text-[#275b9e] font-medium">[9]</span>.
          </p>
        </div>
      </section>

      {/* Section 5: Gut-Brain Axis */}
      <section id="salud-mental" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">El eje intestino-cerebro: probióticos y salud mental</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            El descubrimiento del eje intestino-cerebro ha revolucionado nuestra comprensión de cómo los 
            microorganismos intestinales pueden influir en el estado de ánimo, la cognición y el comportamiento. 
            Esta comunicación bidireccional involucra múltiples vías<span className="text-xs align-super text-[#275b9e] font-medium">[10]</span>:
          </p>
          <ul className="text-gray-700">
            <li><strong>Vía neural:</strong> A través del nervio vago</li>
            <li><strong>Vía endocrina:</strong> Producción de neurotransmisores por bacterias intestinales</li>
            <li><strong>Vía inmunológica:</strong> Modulación de la inflamación sistémica</li>
            <li><strong>Vía metabólica:</strong> Producción de ácidos grasos de cadena corta</li>
          </ul>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Psicobióticos: la nueva frontera</h3>
          <p className="text-gray-700">
            Los psicobióticos son probióticos específicos que han demostrado beneficios para la salud mental. 
            Investigaciones recientes han identificado cepas prometedoras:
          </p>
          <ul className="text-gray-700">
            <li><em>Lactobacillus helveticus R0052</em> y <em>Bifidobacterium longum R0175</em>: Reducción de ansiedad y depresión</li>
            <li><em>Lactobacillus casei Shirota</em>: Mejora del estado de ánimo en estudios clínicos</li>
            <li><em>Bifidobacterium infantis</em>: Modulación del eje hipotálamo-hipófisis-adrenal</li>
          </ul>
          <p className="text-gray-700">
            Un metaanálisis de 2020 que incluyó 34 estudios controlados aleatorios encontró que la suplementación 
            con probióticos específicos puede reducir significativamente los síntomas de depresión y ansiedad, 
            especialmente en poblaciones con trastornos digestivos comórbidos<span className="text-xs align-super text-[#275b9e] font-medium">[11]</span>.
          </p>
        </div>
      </section>

      {/* Section 6: Dietary Sources */}
      <section id="fuentes" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">Fuentes de probióticos en la dieta</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            Los alimentos fermentados tradicionales han sido fuentes naturales de probióticos durante milenios. 
            Estos alimentos no solo proporcionan microorganismos vivos, sino también metabolitos beneficiosos 
            producidos durante la fermentación<span className="text-xs align-super text-[#275b9e] font-medium">[12]</span>:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg border border-[#c4ccd7]">
              <h4 className="text-lg font-semibold mb-3 text-[#163660]">Lácteos fermentados</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Yogur:</strong> <em>L. bulgaricus</em>, <em>S. thermophilus</em></li>
                <li><strong>Kéfir:</strong> Mezcla compleja de bacterias y levaduras</li>
                <li><strong>Quesos madurados:</strong> <em>L. helveticus</em>, <em>P. roqueforti</em></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c4ccd7]">
              <h4 className="text-lg font-semibold mb-3 text-[#163660]">Vegetales fermentados</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Chucrut:</strong> <em>L. plantarum</em>, <em>L. brevis</em></li>
                <li><strong>Kimchi:</strong> <em>L. kimchii</em>, <em>L. sakei</em></li>
                <li><strong>Miso:</strong> <em>A. oryzae</em>, bacterias lácticas</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700">
            Es importante destacar que no todos los productos comercializados como "probióticos" contienen 
            cepas viables o en cantidades terapéuticas. Los consumidores deben buscar productos que especifiquen:
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">⚠️ Qué buscar al comprar probióticos</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-amber-800">Identificación de cepas a nivel de especie</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-amber-800">Recuento de unidades formadoras de colonias (UFC) al momento del consumo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-amber-800">Condiciones adecuadas de almacenamiento</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-amber-800">Evidencia científica de los beneficios alegados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Supplementation */}
      <section id="suplementacion" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">Suplementación con probióticos: indicaciones y precauciones</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            La suplementación con probióticos ha ganado aceptación en la práctica clínica para condiciones específicas. 
            Sin embargo, es crucial entender que los efectos son específicos de cepa y dosis<span className="text-xs align-super text-[#275b9e] font-medium">[13]</span>.
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Indicaciones clínicas establecidas</h3>
          <div className="bg-[#eef8f2] p-6 rounded-lg my-6 border border-[#c4ccd7]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#c4ccd7]">
                  <th className="text-left py-2 text-[#163660]">Condición</th>
                  <th className="text-left py-2 text-[#163660]">Cepa recomendada</th>
                  <th className="text-left py-2 text-[#163660]">Nivel de evidencia</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-[#c4ccd7]/50">
                  <td className="py-2">Diarrea asociada a antibióticos</td>
                  <td className="py-2"><em>S. boulardii</em>, <em>L. rhamnosus GG</em></td>
                  <td className="py-2">Alto</td>
                </tr>
                <tr className="border-b border-[#c4ccd7]/50">
                  <td className="py-2">Síndrome intestino irritable</td>
                  <td className="py-2"><em>B. infantis 35624</em></td>
                  <td className="py-2">Moderado-Alto</td>
                </tr>
                <tr className="border-b border-[#c4ccd7]/50">
                  <td className="py-2">Colitis ulcerosa (mantenimiento)</td>
                  <td className="py-2"><em>E. coli Nissle 1917</em></td>
                  <td className="py-2">Moderado</td>
                </tr>
                <tr>
                  <td className="py-2">Dermatitis atópica (prevención)</td>
                  <td className="py-2"><em>L. rhamnosus GG</em></td>
                  <td className="py-2">Moderado</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Consideraciones de seguridad</h3>
          <p className="text-gray-700">
            Aunque los probióticos son generalmente seguros para personas sanas, existen poblaciones de riesgo 
            que requieren precaución especial<span className="text-xs align-super text-[#275b9e] font-medium">[14]</span>:
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">⚠️ Precauciones importantes</h4>
            <ul className="space-y-2 text-yellow-700">
              <li>Pacientes inmunocomprometidos severos</li>
              <li>Prematuros con peso muy bajo al nacer</li>
              <li>Pacientes con catéteres venosos centrales</li>
              <li>Personas con válvulas cardíacas dañadas</li>
              <li>Pancreatitis aguda severa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Future of Probiotics */}
      <section id="futuro" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">El futuro de los probióticos en la medicina personalizada</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            La medicina personalizada basada en el microbioma representa la próxima frontera en el campo de los probióticos. 
            Los avances en secuenciación del ADN y análisis bioinformático están permitiendo enfoques más precisos<span className="text-xs align-super text-[#275b9e] font-medium">[15]</span>:
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4 border-b border-[#c4ccd7] pb-2 text-[#163660]">Tecnologías emergentes</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-white p-6 rounded-lg border border-[#c4ccd7] shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#48a537] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🧬</span>
                </div>
                <h4 className="text-lg font-semibold text-[#163660]">Probióticos de nueva generación</h4>
              </div>
              <p className="text-gray-700 text-sm">Bacterias genéticamente modificadas para funciones específicas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c4ccd7] shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#275b9e] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-[#163660]">Terapias dirigidas</h4>
              </div>
              <p className="text-gray-700 text-sm">Selección de cepas basada en el perfil microbiano individual</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c4ccd7] shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#dc2626] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">⚗️</span>
                </div>
                <h4 className="text-lg font-semibold text-[#163660]">Postbióticos</h4>
              </div>
              <p className="text-gray-700 text-sm">Metabolitos beneficiosos sin microorganismos vivos</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#c4ccd7] shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#7c3aed] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-xl">🤖</span>
                </div>
                <h4 className="text-lg font-semibold text-[#163660]">Microbioma artificial</h4>
              </div>
              <p className="text-gray-700 text-sm">Comunidades microbianas sintéticas diseñadas</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#eef8f2] to-[#f0f9ff] p-6 rounded-lg my-8 border border-[#c4ccd7]">
            <h4 className="text-lg font-semibold mb-3 text-[#163660]">🔬 Investigación actual</h4>
            <p className="text-gray-700 mb-3">
              Actualmente hay más de 2,000 ensayos clínicos registrados que investigan aplicaciones de probióticos 
              en condiciones que van desde trastornos neurológicos hasta cáncer.
            </p>
            <p className="text-gray-700">
              Las áreas de investigación más prometedoras incluyen la modulación del sistema inmunitario en 
              inmunoterapia oncológica y el desarrollo de "psicobióticos" para trastornos neuropsiquiátricos.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Conclusions */}
      <section id="conclusion" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#163660]">Conclusiones</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            Los probióticos han evolucionado desde alimentos tradicionales fermentados hasta intervenciones 
            terapéuticas respaldadas por evidencia científica sólida. Su papel en la salud humana abarca 
            múltiples sistemas orgánicos y promete expandirse aún más con los avances en medicina personalizada.
          </p>
          
          <div className="bg-[#eef8f2] p-6 rounded-lg my-8 border border-[#c4ccd7]">
            <h3 className="text-xl font-semibold mb-4 text-[#163660]">Puntos clave para recordar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Los beneficios de los probióticos son específicos de cepa, dosis y condición</li>
              <li>✓ La evidencia más sólida existe para aplicaciones digestivas e inmunológicas</li>
              <li>✓ Los alimentos fermentados naturales siguen siendo fuentes valiosas de probióticos</li>
              <li>✓ La investigación emergente sobre el eje intestino-cerebro abre nuevas posibilidades terapéuticas</li>
              <li>✓ La medicina personalizada basada en microbioma definirá el futuro del campo</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            Como campo en rápida evolución, los probióticos continúan revelando nuevos mecanismos de acción 
            y aplicaciones terapéuticas. La clave para maximizar sus beneficios radica en la selección 
            apropiada basada en evidencia científica sólida y la consideración individual de cada paciente.
          </p>
          
          <div className="text-center mt-8">
            <Link href="/como-elegir" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#163660] via-[#275b9e] to-[#163660] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#48a537] via-[#5db649] to-[#48a537] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <span className="mr-3">🎯</span>
                Aprende a elegir el probiótico adecuado para ti
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mt-16">
        <div className="bg-[#eef8f2] p-6 rounded-lg">
          <details className="group">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#163660] border-b border-[#c4ccd7] pb-2">Referencias científicas</h2>
              <svg className="w-6 h-6 text-[#163660] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-6 prose prose-sm max-w-none">
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li className="mb-2">
                  <strong>Food and Agriculture Organization of the United Nations; World Health Organization.</strong> (2001). Health and nutritional properties of probiotics in food including powder milk with live lactic acid bacteria. 
                  <em className="text-[#163660]"> FAO Food and Nutrition Paper</em>, 85. 
                  <span className="text-xs text-gray-500">Report of a Joint FAO/WHO Expert Consultation</span>
                </li>
                <li className="mb-2">
                  <strong>Hill, C., Guarner, F., Reid, G., Gibson, G. R., et al.</strong> (2014). Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic. 
                  <em className="text-[#163660]"> Nature Reviews Gastroenterology & Hepatology</em>, 11(8), 506–514. 
                  <span className="text-xs text-gray-500">DOI: 10.1038/nrgastro.2014.66</span>
                </li>
                <li className="mb-2">
                  <strong>Lloyd-Price, J., Abu-Ali, G., & Huttenhower, C.</strong> (2016). The healthy human microbiome. 
                  <em className="text-[#163660]"> Genome Medicine</em>, 8(1), 51. 
                  <span className="text-xs text-gray-500">DOI: 10.1186/s13073-016-0307-y</span>
                </li>
                <li className="mb-2">
                  <strong>McFarland, L. V.</strong> (2014). Use of probiotics to correct dysbiosis of normal microbiota following disease or disruptive events: a systematic review. 
                  <em className="text-[#163660]"> BMJ Open</em>, 4(8), e005047. 
                  <span className="text-xs text-gray-500">DOI: 10.1136/bmjopen-2014-005047</span>
                </li>
                <li className="mb-2">
                  <strong>Ritchie, M. L., & Romanuk, T. N.</strong> (2012). A meta-analysis of probiotic efficacy for gastrointestinal diseases. 
                  <em className="text-[#163660]"> PLoS One</em>, 7(4), e34938. 
                  <span className="text-xs text-gray-500">DOI: 10.1371/journal.pone.0034938</span>
                </li>
                <li className="mb-2">
                  <strong>Ford, A. C., Harris, L. A., Lacy, B. E., et al.</strong> (2018). Systematic review with meta-analysis: the efficacy of prebiotics, probiotics, synbiotics and antibiotics in irritable bowel syndrome. 
                  <em className="text-[#163660]"> Alimentary Pharmacology & Therapeutics</em>, 48(10), 1044–1060. 
                  <span className="text-xs text-gray-500">DOI: 10.1111/apt.14952</span>
                </li>
                <li className="mb-2">
                  <strong>Szajewska, H., & Kołodziej, M.</strong> (2015). Systematic review with meta-analysis: Saccharomyces boulardii in the prevention of antibiotic-associated diarrhoea. 
                  <em className="text-[#163660]"> Alimentary Pharmacology & Therapeutics</em>, 42(7), 793–801. 
                  <span className="text-xs text-gray-500">DOI: 10.1111/apt.13344</span>
                </li>
                <li className="mb-2">
                  <strong>Zheng, D., Liwinski, T., & Elinav, E.</strong> (2020). Interaction between microbiota and immunity in health and disease. 
                  <em className="text-[#163660]"> Cell Research</em>, 30(6), 492–506. 
                  <span className="text-xs text-gray-500">DOI: 10.1038/s41422-020-0332-7</span>
                </li>
                <li className="mb-2">
                  <strong>Hao, Q., Dong, B. R., & Wu, T.</strong> (2015). Probiotics for preventing acute upper respiratory tract infections. 
                  <em className="text-[#163660]"> Cochrane Database of Systematic Reviews</em>, (2), CD006895. 
                  <span className="text-xs text-gray-500">DOI: 10.1002/14651858.CD006895.pub3</span>
                </li>
                <li className="mb-2">
                  <strong>Vuong, H. E., Yano, J. M., Fung, T. C., & Hsiao, E. Y.</strong> (2017). The Microbiome and Host Behavior. 
                  <em className="text-[#163660]"> Annual Review of Neuroscience</em>, 40, 21–49. 
                  <span className="text-xs text-gray-500">DOI: 10.1146/annurev-neuro-072116-031347</span>
                </li>
                <li className="mb-2">
                  <strong>Liu, R. T., Walsh, R. F., & Sheehan, A. E.</strong> (2019). Prebiotics and probiotics for depression and anxiety: A systematic review and meta-analysis of controlled clinical trials. 
                  <em className="text-[#163660]"> Neuroscience & Biobehavioral Reviews</em>, 102, 13–23. 
                  <span className="text-xs text-gray-500">DOI: 10.1016/j.neubiorev.2019.03.023</span>
                </li>
                <li className="mb-2">
                  <strong>Marco, M. L., Heeney, D., Binda, S., et al.</strong> (2017). Health benefits of fermented foods: microbiota and beyond. 
                  <em className="text-[#163660]"> Current Opinion in Biotechnology</em>, 44, 94–102. 
                  <span className="text-xs text-gray-500">DOI: 10.1016/j.copbio.2016.11.010</span>
                </li>
                <li className="mb-2">
                  <strong>Sanders, M. E., Merenstein, D. J., Reid, G., Gibson, G. R., & Rastall, R. A.</strong> (2019). Probiotics and prebiotics in intestinal health and disease: from biology to the clinic. 
                  <em className="text-[#163660]"> Nature Reviews Gastroenterology & Hepatology</em>, 16(10), 605–616. 
                  <span className="text-xs text-gray-500">DOI: 10.1038/s41575-019-0173-3</span>
                </li>
                <li className="mb-2">
                  <strong>Doron, S., & Snydman, D. R.</strong> (2015). Risk and safety of probiotics. 
                  <em className="text-[#163660]"> Clinical Infectious Diseases</em>, 60(suppl_2), S129–S134. 
                  <span className="text-xs text-gray-500">DOI: 10.1093/cid/civ085</span>
                </li>
                <li className="mb-2">
                  <strong>Lynch, S. V., & Pedersen, O.</strong> (2016). The human intestinal microbiome in health and disease. 
                  <em className="text-[#163660]"> New England Journal of Medicine</em>, 375(24), 2369–2379. 
                  <span className="text-xs text-gray-500">DOI: 10.1056/NEJMra1600266</span>
                </li>
              </ol>
            </div>
          </details>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-16 mb-8">
        <div className="bg-gradient-to-r from-[#163660] via-[#275b9e] to-[#163660] rounded-2xl p-8 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">¿Listo para mejorar tu salud intestinal?</h3>
            <p className="text-lg text-blue-100 mb-8">
              Explora nuestra guía completa y descubre cómo los probióticos pueden transformar tu bienestar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tipos" className="group relative inline-flex items-center px-8 py-4 bg-white text-[#163660] font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <span className="mr-3">🦠</span>
                  Tipos de probióticos
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/recetas" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#48a537] via-[#5db649] to-[#48a537] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#eef8f2] via-[#f0f9ff] to-[#eef8f2] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <span className="mr-3">🥗</span>
                  Recetas saludables
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BlogArticleTemplate>
  );
}
