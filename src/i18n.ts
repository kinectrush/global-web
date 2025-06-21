// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import en from './locales/en/translation.json';
import vi from './locales/vi/translation.json';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to react-i18next.
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'en', // Fallback language if user's language is not available
    debug: true, // Enable debug mode (useful during development)
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;