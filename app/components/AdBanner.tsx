'use client';

import { FC, useEffect } from 'react';

interface AdBannerProps {
  position: 'sidebar' | 'content' | 'top' | 'bottom';
  className?: string;
}

const AdBanner: FC<AdBannerProps> = ({ position, className = '' }) => {
  // Tamaños diferentes según la posición
  const sizes = {
    sidebar: 'h-[600px] w-[300px]',
    content: 'h-[250px] w-full max-w-[728px] mx-auto',
    top: 'h-[90px] w-full max-w-[728px] mx-auto',
    bottom: 'h-[90px] w-full max-w-[728px] mx-auto',
  };

  // Mapear las posiciones a formatos de anuncio de AdSense
  const adFormats: Record<string, { adSlot: string, format?: string, responsive?: boolean }> = {
    sidebar: { 
      adSlot: "3567637954", 
      format: "auto", 
    },
    content: { 
      adSlot: "8878301084", 
      responsive: true 
    },
    top: { 
      adSlot: "2842874175", 
      format: "auto", 
      responsive: true 
    },
    bottom: { 
      adSlot: "1165928091", 
      format: "auto", 
      responsive: true 
    },
  };

  const adData = adFormats[position];

  // Asegurarse de que los anuncios se inicializan después de que el DOM esté listo
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      try {
        // Solo ejecutar cuando adsbygoogle esté disponible
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('Error al inicializar AdSense:', error);
      }
    }
  }, []);

  return (
    <div className={`bg-white border border-gray-100 flex items-center justify-center rounded shadow-sm overflow-hidden ${sizes[position]} ${className}`}>
      {/* En desarrollo, mostrar un placeholder */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-center px-4">
          <p className="text-xs text-gray-400 mb-1">Publicidad</p>
          <div className="text-gray-500">
            <p className="text-sm">Este espacio está reservado para anuncios ({position})</p>
          </div>
        </div>
      )}

      {/* En producción, mostrar el anuncio real */}
      {process.env.NODE_ENV === 'production' && (
        <div 
          className={`my-ad ad-${position} w-full h-full`}
        >
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: "100%" }}
            data-ad-client="ca-pub-4689214255850199"
            data-ad-slot={adData.adSlot}
            data-ad-format={adData.format || undefined}
            data-full-width-responsive={adData.responsive || undefined}
          ></ins>
        </div>
      )}
    </div>
  );
};

// Añadir tipos para window.adsbygoogle
declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default AdBanner; 
