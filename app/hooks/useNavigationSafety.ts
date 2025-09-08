'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Hook para manejar la navegación del navegador de forma segura
 * Previene errores de removeChild durante la navegación hacia atrás
 */
export function useNavigationSafety() {
  const router = useRouter();
  const isNavigatingRef = useRef(false);
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      isNavigatingRef.current = true;
    };

    const handleBeforeUnload = () => {
      isNavigatingRef.current = true;
    };

    // Escuchar eventos de navegación
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      isNavigatingRef.current = true;
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
    };
  }, []);

  return {
    isNavigating: isNavigatingRef.current,
    safeNavigateBack: () => {
      isNavigatingRef.current = true;
      router.back();
    }
  };
}
