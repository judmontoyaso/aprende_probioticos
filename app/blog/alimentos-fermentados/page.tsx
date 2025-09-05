import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
// import AdBanner from '../../../components/AdBanner';

export const metadata: Metadata = {
  title: 'Enciclopedia de alimentos fermentados | Artículos sobre Probióticos',
  description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación casera y comercial.',
  keywords: 'alimentos fermentados, probióticos, fermentación, kombucha, kéfir, yogur, chucrut, kimchi, miso, tempeh',
  openGraph: {
    title: 'Enciclopedia de alimentos fermentados | Guía completa',
    description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación.',
    images: ['/images/probiotic_foods.png'],
    type: 'article',
    publishedTime: '2023-08-13T00:00:00Z',
    authors: ['Probióticos Para Todos'],
  },
};

export default function AlimentosFermentadosArticulo() {
  return (
    <div className="article-container">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] w-full relative">
          <Image
            src="/images/probiotic_foods.png"
            alt="Variedad de alimentos fermentados"
            fill
            priority
            className="object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="absolute bottom-0 w-full p-8 md:p-12 text-white">
            <div className="container mx-auto">
              <div className="inline-block px-3 py-1 bg-[#163660] text-white text-sm font-medium rounded-md mb-4">
                Artículo Completo
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Enciclopedia de alimentos fermentados
              </h1>
              <div className="flex items-center text-sm md:text-base mb-4">
                <span className="mr-4">13 de agosto, 2023</span>
                <span className="mr-4">|</span>
                <span>Por: Equipo Científico de Probióticos Para Todos</span>
              </div>
              <p className="text-lg md:text-xl max-w-3xl">
                Un recorrido completo por los alimentos fermentados tradicionales y modernos, 
                sus beneficios probióticos y métodos de preparación casera y comercial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AdBanner Top (temporarily disabled) */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="top" /> */}
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            {/* Table of Contents - Desktop */}
            <div className="hidden md:block mb-8 p-6 bg-[#eef8f2] rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-[#163660]">Contenido del artículo</h2>
              <nav aria-label="Tabla de contenidos">
                <ol className="list-decimal list-inside space-y-1 pl-4">
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#historia">Historia y ciencia de la fermentación</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#beneficios">Beneficios de los alimentos fermentados</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#lacteos">Lácteos fermentados: yogur, kéfir y más</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#vegetales">Vegetales fermentados: chucrut, kimchi y encurtidos</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#bebidas">Bebidas fermentadas: kombucha, tepache y kvass</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#soja">Fermentados de soja: miso, tempeh y natto</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#preparacion">Guía de preparación casera</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#seguridad">Seguridad alimentaria en la fermentación</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#tendencias-modernas">Tendencias modernas en fermentación</a>
                  </li>
                  <li className="text-[#275b9e] hover:text-[#163660] transition-colors">
                    <a href="#conclusion">Conclusiones</a>
                  </li>
                </ol>
              </nav>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-[#163660]">
                Los alimentos fermentados han sido parte vital de la alimentación humana durante milenios, 
                presentes en todas las culturas del mundo. Estas antiguas técnicas de conservación que transforman 
                alimentos a través de la acción microbiana no solo mejoran su duración, sino que también potencian 
                su perfil nutricional y aportan beneficios significativos para la salud.
              </p>
              
              <p className="text-gray-700 mt-6">
                En este artículo exploraremos el fascinante mundo de los alimentos fermentados, desde su rica 
                historia cultural hasta la ciencia detrás de sus beneficios para la salud. Descubriremos la 
                diversidad de estos productos a través de diferentes culturas, y aprenderemos técnicas básicas 
                para elaborar nuestros propios fermentados en casa.
              </p>
            </div>

            {/* Section 1: History */}
            <section id="historia" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Historia y ciencia de la fermentación</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  La fermentación es uno de los métodos de conservación de alimentos más antiguos de la humanidad, 
                  datando desde al menos 10,000 años atrás. Antes de la refrigeración y otras técnicas modernas de 
                  preservación, nuestros antepasados descubrieron que ciertos alimentos, al ser almacenados en 
                  condiciones específicas, desarrollaban cambios que no solo los preservaban por más tiempo sino que 
                  también mejoraban su sabor y propiedades.
                </p>
                
                <blockquote className="bg-[#eef8f2] border-l-4 border-[#48a537] p-6 my-8 rounded-r-lg">
                  <p className="text-[#163660] italic text-lg">
                    &ldquo;La fermentación es el lento proceso alquímico que transforma y preserva la comida mediante la 
                    acción de microorganismos beneficiosos, convirtiéndose en un puente entre nuestro pasado cultural 
                    y nuestra comprensión científica moderna.&rdquo;
                  </p>
                </blockquote>
                
                <h3 className="text-xl font-bold mb-4 text-[#163660]">La ciencia detrás del proceso</h3>
                <p className="text-gray-700 mb-4">
                  Desde un punto de vista científico, la fermentación es un proceso metabólico en el que los 
                  microorganismos (bacterias, levaduras o mohos) transforman los compuestos orgánicos, principalmente 
                  carbohidratos, en alcoholes, ácidos o gases en ausencia de oxígeno (anaeróbica) o con limitada 
                  presencia del mismo (microaerofílica).
                </p>
                
                <p className="text-gray-700 mb-4">
                  Los principales tipos de fermentación alimentaria incluyen:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🥛 Fermentación láctica</h4>
                    <p className="text-sm text-gray-700">Bacterias como Lactobacillus convierten azúcares en ácido láctico (yogur, chucrut)</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🍷 Fermentación alcohólica</h4>
                    <p className="text-sm text-gray-700">Levaduras transforman azúcares en alcohol etílico y CO₂ (vino, cerveza)</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🧪 Fermentación acética</h4>
                    <p className="text-sm text-gray-700">Bacterias del género Acetobacter convierten alcohol en ácido acético (vinagre)</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🍄 Fermentación con mohos</h4>
                    <p className="text-sm text-gray-700">Especies específicas de hongos modifican sustratos proteicos (queso azul, tempeh)</p>
                  </div>
                </div>
                
                {/* Timeline Infographic */}
                <div className="bg-gradient-to-br from-[#163660] to-[#275b9e] p-8 rounded-lg my-8 text-white">
                  <h3 className="text-2xl font-bold mb-8 text-center">📜 Línea de Tiempo: Historia de la Fermentación</h3>
                  
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-[#48a537] h-full hidden md:block"></div>
                    
                    {/* Timeline items */}
                    <div className="space-y-8">
                      
                      {/* 7000 a.C. */}
                      <div className="flex items-center justify-between md:justify-center relative">
                        <div className="bg-white text-[#163660] p-6 rounded-lg shadow-lg md:w-96 md:mr-8 md:ml-auto">
                          <div className="flex items-center mb-3">
                            <div className="bg-[#48a537] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                              🍶
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">7000 a.C.</h4>
                              <span className="text-[#275b9e] text-sm">China Antigua</span>
                            </div>
                          </div>
                          <p className="text-gray-700">Primeras evidencias arqueológicas de bebidas fermentadas en China</p>
                        </div>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#48a537] rounded-full border-4 border-white"></div>
                      </div>

                      {/* 6000 a.C. */}
                      <div className="flex items-center justify-between md:justify-center relative">
                        <div className="bg-white text-[#163660] p-6 rounded-lg shadow-lg md:w-96 md:ml-8">
                          <div className="flex items-center mb-3">
                            <div className="bg-[#48a537] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                              🍇
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">6000 a.C.</h4>
                              <span className="text-[#275b9e] text-sm">Georgia, Cáucaso</span>
                            </div>
                          </div>
                          <p className="text-gray-700">Inicio de la producción de vino en las montañas del Cáucaso</p>
                        </div>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#48a537] rounded-full border-4 border-white"></div>
                      </div>

                      {/* 3500 a.C. */}
                      <div className="flex items-center justify-between md:justify-center relative">
                        <div className="bg-white text-[#163660] p-6 rounded-lg shadow-lg md:w-96 md:mr-8 md:ml-auto">
                          <div className="flex items-center mb-3">
                            <div className="bg-[#48a537] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                              🍺
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">3500 a.C.</h4>
                              <span className="text-[#275b9e] text-sm">Mesopotamia</span>
                            </div>
                          </div>
                          <p className="text-gray-700">Elaboración sistemática de cerveza en la antigua Mesopotamia</p>
                        </div>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#48a537] rounded-full border-4 border-white"></div>
                      </div>

                      {/* 1500 a.C. */}
                      <div className="flex items-center justify-between md:justify-center relative">
                        <div className="bg-white text-[#163660] p-6 rounded-lg shadow-lg md:w-96 md:ml-8">
                          <div className="flex items-center mb-3">
                            <div className="bg-[#48a537] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                              🍞
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">1500 a.C.</h4>
                              <span className="text-[#275b9e] text-sm">Antiguo Egipto</span>
                            </div>
                          </div>
                          <p className="text-gray-700">Perfeccionamiento de técnicas de pan fermentado por los egipcios</p>
                        </div>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#48a537] rounded-full border-4 border-white"></div>
                      </div>

                      {/* Siglo XIX */}
                      <div className="flex items-center justify-between md:justify-center relative">
                        <div className="bg-gradient-to-r from-[#48a537] to-[#275b9e] text-white p-6 rounded-lg shadow-lg md:w-96 md:mr-8 md:ml-auto border-4 border-white">
                          <div className="flex items-center mb-3">
                            <div className="bg-white text-[#163660] rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                              🔬
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Siglo XIX</h4>
                              <span className="text-blue-200 text-sm">Era Científica</span>
                            </div>
                          </div>
                          <p className="text-blue-100">
                            <strong>Louis Pasteur</strong> descubre el papel crucial de los microorganismos en la fermentación, 
                            revolucionando nuestra comprensión científica
                          </p>
                        </div>
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-[#48a537]"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="bg-white/10 rounded-lg p-4 inline-block">
                      <p className="text-sm text-blue-100">
                        <strong>9,000 años</strong> de evolución en técnicas de fermentación que llegan hasta nuestros días
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Benefits */}
            <section id="beneficios" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Beneficios de los alimentos fermentados</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Los alimentos fermentados ofrecen una gama extraordinaria de beneficios que van más allá de la 
                  simple conservación. La ciencia moderna ha confirmado lo que culturas ancestrales intuían: estos 
                  alimentos poseen propiedades únicas para la salud<sup className="text-[#163660] font-semibold">[1,4]</sup>.
                </p>
                
                <div className="my-8">
                  {/* <AdBanner position="content" /> */}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-[#163660]">Beneficios nutricionales</h3>
                <p className="text-gray-700 mb-4">
                  La fermentación no solo preserva los nutrientes originales de los alimentos, sino que también:
                </p>
                
                <div className="bg-gradient-to-r from-[#eef8f2] to-[#c4faa4]/20 p-6 rounded-lg my-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">🔬 Mejoras bioquímicas</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Aumenta biodisponibilidad de minerales</li>
                        <li>• Sintetiza vitaminas del grupo B y K2</li>
                        <li>• Reduce antinutrientes naturales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">⚡ Digestibilidad</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Predigiere proteínas y carbohidratos</li>
                        <li>• Facilita absorción intestinal</li>
                        <li>• Reduce intolerancias alimentarias</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Beneficios para la microbiota intestinal</h3>
                <p className="text-gray-700 mb-4">
                  Quizás el beneficio más estudiado actualmente es su impacto en la salud intestinal<sup className="text-[#163660] font-semibold">[1,3]</sup>:
                </p>
                
                <div className="bg-[#163660] text-white p-6 rounded-lg my-6">
                  <h4 className="font-semibold mb-4">🦠 Mecanismos de acción probiótica</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium mb-2">Colonización beneficiosa:</h5>
                      <ul className="text-blue-200 space-y-1">
                        <li>• Aporte de probióticos vivos</li>
                        <li>• Mejora diversidad microbiana</li>
                        <li>• Fortalece barrera intestinal</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Regulación inmunológica:</h5>
                      <ul className="text-blue-200 space-y-1">
                        <li>• Modula respuestas inflamatorias</li>
                        <li>• Estimula inmunidad local</li>
                        <li>• Equilibra Th1/Th2</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Evidencia científica actual</h3>
                <p className="text-gray-700 mb-4">
                  La investigación moderna ha encontrado asociaciones positivas entre el consumo regular de alimentos fermentados y<sup className="text-[#163660] font-semibold">[4,5]</sup>:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#275b9e] mb-2">🎯 Salud digestiva</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Mejora digestión</li>
                      <li>• Reduce SII</li>
                      <li>• Fortalece inmunidad</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#275b9e] mb-2">📊 Metabolismo</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Control glucémico</li>
                      <li>• Sensibilidad insulina</li>
                      <li>• Peso saludable</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#275b9e] mb-2">🧠 Eje intestino-cerebro</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Salud mental</li>
                      <li>• Reducción estrés</li>
                      <li>• Neuroprotección</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Dairy Fermented Foods */}
            <section id="lacteos" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Lácteos fermentados: yogur, kéfir y más</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Los productos lácteos fermentados representan una de las categorías más estudiadas y consumidas mundialmente. 
                  Su proceso de fermentación no solo mejora la digestibilidad de la lactosa, sino que también enriquece 
                  el perfil nutricional y aporta microorganismos probióticos beneficiosos<sup className="text-[#163660] font-semibold">[1,2]</sup>.
                </p>
                
                <h3 className="text-xl font-bold mb-4 text-[#163660]">Yogur: el fermentado más popular</h3>
                <p className="text-gray-700 mb-4">
                  El yogur se produce mediante la fermentación de la leche por las bacterias <em>Lactobacillus bulgaricus</em> 
                  y <em>Streptococcus thermophilus</em>. Este proceso convierte la lactosa en ácido láctico, proporcionando:
                </p>
                
                <div className="bg-gradient-to-r from-[#eef8f2] to-[#c4faa4]/20 p-6 rounded-lg my-6">
                  <h4 className="font-semibold text-[#163660] mb-3">🥛 Beneficios del yogur</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-medium text-[#275b9e] mb-2">Digestibilidad</h5>
                      <p className="text-sm text-gray-700">Reduce lactosa 30-40%</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#275b9e] mb-2">Proteínas</h5>
                      <p className="text-sm text-gray-700">Aminoácidos biodisponibles</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#275b9e] mb-2">Minerales</h5>
                      <p className="text-sm text-gray-700">Mayor absorción de calcio</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Kéfir: la bebida de la longevidad</h3>
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <p className="text-gray-700 mb-4">
                    El kéfir se produce utilizando &ldquo;granos de kéfir&rdquo;, una matriz compleja de bacterias y levaduras 
                    (SCOBY) que fermentan la leche creando un producto único con propiedades excepcionales<sup className="text-[#163660] font-semibold">[2,3]</sup>:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Diversidad microbiana:</strong> Contiene más de 50 especies diferentes de microorganismos</li>
                    <li><strong>Péptidos bioactivos:</strong> Compuestos con propiedades antimicrobianas y antihipertensivas</li>
                    <li><strong>Vitaminas del grupo B:</strong> Especialmente B12, ácido fólico y biotina</li>
                    <li><strong>Efectos terapéuticos:</strong> Estudios sugieren beneficios para el control glucémico</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Otros lácteos fermentados tradicionales</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🧀 Quesos</h4>
                    <p className="text-sm text-gray-700">Fermentación con cultivos específicos que desarrollan sabores únicos y mejoran la conservación.</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🥛 Suero de mantequilla</h4>
                    <p className="text-sm text-gray-700">Rico en probióticos y con menor contenido graso que la leche tradicional.</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🍶 Lassi</h4>
                    <p className="text-sm text-gray-700">Bebida fermentada tradicional del subcontinente indio, rica en probióticos.</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🥄 Crema agria</h4>
                    <p className="text-sm text-gray-700">Fermentación de nata que desarrolla sabor ácido característico y probióticos.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Fermented Vegetables */}
            <section id="vegetales" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Vegetales fermentados: chucrut, kimchi y encurtidos</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Los vegetales fermentados han sido fundamentales para la supervivencia humana en climas fríos y estaciones 
                  sin cosechas. La fermentación láctica conserva los vegetales mientras incrementa su valor nutricional 
                  y desarrolla sabores complejos únicos.
                </p>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Chucrut: la tradición europea</h3>
                <p className="text-gray-700">
                  El chucrut (col fermentada) es uno de los alimentos fermentados más estudiados científicamente:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Vitamina C concentrada:</strong> El proceso de fermentación preserva y concentra esta vitamina</li>
                  <li><strong>Fibra prebiótica:</strong> Alimenta las bacterias beneficiosas del intestino</li>
                  <li><strong>Lactobacillus plantarum:</strong> Cepa probiótica dominante con efectos anti-inflamatorios</li>
                  <li><strong>Isotiocianatos:</strong> Compuestos sulfurados con propiedades anticancerígenas</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Kimchi: el superalimento coreano</h3>
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <p className="text-gray-700 mb-4">
                    El kimchi es considerado uno de los alimentos más saludables del mundo debido a su complejidad microbiana 
                    y densidad nutricional:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Composición microbiana:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Más de 100 especies bacterianas diferentes</li>
                        <li>• Lactobacillus kimchii (cepa exclusiva)</li>
                        <li>• Leuconostoc mesenteroides</li>
                        <li>• Weissella koreensis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Beneficios únicos:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Efectos anti-obesidad documentados</li>
                        <li>• Reducción del colesterol LDL</li>
                        <li>• Propiedades neuroprotectoras</li>
                        <li>• Actividad antiviral natural</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Encurtidos y otras preparaciones</h3>
                <p className="text-gray-700">
                  La fermentación de vegetales diversos ha dado origen a múltiples tradiciones culinarias:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Pepinillos fermentados:</strong> Ricos en probióticos vs. los encurtidos en vinagre</li>
                  <li><strong>Remolacha fermentada:</strong> Concentra nitratos beneficiosos para la salud cardiovascular</li>
                  <li><strong>Zanahorias fermentadas:</strong> Incrementa la biodisponibilidad del betacaroteno</li>
                  <li><strong>Curtido salvadoreño:</strong> Mezcla fermentada rica en vitaminas y minerales</li>
                </ul>
              </div>
            </section>

            {/* Section 5: Fermented Beverages */}
            <section id="bebidas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Bebidas fermentadas: kombucha, tepache y kvass</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Las bebidas fermentadas representan una categoría en rápido crecimiento debido a su sabor refrescante 
                  y beneficios probióticos. Estas bebidas combinan hidratación con microorganismos beneficiosos y 
                  compuestos bioactivos únicos.
                </p>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Kombucha: el té fermentado milenario</h3>
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <p className="text-gray-700 mb-4">
                    La kombucha se produce fermentando té endulzado con un SCOBY (cultivo simbiótico de bacterias y levaduras):
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Microorganismos:</h4>
                      <ul className="text-sm text-gray-700">
                        <li>• Acetobacter xylinum</li>
                        <li>• Saccharomyces cerevisiae</li>
                        <li>• Lactobacillus plantarum</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Compuestos activos:</h4>
                      <ul className="text-sm text-gray-700">
                        <li>• Polifenoles del té</li>
                        <li>• Ácidos orgánicos</li>
                        <li>• Vitaminas del grupo B</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Beneficios:</h4>
                      <ul className="text-sm text-gray-700">
                        <li>• Actividad antioxidante</li>
                        <li>• Detoxificación hepática</li>
                        <li>• Regulación glucémica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Tepache: la tradición mexicana</h3>
                <p className="text-gray-700">
                  El tepache es una bebida fermentada tradicional mexicana elaborada con cáscara de piña, que aporta:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Enzimas digestivas:</strong> Bromelina natural de la piña</li>
                  <li><strong>Fermentación espontánea:</strong> Utiliza levaduras naturales del ambiente</li>
                  <li><strong>Minerales:</strong> Potasio, magnesio y manganeso concentrados</li>
                  <li><strong>Bajo alcohol:</strong> Contenido alcohólico mínimo (1-3%)</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Kvass y otras bebidas tradicionales</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🍞 Kvass de pan</h4>
                    <p className="text-sm text-gray-700 mb-2">Bebida fermentada eslava tradicional con pan de centeno.</p>
                    <ul className="text-xs text-gray-600">
                      <li>• Rica en vitaminas del grupo B</li>
                      <li>• Probióticos naturales</li>
                      <li>• Bajo contenido alcohólico</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-2">🥤 Jun</h4>
                    <p className="text-sm text-gray-700 mb-2">Variante de kombucha fermentada con miel y té verde.</p>
                    <ul className="text-xs text-gray-600">
                      <li>• Antioxidantes potenciados</li>
                      <li>• Enzimas de la miel cruda</li>
                      <li>• Fermentación más rápida</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Soy Fermented Foods */}
            <section id="soja" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Fermentados de soja: miso, tempeh y natto</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Los productos de soja fermentados son fundamentales en las cocinas asiáticas y representan algunas de las 
                  fuentes más concentradas de probióticos y compuestos bioactivos únicos. La fermentación transforma la soja 
                  en alimentos altamente digeribles y nutricionalmente superiores.
                </p>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Miso: la pasta umami</h3>
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <p className="text-gray-700 mb-4">
                    El miso se produce fermentando soja con <em>Aspergillus oryzae</em> (koji) durante meses o años:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Tipos principales:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li><strong>Shiro miso:</strong> Fermentación corta, sabor suave</li>
                        <li><strong>Aka miso:</strong> Fermentación larga, sabor intenso</li>
                        <li><strong>Hatcho miso:</strong> Solo soja, fermentación de 3 años</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-2">Compuestos únicos:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li><strong>Isoflavonas:</strong> Genisteína y daidzeína</li>
                        <li><strong>Péptidos:</strong> Actividad antihipertensiva</li>
                        <li><strong>Saponinas:</strong> Efectos hipolipemiantes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Tempeh: la proteína completa</h3>
                <p className="text-gray-700">
                  Originario de Indonesia, el tempeh se produce fermentando granos de soja enteros con <em>Rhizopus oligosporus</em>:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Proteína completa:</strong> Todos los aminoácidos esenciales en proporciones ideales</li>
                  <li><strong>Vitamina B12:</strong> Una de las pocas fuentes vegetales de esta vitamina</li>
                  <li><strong>Digestibilidad:</strong> Las proteínas se pre-digieren durante la fermentación</li>
                  <li><strong>Versatilidad culinaria:</strong> Textura firme ideal para múltiples preparaciones</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Natto: el fermentado más potente</h3>
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <p className="text-gray-700 mb-4">
                    El natto, fermentado con <em>Bacillus subtilis var. natto</em>, es considerado uno de los alimentos 
                    más nutritivos del mundo:
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Nattokinasa:</strong> Enzima fibrinolítica que mejora la circulación sanguínea</li>
                    <li><strong>Vitamina K2 (MK-7):</strong> Forma más bioactiva para la salud ósea y cardiovascular</li>
                    <li><strong>Poliglutamato:</strong> Compuesto mucilaginoso con propiedades hidratantes</li>
                    <li><strong>Espermidina:</strong> Compuesto relacionado con la longevidad celular</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Home Preparation Guide */}
            <section id="preparacion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Guía de preparación casera</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Preparar alimentos fermentados en casa es más sencillo de lo que parece y permite controlar la calidad 
                  e ingredientes. Con equipos básicos y técnicas adecuadas, cualquier persona puede producir fermentados 
                  saludables y deliciosos.
                </p>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Equipos esenciales para fermentación casera</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-3">Equipos básicos:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Frascos de vidrio esterilizados</li>
                      <li>• Balanza digital precisa</li>
                      <li>• Termómetro de cocina</li>
                      <li>• Colador de malla fina</li>
                      <li>• Espátulas de madera o plástico</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h4 className="font-semibold text-[#163660] mb-3">Equipos avanzados:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cámara de fermentación controlada</li>
                      <li>• Medidor de pH digital</li>
                      <li>• Válvulas de fermentación</li>
                      <li>• Prensa para vegetales</li>
                      <li>• Cultivos iniciadores comerciales</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Recetas básicas paso a paso</h3>
                
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <h4 className="font-semibold text-[#163660] mb-3">🥬 Chucrut básico (7-10 días)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-[#163660] mb-2">Ingredientes:</h5>
                      <ul className="text-sm text-gray-700">
                        <li>• 1 col blanca mediana (1kg)</li>
                        <li>• 20g sal marina sin aditivos (2%)</li>
                        <li>• 1 cucharadita semillas de comino (opcional)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#163660] mb-2">Proceso:</h5>
                      <ol className="text-sm text-gray-700 list-decimal list-inside">
                        <li>Rallar la col finamente</li>
                        <li>Mezclar con sal y dejar 15 min</li>
                        <li>Masajear hasta extraer líquido</li>
                        <li>Empacar en frasco hermético</li>
                        <li>Fermentar 7-10 días a 18-22°C</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <h4 className="font-semibold text-[#163660] mb-3">🫖 Kombucha casera (7-14 días)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-[#163660] mb-2">Ingredientes:</h5>
                      <ul className="text-sm text-gray-700">
                        <li>• 1 SCOBY de kombucha</li>
                        <li>• 240ml kombucha iniciador</li>
                        <li>• 8 bolsas de té negro/verde</li>
                        <li>• 200g azúcar blanca</li>
                        <li>• 2 litros agua filtrada</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-[#163660] mb-2">Proceso:</h5>
                      <ol className="text-sm text-gray-700 list-decimal list-inside">
                        <li>Preparar té endulzado y enfriar</li>
                        <li>Añadir SCOBY y líquido iniciador</li>
                        <li>Cubrir con tela transpirable</li>
                        <li>Fermentar 7-14 días a 22-26°C</li>
                        <li>Segunda fermentación opcional</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Troubleshooting común</h3>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h5 className="font-medium text-[#163660] mb-2">❌ Moho blanco/verde</h5>
                    <p className="text-xs text-gray-700">Desechar completamente. Causas: contaminación, poca sal, temperatura alta.</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h5 className="font-medium text-[#163660] mb-2">😵 Olor desagradable</h5>
                    <p className="text-xs text-gray-700">Fermentación putrefacta. Verificar sal, temperatura y limpieza.</p>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h5 className="font-medium text-[#163660] mb-2">🐌 Fermentación lenta</h5>
                    <p className="text-xs text-gray-700">Aumentar temperatura, verificar concentración de sal.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Food Safety */}
            <section id="seguridad" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Seguridad alimentaria en la fermentación</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Aunque la fermentación es generalmente segura debido a la acidificación natural y la competencia microbiana, 
                  es fundamental seguir protocolos adecuados para prevenir contaminaciones y asegurar productos finales seguros.
                </p>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Principios de seguridad</h3>
                <div className="bg-[#eef8f2] p-6 rounded-lg my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-3">Factores protectores:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>pH ácido:</strong> Inhibe patógenos (pH &lt; 4.6)</li>
                        <li>• <strong>Sal:</strong> Actividad de agua reducida</li>
                        <li>• <strong>Competencia:</strong> Bacterias beneficiosas dominan</li>
                        <li>• <strong>Ácidos orgánicos:</strong> Efecto antimicrobiano</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-3">Factores de riesgo:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Contaminación cruzada:</strong> Utensilios sucios</li>
                        <li>• <strong>Temperatura inadecuada:</strong> Muy alta favorece patógenos</li>
                        <li>• <strong>Concentración baja de sal:</strong> Fermentación débil</li>
                        <li>• <strong>Materias primas:</strong> Ingredientes contaminados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Indicadores de calidad y seguridad</h3>
                <div className="grid md:grid-cols-4 gap-4 my-6">
                  <div className="bg-white border border-[#48a537] p-4 rounded-lg">
                    <h5 className="font-medium text-[#48a537] mb-2">✅ Buena fermentación</h5>
                    <ul className="text-xs text-gray-700">
                      <li>• Olor ácido agradable</li>
                      <li>• Color uniforme</li>
                      <li>• Textura consistente</li>
                      <li>• Burbujas de CO₂</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-[#c4ccd7] p-4 rounded-lg">
                    <h5 className="font-medium text-gray-600 mb-2">⚠️ Señales de alerta</h5>
                    <ul className="text-xs text-gray-700">
                      <li>• Cambios de color extraños</li>
                      <li>• Textura viscosa anormal</li>
                      <li>• Sabor desagradable</li>
                      <li>• Ausencia de acidez</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-red-500 p-4 rounded-lg">
                    <h5 className="font-medium text-red-600 mb-2">❌ Desechar inmediatamente</h5>
                    <ul className="text-xs text-gray-700">
                      <li>• Moho visible</li>
                      <li>• Olor putrefacto</li>
                      <li>• Gas sulfhídrico</li>
                      <li>• Consistencia mucosa</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-[#275b9e] p-4 rounded-lg">
                    <h5 className="font-medium text-[#275b9e] mb-2">📊 Monitoreo</h5>
                    <ul className="text-xs text-gray-700">
                      <li>• pH: 3.5-4.2 ideal</li>
                      <li>• Temperatura constante</li>
                      <li>• Tiempo de fermentación</li>
                      <li>• Inspección visual diaria</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Poblaciones especiales</h3>
                <p className="text-gray-700">
                  Ciertas poblaciones deben tomar precauciones adicionales al consumir alimentos fermentados:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Embarazadas:</strong> Evitar fermentados no pasteurizados de fuentes dudosas</li>
                  <li><strong>Inmunodeprimidos:</strong> Consultar con profesional de salud antes del consumo</li>
                  <li><strong>Niños pequeños:</strong> Introducir gradualmente y en pequeñas cantidades</li>
                  <li><strong>Histaminosis:</strong> Evitar fermentados ricos en histamina (quesos añejos, embutidos)</li>
                </ul>
              </div>
            </section>

            {/* Section 9: Modern Trends */}
            <section id="tendencias-modernas" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Tendencias modernas en fermentación</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  La fermentación está experimentando una revolución tecnológica que combina conocimientos ancestrales 
                  con innovaciones científicas de vanguardia, abriendo nuevas posibilidades en la producción de 
                  alimentos funcionales y personalizados.
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Fermentación de precisión</h3>
                <div className="bg-gradient-to-r from-[#163660] to-[#275b9e] text-white p-8 rounded-lg my-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-white text-[#163660] rounded-full w-16 h-16 flex items-center justify-center text-2xl mr-6">
                      🧬
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Biotecnología Alimentaria Avanzada</h4>
                      <p className="text-blue-200">Control microbiano a nivel molecular</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-3">🎯 Fermentación dirigida</h5>
                      <ul className="text-blue-200 space-y-2">
                        <li>• Cepas microbianas diseñadas genéticamente</li>
                        <li>• Control exacto de metabolitos producidos</li>
                        <li>• Optimización de condiciones ambientales</li>
                        <li>• Producción de compuestos bioactivos específicos</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-3">⚗️ Aplicaciones innovadoras</h5>
                      <ul className="text-blue-200 space-y-2">
                        <li>• Proteínas alternativas (Perfect Day, Clara Foods)</li>
                        <li>• Ingredientes funcionales personalizados</li>
                        <li>• Vitaminas y suplementos de origen microbiano</li>
                        <li>• Saborizantes naturales complejos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Innovaciones en alimentos fermentados</h3>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-[#eef8f2] border-l-4 border-[#48a537] p-6 rounded-r-lg">
                    <h4 className="font-semibold text-[#163660] mb-3">🥛 Lácteos del futuro</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Yogures probióticos personalizados según microbioma individual</li>
                      <li>• Kéfir enriquecido con péptidos bioactivos específicos</li>
                      <li>• Quesos fermentados con cultivos modificados para mayor digestibilidad</li>
                    </ul>
                  </div>
                  <div className="bg-[#eef8f2] border-l-4 border-[#275b9e] p-6 rounded-r-lg">
                    <h4 className="font-semibold text-[#163660] mb-3">🌱 Fermentados vegetales avanzados</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Kimchi enriquecido con cepas específicas anti-inflamatorias</li>
                      <li>• Chucrut con bacterias productoras de vitamina B12</li>
                      <li>• Fermentados de legumbres con proteínas completas</li>
                    </ul>
                  </div>
                  <div className="bg-[#eef8f2] border-l-4 border-[#163660] p-6 rounded-r-lg">
                    <h4 className="font-semibold text-[#163660] mb-3">🍄 Nuevos sustratos</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Fermentación de subproductos agrícolas</li>
                      <li>• Hongos fermentados como alternativas cárnicas</li>
                      <li>• Microalgas fermentadas ricas en omega-3</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Tecnologías emergentes</h3>
                <div className="bg-gradient-to-r from-[#eef8f2] to-[#c4faa4]/20 p-8 rounded-lg my-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-4 flex items-center">
                        <span className="text-2xl mr-3">🤖</span>
                        Inteligencia Artificial y IoT
                      </h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Monitoreo en tiempo real de fermentaciones</li>
                        <li>• Predicción de perfiles de sabor mediante IA</li>
                        <li>• Optimización automática de parámetros de proceso</li>
                        <li>• Control de calidad mediante sensores inteligentes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-4 flex items-center">
                        <span className="text-2xl mr-3">🔬</span>
                        Análisis científico avanzado
                      </h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Metagenómica para caracterización microbiana completa</li>
                        <li>• Metabolómica para perfiles de compuestos bioactivos</li>
                        <li>• Proteómica para análisis funcional de enzimas</li>
                        <li>• Estudios de expresión génica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Impacto en la industria alimentaria</h3>
                <div className="bg-[#163660] text-white p-6 rounded-lg my-8">
                  <h4 className="font-semibold mb-4 text-xl">📈 Mercado global de probióticos y fermentados</h4>
                  
                  {/* Market Statistics */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#48a537] mb-1">$85B</div>
                      <p className="text-blue-200 text-sm">Mercado global de probióticos (2024)</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#48a537] mb-1">8.5%</div>
                      <p className="text-blue-200 text-sm">Crecimiento anual promedio</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-[#48a537] mb-1">$150B</div>
                      <p className="text-blue-200 text-sm">Proyección para 2032</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-3 text-white">🚀 Segmentos en crecimiento</h5>
                      <ul className="text-blue-200 space-y-1">
                        <li>• <strong>Alimentos fermentados:</strong> Mercado más grande y de mayor crecimiento</li>
                        <li>• <strong>Suplementos probióticos:</strong> Demanda creciente en salud digestiva</li>
                        <li>• <strong>Bebidas funcionales:</strong> Kombucha, kéfir y productos innovadores</li>
                        <li>• <strong>Ingredientes industriales:</strong> Fermentación de precisión</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h5 className="font-semibold mb-3 text-white">🌍 Impacto económico</h5>
                      <ul className="text-blue-200 space-y-1">
                        <li>• <strong>Asia-Pacífico:</strong> Mercado más grande (40% global)</li>
                        <li>• <strong>Europa:</strong> Regulación avanzada y innovación</li>
                        <li>• <strong>América del Norte:</strong> Adopción rápida de nuevas tecnologías</li>
                        <li>• <strong>Mercados emergentes:</strong> Potencial de crecimiento significativo</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white/5 p-4 rounded-lg">
                    <p className="text-blue-200 text-center text-sm">
                      <strong>Fuente:</strong> Datos compilados de múltiples reportes de mercado incluyendo Grand View Research, 
                      Allied Market Research y Transparency Market Research (2024)
                    </p>
                  </div>
                </div>

                <div className="bg-[#eef8f2] border-l-4 border-[#48a537] p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-[#163660] mb-3">🌍 Sostenibilidad y economía circular</h4>
                  <p className="text-gray-700 mb-3">
                    Las nuevas tecnologías de fermentación están transformando la sostenibilidad alimentaria:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Menor huella ambiental:</strong> Reducción significativa de emisiones vs. métodos convencionales</li>
                    <li>• <strong>Aprovechamiento de residuos:</strong> Conversión de subproductos en alimentos de valor</li>
                    <li>• <strong>Eficiencia de recursos:</strong> Producción optimizada en ambientes controlados</li>
                    <li>• <strong>Escalabilidad:</strong> Menor dependencia de factores climáticos y geográficos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10: Conclusions */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#163660]">Conclusiones</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Los alimentos fermentados representan una intersección fascinante entre tradición ancestral y ciencia moderna. 
                  A través de milenios de evolución cultural, la humanidad ha desarrollado técnicas de fermentación que no solo 
                  preservan alimentos, sino que los transforman en productos nutricionalmente superiores y terapéuticamente activos. 
                  Hoy, la fermentación de precisión está revolucionando esta antigua práctica, llevándola hacia un futuro 
                  de personalización y sostenibilidad sin precedentes<sup className="text-[#163660] font-semibold">[1,6,7]</sup>.
                </p>

                <div className="bg-gradient-to-r from-[#eef8f2] to-[#c4faa4]/20 p-8 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4 text-[#163660]">Evolución: del pasado al futuro</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-3">🏛️ Tradición ancestral:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 9,000 años de técnicas empíricas</li>
                        <li>• Conservación natural de alimentos</li>
                        <li>• Desarrollo cultural y gastronómico</li>
                        <li>• Conocimiento transmitido generacionalmente</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-3">🔬 Ciencia moderna:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Comprensión molecular de procesos</li>
                        <li>• Evidencia científica de beneficios</li>
                        <li>• Estandarización de calidad</li>
                        <li>• Optimización de propiedades funcionales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#163660] mb-3">🚀 Innovación del futuro:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fermentación de precisión controlada</li>
                        <li>• Personalización según microbioma</li>
                        <li>• Sostenibilidad y economía circular</li>
                        <li>• Producción escalable y eficiente</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#163660]">Impacto transformador en la alimentación</h3>
                <p className="text-gray-700 mb-4">
                  Las tecnologías emergentes están redefiniendo los límites de lo posible en fermentación alimentaria<sup className="text-[#163660] font-semibold">[8,9,10]</sup>:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-[#163660] text-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-lg">🎯 Precisión biotecnológica</h4>
                    <ul className="text-blue-200 text-sm space-y-1">
                      <li>• Control exacto de metabolitos bioactivos</li>
                      <li>• Cepas microbianas diseñadas específicamente</li>
                      <li>• Producción de ingredientes imposibles naturalmente</li>
                      <li>• Eliminación de variabilidad en procesos</li>
                    </ul>
                  </div>
                  <div className="bg-[#48a537] text-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-lg">🌱 Sostenibilidad avanzada</h4>
                    <ul className="text-green-200 text-sm space-y-1">
                      <li>• 90% reducción en huella de carbono</li>
                      <li>• Aprovechamiento total de subproductos</li>
                      <li>• Producción independiente del clima</li>
                      <li>• Economía circular en alimentación</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Perspectivas futuras</h3>
                <p className="text-gray-700">
                  La investigación continua en el campo de los alimentos fermentados abre nuevas posibilidades:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Medicina personalizada:</strong> Desarrollo de probióticos específicos según el perfil genético individual</li>
                  <li><strong>Fermentación de precisión:</strong> Control microbiano avanzado para productos con propiedades específicas</li>
                  <li><strong>Nuevos sustratos:</strong> Fermentación de subproductos agroindustriales para economía circular</li>
                  <li><strong>Biotecnología alimentaria:</strong> Ingeniería de cepas para producción de compuestos terapéuticos</li>
                  <li><strong>Análisis ómico:</strong> Caracterización completa del microbioma de alimentos fermentados</li>
                </ul>

                <div className="bg-[#163660] text-white p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4">Recomendaciones prácticas</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">🍽️ Incorporación dietética</h4>
                      <p className="text-sm text-blue-100">Incluir 2-3 porciones diarias de alimentos fermentados diversos para maximizar beneficios.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">🏠 Producción casera</h4>
                      <p className="text-sm text-blue-100">Comenzar con fermentaciones simples como chucrut o kombucha para desarrollar habilidades.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">📚 Educación continua</h4>
                      <p className="text-sm text-blue-100">Mantenerse actualizado sobre investigaciones y técnicas de fermentación segura.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#163660]">Consideraciones finales</h3>
                <p className="text-gray-700">
                  Los alimentos fermentados no son una moda pasajera sino una rediscoverta de sabiduría ancestral validada 
                  por la ciencia moderna. Su incorporación en la dieta contemporánea representa una estrategia nutricional 
                  inteligente para abordar los desafíos de salud del siglo XXI, desde la disbiosis intestinal hasta las 
                  enfermedades metabólicas crónicas.
                </p>
                
                <div className="bg-[#eef8f2] border-l-4 border-[#48a537] p-6 my-8 rounded-r-lg">
                  <p className="text-[#163660] italic font-medium">
                    &ldquo;En cada cucharada de alimentos fermentados consumimos no solo nutrientes, sino millones de años 
                    de evolución microbiana que trabaja en simbiosis con nuestro organismo, recordándonos que somos parte 
                    de un ecosistema viviente más amplio y complejo.&rdquo;
                  </p>
                  <p className="text-sm text-[#163660]/70 mt-2">— Reflexión del equipo científico</p>
                </div>

                <p className="text-gray-700">
                  La fermentación continúa siendo una frontera activa de investigación que promete revelaciones adicionales 
                  sobre los mecanismos por los cuales estos alimentos milenarios pueden contribuir a un futuro más saludable 
                  y sostenible para la humanidad.
                </p>
              </div>
            </section>
            
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
                        <strong>Marco, M. L., Heeney, D., Binda, S., et al.</strong> (2017). Health benefits of fermented foods: microbiota and beyond. 
                        <em className="text-[#163660]"> Current Opinion in Biotechnology</em>, 44, 94-102. 
                        <span className="text-xs text-gray-500">DOI: 10.1016/j.copbio.2016.11.010</span>
                      </li>
                      <li className="mb-2">
                        <strong>Tamang, J. P., Shin, D. H., Jung, S. J., & Chae, S. W.</strong> (2016). Functional properties of microorganisms in fermented foods. 
                        <em className="text-[#163660]"> Frontiers in Microbiology</em>, 7, 578. 
                        <span className="text-xs text-gray-500">DOI: 10.3389/fmicb.2016.00578</span>
                      </li>
                      <li className="mb-2">
                        <strong>Dimidi, E., Cox, S. R., Rossi, M., & Whelan, K.</strong> (2019). Fermented foods: definitions and characteristics, impact on the gut microbiota and effects on gastrointestinal health and disease. 
                        <em className="text-[#163660]"> Nutrients</em>, 11(8), 1806. 
                        <span className="text-xs text-gray-500">DOI: 10.3390/nu11081806</span>
                      </li>
                      <li className="mb-2">
                        <strong>Chilton, S. N., Burton, J. P., & Reid, G.</strong> (2015). Inclusion of fermented foods in food guides around the world. 
                        <em className="text-[#163660]"> Nutrients</em>, 7(1), 390-404. 
                        <span className="text-xs text-gray-500">DOI: 10.3390/nu7010390</span>
                      </li>
                      <li className="mb-2">
                        <strong>Katz, S. E.</strong> (2012). <em className="text-[#163660]">The Art of Fermentation: An In-Depth Exploration of Essential Concepts and Processes from Around the World</em>. 
                        Chelsea Green Publishing. ISBN: 978-1603582865
                      </li>
                    </ol>
                  </div>
                </details>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-[#eef8f2] p-4 sm:p-6 rounded-lg shadow-sm border border-[#c4ccd7] mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#163660]">¿Sabías que...?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    El kimchi coreano contiene más de 100 especies distintas de microorganismos.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    Un solo vaso de kéfir puede contener hasta 50 especies diferentes de bacterias y levaduras beneficiosas.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    La Organización Mundial de la Salud recomienda incluir alimentos fermentados en la dieta habitual.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48a537] mr-2">✓</span>
                    Culturas con alta ingesta de fermentados suelen tener menor incidencia de trastornos digestivos.
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4 text-[#163660]">Artículos relacionados</h3>
                <div className="space-y-4">
                  <Link href="/blog/salud-humana" className="block group">
                    <p className="font-medium text-[#163660] group-hover:text-[#275b9e] transition-colors">Probióticos en la salud humana</p>
                    <p className="text-sm text-gray-500">Microbiota y bienestar</p>
                  </Link>
                  <Link href="/blog/nutricion-animal" className="block group">
                    <p className="font-medium text-[#163660] group-hover:text-[#275b9e] transition-colors">Nutrición animal con probióticos</p>
                    <p className="text-sm text-gray-500">Aplicaciones en ganadería</p>
                  </Link>
                  <Link href="/blog/agricultura-sostenible" className="block group">
                    <p className="font-medium text-[#163660] group-hover:text-[#275b9e] transition-colors">Agricultura sostenible</p>
                    <p className="text-sm text-gray-500">Probióticos en cultivos</p>
                  </Link>
                </div>
              </div>
              
              <div className="bg-[#163660] text-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Recetas de fermentados</h3>
                <p className="text-sm mb-4">Explora nuestra colección de recetas con instrucciones paso a paso para preparar deliciosos fermentados en casa.</p>
                <Link href="/recetas" className="block text-center bg-white text-[#163660] font-medium py-2 px-4 rounded hover:bg-[#eef8f2] transition-colors">
                  Ver recetas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ad Banner Bottom */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="bottom" /> */}
      </div>
    </div>
  );
}
