import "intl-pluralrules";
import { NativeModules, Platform } from 'react-native'
import i18n, { changeLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from './locales/en_US.json';
import pt_BR from './locales/pt_BR.json';

const defaultLocale = Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale ||
  NativeModules.SettingsManager.settings.AppleLanguages[0] : NativeModules.I18nManager.localeIdentifier;

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en_US: en_US,
      pt_BR: pt_BR
    }
  });

changeLanguage(defaultLocale);
console.log(defaultLocale);
export default i18n;