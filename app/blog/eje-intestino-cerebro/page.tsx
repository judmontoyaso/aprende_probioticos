import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "¿Puede un probiótico mejorar tu estado de ánimo? La ciencia detrás del eje intestino-cerebro",
  description:
    "Descubre cómo la conexión entre tu intestino y cerebro puede influir en tu estado de ánimo y bienestar mental. Exploramos la ciencia detrás de los probióticos y la salud mental.",
  keywords: [
    "eje intestino-cerebro",
    "probióticos y estado de ánimo",
    "microbiota intestinal",
    "salud mental",
    "neurotransmisores",
    "serotonina intestinal",
    "ansiedad y probióticos",
    "depresión y probióticos",
    "nervio vago",
    "psicobióticos"
  ],
  openGraph: {
    title: "¿Puede un probiótico mejorar tu estado de ánimo? La ciencia detrás del eje intestino-cerebro",
    description:
      "Descubre cómo la conexión entre tu intestino y cerebro puede influir en tu estado de ánimo y bienestar mental.",
    type: "article",
    publishedTime: "2025-10-27T00:00:00.000Z",
    authors: ["Equipo de Probióticos"],
    url: "https://www.probioticos.info/blog/eje-intestino-cerebro",
  },
  alternates: {
    canonical: "https://www.probioticos.info/blog/eje-intestino-cerebro",
  },
};

