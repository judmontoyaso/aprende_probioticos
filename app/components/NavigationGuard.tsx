'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavigationGuardProps {
  children: ReactNode;
}

export default function NavigationGuard({ children }: NavigationGuardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isUnmountingRef = useRef(false);
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    isUnmountingRef.current = false;
    
    // Interceptar navegación del navegador
    const handlePopState = (event: PopStateEvent) => {
      // Marcar que estamos navegando
      isUnmountingRef.current = true;
      
      // Limpiar inmediatamente cualquier timeout
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
      
      // Dar tiempo para limpieza antes de permitir navegación
      setTimeout(() => {
        // Forzar limpieza del contenedor
        if (containerRef.current) {
          try {
            const container = containerRef.current;
            // Remover todos los event listeners
            const allElements = container.querySelectorAll('*');
            allElements.forEach(el => {
              const element = el as HTMLElement;
              try {
                // Clonar y reemplazar para remover todos los listeners
                const newElement = element.cloneNode(true);
                if (element.parentNode) {
                  element.parentNode.replaceChild(newElement, element);
                }
              } catch (e) {
                // Ignorar errores de limpieza
              }
            });
          } catch (error) {
            // Ignorar errores de limpieza
          }
        }
      }, 10);
    };

    const handleBeforeUnload = () => {
      isUnmountingRef.current = true;
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
    };

    // Solo agregar listeners si estamos en el cliente
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState, { passive: true });
      window.addEventListener('beforeunload', handleBeforeUnload, { passive: true });
    }
    
    return () => {
      isUnmountingRef.current = true;
      
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handlePopState);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }
      
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
      
      // Limpieza segura del contenedor
      if (containerRef.current) {
        try {
          const container = containerRef.current;
          // Timeout para permitir que React limpie primero
          cleanupTimeoutRef.current = setTimeout(() => {
            if (container && container.parentNode && isUnmountingRef.current) {
              try {
                // Solo intentar limpiar si aún existe
                container.innerHTML = '';
              } catch (e) {
                // Ignorar errores de limpieza tardía
              }
            }
          }, 0);
        } catch (error) {
          // Ignorar errores de limpieza
        }
      }
    };
  }, [pathname]);

  return (
    <div 
      ref={containerRef} 
      className="navigation-guard-container"
      data-navigation-guard="true"
    >
      {children}
    </div>
  );
}
