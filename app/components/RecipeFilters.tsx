'use client';

import { useState } from 'react';

interface RecipeFiltersProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const CATEGORIAS = ['Todas', 'Lácteos', 'Vegetales', 'Bebidas', 'Fermentados'];

export default function RecipeFilters({ onCategoryChange, selectedCategory }: RecipeFiltersProps) {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  return (
    <>
      {/* Filtros móvil */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMostrarFiltros(!mostrarFiltros)}
          className="w-full bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-between font-medium"
        >
          <span>Filtrar por categoría</span>
          <span className={`transform transition-transform ${mostrarFiltros ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {mostrarFiltros && (
          <div className="mt-3 bg-white border rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIAS.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => {
                    onCategoryChange(categoria);
                    setMostrarFiltros(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === categoria
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filtros desktop */}
      <div className="hidden lg:flex flex-wrap gap-3 mb-8 justify-center">
        {CATEGORIAS.map((categoria) => (
          <button
            key={categoria}
            onClick={() => onCategoryChange(categoria)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === categoria
                ? 'bg-green-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>
    </>
  );
}
