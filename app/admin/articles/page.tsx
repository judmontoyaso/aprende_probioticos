'use client';

import { useState, useEffect } from 'react';
import { Article } from '@/lib/supabase/types';
import { getAllArticlesAdmin } from '@/lib/supabase/articles';
import ArticleList from './ArticleList';
import ArticleForm from './ArticleForm';

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await getAllArticlesAdmin();
      setArticles(data);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (article: Article) => {
    setSelectedArticle(article);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setSelectedArticle(null);
    setIsCreating(true);
  };

  const handleCancel = () => {
    setSelectedArticle(null);
    setIsCreating(false);
  };

  const handleSave = async () => {
    await loadArticles();
    setSelectedArticle(null);
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Administración de Artículos
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Gestiona todos los artículos del blog
              </p>
            </div>
            <button
              onClick={handleCreate}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#48a537] hover:bg-[#3d8c2e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#48a537]"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nuevo Artículo
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#48a537]"></div>
          </div>
        ) : isCreating || selectedArticle ? (
          <ArticleForm
            article={selectedArticle}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <ArticleList
            articles={articles}
            onEdit={handleEdit}
            onDelete={loadArticles}
          />
        )}
      </div>
    </div>
  );
}
