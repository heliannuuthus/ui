import type { DocsLocale } from './resources';

export const localizedPath = (locale: DocsLocale, path = '/') => {
  const normalizedPath = path === '/' ? '' : path;
  return `/${locale}${normalizedPath}`;
};
