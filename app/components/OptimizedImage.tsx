'use client';

import Image from 'next/image';
import React from 'react';

// Define a simpler component with just the basic props
function OptimizedImage(props: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  // Make sure we're not rendering with conflicting props
  if (props.fill && (props.width || props.height)) {
    console.error('OptimizedImage: Cannot use both fill and width/height props');
    return null;
  }

  // For fill mode
  if (props.fill) {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        fill={true}
        sizes={props.sizes}
        className={props.className}
        priority={props.priority}
        quality={85}
      />
    );
  }

  // For width/height mode
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width || 100}
      height={props.height || 100}
      className={props.className}
      priority={props.priority}
      quality={85}
    />
  );
}

// Export both named and default
export { OptimizedImage };
export default OptimizedImage;
