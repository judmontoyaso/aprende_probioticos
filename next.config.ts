import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      // Redirects de estructura antigua
      {
        source: '/recursos/articulos',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/recursos/articulos/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      // Redirect de agricultura a blog
      {
        source: '/agricultura',
        destination: '/blog/agricultura-sostenible',
        permanent: true,
      },
      // Redirects de recetas antiguas
      {
        source: '/recetas/yogur-casero-con-cultivos-profesionales',
        destination: '/recetas/yogur-cultivos-puros',
        permanent: true,
      },
      {
        source: '/recetas/kefir-de-agua',
        destination: '/recetas/kefir-agua',
        permanent: true,
      },
      {
        source: '/recetas/kefir-de-leche',
        destination: '/recetas/kefir-agua',
        permanent: true,
      },
      {
        source: '/recetas/chucrut-casero-tradicional',
        destination: '/recetas/chucrut-casero',
        permanent: true,
      },
      {
        source: '/recetas/kombucha-casera---té-fermentado',
        destination: '/recetas/kombucha-casa',
        permanent: true,
      },
      {
        source: '/recetas/kombucha-casera-te-fermentado',
        destination: '/recetas/kombucha-casa',
        permanent: true,
      },
      {
        source: '/recetas/miso-casero---pasta-de-soya-fermentada',
        destination: '/recetas/miso-casero',
        permanent: true,
      },
      {
        source: '/recetas/miso-casero-pasta-de-soya-fermentada',
        destination: '/recetas/miso-casero',
        permanent: true,
      },
      {
        source: '/recetas/kéfir-de-agua-con-aguapanela',
        destination: '/recetas/kefir-agua',
        permanent: true,
      },
      // Redirect de alimentos-fermentados
      {
        source: '/alimentos-fermentados',
        destination: '/blog/alimentos-fermentados',
        permanent: true,
      },
      // Redirect genérico de & y caracteres especiales
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/agricultura',
        destination: '/blog/agricultura-sostenible',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bjpcnewtuuttgwozqqok.supabase.co',
      },
    ],
  },
};

export default nextConfig;