export default function EjeIntestinoCerebroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Hero Section con imagen destacada */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-blue-900/85 to-cyan-900/80 z-10"></div>
        <Image
          src="/images/probioticos_animo.png"
          alt="Eje intestino-cerebro y salud mental - Conexión microbiota y estado de ánimo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl transform hover:scale-105 transition-transform">
              🧠 Salud Mental
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            ¿Puede un probiótico mejorar tu estado de ánimo?
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl leading-relaxed">
            Descubre la fascinante ciencia detrás del eje intestino-cerebro y cómo tu microbiota puede influir en tu bienestar mental y emocional
          </p>
          <div className="flex flex-wrap items-center gap-6 text-cyan-100">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime="2025-10-27">27 de octubre, 2025</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>10 min de lectura</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-12 md:py-16">{/* Header movido arriba */}

        {/* Introducción */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white">
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0 text-6xl">🦋</div>
              <div className="space-y-5">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                  ¿Alguna vez has sentido <span className="font-bold text-indigo-700">&quot;mariposas en el estómago&quot;</span> cuando
                  estás nervioso o una sensación de bienestar después de una buena
                  comida? Estas expresiones populares no son solo metáforas; reflejan
                  una conexión profunda y bidireccional entre nuestro intestino y
                  nuestro cerebro.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Esta autopista de comunicación, conocida como el{" "}
                  <strong className="text-blue-700">&quot;eje intestino-cerebro&quot;</strong>, es un campo de
                  estudio fascinante que está revelando cómo la salud de nuestra
                  microbiota intestinal puede influir directamente en
                  nuestro estado de ánimo y bienestar mental.
                </p>
                <div className="bg-white/80 rounded-xl p-5 border-l-4 border-cyan-500">
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    💡 En este artículo, exploraremos cómo los probióticos, esos
                    aliados microscópicos, podrían ser una clave inesperada para mejorar
                    nuestra salud mental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué son los probióticos? */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <div className="text-5xl mb-6">🔬</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                ¿Qué son los probióticos?
              </h2>
              <p className="text-blue-100 leading-relaxed text-lg mb-5">
                Los probióticos son <span className="font-bold text-white">microorganismos vivos</span> que, cuando se administran en cantidades
                adecuadas, confieren un beneficio para la salud del huésped.
              </p>
              <p className="text-blue-100 leading-relaxed text-lg">
                No son simplemente &quot;bacterias buenas&quot;; son <span className="font-bold text-white">cepas
                específicas</span> que han demostrado tener efectos positivos en la salud.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-blue-200">
              <div className="text-5xl mb-6">🥗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Dónde los encuentras?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    Alimentos fermentados: yogur, kéfir, chucrut y kimchi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    Suplementos dietéticos específicos
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-cyan-50 rounded-xl p-5 border-l-4 border-cyan-500">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  💡 Su acción va más allá de la digestión: <span className="text-cyan-700">pueden influir en la
                  producción de neurotransmisores</span> y otras sustancias que afectan la
                  función cerebral.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* El Eje Intestino-Cerebro */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              🧬 CONEXIÓN CEREBRO-INTESTINO
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              El Eje Intestino-Cerebro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una autopista bidireccional de comunicación entre tu mente y tu intestino
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl mb-10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-5xl mb-5">🧠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistema Nervioso Central</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Tu cerebro procesa emociones, pensamientos y sensaciones
                </p>
              </div>
              <div>
                <div className="text-5xl mb-5">🌊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistema Nervioso Entérico</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Tu intestino tiene una red neuronal tan extensa que funciona independientemente
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">↔️</span>
                Comunicación bidireccional
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                El eje intestino-cerebro es un sistema de comunicación complejo que
                conecta ambos sistemas. Esta conexión no es solo física, a
                través del nervio vago, sino también bioquímica:
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
                  <div className="text-3xl mb-3">🔗</div>
                  <h4 className="font-bold text-gray-900 mb-2">Física</h4>
                  <p className="text-gray-700 text-sm">A través del nervio vago</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
                  <div className="text-3xl mb-3">🧪</div>
                  <h4 className="font-bold text-gray-900 mb-2">Bioquímica</h4>
                  <p className="text-gray-700 text-sm">Neurotransmisores y hormonas</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-5 border-2 border-pink-200">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-gray-900 mb-2">Metabólica</h4>
                  <p className="text-gray-700 text-sm">Metabolitos bacterianos</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 text-5xl">🏆</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Tu &quot;segundo cerebro&quot;</h3>
                  <p className="text-purple-100 leading-relaxed text-lg mb-4">
                    El intestino, a menudo llamado nuestro <span className="font-bold text-yellow-200">&quot;segundo cerebro&quot;</span>,
                    alberga una red neuronal tan extensa que puede funcionar de manera
                    independiente. Es en este intrincado ecosistema donde la microbiota
                    intestinal juega un papel protagonista.
                  </p>
                  <div className="bg-white/20 rounded-xl p-5 backdrop-blur-sm">
                    <p className="text-lg font-bold mb-2">📊 Dato sorprendente:</p>
                    <p className="text-purple-100 leading-relaxed">
                      Las bacterias intestinales pueden producir neurotransmisores como la
                      <span className="font-bold text-yellow-200"> serotonina (95% se produce en el intestino)</span>,
                      GABA y dopamina, cruciales para la regulación del estado de ánimo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidencia Científica */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              📚 INVESTIGACIÓN CIENTÍFICA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              ¿Qué dice la ciencia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidencia de los probióticos y el estado de ánimo
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 md:p-10 shadow-xl mb-10 border-4 border-white">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
              La investigación sobre el impacto de los probióticos en el estado de
              ánimo y la salud mental es un campo en <span className="font-bold text-green-700">rápida expansión</span>. Si bien aún
              se necesita más investigación, varios estudios han arrojado
              resultados prometedores:
            </p>
          </div>

          <div className="space-y-8">{/* Mantener el resto de los estudios con diseño mejorado pero sin cambiar el contenido */}
            {/* Estudio 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Probióticos y trastornos psiquiátricos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Un estudio de <strong>Mörkl et al. (2020)</strong>, publicado en{" "}
                <em>Current Nutrition Reports</em>, revisó datos de estudios de
                intervención recientes centrados en probióticos y el eje
                intestino-cerebro para el tratamiento de la depresión, la
                ansiedad y la esquizofrenia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Los autores concluyeron que los probióticos son propensos a
                mejorar la depresión, aunque se necesita más investigación sobre
                la duración del tratamiento, la dosis y las interacciones.
                <sup>
                  <a href="#ref2" className="text-blue-600 hover:underline">
                    [2]
                  </a>
                </sup>
              </p>
            </div>

            {/* Estudio 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modulación prebiótica y probiótica en la depresión
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Otro estudio relevante es el de{" "}
                <strong>Radford-Smith et al. (2023)</strong>, publicado en{" "}
                <em>Nutrients</em>, que discute el papel de la modulación
                prebiótica y probiótica del eje microbiota-intestino-cerebro en
                la depresión.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este estudio destaca cómo las alteraciones en la microbiota
                intestinal pueden afectar el estado de ánimo y cómo los
                probióticos han mostrado efectos antidepresivos modestos en
                individuos con síntomas depresivos, aunque enfatiza la necesidad
                de más estudios en poblaciones clínicamente relevantes.
                <sup>
                  <a href="#ref3" className="text-blue-600 hover:underline">
                    [3]
                  </a>
                </sup>
              </p>
            </div>

            {/* Estudio 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Probióticos en adultos mayores
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                En un ensayo aleatorizado, doble ciego y controlado con placebo,{" "}
                <strong>Kim et al. (2021)</strong> investigaron el efecto de la
                suplementación con probióticos en la función cognitiva y el
                estado de ánimo en adultos mayores.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Publicado en <em>The Journals of Gerontology: Series A</em>,
                este estudio encontró que la suplementación con{" "}
                <em>Bifidobacterium bifidum BGN4</em> y{" "}
                <em>Bifidobacterium longum BORI</em> mejoró la flexibilidad
                mental y alivió el estrés en adultos mayores sanos, junto con
                cambios en la microbiota intestinal.
                <sup>
                  <a href="#ref4" className="text-blue-600 hover:underline">
                    [4]
                  </a>
                </sup>
              </p>
            </div>

            {/* Estudio 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Probióticos y prebióticos en el sistema nervioso central
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Finalmente, <strong>Ansari et al. (2023)</strong>, en un
                artículo publicado en <em>Frontiers in Nutrition</em>,
                exploraron el papel de los probióticos y prebióticos en la
                modulación del eje intestino-cerebro.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Los hallazgos sugieren que los probióticos y prebióticos pueden
                mejorar la función del sistema nervioso central y desempeñar un
                papel importante en la prevención y el tratamiento de algunos
                trastornos cerebrales, aunque se requieren más estudios,
                especialmente ensayos clínicos en humanos, para probar estos
                efectos de manera concluyente.
                <sup>
                  <a href="#ref5" className="text-blue-600 hover:underline">
                    [5]
                  </a>
                </sup>
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            Estos estudios, entre muchos otros, sugieren que la modulación de la
            microbiota intestinal a través de probióticos podría ser una
            estrategia complementaria para mejorar el estado de ánimo y la salud
            mental. Sin embargo, es crucial recordar que la ciencia en este
            campo aún está evolucionando y que los resultados pueden variar
            según la cepa probiótica, la dosis y la condición individual de cada
            persona.
          </p>
        </section>

        {/* Implicaciones en la vida diaria */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué importa? Implicaciones en la vida diaria
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La idea de que nuestro intestino puede influir en nuestro estado de
            ánimo tiene implicaciones significativas para nuestra vida diaria.
            Si bien no es una solución mágica para problemas de salud mental
            complejos, entender esta conexión nos abre nuevas vías para el
            bienestar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Por ejemplo, si experimentas estrés crónico, ansiedad o incluso
            cambios de humor inexplicables, considerar la salud de tu microbiota
            intestinal podría ser un paso valioso.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Consejo práctico:</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Piensa en cómo te sientes después de comer ciertos alimentos. Una
              dieta rica en alimentos procesados y azúcares puede alterar el
              equilibrio de tu microbiota, lo que podría, a su vez, afectar tu
              estado de ánimo. Por el contrario, una dieta rica en fibra,
              frutas, verduras y alimentos fermentados puede fomentar una
              microbiota diversa y saludable.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Incorporar alimentos ricos en probióticos de forma regular, como el
            yogur natural o el kéfir, podría ser una forma sencilla de apoyar
            esta conexión. Sin embargo, es importante recordar que los
            probióticos no son un sustituto de tratamientos médicos o
            psicológicos cuando son necesarios, sino un complemento que puede
            optimizar nuestra salud general.
          </p>

          {/* Kéfir Diary Download Banner */}
          <div className="mt-10 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-4">📥</div>
              <h3 className="text-3xl font-extrabold text-white mb-3">
                ¿Quieres hacer kéfir en casa?
              </h3>
              <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Descarga GRATIS el <strong className="text-yellow-300">Kéfir Diary</strong>: bitácora de fermentación 
                con plantillas de registro, instrucciones y 5 recetas deliciosas
              </p>
              <Link
                href="/recursos/kefir-diary"
                className="inline-flex items-center gap-2 bg-yellow-400 text-purple-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                Descargar Kéfir Diary GRATIS
              </Link>
            </div>
          </div>
        </section>

        {/* Reflexiones y Consideraciones Prácticas */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Reflexiones y Consideraciones Prácticas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aunque la investigación es prometedora, es fundamental abordar el
            tema con una perspectiva equilibrada. No todos los probióticos son
            iguales, y los beneficios pueden ser específicos de la cepa.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Por ejemplo, cepas como <em>Lactobacillus helveticus R0052</em> y{" "}
            <em>Bifidobacterium longum R0175</em> han sido estudiadas por sus
            efectos ansiolíticos y antidepresivos en algunos ensayos. Sin
            embargo, la efectividad puede variar y lo que funciona para una
            persona puede no funcionar para otra.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Importante:</strong> La mayoría de los estudios se han
              realizado en poblaciones específicas o con condiciones de salud
              preexistentes, y los resultados no siempre son directamente
              extrapolables a la población general sana. Además, la dosis y la
              duración del tratamiento con probióticos son factores cruciales
              que aún se están investigando para determinar las recomendaciones
              óptimas.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            En resumen, mientras que la idea de que un probiótico puede mejorar
            tu estado de ánimo es científicamente plausible y respaldada por una
            creciente cantidad de evidencia, no es una panacea. La clave reside
            en un enfoque holístico de la salud que incluya una dieta
            equilibrada, ejercicio regular, manejo del estrés y, cuando sea
            apropiado, la consideración de suplementos probióticos específicos
            bajo la guía de un profesional de la salud.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            La ciencia del eje intestino-cerebro nos invita a mirar nuestro
            bienestar mental desde una perspectiva más integrada, reconociendo
            la profunda conexión entre nuestra mente y nuestro intestino.
          </p>
        </section>

        {/* Referencias */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fuentes científicas
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
            <li id="ref1">
              BBC Mundo. (2025, 15 de mayo). Por qué la conexión entre el
              intestino y el cerebro es tan importante.{" "}
              <a
                href="https://www.bbc.com/mundo/articles/c8jej9v1j2wo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.bbc.com/mundo/articles/c8jej9v1j2wo
              </a>
            </li>
            <li id="ref2">
              Mörkl, S., Butler, M. I., Holl, A., Cryan, J. F., & Dinan, T. G.
              (2020). Probiotics and the Microbiota-Gut-Brain Axis: Focus on
              Psychiatry. <em>Current Nutrition Reports</em>, 9(3), 171-182.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32406013/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/32406013/
              </a>
            </li>
            <li id="ref3">
              Radford-Smith, D. E., & Anthony, D. C. (2023). Prebiotic and
              Probiotic Modulation of the Microbiota-Gut-Brain Axis in
              Depression. <em>Nutrients</em>, 15(8), 1880.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/37111100/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/37111100/
              </a>
            </li>
            <li id="ref4">
              Kim, C. S., Cha, L., Sim, M., Jung, S., Chun, W. Y., Baik, H. W.,
              & Shin, D. M. (2021). Probiotic Supplementation Improves Cognitive
              Function and Mood with Changes in Gut Microbiota in
              Community-Dwelling Older Adults: A Randomized, Double-Blind,
              Placebo-Controlled, Multicenter Trial.{" "}
              <em>
                The Journals of Gerontology: Series A, Biological Sciences and
                Medical Sciences
              </em>
              , 76(1), 32-40.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32300799/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/32300799/
              </a>
            </li>
            <li id="ref5">
              Ansari, F., Neshat, M., Pourjafar, H., Jafari, S. M., & Samakkhah,
              S. A. (2023). The role of probiotics and prebiotics in modulating
              of the gut-brain axis. <em>Frontiers in Nutrition</em>, 10,
              1173660.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/37565035/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/37565035/
              </a>
            </li>
            <li id="ref6">
              Ferrari, S., et al. (2024). The influence of the gut-brain axis on
              anxiety and depression. <em>Psychiatry Research</em>, 335, 115897.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38707924/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/38707924/
              </a>
            </li>
            <li id="ref7">
              Kumar, A., et al. (2024). Probiotics as modulators of gut-brain
              axis for cognitive functions.{" "}
              <em>Journal of Functional Foods</em>, 114, 106024.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10912297/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC10912297/
              </a>
            </li>
            <li id="ref8">
              Liu, L., et al. (2018). Gut–Brain Axis and Mood Disorder.{" "}
              <em>Journal of Clinical Gastroenterology</em>, 52(Suppl 1),
              S18-S22.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5987167/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC5987167/
              </a>
            </li>
            <li id="ref9">
              Forssten, S. D., et al. (2022). The Microbiota-Gut-Brain Axis in
              Mood Disorders and Beyond. <em>Nutrients</em>, 14(6), 1256.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/35276927/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/35276927/
              </a>
            </li>
            <li id="ref10">
              Ķimse, L., et al. (2024). Probiotics That Influence the Gut-Brain
              Axis. <em>Nutrients</em>, 16(9), 1334.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38674247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/38674247/
              </a>
            </li>
          </ol>
        </section>

        {/* Artículos relacionados */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Artículos relacionados
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/salud-humana"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Más sobre Salud Humana
              </h3>
              <p className="text-gray-600 text-sm">
                Descubre otros artículos sobre probióticos y salud humana
              </p>
            </Link>
            <Link
              href="/que-son"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                ¿Qué son los probióticos?
              </h3>
              <p className="text-gray-600 text-sm">
                Aprende más sobre qué son y cómo funcionan los probióticos
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
