import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Recursos Prácticos sobre Probióticos',
  description: 'Recursos prácticos y científicamente respaldados sobre probióticos: artículos, guías, recetas y material informativo para comprender y aplicar sus beneficios.',
  openGraph: {
    title: 'Recursos Prácticos sobre Probióticos',
    description: 'Recursos prácticos sobre probióticos con información científicamente respaldada para aplicar sus beneficios en diferentes ámbitos.',
    images: ['/images/og-recursos.jpg'],
  },
};

export default function RecursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="recursos-layout">
      {/* Google AdSense Script */}
      <Script
        id="google-adsense-recursos"
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