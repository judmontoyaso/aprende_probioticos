'use client';

import { useState } from 'react';
import Link from 'next/link';
import OptimizedImagePlaceholder from '../components/OptimizedImagePlaceholder';
import RecipeOptimizedImage from '../components/RecipeOptimizedImage';
import { recetasData, recetaSlugs } from '../recetas/data';
import RecipeFilters from '../components/RecipeFilters';

// Categorías disponibles para filtrar
const CATEGORIAS = ['Todas', 'Lácteos', 'Vegetales', 'Bebidas', 'Fermentados'];

// Función para categorizar recetas
const categorizarReceta = (slug: string) => {
  switch (slug) {
    case 'yogur-casero':
      return ['Lácteos', 'Fermentados'];
    case 'yogur-cultivos-puros':
      return ['Lácteos', 'Fermentados'];
    case 'kefir-agua':
      return ['Bebidas', 'Fermentados'];
    case 'chucrut-casero':
      return ['Vegetales', 'Fermentados'];
    case 'kombucha-casa':
      return ['Bebidas', 'Fermentados'];
    case 'miso-casero':
      return ['Fermentados'];
    default:
      return ['Fermentados'];
  }
};

// Función para obtener nivel de dificultad
const obtenerDificultad = (slug: string) => {
  const dificultadesFaciles = ['kefir-agua', 'chucrut-casero'];
  const dificultadesIntermedias = ['yogur-casero', 'kombucha-casa'];
  const dificultadesDificiles = ['yogur-cultivos-puros', 'miso-casero'];
  
  if (dificultadesFaciles.includes(slug)) return 'Fácil';
  if (dificultadesIntermedias.includes(slug)) return 'Intermedio';
  if (dificultadesDificiles.includes(slug)) return 'Difícil';
  return 'Intermedio';
};

export default function RecipesGrid() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  
  // Filtrar recetas por categoría
  const recetasFiltradas = recetaSlugs.filter(slug => {
    if (categoriaSeleccionada === 'Todas') return true;
    const categorias = categorizarReceta(slug);
    return categorias.includes(categoriaSeleccionada);
  });

  return (
    <div className="container mx-auto px-4">
      {/* Filtros */}
      <RecipeFilters 
        selectedCategory={categoriaSeleccionada}
        onCategoryChange={setCategoriaSeleccionada}
      />

      {/* Grid de recetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {recetasFiltradas.map((slug, index) => {
          const receta = recetasData[slug];
          if (!receta) return null;

          return (
            <Link 
              key={slug}
              href={`/recetas/${slug}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <RecipeOptimizedImage 
                  src={`/images/${slug}-principal.png`}
                  alt={`Receta de ${receta.titulo}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder={
                    <OptimizedImagePlaceholder 
                      className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
                    />
                  }
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    obtenerDificultad(slug) === 'Fácil' 
                      ? 'bg-green-100 text-green-800'
                      : obtenerDificultad(slug) === 'Intermedio'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {obtenerDificultad(slug)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                  {receta.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {receta.descripcion}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {receta.tiempoPreparacion}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {receta.porciones}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorizarReceta(slug).slice(0, 2).map((categoria) => (
                    <span key={categoria} className="inline-block bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                      {categoria}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
