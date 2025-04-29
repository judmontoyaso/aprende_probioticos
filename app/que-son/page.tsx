import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';

export default function QueSon() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">¿Qué son los Probióticos?</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Una explicación científica de los probióticos, su naturaleza y cómo interactúan con nuestro cuerpo.
          </p>
        </div>
      </header>
      
      {/* Ad Banner Top */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Definición científica</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Según la definición de la Organización Mundial de la Salud (OMS) y la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), los probióticos son &ldquo;microorganismos vivos que, cuando se administran en cantidades adecuadas, confieren un beneficio a la salud del huésped&rdquo;.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                En términos más simples, los probióticos son bacterias y levaduras beneficiosas que residen naturalmente en nuestro cuerpo o que pueden ser consumidas a través de alimentos fermentados o suplementos específicos.
              </p>
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4 sm:my-6 text-sm sm:text-base">
                &ldquo;La palabra &apos;probiótico&apos; proviene del latín &apos;pro&apos; que significa &apos;a favor de&apos; y del griego &apos;bios&apos; que significa &apos;vida&apos;.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-gray-700">
                Estos microorganismos beneficiosos coexisten con nosotros en una relación simbiótica, principalmente en el tracto digestivo, aunque también se encuentran en otras partes del cuerpo como la piel, la boca y el sistema urogenital.
              </p>
            </section>
            
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Tipos principales de probióticos</h2>
              
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="relative w-full max-w-[700px] h-[200px] sm:h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/tipos-probioticos.png" 
                    alt="Diferentes tipos de bacterias probióticas"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 700px, 700px"
                    className="rounded-lg shadow-md object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600">Lactobacillus</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Es uno de los géneros más comunes de bacterias probióticas. Habitan naturalmente en nuestro sistema digestivo y genital. Diferentes cepas tienen diferentes beneficios, desde mejorar la digestión de la lactosa hasta reducir la diarrea y fortalecer el sistema inmunológico.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    <strong>Cepas notables:</strong> L. acidophilus, L. rhamnosus, L. casei, L. plantarum.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600">Bifidobacterium</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Estas bacterias se encuentran comúnmente en el intestino grueso y ayudan a descomponer los alimentos, absorber nutrientes, y prevenir la colonización por bacterias dañinas. Son especialmente importantes en la infancia temprana.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    <strong>Cepas notables:</strong> B. bifidum, B. longum, B. breve, B. infantis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600">Saccharomyces</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    A diferencia de los probióticos anteriores que son bacterias, Saccharomyces es un tipo de levadura probiótica. Especialmente S. boulardii se ha estudiado por su capacidad para prevenir y tratar diarreas, incluyendo aquellas causadas por antibióticos.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    <strong>Cepa notable:</strong> S. boulardii.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600">Streptococcus thermophilus</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Esta bacteria es comúnmente utilizada en la producción de yogurt y quesos. Ayuda a mejorar la digestión de la lactosa y tiene propiedades antiinflamatorias.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">¿Cómo funcionan los probióticos?</h2>
              
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Los probióticos funcionan de diversas maneras para beneficiar nuestra salud. Algunos de los mecanismos clave incluyen:
              </p>
              
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                <li>
                  <strong>Competencia por los receptores:</strong> Los probióticos se adhieren a la mucosa intestinal, impidiendo que las bacterias patógenas se fijen y colonicen.
                </li>
                <li>
                  <strong>Producción de sustancias antimicrobianas:</strong> Muchos probióticos producen compuestos como ácidos orgánicos y bacteriocinas que inhiben el crecimiento de microorganismos dañinos.
                </li>
                <li>
                  <strong>Estimulación del sistema inmunológico:</strong> Los probióticos interactúan con las células inmunitarias del intestino, modulando la respuesta inmune.
                </li>
                <li>
                  <strong>Refuerzo de la barrera intestinal:</strong> Ayudan a mantener la integridad del revestimiento intestinal, reduciendo la permeabilidad intestinal.
                </li>
                <li>
                  <strong>Producción de nutrientes:</strong> Algunos probióticos producen vitaminas (como K y B) y ácidos grasos de cadena corta que benefician nuestra salud.
                </li>
              </ul>
              
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100">
                <p className="text-xs sm:text-sm text-gray-700">
                  <strong className="text-green-700">Nota importante:</strong> La eficacia de los probióticos es cepa-específica, lo que significa que diferentes cepas de la misma especie pueden tener efectos diferentes en el cuerpo. Por este motivo, es importante elegir probióticos con cepas específicas que hayan demostrado beneficios para la condición que se desea tratar.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Datos interesantes</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El cuerpo humano contiene trillones de microorganismos, superando el número de células humanas.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El intestino humano alberga aproximadamente 1,000 especies diferentes de bacterias.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Los probióticos se han utilizado tradicionalmente durante siglos en alimentos fermentados.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El concepto moderno de probióticos fue introducido por el científico ruso Elie Metchnikoff en 1907.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
      
      <Footer />
    </div>
  );
} 