import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../Language/en.json";
import th from '../language/th.json';

i18n.use(initReactI18next).init({
  resources: {
    th: {
      translation: th
    },
    en: {
      translation: en
    },
  },
  lng: "en",
  fallbackLng: "th",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
