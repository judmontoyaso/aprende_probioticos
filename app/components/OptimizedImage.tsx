'use client';

import { useState, useEffect } from 'react';
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
  style?: React.CSSProperties;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
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
  style,
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  // Configurar intersection observer para observar cuando la imagen entra en el viewport
  useEffect(() => {
    // Skip para imágenes con priority=true ya que estas deben cargarse inmediatamente
    if (priority) {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Pre-carga imágenes cuando están a 200px de entrar en el viewport
        threshold: 0,
      }
    );
    
    // Crear un div de referencia temporal para observar
    const element = document.createElement('div');
    element.id = `image-observer-${Math.random().toString(36).substr(2, 9)}`;
    document.body.appendChild(element);
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
      if (document.body.contains(element)) {
        document.body.removeChild(element);
      }
    };
  }, [priority]);
  
  const imageStyle: React.CSSProperties = {
    ...style,
    objectFit: objectFit as React.CSSProperties['objectFit'],
    objectPosition,
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
  };
  
  return (
    <>
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          fill={fill}
          sizes={sizes}
          style={imageStyle}
          onLoad={() => setIsLoaded(true)}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGOEY5RkEiLz48L3N2Zz4="
        />
      )}
    </>
  );
} 