'use client';

import { NewBannerProfessional, TemporaryBanner, HorizontalBanner } from './AdBanners';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function AdLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFloatingMinimized, setIsFloatingMinimized] = useState(false);

  return (
    <>
      {/* Banner lateral flotante - visible en todas las páginas */}
      <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
        {isFloatingMinimized ? (
          /* Versión minimizada */
          <div className="bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full p-3 shadow-lg cursor-pointer group"
               onClick={() => setIsFloatingMinimized(false)}
               title="Expandir banner">
            <div className="text-white text-xl">😊</div>
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              🥗 Ver contenido
            </div>
          </div>
        ) : (
          /* Versión completa */
          <div className="w-72 relative">
            <button 
              onClick={() => setIsFloatingMinimized(true)}
              className="absolute top-2 right-2 z-10 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-1 transition-all duration-300"
              title="Minimizar banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <TemporaryBanner className="w-full" alt="Banner promocional Probióticos Para Todos - Lateral" />
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <div className="relative">
        {children}
      </div>

      {/* Banner de footer - visible en todas las páginas */}
      <div className="container mx-auto px-4 py-4">
        <HorizontalBanner className="max-w-4xl mx-auto" alt="Banner horizontal Probióticos Para Todos - Footer" />
      </div>
    </>
  );
}
