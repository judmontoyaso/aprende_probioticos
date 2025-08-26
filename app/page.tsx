import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Probióticos: Tu Guía Completa para la Salud Digestiva | Probióticos Nicho',
  description: 'Descubre los beneficios de los probióticos para la salud digestiva, inmunológica y mental. Guía completa sobre suplementos, alimentos fermentados y cómo elegir los mejores probióticos.',
  keywords: 'probióticos, salud digestiva, bacterias beneficiosas, alimentos fermentados, suplementos probióticos, microbiota intestinal, sistema inmunológico',
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
      <div className="hidden md:block container mx-auto px-4 pt-4">
        <AdSpace position="top-desktop" title="Banner Superior Escritorio (728x90)" />
      </div>
      
      <div className="block md:hidden container mx-auto px-4 pt-4">
        <AdSpace position="mobile-banner" title="Banner Móvil (320x50)" />
      </div>

      <header className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Probióticos Para Todos</h1>
          <p className="text-xl text-green-100">Tu guía completa sobre probióticos y salud intestinal</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4">
        <AdSpace position="in-article" title="Banner Artículo (300x250)" />
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">¿Qué son los Probióticos?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Los probióticos son microorganismos vivos que proporcionan beneficios para la salud cuando se consumen en cantidades adecuadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">🦠</div>
            <h3 className="text-xl font-semibold mb-3">Salud Digestiva</h3>
            <p className="text-gray-700">Mejoran la función intestinal y la digestión</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">Sistema Inmune</h3>
            <p className="text-gray-700">Fortalecen las defensas naturales</p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-semibold mb-3">Bienestar General</h3>
            <p className="text-gray-700">Contribuyen al equilibrio y salud integral</p>
          </div>
        </div>
        
        <div className="my-12">
          <AdSpace position="content" title="Banner Contenido Principal (970x280)" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/beneficios" className="block group">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200 group-hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
              <p className="text-gray-700 mb-4">Descubre todos los beneficios de los probióticos</p>
              <div className="text-green-600 font-medium">Ver más →</div>
            </div>
          </Link>

          <Link href="/tipos" className="block group">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 group-hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">Tipos</h3>
              <p className="text-gray-700 mb-4">Conoce los diferentes tipos de probióticos</p>
              <div className="text-blue-600 font-medium">Explorar →</div>
            </div>
          </Link>

          <Link href="/como-elegir" className="block group">
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 group-hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Cómo Elegir</h3>
              <p className="text-gray-700 mb-4">Guía para elegir el probiótico ideal</p>
              <div className="text-purple-600 font-medium">Guía →</div>
            </div>
          </Link>

          <Link href="/alimentos-fermentados" className="block group">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 group-hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🥛</div>
              <h3 className="text-xl font-semibold mb-3">Alimentos Fermentados</h3>
              <p className="text-gray-700 mb-4">Descubre alimentos naturales ricos en probióticos</p>
              <div className="text-orange-600 font-medium">Ver más →</div>
            </div>
          </Link>

          <Link href="/condiciones" className="block group">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 group-hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3">Condiciones Específicas</h3>
              <p className="text-gray-700 mb-4">Probióticos para condiciones específicas</p>
              <div className="text-red-600 font-medium">Ver más →</div>
            </div>
          </Link>

          <Link href="/recetas" className="block group">
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 group-hover:shadow-lg transition-all">
              <div className="text-3xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-3">Recetas</h3>
              <p className="text-gray-700 mb-4">Recetas con alimentos probióticos</p>
              <div className="text-yellow-600 font-medium">Ver más →</div>
            </div>
          </Link>
        </div>

        <div className="text-center my-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Comienza Tu Viaje Hacia Una Mejor Salud</h2>
            <p className="text-lg mb-6">Descubre cómo los probióticos pueden transformar tu bienestar</p>
            <Link href="/beneficios" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Conoce todos los beneficios
            </Link>
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
