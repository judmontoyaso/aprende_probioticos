import Image from 'next/image';

interface ImageWithWatermarkProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  useTextWatermark?: boolean;
}

/**
 * Componente de imagen con marca de agua sutil
 * Añade el logo o branding de "Probióticos Para Todos" de forma discreta
 */
const ImageWithWatermark = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  useTextWatermark = false
}: ImageWithWatermarkProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto rounded-lg"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        quality={90}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Marca de agua con logo */}
      {!useTextWatermark ? (
        <div className="absolute bottom-2 right-2 opacity-60 hover:opacity-80 transition-opacity">
          <Image
            src="/images/logo_transparente.png"
            alt="Probióticos Para Todos"
            width={60}
            height={60}
            className="drop-shadow-sm"
          />
        </div>
      ) : (
        <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600 font-medium opacity-70 hover:opacity-90 transition-opacity">
          ProbióticosParaTodos.com
        </div>
      )}
    </div>
  );
};

export default ImageWithWatermark;
