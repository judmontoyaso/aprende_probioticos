'use client';

import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  fill = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw',
}: OptimizedImageProps) {
  // No podemos usar width/height y fill al mismo tiempo
  const imageProps = fill
    ? {
        fill: true,
        sizes
      }
    : {
        width: width || 1200,
        height: height || 800
      };

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      unoptimized
      {...imageProps}
    />
  );
} 