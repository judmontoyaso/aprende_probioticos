import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
}

/**
 * Componente optimizado para imágenes del sitio de probióticos
 * Incluye lazy loading, optimización automática y fallbacks
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  placeholder = 'empty',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) => {
  // Verificar si es placeholder (las imágenes reales ya están disponibles)
  const isPlaceholder = src.startsWith('/placeholder/') || src.includes('placeholder');
  
  if (isPlaceholder) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-all duration-300 ${className}`}
        style={{ width: width, height: height, minHeight: '200px' }}
      >
        <div className="text-center text-gray-500 p-6">
          <div className="text-4xl mb-3 animate-pulse">🖼️</div>
          <div className="font-semibold text-base mb-2">Imagen pendiente</div>
          <div className="text-sm leading-relaxed mb-3 max-w-xs">{alt}</div>
          <div className="inline-flex items-center px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-600">
            {width} × {height}px
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      placeholder={placeholder}
      sizes={sizes}
      className={`rounded-lg transition-all duration-300 hover:shadow-lg ${className}`}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
      }}
      // Optimizaciones adicionales
      quality={90}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};

export default OptimizedImage;
