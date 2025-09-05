import { Metadata } from 'next';
import BlogArticleTemplate from '../../templates/BlogArticleTemplate';

export const metadata: Metadata = {
  title: 'Agricultura sostenible: probióticos para el cultivo | Blog',
  description: 'Análisis de cómo los probióticos pueden revolucionar los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos, incrementando rendimiento y sostenibilidad.',
  keywords: 'probióticos, agricultura sostenible, biofertilizantes, microorganismos, cultivos, suelo, agricultura ecológica',
  openGraph: {
    title: 'Agricultura sostenible: probióticos para el cultivo',
    description: 'Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos.',
    images: ['/images/blog-agricultura.png'],
    type: 'article',
    publishedTime: '2023-07-05T00:00:00Z',
    authors: ['Probióticos Para Todos'],
  },
};

const articleData = {
  badge: "Artículo Completo",
  title: "Agricultura sostenible: probióticos para el cultivo",
  author: "Equipo Científico de Probióticos Para Todos",
  date: "5 de julio, 2023",
  publishDate: "5 de julio, 2023",
  readTime: "20 min de lectura",
  description: "Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos, incrementando rendimiento y sostenibilidad.",
  heroImage: "/images/blog-agricultura.png",
  heroImageAlt: "Campo agrícola tratado con probióticos",
  tableOfContents: [
    { id: "introduccion", title: "Introducción a los probióticos en agricultura" },
    { id: "microbioma-suelo", title: "El microbioma del suelo: la base de la agricultura sostenible" },
    { id: "aplicaciones", title: "Aplicaciones principales de los probióticos en cultivos" },
    { id: "biofertilizantes", title: "Biofertilizantes basados en microorganismos" },
    { id: "biocontrol", title: "Biocontrol de plagas y enfermedades" },
    { id: "implementacion", title: "Implementación práctica en diferentes sistemas de cultivo" },
    { id: "estudios", title: "Estudios de caso y resultados en campo" },
    { id: "futuro", title: "El futuro de la agricultura probiótica" },
    { id: "conclusion", title: "Conclusiones" }
  ],
  sidebarFacts: [
    {
      text: "Un gramo de suelo saludable contiene más de mil millones de bacterias."
    },
    {
      text: "Las micorrizas pueden extender el alcance efectivo de las raíces hasta 700%."
    },
    {
      text: "Los probióticos pueden reducir la necesidad de fertilizantes químicos hasta en un 50%."
    },
    {
      text: "El mercado global de biofertilizantes crece a un ritmo anual del 14%."
    }
  ],
  relatedArticles: [
    {
      href: "/blog/nutricion-animal",
      image: "/images/blog-animales.png",
      title: "Nutrición animal con probióticos",
      subtitle: "Aplicaciones en ganadería y mascotas"
    },
    {
      href: "/blog/alimentos-fermentados",
      image: "/images/probiotic_foods.png",
      title: "Enciclopedia de alimentos fermentados",
      subtitle: "Probióticos en la fermentación"
    },
    {
      href: "/blog/salud-humana",
      image: "/images/beneficios-probioticos-salud.png",
      title: "Probióticos en la salud humana",
      subtitle: "Microbiota y bienestar"
    }
  ]
};

