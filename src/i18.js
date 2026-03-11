import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import rus from './locales/RUS.json'
import uzb from './locales/UZB.json'
import eng from './locales/ENG.json';
i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: eng },
    rus: { translation: rus },
    uzb: { translation: uzb },
  },
  lng: 'eng',
  fallbackLng: 'uzb',
  interpolation: {
    escapeValue: false
  }
})

export default i18n