import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de Probióticos | Investigación y Análisis Científicos',
  description: 'Descubre el mundo de los probióticos con nuestros análisis científicos profundos. Investigación sobre salud digestiva, microbioma, nutrición animal y agricultura sostenible.',
  keywords: 'blog probióticos, investigación científica, microbioma humano, salud digestiva, probióticos animales, agricultura probiótica, estudios científicos',
  openGraph: {
    title: 'Blog de Probióticos - Investigación Científica',
    description: 'Análisis profundos y estudios sobre probióticos, microbioma y salud.',
    images: ['/images/blog-og.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://probioticosparatodos.com/blog',
  },
};

interface ArticleCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogPage() {
  const articlesContent: ArticleCard[] = [
    {
      title: 'Probióticos en la salud humana: de la microbiota a la dieta',
      description: 'Un análisis integral del papel fundamental de los probióticos en la salud digestiva, inmunológica y general del ser humano, incluyendo definiciones oficiales y aplicaciones prácticas.',
      imageSrc: '/images/blog-salud.png',
      imageAlt: 'Probióticos y salud humana',
      href: '/blog/salud-humana',
      category: 'Salud Humana',
      date: '10 de mayo, 2023',
      readTime: '15 min'
    },
    {
      title: 'Enciclopedia de alimentos fermentados',
      description: 'Un recorrido completo por los alimentos fermentados tradicionales y modernos, sus beneficios probióticos y métodos de preparación casera y comercial.',
      imageSrc: '/images/probiotic_foods.png',
      imageAlt: 'Variedad de alimentos fermentados',
      href: '/blog/alimentos-fermentados',
      category: 'Alimentación',
      date: '13 de agosto, 2023',
      readTime: '12 min',
      featured: true
    },
    {
      title: 'Nutrición animal con probióticos: guía completa',
      description: 'Análisis integral del uso de probióticos en mascotas y ganadería para optimizar la salud y el rendimiento animal, con protocolos específicos para diferentes especies.',
      imageSrc: '/images/blog-animales.png',
      imageAlt: 'Animales saludables con alimentación probiótica',
      href: '/blog/nutricion-animal',
      category: 'Nutrición Animal',
      date: '22 de junio, 2023',
      readTime: '18 min'
    },
    {
      title: 'Agricultura sostenible: probióticos para el cultivo',
      description: 'Cómo los probióticos revolucionan los cultivos mediante biofertilizantes y mejoradores de suelo basados en microorganismos, incrementando rendimiento y sostenibilidad.',
      imageSrc: '/images/blog-agricultura.png',
      imageAlt: 'Campo agrícola tratado con probióticos',
      href: '/blog/agricultura-sostenible',
      category: 'Agricultura',
      date: '5 de julio, 2023',
      readTime: '20 min'
    }
  ];

  return (
    <div className="min-h-screen bg-[#eef8f2]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#163660] via-[#275b9e] to-[#4071b4] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-[#c4faa4] text-[#163660] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Basado en Evidencia Científica
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Blog de <span className="text-[#7fbfa6]">Probióticos</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Investigación profunda y análisis científicos sobre el fascinante mundo de los microorganismos beneficiosos
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-blue-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Artículos Respaldados por Investigación
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Análisis Científicos Profundos
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Información Verificada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163660] mb-4">Artículo Destacado</h2>
            <div className="w-24 h-1 bg-[#48a537] mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            {articlesContent.filter(article => article.featured).map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c4ccd7]/30">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#48a537] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center text-[#7fbfa6] text-sm mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {article.date}
                      <span className="mx-3">•</span>
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {article.readTime} de lectura
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#163660] mb-4">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {article.description}
                    </p>
                    <Link 
                      href={article.href}
                      className="inline-flex items-center bg-[#163660] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#275b9e] transition-all duration-300 transform hover:scale-105"
                    >
                      Leer artículo completo
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 bg-[#eef8f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163660] mb-4">Investigación Científica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestros análisis profundos sobre diferentes aspectos de los probióticos y su impacto en la salud
            </p>
            <div className="w-24 h-1 bg-[#48a537] mx-auto mt-6"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesContent.filter(article => !article.featured).map((article, index) => (
                <article 
                  key={index}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Link href={article.href}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#48a537] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center text-[#7fbfa6] text-sm mb-3">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {article.date}
                      <span className="mx-2">•</span>
                      {article.readTime}
                    </div>
                    
                    <Link href={article.href} className="block mb-3">
                      <h3 className="text-xl font-bold text-[#163660] group-hover:text-[#275b9e] transition-colors leading-tight">
                        {article.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    
                    <Link 
                      href={article.href}
                      className="inline-flex items-center text-[#48a537] font-semibold hover:text-[#163660] transition-colors"
                    >
                      Leer más
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#eef8f2] to-[#c4faa4]/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#163660] mb-6 text-center">
                ¿Qué encontrarás en nuestro blog?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-6">
                    <div className="bg-[#48a537] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H8a1 1 0 000 2h4a1 1 0 100-2H8.771z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#163660] mb-2">Investigación Científica</h3>
                      <p className="text-gray-600">Análisis profundos basados en estudios peer-reviewed y evidencia científica actualizada.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-[#4071b4] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#163660] mb-2">Información Verificada</h3>
                      <p className="text-gray-600">Contenido revisado por expertos con referencias científicas completas y actualizadas.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-6">
                    <div className="bg-[#7fbfa6] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#163660] mb-2">Aplicaciones Prácticas</h3>
                      <p className="text-gray-600">Guías detalladas sobre implementación en salud humana, animal y agricultura.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#275b9e] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#163660] mb-2">Recursos Confiables</h3>
                      <p className="text-gray-600">Material educativo respaldado por organizaciones internacionales como FAO/OMS.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 bg-[#c4ccd7]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#163660] mb-4">Explora más contenido</h2>
            <p className="text-gray-600">Descubre otros recursos sobre probióticos en nuestro sitio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/tipos" className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#7fbfa6] text-white p-3 rounded-lg mx-auto mb-4 w-fit group-hover:bg-[#48a537] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#163660] group-hover:text-[#48a537] transition-colors">Tipos de Probióticos</h3>
              <p className="text-sm text-gray-600 mt-2">Guía de cepas y especies</p>
            </Link>
            
            <Link href="/beneficios" className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#4071b4] text-white p-3 rounded-lg mx-auto mb-4 w-fit group-hover:bg-[#275b9e] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#163660] group-hover:text-[#275b9e] transition-colors">Beneficios para la Salud</h3>
              <p className="text-sm text-gray-600 mt-2">Aplicaciones terapéuticas</p>
            </Link>
            
            <Link href="/recetas" className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#48a537] text-white p-3 rounded-lg mx-auto mb-4 w-fit group-hover:bg-[#c4faa4] group-hover:text-[#163660] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#163660] group-hover:text-[#48a537] transition-colors">Recetas Probióticas</h3>
              <p className="text-sm text-gray-600 mt-2">Preparaciones caseras</p>
            </Link>
            
            <Link href="/como-elegir" className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#275b9e] text-white p-3 rounded-lg mx-auto mb-4 w-fit group-hover:bg-[#163660] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#163660] group-hover:text-[#275b9e] transition-colors">Cómo Elegir</h3>
              <p className="text-sm text-gray-600 mt-2">Guía de compra</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 