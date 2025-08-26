import Link from 'next/link';
import Image from 'next/image';
import { recetasData, recetaSlugs } from './data';

export default function RecetasIndexPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-green-600 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Recetas Probióticas</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Descubre deliciosas recetas caseras para incorporar probióticos naturales a tu dieta diaria.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recetaSlugs.map((slug) => {
            const receta = recetasData[slug];
            return (
              <Link href={`/recetas/${slug}`} key={slug} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                  <div className="relative w-full h-48">
                    <Image 
                      src={receta.imagenPrincipal.src} 
                      alt={receta.imagenPrincipal.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-tl-md">
                      {receta.dificultad}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                      {receta.titulo}
                    </h2>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {receta.tiempoPreparacion}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {receta.porciones} porciones
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {receta.descripcion}
                    </p>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      Ver receta
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
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Por qué preparar alimentos probióticos en casa?</h2>
          <div className="prose prose-green max-w-none">
            <p>Los alimentos fermentados caseros ofrecen varias ventajas sobre los productos comerciales:</p>
            <ul>
              <li>Mayor cantidad de bacterias vivas y activas al no someterse a procesos industriales</li>
              <li>Control total sobre los ingredientes, sin conservantes ni aditivos artificiales</li>
              <li>Ahorro económico significativo a largo plazo</li>
              <li>Reducción de envases y menor impacto ambiental</li>
              <li>Conexión con tradiciones culinarias ancestrales</li>
            </ul>
            <p>Nuestras recetas están diseñadas para ser accesibles incluso para principiantes, con instrucciones paso a paso y consejos para asegurar resultados exitosos.</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Interesado en los beneficios de estos alimentos?</h2>
          <p className="text-gray-700 mb-6">
            Explora más sobre los diferentes tipos de probióticos presentes en estas recetas y cómo pueden beneficiar tu salud.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/tipos" className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
              Conocer los tipos de probióticos
            </Link>
            <Link href="/condiciones" className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
              Ver beneficios para la salud
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 