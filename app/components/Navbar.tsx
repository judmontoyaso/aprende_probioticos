'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import GoogleTranslateWidget from './GoogleTranslateWidget';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuiasOpen, setIsGuiasOpen] = useState(false);

  const isActiveRoute = (route: string) => {
    return pathname === route;
  };

  const isActiveGroup = (routes: string[]) => {
    return pathname ? routes.some(route => pathname.startsWith(route)) : false;
  };

  const mainRoutes = [
    { path: '/', label: 'Inicio' },
    { path: '/que-son', label: '¿Qué son?' },
    { path: '/beneficios', label: 'Beneficios' },
    { path: '/tipos', label: 'Tipos' },
    { path: '/recetas', label: 'Recetas' },
    { path: '/blog', label: 'Blog' },
    { path: '/aprende', label: 'Aprende' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const guiasRoutes = [
    { path: '/como-elegir', label: 'Cómo Elegir' },
    { path: '/donde-comprar', label: 'Dónde Comprar' },
  ];

  return (
    <nav className="bg-white shadow-md border-b-2 border-green-500">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image 
            src="/images/logo_transparente.png"
            alt="Probióticos Para Todos - Logo"
            width={40}
            height={40}
            className="w-10 h-10 mr-3"
          />
          <div>
            <span className="text-xl font-bold text-green-700 block">Probióticos Para Todos</span>
            <span className="text-green-500 text-sm">Salud intestinal basada en ciencia</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {mainRoutes.map(route => (
            <Link 
              key={route.path} 
              href={route.path}
              className={`transition-colors px-3 py-2 rounded-md font-medium ${
                isActiveRoute(route.path) 
                  ? 'text-white bg-green-600 shadow-md'
                  : 'text-green-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              {route.label}
            </Link>
          ))}
          
          {/* Guías Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGuiasOpen(!isGuiasOpen)}
              onBlur={() => setTimeout(() => setIsGuiasOpen(false), 150)}
              className={`transition-colors px-3 py-2 rounded-md font-medium flex items-center ${
                isActiveGroup(['/como-elegir', '/donde-comprar'])
                  ? 'text-white bg-green-600 shadow-md'
                  : 'text-green-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Guías
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${isGuiasOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isGuiasOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {guiasRoutes.map(route => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`block px-4 py-2 text-sm transition-colors first:rounded-t-md last:rounded-b-md ${
                      isActiveRoute(route.path)
                        ? 'bg-green-600 text-white'
                        : 'text-green-700 hover:bg-green-50'
                    }`}
                    onClick={() => setIsGuiasOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Widget de traducción */}
          <div className="ml-2">
            <GoogleTranslateWidget />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md text-green-700 hover:bg-green-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full py-3 px-4 bg-green-50 border-t">
          <div className="flex flex-col space-y-2">
            {mainRoutes.map(route => (
              <Link
                key={route.path}
                href={route.path}
                className={`block px-3 py-2 rounded-md transition-colors font-medium ${
                  isActiveRoute(route.path)
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-green-700 hover:bg-green-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            
            {/* Mobile Guías Section */}
            <div className="pt-2 border-t border-green-200 mt-2">
              <div className="text-green-600 font-semibold text-sm px-3 py-1 mb-2">Guías</div>
              {guiasRoutes.map(route => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`block px-6 py-2 rounded-md transition-colors font-medium ${
                    isActiveRoute(route.path)
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-green-700 hover:bg-green-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            
            {/* Widget de traducción móvil */}
            <div className="pt-3 border-t border-green-200 mt-3">
              <div className="text-green-600 font-semibold text-sm px-3 py-1 mb-2">🌍 Traducir</div>
              <div className="px-3">
                <GoogleTranslateWidget />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
