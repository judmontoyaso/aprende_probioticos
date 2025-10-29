'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Article } from '@/lib/supabase/types';
import { supabase } from '@/lib/supabase/client';

interface ArticleListProps {
  articles: Article[];
  onEdit: (article: Article) => void;
  onDelete: () => void;
}

export default function ArticleList({ articles, onEdit, onDelete }: ArticleListProps) {
  const [deleting, setDeleting] = useState<string | null>(null);
  const [filter, setFilter] = useState('all'); // all, published, draft

  const handleDelete = async (article: Article) => {
    if (!confirm(`¿Estás seguro de eliminar "${article.title}"?`)) return;

    try {
      setDeleting(article.slug);
      
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('slug', article.slug);

      if (error) throw error;

      alert('Artículo eliminado exitosamente');
      onDelete();
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Error al eliminar el artículo');
    } finally {
      setDeleting(null);
    }
  };

  // Solo mostrar artículos que usan plantilla MDX (editables)
  const editableArticles = articles.filter(article => article.use_template === true);
  
  const filteredArticles = editableArticles.filter(article => {
    if (filter === 'all') return true;
    return article.status === filter;
  });

  return (
    <div>
      {/* Info Banner */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-medium text-blue-900">
              Solo artículos con plantilla MDX
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Mostrando {editableArticles.length} de {articles.length} artículos totales. Los artículos con páginas personalizadas no son editables desde aquí.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === 'all'
              ? 'bg-[#48a537] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Todos ({editableArticles.length})
        </button>
        <button
          onClick={() => setFilter('published')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === 'published'
              ? 'bg-[#48a537] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Publicados ({editableArticles.filter(a => a.status === 'published').length})
        </button>
        <button
          onClick={() => setFilter('draft')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === 'draft'
              ? 'bg-[#48a537] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Borradores ({editableArticles.filter(a => a.status === 'draft').length})
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative h-48 bg-gray-200">
              <Image
                src={article.image_url}
                alt={article.image_alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  article.featured
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-700 text-white'
                }`}>
                  {article.featured ? 'Destacado' : article.category}
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  article.status === 'published'
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 text-white'
                }`}>
                  {article.status === 'published' ? 'Publicado' : 'Borrador'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {article.description}
              </p>
              
              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{article.read_time}</span>
                <span>{article.views} vistas</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(article)}
                  className="flex-1 bg-[#163660] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#275b9e] transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(article)}
                  disabled={deleting === article.slug}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {deleting === article.slug ? 'Eliminando...' : 'Eliminar'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No hay artículos en esta categoría</p>
        </div>
      )}
    </div>
  );
}
