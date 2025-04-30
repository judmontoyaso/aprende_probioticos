import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aprende de Probióticos - Información basada en evidencia científica",
  description: "Sitio informativo sobre probióticos basado en evidencia científica. Aprende sobre sus beneficios, cómo elegirlos y su impacto en la salud.",
  keywords: "probióticos, salud intestinal, microbiota, bacterias beneficiosas, suplementos probióticos, lactobacillus, bifidobacterium, salud digestiva",
  authors: [{ name: "Aprende de Probióticos" }],
  category: "Health",
  creator: "Aprende de Probióticos",
  publisher: "Aprende de Probióticos",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aprende de Probióticos - Información basada en evidencia científica",
    description: "Todo lo que necesitas saber sobre probióticos, sus beneficios y cómo elegir los mejores para tu salud digestiva.",
    url: "https://www.probioticosparatodos.com",
    siteName: "Aprende de Probióticos",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/probiotics-hero.png",
        width: 1200,
        height: 630,
        alt: "Aprende de Probióticos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprende de Probióticos - Información basada en evidencia científica",
    description: "Todo lo que necesitas saber sobre probióticos, sus beneficios y cómo elegir los mejores para tu salud digestiva.",
    images: ["/images/probiotics-hero.png"],
  },
  alternates: {
    canonical: "https://www.probioticosparatodos.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4689214255850199"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TGGM0S4G83"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TGGM0S4G83');
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
