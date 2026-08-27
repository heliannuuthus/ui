import { useLocation } from '@rspress/core/runtime';

export type DocsPageLocale = 'en' | 'zh';

export const useDocsPageLocale = (): DocsPageLocale => {
  const { pathname } = useLocation();
  return pathname.startsWith('/en/') ? 'en' : 'zh';
};

export const localPath = (locale: DocsPageLocale, path: string) =>
  `/${locale}${path}`;
