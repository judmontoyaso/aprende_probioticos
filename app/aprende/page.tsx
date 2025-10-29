import { Metadata } from 'next';
import LearnClient from './LearnClient';
import { HorizontalBanner, ImageBannerProfessional, ArticleBanner } from '../components/AdBanners';

export const metadata: Metadata = {
  title: 'Aprende con Ciencia | Artículos Científicos sobre Probióticos',
  description: 'Descubre artículos científicos revisados por pares sobre probióticos, microbiota intestinal y salud digestiva. Aprende con investigaciones reales y accede a estudios con DOI.',
  keywords: [
    'aprender probióticos',
    'investigación científica probióticos',
    'artículos científicos microbiota',
    'estudios probióticos',
    'DOI probióticos',
    'literatura científica intestinal',
    'educación microbioma',
    'artículos revisados por pares'
  ],
  openGraph: {
    title: 'Aprende con Ciencia - Artículos Científicos sobre Probióticos',
    description: '¿Qué quieres leer hoy de investigación? Descubre artículos científicos aleatorios sobre probióticos y salud intestinal',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function AprendePage() {
  return (
    <>
      {/* Banner superior móvil */}
      <div className="block md:hidden mb-6">
        <HorizontalBanner className="max-w-full" alt="Banner artículos científicos probióticos" />
      </div>

      <LearnClient />

      {/* Banner intermedio después del contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <ArticleBanner className="max-w-4xl mx-auto" alt="Banner investigación científica probióticos" />
      </div>

      {/* Banner inferior profesional */}
      <div className="container mx-auto px-4 py-8">
        <ImageBannerProfessional className="max-w-5xl mx-auto" alt="Banner educación científica microbiota" />
      </div>
    </>
  );
}
