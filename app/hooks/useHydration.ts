'use client';

import { useState, useEffect } from 'react';

/**
 * Hook para manejar la hidratación segura en componentes client-side.
 * Previene errores de hidratación cuando el estado inicial del servidor 
 * no coincide con el estado inicial del cliente.
 */
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}

/**
 * Hook para estado que solo se inicializa después de la hidratación.
 * Útil para estado que puede diferir entre servidor y cliente.
 */
export function useHydratedState<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);
  const isHydrated = useHydration();

  const safeSetState = (value: T | ((prev: T) => T)) => {
    if (isHydrated) {
      setState(value);
    }
  };

  return [state, safeSetState, isHydrated] as const;
}
