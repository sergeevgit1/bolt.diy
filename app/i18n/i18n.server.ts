import { RemixI18Next } from 'remix-i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'node:path';
import { i18nConfig } from './i18n.config';

export const i18n = new RemixI18Next({
  detection: {
    // This will detect the language from the request's header
    order: ['header', 'cookie'],
    // This is the name of the cookie to use
    cookieKey: 'lng',
    // This is the name of the header to use
    header: 'Accept-Language',
  },
  // This is the i18next configuration
  i18next: {
    ...i18nConfig.i18next,
    backend: {
      loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
    },
  },
  // The backend you want to use to load the translations
  // Tip: You could also use i18next-http-backend if you have your translations on an external server
  backend: Backend,
});
