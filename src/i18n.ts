import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    th: {
      translation: {
        "Profile": "โปรไฟล์",
        "Account": "บัญชีผู้ใช้",
        "Setting": "ตั้งค่า",
        "Log in": "เข้าสู่ระบบ",
        "Dropdown & i18next": "ตัวเลือก และ การแปลภาษา",
      },
    },
    en: {
      translation: {
        "Profile": "Profile",
        "Account": "Account",
        "Setting": "Setting",
        "Log in": "Log in",
        "Dropdown & i18next": "Dropdown & i18next",
      },
    },
  },
  lng: "th",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
