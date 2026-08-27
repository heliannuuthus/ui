import { Button, Provider } from '@heliannuuthus/ui';
import { useLocation } from '@rspress/core/runtime';
import {
  Layout as OriginalLayout,
  Link,
  type LayoutProps,
} from '@rspress/core/theme-original';
import { Languages } from 'lucide-react';
import { useEffect } from 'react';

const routeLocale = (pathname: string) =>
  pathname.split('/').filter(Boolean)[0] === 'en' ? 'en' : 'zh';

const Brand = () => {
  const { pathname } = useLocation();
  const locale = routeLocale(pathname);

  return (
    <div className="rp-nav__title docs-brand">
      <Link className="rp-nav__title__link" href={`/${locale}/`}>
        <img
          alt="Heliannuuthus UI"
          className="rspress-logo rp-nav__title__logo-image"
          src="/heliannuuthus.png"
        />
        <span>Heliannuuthus UI</span>
      </Link>
    </div>
  );
};

const LocaleSwitch = () => {
  const location = useLocation();
  const locale = routeLocale(location.pathname);
  const nextLocale = locale === 'zh' ? 'en' : 'zh';
  const segments = location.pathname.split('/').filter(Boolean);

  if (segments[0] === 'zh' || segments[0] === 'en') {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }

  const href = `/${segments.join('/')}${
    location.pathname.endsWith('/') ? '/' : ''
  }${location.search}${location.hash}`;

  return (
    <Button
      aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
      className="docs-locale-switch"
      href={href}
      size="sm"
      variant="ghost"
    >
      <Languages aria-hidden="true" />
      <span>{locale === 'zh' ? 'EN' : '中文'}</span>
    </Button>
  );
};

const DocsNavigation = () => {
  const { pathname } = useLocation();
  const locale = routeLocale(pathname);
  const links =
    locale === 'zh'
      ? [
          ['快速开始', `/${locale}/docs/getting-started`],
          ['设计理念', `/${locale}/design`],
          ['组件', `/${locale}/components`],
        ]
      : [
          ['Getting started', `/${locale}/docs/getting-started`],
          ['Design', `/${locale}/design`],
          ['Components', `/${locale}/components`],
        ];

  return (
    <nav className="docs-primary-nav">
      {links.map(([label, href]) => (
        <Link href={href} key={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export const Layout = (props: LayoutProps) => {
  const { pathname } = useLocation();
  const locale = routeLocale(pathname);

  useEffect(() => {
    const language = locale === 'zh' ? 'zh-Hans' : 'en';
    const root = document.documentElement;
    const applyLanguage = () => {
      if (root.lang !== language) root.lang = language;
    };
    const observer = new MutationObserver(applyLanguage);

    applyLanguage();
    observer.observe(root, { attributeFilter: ['lang'], attributes: true });

    return () => observer.disconnect();
  }, [locale]);

  return (
    <Provider appearance="system">
      <OriginalLayout
        {...props}
        afterNavTitle={<DocsNavigation />}
        beforeNavMenu={<LocaleSwitch />}
        navTitle={<Brand />}
      />
    </Provider>
  );
};
