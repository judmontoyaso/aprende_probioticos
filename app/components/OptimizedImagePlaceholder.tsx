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
        className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}
        style={{ width: width, height: height }}
      >
        <div className="text-center text-gray-500 p-4">
          <div className="text-3xl mb-2">🖼️</div>
          <div className="font-medium text-sm">Imagen pendiente</div>
          <div className="text-xs mt-1">{alt}</div>
          <div className="text-xs text-gray-400">{width}x{height}px</div>
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
      className={`rounded-lg ${className}`}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
      // Optimizaciones adicionales
      quality={85}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};

export default OptimizedImage;
