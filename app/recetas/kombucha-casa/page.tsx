import { notFound } from 'next/navigation';
import RecetaTemplate from '../../templates/RecetaTemplate';
import { recetasData } from '../data';

export default function KombuchaCasaPage() {
  const receta = recetasData['kombucha-casa'];
  
  if (!receta) {
    notFound();
  }

  return <RecetaTemplate receta={receta} />;
}

export async function generateMetadata() {
  const receta = recetasData['kombucha-casa'];
  
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
