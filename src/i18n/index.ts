import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // Si algo falla, usar español
    lng: 'es', // Idioma por defecto
    
    resources: {
      en: { translation: en },
      es: { translation: es }
    },

    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },

    detection: {
      order: ['localStorage', 'navigator'], // Primero preferencia guardada, luego navegador
      caches: ['localStorage'], // Guardar elección del usuario
      lookupLocalStorage: 'i18nextLng' // Nombre de la key en localStorage
    },

    debug: false // Cambiar a true para ver logs en desarrollo
  });

export default i18n;