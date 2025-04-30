'use client';

import { useState, useEffect } from 'react';

// Extender el tipo Window para incluir gtag
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya ha dado su consentimiento
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }

    // Si el usuario ha aceptado, activar Google Analytics
    if (consent === 'accepted') {
      enableGoogleAnalytics();
    }
  }, []);

  // Función para habilitar Google Analytics
  const enableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  // Función para deshabilitar Google Analytics
  const disableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    enableGoogleAnalytics();
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    disableGoogleAnalytics();
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Política de Cookies</h3>
            <p className="text-sm text-gray-600">
              Este sitio utiliza cookies para analizar el tráfico y mejorar tu experiencia. 
              Al continuar, aceptas nuestro uso de cookies. Puedes consultar nuestra{' '}
              <a href="/politica-privacidad" className="text-green-600 underline">
                política de privacidad
              </a>{' '}
              para más información.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-green-600 rounded-lg text-sm font-medium text-white hover:bg-green-700 transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 