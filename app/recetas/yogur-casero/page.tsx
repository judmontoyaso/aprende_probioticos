import { notFound } from 'next/navigation';
import RecetaTemplate from '../../templates/RecetaTemplate';
import { recetasData } from '../data';

export default function YogurCaseroPage() {
  const receta = recetasData['yogur-casero'];
  
  if (!receta) {
    notFound();
  }

  return <RecetaTemplate receta={receta} slug="yogur-casero" />;
}

export async function generateMetadata() {
  const receta = recetasData['yogur-casero'];
  
  if (!receta) {
    return {
      title: 'Receta no encontrada',
    };
  }

  return {
    title: `${receta.titulo} | Probióticos Para Todos`,
    description: receta.descripcion,
    openGraph: {
      title: receta.titulo,
      description: receta.descripcion,
      images: [receta.imagenPrincipal.src],
    },
  };
}
