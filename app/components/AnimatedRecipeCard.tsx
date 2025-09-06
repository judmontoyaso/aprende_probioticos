'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RecipeOptimizedImage from './RecipeOptimizedImage';
import { recetasData } from '../recetas/data';

interface AnimatedRecipeCardProps {
  slug: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut' as const
    }
  })
};

export default function AnimatedRecipeCard({ slug, index }: AnimatedRecipeCardProps) {
  const receta = recetasData[slug];
  if (!receta) return null;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
      className="h-full"
    >
      <Link href={`/recetas/${slug}`} className="group h-full">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col">
          <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
            <RecipeOptimizedImage 
              src={receta.imagenPrincipal.src} 
              alt={receta.imagenPrincipal.alt}
              width={400}
              height={224}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-apple text-xs font-bold px-3 py-1 rounded-full">
              {receta.dificultad}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center text-white text-sm">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {receta.tiempoPreparacion}
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12a1 1 0 002 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 6.414V12z"/>
                  <path d="M9 18a1 1 0 002 0v-3a1 1 0 00-2 0v3z"/>
                </svg>
                {receta.porciones} porciones
              </div>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-3 text-biscay group-hover:text-apple leading-tight">
              {receta.titulo}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
              {receta.descripcion}
            </p>
            
            {receta.beneficiosPrincipales && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {receta.beneficiosPrincipales.slice(0, 2).map((beneficio, index) => (
                    <span key={index} className="bg-gossip text-apple text-xs px-2 py-1 rounded-full font-medium">
                      {beneficio}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center text-apple text-sm font-bold">
                Ver Receta Completa
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-xs text-gray-400">
                Leer más →
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
