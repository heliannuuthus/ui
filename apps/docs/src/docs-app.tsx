import { useEffect, type ComponentType } from 'react';
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
import {
  ComponentPage,
  ComponentsPage,
  DesignPage,
  GettingStartedPage,
  HomePage,
} from './pages';

type LocalizedPage = ComponentType;

const LocalizedRoute = ({ Page }: { Page: LocalizedPage }) => {
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

  return <Page />;
};

const LegacyLocaleRedirect = () => {
  const location = useLocation();
  const target = localizedPath(preferredLocale(), location.pathname);
  return (
    <Navigate replace to={`${target}${location.search}${location.hash}`} />
  );
};

export const DocsApp = () => {
  return (
    <Routes>
      <Route path="/:locale" element={<LocalizedRoute Page={HomePage} />} />
      <Route
        path="/:locale/docs/getting-started"
        element={<LocalizedRoute Page={GettingStartedPage} />}
      />
      <Route
        path="/:locale/design"
        element={<LocalizedRoute Page={DesignPage} />}
      />
      <Route
        path="/:locale/components"
        element={<LocalizedRoute Page={ComponentsPage} />}
      />
      <Route
        path="/:locale/components/:component"
        element={<LocalizedRoute Page={ComponentPage} />}
      />
      <Route path="*" element={<LegacyLocaleRedirect />} />
    </Routes>
  );
};