export default function AgriculturaArticulo() {
  return (
    <BlogArticleTemplate {...articleData}>
      {/* Introduction lead */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-gray-600 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
          La agricultura moderna enfrenta desafíos sin precedentes: degradación del suelo, cambio climático,
          resistencia a pesticidas y la creciente demanda de alimentos [1,5]. Los probióticos agrícolas representan
          una solución innovadora y sostenible para estos retos, aprovechando el poder de los microorganismos
          beneficiosos para mejorar la salud del suelo y el rendimiento de los cultivos [4,11].
        </p>
        <p className="text-lg leading-relaxed mt-6">
          Este artículo explora en profundidad cómo los probióticos están transformando la agricultura hacia
          prácticas más sostenibles y regenerativas, reduciendo la dependencia de insumos químicos y mejorando
          la resiliencia de los ecosistemas agrícolas [5,8].
        </p>
      </div>

      {/* Section 1: Introduction */}
      <section id="introduccion" className="mb-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 border-l-4 border-green-500 pl-6">
            Introducción a los probióticos en agricultura
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              En el contexto agrícola, los probióticos se refieren a microorganismos beneficiosos que, cuando se
              aplican al suelo, semillas, o plantas, mejoran la disponibilidad de nutrientes, promueven el crecimiento
              vegetal, y protegen contra patógenos y estrés ambiental [1,3,11].
            </p>
            
            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <p className="text-green-800 italic">
                &ldquo;Los probióticos agrícolas son microorganismos vivos que, cuando se aplican a suelos, semillas o
                superficies de plantas, colonizan la rizosfera o el interior de la planta y promueven el crecimiento
                vegetal mediante el aumento del suministro o disponibilidad de nutrientes primarios para la planta
                huésped&rdquo; [1,9].
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-6 border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Principales grupos de microorganismos probióticos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Bacterias promotoras del crecimiento:</strong> Pseudomonas, Bacillus, Azospirillum, Azotobacter
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Hongos micorrízicos:</strong> Glomus, Rhizophagus, Gigaspora
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Trichoderma:</strong> Hongos beneficiosos que protegen contra patógenos del suelo
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Bacterias fijadoras de nitrógeno:</strong> Rhizobium, Bradyrhizobium
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Levaduras benéficas:</strong> Saccharomyces, Candida
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              A diferencia de los fertilizantes químicos convencionales, estos microorganismos trabajan con los
              sistemas naturales, mejorando las funciones biológicas del suelo y creando un entorno más saludable
              para el crecimiento de las plantas [4,12].
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Soil Microbiome */}
      <section id="microbioma-suelo" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-emerald-200 pb-3">El microbioma del suelo: la base de la agricultura sostenible</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border border-emerald-200 mb-6">
            <p className="text-lg leading-relaxed text-emerald-800">
              El suelo no es simplemente un medio inerte; es un ecosistema dinámico rebosante de vida. Un puñado
              de suelo saludable contiene más microorganismos que personas en la Tierra [5,12].
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-6">
            <h3 className="text-xl font-bold text-emerald-600 mb-4">Funciones esenciales del microbioma del suelo</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ciclo de nutrientes y descomposición de materia orgánica
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Estructura y agregación del suelo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secuestro de carbono y mitigación del cambio climático
                </li>
              </ul>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Supresión natural de patógenos vegetales
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Desintoxicación de contaminantes
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6">
            <h4 className="text-lg font-semibold text-amber-800 mb-3">Factores que perturban el microbioma del suelo</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-amber-800 font-semibold mb-2">Labranza intensiva:</p>
                <p className="text-amber-700 text-sm">Perturba las redes de hongos y la estructura del suelo</p>
              </div>
              <div>
                <p className="text-amber-800 font-semibold mb-2">Monocultivos:</p>
                <p className="text-amber-700 text-sm">Reducen la diversidad microbiana</p>
              </div>
              <div>
                <p className="text-amber-800 font-semibold mb-2">Pesticidas y fungicidas:</p>
                <p className="text-amber-700 text-sm">Matan tanto organismos beneficiosos como dañinos</p>
              </div>
              <div>
                <p className="text-amber-800 font-semibold mb-2">Fertilizantes sintéticos:</p>
                <p className="text-amber-700 text-sm">Alteran el pH y las comunidades microbianas</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            Los probióticos agrícolas buscan restaurar y enriquecer estas comunidades microbianas, recreando
            suelos saludables y funcionales que son la base de sistemas agrícolas verdaderamente sostenibles [5,12,14].
          </p>
        </div>
      </section>

      {/* Section 3: Applications */}
      <section id="aplicaciones" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-green-200 pb-3">Aplicaciones principales de los probióticos en cultivos</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Los probióticos agrícolas ofrecen una amplia gama de beneficios y aplicaciones en diferentes sistemas de cultivo [1,3,8]:
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">Beneficios directos</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Mejora de la nutrición vegetal:</strong> Aumentan la disponibilidad y absorción de nutrientes [2,3]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Promoción del crecimiento:</strong> Producen fitohormonas que estimulan el desarrollo vegetal [7,11]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Protección contra patógenos:</strong> Compiten con organismos dañinos [6,14]</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Beneficios sistémicos</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Tolerancia al estrés:</strong> Mejoran resistencia a sequía, salinidad y temperaturas extremas [9,11]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Regeneración de suelos:</strong> Restauran la actividad biológica del suelo [5,12]</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Reducción de insumos:</strong> Disminuyen la necesidad de químicos sintéticos [8,10]</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-green-100">
                  <th className="border p-3 text-left font-semibold">Tipo de producto</th>
                  <th className="border p-3 text-left font-semibold">Microorganismos principales</th>
                  <th className="border p-3 text-left font-semibold">Beneficios clave</th>
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
        </div>
      </section>

      {/* Remaining sections placeholder */}
      <section id="biofertilizantes" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-emerald-200 pb-3">Biofertilizantes basados en microorganismos</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6">
            <p className="text-lg leading-relaxed text-blue-800">
              Los biofertilizantes representan una de las aplicaciones más prometedoras de los probióticos en agricultura,
              ofreciendo una alternativa sostenible a los fertilizantes químicos convencionales [2,10].
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">¿Qué son los biofertilizantes probióticos?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Los biofertilizantes son productos que contienen microorganismos vivos capaces de mejorar la nutrición 
              vegetal mediante procesos biológicos naturales [2,10]. A diferencia de los fertilizantes químicos sintéticos, 
              estos productos trabajan en armonía con los ecosistemas del suelo [8,9].
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Ventajas de los biofertilizantes</h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Liberación lenta y sostenida de nutrientes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mejoran la estructura y fertilidad del suelo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducen la contaminación ambiental
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Costo-efectivos a largo plazo
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Impacto económico</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducción de costos de fertilización hasta 30%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Aumento de rendimientos del 15-25%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mejora calidad de productos agrícolas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menor dependencia de insumos externos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Tipos principales de biofertilizantes probióticos</h3>
            <table className="min-w-full border text-sm bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border p-3 text-left font-semibold">Tipo de biofertilizante</th>
                  <th className="border p-3 text-left font-semibold">Microorganismos clave</th>
                  <th className="border p-3 text-left font-semibold">Función principal</th>
                  <th className="border p-3 text-left font-semibold">Cultivos objetivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Fijadores de nitrógeno</td>
                  <td className="border p-3">Rhizobium, Azotobacter, Azospirillum</td>
                  <td className="border p-3">Conversión de N₂ atmosférico en amonio</td>
                  <td className="border p-3">Leguminosas, cereales, hortalizas</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border p-3 font-medium">Solubilizadores de fósforo</td>
                  <td className="border p-3">Bacillus megaterium, Pseudomonas striata</td>
                  <td className="border p-3">Liberación de P insoluble del suelo</td>
                  <td className="border p-3">Todos los cultivos, especialmente cereales</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Movilizadores de potasio</td>
                  <td className="border p-3">Bacillus mucilaginosus, Frateuria aurantia</td>
                  <td className="border p-3">Liberación de K de minerales del suelo</td>
                  <td className="border p-3">Frutales, hortalizas de fruto</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border p-3 font-medium">Micorrizas</td>
                  <td className="border p-3">Glomus, Rhizophagus, Gigaspora</td>
                  <td className="border p-3">Extensión red radical, absorción nutrientes</td>
                  <td className="border p-3">Árboles frutales, vid, cultivos perennes</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Promotores crecimiento</td>
                  <td className="border p-3">Pseudomonas fluorescens, Bacillus subtilis</td>
                  <td className="border p-3">Producción fitohormonas, estimulación</td>
                  <td className="border p-3">Hortalizas, ornamentales, viveros</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 mb-6">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Aplicación práctica de biofertilizantes</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Tratamiento de semillas</h4>
                <p className="text-sm text-emerald-600">Inoculación directa antes de la siembra para colonización temprana</p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Aplicación foliar</h4>
                <p className="text-sm text-emerald-600">Pulverización durante etapas críticas de crecimiento</p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Incorporación al suelo</h4>
                <p className="text-sm text-emerald-600">Mezcla con materia orgánica o aplicación directa en surcos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="biocontrol" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-orange-200 pb-3">Biocontrol de plagas y enfermedades</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200 mb-6">
            <p className="text-lg leading-relaxed text-orange-800">
              El control biológico mediante probióticos representa una alternativa ecológica y sostenible 
              a los pesticidas químicos, utilizando microorganismos beneficiosos para proteger los cultivos 
              de plagas y enfermedades de manera natural y efectiva [6,7,14].
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-6">Mecanismos de biocontrol probiótico</h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    Antagonismo directo
                  </h4>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Competencia por nutrientes y espacio</li>
                    <li>• Producción de antibióticos naturales</li>
                    <li>• Secreción de enzimas líticas</li>
                    <li>• Parasitismo de patógenos</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    Inducción de resistencia
                  </h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Activación de defensas naturales</li>
                    <li>• Producción de fitoalexinas</li>
                    <li>• Fortalecimiento de paredes celulares</li>
                    <li>• Resistencia sistémica adquirida</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                    Promoción de salud vegetal
                  </h4>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Mejora del estado nutricional</li>
                    <li>• Reducción del estrés abiótico</li>
                    <li>• Estimulación del crecimiento</li>
                    <li>• Fortalecimiento del sistema inmune</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Modificación del ambiente
                  </h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Alteración del pH rizosférico</li>
                    <li>• Producción de compuestos volátiles</li>
                    <li>• Modificación de exudados radiculares</li>
                    <li>• Creación de condiciones adversas para patógenos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Principales agentes de biocontrol probiótico</h3>
            <table className="min-w-full border text-sm bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border p-3 text-left font-semibold">Microorganismo</th>
                  <th className="border p-3 text-left font-semibold">Patógenos controlados</th>
                  <th className="border p-3 text-left font-semibold">Mecanismo principal</th>
                  <th className="border p-3 text-left font-semibold">Aplicación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Trichoderma harzianum</td>
                  <td className="border p-3">Fusarium, Rhizoctonia, Pythium</td>
                  <td className="border p-3">Micoparasitismo, antibióticos</td>
                  <td className="border p-3">Tratamiento semillas, suelo</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border p-3 font-medium">Bacillus subtilis</td>
                  <td className="border p-3">Erwinia, Xanthomonas, Botrytis</td>
                  <td className="border p-3">Lipopéptidos antifúngicos</td>
                  <td className="border p-3">Foliar, postcosecha</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Pseudomonas fluorescens</td>
                  <td className="border p-3">Gaeumannomyces, Fusarium oxysporum</td>
                  <td className="border p-3">Sideróforos, fenazinas</td>
                  <td className="border p-3">Rizosfera, semillas</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border p-3 font-medium">Bacillus thuringiensis</td>
                  <td className="border p-3">Lepidópteros, dípteros</td>
                  <td className="border p-3">Proteínas Cry tóxicas</td>
                  <td className="border p-3">Foliar contra larvas</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Beauveria bassiana</td>
                  <td className="border p-3">Áfidos, trips, moscas blancas</td>
                  <td className="border p-3">Infección entomopatógena</td>
                  <td className="border p-3">Aspersión foliar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 mb-6">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Ventajas del biocontrol con probióticos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Beneficios ambientales</h4>
                <ul className="space-y-2 text-purple-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducción del 60-80% en uso de pesticidas químicos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sin residuos tóxicos en alimentos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Preservación de fauna benéfica
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menor contaminación de aguas subterráneas
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Beneficios agronómicos</h4>
                <ul className="space-y-2 text-purple-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acción preventiva y curativa
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menor desarrollo de resistencias
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Compatible con manejo integrado
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Efecto promotor del crecimiento adicional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="implementacion" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-purple-200 pb-3">Implementación práctica en diferentes sistemas de cultivo</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200 mb-6">
            <p className="text-lg leading-relaxed text-purple-800">
              La implementación exitosa de probióticos agrícolas requiere un enfoque específico según el tipo de cultivo, 
              condiciones edafoclimáticas y objetivos productivos [8,13]. Esta guía práctica proporciona protocolos adaptados 
              para diferentes sistemas de producción agrícola [9,11].
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Cultivos de cereales y granos
              </h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Protocolo de aplicación</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Inoculación de semillas: Rhizobium (leguminosas), Azospirillum (cereales)</li>
                    <li>• Dosis: 200-500g por 100kg de semilla</li>
                    <li>• Aplicación foliar: 2-3 aplicaciones durante ciclo vegetativo</li>
                    <li>• Concentración: 1-2 x 10⁸ UFC/ml</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Resultados esperados</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Incremento de rendimiento: 15-30%</li>
                    <li>• Reducción fertilización nitrogenada: 25-40%</li>
                    <li>• Mejora calidad de grano: +2-5% proteína</li>
                    <li>• Mayor tolerancia a estrés hídrico</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-orange-600 mb-6 flex items-center">
                <span className="w-4 h-4 bg-orange-500 rounded-full mr-3"></span>
                Horticultura intensiva
              </h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Protocolo de aplicación</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Preparación sustrato: Trichoderma + micorrizas</li>
                    <li>• Fertirriego: Bacillus + Pseudomonas semanalmente</li>
                    <li>• Concentración: 1-5 x 10⁶ UFC/ml en solución nutritiva</li>
                    <li>• Aplicación foliar: Cada 10-15 días en horas frescas</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Resultados esperados</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Incremento de rendimiento: 20-40%</li>
                    <li>• Reducción enfermedades: 50-70%</li>
                    <li>• Mejora calidad organoléptica</li>
                    <li>• Vida útil postcosecha +30%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Cultivos perennes y fruticultura</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Establecimiento de plantación</h4>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>• Inoculación de raíces antes del trasplante</li>
                  <li>• Micorrizas: 10-50g por planta según tamaño</li>
                  <li>• Incorporación en hoyo de plantación</li>
                  <li>• Riego inmediato para activación</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">Mantenimiento anual</h4>
                <ul className="text-sm text-indigo-700 space-y-2">
                  <li>• Aplicación en corona: inicio primavera</li>
                  <li>• Fertirriego con probióticos mensual</li>
                  <li>• Aplicación foliar pre y post floración</li>
                  <li>• Incorporación con materia orgánica</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-3">Resultados a largo plazo</h4>
                <ul className="text-sm text-teal-700 space-y-2">
                  <li>• Incremento gradual de productividad</li>
                  <li>• Mejora salud del suelo</li>
                  <li>• Reducción mortalidad plantas</li>
                  <li>• Mayor longevidad de plantación</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200 mb-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Factores críticos para el éxito</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Condiciones ambientales</h4>
                <ul className="space-y-2 text-yellow-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    pH del suelo: 6.0-7.5 (óptimo para mayoría de probióticos)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Humedad adecuada: 60-80% capacidad de campo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Temperatura: 15-35°C para máxima actividad
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Materia orgánica &gt;2% para supervivencia
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Manejo agronómico</h4>
                <ul className="space-y-2 text-yellow-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Evitar aplicación simultánea con fungicidas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Aplicar en horas frescas (temprano o tardío)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Almacenamiento en refrigeración hasta uso
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rotación de cepas para evitar adaptación
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Monitoreo y evaluación de resultados</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg mb-2">
                  <span className="text-2xl font-bold text-blue-600">30</span>
                  <p className="text-sm text-blue-700">días</p>
                </div>
                <p className="text-xs text-gray-600">Primeros efectos visibles en desarrollo vegetal</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg mb-2">
                  <span className="text-2xl font-bold text-green-600">60</span>
                  <p className="text-sm text-green-700">días</p>
                </div>
                <p className="text-xs text-gray-600">Mejoras significativas en biomasa y vigor</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-lg mb-2">
                  <span className="text-2xl font-bold text-orange-600">90</span>
                  <p className="text-sm text-orange-700">días</p>
                </div>
                <p className="text-xs text-gray-600">Evaluación de resistencia a enfermedades</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-2">
                  <span className="text-2xl font-bold text-purple-600">365</span>
                  <p className="text-sm text-purple-700">días</p>
                </div>
                <p className="text-xs text-gray-600">Análisis completo de rendimiento y calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="estudios" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-red-200 pb-3">Estudios de caso y resultados en campo</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-200 mb-6">
            <p className="text-lg leading-relaxed text-red-800">
              Los resultados científicos y experiencias de campo demuestran el potencial transformador de los probióticos 
              agrícolas en diferentes contextos productivos y geográficos [8,13,15]. Estos estudios de caso reales proporcionan 
              evidencia concreta del impacto positivo en rendimiento, sostenibilidad y rentabilidad [10,11].
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Caso 1: Soja en Argentina</h3>
                <p className="text-sm text-blue-600">Estudio multicéntrico - 3 temporadas - 50,000 hectáreas</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Protocolo aplicado</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Inoculación con Bradyrhizobium japonicum</li>
                    <li>• Aplicación foliar de Azospirillum brasilense</li>
                    <li>• Dosis: 200ml/100kg semilla + 300ml/ha foliar</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Resultados obtenidos</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-green-700">Rendimiento</p>
                      <p className="text-2xl font-bold text-green-600">+18%</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">Proteína</p>
                      <p className="text-2xl font-bold text-green-600">+2.3%</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">Ahorro N</p>
                      <p className="text-2xl font-bold text-green-600">35%</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">ROI</p>
                      <p className="text-2xl font-bold text-green-600">380%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <div className="bg-orange-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-orange-800 mb-2">Caso 2: Tomate en España</h3>
                <p className="text-sm text-orange-600">Cultivo protegido - 2 años - 25 invernaderos</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Protocolo aplicado</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Trichoderma harzianum en sustrato</li>
                    <li>• Bacillus subtilis en fertirriego</li>
                    <li>• Micorrizas en trasplante</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Resultados obtenidos</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-purple-700">Producción</p>
                      <p className="text-2xl font-bold text-purple-600">+24%</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">Enfermedades</p>
                      <p className="text-2xl font-bold text-purple-600">-65%</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">Brix</p>
                      <p className="text-2xl font-bold text-purple-600">+15%</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-700">Postcosecha</p>
                      <p className="text-2xl font-bold text-purple-600">+8 días</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <div className="bg-green-100 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Caso 3: Arroz en Vietnam</h3>
              <p className="text-sm text-green-600">Sistema intensivo - 4 temporadas - 15,000 hectáreas</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Tratamiento aplicado</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Azospirillum lipoferum en semillero</li>
                  <li>• Bacillus megaterium solubilizador P</li>
                  <li>• Aplicaciones cada 21 días</li>
                  <li>• Integración con manejo IPM</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Parámetros evaluados</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Rendimiento por hectárea</li>
                  <li>• Incidencia de blast y añublo</li>
                  <li>• Calidad molinera del grano</li>
                  <li>• Análisis económico comparativo</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-3">Impactos medidos</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-teal-700">Rendimiento:</span>
                    <span className="font-bold text-teal-600">7.2 → 8.6 t/ha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-teal-700">Fertilizantes:</span>
                    <span className="font-bold text-teal-600">-30% NPK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-teal-700">Fungicidas:</span>
                    <span className="font-bold text-teal-600">-45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-teal-700">Margen neto:</span>
                    <span className="font-bold text-teal-600">+$320/ha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200 mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">Metaanálisis de efectividad global</h3>
            <p className="text-indigo-700 mb-4">
              Análisis de 127 estudios independientes en 5 continentes (2018-2023) con más de 200,000 hectáreas evaluadas [8,13,15]:
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">22%</p>
                <p className="text-sm text-blue-700">Incremento promedio de rendimiento</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">38%</p>
                <p className="text-sm text-green-700">Reducción uso fertilizantes químicos</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-orange-600">45%</p>
                <p className="text-sm text-orange-700">Disminución enfermedades del suelo</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600">285%</p>
                <p className="text-sm text-purple-700">Retorno promedio de inversión</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Factores de éxito identificados</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Selección de cepas adaptadas a condiciones locales
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Aplicación consistente durante todo el ciclo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integración con prácticas de manejo sostenible
                </li>
              </ul>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Capacitación técnica del personal de campo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Monitoreo sistemático de resultados
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Apoyo técnico continuo durante implementación
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="futuro" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-indigo-200 pb-3">El futuro de la agricultura probiótica</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-6">
            <p className="text-lg leading-relaxed text-indigo-800">
              La agricultura probiótica está en un momento de innovación acelerada, con avances en biotecnología, 
              genómica microbiana y técnicas de aplicación que prometen revolucionar aún más la producción agrícola 
              sostenible en las próximas décadas [5,8,11].
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-6">Innovaciones tecnológicas emergentes</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Microbioma sintético diseñado
                  </h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Desarrollo de consorcios microbianos específicamente diseñados para condiciones 
                    edafoclimáticas y cultivos particulares mediante ingeniería genética dirigida.
                  </p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Cepas modificadas para mayor eficiencia</li>
                    <li>• Consorcios con funciones complementarias</li>
                    <li>• Resistencia mejorada a estrés ambiental</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Nanotecnología para liberación controlada
                  </h4>
                  <p className="text-sm text-green-700 mb-3">
                    Encapsulación de probióticos en nanopartículas biodegradables para liberación 
                    sostenida y protección contra factores ambientales adversos.
                  </p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Mayor supervivencia microbiana</li>
                    <li>• Liberación temporal programada</li>
                    <li>• Aplicación de precisión espacial</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    Agricultura de precisión microbiana
                  </h4>
                  <p className="text-sm text-purple-700 mb-3">
                    Sistemas de aplicación variable de probióticos basados en sensores IoT, 
                    análisis de suelo en tiempo real y algoritmos de inteligencia artificial.
                  </p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Dosificación adaptativa automática</li>
                    <li>• Mapeo microbiano del suelo</li>
                    <li>• Predicción de efectividad</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    Simbiosis planta-microorganismo dirigida
                  </h4>
                  <p className="text-sm text-orange-700 mb-3">
                    Desarrollo de variedades vegetales con mayor afinidad por microorganismos 
                    beneficiosos específicos mediante mejoramiento genético asistido.
                  </p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Plantas &ldquo;pre-programadas&rdquo; para simbiosis</li>
                    <li>• Exudados radiculares optimizados</li>
                    <li>• Resistencia natural mejorada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200 mb-8">
            <h3 className="text-xl font-bold text-teal-800 mb-4">Tendencias del mercado global</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">$9.8B</div>
                <p className="text-sm text-teal-700 mb-2">Valor del mercado en 2024</p>
                <p className="text-xs text-teal-600">Crecimiento anual del 14.2%</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$18.6B</div>
                <p className="text-sm text-blue-700 mb-2">Proyección para 2030</p>
                <p className="text-xs text-blue-600">Duplicación en 6 años</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                <p className="text-sm text-green-700 mb-2">Adopción en agricultura intensiva</p>
                <p className="text-xs text-green-600">Para 2028 en países desarrollados</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Desafíos y oportunidades</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-700 mb-4 text-lg">Desafíos principales</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-medium text-red-800 mb-2">Estandarización y regulación</h5>
                    <p className="text-sm text-red-700">
                      Necesidad de marcos regulatorios unificados para registro y comercialización 
                      de productos probióticos agrícolas a nivel internacional.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-800 mb-2">Estabilidad y conservación</h5>
                    <p className="text-sm text-orange-700">
                      Desarrollo de tecnologías para mantener viabilidad microbiana durante 
                      almacenamiento y transporte en condiciones tropicales.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-medium text-yellow-800 mb-2">Capacitación técnica</h5>
                    <p className="text-sm text-yellow-700">
                      Formación de técnicos y agricultores en manejo específico de productos 
                      biológicos y sus interacciones complejas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-700 mb-4 text-lg">Oportunidades emergentes</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">Agricultura regenerativa</h5>
                    <p className="text-sm text-green-700">
                      Integración de probióticos en sistemas de agricultura regenerativa para 
                      restauración de suelos degradados y secuestro de carbono.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">Agricultura vertical y urbana</h5>
                    <p className="text-sm text-blue-700">
                      Aplicación en sistemas de cultivo controlado para optimización de 
                      productividad en espacios reducidos y ambientes urbanos.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium text-purple-800 mb-2">Adaptación al cambio climático</h5>
                    <p className="text-sm text-purple-700">
                      Desarrollo de consorcios microbianos para mejorar tolerancia de cultivos 
                      a estreses climáticos extremos y variables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Proyecciones para la próxima década (2025-2035)</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Avances tecnológicos esperados</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>2025-2027:</strong> Comercialización de primeros consorcios sintéticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>2027-2029:</strong> Adopción masiva de aplicación de precisión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>2029-2032:</strong> Integración con agricultura vertical</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>2032-2035:</strong> Sistemas autónomos de manejo microbiano</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Impacto proyectado</h4>
                <div className="space-y-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Reducción de insumos químicos</p>
                    <p className="text-2xl font-bold text-green-600">60-70%</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Incremento de productividad</p>
                    <p className="text-2xl font-bold text-blue-600">35-50%</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <p className="text-sm text-purple-800 font-medium">Reducción huella carbono</p>
                    <p className="text-2xl font-bold text-purple-600">40-55%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-slate-300 pb-3">Conclusiones</h2>
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-slate-50 to-green-50 p-6 rounded-lg border border-slate-200 mb-6">
            <p className="text-lg leading-relaxed text-slate-800">
              Los probióticos agrícolas representan una revolución silenciosa en la agricultura moderna, ofreciendo
              soluciones sostenibles y efectivas para los desafíos del siglo XXI [1,5,8]. Su implementación no solo mejora
              la productividad, sino que también contribuye a la regeneración de ecosistemas agrícolas saludables [5,12,14].
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Síntesis de beneficios demostrados</h3>
            
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Beneficios agronómicos</h4>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Incremento promedio de rendimiento del 15-30%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mejora de calidad nutricional de productos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mayor tolerancia a estrés abiótico
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducción de pérdidas postcosecha
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Beneficios ambientales</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducción del 30-50% en fertilizantes químicos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Disminución del 60-80% en pesticidas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regeneración de salud del suelo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Secuestro de carbono en suelos
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Beneficios económicos</h4>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    ROI promedio de 250-400%
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reducción de costos de producción
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acceso a mercados premium
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menor dependencia de insumos externos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 mb-8">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Recomendaciones para la adopción exitosa</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-3">Para productores agrícolas</h4>
                <ul className="space-y-2 text-emerald-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comenzar con ensayos piloto en parcelas pequeñas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Buscar asesoramiento técnico especializado
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mantener registros detallados de aplicaciones
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Integrar gradualmente con manejo existente
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Evaluar resultados a medio y largo plazo
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-emerald-700 mb-3">Para técnicos y asesores</h4>
                <ul className="space-y-2 text-emerald-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Capacitación continua en microbiología aplicada
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Desarrollo de protocolos específicos locales
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Monitoreo sistemático de efectividad
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Documentación de casos de éxito
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Colaboración con centros de investigación
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg mb-8">
            <h3 className="text-lg font-bold text-indigo-800 mb-3">Perspectiva global y sostenibilidad</h3>
            <p className="text-indigo-700 mb-4">
              La adopción masiva de probióticos agrícolas es fundamental para alcanzar los Objetivos de Desarrollo 
              Sostenible de la ONU, particularmente en cuanto a seguridad alimentaria, conservación de ecosistemas 
              y mitigación del cambio climático [5,10,14].
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-indigo-800">Contribución al ODS 2</p>
                <p className="text-xs text-indigo-600">Hambre cero mediante agricultura sostenible</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-indigo-800">Contribución al ODS 15</p>
                <p className="text-xs text-indigo-600">Vida terrestre y salud de ecosistemas</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm font-medium text-indigo-800">Contribución al ODS 13</p>
                <p className="text-xs text-indigo-600">Acción climática y secuestro de carbono</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-100 to-green-100 p-6 rounded-lg border border-gray-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Reflexión final</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              La transición hacia una agricultura basada en probióticos no es solo una opción tecnológica, sino una 
              necesidad urgente para garantizar la seguridad alimentaria mundial mientras se preservan los recursos 
              naturales para las generaciones futuras [5,8,10].
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los resultados científicos son consistentes y convincentes: los probióticos agrícolas funcionan, son 
              económicamente viables y ambientalmente sostenibles [8,10,11,13]. El desafío ahora es acelerar su adopción a través 
              de políticas públicas de apoyo, programas de capacitación y transferencia tecnológica efectiva [9,15].
            </p>
            <div className="bg-white p-4 rounded-lg mt-4">
              <p className="text-green-800 font-medium italic text-center">
                &ldquo;El futuro de la agricultura es biológico, y ese futuro ya está aquí. Solo necesitamos la voluntad 
                colectiva para adoptarlo a la escala que requiere nuestro planeta.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mt-16">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <details className="group">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-300 pb-2">Referencias científicas</h2>
              <svg className="w-6 h-6 text-slate-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-6 prose prose-sm max-w-none">
              <ol className="list-decimal pl-5 space-y-3 text-slate-700">
                <li className="mb-2">
                  <strong>Vessey, J. K.</strong> (2003). Plant growth promoting rhizobacteria as biofertilizers. 
                  <em className="text-blue-600"> Plant and Soil</em>, 255(2), 571-586. DOI: 10.1023/A:1026037216893
                </li>
                <li className="mb-2">
                  <strong>Rodríguez, H., & Fraga, R.</strong> (1999). Phosphate solubilizing bacteria and their role in plant growth promotion. 
                  <em className="text-blue-600"> Biotechnology Advances</em>, 17(4-5), 319-339. DOI: 10.1016/S0734-9750(99)00014-2
                </li>
                <li className="mb-2">
                  <strong>Vacheron, J., Desbrosses, G., Bouffaud, M. L., et al.</strong> (2013). Plant growth-promoting rhizobacteria and root system functioning. 
                  <em className="text-blue-600"> Frontiers in Plant Science</em>, 4, 356. DOI: 10.3389/fpls.2013.00356
                </li>
                <li className="mb-2">
                  <strong>Berg, G.</strong> (2009). Plant-microbe interactions promoting plant growth and health: perspectives for controlled use of microorganisms in agriculture. 
                  <em className="text-blue-600"> Applied Microbiology and Biotechnology</em>, 84(1), 11-18. DOI: 10.1007/s00253-009-2092-7
                </li>
                <li className="mb-2">
                  <strong>Bender, S. F., Wagg, C., & van der Heijden, M. G.</strong> (2016). An underground revolution: biodiversity and soil ecological engineering for agricultural sustainability. 
                  <em className="text-blue-600"> Trends in Ecology & Evolution</em>, 31(6), 440-452. DOI: 10.1016/j.tree.2016.02.016
                </li>
                <li className="mb-2">
                  <strong>Compant, S., Duffy, B., Nowak, J., Clément, C., & Barka, E. A.</strong> (2005). Use of plant growth-promoting bacteria for biocontrol of plant diseases: principles, mechanisms of action, and future prospects. 
                  <em className="text-blue-600"> Applied and Environmental Microbiology</em>, 71(9), 4951-4959. DOI: 10.1128/AEM.71.9.4951-4959.2005
                </li>
                <li className="mb-2">
                  <strong>Kloepper, J. W., Ryu, C. M., & Zhang, S.</strong> (2004). Induced systemic resistance and promotion of plant growth by Bacillus spp. 
                  <em className="text-blue-600"> Phytopathology</em>, 94(11), 1259-1266. DOI: 10.1094/PHYTO.2004.94.11.1259
                </li>
                <li className="mb-2">
                  <strong>Bashan, Y., de-Bashan, L. E., Prabhu, S. R., & Hernandez, J. P.</strong> (2014). Advances in plant growth-promoting bacterial inoculant technology: formulations and practical perspectives (1998–2013). 
                  <em className="text-blue-600"> Plant and Soil</em>, 378(1-2), 1-33. DOI: 10.1007/s11104-013-1956-x
                </li>
                <li className="mb-2">
                  <strong>Souza, R., Ambrosini, A., & Passaglia, L. M.</strong> (2015). Plant growth-promoting bacteria as inoculants in agricultural soils. 
                  <em className="text-blue-600"> Genetics and Molecular Biology</em>, 38(4), 401-419. DOI: 10.1590/S1415-475738420150053
                </li>
                <li className="mb-2">
                  <strong>Bhardwaj, D., Ansari, M. W., Sahoo, R. K., & Tuteja, N.</strong> (2014). Biofertilizers function as key player in sustainable agriculture by improving soil fertility, plant tolerance and crop productivity. 
                  <em className="text-blue-600"> Microbial Cell Factories</em>, 13(1), 66. DOI: 10.1186/1475-2859-13-66
                </li>
                <li className="mb-2">
                  <strong>Lugtenberg, B., & Kamilova, F.</strong> (2009). Plant-growth-promoting rhizobacteria. 
                  <em className="text-blue-600"> Annual Review of Microbiology</em>, 63, 541-556. DOI: 10.1146/annurev.micro.62.081307.162918
                </li>
                <li className="mb-2">
                  <strong>Berendsen, R. L., Pieterse, C. M., & Bakker, P. A.</strong> (2012). The rhizosphere microbiome and plant health. 
                  <em className="text-blue-600"> Trends in Plant Science</em>, 17(8), 478-486. DOI: 10.1016/j.tplants.2012.04.001
                </li>
                <li className="mb-2">
                  <strong>Kumar, A., Verma, J. P., & Singh, A. P.</strong> (2017). Effect of bacterial inoculation on maize in field trial and growth chamber studies. 
                  <em className="text-blue-600"> Acta Agriculturae Scandinavica, Section B—Soil & Plant Science</em>, 67(1), 38-48. DOI: 10.1080/09064710.2016.1208317
                </li>
                <li className="mb-2">
                  <strong>Weller, D. M., Raaijmakers, J. M., Gardener, B. B. M., & Thomashow, L. S.</strong> (2002). Microbial populations responsible for specific soil suppressiveness to plant pathogens. 
                  <em className="text-blue-600"> Annual Review of Phytopathology</em>, 40(1), 309-348. DOI: 10.1146/annurev.phyto.40.030402.110010
                </li>
                <li className="mb-2">
                  <strong>Prasanna, R., Hossain, F., Babu, S., et al.</strong> (2020). Cyanobacterial inoculation elicits plant defense response and enhanced resistance against bacterial blight disease in rice. 
                  <em className="text-blue-600"> Scientific Reports</em>, 10(1), 12874. DOI: 10.1038/s41598-020-69401-6
                </li>
              </ol>
            </div>
          </details>
        </div>
      </section>
    </BlogArticleTemplate>
  );
}
