import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import translateEN from './en/translate.json';

// the translations
const resources = {
  en: {
    translation: translateEN,
  },
};

i18next.use(initReactI18next).use(languageDetector);

if (!i18next.isInitialized) {
  i18next.init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false, //in case you have any suspense related errors
    },
  });
}

export default i18next;
