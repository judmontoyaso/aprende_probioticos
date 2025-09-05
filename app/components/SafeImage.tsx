import Image, { type ImageProps } from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function SafeImage({
  src,
  alt,
  fill,
  sizes,
  className,
  style,
  priority = false,
  width,
  height,
  ...props
}: SafeImageProps) {
  if (!src) {
    return null;
  }

  const imageProps: Record<string, unknown> = {
    src,
    alt,
    className,
    style,
    priority,
    ...props
  };

  if (fill) {
    imageProps.fill = true;
    if (sizes) imageProps.sizes = sizes;
  } else if (width && height) {
    imageProps.width = width;
    imageProps.height = height;
  }

  return <Image {...(imageProps as ImageProps)} alt={alt || ''} />;
}
