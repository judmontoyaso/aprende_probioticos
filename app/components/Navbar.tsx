'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const isActiveRoute = (route: string) => {
    return pathname === route;
  };

  const isActiveGroup = (routes: string[]) => {
    return routes.some(route => pathname.startsWith(route));
  };

  const mainRoutes = [
    { path: '/', label: 'Inicio' },
    { path: '/que-son', label: '¿Qué son?' },
    { path: '/beneficios', label: 'Beneficios' },
  ];

  const resourceRoutes = [
    { path: '/condiciones', label: 'Condiciones de Salud' },
    { path: '/tipos', label: 'Tipos de Probióticos' },
    { path: '/recetas', label: 'Recetas' },
  ];

  const otherRoutes = [
    { path: '/como-elegir', label: 'Cómo elegir' },
    { path: '/referencias', label: 'Referencias' },
  ];

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🦠</span> Probióticos Para Todos
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {mainRoutes.map(route => (
            <Link 
              key={route.path} 
              href={route.path}
              className={`transition-colors ${
                isActiveRoute(route.path) 
                  ? 'text-white font-semibold bg-green-700 px-3 py-1 rounded-md'
                  : 'hover:text-green-200'
              }`}
            >
              {route.label}
            </Link>
          ))}
          
          {/* Recursos Prácticos Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              onMouseEnter={() => setIsResourcesOpen(true)}
              className={`flex items-center transition-colors ${
                isActiveGroup(['/condiciones', '/tipos', '/recetas']) 
                  ? 'text-white font-semibold bg-green-700 px-3 py-1 rounded-md'
                  : 'hover:text-green-200'
              }`}
            >
              Recursos Prácticos
              <svg className={`w-4 h-4 ml-1 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg z-10 transition-all duration-200 ${
                isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              {resourceRoutes.map(route => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`block px-4 py-2 hover:bg-green-50 transition-colors ${
                    pathname.startsWith(route.path) ? 'bg-green-100 font-medium text-green-700' : ''
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          
          {otherRoutes.map(route => (
            <Link 
              key={route.path} 
              href={route.path}
              className={`transition-colors ${
                isActiveRoute(route.path) 
                  ? 'text-white font-semibold bg-green-700 px-3 py-1 rounded-md'
                  : 'hover:text-green-200'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full py-3 px-4 bg-green-700">
          <div className="flex flex-col space-y-3">
            {mainRoutes.map(route => (
              <Link
                key={route.path}
                href={route.path}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveRoute(route.path)
                    ? 'bg-green-800 font-semibold'
                    : 'hover:bg-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            
            {/* Mobile Resources Dropdown */}
            <div>
              <button 
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md transition-colors ${
                  isActiveGroup(['/condiciones', '/tipos', '/recetas'])
                    ? 'bg-green-800 font-semibold'
                    : 'hover:bg-green-600'
                }`}
              >
                Recursos Prácticos
                <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isResourcesOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-500 pl-2">
                  {resourceRoutes.map(route => (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={`block px-3 py-2 rounded-md transition-colors ${
                        pathname.startsWith(route.path)
                          ? 'bg-green-800 font-semibold'
                          : 'hover:bg-green-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {otherRoutes.map(route => (
              <Link
                key={route.path}
                href={route.path}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActiveRoute(route.path)
                    ? 'bg-green-800 font-semibold'
                    : 'hover:bg-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 