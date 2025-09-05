import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TipoProbioticosTemplate from '../../templates/TipoProbioticosTemplate';
import { tiposData, tipoSlugs, type TipoData } from '../data';

// Generar parámetros estáticos para todas las páginas de tipos
export async function generateStaticParams() {
  return tipoSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Función para obtener datos del tipo
function getTipoData(slug: string): TipoData | null {
  return tiposData[slug] || null;
}

// Generar metadata dinámicamente para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const tipoData = getTipoData(slug);
  
  if (!tipoData) {
    return {
      title: 'Tipo de Probiótico No Encontrado | Probióticos Para Todos',
      description: 'La página que buscas no existe o ha sido movida.',
    };
  }

  const baseUrl = 'https://www.probioticosparatodos.com';
  const currentUrl = `${baseUrl}/tipos/${slug}`;
  const imageUrl = `${baseUrl}${tipoData.imagenPrincipal.src}`;

  // Generar keywords específicas basadas en el contenido
  const keywords = generateKeywords(tipoData, slug);
  
  // Generar título optimizado para SEO
  const seoTitle = generateSEOTitle(tipoData.titulo, slug);
  
  // Generar descripción optimizada
  const seoDescription = generateSEODescription(tipoData.descripcion, tipoData.beneficios);

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: keywords,
    authors: [{ name: 'Probióticos Para Todos' }],
    creator: 'Probióticos Para Todos',
    publisher: 'Probióticos Para Todos',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: currentUrl,
      siteName: 'Probióticos Para Todos',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: tipoData.imagenPrincipal.alt,
        },
      ],
      locale: 'es_ES',
      type: 'article',
      publishedTime: tipoData.fechaPublicacion,
      modifiedTime: new Date().toISOString(),
      section: 'Tipos de Probióticos',
      tags: keywords.split(', '),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [imageUrl],
      creator: '@probioticosparatodos',
      site: '@probioticosparatodos',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    },
    category: 'Health',
  };
}

// Función para generar keywords específicas
function generateKeywords(tipoData: TipoData, slug: string): string {
  const baseKeywords = [
    slug.replace(/-/g, ' '),
    'probióticos',
    'microbiota intestinal',
    'salud digestiva',
    'bacterias beneficiosas',
    'suplementos probióticos',
  ];

  // Agregar keywords específicas según el tipo
  if (slug === 'saccharomyces-boulardii') {
    baseKeywords.push(
      'levadura probiótica',
      'resistente antibióticos',
      'diarrea asociada antibióticos',
      'diarrea del viajero',
      'S. boulardii',
      'CNCM I-745',
      'probiótico durante antibióticos',
      'levadura no patógena',
      'Clostridium difficile',
      'síndrome intestino irritable',
      'barrera intestinal',
      'antifúngico natural'
    );
  }

  // Agregar beneficios como keywords
  tipoData.beneficios.forEach(beneficio => {
    baseKeywords.push(beneficio.titulo.toLowerCase());
  });

  // Agregar cepas como keywords
  tipoData.cepasPopulares.forEach(cepa => {
    baseKeywords.push(cepa.nombre.toLowerCase());
  });

  return baseKeywords.slice(0, 15).join(', ');
}

// Función para generar título SEO optimizado
function generateSEOTitle(titulo: string, slug: string): string {
  if (slug === 'saccharomyces-boulardii') {
    return 'Saccharomyces boulardii: Levadura Probiótica Resistente a Antibióticos | Guía Completa 2024';
  }
  
  return `${titulo} | Guía Completa 2024 | Probióticos Para Todos`;
}

// Función para generar descripción SEO optimizada
function generateSEODescription(descripcionBase: string, beneficios: { titulo: string; descripcion: string }[]): string {
  if (descripcionBase.includes('Saccharomyces boulardii')) {
    return 'Guía completa de Saccharomyces boulardii: la única levadura probiótica resistente a antibióticos. Beneficios científicamente probados para diarrea, SII y salud intestinal. Dosificación, estudios y FAQ.';
  }
  
  // Combinar descripción base con principales beneficios
  const principalesBeneficios = beneficios.slice(0, 2).map(b => b.titulo.toLowerCase()).join(', ');
  return `${descripcionBase} Beneficios incluyen ${principalesBeneficios}. Guía basada en evidencia científica.`.substring(0, 155) + '...';
}

export default async function TipoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const tipoData = getTipoData(slug);

  if (!tipoData) {
    notFound();
  }

  return <TipoProbioticosTemplate {...tipoData} />;
} 