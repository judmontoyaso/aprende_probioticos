'use client';

import { useState, useEffect } from 'react';
import { Article } from '@/lib/supabase/types';
import { supabase } from '@/lib/supabase/client';
import ImageUploader from './ImageUploader';

interface ArticleFormProps {
  article: Article | null;
  onSave: () => void;
  onCancel: () => void;
}

export default function ArticleForm({ article, onSave, onCancel }: ArticleFormProps) {
  const [loading, setLoading] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [selectedImageFileName, setSelectedImageFileName] = useState<string>(''); // Nombre personalizado
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    content: '',
    image_url: '',
    image_alt: '',
    category: 'salud-humana',
    published_at: new Date().toISOString().slice(0, 16), // Formato para datetime-local
    read_time: '5 min',
    featured: false,
    use_template: true,
    author: 'Equipo de Probióticos',
    status: 'draft' as 'draft' | 'published' | 'archived',
    meta_keywords: [] as string[],
    meta_og_image: '',
  });

  const [keywordsInput, setKeywordsInput] = useState('');

  useEffect(() => {
    if (article) {
      // Convertir la fecha ISO a formato datetime-local (YYYY-MM-DDTHH:mm)
      const publishedDate = new Date(article.published_at);
      const localDateTime = new Date(publishedDate.getTime() - publishedDate.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);

      setFormData({
        slug: article.slug,
        title: article.title,
        description: article.description,
        content: article.content || '',
        image_url: article.image_url,
        image_alt: article.image_alt,
        category: article.category,
        published_at: localDateTime,
        read_time: article.read_time,
        featured: article.featured,
        use_template: article.use_template,
        author: article.author || 'Equipo de Probióticos',
        status: article.status as 'draft' | 'published' | 'archived',
        meta_keywords: article.meta_keywords || [],
        meta_og_image: article.meta_og_image || '',
      });
      setKeywordsInput((article.meta_keywords || []).join(', '));
    }
  }, [article]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let finalImageUrl = formData.image_url;

      // Si hay un archivo seleccionado, subirlo primero a Supabase
      if (selectedImageFile && selectedImageFileName) {
        console.log('📤 Subiendo imagen a Supabase con nombre:', selectedImageFileName);
        const filePath = `blog/${selectedImageFileName}`; // Usar el nombre personalizado

        const { error: uploadError } = await supabase.storage
          .from('article-images')
          .upload(filePath, selectedImageFile, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) throw uploadError;

        // Obtener URL pública
        const { data: { publicUrl } } = supabase.storage
          .from('article-images')
          .getPublicUrl(filePath);

        console.log('✅ Imagen subida correctamente:', publicUrl);
        finalImageUrl = publicUrl;
      }

      // Generate slug from title if empty
      const slug = formData.slug || formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Parse keywords
      const keywords = keywordsInput
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0);

      // Convertir fecha datetime-local a ISO para Supabase
      const publishedAtISO = new Date(formData.published_at).toISOString();

      // Preparar datos para guardar (excluir campos auto-generados)
      const articleData = {
        slug,
        title: formData.title,
        description: formData.description,
        content: formData.content,
        image_url: finalImageUrl,
        image_alt: formData.image_alt,
        category: formData.category,
        published_at: publishedAtISO,
        read_time: formData.read_time,
        author: formData.author,
        meta_keywords: keywords,
        status: formData.status,
        featured: formData.featured,
        use_template: formData.use_template,
      };

      console.log('💾 Datos del artículo a guardar:', articleData);

      if (article) {
        // Update existing
        console.log('📝 Actualizando artículo existente:', article.slug);
        const { data: updatedData, error } = await supabase
          .from('articles')
          .update(articleData)
          .eq('slug', article.slug)
          .select();

        console.log('📊 Resultado del UPDATE:', { data: updatedData, error });

        if (error) {
          console.error('❌ Error al actualizar:', error);
          alert(`❌ Error al actualizar: ${error.message}`);
          throw error;
        }

        if (!updatedData || updatedData.length === 0) {
          console.error('⚠️ No se actualizó ninguna fila');
          alert('⚠️ No se actualizó ninguna fila. Verifica los permisos en Supabase.');
          throw new Error('No rows updated');
        }

        console.log('✅ Artículo actualizado exitosamente');
        alert('✅ Artículo actualizado exitosamente');
      } else {
        // Create new
        console.log('📝 Creando nuevo artículo');
        const { data: newData, error } = await supabase
          .from('articles')
          .insert([articleData])
          .select();

        if (error) {
          console.error('❌ Error al crear:', error);
          alert(`❌ Error al crear: ${error.message}`);
          throw error;
        }

        if (!newData || newData.length === 0) {
          console.error('⚠️ No se creó el artículo');
          alert('⚠️ No se creó el artículo. Verifica los permisos en Supabase.');
          throw new Error('Article not created');
        }

        console.log('✅ Artículo creado exitosamente:', newData);
        alert('✅ Artículo creado exitosamente');
      }

      onSave();
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Error al guardar el artículo: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'salud-mental', label: 'Salud Mental' },
    { value: 'belleza-salud', label: 'Belleza y Salud' },
    { value: 'salud-humana', label: 'Salud Humana' },
    { value: 'alimentacion', label: 'Alimentación' },
    { value: 'nutricion-animal', label: 'Nutrición Animal' },
    { value: 'agricultura', label: 'Agricultura' },
    { value: 'salud-materno-infantil', label: 'Salud Materno-Infantil' },
    { value: 'salud-digestiva', label: 'Salud Digestiva' },
    { value: 'nutricion', label: 'Nutrición' },
    { value: 'salud-infantil', label: 'Salud Infantil' },
    { value: 'salud', label: 'Salud' },
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {article ? 'Editar Artículo' : 'Nuevo Artículo'}
        </h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug (URL) <span className="text-gray-500 text-xs">(auto-generado si está vacío)</span>
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
              placeholder="probioticos-para-la-salud"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripción *
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoría *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Published Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de publicación *
            </label>
            <input
              type="datetime-local"
              required
              value={formData.published_at}
              onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500">
              Fecha y hora de publicación del artículo
            </p>
          </div>

          {/* Read Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tiempo de lectura
            </label>
            <input
              type="text"
              value={formData.read_time}
              onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
              placeholder="5 min"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Autor
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Keywords SEO <span className="text-gray-500 text-xs">(separadas por comas)</span>
            </label>
            <input
              type="text"
              value={keywordsInput}
              onChange={(e) => setKeywordsInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
              placeholder="probióticos, salud, microbioma"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Image Uploader */}
          <ImageUploader
            currentImage={formData.image_url}
            onImageChange={(url: string) => setFormData({ ...formData, image_url: url })}
            onFileSelect={(file: File, fileName: string) => {
              setSelectedImageFile(file);
              setSelectedImageFileName(fileName);
            }}
          />

          {/* Image Alt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Texto alternativo de imagen *
            </label>
            <input
              type="text"
              required
              value={formData.image_alt}
              onChange={(e) => setFormData({ ...formData, image_alt: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent"
            >
              <option value="draft">Borrador</option>
              <option value="published">Publicado</option>
              <option value="archived">Archivado</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 text-[#48a537] border-gray-300 rounded focus:ring-[#48a537]"
              />
              <span className="ml-2 text-sm text-gray-700">Artículo destacado</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.use_template}
                onChange={(e) => setFormData({ ...formData, use_template: e.target.checked })}
                className="w-4 h-4 text-[#48a537] border-gray-300 rounded focus:ring-[#48a537]"
              />
              <span className="ml-2 text-sm text-gray-700">Usar plantilla MDX</span>
            </label>
          </div>
        </div>
      </div>

      {/* Content Editor */}
      {formData.use_template && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contenido MDX
          </label>
          <textarea
            rows={20}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48a537] focus:border-transparent font-mono text-sm"
            placeholder="# Título del artículo&#10;&#10;Contenido en formato MDX..."
          />
          <p className="mt-1 text-xs text-gray-500">
            Escribe el contenido en formato MDX. Puedes usar Markdown con componentes React.
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex gap-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#48a537] text-white rounded-lg hover:bg-[#3d8c2e] disabled:opacity-50"
        >
          {loading ? 'Guardando...' : article ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
}
