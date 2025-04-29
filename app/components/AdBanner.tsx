import { FC } from 'react';

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

  return (
    <div className={`bg-gray-100 border border-gray-200 flex items-center justify-center rounded shadow-sm ${sizes[position]} ${className}`}>
      <div className="text-center px-4">
        <p className="text-xs text-gray-400 mb-1">Publicidad</p>
        <div className="text-gray-500">
          {/* Aquí iría el código del anuncio real (Google AdSense, etc.) */}
          <p className="text-sm">Este espacio está reservado para anuncios</p>
        </div>
      </div>
    </div>
  );
};

export default AdBanner; 