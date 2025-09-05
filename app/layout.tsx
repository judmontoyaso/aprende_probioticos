import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Verification from "./components/Verification";
import GlobalSchema from "./components/GlobalSchema";
import HrefLangTags from "./components/HrefLangTags";
import InternationalSEO from "./components/InternationalSEO";
import AdLayout from "./components/AdLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimización para Core Web Vitals
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Optimización para Core Web Vitals
});

export const metadata: Metadata = {
  title: "Probióticos Para Todos - Información basada en evidencia científica",
  description: "Sitio informativo sobre probióticos basado en evidencia científica. Aprende sobre sus beneficios, cómo elegirlos y su impacto en la salud.",
  keywords: "probióticos, salud intestinal, microbiota, bacterias beneficiosas, suplementos probióticos, lactobacillus, bifidobacterium, salud digestiva",
  authors: [{ name: "Probióticos Para Todos" }],
  category: "Health",
  creator: "Probióticos Para Todos",
  publisher: "Probióticos Para Todos",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Probióticos Para Todos - Información basada en evidencia científica",
    description: "Todo lo que necesitas saber sobre probióticos, sus beneficios y cómo elegir los mejores para tu salud digestiva.",
    url: "https://www.probioticosparatodos.com",
    siteName: "Probióticos Para Todos",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/probiotics-hero.png",
        width: 1200,
        height: 630,
        alt: "Probióticos Para Todos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Probióticos Para Todos - Información basada en evidencia científica",
    description: "Todo lo que necesitas saber sobre probióticos, sus beneficios y cómo elegir los mejores para tu salud digestiva.",
    images: ["/images/probiotics-hero.png"],
  },
  alternates: {
    canonical: "https://www.probioticosparatodos.com",
  },
  icons: {
    icon: '/las-bacterias-intestinales.ico',
    shortcut: '/las-bacterias-intestinales.ico',
    apple: '/las-bacterias-intestinales.ico',
  },
  metadataBase: new URL('https://www.probioticosparatodos.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Esquemas globales de Schema.org */}
        <GlobalSchema />
        
        {/* Verificación de sitios */}
        <Verification 
          googleSiteVerification="YOUR_GOOGLE_VERIFICATION_ID"
          bingSiteVerification="YOUR_BING_VERIFICATION_ID"
        />
        
        {/* Preconectar con dominios importantes para mejorar performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4689214255850199"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Componentes dinámicos para SEO internacional */}
        <HrefLangTags />
        <InternationalSEO />
        
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Breadcrumbs />
          <main className="flex-grow">
            <AdLayout>
              {children}
            </AdLayout>
          </main>
          <Footer />
        </div>
        <CookieConsent />
        
        {/* Usar nuestro componente de Analytics mejorado */}
        <Analytics />
      </body>
    </html>
  );
}
