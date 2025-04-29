import Image from 'next/image';
import Link from 'next/link';
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
                Los probióticos son microorganismos vivos —principalmente bacterias y algunas levaduras— que, cuando se administran en cantidades adecuadas, proporcionan beneficios a la salud del huésped, según la definición establecida por la Organización Mundial de la Salud (OMS) y la FAO <a href="#ref1" className="text-green-600 font-semibold">[1]</a>. Estas bacterias beneficiosas coexisten en armonía con nuestro cuerpo, especialmente en el sistema digestivo, donde forman parte de la microbiota intestinal.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                A lo largo de las últimas décadas, múltiples investigaciones han demostrado que ciertas cepas probióticas pueden mejorar la salud digestiva, fortalecer el sistema inmunológico, prevenir trastornos gastrointestinales, e incluso influir en el estado de ánimo y la función cerebral, a través del llamado eje intestino-cerebro <a href="#ref2" className="text-green-600 font-semibold">[2]</a><a href="#ref3" className="text-green-600 font-semibold">[3]</a>.
              </p>
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4 sm:my-6 text-sm sm:text-base">
                &ldquo;El término &apos;probiótico&apos; proviene del latín pro (&apos;a favor de&apos;) y del griego bios (&apos;vida&apos;), lo que refleja su papel esencial en el equilibrio intestinal y la salud general del organismo.&rdquo;
              </blockquote>
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
              
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Las cepas probióticas más estudiadas y utilizadas en suplementos y alimentos fermentados pertenecen a los siguientes géneros:
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-600 flex items-center">
                    <div className="h-6 w-6 mr-2">
                      <Image 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Lactobacillus"
                        width={24}
                        height={24}
                        className="object-contain"
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
                      <Image 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Bifidobacterium"
                        width={24}
                        height={24}
                        className="object-contain"
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
                      <Image 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Saccharomyces"
                        width={24}
                        height={24}
                        className="object-contain"
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
                      <Image 
                        src="/icons/bacterias_probioticos.png" 
                        alt="Ícono de Streptococcus"
                        width={24}
                        height={24}
                        className="object-contain"
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
            
            <section className="bg-white p-5 sm:p-8 rounded-lg shadow-sm mb-6 sm:mb-8" id="referencias">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 border-b pb-2">Referencias científicas</h2>
              
              <ol className="list-decimal pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li id="ref1"><span className="font-semibold">[1]</span> FAO/WHO. <em>Guidelines for the Evaluation of Probiotics in Food</em> (2002). <a href="https://isappscience.org/wp-content/uploads/2019/04/probiotic_guidelines.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enlace al documento</a></li>
                
                <li id="ref2"><span className="font-semibold">[2]</span> Cryan J.F. &amp; Dinan T.G. <em>Mind-altering microorganisms: the impact of the gut microbiota on brain and behaviour</em>. Nature Reviews Neuroscience, 2012. DOI: <a href="https://doi.org/10.1038/nrn3346" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1038/nrn3346</a></li>
                
                <li id="ref3"><span className="font-semibold">[3]</span> Wang H. et al. <em>Effect of Probiotics on Central Nervous System Functions in Animals and Humans</em>. Frontiers in Microbiology, 2016. (Nota: Referencia corregida de Frontiers in Psychiatry a Frontiers in Microbiology).</li>
                
                <li id="ref4"><span className="font-semibold">[4]</span> Ouwehand A.C. et al. <em>Probiotics: mechanisms and established effects</em>. International Dairy Journal, 2002. DOI: <a href="https://doi.org/10.1016/S0958-6946(01)00159-5" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1016/S0958-6946(01)00159-5</a></li>
                
                <li id="ref5"><span className="font-semibold">[5]</span> Turroni F. et al. <em>Bifidobacterium bifidum as an example of a specialized human gut commensal</em>. Applied and Environmental Microbiology, 2008. DOI: <a href="https://doi.org/10.1128/AEM.02216-08" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1128/AEM.02216-08</a></li>
                
                <li id="ref6"><span className="font-semibold">[6]</span> McFarland L.V. <em>Systematic review and meta-analysis of Saccharomyces boulardii in adult patients</em>. World Journal of Gastroenterology, 2010. (Nota: Referencia corregida de Clinical Infectious Diseases a World Journal of Gastroenterology).</li>
                
                <li id="ref7"><span className="font-semibold">[7]</span> Servin A.L. <em>Antagonistic activities of lactobacilli and bifidobacteria against microbial pathogens</em>. FEMS Microbiology Reviews, 2004. DOI: <a href="https://doi.org/10.1016/j.femsre.2004.01.003" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1016/j.femsre.2004.01.003</a></li>
                
                <li id="ref8"><span className="font-semibold">[8]</span> Corr S.C. et al. <em>Bacteriocin production as a mechanism for the antiinfective activity of Lactobacillus salivarius UCC118</em>. Proceedings of the National Academy of Sciences, 2007. DOI: <a href="https://doi.org/10.1073/pnas.0700440104" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1073/pnas.0700440104</a></li>
                
                <li id="ref9"><span className="font-semibold">[9]</span> Bron P.A. et al. <em>Emerging molecular insights into the interaction between probiotics and the host intestinal mucosa</em>. Nature Reviews Microbiology, 2012. (Nota: Referencia corregida de Current Opinion in Biotechnology a Nature Reviews Microbiology).</li>
                
                <li id="ref10"><span className="font-semibold">[10]</span> Wells J.M. et al. <em>Epithelial crosstalk at the microbiota-mucosal interface</em>. Proceedings of the National Academy of Sciences, 2017. (Nota: Referencia corregida de Nature Reviews Microbiology a Proceedings of the National Academy of Sciences).</li>
                
                <li id="ref11"><span className="font-semibold">[11]</span> Louis P. &amp; Flint H.J. <em>Formation of propionate and butyrate by the human colonic microbiota</em>. Environmental Microbiology, 2017. (Nota: Referencia corregida de Nature Reviews Gastroenterology & Hepatology a Environmental Microbiology).</li>
                
                <li id="ref12"><span className="font-semibold">[12]</span> Sender R., Fuchs S. &amp; Milo R. <em>Revised Estimates for the Number of Human and Bacteria Cells in the Body</em>. PLoS Biology, 2016. DOI: <a href="https://doi.org/10.1016/j.cell.2016.01.013" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1016/j.cell.2016.01.013</a></li>
                
                <li id="ref13"><span className="font-semibold">[13]</span> Qin J. et al. <em>A human gut microbial gene catalogue established by metagenomic sequencing</em>. Nature, 2010. DOI: <a href="https://doi.org/10.1038/nature08821" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">10.1038/nature08821</a></li>
                
                <li id="ref14"><span className="font-semibold">[14]</span> Metchnikoff E. <em>The Prolongation of Life: Optimistic Studies</em>, 1907. <span className="text-gray-500">Este libro es de dominio público y puede encontrarse en bibliotecas digitales como Project Gutenberg o Internet Archive.</span></li>
              </ol>
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
      </main>
      
      {/* Bottom Ad */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
      
      <Footer />
    </div>
  );
} 