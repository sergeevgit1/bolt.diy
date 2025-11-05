import { RemixI18Next } from 'remix-i18next';
import { i18nConfig } from './i18n.config';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18n = new RemixI18Next({
  detection: {
    // This will detect the language from the request's header
    order: ['cookie'],
    // This is the name of the cookie to use
    cookieKey: 'lng',
  },
  // This is the i18next configuration
  i18next: {
    ...i18nConfig.i18next,
    // We need to set the backend to null so that i18next-browser-languagedetector can work
    backend: null,
  },
  // The backend you want to use to load the translations
  // Tip: You could also use i18next-http-backend if you have your translations on an external server
  // We use the LanguageDetector to detect the language from the browser
  detection: {
    order: ['cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie'],
  },
  plugins: [LanguageDetector],
});
