import Link from "next/link";
import { Metadata } from 'next';
import Image from 'next/image';
import OptimizedImagePlaceholder from './components/OptimizedImagePlaceholder';
import { HorizontalBanner, ImageBannerProfessional, ArticleBanner } from './components/AdBanners';

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
        url: 'https://probioticosparatodos.com/images/new hero.png',
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
    images: ['https://probioticosparatodos.com/images/new hero.png'],
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
  "description": "Nueva imagen hero - personas y mascotas saludables con beneficios de los probióticos",
  "url": "https://probioticosparatodos.com/images/new hero.png",
  "width": "1200",
  "height": "630",
  "encodingFormat": "image/png",
  "thumbnail": {
    "@type": "ImageObject",
    "url": "https://probioticosparatodos.com/images/new hero.png",
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
      
      <div className="block md:hidden container mx-auto px-4 pt-4">
        <HorizontalBanner className="max-w-full" alt="Banner horizontal Probióticos Para Todos - Móvil" />
      </div>

      <header className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-400/15 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo principal de Probióticos Para Todos */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-110"></div>
              <Image 
                src="/images/logo_transparente.png"
                alt="Probióticos Para Todos - Logo oficial con bacterias probióticas beneficiosas"
                width={300}
                height={300}
                priority={true}
                className="w-64 h-64 mx-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Probióticos Para Todos
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tu guía completa sobre probióticos y salud intestinal basada en ciencia
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/que-son" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ¿Qué son los probióticos?
              </Link>
              <Link href="/beneficios" className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Ver beneficios
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-green-200 text-sm mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Información respaldada científicamente
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Contenido actualizado regularmente
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Guías prácticas y fáciles de seguir
              </div>
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
        <ArticleBanner className="max-w-4xl mx-auto" alt="Banner promocional artículos científicos sobre probióticos" />
      </div>
      
      <main className="container mx-auto px-4 py-12">
        {/* Introducción optimizada para SEO */}
        <div className="text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl opacity-50 blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ¿Qué son los Probióticos?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Los probióticos son microorganismos vivos que proporcionan beneficios para la salud cuando se consumen en cantidades adecuadas. 
              Estas &ldquo;bacterias buenas&rdquo; ayudan a mantener un equilibrio saludable en tu microbiota intestinal.
            </p>
          </div>
          
          {/* Nueva imagen hero */}
          <div className="mb-12 max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <OptimizedImagePlaceholder 
              src="/images/new hero.png"
              alt="Nueva imagen hero de probióticos - personas y mascotas saludables con beneficios de la salud digestiva"
              width={800}
              height={400}
              priority={true}
              className="relative w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl max-w-3xl mx-auto border border-green-100 shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg">
                <strong className="text-green-700">Dato importante:</strong> Tu intestino alberga más de 100 billones de bacterias, 
                y mantener su equilibrio es clave para tu salud digestiva, inmunológica y mental.
              </p>
            </div>
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

        {/* Beneficios principales con imagen centralizada */}
        <div className="mb-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl opacity-30"></div>
          
          <div className="relative py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Beneficios Científicamente Comprobados
            </h2>
            
            {/* Imagen de beneficios - infografía original más pequeña */}
            <div className="mb-12 max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg blur-xl opacity-20"></div>
              <OptimizedImagePlaceholder 
                src="/images/beneficios de los probioticos.png"
                alt="Los principales beneficios de los probióticos: salud digestiva, sistema inmunológico y salud mental"
                width={500}
                height={650}
                className="relative w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-200">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="text-4xl">🦠</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Salud Digestiva</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Mejoran la digestión, reducen la inflamación intestinal y ayudan con problemas como el síndrome del intestino irritable.</p>
                <Link href="/beneficios#digestiva" className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Leer más →
                </Link>
              </div>
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-200">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="text-4xl">🛡️</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Sistema Inmune</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Fortalecen las defensas naturales del cuerpo y pueden reducir la duración de infecciones respiratorias.</p>
                <Link href="/beneficios#inmune" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Leer más →
                </Link>
              </div>
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-200">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="text-4xl">🧠</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Salud Mental</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">A través del eje intestino-cerebro, pueden influir positivamente en el estado de ánimo y reducir la ansiedad.</p>
                <Link href="/beneficios#mental" className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Leer más →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-8">
          <ImageBannerProfessional className="max-w-5xl mx-auto" alt="Banner imagen Probióticos Para Todos - Ciencia, bienestar y salud digestiva" />
        </div>

        {/* Sección de tipos de probióticos con imagen centrada y mejorada */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tipos de Probióticos Más Estudiados</h2>
          
          {/* Nueva imagen comparativa de Lactobacillus vs Bifidobacterium - tamaño reducido */}
          <div className="mb-12 flex justify-center">
            <div className="w-[600px]">
              <OptimizedImagePlaceholder 
                src="/images/lactobacillus-vs-bifidu.png"
                alt="Comparación visual entre bacterias probióticas Lactobacillus y Bifidobacterium - diferencias y beneficios"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <div className="text-2xl">🦠</div>
                </div>
                <h3 className="text-xl font-semibold text-green-700">Lactobacillus</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Las cepas más comunes incluyen L. acidophilus, L. rhamnosus y L. casei. 
                Son especialmente efectivos para la salud digestiva y pueden ayudar con la intolerancia a la lactosa.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong className="text-green-700">Beneficios principales:</strong> Digestión, sistema inmune, salud vaginal
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <div className="text-2xl">🔬</div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700">Bifidobacterium</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Incluye B. bifidum, B. longum y B. breve. Son predominantes en el colon y 
                son cruciales para la síntesis de vitaminas y la digestión de fibra.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <strong className="text-blue-700">Beneficios principales:</strong> Salud del colon, síntesis de vitaminas, digestión de fibra
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/tipos" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
              Ver todos los tipos →
            </Link>
          </div>
        </div>

        {/* Sección de alimentos vs suplementos con imágenes homogéneas */}
        <div className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Alimentos o Suplementos?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-green-700 flex items-center">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  🥛
                </span>
                Alimentos Fermentados
              </h3>
              
              {/* Nueva imagen de alimentos probióticos */}
              <div className="mb-6">
                <OptimizedImagePlaceholder 
                  src="/images/probiotic_foods.png"
                  alt="Variedad completa de alimentos probióticos: yogur, kéfir, chucrut, kimchi, kombucha y otros alimentos fermentados ricos en bacterias beneficiosas"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className="flex items-start p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Yogur:</span>
                    <span className="text-sm block text-gray-600">Rico en Lactobacillus y Bifidobacterium</span>
                  </div>
                </li>
                <li className="flex items-start p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Kéfir:</span>
                    <span className="text-sm block text-gray-600">Contiene más de 30 cepas diferentes</span>
                  </div>
                </li>
                <li className="flex items-start p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Chucrut:</span>
                    <span className="text-sm block text-gray-600">Fermentado tradicional con múltiples beneficios</span>
                  </div>
                </li>
                <li className="flex items-start p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Kimchi:</span>
                    <span className="text-sm block text-gray-600">Probióticos + vegetales nutritivos</span>
                  </div>
                </li>
              </ul>
              <Link href="/alimentos-fermentados" className="inline-block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Ver todos los alimentos →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-blue-700 flex items-center">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  💊
                </span>
                Suplementos
              </h3>
              
              {/* Nueva imagen de suplementos probióticos */}
              <div className="mb-6">
                <OptimizedImagePlaceholder 
                  src="/images/suplementos.png"
                  alt="Suplementos probióticos en cápsulas y tabletas mostrando diferentes presentaciones y concentraciones CFU"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Alta Concentración:</span>
                    <span className="text-sm block text-gray-600">Miles de millones de UFC</span>
                  </div>
                </li>
                <li className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Cepas Específicas:</span>
                    <span className="text-sm block text-gray-600">Para condiciones particulares</span>
                  </div>
                </li>
                <li className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Mayor Estabilidad:</span>
                    <span className="text-sm block text-gray-600">Vida útil prolongada</span>
                  </div>
                </li>
                <li className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 mr-3 mt-1 text-lg">✓</span>
                  <div>
                    <span className="font-semibold">Dosificación Precisa:</span>
                    <span className="text-sm block text-gray-600">Cantidad consistente</span>
                  </div>
                </li>
              </ul>
              <Link href="/como-elegir" className="inline-block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Guía para elegir suplementos →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Navegación de secciones principales con diseño mejorado */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explora Nuestro Contenido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/beneficios" className="block group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 group-hover:shadow-xl transition-all group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">✨</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Beneficios</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Descubre todos los beneficios científicamente comprobados de los probióticos para tu salud.</p>
                <div className="text-green-600 font-medium flex items-center">
                  Ver más 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/tipos" className="block group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 group-hover:shadow-xl transition-all group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🔬</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Tipos</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Conoce los diferentes tipos de probióticos y sus aplicaciones específicas.</p>
                <div className="text-blue-600 font-medium flex items-center">
                  Explorar 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/como-elegir" className="block group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 group-hover:shadow-xl transition-all group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🎯</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Cómo Elegir</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Guía completa para elegir el probiótico ideal según tus necesidades.</p>
                <div className="text-purple-600 font-medium flex items-center">
                  Guía 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/alimentos-fermentados" className="block group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 group-hover:shadow-xl transition-all group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🥛</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-orange-700">Alimentos Fermentados</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Descubre alimentos naturales ricos en probióticos y cómo prepararlos.</p>
                <div className="text-orange-600 font-medium flex items-center">
                  Ver más 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/beneficios" className="block group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 group-hover:shadow-xl transition-all group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🏥</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-red-700">Beneficios para la Salud</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Probióticos recomendados para diferentes beneficios de salud.</p>
                <div className="text-red-600 font-medium flex items-center">
                  Ver más 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/recetas" className="block group">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 group-hover:shadow-xl transition-all group-hover:scale-105 h-full">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🍽️</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Recetas</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">Recetas deliciosas con alimentos probióticos para toda la familia.</p>
                <div className="text-yellow-600 font-medium flex items-center">
                  Ver más 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Centro de Conocimiento</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📚</span>
                <h3 className="text-xl font-semibold text-gray-800">Centro de Conocimiento Probiótico</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explora nuestro extenso repositorio de artículos especializados sobre probióticos, microbioma 
                y salud digestiva. Contenido respaldado por investigación científica actual y escrito por expertos.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Agricultura sostenible con probióticos
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Nutrición animal y veterinaria
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Salud humana y microbioma
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Alimentos fermentados y biotecnología
                </div>
              </div>
              <Link href="/blog" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200 group">
                <span>Explorar conocimiento científico</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-to-br from-gray-50 to-green-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Enhanced brand section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Probióticos Para Todos
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tu fuente confiable de información científica sobre probióticos, salud digestiva y bienestar general.
              </p>
            </div>
            
            {/* Links section */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link href="/politica-privacidad" className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium">
                Política de Privacidad
              </Link>
              <Link href="/cookies" className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium">
                Política de Cookies
              </Link>
              <Link href="/terminos-servicio" className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium">
                Términos de Servicio
              </Link>
              <Link href="/contacto" className="text-green-600 hover:text-green-700 transition-colors duration-200 font-medium">
                Contacto
              </Link>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 mb-2">
                &copy; 2024-2025 Probióticos Para Todos. Todos los derechos reservados.
              </p>
              <p className="text-sm text-gray-500">
                Contenido educativo basado en evidencia científica sobre probióticos y salud digestiva
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
