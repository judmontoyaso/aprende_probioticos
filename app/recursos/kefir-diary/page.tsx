import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kéfir Diary GRATIS: Bitácora de Fermentación + 5 Recetas | PDF Descargable",
  description:
    "Descarga GRATIS el Kéfir Diary: bitácora imprimible para registrar tus lotes, instrucciones de fermentación y 5 recetas deliciosas con kéfir (bizcocho, arepas, marinados). ¡Comienza tu aventura de fermentación hoy!",
  keywords: [
    "kéfir diary gratis",
    "bitácora de fermentación",
    "registro de lotes de kéfir",
    "cómo hacer kéfir en casa",
    "recetas con kéfir",
    "bizcocho de kéfir",
    "arepas con kéfir",
    "pollo marinado en kéfir",
    "fermentación casera",
    "granos de kéfir",
    "diario de kéfir imprimible",
    "probióticos caseros"
  ],
  openGraph: {
    title: "Kéfir Diary GRATIS: Bitácora + 5 Recetas con Kéfir",
    description:
      "Descarga tu bitácora de fermentación con plantillas de registro, instrucciones y 5 recetas exclusivas. ¡100% GRATIS!",
    type: "website",
    url: "https://probioticosparatodos.com/recursos/kefir-diary",
    images: ["/images/kefir-diary-preview.jpg"],
  },
  alternates: {
    canonical: "https://probioticosparatodos.com/recursos/kefir-diary",
  },
};

export default function KefirDiaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-xl animate-pulse">
              📥 DESCARGA GRATUITA
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
              Kéfir Diary
            </h1>
            <p className="text-2xl md:text-3xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tu Bitácora de Fermentación + 5 Recetas Deliciosas
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Registra cada lote, experimenta con recetas únicas y domina la fermentación casera
            </p>
            <a
              href="/kefir_diary.pdf"
              download="Kefir-Diary-Bitacora-Fermentacion.pdf"
              className="inline-flex items-center gap-3 bg-yellow-400 text-green-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Descargar Bitácora GRATIS (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            ¿Qué incluye el Kéfir Diary?
          </h2>
          <p className="text-xl text-gray-600">Todo lo que necesitas para comenzar tu viaje con el kéfir</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl mb-5 shadow-lg">
              �
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Plantillas de Registro</h3>
            <p className="text-gray-700 leading-relaxed">
              Bitácora imprimible para anotar cada lote: tipo de leche, cantidad de granos, temperatura, tiempo de fermentación y resultados.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl mb-5 shadow-lg">
              📖
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Instrucciones Paso a Paso</h3>
            <p className="text-gray-700 leading-relaxed">
              Guía completa de cómo fermentar granos de kéfir: desde la preparación hasta la cata, con consejos para observar y ajustar.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl mb-5 shadow-lg">
              🍰
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">5 Recetas Deliciosas</h3>
            <p className="text-gray-700 leading-relaxed">
              Bizcocho de kéfir y limón, ceviche de mango, pollo marinado, aderezo estilo César y arepas de maíz con kéfir.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl mb-5 shadow-lg">
              ⭐
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Sistema de Calificación</h3>
            <p className="text-gray-700 leading-relaxed">
              Evalúa y puntúa cada lote según acidez, cremosidad y efervescencia. Identifica rápidamente tus mejores fermentaciones.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-3xl mb-5 shadow-lg">
              �
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Notas de Observación</h3>
            <p className="text-gray-700 leading-relaxed">
              Espacio para anotar burbujas, separación de suero, olor y cualquier detalle durante el proceso de fermentación.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white text-3xl mb-5 shadow-lg">
              ✍️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Espacio para Tus Recetas</h3>
            <p className="text-gray-700 leading-relaxed">
              3 páginas en blanco para que escribas y organices tus propias creaciones con kéfir. ¡Tu cocina es tu laboratorio!
            </p>
          </div>
        </div>

        {/* CTA destacado */}
        <div className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-3xl p-10 md:p-14 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            ¡Bienvenido a Tu Aventura con el Kéfir!
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Descarga tu bitácora gratuita y comienza a experimentar, aprender y disfrutar del proceso de fermentación
          </p>
          <a
            href="/kefir_diary.pdf"
            download="Kefir-Diary-Bitacora-Fermentacion.pdf"
            className="inline-flex items-center gap-3 bg-yellow-400 text-green-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Descargar Ahora GRATIS
          </a>
          <p className="text-green-100 mt-4 text-sm">No hay errores, solo experimentos. ¡Feliz fermentación!</p>
        </div>
      </section>

      {/* Por qué kéfir */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
              ¿Por qué hacer kéfir en casa?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  💰
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Económico</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ahorra dinero haciendo tu propio kéfir casero en lugar de comprarlo. Una inversión inicial mínima con beneficios continuos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  🌿
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sin aditivos, conservantes ni ingredientes artificiales. Tú controlas exactamente qué entra en tu kéfir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  🧬
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rico en Probióticos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    El kéfir casero contiene miles de millones de bacterias beneficiosas vivas que apoyan tu salud digestiva.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">
                  🎨
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalizable</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Crea sabores únicos, ajusta la intensidad de fermentación y experimenta con ingredientes a tu gusto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                  ♻️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sostenible</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reduce el desperdicio de envases plásticos y contribuye a un estilo de vida más ecológico.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                  👨‍👩‍👧‍👦
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Para Toda la Familia</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Una actividad educativa y divertida que puede involucrar a toda la familia en hábitos saludables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos relacionados */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Aprende Más Sobre Probióticos
          </h2>
          <p className="text-xl text-gray-600">Explora nuestros artículos y guías completas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link
            href="/blog/alimentos-fermentados"
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="relative h-48">
              <Image
                src="/images/probiotic_foods.png"
                alt="Alimentos fermentados"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Enciclopedia de Alimentos Fermentados
              </h3>
              <p className="text-gray-600">
                Descubre todos los alimentos fermentados y sus beneficios probióticos
              </p>
            </div>
          </Link>

          <Link
            href="/que-son"
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-8xl">🦠</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                ¿Qué son los Probióticos?
              </h3>
              <p className="text-gray-600">
                Aprende todo sobre los probióticos y cómo funcionan en tu cuerpo
              </p>
            </div>
          </Link>

          <Link
            href="/blog/salud-humana"
            className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="relative h-48">
              <Image
                src="/images/blog-salud.png"
                alt="Probióticos y salud"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                Probióticos y Salud Humana
              </h3>
              <p className="text-gray-600">
                Descubre el impacto de los probióticos en tu salud general
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-2xl text-green-100 mb-10">
            Descarga tu guía gratuita y empieza a hacer kéfir delicioso hoy mismo
          </p>
          <a
            href="/kefir_diary.pdf"
            download="Kefir-Diary-Guia-Completa.pdf"
            className="inline-flex items-center gap-3 bg-yellow-400 text-green-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Descargar Kéfir Diary GRATIS
          </a>
        </div>
      </section>
    </div>
  );
}
