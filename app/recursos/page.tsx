import Link from 'next/link';
import Image from 'next/image';
import AdBanner from '../components/AdBanner';

interface ResourceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function RecursosPage() {
  const recursosContent: ResourceCard[] = [
    {
      title: 'Artículos',
      description: 'Artículos detallados y científicamente respaldados sobre probióticos, sus aplicaciones y beneficios en diversas áreas.',
      imageSrc: '/images/articulos-probioticos.png',
      imageAlt: 'Artículos sobre probióticos',
      href: '/recursos/articulos'
    },
    {
      title: 'Recetas y Fermentados',
      description: 'Recetas e instrucciones para preparar tus propios alimentos fermentados ricos en probióticos.',
      imageSrc: '/images/recetas-fermentados.png',
      imageAlt: 'Alimentos fermentados caseros',
      href: '/recetas'
    },
    {
      title: 'Referencias',
      description: 'Compilación de estudios científicos, organismos oficiales y recursos académicos sobre probióticos y microbioma.',
      imageSrc: '/images/referencias-cientificas.png',
      imageAlt: 'Referencias científicas sobre probióticos',
      href: '/referencias'
    }
  ];

  const articleCards: ResourceCard[] = [
    {
      title: 'Probióticos en la salud humana',
      description: 'Un análisis integral del papel fundamental de los probióticos en la salud digestiva, inmunológica y general del ser humano.',
      imageSrc: '/images/microbiota-salud.png',
      imageAlt: 'Microbiota intestinal humana',
      href: '/recursos/articulos/salud-humana'
    },
    {
      title: 'Nutrición animal con probióticos',
      description: 'Guía completa sobre el uso de probióticos en mascotas y ganadería para optimizar la salud y el rendimiento animal.',
      imageSrc: '/images/nutricion-animal.png',
      imageAlt: 'Animales saludables con alimentación probiótica',
      href: '/recursos/articulos/nutricion-animal'
    },
    {
      title: 'Agricultura sostenible',
      description: 'Cómo los probióticos revolucionan los cultivos: biofertilizantes y mejoradores de suelo basados en microorganismos.',
      imageSrc: '/images/agricultura-probioticos.png',
      imageAlt: 'Campo agrícola tratado con probióticos',
      href: '/recursos/articulos/agricultura-sostenible'
    },
    {
      title: 'Alimentos fermentados',
      description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios y métodos de preparación.',
      imageSrc: '/images/alimentos-fermentados.png',
      imageAlt: 'Variedad de alimentos fermentados',
      href: '/recursos/articulos/alimentos-fermentados'
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Recursos Prácticos sobre Probióticos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Información fundamentada científicamente y recursos prácticos para comprender y aplicar 
            los beneficios de los probióticos en diferentes ámbitos.
          </p>
        </div>
      </header>
      
      {/* Ad Banner Top */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="top" />
      </div>
      
      {/* Categorías de Recursos */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Categorías de Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recursosContent.map((recurso, index) => (
              <Link 
                href={recurso.href}
                key={index}
                className="group block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image
                    src={recurso.imageSrc}
                    alt={recurso.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                    {recurso.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {recurso.description}
                  </p>
                  <div className="flex items-center text-green-600 font-medium">
                    Ver recursos
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Section - Articles */}
      <div className="bg-green-50 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Artículos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Explora nuestros artículos extensos y detallados con información científicamente respaldada sobre probióticos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articleCards.map((article, index) => (
              <Link 
                href={article.href}
                key={index}
                className="group block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    Leer artículo
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link href="/recursos/articulos" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
              Ver todos los artículos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Ad Banner Content */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner position="content" />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">            
            {/* Introduction Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Recursos prácticos para cada necesidad</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Nuestra sección de recursos prácticos está diseñada para ayudarte a encontrar información específica
                  y aplicable a tus necesidades particulares. Estos recursos:
                </p>
                <ul>
                  <li>Ofrecen información detallada sobre aplicaciones específicas de los probióticos</li>
                  <li>Están respaldados por investigación científica actualizada</li>
                  <li>Proporcionan guías prácticas para incorporar probióticos en tu vida diaria</li>
                  <li>Incluyen tanto contenido básico como recursos avanzados para diferentes niveles de conocimiento</li>
                </ul>
                <p>
                  Explora las diferentes categorías para encontrar información relevante para tus intereses específicos, 
                  ya sea mejorar tu salud digestiva, conocer más sobre cepas específicas, o aprender a preparar 
                  tus propios alimentos fermentados.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              <AdBanner position="sidebar" className="mb-6" />
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">¿Por qué confiar en nosotros?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Información basada en evidencia científica y estudios recientes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Contenido actualizado regularmente según los últimos avances
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Referencias a fuentes científicas verificables
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Enfoque práctico para aplicar la ciencia en la vida diaria
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ad Banner Bottom */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" />
      </div>
    </>
  );
} 