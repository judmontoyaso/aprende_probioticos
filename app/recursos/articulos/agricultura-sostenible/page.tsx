import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
// import AdBanner from '../../../components/AdBanner';

export const metadata: Metadata = {
  title: 'Agricultura sostenible: probióticos para el cultivo | Artículos',
  description: 'Análisis de cómo los probióticos pueden revolucionar los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos, incrementando rendimiento y sostenibilidad.',
  keywords: 'probióticos, agricultura sostenible, biofertilizantes, microorganismos, cultivos, suelo, agricultura ecológica',
  openGraph: {
    title: 'Agricultura sostenible: probióticos para el cultivo',
    description: 'Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos.',
    images: ['/images/og-agricultura-sostenible.jpg'],
    type: 'article',
    publishedTime: '2023-07-05T00:00:00Z',
    authors: ['Probióticos Para Todos'],
  },
};

export default function AgriculturaArticulo() {
  return (
    <div className="article-container">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] w-full relative">
          <Image
            src="/images/agricultura-probioticos.png"
            alt="Campo agrícola tratado con probióticos"
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
                Agricultura sostenible: probióticos para el cultivo
              </h1>
              <div className="flex items-center text-sm md:text-base mb-4">
                <span className="mr-4">5 de julio, 2023</span>
                <span className="mr-4">|</span>
                <span>Por: Equipo Científico de Probióticos Para Todos</span>
              </div>
              <p className="text-lg md:text-xl max-w-3xl">
                Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo 
                basados en microorganismos, incrementando rendimiento y sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AdBanner Top */}
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
                    <a href="#introduccion">Introducción a los probióticos en agricultura</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#microbioma-suelo">El microbioma del suelo: la base de la agricultura sostenible</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#aplicaciones">Aplicaciones principales de los probióticos en cultivos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#biofertilizantes">Biofertilizantes basados en microorganismos</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#biocontrol">Biocontrol de plagas y enfermedades</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#implementacion">Implementación práctica en diferentes sistemas de cultivo</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#estudios">Estudios de caso y resultados en campo</a>
                  </li>
                  <li className="text-green-600 hover:text-green-800 transition-colors">
                    <a href="#futuro">El futuro de la agricultura probiótica</a>
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
                La agricultura moderna enfrenta desafíos sin precedentes: degradación del suelo, cambio climático, 
                resistencia a pesticidas y la creciente demanda de alimentos. Los probióticos agrícolas representan 
                una solución innovadora y sostenible para estos retos, aprovechando el poder de los microorganismos 
                beneficiosos para mejorar la salud del suelo y el rendimiento de los cultivos.
              </p>
              <p>
                Este artículo explora en profundidad cómo los probióticos están transformando la agricultura hacia 
                prácticas más sostenibles y regenerativas, reduciendo la dependencia de insumos químicos y mejorando 
                la resiliencia de los ecosistemas agrícolas.
              </p>
            </div>

            {/* Section 1: Introduction */}
            <section id="introduccion" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Introducción a los probióticos en agricultura</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  En el contexto agrícola, los probióticos se refieren a microorganismos beneficiosos que, cuando se 
                  aplican al suelo, semillas, o plantas, mejoran la disponibilidad de nutrientes, promueven el crecimiento 
                  vegetal, y protegen contra patógenos y estrés ambiental.
                </p>
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  &ldquo;Los probióticos agrícolas son microorganismos vivos que, cuando se aplican a suelos, semillas o 
                  superficies de plantas, colonizan la rizosfera o el interior de la planta y promueven el crecimiento 
                  vegetal mediante el aumento del suministro o disponibilidad de nutrientes primarios para la planta 
                  huésped.&rdquo;
                </blockquote>
                <p>
                  Los principales grupos de microorganismos utilizados como probióticos en agricultura incluyen:
                </p>
                <ul>
                  <li><strong>Bacterias promotoras del crecimiento vegetal:</strong> Pseudomonas, Bacillus, Azospirillum, Azotobacter</li>
                  <li><strong>Hongos micorrízicos:</strong> Glomus, Rhizophagus, Gigaspora</li>
                  <li><strong>Trichoderma:</strong> Hongos beneficiosos que protegen contra patógenos del suelo</li>
                  <li><strong>Bacterias fijadoras de nitrógeno:</strong> Rhizobium, Bradyrhizobium</li>
                  <li><strong>Levaduras benéficas:</strong> Saccharomyces, Candida</li>
                </ul>
                <p>
                  A diferencia de los fertilizantes químicos convencionales, estos microorganismos trabajan con los 
                  sistemas naturales, mejorando las funciones biológicas del suelo y creando un entorno más saludable 
                  para el crecimiento de las plantas.
                </p>
              </div>
            </section>

            {/* Section 2: Soil Microbiome */}
            <section id="microbioma-suelo" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">El microbioma del suelo: la base de la agricultura sostenible</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  El suelo no es simplemente un medio inerte; es un ecosistema dinámico rebosante de vida. Un puñado 
                  de suelo saludable contiene más microorganismos que personas en la Tierra. Este microbioma del suelo 
                  es fundamental para:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">Funciones esenciales del microbioma del suelo</h3>
                  <ul className="space-y-2">
                    <li>Ciclo de nutrientes y descomposición de materia orgánica</li>
                    <li>Estructura y agregación del suelo</li>
                    <li>Secuestro de carbono y mitigación del cambio climático</li>
                    <li>Supresión natural de patógenos vegetales</li>
                    <li>Desintoxicación de contaminantes</li>
                  </ul>
                </div>
                <p>
                  La agricultura industrial intensiva ha perturbado severamente estos ecosistemas microbianos del suelo mediante:
                </p>
                <ul>
                  <li><strong>Labranza intensiva:</strong> Perturba las redes de hongos y la estructura del suelo</li>
                  <li><strong>Monocultivos:</strong> Reducen la diversidad microbiana</li>
                  <li><strong>Pesticidas y fungicidas:</strong> Matan tanto organismos beneficiosos como dañinos</li>
                  <li><strong>Fertilizantes sintéticos:</strong> Alteran el pH y las comunidades microbianas</li>
                </ul>
                <p>
                  Los probióticos agrícolas buscan restaurar y enriquecer estas comunidades microbianas, recreando 
                  suelos saludables y funcionales que son la base de sistemas agrícolas verdaderamente sostenibles.
                </p>
              </div>
            </section>

            {/* Section 3: Applications */}
            <section id="aplicaciones" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Aplicaciones principales de los probióticos en cultivos</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Los probióticos agrícolas ofrecen una amplia gama de beneficios y aplicaciones en diferentes sistemas de cultivo:
                </p>
                <ul>
                  <li><strong>Mejora de la nutrición vegetal:</strong> Aumentan la disponibilidad y absorción de nutrientes</li>
                  <li><strong>Promoción del crecimiento:</strong> Producen fitohormonas que estimulan el desarrollo vegetal</li>
                  <li><strong>Protección contra patógenos:</strong> Compiten con organismos dañinos y producen compuestos antimicrobianos</li>
                  <li><strong>Tolerancia al estrés:</strong> Mejoran la resistencia de las plantas a sequía, salinidad y temperaturas extremas</li>
                  <li><strong>Regeneración de suelos degradados:</strong> Restauran la actividad biológica y la estructura del suelo</li>
                  <li><strong>Reducción de insumos químicos:</strong> Disminuyen la necesidad de fertilizantes y pesticidas sintéticos</li>
                </ul>

                <div className="my-8">
                  {/* <AdBanner position="content" /> */}
                </div>

                <p>
                  Las aplicaciones se pueden clasificar en varias categorías según el tipo de microorganismo y su función principal:
                </p>
                <table className="min-w-full border text-sm">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border p-3 text-left">Tipo de producto</th>
                      <th className="border p-3 text-left">Microorganismos principales</th>
                      <th className="border p-3 text-left">Beneficios clave</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Inoculantes para fijación de nitrógeno</td>
                      <td className="border p-3">Rhizobium, Azotobacter, Azospirillum</td>
                      <td className="border p-3">Fijan nitrógeno atmosférico, reducen necesidad de fertilizantes nitrogenados</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border p-3">Solubilizadores de fósforo</td>
                      <td className="border p-3">Bacillus, Pseudomonas, hongos micorrízicos</td>
                      <td className="border p-3">Liberan fósforo insoluble del suelo, mejoran absorción de P</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Antagonistas de patógenos</td>
                      <td className="border p-3">Trichoderma, Bacillus subtilis, Pseudomonas fluorescens</td>
                      <td className="border p-3">Control biológico de enfermedades fúngicas y bacterianas</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border p-3">Descomponedores de materia orgánica</td>
                      <td className="border p-3">Bacterias celulolíticas, actinomicetos</td>
                      <td className="border p-3">Aceleran compostaje, mejoran ciclo de nutrientes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* We'll continue with more sections in future edits */}
            <div className="text-center text-gray-500 italic mt-12">
              [Este artículo continúa con secciones sobre biofertilizantes, biocontrol, implementación práctica,
              estudios de caso, proyecciones futuras y conclusiones.]
            </div>

            {/* References */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Referencias científicas</h2>
              <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Vessey, J. K. (2003). Plant growth promoting rhizobacteria as biofertilizers. <em>Plant and Soil</em>, 255(2), 571-586.</li>
                  <li>Rodrıguez, H., & Fraga, R. (1999). Phosphate solubilizing bacteria and their role in plant growth promotion. <em>Biotechnology Advances</em>, 17(4-5), 319-339.</li>
                  <li>Vacheron, J., Desbrosses, G., Bouffaud, M. L., Touraine, B., Moënne-Loccoz, Y., Muller, D., ... & Prigent-Combaret, C. (2013). Plant growth-promoting rhizobacteria and root system functioning. <em>Frontiers in Plant Science</em>, 4, 356.</li>
                  <li>Berg, G. (2009). Plant-microbe interactions promoting plant growth and health: perspectives for controlled use of microorganisms in agriculture. <em>Applied Microbiology and Biotechnology</em>, 84(1), 11-18.</li>
                  <li>Bender, S. F., Wagg, C., & van der Heijden, M. G. (2016). An underground revolution: biodiversity and soil ecological engineering for agricultural sustainability. <em>Trends in Ecology & Evolution</em>, 31(6), 440-452.</li>
                </ol>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Datos interesantes</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Un gramo de suelo saludable contiene más de mil millones de bacterias.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Las micorrizas pueden extender el alcance efectivo de las raíces hasta 700%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Los probióticos pueden reducir la necesidad de fertilizantes químicos hasta en un 50%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    El mercado global de biofertilizantes crece a un ritmo anual del 14%.
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
                <div className="space-y-4">
                  <Link href="/recursos/articulos/nutricion-animal" className="block group">
                    <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">Nutrición animal con probióticos</p>
                    <p className="text-sm text-gray-500">Aplicaciones en ganadería y mascotas</p>
                  </Link>
                  <Link href="/recursos/articulos/alimentos-fermentados" className="block group">
                    <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">Enciclopedia de alimentos fermentados</p>
                    <p className="text-sm text-gray-500">Probióticos en la fermentación</p>
                  </Link>
                  <Link href="/recursos/articulos/salud-humana" className="block group">
                    <p className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">Probióticos en la salud humana</p>
                    <p className="text-sm text-gray-500">Microbiota y bienestar</p>
                  </Link>
                </div>
              </div>
              
              <div className="bg-green-600 text-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">¿Quieres aprender más?</h3>
                <p className="text-sm mb-4">Descarga nuestra guía completa sobre agricultura probiótica con consejos prácticos para implementación.</p>
                <Link href="/recursos/guias/agricultura-probiotica" className="block text-center bg-white text-green-600 font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                  Descargar guía gratuita
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