import Script from 'next/script';
import { Metadata } from 'next';
import AdBanner from '../../components/AdBanner';

export const metadata: Metadata = {
  title: 'Artículos sobre Probióticos | Recursos Prácticos',
  description: 'Artículos detallados y científicamente respaldados sobre probióticos, su aplicación en diversos campos y beneficios para la salud humana, animal y vegetal.',
  openGraph: {
    title: 'Artículos sobre Probióticos | Recursos Prácticos',
    description: 'Artículos detallados y científicamente respaldados sobre probióticos, su aplicación en diversos campos y beneficios para la salud.',
    images: ['/images/og-articulos.jpg'],
  },
};

export default function ArticulosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="articulos-layout">
      {/* Google AdSense Script */}
      <Script
        id="google-adsense-article"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4689214255850199"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Main Content */}
      {children}
    </div>
  );
} 