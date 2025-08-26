import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import AdBanner from '../../../components/AdBanner';

export const metadata: Metadata = {
  title: 'Enciclopedia de alimentos fermentados | Artículos sobre Probióticos',
  description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación casera y comercial.',
  keywords: 'alimentos fermentados, probióticos, fermentación, kombucha, kéfir, yogur, chucrut, kimchi, miso, tempeh',
  openGraph: {
    title: 'Enciclopedia de alimentos fermentados | Guía completa',
    description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación.',
    images: ['/images/og-alimentos-fermentados.jpg'],
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
            src="/images/alimentos-fermentados.png"
            alt="Variedad de alimentos fermentados"
            fill
            priority
            className="object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div className="absolute bottom-0 w-full p-8 md:p-12 text-white">
            <div className="container mx-auto">
              <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-md mb-4">
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
            <div className="hidden md:block mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Contenido del artículo</h2>
              <nav aria-label="Tabla de contenidos">
                <ol className="list-decimal list-inside space-y-1 pl-4">
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#historia">Historia y ciencia de la fermentación</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#beneficios">Beneficios de los alimentos fermentados</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#lacteos">Lácteos fermentados: yogur, kéfir y más</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#vegetales">Vegetales fermentados: chucrut, kimchi y encurtidos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#bebidas">Bebidas fermentadas: kombucha, tepache y kvass</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#soja">Fermentados de soja: miso, tempeh y natto</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#preparacion">Guía de preparación casera</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#seguridad">Seguridad alimentaria en la fermentación</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#conclusion">Conclusiones</a>
                  </li>
                </ol>
              </nav>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-gray-600">
                Los alimentos fermentados han sido parte vital de la alimentación humana durante milenios, 
                presentes en todas las culturas del mundo. Estas antiguas técnicas de conservación que transforman 
                alimentos a través de la acción microbiana no solo mejoran su duración, sino que también potencian 
                su perfil nutricional y aportan beneficios significativos para la salud.
              </p>
              <p>
                En este artículo exploraremos el fascinante mundo de los alimentos fermentados, desde su rica 
                historia cultural hasta la ciencia detrás de sus beneficios para la salud. Descubriremos la 
                diversidad de estos productos a través de diferentes culturas, y aprenderemos técnicas básicas 
                para elaborar nuestros propios fermentados en casa.
              </p>
            </div>

            {/* Section 1: History */}
            <section id="historia" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Historia y ciencia de la fermentación</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  La fermentación es uno de los métodos de conservación de alimentos más antiguos de la humanidad, 
                  datando desde al menos 10,000 años atrás. Antes de la refrigeración y otras técnicas modernas de 
                  preservación, nuestros antepasados descubrieron que ciertos alimentos, al ser almacenados en 
                  condiciones específicas, desarrollaban cambios que no solo los preservaban por más tiempo sino que 
                  también mejoraban su sabor y propiedades.
                </p>
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  "La fermentación es el lento proceso alquímico que transforma y preserva la comida mediante la 
                  acción de microorganismos beneficiosos, convirtiéndose en un puente entre nuestro pasado cultural 
                  y nuestra comprensión científica moderna."
                </blockquote>
                <h3 className="text-xl font-bold mb-3">La ciencia detrás del proceso</h3>
                <p>
                  Desde un punto de vista científico, la fermentación es un proceso metabólico en el que los 
                  microorganismos (bacterias, levaduras o mohos) transforman los compuestos orgánicos, principalmente 
                  carbohidratos, en alcoholes, ácidos o gases en ausencia de oxígeno (anaeróbica) o con limitada 
                  presencia del mismo (microaerofílica).
                </p>
                <p>
                  Los principales tipos de fermentación alimentaria incluyen:
                </p>
                <ul>
                  <li><strong>Fermentación láctica:</strong> Bacterias como Lactobacillus convierten azúcares en ácido láctico (yogur, chucrut)</li>
                  <li><strong>Fermentación alcohólica:</strong> Levaduras transforman azúcares en alcohol etílico y CO₂ (vino, cerveza)</li>
                  <li><strong>Fermentación acética:</strong> Bacterias del género Acetobacter convierten alcohol en ácido acético (vinagre)</li>
                  <li><strong>Fermentación con mohos:</strong> Especies específicas de hongos modifican sustratos proteicos (queso azul, tempeh)</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">Descubrimientos históricos clave</h3>
                  <ul className="space-y-2">
                    <li><strong>7000 a.C.:</strong> Evidencia de bebidas fermentadas en China</li>
                    <li><strong>6000 a.C.:</strong> Producción de vino en Georgia (región del Cáucaso)</li>
                    <li><strong>3500 a.C.:</strong> Elaboración de cerveza en Mesopotamia</li>
                    <li><strong>1500 a.C.:</strong> Producción de pan fermentado en Egipto</li>
                    <li><strong>Siglo XIX:</strong> Louis Pasteur descubre el papel de los microorganismos en la fermentación</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Benefits */}
            <section id="beneficios" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Beneficios de los alimentos fermentados</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Los alimentos fermentados ofrecen una gama extraordinaria de beneficios que van más allá de la 
                  simple conservación. La ciencia moderna ha confirmado lo que culturas ancestrales intuían: estos 
                  alimentos poseen propiedades únicas para la salud.
                </p>
                <div className="my-8">
                  {/* <AdBanner position="content" /> */}
                </div>
                <h3 className="text-xl font-bold mb-3">Beneficios nutricionales</h3>
                <p>
                  La fermentación no solo preserva los nutrientes originales de los alimentos, sino que también:
                </p>
                <ul>
                  <li><strong>Aumenta la biodisponibilidad:</strong> Mejora la absorción de minerales como hierro, zinc y calcio</li>
                  <li><strong>Sintetiza nuevos nutrientes:</strong> Algunas fermentaciones producen vitaminas del grupo B y K2</li>
                  <li><strong>Reduce antinutrientes:</strong> Disminuye fitatos, oxalatos y lectinas que interfieren con la absorción</li>
                  <li><strong>Predigiere proteínas y carbohidratos:</strong> Facilita su asimilación y reduce intolerancias</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Beneficios para la microbiota intestinal</h3>
                <p>
                  Quizás el beneficio más estudiado actualmente es su impacto en la salud intestinal:
                </p>
                <ul>
                  <li><strong>Aporte de probióticos vivos:</strong> Muchos fermentados contienen microorganismos beneficiosos</li>
                  <li><strong>Función prebiótica:</strong> Componentes creados durante la fermentación sirven como alimento para nuestra microbiota</li>
                  <li><strong>Mejora de la diversidad microbiana:</strong> Fomenta un ecosistema intestinal más resistente y equilibrado</li>
                  <li><strong>Modulación inmunológica:</strong> Regula respuestas inflamatorias e inmunitarias a través del eje intestino-inmunidad</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Evidencia científica actual</h3>
                <p>
                  La investigación moderna ha encontrado asociaciones positivas entre el consumo regular de alimentos fermentados y:
                </p>
                <ul>
                  <li>Mejora de la digestión y reducción de síntomas de síndrome de intestino irritable</li>
                  <li>Fortalecimiento del sistema inmunológico</li>
                  <li>Reducción de marcadores inflamatorios</li>
                  <li>Mejor control glucémico y sensibilidad a la insulina</li>
                  <li>Posible impacto positivo en la salud mental a través del eje intestino-cerebro</li>
                  <li>Mayor facilidad para mantener un peso saludable</li>
                </ul>
              </div>
            </section>

            {/* We'll continue with more sections in future edits */}
            <div className="text-center text-gray-500 italic mt-12">
              [Este artículo continúa con secciones sobre lácteos fermentados, vegetales fermentados, bebidas fermentadas,
              fermentados de soja, guías de preparación casera, seguridad alimentaria y conclusiones.]
            </div>

            {/* References */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Referencias científicas</h2>
              <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Marco, M. L., Heeney, D., Binda, S., Cifelli, C. J., Cotter, P. D., Foligné, B., ... & Hutkins, R. (2017). Health benefits of fermented foods: microbiota and beyond. <em>Current Opinion in Biotechnology</em>, 44, 94-102.</li>
                  <li>Tamang, J. P., Shin, D. H., Jung, S. J., & Chae, S. W. (2016). Functional properties of microorganisms in fermented foods. <em>Frontiers in Microbiology</em>, 7, 578.</li>
                  <li>Kim, E., Kim, D. B., & Park, J. Y. (2016). Changes of mouse gut microbiota diversity and composition by modulating dietary protein and carbohydrate contents: a pilot study. <em>Preventive Nutrition and Food Science</em>, 21(1), 57-61.</li>
                  <li>Chilton, S. N., Burton, J. P., & Reid, G. (2015). Inclusion of fermented foods in food guides around the world. <em>Nutrients</em>, 7(1), 390-404.</li>
                  <li>Katz, S. E. (2012). <em>The Art of Fermentation: An In-Depth Exploration of Essential Concepts and Processes from Around the World</em>. Chelsea Green Publishing.</li>
                </ol>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">¿Sabías que...?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El kimchi coreano contiene más de 100 especies distintas de microorganismos.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Un solo vaso de kéfir puede contener hasta 50 especies diferentes de bacterias y levaduras beneficiosas.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    La Organización Mundial de la Salud recomienda incluir alimentos fermentados en la dieta habitual.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Culturas con alta ingesta de fermentados suelen tener menor incidencia de trastornos digestivos.
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
                <div className="space-y-4">
                  <Link href="/recursos/articulos/salud-humana" className="block group">
                    <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">Probióticos en la salud humana</p>
                    <p className="text-sm text-gray-500">Microbiota y bienestar</p>
                  </Link>
                  <Link href="/recursos/articulos/nutricion-animal" className="block group">
                    <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">Nutrición animal con probióticos</p>
                    <p className="text-sm text-gray-500">Aplicaciones en ganadería</p>
                  </Link>
                  <Link href="/recursos/articulos/agricultura-sostenible" className="block group">
                    <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">Agricultura sostenible</p>
                    <p className="text-sm text-gray-500">Probióticos en cultivos</p>
                  </Link>
                </div>
              </div>
              
              <div className="bg-green-600 text-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Recetario gratuito</h3>
                <p className="text-sm mb-4">Descarga nuestro recetario con instrucciones paso a paso para preparar 10 fermentados diferentes en casa.</p>
                <Link href="/recursos/guias/recetario-fermentados" className="block text-center bg-white text-green-600 font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                  Descargar recetario
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