import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import sv from '../locales/sv.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';
import tr from '../locales/tr.json';
import ur from '../locales/ur.json';

export const languageResources = {
  ur: {translation: ur},
  en: {translation: en},
  sv: {translation: sv},
  de: {translation: de},
  fr: {translation: fr},
  tr: {translation: tr},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
