import Link from "next/link";
import { Metadata } from 'next';
import OptimizedImagePlaceholder from './components/OptimizedImagePlaceholder';

export const metadata: Metadata = {
  title: 'Probióticos: Tu Guía Completa para la Salud Digestiva | Probióticos Para Todos',
  description: 'Descubre todo sobre los probióticos: beneficios científicamente comprobados, tipos de bacterias beneficiosas, alimentos fermentados, suplementos y cómo elegir el mejor probiótico para tu salud digestiva, inmunológica y mental.',
  keywords: 'probióticos, salud digestiva, bacterias beneficiosas, alimentos fermentados, suplementos probióticos, microbiota intestinal, sistema inmunológico, Lactobacillus, Bifidobacterium, yogur, kéfir, chucrut, salud mental, eje intestino-cerebro',
  openGraph: {
    title: 'Probióticos: Guía Completa para tu Salud Digestiva',
    description: 'Aprende sobre los probióticos con nuestra guía científica: beneficios comprobados, mejores tipos de bacterias, alimentos fermentados naturales y cómo elegir suplementos efectivos.',
    url: 'https://probioticosparatodos.com',
    siteName: 'Probióticos Para Todos',
    images: [
      {
        url: 'https://probioticosparatodos.com/images/probiotics-hero.png',
        width: 1200,
        height: 630,
        alt: 'Sistema digestivo humano con bacterias probióticas beneficiosas para la salud intestinal',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probióticos: Tu Guía Completa para la Salud Digestiva',
    description: 'Descubre los beneficios científicamente comprobados de los probióticos para tu salud digestiva, inmunológica y mental.',
    images: ['https://probioticosparatodos.com/images/probiotics-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://probioticosparatodos.com',
  },
};

// Schema.org para FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo es el mejor momento para tomar probióticos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muchos expertos recomiendan tomarlos con el estómago vacío, 30 minutos antes de las comidas, aunque algunos probióticos funcionan mejor con alimentos. Consulta las instrucciones específicas del producto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los probióticos son seguros para todos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para la mayoría de las personas sanas, los probióticos son seguros. Sin embargo, personas con sistemas inmunológicos comprometidos o condiciones médicas graves deben consultar a un profesional de la salud antes de usarlos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo se tarda en ver resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los efectos pueden variar, pero muchas personas notan mejoras digestivas en 1-2 semanas. Los beneficios para el sistema inmune pueden tardar más tiempo en manifestarse, típicamente 4-8 semanas."
      }
    }
  ]
};

// Schema.org para las imágenes principales (SEO optimizado)
const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject", 
  "name": "Probióticos para la Salud Digestiva",
  "description": "Sistema digestivo humano con bacterias probióticas beneficiosas Lactobacillus y Bifidobacterium",
  "url": "https://probioticosparatodos.com/images/probiotics-hero.png",
  "width": "1200",
  "height": "630",
  "encodingFormat": "image/png",
  "thumbnail": {
    "@type": "ImageObject",
    "url": "https://probioticosparatodos.com/images/probiotics-hero.png",
    "width": "1200", 
    "height": "630"
  },
  "author": {
    "@type": "Organization",
    "name": "Probióticos Para Todos"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Probióticos Para Todos"
  },
  "license": "https://probioticosparatodos.com/terminos-servicio"
};

