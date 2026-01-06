export const gtmEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventData,
    });

    // Solo para debugging en desarrollo
    if (import.meta.env.DEV) {
      console.log('📊 GTM Event:', eventName, eventData);
    }
  }
};

/**
 * Eventos predefinidos para consistencia en el tracking
 */
export const GTM_EVENTS = {
  // CTAs principales
  CTA_CLICK: 'cta_click',

  // Contacto
  WHATSAPP_CLICK: 'whatsapp_click',
  FORM_SUBMIT: 'form_submit',
  FORM_START: 'form_start',

  // Navegación
  SECTION_VIEW: 'section_view',
  SCROLL_DEPTH: 'scroll_depth',

  // Servicios
  SERVICE_CLICK: 'service_click',
  SERVICE_VIEW: 'service_view',

  // Social
  SOCIAL_CLICK: 'social_click',
} as const;

declare global {
  interface Window {
    dataLayer: any[];
  }
}