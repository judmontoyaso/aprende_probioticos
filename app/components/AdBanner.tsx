import { FC } from 'react';
import Script from 'next/script';

interface AdBannerProps {
  position: 'sidebar' | 'content' | 'top' | 'bottom';
  className?: string;
}

const AdBanner: FC<AdBannerProps> = ({ position, className = '' }) => {
  // Tamaños diferentes según la posición
  const sizes = {
    sidebar: 'h-[600px] w-[300px]',
    content: 'h-[250px] w-full',
    top: 'h-[90px] w-full',
    bottom: 'h-[90px] w-full',
  };

  // Mapear las posiciones a formatos de anuncio de AdSense
  const adFormats: Record<string, { adSlot: string, format?: string, responsive?: boolean }> = {
    sidebar: { 
      adSlot: "1234567890", 
      format: "auto", 
    },
    content: { 
      adSlot: "0987654321", 
      responsive: true 
    },
    top: { 
      adSlot: "5678901234", 
      format: "auto", 
      responsive: true 
    },
    bottom: { 
      adSlot: "5432109876", 
      format: "auto", 
      responsive: true 
    },
  };

  const adData = adFormats[position];

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
        <>
          <div 
            className={`my-ad ad-${position}`}
          >
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-4689214255850199"
              data-ad-slot={adData.adSlot}
              data-ad-format={adData.format || undefined}
              data-full-width-responsive={adData.responsive || undefined}
            ></ins>
          </div>
          <Script id={`ad-script-${position}`}>
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </>
      )}
    </div>
  );
};

export default AdBanner; 