'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import CondicionTemplate from '../../templates/CondicionTemplate';
import { condicionesData, type CondicionData } from '../data';

export default function CondicionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [condicionData, setCondicionData] = useState<CondicionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // En un entorno de producción, esto podría ser una llamada a la API
    try {
      if (typeof slug !== 'string') {
        throw new Error('Slug no válido');
      }

      const data = condicionesData[slug];
      
      if (!data) {
        throw new Error('Artículo no encontrado');
      }
      
      setCondicionData(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-lg text-gray-600">Cargando artículo...</p>
      </div>
    );
  }

  if (error || !condicionData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-600">{error || 'No se pudo cargar el artículo'}</p>
      </div>
    );
  }

  return <CondicionTemplate {...condicionData} />;
} 