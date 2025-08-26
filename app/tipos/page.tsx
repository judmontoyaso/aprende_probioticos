import Link from 'next/link';
import Image from 'next/image';
import { tiposData, tipoSlugs } from './data';

export default function TiposIndexPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Tipos de Probióticos</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Descubre los diferentes géneros y especies de probióticos, sus características únicas y beneficios específicos para la salud.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipoSlugs.map((slug) => {
            const tipo = tiposData[slug];
            return (
              <Link href={`/tipos/${slug}`} key={slug} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div className="relative w-full h-48">
                    <Image 
                      src={tipo.imagenPrincipal.src} 
                      alt={tipo.imagenPrincipal.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                      {tipo.titulo}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {tipo.descripcion}
                    </p>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      Leer más
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* Introduction Section */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Por qué es importante conocer los diferentes tipos de probióticos?</h2>
          <div className="prose prose-green max-w-none">
            <p>Los probióticos no son todos iguales. Cada género, especie y cepa tiene propiedades únicas y puede ofrecer beneficios específicos para diferentes aspectos de la salud.</p>
            <p>Comprender los diferentes tipos de probióticos te ayudará a:</p>
            <ul>
              <li>Elegir el suplemento probiótico más adecuado para tus necesidades específicas</li>
              <li>Interpretar mejor las etiquetas de los productos</li>
              <li>Diversificar tu consumo de alimentos fermentados para obtener una variedad de beneficios</li>
              <li>Entender la investigación científica sobre probióticos y sus aplicaciones</li>
            </ul>
            <p>Explora nuestra biblioteca de artículos sobre los diferentes géneros probióticos más estudiados y sus aplicaciones en la salud humana.</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Interesado en aplicaciones prácticas?</h2>
          <p className="text-gray-700 mb-6">
            Descubre cómo incorporar estos probióticos a tu dieta mediante alimentos fermentados y preparaciones caseras.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/recetas" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
              Explorar recetas probióticas
            </Link>
            <Link href="/condiciones" className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
              Ver condiciones de salud
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 