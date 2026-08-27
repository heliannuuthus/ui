import {
  Button,
  DropdownMenu,
  Layout as UiLayout,
  Provider,
  ScrollArea,
  Toggle,
  Typography,
} from '@heliannuuthus/ui';
import {
  Content,
  useFrontmatter,
  useLocation,
  useNavigate,
  usePageData,
} from '@rspress/core/runtime';
import {
  ExternalLink,
  Languages,
  Menu,
  Monitor,
  Moon,
  PanelLeftClose,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  componentGroups,
  componentSlug,
  localizedComponentName,
} from '../src/component-catalog';
import { DocsMdxProvider } from './mdx-content';
import { InternalButtonLink } from './internal-link';
import { Search } from './search';
import { isThemePreference, useThemeState } from './theme-state';

type Locale = 'en' | 'zh';

const groupNames = {
  actions: { en: 'Actions and menus', zh: '操作与菜单' },
  content: { en: 'Content', zh: '内容展示' },
  dataDisplay: { en: 'Data display', zh: '数据展示' },
  feedback: { en: 'Feedback', zh: '反馈' },
  forms: { en: 'Forms', zh: '表单' },
  general: { en: 'General', zh: '通用' },
  layout: { en: 'Layout', zh: '布局' },
  navigation: { en: 'Navigation', zh: '导航' },
  overlays: { en: 'Overlays', zh: '浮层' },
} as const;

const routeLocale = (pathname: string): Locale =>
  pathname.split('/').filter(Boolean)[0] === 'en' ? 'en' : 'zh';

const normalizePath = (pathname: string) => pathname.replace(/\/$/, '');

const isActivePath = (pathname: string, href: string) => {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  return current === target || current.startsWith(`${target}/`);
};

