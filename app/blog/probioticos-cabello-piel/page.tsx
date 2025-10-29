import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Probióticos para el cabello y la piel: ¿La belleza comienza en el intestino?",
  description:
    "Descubre cómo los probióticos pueden mejorar la salud de tu piel y cabello desde el interior. Conoce la ciencia detrás de la conexión intestino-piel y los beneficios de los probióticos para la belleza.",
  keywords: [
    "probióticos para la piel",
    "probióticos para el cabello",
    "eje intestino-piel",
    "microbiota cutánea",
    "acné y probióticos",
    "dermatitis atópica",
    "rosácea",
    "belleza desde el intestino",
    "salud cutánea",
    "cabello saludable"
  ],
  openGraph: {
    title: "Probióticos para el cabello y la piel: ¿La belleza comienza en el intestino?",
    description:
      "Descubre cómo los probióticos pueden mejorar la salud de tu piel y cabello desde el interior.",
    type: "article",
    publishedTime: "2025-10-27T00:00:00.000Z",
    authors: ["Equipo de Probióticos"],
    url: "https://www.probioticos.info/blog/probioticos-cabello-piel",
  },
  alternates: {
    canonical: "https://www.probioticos.info/blog/probioticos-cabello-piel",
  },
};

export default function ProbioticosCabelloPielPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section con imagen destacada */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/80 to-rose-900/70 z-10"></div>
        <Image
          src="/images/probioticos_belleza.png"
          alt="Probióticos para la belleza - Piel radiante y cabello saludable"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-20 max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl transform hover:scale-105 transition-transform">
              💆‍♀️ Belleza y Salud
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            Probióticos para el cabello y la piel
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl leading-relaxed">
            ¿La belleza comienza en el intestino? Descubre la ciencia revolucionaria que conecta tu microbiota con una piel radiante y cabello saludable
          </p>
          <div className="flex flex-wrap items-center gap-6 text-pink-100">
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
              <span>12 min de lectura</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-12 md:py-16">{/* Header movido arriba */}

        {/* Introducción */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white">
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0 text-6xl">✨</div>
              <div className="space-y-5">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                  Durante años, hemos buscado la clave para una piel radiante y un
                  cabello saludable en cremas, sérums y tratamientos tópicos. Sin
                  embargo, la ciencia moderna está revelando que la verdadera belleza
                  podría comenzar en un lugar inesperado: <span className="font-bold text-purple-700">nuestro intestino</span>.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  La conexión entre la salud intestinal y la apariencia de nuestra
                  piel y cabello es cada vez más evidente. Los probióticos, esos
                  microorganismos beneficiosos que habitan en nuestro tracto
                  digestivo, no solo mejoran la digestión, sino que también pueden
                  tener un impacto significativo en nuestra salud cutánea y capilar.
                </p>
                <div className="bg-white/80 rounded-xl p-5 border-l-4 border-pink-500">
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    💡 En este artículo, exploraremos cómo los probióticos pueden
                    transformar tu rutina de belleza desde adentro hacia afuera,
                    respaldados por evidencia científica sólida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* El Eje Intestino-Piel */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              🔬 CIENCIA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
              El eje intestino-piel: Una conexión revolucionaria
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-purple-500 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el eje intestino-piel?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Al igual que existe el eje intestino-cerebro, los investigadores han
                identificado un <strong className="text-purple-700">&quot;eje intestino-piel&quot;</strong>, una
                vía bidireccional de comunicación entre nuestra microbiota
                intestinal y la salud de nuestra piel.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl text-white hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-4">💫</div>
              <h3 className="text-2xl font-bold mb-4">Impacto en tu belleza</h3>
              <p className="text-purple-100 leading-relaxed text-lg">
                Esta conexión puede ser la clave para resolver problemas de piel
                como acné, dermatitis, rosácea y signos de envejecimiento
                prematuro, además de mejorar la salud de tu cabello.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border-l-4 border-blue-500 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              Mecanismos de acción
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Regulación inmunológica</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      El 70% de nuestro sistema inmunitario reside en el intestino. Una microbiota
                      saludable ayuda a regular las respuestas inflamatorias que pueden
                      manifestarse en la piel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧪
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Producción de metabolitos</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Las bacterias intestinales producen compuestos como ácidos grasos de cadena
                      corta que tienen efectos antiinflamatorios sistémicos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    🧱
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Barrera intestinal</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Una microbiota equilibrada mantiene la integridad de la barrera intestinal,
                      previniendo la &quot;permeabilidad intestinal&quot; que puede desencadenar
                      inflamación cutánea.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    💊
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Absorción de nutrientes</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Los probióticos mejoran la absorción de vitaminas y minerales esenciales para
                      la piel y el cabello, como vitaminas B, biotina, zinc y hierro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-r-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-4xl">📊</div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">Dato interesante:</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Estudios han demostrado que las personas con afecciones cutáneas como acné,
                  rosácea y dermatitis atópica suelen tener una microbiota intestinal alterada,
                  conocida como <span className="font-semibold text-amber-700">disbiosis</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Probióticos y la piel */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              ✨ EVIDENCIA CIENTÍFICA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-rose-700 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Probióticos y salud de la piel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo que dice la investigación científica sobre el impacto de los probióticos en diferentes condiciones de la piel
            </p>
          </div>

          <div className="space-y-8">{/* Acné */}
            <div className="bg-white border-2 border-rose-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                    🌸
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Acné: Más que un problema superficial
                    </h3>
                    <p className="text-rose-100">Tratamiento desde adentro</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  El acné es una de las afecciones cutáneas más comunes, y la
                  investigación sugiere que los probióticos pueden ser un aliado
                  valioso en su tratamiento:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-rose-50 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Un estudio publicado en <em className="font-semibold">Dermatology and Therapy</em>{" "}
                      (2020) encontró que la suplementación con{" "}
                      <span className="font-bold text-rose-700">Lactobacillus rhamnosus SP1</span> durante 12 semanas <span className="font-bold">redujo
                      significativamente las lesiones inflamatorias</span> del acné.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-rose-50 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Investigaciones han demostrado que ciertas cepas probióticas
                      pueden <span className="font-bold text-rose-700">inhibir el crecimiento de{" "}
                      <em>Cutibacterium acnes</em></span>, la bacteria asociada con el
                      acné.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-rose-50 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Los probióticos ayudan a <span className="font-bold text-rose-700">reducir la inflamación sistémica</span>, un
                      factor clave en el desarrollo del acné.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dermatitis Atópica */}
            <div className="bg-white border-2 border-purple-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                    🦋
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Dermatitis atópica y eczema
                    </h3>
                    <p className="text-purple-100">Alivio para la piel sensible</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  La dermatitis atópica, también conocida como eczema, es una
                  afección inflamatoria crónica de la piel que afecta tanto a
                  niños como a adultos:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Un metaanálisis publicado en <em className="font-semibold">JAMA Pediatrics</em> (2016)
                      concluyó que los probióticos pueden <span className="font-bold text-purple-700">reducir la incidencia de
                      eczema en lactantes de alto riesgo</span> cuando se administran
                      durante el embarazo y la lactancia.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Cepas como <span className="font-bold text-purple-700"><em>Lactobacillus rhamnosus GG</em></span> y{" "}
                      <span className="font-bold text-purple-700"><em>Bifidobacterium lactis</em></span> han mostrado efectos
                      beneficiosos en la prevención y manejo del eczema.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Los probióticos pueden <span className="font-bold text-purple-700">modular la respuesta inmunitaria
                      excesiva</span> que caracteriza a esta condición.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rosácea */}
            <div className="bg-white border-2 border-pink-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                    🌺
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Rosácea: Calmando la inflamación
                    </h3>
                    <p className="text-pink-100">Reducción del enrojecimiento</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  La rosácea es una afección inflamatoria crónica que causa
                  enrojecimiento facial y, a veces, pústulas:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-pink-50 rounded-xl p-5">
                    <span className="flex-shrink-0 text-2xl">🔍</span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Estudios han encontrado una <span className="font-bold text-pink-700">correlación entre el sobrecrecimiento
                      bacteriano intestinal (SIBO) y la rosácea</span>.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-pink-50 rounded-xl p-5">
                    <span className="flex-shrink-0 text-2xl">✨</span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Un estudio observó que el <span className="font-bold text-pink-700">tratamiento de SIBO con probióticos
                      y prebióticos mejoró significativamente</span> los síntomas de la
                      rosácea en muchos pacientes.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-pink-50 rounded-xl p-5">
                    <span className="flex-shrink-0 text-2xl">💆</span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Los probióticos pueden ayudar a <span className="font-bold text-pink-700">reducir la inflamación y
                      mejorar la barrera cutánea</span> en personas con rosácea.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Envejecimiento */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                    ⏳
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Envejecimiento de la piel y protección UV
                    </h3>
                    <p className="text-amber-100">Juventud desde el interior</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Los probióticos también pueden desempeñar un papel en la
                  prevención del envejecimiento prematuro de la piel:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-2 border-amber-200">
                    <span className="flex-shrink-0 text-2xl">☀️</span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Investigaciones sugieren que ciertos probióticos pueden
                      <span className="font-bold text-amber-700"> proteger contra el daño UV</span> al reducir el estrés oxidativo.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-2 border-amber-200">
                    <span className="flex-shrink-0 text-2xl">💪</span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      Estudios han demostrado que los probióticos pueden
                      <span className="font-bold text-amber-700"> aumentar la producción de colágeno</span> y mejorar la hidratación de la piel.
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-2 border-amber-200">
                    <span className="flex-shrink-0 text-2xl">🧬</span>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      La fermentación bacteriana produce <span className="font-bold text-amber-700">péptidos bioactivos</span> que
                      pueden tener efectos antienvejecimiento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Probióticos y el cabello */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              💇‍♀️ SALUD CAPILAR
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Probióticos y salud capilar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La conexión invisible entre tu intestino y un cabello fuerte y brillante
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-xl border-4 border-white mb-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="hidden md:block flex-shrink-0 text-6xl">🌿</div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                Aunque la investigación sobre probióticos y cabello es más limitada
                que en el caso de la piel, los <span className="font-bold text-green-700">estudios emergentes son prometedores</span> y
                revelan mecanismos fascinantes de cómo nuestra microbiota intestinal
                influye en la salud capilar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                    💊
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Absorción de nutrientes esenciales
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Los probióticos mejoran la absorción de nutrientes cruciales
                  para el crecimiento del cabello, como <span className="font-bold text-green-700">biotina (vitamina B7),
                  hierro, zinc y vitaminas del complejo B</span>. La deficiencia de estos
                  nutrientes está directamente relacionada con la caída del
                  cabello y la falta de brillo.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                    🔥
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Reducción de inflamación
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  La inflamación crónica puede <span className="font-bold text-teal-700">dañar los folículos pilosos</span>. Al
                  regular la respuesta inmunitaria y reducir la inflamación
                  sistémica, los probióticos pueden crear un <span className="font-bold text-teal-700">ambiente más
                  saludable para el crecimiento</span> del cabello.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                    🧬
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Producción de biotina
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Algunas cepas probióticas, especialmente{" "}
                  <em className="font-semibold text-cyan-700">Lactobacillus plantarum</em> y{" "}
                  <em className="font-semibold text-cyan-700">Bifidobacterium</em>, pueden <span className="font-bold text-cyan-700">producir biotina de forma
                  natural</span> en el intestino. La biotina es esencial para la salud
                  del cabello, las uñas y la piel.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                    ⚖️
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Equilibrio hormonal
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  La microbiota intestinal juega un papel en el <span className="font-bold text-blue-700">metabolismo de las
                  hormonas</span>, incluidas aquellas que afectan el crecimiento del
                  cabello. Una microbiota equilibrada puede ayudar a <span className="font-bold text-blue-700">regular los
                  niveles hormonales</span> que influyen en la caída del cabello.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-r-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-4xl">⚠️</div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">Nota importante:</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Si bien los probióticos pueden apoyar la salud capilar, <span className="font-semibold">no son una cura mágica
                  para la calvicie genética o la alopecia areata</span>. Sin embargo, pueden ser un
                  complemento valioso en un enfoque integral para la salud del
                  cabello.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo incorporar probióticos */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              🥗 GUÍA PRÁCTICA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Cómo incorporar probióticos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              para mejorar la salud de tu piel y cabello
            </p>
          </div>

          {/* Alimentos fermentados */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                  🥗
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    1. Alimentos fermentados
                  </h3>
                  <p className="text-blue-100">La forma más natural y deliciosa</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-3xl p-8 shadow-xl border-2 border-blue-200">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                La forma más natural de obtener probióticos es a través de alimentos
                fermentados:
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors">
                  <span className="text-3xl flex-shrink-0">🥛</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Yogur natural</h4>
                    <p className="text-gray-700 text-sm">Rico en <em>Lactobacillus</em> y <em>Bifidobacterium</em></p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors">
                  <span className="text-3xl flex-shrink-0">🥤</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Kéfir</h4>
                    <p className="text-gray-700 text-sm">Contiene mayor diversidad de cepas probióticas que el yogur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors">
                  <span className="text-3xl flex-shrink-0">🥬</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Chucrut y kimchi</h4>
                    <p className="text-gray-700 text-sm">Fuentes excelentes de <em>Lactobacillus plantarum</em></p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors">
                  <span className="text-3xl flex-shrink-0">🍵</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Kombucha</h4>
                    <p className="text-gray-700 text-sm">Bebida fermentada rica en probióticos y antioxidantes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 hover:bg-blue-100 transition-colors">
                  <span className="text-3xl flex-shrink-0">🍲</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Miso y tempeh</h4>
                    <p className="text-gray-700 text-sm">Opciones fermentadas a base de soja</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-4xl">📥</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">🎁 Descarga Gratis: Kéfir Diary</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ¿Quieres hacer kéfir en casa? Descarga GRATIS tu bitácora de fermentación con plantillas de registro, instrucciones y 5 recetas deliciosas.
                    </p>
                    <Link
                      href="/recursos/kefir-diary"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Descargar Kéfir Diary Gratis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suplementos */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                  💊
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    2. Suplementos probióticos
                  </h3>
                  <p className="text-purple-100">Cuando la dieta no es suficiente</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-3xl p-8 shadow-xl border-2 border-purple-200">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Si decides tomar suplementos, considera lo siguiente:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    Busca productos con al menos <span className="font-bold text-purple-700">10-20 mil millones de UFC</span> (unidades
                    formadoras de colonias)
                  </p>
                </div>
                <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    Elige formulaciones con <span className="font-bold text-purple-700">múltiples cepas</span>, especialmente{" "}
                    <em>Lactobacillus rhamnosus</em>, <em>Lactobacillus acidophilus</em>,
                    y <em>Bifidobacterium</em>
                  </p>
                </div>
                <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    Verifica que el producto esté <span className="font-bold text-purple-700">refrigerado o tenga tecnología</span> de
                    liberación controlada
                  </p>
                </div>
                <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    <span className="font-bold text-purple-700">Consulta con un profesional</span> de la salud antes de comenzar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Probióticos tópicos */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-t-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                  🧴
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    3. Probióticos tópicos
                  </h3>
                  <p className="text-pink-100">Aplicación directa en la piel</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-b-3xl p-8 shadow-xl border-2 border-pink-200">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Además de los probióticos orales, existe un creciente mercado de
                productos tópicos:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-pink-50 rounded-xl p-5">
                  <span className="text-2xl flex-shrink-0">✨</span>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    <span className="font-bold text-pink-700">Cremas y sérums con probióticos vivos</span> pueden ayudar a equilibrar la
                    microbiota cutánea
                  </p>
                </div>
                <div className="flex items-start gap-4 bg-pink-50 rounded-xl p-5">
                  <span className="text-2xl flex-shrink-0">🌱</span>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    Los productos con <span className="font-bold text-pink-700">prebióticos</span> (alimento para las bacterias
                    beneficiosas) pueden apoyar la microbiota natural de la piel
                  </p>
                </div>
                <div className="flex items-start gap-4 bg-pink-50 rounded-xl p-5">
                  <span className="text-2xl flex-shrink-0">🧬</span>
                  <p className="text-gray-700 flex-1 leading-relaxed">
                    Los <span className="font-bold text-pink-700">postbióticos</span> (metabolitos producidos por probióticos) están
                    ganando popularidad en productos de cuidado de la piel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recomendaciones prácticas */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recomendaciones prácticas para maximizar los beneficios
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Combina probióticos con prebióticos
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los prebióticos (fibra soluble) alimentan a las bacterias
                beneficiosas. Incluye alimentos como ajo, cebolla, plátanos,
                espárragos y avena en tu dieta.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Sé consistente
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los beneficios de los probióticos se acumulan con el tiempo. Es
                importante mantener un consumo regular durante al menos 8-12
                semanas para ver resultados visibles en la piel y el cabello.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Mantén un estilo de vida saludable
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los probióticos funcionan mejor como parte de un estilo de vida
                integral que incluya una dieta equilibrada, hidratación
                adecuada, sueño suficiente y manejo del estrés.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Evita factores que dañan la microbiota
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Limita el consumo de antibióticos innecesarios, alcohol excesivo
                y alimentos ultraprocesados, ya que pueden alterar el equilibrio
                de tu microbiota intestinal.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                ✓ Personaliza tu enfoque
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lo que funciona para una persona puede no funcionar para otra.
                Observa cómo responde tu cuerpo y ajusta según sea necesario.
                Considera trabajar con un dermatólogo o nutricionista
                especializado.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-10 md:p-14 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                La revolución de la belleza holística
              </h2>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                La investigación sobre el eje intestino-piel está transformando
                nuestra comprensión de la salud cutánea y capilar. Los probióticos
                ofrecen un <span className="font-bold text-yellow-200">enfoque desde adentro hacia afuera</span> que complementa los
                tratamientos tópicos tradicionales.
              </p>
              <p className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                Si bien no son una solución mágica, los probióticos pueden ser una
                herramienta poderosa para mejorar la salud de la piel y el cabello,
                especialmente cuando se combinan con una <span className="font-bold text-yellow-200">dieta equilibrada, buena
                hidratación y cuidados apropiados</span>.
              </p>
              <div className="bg-yellow-400 text-gray-900 rounded-2xl p-8 shadow-xl">
                <p className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-3xl">💫</span>
                  El secreto de la belleza verdadera
                </p>
                <p className="text-lg leading-relaxed">
                  La belleza verdadera comienza desde el interior, y cuidar tu
                  microbiota intestinal puede ser el primer paso hacia una piel
                  radiante y un cabello saludable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-4xl">⚕️</div>
              <div>
                <p className="text-lg font-bold text-gray-900 mb-2">Consulta médica importante:</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Antes de iniciar cualquier suplementación con probióticos,
                  especialmente si tienes condiciones de salud preexistentes o estás
                  tomando medicamentos, <span className="font-bold text-red-700">consulta con un profesional de la salud</span> para
                  asegurarte de que sea seguro y apropiado para ti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Referencias */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Referencias científicas
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
            <li>
              Salem, I., Ramser, A., Isham, N., & Ghannoum, M. A. (2018). The
              Gut Microbiome as a Major Regulator of the Gut-Skin Axis.{" "}
              <em>Frontiers in Microbiology</em>, 9, 1459.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30042745/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/30042745/
              </a>
            </li>
            <li>
              Kober, M. M., & Bowe, W. P. (2015). The effect of probiotics on
              immune regulation, acne, and photoaging.{" "}
              <em>International Journal of Women&apos;s Dermatology</em>, 1(2),
              85-89.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/28491995/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/28491995/
              </a>
            </li>
            <li>
              Fabbrocini, G., et al. (2020). Supplementation with{" "}
              <em>Lactobacillus rhamnosus</em> SP1 normalises skin expression of
              genes implicated in insulin signalling and improves adult acne.{" "}
              <em>Dermatology and Therapy</em>, 10(5), 1107-1120.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32756288/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/32756288/
              </a>
            </li>
            <li>
              Foolad, N., et al. (2013). Effect of nutrient supplementation on
              atopic dermatitis in children: a systematic review of probiotics,
              prebiotics, formula, and fatty acids.{" "}
              <em>JAMA Dermatology</em>, 149(3), 350-355.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/23700152/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/23700152/
              </a>
            </li>
            <li>
              Parodi, A., et al. (2008). Small intestinal bacterial overgrowth
              in rosacea: clinical effectiveness of its eradication.{" "}
              <em>Clinical Gastroenterology and Hepatology</em>, 6(7), 759-764.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/18456568/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/18456568/
              </a>
            </li>
            <li>
              Bouilly-Gauthier, D., et al. (2010). Clinical evidence of benefits
              of a dietary supplement containing probiotic and carotenoids on
              ultraviolet-induced skin damage.{" "}
              <em>British Journal of Dermatology</em>, 163(3), 536-543.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/20346020/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/20346020/
              </a>
            </li>
            <li>
              Kim, J. E., et al. (2019). <em>Lactobacillus plantarum</em>{" "}
              HY7714 Protects against Photoaging by Improving Collagen
              Production in Hairless Mice. <em>Nutrients</em>, 11(11), 2529.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31652533/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/31652533/
              </a>
            </li>
            <li>
              Lee, D. E., et al. (2022). Oral intake of{" "}
              <em>Lactobacillus plantarum</em> promotes hair growth through
              upregulation of IGF-1 in C57BL/6 mice. <em>Food Science and Biotechnology</em>,
              31(6), 765-773.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/35600531/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/35600531/
              </a>
            </li>
            <li>
              Grice, E. A., & Segre, J. A. (2011). The skin microbiome.{" "}
              <em>Nature Reviews Microbiology</em>, 9(4), 244-253.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/21407241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/21407241/
              </a>
            </li>
            <li>
              Puebla-Barragan, S., & Reid, G. (2019). Forty-five-year evolution
              of probiotic therapy. <em>Microbial Cell</em>, 6(4), 184-196.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30963089/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://pubmed.ncbi.nlm.nih.gov/30963089/
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
              href="/blog/eje-intestino-cerebro"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Eje Intestino-Cerebro y Estado de Ánimo
              </h3>
              <p className="text-gray-600 text-sm">
                Descubre cómo los probióticos pueden mejorar tu salud mental
              </p>
            </Link>
            <Link
              href="/blog/salud-humana"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Más sobre Salud Humana
              </h3>
              <p className="text-gray-600 text-sm">
                Explora otros artículos sobre probióticos y salud humana
              </p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
