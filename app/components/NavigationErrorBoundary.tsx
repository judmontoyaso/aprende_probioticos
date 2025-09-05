'use client';

import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default class NavigationErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Verificar si es el error específico de removeChild
    const isNavigationError = 
      error.message?.includes('removeChild') ||
      error.message?.includes('Cannot read properties of null') ||
      error.stack?.includes('commitDeletionEffectsOnFiber');

    if (isNavigationError) {
      console.warn('Navigation error caught and handled:', error.message);
      // No mostrar error para problemas de navegación
      return { hasError: false };
    }

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Verificar si es el error específico de removeChild
    const isNavigationError = 
      error.message?.includes('removeChild') ||
      error.message?.includes('Cannot read properties of null') ||
      error.stack?.includes('commitDeletionEffectsOnFiber');

    if (isNavigationError) {
      console.warn('Navigation error caught and suppressed:', error.message);
      
      // Intentar limpiar el estado de error después de un breve delay
      setTimeout(() => {
        this.setState({ hasError: false, error: undefined });
      }, 100);
      
      return;
    }

    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Algo salió mal
            </h2>
            <p className="text-gray-600 mb-4">
              Ha ocurrido un error inesperado. Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
