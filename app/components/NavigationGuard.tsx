'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationGuardProps {
  children: ReactNode;
}

export default function NavigationGuard({ children }: NavigationGuardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isUnmountingRef = useRef(false);
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    isUnmountingRef.current = false;
    
    const currentCleanupTimeout = cleanupTimeoutRef.current;
    
    // Interceptar navegación del navegador
    const handlePopState = () => {
      // Marcar que estamos navegando
      isUnmountingRef.current = true;
      
      // Limpiar inmediatamente cualquier timeout
      if (currentCleanupTimeout) {
        clearTimeout(currentCleanupTimeout);
      }
    };

    const handleBeforeUnload = () => {
      isUnmountingRef.current = true;
      if (currentCleanupTimeout) {
        clearTimeout(currentCleanupTimeout);
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
      
      const timeoutId = cleanupTimeoutRef.current;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // No es necesario limpiar el contenedor directamente, React se encarga de ello.
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
