import type { DocsLocale } from './resources';

export function localizedPath(locale: DocsLocale, path = '/') {
  const normalizedPath = path === '/' ? '' : path;
  return `/${locale}${normalizedPath}`;
}