function AdSpace({ position, title }: { position: string; title: string }) {
  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-4 text-center text-gray-500 rounded my-4">
      <div className="text-sm font-medium mb-1">📢 {title}</div>
      <div className="text-xs">Google AdSense - {position}</div>
      <div className="text-xs mt-1 text-gray-400">Espacio publicitario optimizado</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      
      <div className="hidden md:block container mx-auto px-4 pt-4">
        <AdSpace position="top-desktop" title="Banner Superior Escritorio (728x90)" />
      </div>
      
      <div className="block md:hidden container mx-auto px-4 pt-4">
        <AdSpace position="mobile-banner" title="Banner Móvil (320x50)" />
      </div>

      <header className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Probióticos Para Todos</h1>
            <p className="text-xl text-green-100 mb-8">Tu guía completa sobre probióticos y salud intestinal basada en ciencia</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/que-son" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                ¿Qué son los probióticos?
              </Link>
              <Link href="/beneficios" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Ver beneficios
              </Link>
            </div>
            
            {/* Disclaimer médico prominente */}
            <div className="mt-8 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 p-4 rounded-lg text-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <strong>Aviso Médico Importante</strong>
              </div>
              <p>
                Este sitio web es únicamente informativo y educativo. No proporciona consejo médico. 
                Consulte siempre con un profesional de la salud antes de tomar probióticos o realizar cambios en su dieta.
              </p>
              <Link href="/descargo-responsabilidad" className="underline hover:text-yellow-900 font-medium">
                Leer descargo completo →
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        <AdSpace position="in-article" title="Banner Artículo (300x250)" />
      </div>
      
      <main className="container mx-auto px-4 py-12">
        {/* Introducción optimizada para SEO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué son los Probióticos?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Los probióticos son microorganismos vivos que proporcionan beneficios para la salud cuando se consumen en cantidades adecuadas. 
            Estas &ldquo;bacterias buenas&rdquo; ayudan a mantener un equilibrio saludable en tu microbiota intestinal.
          </p>
          
          {/* Imagen hero optimizada */}
          <div className="mb-8 max-w-4xl mx-auto">
            <OptimizedImagePlaceholder 
              src="/images/probiotics-hero.png"
              alt="Sistema digestivo saludable con probióticos - bacterias beneficiosas Lactobacillus y Bifidobacterium para la salud intestinal"
              width={1200}
              height={630}
              priority={true}
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl max-w-3xl mx-auto">
            <p className="text-gray-700">
              <strong className="text-green-700">Dato importante:</strong> Tu intestino alberga más de 100 billones de bacterias, 
              y mantener su equilibrio es clave para tu salud digestiva, inmunológica y mental.
            </p>
          </div>
          
          {/* Información adicional para SEO */}
          <div className="mt-8 max-w-4xl mx-auto text-left">
            <p className="text-gray-700 mb-4">
              La <strong>microbiota intestinal</strong> juega un papel crucial en múltiples aspectos de nuestra salud. 
              Los probióticos, principalmente <em>Lactobacillus</em> y <em>Bifidobacterium</em>, han sido extensamente 
              estudiados por sus efectos beneficiosos en la digestión, el sistema inmunológico y incluso la salud mental 
              a través del <strong>eje intestino-cerebro</strong>.
            </p>
            <p className="text-gray-700">
              Según la <strong>Organización Mundial de la Salud (OMS)</strong> y la <strong>FAO</strong>, 
              los probióticos deben cumplir criterios específicos para ser considerados beneficiosos, 
              incluyendo la supervivencia al tránsito intestinal y la demostración de efectos positivos en estudios clínicos controlados.
            </p>
          </div>
        </div>

        {/* Beneficios principales con placeholders de imagen */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Beneficios Científicamente Comprobados</h2>
          
          {/* Imagen de beneficios optimizada */}
          <div className="mb-12 max-w-3xl mx-auto">
            <OptimizedImagePlaceholder 
              src="/images/beneficios-probioticos-salud.png"
              alt="Infografía completa de beneficios de los probióticos: mejora salud digestiva, fortalece sistema inmunológico y apoya bienestar mental"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🦠</div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Salud Digestiva</h3>
              <p className="text-gray-700 mb-4">Mejoran la digestión, reducen la inflamación intestinal y ayudan con problemas como el síndrome del intestino irritable.</p>
              <Link href="/beneficios#digestiva" className="text-green-600 font-medium hover:underline">
                Leer más →
              </Link>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Sistema Inmune</h3>
              <p className="text-gray-700 mb-4">Fortalecen las defensas naturales del cuerpo y pueden reducir la duración de infecciones respiratorias.</p>
              <Link href="/beneficios#inmune" className="text-blue-600 font-medium hover:underline">
                Leer más →
              </Link>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Salud Mental</h3>
              <p className="text-gray-700 mb-4">A través del eje intestino-cerebro, pueden influir positivamente en el estado de ánimo y reducir la ansiedad.</p>
              <Link href="/beneficios#mental" className="text-purple-600 font-medium hover:underline">
                Leer más →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="my-12">
          <AdSpace position="content" title="Banner Contenido Principal (970x280)" />
        </div>

        {/* Sección de tipos de probióticos con placeholder de imagen */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tipos de Probióticos Más Estudiados</h2>
          
          {/* Imagen de tipos de probióticos optimizada */}
          <div className="mb-8 max-w-2xl mx-auto">
            <OptimizedImagePlaceholder 
              src="/images/tipos-probioticos-lactobacillus-bifidobacterium.png"
              alt="Ilustración científica comparativa de bacterias probióticas Lactobacillus y Bifidobacterium bajo microscopio"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Lactobacillus</h3>
              <p className="text-gray-700 mb-4">
                Las cepas más comunes incluyen L. acidophilus, L. rhamnosus y L. casei. 
                Son especialmente efectivos para la salud digestiva y pueden ayudar con la intolerancia a la lactosa.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Beneficios principales:</strong> Digestión, sistema inmune, salud vaginal
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Bifidobacterium</h3>
              <p className="text-gray-700 mb-4">
                Incluye B. bifidum, B. longum y B. breve. Son predominantes en el colon y 
                son cruciales para la síntesis de vitaminas y la digestión de fibra.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Beneficios principales:</strong> Salud del colon, síntesis de vitaminas, digestión de fibra
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/tipos" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Ver todos los tipos →
            </Link>
          </div>
        </div>

        {/* Sección de alimentos vs suplementos con placeholders */}
        <div className="mb-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">¿Alimentos o Suplementos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                🥛 Alimentos Fermentados
              </h3>
              
              {/* Imagen de alimentos fermentados optimizada */}
              <div className="mb-4">
                <OptimizedImagePlaceholder 
                  src="/images/alimentos-fermentados-yogur-kefir.png"
                  alt="Variedad completa de alimentos fermentados ricos en probióticos naturales: yogur griego, kéfir, chucrut, kimchi y kombucha"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Yogur:</strong> Rico en Lactobacillus y Bifidobacterium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Kéfir:</strong> Contiene más de 30 cepas diferentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Chucrut:</strong> Fermentado tradicional con múltiples beneficios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Kimchi:</strong> Probióticos + vegetales nutritivos</span>
                </li>
              </ul>
              <Link href="/alimentos-fermentados" className="inline-block mt-4 text-green-600 font-medium hover:underline">
                Ver todos los alimentos →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
                💊 Suplementos
              </h3>
              
              {/* Imagen de suplementos optimizada */}
              <div className="mb-4">
                <OptimizedImagePlaceholder 
                  src="/images/suplementos-probioticos-capsulas.png"
                  alt="Suplementos probióticos en cápsulas mostrando diferentes cepas bacterianas y información nutricional CFU"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Concentraciones más altas (miles de millones de UFC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Cepas específicas para condiciones particulares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Mayor estabilidad y vida útil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Dosificación precisa y consistente</span>
                </li>
              </ul>
              <Link href="/como-elegir" className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                Guía para elegir suplementos →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Navegación de secciones principales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explora Nuestro Contenido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/beneficios" className="block group">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200 group-hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3 text-green-700">Beneficios</h3>
                <p className="text-gray-700 mb-4">Descubre todos los beneficios científicamente comprobados de los probióticos para tu salud.</p>
                <div className="text-green-600 font-medium">Ver más →</div>
              </div>
            </Link>

            <Link href="/tipos" className="block group">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 group-hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Tipos</h3>
                <p className="text-gray-700 mb-4">Conoce los diferentes tipos de probióticos y sus aplicaciones específicas.</p>
                <div className="text-blue-600 font-medium">Explorar →</div>
              </div>
            </Link>

            <Link href="/como-elegir" className="block group">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 group-hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-purple-700">Cómo Elegir</h3>
                <p className="text-gray-700 mb-4">Guía completa para elegir el probiótico ideal según tus necesidades.</p>
                <div className="text-purple-600 font-medium">Guía →</div>
              </div>
            </Link>

            <Link href="/alimentos-fermentados" className="block group">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 group-hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🥛</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-700">Alimentos Fermentados</h3>
                <p className="text-gray-700 mb-4">Descubre alimentos naturales ricos en probióticos y cómo prepararlos.</p>
                <div className="text-orange-600 font-medium">Ver más →</div>
              </div>
            </Link>

            <Link href="/condiciones" className="block group">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 group-hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-3 text-red-700">Condiciones Específicas</h3>
                <p className="text-gray-700 mb-4">Probióticos recomendados para condiciones de salud específicas.</p>
                <div className="text-red-600 font-medium">Ver más →</div>
              </div>
            </Link>

            <Link href="/recetas" className="block group">
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 group-hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-700">Recetas</h3>
                <p className="text-gray-700 mb-4">Recetas deliciosas con alimentos probióticos para toda la familia.</p>
                <div className="text-yellow-600 font-medium">Ver más →</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Sección de preguntas frecuentes */}
        <div className="mb-16 bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Preguntas Frecuentes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">¿Cuándo es el mejor momento para tomar probióticos?</h3>
              <p className="text-gray-700">
                Muchos expertos recomiendan tomarlos con el estómago vacío, 30 minutos antes de las comidas, 
                aunque algunos probióticos funcionan mejor con alimentos. Consulta las instrucciones específicas del producto.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">¿Los probióticos son seguros para todos?</h3>
              <p className="text-gray-700">
                Para la mayoría de las personas sanas, los probióticos son seguros. Sin embargo, personas con sistemas 
                inmunológicos comprometidos o condiciones médicas graves deben consultar a un profesional de la salud antes de usarlos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">¿Cuánto tiempo se tarda en ver resultados?</h3>
              <p className="text-gray-700">
                Los efectos pueden variar, pero muchas personas notan mejoras digestivas en 1-2 semanas. 
                Los beneficios para el sistema inmune pueden tardar más tiempo en manifestarse, típicamente 4-8 semanas.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/que-son" className="text-green-600 font-medium hover:underline">
              Ver más preguntas frecuentes →
            </Link>
          </div>
        </div>

        {/* Call to action principal */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Comienza Tu Viaje Hacia Una Mejor Salud Intestinal</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Descubre cómo los probióticos pueden transformar tu bienestar digestivo, fortalecer tu sistema inmune 
              y mejorar tu calidad de vida con información basada en ciencia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/beneficios" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Conoce todos los beneficios
              </Link>
              <Link href="/como-elegir" className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-green-400">
                Guía para elegir
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de recursos adicionales */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recursos Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">📚 Artículos Científicos</h3>
              <p className="text-gray-700 mb-4">
                Accede a artículos detallados basados en investigación científica sobre probióticos, 
                microbioma y salud intestinal.
              </p>
              <Link href="/recursos/articulos" className="text-green-600 font-medium hover:underline">
                Ver artículos →
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">🔍 Referencias Científicas</h3>
              <p className="text-gray-700 mb-4">
                Toda nuestra información está respaldada por estudios científicos y fuentes confiables. 
                Consulta nuestras referencias.
              </p>
              <Link href="/referencias" className="text-green-600 font-medium hover:underline">
                Ver referencias →
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 z-20 w-72">
        <AdSpace position="sidebar" title="Banner Lateral (300x600)" />
      </div>
      
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <AdSpace position="footer" title="Banner Footer (728x90)" />
          <div className="text-center mt-8 text-gray-600">
            <p>&copy; 2025 Probióticos Para Todos</p>
            <div className="mt-4 space-x-6">
              <Link href="/politica-privacidad" className="text-green-600 hover:text-green-700">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-green-600 hover:text-green-700">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
