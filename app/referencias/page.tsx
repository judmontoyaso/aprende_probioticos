import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';

export default function Referencias() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Referencias Científicas</h1>
          <p className="text-xl max-w-3xl">
            Estudios científicos y publicaciones que respaldan la información presentada en este sitio.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">¿Qué son los Probióticos?</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Hill, C., Guarner, F., Reid, G., Gibson, G. R., Merenstein, D. J., Pot, B., Morelli, L., Canani, R. B., Flint, H. J., Salminen, S., Calder, P. C., & Sanders, M. E. (2014). The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic. <em>Nature Reviews Gastroenterology & Hepatology</em>, 11(8), 506-514.</p>
                  <p className="text-sm text-gray-500">Este artículo ofrece la definición consensuada de probióticos por la Asociación Científica Internacional para Probióticos y Prebióticos.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Azad, M. A. K., Sarker, M., & Wan, D. (2018). Immunomodulatory Effects of Probiotics on Cytokine Profiles. <em>BioMed Research International</em>, 2018, 8063647.</p>
                  <p className="text-sm text-gray-500">Revisión sobre cómo los probióticos modulan el sistema inmunológico a través de diversos mecanismos.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Hemarajata, P., & Versalovic, J. (2013). Effects of probiotics on gut microbiota: mechanisms of intestinal immunomodulation and neuromodulation. <em>Therapeutic advances in gastroenterology</em>, 6(1), 39-51.</p>
                  <p className="text-sm text-gray-500">Estudio que detalla los mecanismos de acción de los probióticos en el intestino.</p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Beneficios para la Salud Digestiva</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Goldenberg, J. Z., Yap, C., Lytvyn, L., Lo, C. K., Beardsley, J., Mertz, D., & Johnston, B. C. (2017). Probiotics for the prevention of Clostridium difficile-associated diarrhea in adults and children. <em>Cochrane Database of Systematic Reviews</em>, 12(12), CD006095.</p>
                  <p className="text-sm text-gray-500">Revisión sistemática sobre la eficacia de los probióticos en la prevención de la diarrea asociada a <em>Clostridium difficile</em>.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Ford, A. C., Harris, L. A., Lacy, B. E., Quigley, E. M. M., & Moayyedi, P. (2018). Systematic review with meta-analysis: the efficacy of prebiotics, probiotics, synbiotics and antibiotics in irritable bowel syndrome. <em>Alimentary Pharmacology & Therapeutics</em>, 48(10), 1044-1060.</p>
                  <p className="text-sm text-gray-500">Meta-análisis que evalúa la eficacia de los probióticos en el síndrome del intestino irritable.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Guarino, A., Guandalini, S., & Lo Vecchio, A. (2015). Probiotics for Prevention and Treatment of Diarrhea. <em>Journal of Clinical Gastroenterology</em>, 49, S37-S45.</p>
                  <p className="text-sm text-gray-500">Revisión sobre el uso de probióticos en la prevención y tratamiento de diferentes tipos de diarrea.</p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Sistema Inmunológico</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Hao, Q., Dong, B. R., & Wu, T. (2015). Probiotics for preventing acute upper respiratory tract infections. <em>Cochrane Database of Systematic Reviews</em>, 2015(2), CD006895.</p>
                  <p className="text-sm text-gray-500">Revisión Cochrane sobre la eficacia de los probióticos en la prevención de infecciones respiratorias agudas.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Yan, F., & Polk, D. B. (2011). Probiotics and immune health. <em>Current Opinion in Gastroenterology</em>, 27(6), 496-501.</p>
                  <p className="text-sm text-gray-500">Artículo que revisa cómo los probióticos interactúan con el sistema inmunológico.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Maldonado Galdeano, C., Cazorla, S. I., Lemme Dumit, J. M., Vélez, E., & Perdigón, G. (2019). Beneficial Effects of Probiotic Consumption on the Immune System. <em>Annals of Nutrition and Metabolism</em>, 74(2), 115-124.</p>
                  <p className="text-sm text-gray-500">Revisión de los efectos beneficiosos del consumo de probióticos en el sistema inmunológico.</p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Salud Mental</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Cryan, J. F., & Dinan, T. G. (2012). Mind-altering microorganisms: the impact of the gut microbiota on brain and behaviour. <em>Nature Reviews Neuroscience</em>, 13(10), 701-712.</p>
                  <p className="text-sm text-gray-500">Artículo seminal sobre el eje intestino-cerebro y cómo la microbiota intestinal afecta el comportamiento y la función cerebral.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Huang, R., Wang, K., & Hu, J. (2016). Effect of Probiotics on Depression: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. <em>Nutrients</em>, 8(8), 483.</p>
                  <p className="text-sm text-gray-500">Meta-análisis sobre el efecto de los probióticos en la depresión.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Pirbaglou, M., Katz, J., de Souza, R. J., Stearns, J. C., Motamed, M., & Ritvo, P. (2016). Probiotic supplementation can positively affect anxiety and depressive symptoms: a systematic review of randomized controlled trials. <em>Nutrition Research</em>, 36(9), 889-898.</p>
                  <p className="text-sm text-gray-500">Revisión sistemática sobre los efectos de los probióticos en la ansiedad y los síntomas depresivos.</p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Cómo Elegir Probióticos</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Wilkins, T., & Sequoia, J. (2017). Probiotics for Gastrointestinal Conditions: A Summary of the Evidence. <em>American Family Physician</em>, 96(3), 170-178.</p>
                  <p className="text-sm text-gray-500">Resumen de la evidencia sobre probióticos para diferentes condiciones gastrointestinales, incluyendo recomendaciones específicas de cepas.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">Sanders, M. E. (2016). Probiotics and microbiota composition. <em>BMC Medicine</em>, 14, 82.</p>
                  <p className="text-sm text-gray-500">Artículo que discute la importancia de la especificidad de cepas en los probióticos.</p>
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200">
                  <p className="mb-2">McFarland, L. V. (2015). From Meta-Analysis to Cost Effectiveness: A Practical Selection of Probiotics for Treating Irritable Bowel Syndrome. <em>Digestive Diseases</em>, 33(3), 368-376.</p>
                  <p className="text-sm text-gray-500">Guía práctica para seleccionar probióticos para el síndrome del intestino irritable basada en la evidencia científica.</p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Bases de datos científicas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      PubMed
                    </a>
                  </li>
                  <li className="flex items-start">
                    <a href="https://www.cochranelibrary.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      Cochrane Library
                    </a>
                  </li>
                  <li className="flex items-start">
                    <a href="https://clinicaltrials.gov/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      ClinicalTrials.gov
                    </a>
                  </li>
                  <li className="flex items-start">
                    <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      National Center for Biotechnology Information
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Organizaciones científicas</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://isappscience.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      International Scientific Association for Probiotics and Prebiotics
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gastro.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      American Gastroenterological Association
                    </a>
                  </li>
                  <li>
                    <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      Organización Mundial de la Salud
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