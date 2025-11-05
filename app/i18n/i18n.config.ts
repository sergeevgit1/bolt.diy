import type { RemixI18NextOption } from 'remix-i18next';

export const i18nConfig: RemixI18NextOption = {
  // This is the list of languages your application supports
  supportedLanguages: ['en', 'ru'],
  // This is the language that will be used as a fallback if a translation is missing
  fallbackLng: 'en',
  // The default namespace of i18next to use
  defaultNS: 'common',
  // The list of namespaces your application uses
  ns: ['common'],
  // The directory where your translations will be stored
  // This is relative to the root of your project
  i18next: {
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  },
};

export const supportedLanguages = i18nConfig.supportedLanguages;
export const fallbackLng = i18nConfig.fallbackLng;
