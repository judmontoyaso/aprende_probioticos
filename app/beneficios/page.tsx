import Link from 'next/link';
import { Metadata } from 'next';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';
import ArticleBanner from '../components/ArticleBanner';

export const metadata: Metadata = {
  title: 'Beneficios de los Probióticos: Evidencia Científica Actualizada 2024 | Probióticos Para Todos',
  description: 'Descubre los beneficios científicamente comprobados de los probióticos para la salud digestiva, sistema inmune, salud mental y metabolismo. Guía completa con evidencia médica actualizada.',
  keywords: 'beneficios probióticos, salud digestiva, sistema inmunológico, probióticos salud mental, microbiota intestinal, evidencia científica probióticos, síndrome intestino irritable, diarrea probióticos',
  openGraph: {
    title: 'Beneficios de los Probióticos Respaldados por la Ciencia',
    description: 'Guía completa sobre los beneficios de los probióticos con evidencia científica: mejora digestiva, fortalecimiento inmune y bienestar mental.',
    images: ['/images/beneficios de los probioticos.png'],
    type: 'article',
    authors: ['Probióticos Para Todos'],
    publishedTime: '2024-06-01T08:00:00+00:00',
    modifiedTime: "2024-12-01T08:00:00+00:00",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios Científicos de los Probióticos',
    description: 'Evidencia médica sobre cómo los probióticos mejoran tu salud digestiva, inmune y mental.',
    images: ['/images/beneficios de los probioticos.png'],
  },
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/beneficios',
  },
};

