'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import RecetaTemplate from '../../templates/RecetaTemplate';
import { recetasData, RecetaData } from '../data';

export default function RecetaPage() {
  const { slug } = useParams();
  const [recetaData, setRecetaData] = useState<RecetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (typeof slug !== 'string') {
        throw new Error('Slug no válido');
      }

      const data = recetasData[slug];
      
      if (!data) {
        throw new Error('Receta no encontrada');
      }
      
      setRecetaData(data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error || !recetaData) {
    return <div>Error: {error}</div>;
  }

  return <RecetaTemplate {...recetaData} />;
} 