const mainLinks = (locale: Locale) => [
  {
    href: `/${locale}/docs/getting-started`,
    label: locale === 'zh' ? '快速开始' : 'Getting started',
  },
  {
    href: `/${locale}/design`,
    label: locale === 'zh' ? '设计理念' : 'Design',
  },
  {
    href: `/${locale}/components`,
    label: locale === 'zh' ? '组件' : 'Components',
  },
];

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { frontmatter } = useFrontmatter();
  const { page } = usePageData();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [theme, setTheme, resolvedTheme] = useThemeState();
  const locale = routeLocale(location.pathname);
  const componentPage = location.pathname.startsWith(`/${locale}/components`);
  const navigationLinks = mainLinks(locale);
  const activeNavigationPath = navigationLinks.find((link) =>
    isActivePath(location.pathname, link.href)
  )?.href;
  const pageType =
    typeof frontmatter.pageType === 'string' ? frontmatter.pageType : 'article';

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : 'en';
  }, [locale]);

  if (frontmatter.pageType === 'blank') {
    return (
      <Provider appearance={theme}>
        <Content />
      </Provider>
    );
  }

  const switchLocale = () => {
    const nextLocale = locale === 'zh' ? 'en' : 'zh';
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments[0] === 'zh' || segments[0] === 'en') {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    void navigate(
      `/${segments.join('/')}${location.pathname.endsWith('/') ? '/' : ''}${location.search}${location.hash}`
    );
  };

  return (
    <Provider appearance={theme}>
      <UiLayout className="docs-site-shell">
        <Button
          className="docs-skip-link"
          href="#main-content"
          size="sm"
          variant="ghost"
        >
          {locale === 'zh' ? '跳到正文' : 'Skip to content'}
        </Button>
        <UiLayout.Header className="docs-header">
          {componentPage ? (
            <Button
              aria-label={
                navigationOpen
                  ? locale === 'zh'
                    ? '关闭导航'
                    : 'Close navigation'
                  : locale === 'zh'
                    ? '打开导航'
                    : 'Open navigation'
              }
              className="docs-mobile-menu"
              onClick={() => setNavigationOpen((open) => !open)}
              size="icon"
              variant="ghost"
            >
              {navigationOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </Button>
          ) : null}

          <InternalButtonLink
            className="docs-brand"
            href={`/${locale}/`}
            size="sm"
            variant="ghost"
          >
            <img alt="" height="30" src="/heliannuuthus.png" width="30" />
            <Typography.Text as="span" weight="semibold">
              Heliannuuthus UI
            </Typography.Text>
          </InternalButtonLink>

          <Toggle.Group
            aria-label={locale === 'zh' ? '主要导航' : 'Main navigation'}
            className="docs-primary-nav"
            items={navigationLinks.map((link) => ({
              'aria-label': link.label,
              label: link.label,
              value: link.href,
            }))}
            onChange={(paths) => {
              const nextPath = paths[paths.length - 1];
              if (nextPath && nextPath !== activeNavigationPath) {
                setNavigationOpen(false);
                void navigate(nextPath);
              }
            }}
            value={activeNavigationPath ? [activeNavigationPath] : []}
          />

          <div className="docs-header-actions">
            <Search />
            <DropdownMenu
              align="end"
              classNames={{ content: 'docs-theme-menu' }}
              items={[
                {
                  type: 'label',
                  label: locale === 'zh' ? '外观' : 'Appearance',
                },
                {
                  type: 'radio',
                  value: theme,
                  onChange: (value) => {
                    if (isThemePreference(value)) setTheme(value);
                  },
                  items: [
                    {
                      label: (
                        <span className="docs-theme-option">
                          <Sun aria-hidden="true" />
                          {locale === 'zh' ? '浅色' : 'Light'}
                        </span>
                      ),
                      value: 'light',
                    },
                    {
                      label: (
                        <span className="docs-theme-option">
                          <Moon aria-hidden="true" />
                          {locale === 'zh' ? '深色' : 'Dark'}
                        </span>
                      ),
                      value: 'dark',
                    },
                    {
                      label: (
                        <span className="docs-theme-option">
                          <Monitor aria-hidden="true" />
                          {locale === 'zh' ? '跟随系统' : 'System'}
                        </span>
                      ),
                      value: 'system',
                    },
                  ],
                },
              ]}
              side="bottom"
              size="sm"
              trigger={
                <Button
                  aria-label={
                    locale === 'zh'
                      ? `切换外观，当前为${theme === 'system' ? '跟随系统' : resolvedTheme === 'dark' ? '深色' : '浅色'}`
                      : `Change appearance, currently ${theme === 'system' ? 'system' : resolvedTheme}`
                  }
                  className="docs-theme-switch"
                  size="icon-sm"
                  title={locale === 'zh' ? '切换外观' : 'Change appearance'}
                  variant="ghost"
                >
                  {theme === 'system' ? (
                    <Monitor aria-hidden="true" />
                  ) : resolvedTheme === 'dark' ? (
                    <Moon aria-hidden="true" />
                  ) : (
                    <Sun aria-hidden="true" />
                  )}
                </Button>
              }
            />
            <Button
              aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
              className="docs-locale-switch"
              onClick={switchLocale}
              size="sm"
              variant="ghost"
            >
              <Languages aria-hidden="true" />
              <Typography.Text as="span" size="sm" weight="medium">
                {locale === 'zh' ? 'EN' : '中文'}
              </Typography.Text>
            </Button>
            <Button
              aria-label="GitHub"
              href="https://github.com/heliannuuthus/ui"
              size="icon-sm"
              target="_blank"
              variant="ghost"
            >
              <ExternalLink aria-hidden="true" />
            </Button>
          </div>
        </UiLayout.Header>

        <UiLayout className="docs-body-layout">
          {componentPage ? (
            <UiLayout.Sidebar
              className="docs-sidebar"
              collapsible={false}
              data-open={navigationOpen || undefined}
              width="17rem"
            >
              <ScrollArea
                className="docs-sidebar-scroll"
                orientation="vertical"
                scrollbar={{ size: 'sm', visibility: 'auto' }}
              >
                <nav
                  aria-label={
                    locale === 'zh' ? '组件导航' : 'Component navigation'
                  }
                >
                  <InternalButtonLink
                    aria-current={
                      normalizePath(location.pathname) ===
                      `/${locale}/components`
                        ? 'page'
                        : undefined
                    }
                    block
                    className="docs-sidebar-overview"
                    href={`/${locale}/components/`}
                    onClick={() => setNavigationOpen(false)}
                    size="sm"
                    variant="ghost"
                  >
                    {locale === 'zh' ? '组件总览' : 'Overview'}
                  </InternalButtonLink>
                  {componentGroups.map((group) => (
                    <section className="docs-sidebar-group" key={group.key}>
                      <Typography.Title level={2}>
                        {groupNames[group.key][locale]}
                      </Typography.Title>
                      <ul>
                        {group.items.map((name) => {
                          const href = `/${locale}/components/${componentSlug(name)}`;
                          return (
                            <li key={name}>
                              <InternalButtonLink
                                aria-current={
                                  normalizePath(location.pathname) === href
                                    ? 'page'
                                    : undefined
                                }
                                block
                                href={href}
                                onClick={() => setNavigationOpen(false)}
                                size="sm"
                                variant="ghost"
                              >
                                {localizedComponentName(name, locale)}
                              </InternalButtonLink>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  ))}
                </nav>
              </ScrollArea>
              <Button
                className="docs-sidebar-close"
                onClick={() => setNavigationOpen(false)}
                size="sm"
                variant="ghost"
              >
                <PanelLeftClose aria-hidden="true" />
                {locale === 'zh' ? '收起导航' : 'Close navigation'}
              </Button>
            </UiLayout.Sidebar>
          ) : null}

          {navigationOpen ? (
            <Button
              aria-label={locale === 'zh' ? '关闭导航' : 'Close navigation'}
              className="docs-sidebar-backdrop"
              onClick={() => setNavigationOpen(false)}
              variant="ghost"
            />
          ) : null}

          <UiLayout.Content
            className="docs-main"
            id="main-content"
            tabIndex={-1}
          >
            <DocsMdxProvider>
              <article
                className="docs-article rspress-doc"
                data-page-type={pageType}
              >
                <Content />
              </article>
            </DocsMdxProvider>
          </UiLayout.Content>

          {page.toc.length > 0 ? (
            <UiLayout.Sidebar
              className="docs-toc"
              collapsible={false}
              side="end"
              width="14rem"
            >
              <ScrollArea
                className="docs-toc-scroll"
                orientation="vertical"
                scrollbar={{ size: 'sm', visibility: 'auto' }}
              >
                <div className="docs-toc-content">
                  <Typography.Text as="p" size="sm" weight="semibold">
                    {locale === 'zh' ? '本页内容' : 'On this page'}
                  </Typography.Text>
                  <nav
                    aria-label={
                      locale === 'zh' ? '本页目录' : 'Table of contents'
                    }
                  >
                    {page.toc.map((item) => (
                      <Button
                        block
                        data-depth={item.depth}
                        href={`#${item.id}`}
                        key={item.id}
                        size="xs"
                        variant="link"
                      >
                        {item.text}
                      </Button>
                    ))}
                  </nav>
                </div>
              </ScrollArea>
            </UiLayout.Sidebar>
          ) : null}
        </UiLayout>
      </UiLayout>
    </Provider>
  );
};
