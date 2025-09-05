import Link from 'next/link';
import { recetasData, recetaSlugs } from './data';

export default function RecetasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Recetas Probióticas Caseras
      </h1>
      
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Descubre cómo preparar alimentos probióticos en casa con nuestras recetas paso a paso. 
        Cada receta incluye ingredientes, instrucciones detalladas y consejos para obtener los mejores resultados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recetaSlugs.map((slug) => {
          const receta = recetasData[slug];
          if (!receta) return null;

          return (
            <Link 
              key={slug}
              href={`/recetas/${slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-6xl">
                  {getRecipeIcon(slug)}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {receta.titulo}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {receta.descripcion}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    ⏱️ {receta.tiempoPreparacion}
                  </span>
                  <span className="flex items-center">
                    👥 {receta.porciones}
                  </span>
                </div>
                
                <div className="mt-4 flex items-center">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {getDifficulty(slug)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function getRecipeIcon(slug: string): string {
  const icons: Record<string, string> = {
    'yogur-casero': '🥛',
    'yogur-cultivos-puros': '🧪',
    'kefir-agua': '💧',
    'chucrut-casero': '🥬',
    'kombucha-casa': '🍵',
    'miso-casero': '🫘'
  };
  return icons[slug] || '🥄';
}

function getDifficulty(slug: string): string {
  const easy = ['kefir-agua', 'chucrut-casero'];
  const medium = ['yogur-casero', 'kombucha-casa'];
  const hard = ['yogur-cultivos-puros', 'miso-casero'];
  
  if (easy.includes(slug)) return 'Fácil';
  if (medium.includes(slug)) return 'Intermedio';
  if (hard.includes(slug)) return 'Avanzado';
  return 'Intermedio';
}