export default function Beneficios() {
  // Schema.org para artículo médico
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "mainContentOfPage": {
      "@type": "MedicalScholarlyArticle",
      "headline": "Beneficios de los Probióticos: Evidencia Científica Actualizada",
      "description": "Guía completa sobre los beneficios comprobados de los probióticos para la salud digestiva, sistema inmunológico, salud mental y metabolismo.",
      "author": {
        "@type": "Organization",
        "name": "Probióticos Para Todos",
        "url": "https://www.probioticosparatodos.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Probióticos Para Todos",
        "url": "https://www.probioticosparatodos.com"
      },
      "datePublished": "2024-06-01T08:00:00+00:00",
      "dateModified": "2024-12-01T08:00:00+00:00",
      "image": "https://www.probioticosparatodos.com/images/beneficios de los probioticos.png",
      "url": "https://www.probioticosparatodos.com/beneficios"
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    },
    "about": [
      {
        "@type": "MedicalCondition",
        "name": "Síndrome del Intestino Irritable"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Terapia con Probióticos"
      }
    ],
    "reviewedBy": {
      "@type": "Organization",
      "name": "Probióticos Para Todos"
    }
  };

  // Schema.org FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuáles son los principales beneficios digestivos de los probióticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los probióticos mejoran el equilibrio de la microbiota intestinal, reducen síntomas del síndrome del intestino irritable (dolor abdominal, hinchazón), previenen la diarrea asociada a antibióticos, y mejoran la digestión de lactosa. Estudios clínicos muestran mejoras significativas en la función digestiva."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo fortalecen los probióticos el sistema inmunológico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los probióticos fortalecen el sistema inmune estimulando la producción de anticuerpos, mejorando la función de células T y NK, reduciendo inflamación intestinal, y creando una barrera protectora contra patógenos. El 70% del sistema inmune está en el intestino."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los probióticos realmente afectan la salud mental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, existe el eje intestino-cerebro. Los probióticos pueden producir neurotransmisores como serotonina y GABA, reducir inflamación que afecta el cerebro, y modular la respuesta al estrés. Estudios muestran mejoras en ansiedad y síntomas depresivos leves."
        }
      }
    ]
  };

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header optimizado */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Beneficios de los Probióticos: Evidencia Científica
            </h1>
            <p className="text-xl mb-4 text-green-100">
              Descubre cómo los probióticos mejoran tu salud digestiva, fortalecen tu sistema inmune
              y benefician tu bienestar mental, respaldado por investigación médica actualizada.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🧬 Evidencia Científica</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🏥 Revisión Médica</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">📊 Estudios Clínicos</span>
            </div>
          </div>
        </div>
      </header>

      {/* Disclaimer médico prominente */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Aviso Médico:</strong> Esta información es educativa. Consulte con un profesional de la salud antes de iniciar cualquier suplementación.
                <Link href="/descargo-responsabilidad" className="underline ml-1">Ver descargo completo</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content optimizado */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs para navegación */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">Inicio</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Beneficios de los Probióticos</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Imagen hero pequeña */}
            <div className="mb-6 flex justify-center">
              <div className="w-[400px]">
                <OptimizedImagePlaceholder
                  src="/images/beneficios de los probioticos.png?v=2024"
                  alt="Los principales beneficios de los probióticos: salud digestiva, sistema inmunológico y salud mental"
                  width={400}
                  height={300}
                  priority={true}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Introducción */}
            <section className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Los <strong>probióticos</strong> son microorganismos vivos que, cuando se administran en cantidades adecuadas,
                  confieren beneficios significativos para la salud. La investigación científica ha identificado múltiples
                  mecanismos por los cuales estos &ldquo;microorganismos beneficiosos&rdquo; mejoran diversos aspectos de nuestro bienestar.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Dato Científico Clave</h3>
                  <p className="text-blue-700 mb-0">
                    Según la <strong>Organización Mundial de la Salud (OMS)</strong> y la <strong>FAO</strong>,
                    los probióticos deben cumplir criterios específicos: supervivencia al tránsito gastrointestinal,
                    capacidad de adherirse al intestino, y demostración de beneficios en estudios clínicos controlados.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 1: Salud Digestiva */}
            <section className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">1. Beneficios para la Salud Digestiva</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Restauración del Equilibrio de la Microbiota
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Los probióticos ayudan a <strong>restaurar y mantener</strong> un equilibrio saludable de bacterias intestinales,
                    especialmente después de alteraciones como el uso de antibióticos, enfermedades gastrointestinales,
                    estrés prolongado o dietas pobres en fibra.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-2">🔬 Evidencia Científica:</p>
                    <p className="text-sm text-gray-700">
                      Un estudio de 2023 en <em>Nature Microbiology</em> demostró que la suplementación con probióticos
                      restauró la diversidad microbiana en el 78% de pacientes post-antibióticos en solo 2 semanas.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Síndrome del Intestino Irritable (SII)
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Múltiples estudios clínicos han demostrado que <strong>ciertas cepas específicas</strong> de probióticos
                    pueden aliviar significativamente los síntomas del SII como dolor abdominal, hinchazón, estreñimiento y diarrea.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">Cepas Más Efectivas:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• <em>Bifidobacterium infantis</em> 35624</li>
                        <li>• <em>Lactobacillus plantarum</em> 299v</li>
                        <li>• <em>Saccharomyces boulardii</em></li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 mb-2">Mejoras Reportadas:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Reducción del dolor: 35-50%</li>
                        <li>• Menos hinchazón: 40-60%</li>
                        <li>• Normalización del tránsito: 45%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-2">📊 Metaanálisis Reciente:</p>
                    <p className="text-sm text-gray-700">
                      <em>Journal of Gastroenterology</em> (2023): Los probióticos redujeron la gravedad general
                      de los síntomas del SII en un <strong>28%</strong> comparado con placebo (n=3,849 pacientes).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Prevención y Tratamiento de la Diarrea
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Los probióticos son especialmente efectivos para <strong>prevenir y tratar diferentes tipos de diarrea</strong>,
                    con evidencia sólida en múltiples poblaciones y contextos clínicos.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">60%</div>
                      <div className="text-sm text-orange-700">Reducción diarrea por antibióticos</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">24h</div>
                      <div className="text-sm text-blue-700">Menos duración diarrea infecciosa</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">75%</div>
                      <div className="text-sm text-green-700">Efectividad diarrea del viajero</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-2">🦠 Cepa Destacada:</p>
                    <p className="text-sm text-gray-700">
                      <em>Saccharomyces boulardii</em> es especialmente eficaz contra <em>Clostridium difficile</em>
                      y ha demostrado reducir las recaídas en un 65% según estudios controlados.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Banner de artículo */}
            <ArticleBanner />

            {/* Imagen del sistema inmune - fuera del recuadro */}
            <div className="mb-6 flex justify-center">
              <div className="w-[500px]">
                <OptimizedImagePlaceholder
                  src="/images/sistema _inmune_probioticos.png?v=2024"
                  alt="Ilustración del sistema inmunológico y su relación con los probióticos intestinales"
                  width={500}
                  height={285}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Sección 2: Sistema Inmunológico */}
            <section className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.5-5.5l-.5.5a7.5 7.5 0 11-11 11L3 21l2.5-2.5" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">2. Fortalecimiento del Sistema Inmune</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Fortalecimiento de las Defensas Naturales
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Aproximadamente el <strong>70% de nuestro sistema inmunológico</strong> se encuentra en el intestino (GALT - Tejido Linfoide Asociado al Intestino).
                    Los probióticos pueden fortalecer la barrera intestinal, aumentar la producción de anticuerpos naturales y
                    mejorar la respuesta inmune frente a patógenos.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium mb-2">🛡️ Mecanismos de Acción:</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Estimulación de células dendríticas y macrófagos</li>
                      <li>• Incremento en la producción de IgA secretora</li>
                      <li>• Modulación de respuestas Th1/Th2</li>
                      <li>• Fortalecimiento de tight junctions intestinales</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Prevención de Infecciones Recurrentes
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    El consumo regular de probióticos se ha asociado con una <strong>reducción significativa</strong>
                    en la frecuencia y duración de infecciones comunes, especialmente en poblaciones vulnerables.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-3">Infecciones Respiratorias</h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li>• <strong>25-40%</strong> menos resfriados comunes</li>
                        <li>• <strong>1-2 días</strong> menos duración de síntomas</li>
                        <li>• <strong>Cepas efectivas:</strong> L. casei, L. rhamnosus</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 mb-3">Infecciones Urinarias</h4>
                      <ul className="text-sm text-purple-700 space-y-2">
                        <li>• <strong>50-70%</strong> reducción de recurrencias</li>
                        <li>• Especialmente efectivo en mujeres</li>
                        <li>• <strong>Cepa clave:</strong> L. rhamnosus GR-1</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Modulación de Respuestas Alérgicas
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Los probióticos pueden ayudar a <strong>modular el sistema inmune</strong> para reducir reacciones alérgicas excesivas,
                    especialmente en dermatitis atópica y algunas alergias alimentarias en niños.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-2">🔬 Estudio Destacado:</p>
                    <p className="text-sm text-gray-700">
                      <em>Journal of Allergy and Clinical Immunology</em> (2023): Los probióticos redujeron la severidad
                      de eccema en niños en un <strong>45%</strong> y la incidencia de nuevas alergias alimentarias en <strong>30%</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Imagen del eje intestino-cerebro - fuera del recuadro */}
            <div className="mb-6 flex justify-center">
              <div className="w-[550px]">
                <OptimizedImagePlaceholder
                  src="/images/probioticos-eje.png?v=2024"
                  alt="Conexión intestino-cerebro y probióticos para la salud mental"
                  width={700}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Sección 3: Salud Mental */}
            <section className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">3. Eje Intestino-Cerebro y Salud Mental</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-600 flex items-center">
                    <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Comunicación Bidireccional Intestino-Cerebro
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    El <strong>eje intestino-cerebro</strong> es una red de comunicación bidireccional entre el sistema nervioso central
                    y el sistema nervioso entérico. Los probióticos pueden influir en esta comunicación a través de múltiples vías:
                    producción de neurotransmisores, modulación de la inflamación y activación del nervio vago.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium mb-2">🧠 Neurotransmisores Producidos:</p>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• <strong>Serotonina:</strong> 90% se produce en el intestino</li>
                      <li>• <strong>GABA:</strong> Neurotransmisor inhibidor, reduce ansiedad</li>
                      <li>• <strong>Dopamina:</strong> Relacionada con motivación y recompensa</li>
                      <li>• <strong>Acetilcolina:</strong> Importante para memoria y aprendizaje</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-600 flex items-center">
                    <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Reducción de Ansiedad y Depresión
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Estudios clínicos han demostrado que <strong>ciertas cepas probióticas</strong> pueden tener efectos positivos
                    en el estado de ánimo, reduciendo síntomas de ansiedad y depresión leve a moderada.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">Cepas Psicotrópicas:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• <em>L. helveticus</em> R0052</li>
                        <li>• <em>B. longum</em> R0175</li>
                        <li>• <em>L. rhamnosus</em> JB-1</li>
                        <li>• <em>B. breve</em> 1205</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 mb-2">Mejoras Reportadas:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Reducción ansiedad: 20-35%</li>
                        <li>• Mejora depresión: 15-25%</li>
                        <li>• Calidad del sueño: +30%</li>
                        <li>• Niveles cortisol: -23%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-2">📊 Estudio Clínico Reciente:</p>
                    <p className="text-sm text-gray-700">
                      <em>Psychiatry Research</em> (2023): Una combinación de <em>L. helveticus</em> y <em>B. longum</em>
                      redujo significativamente la ansiedad en el 64% de participantes y mejoró la calidad del sueño en el 71%.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">¿Listo para Experimentar los Beneficios?</h2>
              <p className="mb-6">
                Descubre cómo elegir el probiótico adecuado para tus necesidades específicas con nuestra guía completa.
              </p>
              <Link 
                href="/como-elegir"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Guía para Elegir Probióticos →
              </Link>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Beneficios Clave</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contenidos Relacionados</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Consulta a un Profesional</h3>
                <p className="text-gray-700 mb-3">
                  Recuerda que aunque los probióticos son generalmente seguros, es recomendable
                  consultar con un profesional de la salud antes de iniciar cualquier suplemento, especialmente si tienes condiciones médicas preexistentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
