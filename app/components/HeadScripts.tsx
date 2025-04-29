'use client';

import { useEffect } from 'react';

const HeadScripts = () => {
  useEffect(() => {
    // Crear el elemento script con los atributos exactos
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4689214255850199';
    script.crossOrigin = 'anonymous';
    
    // Agregar directamente al head
    document.head.appendChild(script);
    
    // Limpieza cuando el componente se desmonte
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default HeadScripts; 