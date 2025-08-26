import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import AdBanner from '../../components/AdBanner';

export const metadata: Metadata = {
  title: 'Artículos sobre Probióticos | Información Científica y Práctica',
  description: 'Artículos detallados y científicamente respaldados sobre probióticos, sus aplicaciones en salud humana, nutrición animal, agricultura y alimentos fermentados.',
  keywords: 'probióticos, artículos, microbioma, salud intestinal, probióticos para animales, agricultura sostenible, alimentos fermentados',
};

interface ArticleCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  category: string;
  date: string;
}

export default function ArticulosPage() {
  const articlesContent: ArticleCard[] = [
    {
      title: 'Probióticos en la salud humana: de la microbiota a la dieta',
      description: 'Un análisis integral del papel fundamental de los probióticos en la salud digestiva, inmunológica y general del ser humano, incluyendo definiciones oficiales y aplicaciones prácticas.',
      imageSrc: '/images/microbiota-salud.png',
      imageAlt: 'Microbiota intestinal humana',
      href: '/recursos/articulos/salud-humana',
      category: 'Salud Humana',
      date: '10 de mayo, 2023'
    },
    {
      title: 'Nutrición animal con probióticos: guía completa',
      description: 'Análisis integral del uso de probióticos en mascotas y ganadería para optimizar la salud y el rendimiento animal, con protocolos específicos para diferentes especies.',
      imageSrc: '/images/nutricion-animal.png',
      imageAlt: 'Animales saludables con alimentación probiótica',
      href: '/recursos/articulos/nutricion-animal',
      category: 'Nutrición Animal',
      date: '22 de junio, 2023'
    },
    {
      title: 'Agricultura sostenible: probióticos para el cultivo',
      description: 'Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos, incrementando rendimiento y sostenibilidad.',
      imageSrc: '/images/agricultura-probioticos.png',
      imageAlt: 'Campo agrícola tratado con probióticos',
      href: '/recursos/articulos/agricultura-sostenible',
      category: 'Agricultura',
      date: '5 de julio, 2023'
    },
    {
      title: 'Enciclopedia de alimentos fermentados',
      description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación casera y comercial.',
      imageSrc: '/images/alimentos-fermentados.png',
      imageAlt: 'Variedad de alimentos fermentados',
      href: '/recursos/articulos/alimentos-fermentados',
      category: 'Alimentación',
      date: '13 de agosto, 2023'
    }
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Artículos sobre Probióticos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Información fundamentada científicamente para comprender a fondo la ciencia y aplicaciones 
            de los probióticos en diferentes ámbitos.
          </p>
        </div>
      </header>

      {/* Ad Banner Top (temporarily disabled) */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="top" /> */}
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">Artículos destacados</h2>
            <div className="grid grid-cols-1 gap-8 mb-10">
              {articlesContent.map((article, index) => (
                <article 
                  key={index}
                  className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row h-full"
                >
                  <Link href={article.href} className="md:w-2/5 relative">
                    <div className="relative h-64 md:h-full w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                      <Image
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-0 right-0 bg-green-600 text-white text-sm font-medium py-1 px-3 m-4 rounded">
                        {article.category}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6 md:w-3/5 flex flex-col">
                    <div className="text-gray-500 text-sm mb-2">{article.date}</div>
                    <Link href={article.href} className="block mb-3 group-hover:text-green-600 transition-colors">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {article.description}
                    </p>
                    <Link 
                      href={article.href}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Leer artículo completo
                      <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Ad Banner Content (temporarily disabled) */}
            <div className="my-10">
              {/* <AdBanner position="content" /> */}
            </div>
            
            {/* Introduction Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">¿Qué son nuestros artículos?</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Nuestros artículos son contenidos extensos y detallados que funcionan como referencia 
                  principal en cada área temática relacionada con los probióticos. Estos artículos:
                </p>
                <ul>
                  <li>Ofrecen una visión completa y en profundidad sobre cada tema</li>
                  <li>Están respaldados por investigación científica actualizada y referencias verificables</li>
                  <li>Conectan con artículos más específicos a través de enlaces internos</li>
                  <li>Proporcionan un punto de partida ideal para explorar cada tema en detalle</li>
                </ul>
                <p>
                  Diseñados como recursos educativos valiosos tanto para principiantes como para personas con 
                  conocimientos avanzados, nuestros artículos comprenden desde los fundamentos básicos hasta 
                  las aplicaciones más especializadas de los probióticos.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-6">
              {/* <AdBanner position="sidebar" className="mb-6" /> */}
              
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Temas populares</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <Link href="/recursos/articulos/salud-humana" className="hover:text-green-600 transition-colors">
                      Probióticos y salud digestiva
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <Link href="/recursos/articulos/alimentos-fermentados" className="hover:text-green-600 transition-colors">
                      Alimentos fermentados caseros
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <Link href="/recursos/articulos/nutricion-animal" className="hover:text-green-600 transition-colors">
                      Probióticos para mascotas
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <Link href="/recursos/articulos/agricultura-sostenible" className="hover:text-green-600 transition-colors">
                      Biofertilizantes probióticos
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-600 text-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Guía gratuita</h3>
                <p className="text-sm mb-4">Descarga nuestra guía completa de introducción a los probióticos con consejos prácticos.</p>
                <Link href="/recursos/guias/introduccion-probioticos" className="block text-center bg-white text-green-600 font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                  Descargar guía gratuita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner Bottom (temporarily disabled) */}
      <div className="container mx-auto px-4 py-6">
        {/* <AdBanner position="bottom" /> */}
      </div>
    </>
  );
} 