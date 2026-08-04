import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  applyDocumentLocale,
  i18n,
  persistLocale,
  preferredLocale,
} from './i18n';
import { localizedPath } from './i18n/routing';
import { isDocsLocale } from './i18n/resources';
import { Showcase } from './showcase';

type ShowcasePage =
  'home' | 'getting-started' | 'design' | 'components' | 'component';

function LocalizedShowcase({ page }: { page: ShowcasePage }) {
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    if (!isDocsLocale(locale)) return;
    void i18n.changeLanguage(locale);
    applyDocumentLocale(locale);
    persistLocale(locale);
  }, [locale]);

  if (!isDocsLocale(locale)) {
    return <Navigate replace to={localizedPath(preferredLocale())} />;
  }

  return <Showcase page={page} />;
}

function LegacyLocaleRedirect() {
  const location = useLocation();
  const target = localizedPath(preferredLocale(), location.pathname);
  return (
    <Navigate replace to={`${target}${location.search}${location.hash}`} />
  );
}

export function DocsApp() {
  return (
    <Routes>
      <Route path="/:locale" element={<LocalizedShowcase page="home" />} />
      <Route
        path="/:locale/docs/getting-started"
        element={<LocalizedShowcase page="getting-started" />}
      />
      <Route
        path="/:locale/design"
        element={<LocalizedShowcase page="design" />}
      />
      <Route
        path="/:locale/components"
        element={<LocalizedShowcase page="components" />}
      />
      <Route
        path="/:locale/components/:component"
        element={<LocalizedShowcase page="component" />}
      />
      <Route path="*" element={<LegacyLocaleRedirect />} />
    </Routes>
  );
}
