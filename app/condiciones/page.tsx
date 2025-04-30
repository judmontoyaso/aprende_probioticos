import Link from 'next/link';
import Image from 'next/image';
import { condicionesData, condicionSlugs } from './data';

export default function CondicionesIndexPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Condiciones de Salud y Probióticos</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Explora cómo los probióticos pueden ayudar con diferentes condiciones de salud, respaldado por evidencia científica.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {condicionSlugs.map((slug) => {
            const condicion = condicionesData[slug];
            return (
              <Link href={`/condiciones/${slug}`} key={slug} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div className="relative w-full h-48">
                    <Image 
                      src={condicion.imagenPrincipal.src} 
                      alt={condicion.imagenPrincipal.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                      {condicion.titulo}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {condicion.descripcion}
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
        
        {/* CTA Section */}
        <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Interesado en aprender más?</h2>
          <p className="text-gray-700 mb-6">
            Descubre cómo los probióticos pueden ser parte integral de tu régimen de salud para diferentes condiciones digestivas, inmunológicas y más.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/tipos" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
              Explorar tipos de probióticos
            </Link>
            <Link href="/como-elegir" className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
              Cómo elegir el probiótico adecuado
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 