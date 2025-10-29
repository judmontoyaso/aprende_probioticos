'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase/client';

interface ImageUploaderProps {
  currentImage: string;
  onImageChange: (url: string) => void;
  onFileSelect?: (file: File, fileName: string) => void; // Incluir el nombre deseado
}

export default function ImageUploader({ currentImage, onImageChange, onFileSelect }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage);
  const [imageNameInput, setImageNameInput] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Actualizar preview cuando cambia currentImage
  useEffect(() => {
    if (currentImage && currentImage.trim() !== '') {
      setPreview(currentImage);
      setImageError(false); // Reset error cuando cambia la imagen
      // Extraer nombre de archivo de la URL completa
      if (currentImage.startsWith('/images/')) {
        setImageNameInput(currentImage.replace('/images/', ''));
      } else if (currentImage.includes('supabase.co')) {
        // Mantener URL completa de Supabase
        setImageNameInput('');
      } else {
        setImageNameInput('');
      }
    } else {
      setPreview('');
      setImageNameInput('');
      setImageError(false);
    }
  }, [currentImage]);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen debe ser menor a 5MB');
      return;
    }

    // Crear preview local usando FileReader
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Guardar el archivo
    setSelectedFile(file);
    
    // Sugerir nombre basado en el archivo original
    const originalName = file.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9.-]/g, '');
    setImageNameInput(originalName);
  };

  const handleSaveFile = () => {
    if (!selectedFile) {
      alert('⚠️ Primero selecciona un archivo');
      return;
    }

    if (!imageNameInput.trim()) {
      alert('⚠️ Escribe el nombre con el que se guardará la imagen');
      return;
    }

    // Notificar al padre con el archivo Y el nombre deseado
    if (onFileSelect) {
      onFileSelect(selectedFile, imageNameInput.trim());
    }
    
    alert('✅ Imagen lista para subir cuando guardes el artículo');
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Imagen del artículo *
      </label>
      
      {/* Preview */}
      {preview && preview.trim() !== '' && !imageError && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border-2 border-gray-200 bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={preview}
              alt="Preview"
              width={600}
              height={192}
              className="max-w-full max-h-full object-contain"
              unoptimized={preview.startsWith('data:')} // Solo para previews base64 locales
              onError={() => {
                console.error('❌ Error cargando imagen:', preview);
                setImageError(true);
              }}
            />
          </div>
          {/* Botón para cambiar en esquina superior derecha */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute top-2 right-2 bg-white hover:bg-gray-100 text-gray-900 px-3 py-1.5 rounded-lg font-medium shadow-lg transition-colors z-10 text-sm"
          >
            🔄 Cambiar
          </button>
          {/* URL actual */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-2 truncate z-10">
            {preview}
          </div>
        </div>
      )}

      {(!preview || preview.trim() === '' || imageError) && (
        <div className="w-full h-48 mb-4 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
             onClick={() => fileInputRef.current?.click()}>
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              {imageError ? '⚠️ Error al cargar imagen - Click para cambiar' : 'Click para subir imagen'}
            </p>
            {imageError && preview && (
              <p className="mt-1 text-xs text-red-600 px-4 truncate">
                URL con error: {preview}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Upload/Name Input */}
      <div className="space-y-3">
        {/* Botón de seleccionar archivo */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="w-full inline-flex items-center justify-center px-4 py-3 border-2 border-[#48a537] rounded-lg text-sm font-medium text-[#48a537] bg-white hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          {selectedFile ? '✅ Cambiar archivo' : '📁 Seleccionar archivo'}
        </button>
        
        {/* Input de nombre para guardar */}
        {selectedFile && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nombre con el que se guardará en Supabase:
            </label>
            <input
              type="text"
              value={imageNameInput}
              onChange={(e) => setImageNameInput(e.target.value)}
              placeholder="ejemplo-imagen.png"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#48a537] focus:border-transparent font-mono"
            />
            <button
              type="button"
              onClick={handleSaveFile}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              ✓ Confirmar nombre
            </button>
            <p className="text-xs text-gray-500">
              Se guardará en: <code className="bg-gray-100 px-1 rounded">blog/{imageNameInput}</code>
            </p>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>💡 Tip:</strong> Las imágenes se subirán a Supabase cuando guardes el artículo. 
          Para usar imágenes locales del proyecto, solo escribe el nombre del archivo (ej: <code className="bg-blue-100 px-1 rounded">hero.png</code>).
        </p>
      </div>
    </div>
  );
}
