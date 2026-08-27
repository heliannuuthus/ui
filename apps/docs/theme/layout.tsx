import {
  Button,
  Layout as UiLayout,
  Provider,
  ScrollArea,
  Typography,
} from '@heliannuuthus/ui';
import {
  Content,
  useFrontmatter,
  useLocation,
  usePageData,
} from '@rspress/core/runtime';
import { ExternalLink, Languages, Menu, PanelLeftClose, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  componentGroups,
  componentSlug,
  localizedComponentName,
} from '../src/component-catalog';
import { DocsMdxProvider } from './mdx-content';
import { Search } from './search';

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
  const { frontmatter } = useFrontmatter();
  const { page } = usePageData();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const locale = routeLocale(location.pathname);
  const componentPage = location.pathname.startsWith(`/${locale}/components`);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : 'en';
  }, [locale]);

  if (frontmatter.pageType === 'blank') {
    return (
      <Provider appearance="system">
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

    window.location.assign(
      `/${segments.join('/')}${location.pathname.endsWith('/') ? '/' : ''}${location.search}${location.hash}`
    );
  };

  return (
    <Provider appearance="system">
      <UiLayout className="docs-site-shell">
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

          <Button
            className="docs-brand"
            href={`/${locale}/`}
            size="sm"
            variant="ghost"
          >
            <img alt="" src="/heliannuuthus.png" />
            <Typography.Text as="span" weight="semibold">
              Heliannuuthus UI
            </Typography.Text>
          </Button>

          <nav
            aria-label={locale === 'zh' ? '主要导航' : 'Main navigation'}
            className="docs-primary-nav"
          >
            {mainLinks(locale).map((link) => (
              <Button
                aria-current={
                  isActivePath(location.pathname, link.href)
                    ? 'page'
                    : undefined
                }
                href={link.href}
                key={link.href}
                onClick={() => setNavigationOpen(false)}
                size="sm"
                variant="ghost"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="docs-header-actions">
            <Search />
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
              >
                <nav
                  aria-label={
                    locale === 'zh' ? '组件导航' : 'Component navigation'
                  }
                >
                  <Button
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
                  </Button>
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
                              <Button
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
                              </Button>
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

          <UiLayout.Content className="docs-main">
            <DocsMdxProvider>
              <article className="docs-article rspress-doc">
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
              <Typography.Text as="p" size="sm" weight="semibold">
                {locale === 'zh' ? '本页内容' : 'On this page'}
              </Typography.Text>
              <nav
                aria-label={locale === 'zh' ? '本页目录' : 'Table of contents'}
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
            </UiLayout.Sidebar>
          ) : null}
        </UiLayout>
      </UiLayout>
    </Provider>
  );
};
