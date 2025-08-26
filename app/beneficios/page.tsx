import Link from 'next/link';
import Image from 'next/image';
// import AdBanner from '../components/AdBanner';
// import OptimizedImage from '../components/OptimizedImage';
// import SEOSchema from '../components/SEOSchema';

export default function Beneficios() {
  // Create FAQ items for both schema
  const faqItems = [
    {
      question: "¿Cuáles son los principales beneficios digestivos de los probióticos?",
      answer: "Los probióticos ayudan a mejorar el equilibrio de la microbiota intestinal, reducen los síntomas del síndrome del intestino irritable y previenen distintos tipos de diarrea."
    },
    {
      question: "¿Cómo afectan los probióticos al sistema inmunológico?",
      answer: "Los probióticos fortalecen las defensas naturales, ayudan a prevenir infecciones respiratorias y urinarias, y pueden modular las respuestas alérgicas."
    }
  ];

  // Datos estructurados para el esquema de artículo
  const articleData = {
    title: "Beneficios de los Probióticos: Evidencia Científica Actualizada",
    description: "Descubre los múltiples beneficios que los probióticos ofrecen para tu salud, respaldados por evidencia científica reciente. Incluye mejoras para la salud digestiva, inmunológica, mental y metabólica.",
    publishDate: "2024-06-01T08:00:00+00:00",
    author: "Probióticos Para Todos",
    image: "https://www.probioticosparatodos.com/images/beneficios-digestivos.png",
    url: "https://www.probioticosparatodos.com/beneficios"
  };

  return (
    <>
      {/* Schema.org estructurado (temporalmente desactivado para depurar) */}
      {/* <SEOSchema 
        type="both" 
        data={{ 
          article: articleData, 
          faq: faqItems 
        }} 
      /> */}
      
      {/* Header */}
      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Beneficios de los Probióticos</h1>
          <p className="text-xl max-w-3xl">
            Descubre los múltiples beneficios que los probióticos ofrecen para tu salud, respaldados por evidencia científica.
          </p>
        </div>
      </header>
      
      {/* Ad Banner Top (desactivado temporalmente) */}
      {/* <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div> */}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Salud Digestiva</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/beneficios-digestivos.png" 
                    alt="Beneficios digestivos de los probióticos"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-lg shadow-md object-cover md:object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Mejora del equilibrio de la microbiota intestinal</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos ayudan a restaurar y mantener un equilibrio saludable de bacterias intestinales, especialmente después de alteraciones como el uso de antibióticos, enfermedades gastrointestinales o dietas pobres en fibra.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Reducción de los síntomas del síndrome del intestino irritable (SII)</h3>
                  <p className="text-gray-700 mb-3">
                    Múltiples estudios han demostrado que ciertas cepas de probióticos pueden aliviar síntomas del SII como dolor abdominal, hinchazón, estreñimiento y diarrea. Las cepas de <em>Bifidobacterium infantis, Lactobacillus plantarum</em> y <em>Saccharomyces boulardii</em> han mostrado ser especialmente efectivas.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Un metaanálisis de 2019 publicado en el <em>Journal of Gastroenterology</em> encontró que los probióticos redujeron la gravedad general de los síntomas del SII en un 21% en comparación con placebo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Prevención y tratamiento de la diarrea</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos son efectivos para:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Reducir la duración de la diarrea infecciosa aguda en aproximadamente 24 horas</li>
                    <li>Disminuir el riesgo de diarrea asociada a antibióticos en un 60%</li>
                    <li>Prevenir la diarrea del viajero cuando se toman antes y durante el viaje</li>
                  </ul>
                  <p className="text-gray-700 mb-3">
                    <em>Saccharomyces boulardii</em> y varias cepas de <em>Lactobacillus</em> han demostrado ser particularmente eficaces para estos propósitos.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Sistema Inmunológico</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/sistema-inmune.png" 
                    alt="Probióticos y sistema inmunológico"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-lg shadow-md object-cover md:object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Fortalecimiento de las defensas</h3>
                  <p className="text-gray-700 mb-3">
                    Aproximadamente el 70% de nuestro sistema inmunológico se encuentra en el intestino. Los probióticos pueden fortalecer la barrera intestinal y aumentar la producción de anticuerpos naturales, mejorando la respuesta inmune frente a patógenos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Prevención de infecciones</h3>
                  <p className="text-gray-700 mb-3">
                    El consumo regular de probióticos se ha asociado con una reducción en la frecuencia y duración de:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Infecciones respiratorias comunes como resfriados y gripe</li>
                    <li>Infecciones urinarias recurrentes en mujeres</li>
                    <li>Infecciones vaginales como la candidiasis</li>
                  </ul>
                  <p className="text-gray-700 mb-3">
                    Un estudio en el <em>British Journal of Nutrition</em> (2015) mostró que los adultos que tomaban probióticos diariamente tenían un 33% menos de probabilidades de desarrollar infecciones respiratorias superiores.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Modulación de las alergias</h3>
                  <p className="text-gray-700 mb-3">
                    Evidencia creciente sugiere que los probióticos pueden ayudar a regular las respuestas inmunes exageradas asociadas con alergias, especialmente en niños. Estudios han mostrado beneficios en:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Reducción de los síntomas del eczema atópico</li>
                    <li>Disminución de la sensibilidad a alérgenos alimentarios</li>
                    <li>Alivio de los síntomas de rinitis alérgica estacional</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Eje Intestino-Cerebro</h2>
              
              <div className="mb-6">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src="/images/intestino-cerebro.png" 
                    alt="Conexión intestino-cerebro y probióticos"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="rounded-lg shadow-md object-cover md:object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Comunicación bidireccional</h3>
                  <p className="text-gray-700 mb-3">
                    Existe una comunicación bidireccional entre el intestino y el cerebro, conocida como el eje intestino-cerebro. Los probióticos pueden influir en esta comunicación y afectar positivamente la salud mental.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Mejora del estado de ánimo y reducción del estrés</h3>
                  <p className="text-gray-700 mb-3">
                    Estudios recientes han demostrado que ciertos probióticos pueden:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Reducir los niveles de cortisol (hormona del estrés)</li>
                    <li>Mejorar los síntomas de depresión leve a moderada</li>
                    <li>Ayudar a regular los niveles de neurotransmisores como la serotonina, que influyen en el estado de ánimo</li>
                  </ul>
                  <p className="text-gray-700 mb-3">
                    Un ensayo clínico publicado en <em>Gastroenterology</em> (2017) encontró que una combinación de <em>Lactobacillus acidophilus, Lactobacillus casei</em> y <em>Bifidobacterium bifidum</em> mejoró significativamente los síntomas de depresión en pacientes con depresión mayor.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Posibles beneficios para trastornos neurológicos</h3>
                  <p className="text-gray-700 mb-3">
                    Investigaciones emergentes sugieren que los probióticos podrían tener un papel en:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Reducir los síntomas de ansiedad</li>
                    <li>Mejorar la calidad del sueño</li>
                    <li>Apoyar la función cognitiva y memoria</li>
                  </ul>
                  <p className="text-gray-700 mb-3">
                    Si bien estos resultados son prometedores, se necesita más investigación para establecer protocolos específicos y recomendaciones definitivas.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Cepas Específicas y Seguridad</h2>
              
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16">
                  <Image 
                    src="/icons/bacterias_probioticos.png" 
                    alt="Ícono de bacterias probióticas"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Cepas probióticas importantes</h3>
                  <p className="text-gray-700 mb-3">
                    Diferentes cepas tienen diferentes efectos, por lo que es importante elegir la adecuada según tu objetivo:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li><strong>Lactobacillus rhamnosus GG:</strong> Prevención y tratamiento de diarrea, refuerzo inmunitario</li>
                    <li><strong>Saccharomyces boulardii:</strong> Diarrea asociada a antibióticos, diarrea infecciosa</li>
                    <li><strong>Bifidobacterium lactis BB-12:</strong> Mejora de la inmunidad, salud digestiva general</li>
                    <li><strong>Lactobacillus acidophilus NCFM:</strong> Reducción de síntomas de SII, intolerancia a la lactosa</li>
                    <li><strong>Bifidobacterium longum:</strong> Beneficios para la salud mental, reducción de ansiedad</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Consideraciones de seguridad</h3>
                  <p className="text-gray-700 mb-3">
                    Los probióticos son generalmente seguros para la mayoría de las personas, pero existen algunas consideraciones importantes:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                    <li>Las personas con sistemas inmunes comprometidos deben consultar a un médico antes de tomar probióticos</li>
                    <li>Pueden ocurrir efectos secundarios temporales como gas o hinchazón al comenzar un régimen probiótico</li>
                    <li>La calidad y viabilidad de los probióticos varía según el fabricante, por lo que es importante elegir marcas confiables</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Beneficios clave</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <p className="text-gray-700">Mejora la salud digestiva y alivia síntomas del SII</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <p className="text-gray-700">Fortalece el sistema inmunológico y previene infecciones</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <p className="text-gray-700">Puede mejorar el estado de ánimo y reducir la ansiedad</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <p className="text-gray-700">Ayuda a prevenir y tratar diferentes tipos de diarrea</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <p className="text-gray-700">Contribuye a la salud cardiovascular y metabólica</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contenidos relacionados</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/que-son" className="text-green-600 hover:text-green-700 transition-colors">
                      ¿Qué son los probióticos?
                    </Link>
                  </li>
                  <li>
                    <Link href="/como-elegir" className="text-green-600 hover:text-green-700 transition-colors">
                      Cómo elegir el probiótico adecuado
                    </Link>
                  </li>
                  <li>
                    <Link href="/alimentos-fermentados" className="text-green-600 hover:text-green-700 transition-colors">
                      Alimentos fermentados ricos en probióticos
                    </Link>
                  </li>
                  <li>
                    <Link href="/recetas" className="text-green-600 hover:text-green-700 transition-colors">
                      Recetas caseras con probióticos
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Consulta a un profesional</h3>
                <p className="text-gray-700 mb-3">
                  Recuerda que aunque los probióticos son generalmente seguros, es recomendable consultar con un profesional de la salud antes de iniciar cualquier suplemento, especialmente si tienes condiciones médicas preexistentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Ad (desactivado temporalmente) */}
      {/* <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div> */}
    </>
  );
}
