import { notFound } from 'next/navigation';
import RecetaTemplate from '../../templates/RecetaTemplate';
import { recetasData } from '../data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RecetaPage({ params }: PageProps) {
  const { slug } = await params;
  
  const recetaData = recetasData[slug];
  
  if (!recetaData) {
    notFound();
  }

  return <RecetaTemplate {...recetaData} />;
} 