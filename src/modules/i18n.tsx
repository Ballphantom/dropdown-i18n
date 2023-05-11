import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    th: {
      translation: {
        "Menu" : "เมนู",
        "Profile": "โปรไฟล์",
        "Account": "บัญชีผู้ใช้",
        "Setting": "ตั้งค่า",
        "Log in": "เข้าสู่ระบบ",
        "Language": "ภาษา",
        "Dropdown & I18next": "เมนู & ภาษา",
      },
    },
    en: {
      translation: {
        "Menu" : "Menu",
        "Profile": "Profile",
        "Account": "Account",
        "Setting": "Setting",
        "Log in": "Log in",
        "Language": "Language",
        "Dropdown & I18next": "Dropdown & I18next",
      },
    },
  },
  lng: "en",
  fallbackLng: "th",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;