import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';

export default function Beneficios() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Beneficios de los Probióticos</h1>
          <p className="text-xl max-w-3xl">
            Descubre los múltiples beneficios que los probióticos ofrecen para tu salud, respaldados por evidencia científica.
          </p>
        </div>
      </header>
      
      {/* Ad Banner Top */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Salud Digestiva</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Mejora del equilibrio de la microbiota intestinal</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos ayudan a restaurar y mantener un equilibrio saludable de bacterias en el intestino, especialmente después de alteraciones como el uso de antibióticos, que pueden eliminar tanto bacterias dañinas como beneficiosas.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un metaanálisis publicado en el <em>Journal of Clinical Gastroenterology</em> (2015) demostró que los probióticos son efectivos para restaurar la microbiota intestinal después del uso de antibióticos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Prevención y reducción de la diarrea</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos han demostrado ser eficaces para prevenir y reducir la duración de varios tipos de diarrea, incluyendo la diarrea asociada a antibióticos, la diarrea infecciosa y la diarrea del viajero.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Una revisión Cochrane (2019) analizó 82 estudios con 11,811 participantes y encontró que los probióticos reducen el riesgo de diarrea asociada a antibióticos en aproximadamente un 60%.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Alivio del síndrome del intestino irritable (SII)</h3>
                  <p className="text-gray-700 mb-3">
                    Algunas cepas probióticas pueden ayudar a reducir los síntomas del SII, como dolor abdominal, distensión, gases, diarrea y estreñimiento.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un metaanálisis en el <em>American Journal of Gastroenterology</em> (2018) encontró que los probióticos son efectivos para mejorar los síntomas generales del SII y el dolor abdominal.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Sistema Inmunológico</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Fortalecimiento de las defensas</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos pueden estimular la producción de anticuerpos naturales y fortalecer las células inmunitarias como las células NK (Natural Killer), los linfocitos T y las células presentadoras de antígenos.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un estudio publicado en <em>Nutrients</em> (2017) mostró que ciertos probióticos pueden aumentar la producción de inmunoglobulina A (IgA) y células T reguladoras, importantes para la respuesta inmune.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Reducción del riesgo de infecciones respiratorias</h3>
                  <p className="text-gray-700 mb-3">
                    El consumo regular de probióticos se ha asociado con un menor riesgo de infecciones del tracto respiratorio superior, como resfriados y gripe.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un metaanálisis en el <em>British Journal of Nutrition</em> (2014) que incluyó 20 ensayos clínicos encontró que los probióticos redujeron la incidencia de infecciones respiratorias agudas en un 47%.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Salud Mental</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Eje intestino-cerebro</h3>
                  <p className="text-gray-700 mb-3">
                    Existe una comunicación bidireccional entre el intestino y el cerebro, conocida como el eje intestino-cerebro. Los probióticos pueden influir en esta comunicación y afectar positivamente la salud mental.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Investigaciones publicadas en <em>Gastroenterology</em> (2017) han demostrado que la microbiota intestinal influye en el comportamiento y las funciones cerebrales a través de vías neurales, inmunes y endocrinas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Reducción de síntomas de ansiedad y depresión</h3>
                  <p className="text-gray-700 mb-3">
                    Algunos estudios sugieren que ciertas cepas de probióticos pueden ayudar a reducir los síntomas de ansiedad y depresión, posiblemente a través de la modulación de neurotransmisores como la serotonina.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Una revisión sistemática en <em>Annals of General Psychiatry</em> (2017) concluyó que los probióticos pueden tener efectos antidepresivos y ansiolíticos en humanos.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Otros Beneficios</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Salud cardiovascular</h3>
                  <p className="text-gray-700 mb-3">
                    Ciertas cepas probióticas pueden ayudar a reducir el colesterol LDL ("malo") y la presión arterial, factores de riesgo para enfermedades cardiovasculares.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un metaanálisis en el <em>Journal of Clinical Lipidology</em> (2017) encontró que los probióticos pueden reducir el colesterol total y el colesterol LDL.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Salud de la piel</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos pueden ayudar a mejorar ciertos trastornos de la piel como el eczema, el acné y la dermatitis atópica, posiblemente a través de efectos antiinflamatorios e inmunomoduladores.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Estudios publicados en el <em>Journal of Dermatological Science</em> (2018) han mostrado que los probióticos pueden reducir la gravedad del eczema en niños y adultos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Control de peso</h3>
                  <p className="text-gray-700 mb-3">
                    Algunas investigaciones sugieren que ciertas cepas probióticas podrían contribuir al control de peso, posiblemente a través de cambios en la microbiota intestinal que afectan la absorción de energía y la regulación del apetito.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Evidencia científica:</strong> Un estudio en el <em>British Journal of Nutrition</em> (2014) encontró que ciertas cepas de Lactobacillus pueden ayudar a reducir el peso corporal y la masa grasa.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Puntos clave</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Los beneficios de los probióticos son específicos de cada cepa.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    No todos los probióticos ofrecen los mismos beneficios para la salud.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Los efectos pueden variar según la persona y su microbiota intestinal única.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    La dosis y duración del tratamiento son importantes para obtener resultados.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Consulta con un profesional de la salud antes de iniciar suplementos, especialmente si tienes condiciones médicas.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Artículos relacionados</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/que-son" className="text-green-600 hover:text-green-700 transition-colors">
                      ¿Qué son los probióticos?
                    </a>
                  </li>
                  <li>
                    <a href="/como-elegir" className="text-green-600 hover:text-green-700 transition-colors">
                      Cómo elegir el probiótico adecuado
                    </a>
                  </li>
                  <li>
                    <a href="/referencias" className="text-green-600 hover:text-green-700 transition-colors">
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