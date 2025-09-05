import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';

export const metadata: Metadata = {
  title: 'Beneficios de los Probióticos: Evidencia Científica Actualizada 2024 | Probióticos Para Todos',
  description: 'Descubre los beneficios científicamente comprobados de los probióticos para la salud digestiva, sistema inmune, salud mental y metabolismo. Guía completa con evidencia médica actualizada.',
  keywords: 'beneficios probióticos, salud digestiva, sistema inmunológico, probióticos salud mental, microbiota intestinal, evidencia científica probióticos, síndrome intestino irritable, diarrea probióticos',
  openGraph: {
    title: 'Beneficios de los Probióticos Respaldados por la Ciencia',
    description: 'Guía completa sobre los beneficios de los probióticos con evidencia científica: mejora digestiva, fortalecimiento inmune y bienestar mental.',
    images: ['/images/beneficios-probioticos-salud.png'],
    type: 'article',
    authors: ['Probióticos Para Todos'],
    publishedTime: '2024-06-01T08:00:00+00:00',
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios Científicos de los Probióticos',
    description: 'Evidencia médica sobre cómo los probióticos mejoran tu salud digestiva, inmune y mental.',
    images: ['/images/beneficios-probioticos-salud.png'],
  },
  alternates: {
    canonical: 'https://www.probioticosparatodos.com/beneficios',
  },
};

export default function Beneficios() {
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
      "dateModified": new Date().toISOString(),
    },
    "audience": {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Beneficios de los Probióticos</h1>
            <p className="text-xl text-green-100 mb-8">
              Descubre todos los beneficios científicamente comprobados de los probióticos para tu salud
            </p>
            <OptimizedImagePlaceholder 
              src="/images/beneficios-probioticos-salud.png"
              alt="Beneficios de los probióticos para la salud digestiva, inmune y mental"
              width={800}
              height={400}
              className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
              priority={true}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Beneficios Digestivos</h2>
            <p className="text-lg text-gray-600 mb-6">
              Los probióticos ofrecen múltiples beneficios para la salud digestiva respaldados por evidencia científica.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Principales Beneficios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mejora del equilibrio de la microbiota intestinal</li>
                <li>Reducción de síntomas del síndrome del intestino irritable</li>
                <li>Prevención de diarrea asociada a antibióticos</li>
                <li>Mejora de la digestión de lactosa</li>
                <li>Fortalecimiento de la barrera intestinal</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Beneficios para el Sistema Inmune</h2>
            <p className="text-lg text-gray-600 mb-6">
              El 70% del sistema inmune se encuentra en el intestino, por lo que los probióticos tienen un impacto significativo.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Efectos Inmunológicos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Estimulación de la producción de anticuerpos</li>
                <li>Mejora de la función de células T y NK</li>
                <li>Reducción de la inflamación intestinal</li>
                <li>Protección contra patógenos</li>
                <li>Modulación de respuestas alérgicas</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Beneficios para la Salud Mental</h2>
            <p className="text-lg text-gray-600 mb-6">
              El eje intestino-cerebro permite que los probióticos influyan en la salud mental y el bienestar emocional.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Efectos Neurológicos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Producción de neurotransmisores (serotonina, GABA)</li>
                <li>Reducción de la ansiedad y síntomas depresivos</li>
                <li>Mejora de la respuesta al estrés</li>
                <li>Modulación de la inflamación que afecta el cerebro</li>
                <li>Mejora de la función cognitiva</li>
              </ul>
            </div>
          </section>

          <div className="text-center mt-12">
            <Link 
              href="/como-elegir"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Descubre Cómo Elegir el Mejor Probiótico
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
