/**
 * @description load additional plugins to i18next for the multi language feature
 */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {languageDetectorPlugin} from 'utils/languageDetectorPlugin';
import {resources} from './resources';

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false, //in case you have any suspense related errors
    },
  });

export default i18n;
