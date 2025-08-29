'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// ID de Google Analytics actualizado
const GA_TRACKING_ID = 'G-TGGM0S4G83'; 

export default function Analytics() {
  useEffect(() => {
    // Comprobar si el usuario ha dado su consentimiento para las cookies
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted' && typeof window !== 'undefined' && window.gtag) {
      // Actualizar consentimiento de cookies para Analytics
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
      
      // Enviar evento de consentimiento otorgado
      window.gtag('event', 'consent_granted', {
        'event_category': 'privacy',
        'event_label': 'analytics_cookies_accepted'
      });
    }
  }, []);

  return (
    <>
      {/* Google Analytics 4 - Script principal */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuración de Google Analytics 4
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            cookie_domain: '.probioticosparatodos.com',
            cookie_expires: 60 * 60 * 24 * 395, // 395 días
            allow_google_signals: false // Se activará después del consentimiento
          });
          
          // Configuración de consentimiento por defecto (GDPR compliance)
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'wait_for_update': 500
          });
          
          // Eventos personalizados para el sitio de probióticos
          gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href,
            'content_group1': 'Probiotics Content'
          });
        `}
      </Script>
    </>
  );
} 