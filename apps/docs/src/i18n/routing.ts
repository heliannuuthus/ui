import { useParams } from 'react-router-dom';
import { defaultLocale, isDocsLocale, type DocsLocale } from './resources';
export { localizedPath } from './paths';
import { localizedPath } from './paths';

export const useDocsLocale = (): DocsLocale => {
  const { locale } = useParams<{ locale: string }>();
  return isDocsLocale(locale) ? locale : defaultLocale;
};

export const useLocalizedPath = () => {
  const locale = useDocsLocale();
  return (path = '/') => localizedPath(locale, path);
};
