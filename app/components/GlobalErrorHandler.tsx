'use client';

import { useEffect } from 'react';

export default function GlobalErrorHandler() {
  useEffect(() => {
    // Manejar errores no capturados
    const handleError = (event: ErrorEvent) => {
      const error = event.error;
      
      // Verificar si es el error específico de removeChild
      if (
        error?.message?.includes('removeChild') ||
        error?.message?.includes('Cannot read properties of null') ||
        error?.stack?.includes('commitDeletionEffectsOnFiber')
      ) {
        console.warn('Navigation error suppressed:', error.message);
        event.preventDefault();
        return false;
      }
    };

    // Manejar errores de promesas no capturadas
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason;
      
      if (
        error?.message?.includes('removeChild') ||
        error?.message?.includes('Cannot read properties of null') ||
        error?.stack?.includes('commitDeletionEffectsOnFiber')
      ) {
        console.warn('Navigation promise rejection suppressed:', error.message);
        event.preventDefault();
        return false;
      }
    };

    // Interceptar errores de React
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      
      if (
        message.includes('removeChild') ||
        message.includes('Cannot read properties of null') ||
        message.includes('commitDeletionEffectsOnFiber')
      ) {
        console.warn('React navigation error suppressed:', message);
        return;
      }
      
      originalConsoleError.apply(console, args);
    };

    // Agregar listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Interceptar navegación del navegador para limpiar antes
    const handleBeforeUnload = () => {
      // Limpiar cualquier timeout o intervalo activo
      try {
        const highestTimeoutId = setTimeout(() => {}, 0) as any;
        clearTimeout(highestTimeoutId);
        
        for (let i = 1; i < 1000; i++) {
          clearTimeout(i);
          clearInterval(i);
        }
      } catch (e) {
        // Ignorar errores de limpieza
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      console.error = originalConsoleError;
    };
  }, []);

  return null;
}
