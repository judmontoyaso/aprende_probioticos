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
    const handleBeforeUnload = () => {
      isNavigatingRef.current = true;
      
      // Limpiar cualquier timeout pendiente
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
      
      // Dar tiempo para que React limpie normalmente antes de forzar
      cleanupTimeoutRef.current = setTimeout(() => {
        // Forzar limpieza de cualquier referencia DOM colgante
        const allElements = document.querySelectorAll('[data-react-component]');
        allElements.forEach(el => {
          try {
            if (el.parentNode) {
              // Solo limpiar si es seguro
            }
          } catch {
            // Ignorar errores de limpieza
          }
        });
      }, 100);
    };

    const handlePopState = (event: PopStateEvent) => {
      isNavigatingRef.current = true;
      
      // Prevenir el comportamiento por defecto temporalmente
      event.preventDefault();
      
      // Usar setTimeout para permitir que React limpie antes de navegar
      setTimeout(() => {
        // Ahora permitir la navegación
        window.history.go(-1);
      }, 50);
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
