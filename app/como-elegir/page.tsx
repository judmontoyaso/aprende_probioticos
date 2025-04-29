import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';

export default function ComoElegir() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Cómo Elegir el Probiótico Adecuado</h1>
          <p className="text-xl max-w-3xl">
            Guía basada en evidencia científica para seleccionar el probiótico más adecuado para tus necesidades específicas.
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
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Factores clave para elegir probióticos</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">1. Identificar cepas específicas</h3>
                  <p className="text-gray-700 mb-4">
                    Los beneficios de los probióticos son específicos de cada cepa. Busca suplementos que listen las cepas completas (género, especie y designación de cepa), por ejemplo: <em>Lactobacillus rhamnosus GG</em> o <em>Bifidobacterium longum BB536</em>.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-green-700">Consejo profesional:</strong> No todos los productos que dicen contener "probióticos" son iguales. Un suplemento etiquetado simplemente como "contiene Lactobacillus" no proporciona información suficiente sobre qué efectos específicos puede tener.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">2. Verificar la potencia y viabilidad</h3>
                  <p className="text-gray-700 mb-4">
                    La potencia se refiere al número de unidades formadoras de colonias (UFC) por dosis. La mayoría de los estudios han utilizado dosis entre 1 y 10 mil millones de UFC por día. Asegúrate de que el producto garantice esta potencia hasta la fecha de caducidad, no solo en el momento de fabricación.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Factores que afectan la viabilidad:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Temperatura de almacenamiento</li>
                      <li>Humedad</li>
                      <li>Exposición al oxígeno</li>
                      <li>Tecnología de encapsulación</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">3. Seleccionar basándose en evidencia científica</h3>
                  <p className="text-gray-700 mb-4">
                    Busca probióticos que hayan sido estudiados clínicamente para la condición específica que deseas tratar. Diferentes cepas son efectivas para diferentes afecciones.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">Condición</th>
                          <th className="px-4 py-2 text-left">Cepas probióticas con mayor evidencia</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-3 font-medium">Diarrea asociada a antibióticos</td>
                          <td className="px-4 py-3"><em>Lactobacillus rhamnosus GG, Saccharomyces boulardii</em></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Síndrome del intestino irritable</td>
                          <td className="px-4 py-3"><em>Bifidobacterium infantis 35624, Lactobacillus plantarum 299v</em></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Enfermedad inflamatoria intestinal</td>
                          <td className="px-4 py-3"><em>VSL#3 (mezcla de 8 cepas), Escherichia coli Nissle 1917</em></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Infecciones respiratorias</td>
                          <td className="px-4 py-3"><em>Lactobacillus rhamnosus GG, Lactobacillus casei DN-114</em></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Salud vaginal</td>
                          <td className="px-4 py-3"><em>Lactobacillus rhamnosus GR-1, Lactobacillus reuteri RC-14</em></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Tipos de productos probióticos</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Suplementos dietéticos</h3>
                  <p className="text-gray-700 mb-4">
                    Disponibles en cápsulas, tabletas, polvos y líquidos. Estos productos suelen contener dosis más altas y cepas específicas para diferentes necesidades de salud.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">¿Qué buscar en un suplemento probiótico?</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Cepas claramente identificadas</li>
                      <li>Número garantizado de UFC hasta la fecha de caducidad</li>
                      <li>Tecnología de protección (enteric coating, microencapsulación)</li>
                      <li>Almacenamiento adecuado (algunos requieren refrigeración)</li>
                      <li>Sellos de calidad o certificaciones de terceros</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Alimentos fermentados</h3>
                  <p className="text-gray-700 mb-4">
                    Alimentos como yogur, kéfir, chucrut, kimchi y kombucha contienen naturalmente probióticos. Aunque las dosis pueden ser menores que en los suplementos, estos alimentos ofrecen beneficios nutricionales adicionales.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Ventajas</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Fuente natural de probióticos</li>
                        <li>Aportan otros nutrientes beneficiosos</li>
                        <li>Fácil de incorporar en la dieta diaria</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Consideraciones</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Contenido variable de probióticos</li>
                        <li>Posible contenido de azúcares añadidos</li>
                        <li>Menor especificidad para condiciones particulares</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-green-700">Consejo:</strong> Busca yogures y otros productos fermentados que especifiquen "cultivos vivos y activos" y mencionen las cepas específicas que contienen.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Consideraciones especiales</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Condiciones de salud preexistentes</h3>
                  <p className="text-gray-700 mb-3">
                    Si tienes condiciones de salud específicas, consulta con un profesional de la salud antes de comenzar un régimen probiótico, especialmente si:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Tienes un sistema inmunológico comprometido</li>
                    <li>Estás gravemente enfermo</li>
                    <li>Recientemente te has sometido a una cirugía</li>
                    <li>Tienes alergias graves a componentes que puedan estar en los probióticos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Consideraciones de edad</h3>
                  <p className="text-gray-700 mb-3">
                    Existen formulaciones específicas para diferentes etapas de la vida:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li><strong>Bebés y niños:</strong> Busca cepas estudiadas específicamente en poblaciones pediátricas y dosis apropiadas para su edad.</li>
                    <li><strong>Adultos mayores:</strong> La composición de la microbiota cambia con la edad. Algunos estudios sugieren que ciertas cepas pueden ser más beneficiosas para los adultos mayores.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Prebióticos y simbióticos</h3>
                  <p className="text-gray-700 mb-3">
                    Los prebióticos son compuestos (principalmente fibras) que sirven como alimento para las bacterias beneficiosas. Los productos simbióticos combinan probióticos y prebióticos para un efecto sinérgico.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Considerar un producto que contenga prebióticos puede mejorar la efectividad de los probióticos al proporcionar el sustrato necesario para su crecimiento.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <p className="text-gray-700">
                  <strong className="text-green-700">Recuerda:</strong> Los probióticos no son medicamentos y no están destinados a diagnosticar, tratar, curar o prevenir enfermedades. Son complementos que pueden apoyar la salud general y el bienestar.
                </p>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Checklist para elegir</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Identifica tu necesidad específica de salud
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Busca cepas con evidencia para esa condición
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Verifica que las cepas estén claramente identificadas
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Asegúrate de una dosis adecuada (UFC)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Comprueba la fecha de caducidad
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Verifica las condiciones de almacenamiento
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Consulta con un profesional de salud si es necesario
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
                    <a href="/beneficios" className="text-green-600 hover:text-green-700 transition-colors">
                      Beneficios de los probióticos
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