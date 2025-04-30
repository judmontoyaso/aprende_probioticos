import Image from "next/image";
import Link from "next/link";
import AdBanner from "./components/AdBanner";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Probióticos: Aliados de tu Salud</h1>
            <p className="text-lg sm:text-xl mb-6">Descubre cómo estos microorganismos beneficiosos pueden mejorar tu salud digestiva y bienestar general, respaldados por la ciencia.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/que-son" className="bg-white text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-green-100 transition-colors text-sm sm:text-base">
                Aprender más
              </Link>
              <Link href="/beneficios" className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base">
                Ver beneficios
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/images/probiotics-hero.png" 
                alt="Ilustración de probióticos"
                fill
                sizes="(max-width: 640px) 256px, 400px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Ad Banner Top */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div>
      
      {/* Introduction Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">¿Qué son los Probióticos?</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Los probióticos son microorganismos vivos que, cuando se administran en cantidades adecuadas, confieren un beneficio para la salud del huésped. Principalmente se encuentran en alimentos fermentados y suplementos dietéticos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-green-50 p-5 sm:p-6 rounded-lg shadow-sm border border-green-100">
              <div className="h-12 w-12 mb-3 sm:mb-4">
                <Image 
                  src="/icons/investigacion_ciencia.png" 
                  alt="Ícono de investigación científica"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Respaldados por la Ciencia</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Investigaciones científicas han demostrado sus efectos positivos en el sistema digestivo, inmunológico y más.
              </p>
            </div>
            
            <div className="bg-green-50 p-5 sm:p-6 rounded-lg shadow-sm border border-green-100">
              <div className="h-12 w-12 mb-3 sm:mb-4">
                <Image 
                  src="/icons/bacterias_probioticos.png" 
                  alt="Ícono de bacterias probióticas"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Microorganismos Beneficiosos</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Principalmente bacterias de los géneros Lactobacillus y Bifidobacterium, pero también algunas levaduras como Saccharomyces.
              </p>
            </div>
            
            <div className="bg-green-50 p-5 sm:p-6 rounded-lg shadow-sm border border-green-100 sm:col-span-2 md:col-span-1">
              <div className="h-12 w-12 mb-3 sm:mb-4">
                <Image 
                  src="/icons/alimentos_fermentados.png" 
                  alt="Ícono de alimentos fermentados"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Fuentes Naturales</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Presentes en alimentos fermentados como yogur, kéfir, chucrut, kimchi y también disponibles como suplementos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alimentos Probióticos Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Alimentos ricos en probióticos</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[400px]">
                <Image 
                  src="/images/alimentos-probioticos.png" 
                  alt="Alimentos ricos en probióticos como yogur, kéfir, chucrut y kimchi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <p className="text-sm sm:text-base"><strong>Yogur:</strong> Especialmente aquellos con cultivos vivos y activos, aportan probióticos como Lactobacillus y Streptococcus thermophilus.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <p className="text-sm sm:text-base"><strong>Kéfir:</strong> Bebida fermentada que contiene hasta 30 cepas diferentes de bacterias y levaduras probióticas.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <p className="text-sm sm:text-base"><strong>Chucrut:</strong> Col fermentada rica en probióticos y también en vitaminas C, B y K.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <p className="text-sm sm:text-base"><strong>Kimchi:</strong> Plato coreano fermentado que contiene múltiples cepas de bacterias beneficiosas.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <p className="text-sm sm:text-base"><strong>Kombucha:</strong> Té fermentado con propiedades probióticas y antioxidantes.</p>
                </li>
              </ul>

              <div className="mt-4 px-4 py-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong className="text-green-700">Consejo:</strong> Para obtener el máximo beneficio, consume estos alimentos regularmente como parte de una dieta equilibrada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content with Sidebar Ad */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Beneficios principales de los probióticos</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="h-10 w-10 mr-3 flex-shrink-0">
                      <Image 
                        src="/icons/sistema_digestivo.png" 
                        alt="Ícono de sistema digestivo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-green-600">Mejora la salud digestiva</h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        Los probióticos pueden ayudar a restaurar el equilibrio de la flora intestinal, especialmente después de alteraciones como el uso de antibióticos. Contribuyen a reducir síntomas de trastornos digestivos como el síndrome del intestino irritable.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="h-10 w-10 mr-3 flex-shrink-0">
                      <Image 
                        src="/icons/sistema_inmunologico.png" 
                        alt="Ícono de sistema inmunológico"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-green-600">Fortalece el sistema inmunológico</h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        Aproximadamente el 70% de nuestro sistema inmunológico reside en el intestino. Los probióticos pueden estimular la producción de anticuerpos naturales y mejorar la actividad de las células inmunitarias.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="h-10 w-10 mr-3 flex-shrink-0">
                      <Image 
                        src="/icons/conexion_intestino_cerebro.png" 
                        alt="Ícono de conexión intestino-cerebro"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-green-600">Mejora la salud mental</h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        Estudios recientes han mostrado conexiones entre la salud intestinal y la salud cerebral (eje intestino-cerebro), sugiriendo que los probióticos podrían tener efectos positivos en condiciones como la ansiedad y la depresión.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <Link href="/beneficios" className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center text-sm sm:text-base">
                  Ver todos los beneficios
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div>
              <AdBanner position="sidebar" className="sticky top-6" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-8 sm:py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16">
              <Image
                src="/icons/suplementos_capsulas.png" 
                alt="Ícono de suplementos probióticos"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">¿Quieres aprender a elegir el probiótico adecuado?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            No todos los probióticos son iguales. Descubre cómo seleccionar el más adecuado para tus necesidades específicas.
          </p>
          <Link href="/como-elegir" className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-green-50 transition-colors inline-block">
            Guía para elegir probióticos
          </Link>
        </div>
      </section>
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
    </>
  );
}
