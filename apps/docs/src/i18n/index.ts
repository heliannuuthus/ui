import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  defaultLocale,
  htmlLanguage,
  isDocsLocale,
  resources,
  type DocsLocale,
} from './resources';

const storageKey = 'heliannuuthus-ui-locale';

function routeLocale(): DocsLocale | undefined {
  const value = window.location.pathname.split('/').filter(Boolean)[0];
  return isDocsLocale(value) ? value : undefined;
}

function storedLocale(): DocsLocale | undefined {
  try {
    const value = window.localStorage.getItem(storageKey) ?? undefined;
    return isDocsLocale(value) ? value : undefined;
  } catch {
    return undefined;
  }
}

export function preferredLocale(): DocsLocale {
  const saved = storedLocale();
  if (saved) return saved;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function persistLocale(locale: DocsLocale) {
  try {
    window.localStorage.setItem(storageKey, locale);
  } catch {
    // A blocked storage API must not prevent language switching.
  }
}

export function applyDocumentLocale(locale: DocsLocale) {
  document.documentElement.lang = htmlLanguage(locale);
}

void i18n.use(initReactI18next).init({
  defaultNS: 'common',
  fallbackLng: defaultLocale,
  interpolation: {
    escapeValue: false,
  },
  lng: routeLocale() ?? preferredLocale(),
  resources,
  returnEmptyString: false,
  supportedLngs: ['zh', 'en'],
});

export { i18n };
