'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveRoute = (route: string) => {
    return pathname === route;
  };

  const routes = [
    { path: '/', label: 'Inicio' },
    { path: '/que-son', label: '¿Qué son?' },
    { path: '/beneficios', label: 'Beneficios' },
    { path: '/condiciones', label: 'Condiciones' },
    { path: '/tipos', label: 'Tipos de Probióticos' },
    { path: '/recetas', label: 'Recetas' },
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
        <div className="hidden md:flex space-x-6">
          {routes.map(route => (
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
            {routes.map(route => (
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