import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import { Badge } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Card } from '@heliannuuthus/ui';
import { Command } from '@heliannuuthus/ui';
import { Empty } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Item } from '@heliannuuthus/ui';
import { Label } from '@heliannuuthus/ui';
import { Masonry } from '@heliannuuthus/ui';
import { Separator } from '@heliannuuthus/ui';
import { Sidebar } from '@heliannuuthus/ui';
import { Toggle } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
import { Tabs } from '@heliannuuthus/ui';
import { Tooltip } from '@heliannuuthus/ui';
import { Typography } from '@heliannuuthus/ui';
import {
  ArrowRight,
  Blocks,
  Box,
  Check,
  Code2,
  Copy,
  Github,
  Languages,
  LayoutGrid,
  Menu,
  Moon,
  Package,
  PackagePlus,
  Search,
  SearchX,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import {
  Navigate,
  NavLink,
  useHref,
  useLinkClickHandler,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  componentDocumentation,
  type ApiProperty,
  type ComponentExample,
} from './component-docs';
import {
  componentCatalog,
  componentGroups,
  componentSlug,
  localizedComponentName,
} from './component-catalog';
import { localizedComponentMetadata } from './component-metadata';
import { ComponentHarness } from './component-harness';
import { docsCopy } from './i18n/content';
import { useDocsLocale, useLocalizedPath } from './i18n/routing';
import {
  PackageManagerIcon,
  type PackageManagerName,
} from './package-manager-icon';
import { SyntaxCode } from './syntax-code';

const repositoryUrl = 'https://github.com/heliannuuthus/ui';
const docsBasePath = window.location.hostname.endsWith('github.io')
  ? '/ui'
  : '';
const avatarUrl = `${docsBasePath}/heliannuuthus.png`;
const installCommands = {
  pnpm: 'pnpm add @heliannuuthus/ui',
  npm: 'npm install @heliannuuthus/ui',
  yarn: 'yarn add @heliannuuthus/ui',
  bun: 'bun add @heliannuuthus/ui',
} as const;
type PackageManager = PackageManagerName;

const groupApiProperties = (
  properties: ApiProperty[],
  defaultComponent: string
) => {
  const groups = new Map<string, ApiProperty[]>();

  for (const property of properties) {
    const component = property.component ?? defaultComponent;
    const group = groups.get(component);

    if (group) {
      group.push(property);
    } else {
      groups.set(component, [property]);
    }
  }

  return Array.from(groups, ([component, api]) => ({ api, component }));
};

const classNameSlotExamples: Record<string, string> = {
  action: 'text-primary',
  content: 'space-y-4',
  description: 'text-muted-foreground',
  footer: 'justify-end gap-2',
  header: 'border-primary/20 bg-primary/5',
  title: 'text-lg font-semibold',
};

const TypeDefinitionExplorer = ({
  api,
  component,
}: {
  api: ApiProperty[];
  component: string;
}) => {
  const { t } = useTranslation();
  const [activeName, setActiveName] = useState(api[0]?.name ?? '');
  const [copied, setCopied] = useState(false);
  const activeProperty =
    api.find((property) => property.name === activeName) ?? api[0];

  if (!activeProperty) {
    return null;
  }

  const activeIndex = api.indexOf(activeProperty);
  const isClassNames = component.endsWith('ClassNames');
  const owner = component.replace(/ClassNames$/, '');
  const declarationName =
    component === 'ColumnDef' ? 'ColumnDef<TData, TValue>' : component;
  const exampleClassName = isClassNames
    ? (classNameSlotExamples[activeProperty.name] ?? 'your-class-name')
    : '';
  const usageExample = isClassNames
    ? `<${owner}
  classNames={{
    ${activeProperty.name}: '${exampleClassName}',
  }}
/>`
    : `type FieldType = ${declarationName}['${activeProperty.name}']`;

  const copyUsage = async () => {
    await navigator.clipboard.writeText(usageExample);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="class-names-explorer">
      <section className="class-names-definition">
        <div className="class-names-definition-heading">
          <span>{t('docs.typeDefinition')}</span>
          <code>export type</code>
        </div>
        <div
          aria-label={t('docs.field', { component })}
          className="class-names-source"
        >
          <p>
            <span>type</span> <strong>{declarationName}</strong> = {'{'}
          </p>
          {api.map((property, index) => (
            <button
              aria-pressed={activeProperty.name === property.name}
              data-active={
                activeProperty.name === property.name ? '' : undefined
              }
              key={property.name}
              onClick={() => setActiveName(property.name)}
              onFocus={() => setActiveName(property.name)}
              onMouseEnter={() => setActiveName(property.name)}
              type="button"
            >
              <span aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <code>
                <strong>{property.name}</strong>
                <i>{property.required ? ':' : '?:'}</i> {property.type};
              </code>
            </button>
          ))}
          <p>{'}'}</p>
        </div>
      </section>

      <section
        aria-live="polite"
        className="class-names-inspector"
        data-property={activeProperty.name}
        key={activeProperty.name}
      >
        <div className="class-names-inspector-heading">
          <span>
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(api.length).padStart(2, '0')}
          </span>
          <code>
            {isClassNames
              ? `classNames.${activeProperty.name}`
              : activeProperty.name}
          </code>
        </div>
        <p>{activeProperty.description}</p>
        <dl>
          <div>
            <dt>{t('components.type')}</dt>
            <dd>
              <code>{activeProperty.type}</code>
            </dd>
          </div>
          <div>
            <dt>{t(isClassNames ? 'docs.scope' : 'docs.constraint')}</dt>
            <dd>
              {isClassNames
                ? t('docs.internalNode', { component: owner })
                : activeProperty.required
                  ? t('docs.required')
                  : t('docs.optional')}
            </dd>
          </div>
        </dl>

        <div className="class-names-usage-heading">
          <span>{t(isClassNames ? 'docs.usage' : 'docs.typeAccess')}</span>
          <Button
            aria-label={t(copied ? 'actions.copied' : 'actions.copy')}
            onClick={copyUsage}
            size="icon-sm"
            variant="ghost"
          >
            {copied ? <Check /> : <Copy />}
          </Button>
        </div>
        <pre className="class-names-usage">
          <code>{usageExample}</code>
        </pre>
      </section>
    </div>
  );
};

const spaciousComponentSlugs = new Set<string>(
  componentGroups
    .filter((group) => group.title === '布局' || group.title === '导航')
    .flatMap((group) => group.items.map(componentSlug))
);

const demoCode = docsCopy(`import { Button } from '@heliannuuthus/ui'

export const ButtonDemo = () => {
  return (
    <div className="flex gap-3">
      <Button>开始使用</Button>
      <Button variant="outline">查看文档</Button>
    </div>
  )
}`);
const styleImportCode = `import '@heliannuuthus/ui/styles.css'
import './app.css'`;

const navItems = [
  { labelKey: 'navigation.gettingStarted', to: '/docs/getting-started' },
  { labelKey: 'navigation.design', to: '/design' },
  { labelKey: 'navigation.components', to: '/components' },
];

const Brand = () => {
  const { t } = useTranslation();
  const path = useLocalizedPath();

  return (
    <NavLink
      className="brand"
      to={path()}
      aria-label={`Heliannuuthus UI ${t('navigation.home')}`}
    >
      <span className="brand-avatar" aria-hidden="true">
        <img src={avatarUrl} alt="" />
      </span>
      <span>
        <strong>Heliannuuthus</strong>
        <small>UI</small>
      </span>
    </NavLink>
  );
};

const SiteHeader = ({
  dark,
  onSearch,
  onTheme,
}: {
  dark: boolean;
  onSearch: () => void;
  onTheme: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const locale = useDocsLocale();
  const location = useLocation();
  const path = useLocalizedPath();
  const searchShortcut =
    typeof navigator !== 'undefined' &&
    !/Mac|iPhone|iPad/.test(navigator.platform)
      ? 'Ctrl K'
      : '⌘ K';
  const nextLocale = locale === 'zh' ? 'en' : 'zh';
  const switchLanguage = () => {
    const nextPath = location.pathname.replace(
      /^\/(?:zh|en)(?=\/|$)/,
      `/${nextLocale}`
    );
    window.location.assign(`${nextPath}${location.search}${location.hash}`);
  };

  return (
    <header className="site-header">
      <Brand />
      <Button
        className="mobile-menu"
        size="icon"
        variant="ghost"
        aria-controls="site-navigation"
        aria-label={t(open ? 'navigation.close' : 'navigation.open')}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <nav
        id="site-navigation"
        className={open ? 'site-nav is-open' : 'site-nav'}
        aria-label={t('navigation.main')}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={path(item.to)}
            onClick={() => setOpen(false)}
          >
            {t(item.labelKey)}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <Button className="search-trigger" variant="outline" onClick={onSearch}>
          <Search size={16} />
          <span>{t('search.trigger')}</span>
          <kbd>{searchShortcut}</kbd>
        </Button>
        <Button
          className="mobile-search-trigger"
          size="icon"
          variant="ghost"
          aria-label={t('search.trigger')}
          onClick={onSearch}
        >
          <Search />
        </Button>
        <Button
          className="icon-button"
          href={repositoryUrl}
          size="icon"
          variant="ghost"
          aria-label={t('actions.viewOnGitHub')}
        >
          <Github />
        </Button>
        <Button
          className="icon-button"
          size="icon"
          variant="ghost"
          onClick={onTheme}
          aria-label={t('actions.toggleTheme')}
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
        <Button
          aria-label={t('language.switchLabel')}
          className="language-trigger"
          onClick={switchLanguage}
          variant="ghost"
        >
          <Languages />
          <span>{nextLocale === 'en' ? 'EN' : '中文'}</span>
        </Button>
      </div>
    </header>
  );
};

const HomePage = () => {
  const path = useLocalizedPath();
  const { t } = useTranslation();
  const [copiedManager, setCopiedManager] = useState<PackageManager | null>(
    null
  );
  const copyInstall = async (manager: PackageManager) => {
    await navigator.clipboard.writeText(installCommands[manager]);
    setCopiedManager(manager);
    window.setTimeout(() => setCopiedManager(null), 1600);
  };

  return (
    <main>
      <section className="home-hero">
        <Stack block className="hero-content" gap={32}>
          <Stack block gap={16}>
            <Badge variant="outline">
              <Sparkles data-icon="inline-start" />
              {t('home.componentCount', { count: componentCatalog.length })}
            </Badge>
            <Typography.H1>{t('home.title')}</Typography.H1>
            <Typography.Lead className="hero-copy">
              {t('home.description')}
            </Typography.Lead>
          </Stack>

          <Stack align="center" gap={12} orientation="horizontal" wrap>
            <Button href={path('/docs/getting-started')} size="lg">
              {t('actions.getStarted')} <ArrowRight data-icon="inline-end" />
            </Button>
            <Button href={path('/components')} size="lg" variant="outline">
              {t('actions.browseComponents')}
            </Button>
          </Stack>

          <Tabs
            animation="none"
            className="hero-install"
            defaultValue="pnpm"
            variant="line"
            items={(Object.keys(installCommands) as PackageManager[]).map(
              (manager) => ({
                value: manager,
                label: (
                  <>
                    <PackageManagerIcon name={manager} />
                    <span>{manager}</span>
                  </>
                ),
                content: (
                  <Button
                    block
                    className="hero-install-copy"
                    onClick={() => copyInstall(manager)}
                    variant="outline"
                  >
                    <code>{installCommands[manager]}</code>
                    {copiedManager === manager ? (
                      <Check data-icon="inline-end" />
                    ) : (
                      <Copy data-icon="inline-end" />
                    )}
                  </Button>
                ),
              })
            )}
          />
        </Stack>

        <Card
          className="hero-showcase rounded-lg"
          title={t('home.previewTitle')}
          description={t('home.previewDescription')}
          action={<Badge variant="secondary">Live</Badge>}
        >
          <Stack block gap={24}>
            <Stack align="center" gap={8} orientation="horizontal" wrap>
              <Badge variant="outline">Accessible</Badge>
              <Badge variant="outline">Type-safe</Badge>
              <Badge variant="outline">Composable</Badge>
            </Stack>
            <Stack block gap={8}>
              <Label htmlFor="home-workspace-name">
                {t('home.workspaceName')}
              </Label>
              <Input defaultValue="Heliannuuthus UI" id="home-workspace-name" />
            </Stack>
            <Stack
              align="center"
              block
              gap={8}
              justify="end"
              orientation="horizontal"
            >
              <Button variant="outline">{t('actions.cancel')}</Button>
              <Button>{t('actions.save')}</Button>
            </Stack>
          </Stack>
        </Card>
      </section>

      <section className="feature-strip" aria-label={t('home.features')}>
        <div>
          <strong>{componentCatalog.length}</strong>
          <span>{t('home.baseComponents')}</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>TypeScript</span>
        </div>
        <div>
          <strong>A11y</strong>
          <span>{t('home.accessibilityFirst')}</span>
        </div>
        <div>
          <strong>Open</strong>
          <span>{t('home.openSource')}</span>
        </div>
      </section>

      <section className="home-section philosophy-section">
        <Stack block gap={48}>
          <Stack block className="section-heading" gap={16}>
            <Typography.Small className="section-label">
              DESIGN SYSTEM
            </Typography.Small>
            <Typography.H2>{t('home.philosophyTitle')}</Typography.H2>
            <Typography.Lead>{t('home.philosophyDescription')}</Typography.Lead>
            <Button href={path('/design')} variant="link">
              {t('home.philosophyAction')} <ArrowRight data-icon="inline-end" />
            </Button>
          </Stack>
          <Masonry
            className="principle-grid"
            columns={4}
            gap={14}
            items={[
              [t('home.clarity'), t('home.clarityDescription')],
              [t('home.consistency'), t('home.consistencyDescription')],
              [t('home.composable'), t('home.composableDescription')],
              [t('home.evolvable'), t('home.evolvableDescription')],
            ].map(([title, copy]) => ({
              content: (
                <Card className="rounded-lg">
                  <Stack block gap={12}>
                    <Typography.H3>{title}</Typography.H3>
                    <Typography.Muted>{copy}</Typography.Muted>
                  </Stack>
                </Card>
              ),
              key: title,
            }))}
            minColumnWidth={220}
          />
        </Stack>
      </section>

      <section className="home-section component-teaser">
        <Stack block gap={48}>
          <Stack
            align="end"
            block
            className="section-heading-horizontal"
            gap={16}
            justify="between"
            orientation="horizontal"
          >
            <Stack gap={16}>
              <Typography.Small className="section-label">
                COMPONENTS
              </Typography.Small>
              <Typography.H2>{t('home.componentsTitle')}</Typography.H2>
            </Stack>
            <Button href={path('/components')} variant="link">
              {t('actions.viewAllComponents')}{' '}
              <ArrowRight data-icon="inline-end" />
            </Button>
          </Stack>
          <Masonry
            columns={3}
            gap={14}
            items={componentGroups.slice(0, 6).map((group) => ({
              content: (
                <Item
                  actions={<ArrowRight />}
                  description={t('components.count', {
                    count: group.items.length,
                  })}
                  media={<Package />}
                  mediaVariant="icon"
                  href={path(`/components/${componentSlug(group.items[0])}`)}
                  title={t(`groups.${group.key}`)}
                  variant="outline"
                />
              ),
              key: group.title,
            }))}
            minColumnWidth={240}
          />
        </Stack>
      </section>
    </main>
  );
};

const GettingStartedPage = () => {
  const path = useLocalizedPath();
  const { t } = useTranslation();

  return (
    <DocLayout
      title={t('gettingStarted.title')}
      kicker={t('gettingStarted.kicker')}
      description={t('gettingStarted.description')}
      toc={[
        {
          label: t('gettingStarted.installation'),
          href: '#installation',
          icon: <PackagePlus data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: t('gettingStarted.importStyles'),
          href: '#build-integration',
          icon: <Code2 data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: t('gettingStarted.usage'),
          href: '#usage',
          icon: <Blocks data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: t('gettingStarted.next'),
          href: '#next-step',
          icon: <LayoutGrid data-icon="inline-start" strokeWidth={2.5} />,
        },
      ]}
    >
      <DocSection
        description={t('gettingStarted.installationDescription')}
        icon={<PackagePlus strokeWidth={2.5} />}
        id="installation"
        step="01"
        title={t('gettingStarted.installation')}
      >
        <PackageManagerInstall />
      </DocSection>
      <DocSection
        description={t('gettingStarted.importStylesDescription')}
        icon={<Code2 strokeWidth={2.5} />}
        id="build-integration"
        step="02"
        title={t('gettingStarted.importStyles')}
      >
        <CodeBlock code={styleImportCode} fileName="main.tsx" />
      </DocSection>
      <DocSection
        description={t('gettingStarted.usageDescription')}
        icon={<Blocks strokeWidth={2.5} />}
        id="usage"
        step="03"
        title={t('gettingStarted.usage')}
      >
        <CodeBlock code={demoCode} fileName="button-example.tsx" />
      </DocSection>
      <Item
        actions={<ArrowRight />}
        className="next-card"
        description={t('gettingStarted.nextDescription')}
        id="next-step"
        media={<LayoutGrid strokeWidth={2.5} />}
        mediaVariant="icon"
        href={path('/components')}
        title={
          <Stack align="center" gap={8} orientation="horizontal">
            <Badge variant="secondary">04</Badge>
            <Typography.Large className="font-bold">
              {t('gettingStarted.nextTitle')}
            </Typography.Large>
          </Stack>
        }
        variant="outline"
      />
    </DocLayout>
  );
};

const PackageManagerInstall = () => {
  return (
    <Tabs
      animation="none"
      defaultValue="pnpm"
      variant="line"
      items={(Object.keys(installCommands) as PackageManager[]).map(
        (manager) => ({
          value: manager,
          label: manager,
          content: (
            <CodeBlock
              code={installCommands[manager]}
              fileName="terminal"
              language="bash"
              showLineNumbers={false}
            />
          ),
        })
      )}
    />
  );
};

const DesignPage = () => {
  const { t } = useTranslation();
  const principles = [
    ['01', t('design.clarity'), t('design.clarityDescription')],
    ['02', t('design.convention'), t('design.conventionDescription')],
    ['03', t('design.composition'), t('design.compositionDescription')],
    ['04', t('design.details'), t('design.detailsDescription')],
  ] as const;

  return (
    <DocLayout
      title={t('design.title')}
      kicker="FOUNDATION"
      description={t('design.description')}
      toc={principles.map(([number, title]) => ({
        label: title,
        href: `#principle-${number}`,
      }))}
    >
      <Stack block className="design-values" gap={0} separator={<Separator />}>
        {principles.map(([number, title, copy]) => (
          <article id={`principle-${number}`} key={number}>
            <Typography.Small>{number}</Typography.Small>
            <Stack block gap={8}>
              <Typography.H3>{title}</Typography.H3>
              <Typography.Muted>{copy}</Typography.Muted>
            </Stack>
          </article>
        ))}
      </Stack>
    </DocLayout>
  );
};

const ComponentsOverview = () => {
  const { t } = useTranslation();
  const locale = useDocsLocale();
  const [query, setQuery] = useState('');
  const groups = useMemo(
    () =>
      componentGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            const slug = componentSlug(item);
            const metadata = localizedComponentMetadata(
              slug,
              locale,
              componentDocumentation[slug]
            );
            const searchText = `${item} ${localizedComponentName(
              item,
              locale
            )} ${group.title} ${t(`groups.${group.key}`)} ${metadata.searchText.join(
              ' '
            )}`.toLowerCase();
            return searchText.includes(query.trim().toLowerCase());
          }),
        }))
        .filter((group) => group.items.length),
    [locale, query, t]
  );

  return (
    <div className="components-page">
      <header className="components-heading">
        <span>COMPONENTS</span>
        <h1>{t('components.overviewTitle')}</h1>
        <p>{t('components.overviewDescription')}</p>
        <label className="component-search">
          <Search />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('search.overviewPlaceholder')}
          />
        </label>
      </header>
      {groups.length > 0 ? (
        <div className="component-groups">
          {groups.map((group) => (
            <section key={group.title}>
              <header>
                <h2>{t(`groups.${group.key}`)}</h2>
                <span>{group.items.length}</span>
              </header>
              <div className="component-group-grid">
                {group.items.map((item) => (
                  <ComponentOverviewCard item={item} key={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <Empty
          actions={
            <Button variant="outline" onClick={() => setQuery('')}>
              {t('search.clear')}
            </Button>
          }
          className="component-search-empty"
          description={t('search.overviewEmpty')}
          icon={<SearchX />}
          title={t('search.noResult', { query })}
        />
      )}
    </div>
  );
};

const ComponentOverviewCard = ({ item }: { item: string }) => {
  const path = useLocalizedPath();
  const locale = useDocsLocale();
  const slug = componentSlug(item);
  const summary = localizedComponentMetadata(
    slug,
    locale,
    componentDocumentation[slug]
  ).summary;
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const summaryElement = summaryRef.current;
    if (summaryElement == null) return;

    const updateOverflowing = () => {
      setOverflowing(
        summaryElement.scrollHeight > summaryElement.clientHeight + 1 ||
          summaryElement.scrollWidth > summaryElement.clientWidth + 1
      );
    };

    updateOverflowing();

    if (typeof ResizeObserver === 'undefined') return;
    const resizeObserver = new ResizeObserver(updateOverflowing);
    resizeObserver.observe(summaryElement);

    return () => resizeObserver.disconnect();
  }, [summary]);

  return (
    <Tooltip
      content={summary}
      delay={300}
      disabled={!overflowing}
      trigger={
        <NavLink to={path(`/components/${componentSlug(item)}`)}>
          <strong>{localizedComponentName(item, locale)}</strong>
          <p ref={summaryRef} data-overflowing={overflowing || undefined}>
            {summary}
          </p>
        </NavLink>
      }
    />
  );
};

const ComponentSearchDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const navigate = useNavigate();
  const path = useLocalizedPath();
  const { t } = useTranslation();
  const locale = useDocsLocale();

  const selectComponent = (slug: string) => {
    onOpenChange(false);
    navigate(path(`/components/${slug}`));
  };

  return (
    <Command
      className="component-command"
      dialog={{
        contentClassName: 'component-command-dialog',
        description: t('search.description'),
        footer: (
          <div className="component-command-footer">
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              {t('search.select')}
            </span>
            <span>
              <kbd>↵</kbd>
              {t('search.open')}
            </span>
            <span>
              <kbd>esc</kbd>
              {t('search.close')}
            </span>
          </div>
        ),
        open,
        showCloseButton: false,
        title: t('search.title'),
        onOpenChange,
      }}
      emptyText={
        <>
          <span className="component-command-empty-icon">
            <SearchX aria-hidden="true" />
          </span>
          <strong>{t('search.emptyTitle')}</strong>
          <span>{t('search.emptyDescription')}</span>
        </>
      }
      groups={componentGroups.map((group) => ({
        heading: `${t(`groups.${group.key}`)} · ${group.items.length}`,
        options: group.items.map((item) => {
          const slug = componentSlug(item);
          const metadata = localizedComponentMetadata(
            slug,
            locale,
            componentDocumentation[slug]
          );
          const summary = metadata.summary;
          return {
            icon: (
              <span className="component-command-icon">
                <Box aria-hidden="true" />
              </span>
            ),
            keywords: [
              localizedComponentName(item, locale),
              group.title,
              t(`groups.${group.key}`),
              ...metadata.searchText,
            ],
            label: (
              <span className="component-command-copy">
                <strong>{localizedComponentName(item, locale)}</strong>
                <span>{summary}</span>
              </span>
            ),
            onSelect: () => selectComponent(slug),
            shortcut: (
              <ArrowRight
                aria-hidden="true"
                className="component-command-arrow"
              />
            ),
            value: item,
          };
        }),
      }))}
      inputProps={{ autoFocus: true }}
      placeholder={t('search.placeholder')}
    />
  );
};

const ComponentNavigation = ({ component }: { component: string }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const path = useLocalizedPath();
  const { t } = useTranslation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const content = contentRef.current;
      const activeItem = content?.querySelector<HTMLElement>(
        '[data-sidebar="menu-button"][data-active]'
      );

      if (!content || !activeItem) return;

      const contentRect = content.getBoundingClientRect();
      const activeRect = activeItem.getBoundingClientRect();
      const safeInset = content.clientHeight * 0.05;
      const safeTop = contentRect.top + safeInset;
      const safeBottom = contentRect.bottom - safeInset;
      const isInsideSafeViewport =
        activeRect.top >= safeTop && activeRect.bottom <= safeBottom;

      if (isInsideSafeViewport) return;

      const activeTop = activeRect.top - contentRect.top + content.scrollTop;
      const centeredScrollTop =
        activeTop - (content.clientHeight - activeRect.height) / 2;
      const maxScrollTop = content.scrollHeight - content.clientHeight;
      const targetScrollTop = Math.min(
        maxScrollTop,
        Math.max(0, centeredScrollTop)
      );

      content.scrollTop = targetScrollTop;
    });

    return () => cancelAnimationFrame(frame);
  }, [component]);

  return (
    <Sidebar
      aria-label={t('components.navigation')}
      className="component-docs-sidebar"
      collapsible="none"
    >
      <Sidebar.Header className="component-docs-sidebar-header">
        <NavLink to={path('/components')}>
          <span>{t('components.label')}</span>
          <small>{componentCatalog.length}</small>
        </NavLink>
      </Sidebar.Header>
      <Sidebar.Separator />
      <Sidebar.Content
        className="component-docs-sidebar-content"
        ref={contentRef}
      >
        {componentGroups.map((group) => (
          <Sidebar.Group key={group.title}>
            <Sidebar.GroupLabel className="component-docs-sidebar-label">
              <span>{t(`groups.${group.key}`)}</span>
              <small>{group.items.length}</small>
            </Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {group.items.map((item) => {
                  const slug = componentSlug(item);
                  return (
                    <Sidebar.MenuItem key={item}>
                      <ComponentNavigationLink
                        isActive={slug === component}
                        item={item}
                        slug={slug}
                      />
                    </Sidebar.MenuItem>
                  );
                })}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        ))}
      </Sidebar.Content>
    </Sidebar>
  );
};

const ComponentNavigationLink = ({
  isActive,
  item,
  slug,
}: {
  isActive: boolean;
  item: string;
  slug: string;
}) => {
  const path = useLocalizedPath();
  const locale = useDocsLocale();
  const to = path(`/components/${slug}`);
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to);

  return (
    <Sidebar.MenuButton
      href={href}
      isActive={isActive}
      onClick={handleClick}
      size="sm"
    >
      <span>{localizedComponentName(item, locale)}</span>
    </Sidebar.MenuButton>
  );
};

const ComponentPage = () => {
  const { component = 'button' } = useParams();
  const path = useLocalizedPath();
  const { t } = useTranslation();
  const locale = useDocsLocale();

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [component]);

  if (component === 'button-group') {
    return <Navigate to={path('/components/button')} replace />;
  }
  if (component === 'calendar') {
    return <Navigate to={path('/components/date-picker')} replace />;
  }
  if (component === 'input-group' || component === 'input-otp') {
    return <Navigate to={path('/components/input')} replace />;
  }
  if (component === 'field' || component === 'label') {
    return <Navigate to={path('/components/form')} replace />;
  }
  if (component === 'native-select') {
    return <Navigate to={path('/components/select')} replace />;
  }
  if (component === 'sidebar') {
    return <Navigate to={path('/components/layout')} replace />;
  }
  const canonicalName =
    componentCatalog.find((item) => componentSlug(item) === component) ??
    'Button';
  const name = localizedComponentName(canonicalName, locale);
  const documentation = componentDocumentation[component];
  const metadata = localizedComponentMetadata(component, locale, documentation);
  return (
    <Sidebar.Provider
      className="component-detail-layout"
      style={
        {
          '--sidebar-width': 'clamp(240px, 16vw, 288px)',
        } as CSSProperties
      }
    >
      <ComponentNavigation component={component} />
      <Sidebar.Inset
        className={`component-detail${
          spaciousComponentSlugs.has(component)
            ? ' component-detail-spacious'
            : ''
        }`}
      >
        <div className="breadcrumb">
          <NavLink to={path('/components')}>{t('components.label')}</NavLink>
          <span>/</span>
          <span>{name}</span>
        </div>
        <div className="component-title">
          <div>
            <h1>{name}</h1>
            <p>{metadata.summary || t('components.draftSummary')}</p>
          </div>
          <a
            href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
          >
            <Github /> {t('actions.viewSource')}
          </a>
        </div>
        {documentation ? (
          <>
            {documentation.relatedComponents &&
              documentation.relatedComponents.length > 0 && (
                <nav
                  className="component-related"
                  aria-label={`${documentation.name} ${t(
                    'components.related'
                  )}`}
                >
                  <span>{t('components.related')}</span>
                  {documentation.relatedComponents.map((related) => (
                    <NavLink
                      key={related.slug}
                      to={path(`/components/${related.slug}`)}
                    >
                      <span>
                        <strong>
                          {localizedComponentName(related.name, locale)}
                        </strong>
                        <small>{related.description}</small>
                      </span>
                      <ArrowRight aria-hidden="true" />
                    </NavLink>
                  ))}
                </nav>
              )}
            {documentation.examples.length > 0 && (
              <section className="demo-section">
                <h2>{t('components.examples')}</h2>
                <ComponentExampleList
                  component={component}
                  examples={documentation.examples}
                />
              </section>
            )}
            {(documentation.semanticDom != null ||
              (documentation.parts?.length ?? 0) > 0 ||
              documentation.api.length > 0) && (
              <section className="component-reference-section">
                <h2>API</h2>
                {documentation.semanticDom && (
                  <div className="component-reference-block component-semantic-dom">
                    <div className="component-semantic-dom-heading">
                      <h3>Semantic DOM</h3>
                      <p>{documentation.semanticDom.description}</p>
                    </div>
                    {documentation.semanticDom.preview}
                  </div>
                )}
                {documentation.parts && documentation.parts.length > 0 && (
                  <div className="component-reference-block">
                    <h3>{t('components.parts')}</h3>
                    <div className="component-parts-table">
                      <div className="component-parts-head">
                        <span>{t('components.label')}</span>
                        <span>{t('components.purpose')}</span>
                      </div>
                      {documentation.parts.map((part) => (
                        <div key={part.name}>
                          <code>{part.name}</code>
                          <span>{part.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {documentation.api.length > 0 && (
                  <div className="component-reference-block">
                    <h3>{t('components.properties')}</h3>
                    <div className="component-api-groups">
                      {groupApiProperties(
                        documentation.api,
                        documentation.name
                      ).map((group) => (
                        <section
                          className="component-api-group"
                          key={group.component}
                        >
                          <h4>
                            <code>{group.component}</code>
                          </h4>
                          {documentation.typeDefinitionGroups?.includes(
                            group.component
                          ) ? (
                            <TypeDefinitionExplorer
                              api={group.api}
                              component={group.component}
                            />
                          ) : (
                            <div className="component-api-table">
                              <div className="component-api-head">
                                <span>{t('components.properties')}</span>
                                <span>{t('components.description')}</span>
                                <span>{t('components.type')}</span>
                                <span>{t('components.defaultValue')}</span>
                              </div>
                              {group.api.map((property) => (
                                <div key={property.name}>
                                  <code>{property.name}</code>
                                  <span>{property.description}</span>
                                  <code>{property.type}</code>
                                  <code>{property.defaultValue ?? '—'}</code>
                                </div>
                              ))}
                            </div>
                          )}
                        </section>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
            <div className="guidance-grid">
              <section>
                <h2>{t('components.accessibility')}</h2>
                <ul>
                  {documentation.accessibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>{t('components.pitfalls')}</h2>
                <ul>
                  {documentation.pitfalls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </>
        ) : null}
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
};

const ComponentExampleList = ({
  component,
  examples,
}: {
  component: string;
  examples: ComponentExample[];
}) => {
  return (
    <Masonry
      className="example-list"
      columns={2}
      gap={[20, 32]}
      items={examples.map((example) => ({
        className: `example-item${example.wide ? ' example-item-wide' : ''}`,
        content: (
          <ComponentExampleCard component={component} example={example} />
        ),
        key: example.title,
        span: example.wide ? 'full' : 'auto',
      }))}
      minColumnWidth={300}
    />
  );
};

const ComponentExampleCard = ({
  component,
  example,
}: {
  component: string;
  example: ComponentExample;
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(example.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Card
      className={`example-card${example.wide ? ' example-card-wide' : ''}`}
      classNames={{
        header: 'example-card-header',
        title: 'example-card-title',
        description: 'example-card-description',
        content: 'example-card-body',
        footer: 'example-card-footer block p-0',
      }}
      description={<p>{example.description}</p>}
      footer={
        <div className="example-card-footer-content">
          <div className="demo-actions">
            <Tooltip
              content={t(copied ? 'demo.copied' : 'demo.copyCode')}
              delay={300}
              trigger={
                <button
                  type="button"
                  onClick={copy}
                  aria-label={t(copied ? 'actions.copied' : 'demo.copyCode')}
                >
                  {copied ? <Check /> : <Copy />}
                </button>
              }
            />
            <Tooltip
              content={t('actions.viewOnGitHub')}
              delay={300}
              trigger={
                <a
                  href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('actions.viewOnGitHub')}
                >
                  <Github />
                </a>
              }
            />
            <Tooltip
              content={t('demo.openCodeSandbox')}
              delay={300}
              trigger={
                <a
                  href="https://codesandbox.io/p/github/heliannuuthus/ui/main"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('demo.openCodeSandbox')}
                >
                  <Box />
                </a>
              }
            />
            <Tooltip
              content={t('demo.openStackBlitz')}
              delay={300}
              trigger={
                <a
                  href="https://stackblitz.com/github/heliannuuthus/ui"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('demo.openStackBlitz')}
                >
                  <Zap />
                </a>
              }
            />
            <Tooltip
              content={t(expanded ? 'demo.collapseCode' : 'demo.expandCode')}
              delay={300}
              trigger={
                <Toggle
                  className="demo-expand-toggle size-8 min-w-8 p-0"
                  aria-label={t(
                    expanded ? 'demo.collapseCode' : 'demo.expandCode'
                  )}
                  value={expanded}
                  onChange={setExpanded}
                >
                  <Code2 />
                </Toggle>
              }
            />
          </div>
          {expanded && (
            <SyntaxCode
              className="demo-code"
              code={example.code}
              fileName={`${component}-example.tsx`}
              radius="none"
              variant="ghost"
            />
          )}
        </div>
      }
      role="article"
      title={<h3>{example.title}</h3>}
    >
      <div
        className={`demo-preview${
          example.cases || example.caseAxes ? ' demo-preview-harness' : ''
        }`}
        style={
          example.previewHeight != null
            ? ({
                '--demo-preview-height':
                  typeof example.previewHeight === 'number'
                    ? `${example.previewHeight}px`
                    : example.previewHeight,
              } as CSSProperties)
            : undefined
        }
      >
        {example.cases ? (
          <ComponentHarness
            cases={example.cases}
            layout={example.caseLayout}
            minCaseWidth={example.caseMinWidth}
          >
            {(values) =>
              typeof example.preview === 'function'
                ? example.preview(values)
                : example.preview
            }
          </ComponentHarness>
        ) : example.caseAxes ? (
          <ComponentHarness
            axes={example.caseAxes}
            layout={example.caseLayout}
            minCaseWidth={example.caseMinWidth}
          >
            {(values) =>
              typeof example.preview === 'function'
                ? example.preview(values)
                : example.preview
            }
          </ComponentHarness>
        ) : typeof example.preview === 'function' ? (
          example.preview({})
        ) : (
          example.preview
        )}
      </div>
    </Card>
  );
};

const CodeBlock = ({
  code,
  fileName = 'example.tsx',
  language = 'tsx',
  showLineNumbers = true,
}: {
  code: string;
  fileName?: string;
  language?: 'bash' | 'tsx';
  showLineNumbers?: boolean;
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  return (
    <SyntaxCode
      action={
        <Button
          aria-label={t(copied ? 'actions.copied' : 'demo.copyCode')}
          size="icon-sm"
          variant="ghost"
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
          }}
        >
          {copied ? <Check /> : <Copy />}
        </Button>
      }
      code={code}
      fileName={fileName}
      language={language}
      showLineNumbers={showLineNumbers}
    />
  );
};

const DocSection = ({
  children,
  description,
  icon,
  id,
  step,
  title,
}: {
  children: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  id: string;
  step: string;
  title: string;
}) => {
  return (
    <section className="doc-section" id={id}>
      <Stack block gap={16}>
        <Item
          className="p-0"
          description={description}
          media={icon}
          mediaVariant="icon"
          size="sm"
          title={
            <Stack align="center" gap={8} orientation="horizontal">
              <Badge variant="secondary">{step}</Badge>
              <Typography.H2 className="border-0 pb-0 text-2xl font-bold">
                {title}
              </Typography.H2>
            </Stack>
          }
        />
        {children}
      </Stack>
    </section>
  );
};

const DocLayout = ({
  title,
  kicker,
  description,
  toc,
  children,
}: {
  title: string;
  kicker: string;
  description: string;
  toc: ReadonlyArray<{
    label: string;
    href: `#${string}`;
    icon?: React.ReactNode;
  }>;
  children: React.ReactNode;
}) => {
  const { t } = useTranslation();

  return (
    <main className="doc-page">
      <Stack block className="doc-content" gap={48}>
        <Stack block className="doc-intro" gap={8}>
          <Badge className="doc-kicker" variant="outline">
            {kicker}
          </Badge>
          <Typography.H1 id="page-title">{title}</Typography.H1>
          <Typography.Lead className="text-lg leading-8">
            {description}
          </Typography.Lead>
        </Stack>
        <Stack
          block
          className="doc-sections"
          gap={32}
          separator={<Separator />}
        >
          {children}
        </Stack>
      </Stack>
      <aside aria-label={t('docs.onThisPage')} className="doc-toc">
        <Stack align="stretch" gap={16} orientation="horizontal">
          <Separator orientation="vertical" />
          <Stack gap={8}>
            <Typography.Small>{t('docs.onThisPage')}</Typography.Small>
            <Stack gap={2}>
              {toc.map((item, index) => (
                <Button
                  className="doc-toc-link"
                  href={item.href}
                  key={item.href}
                  size="sm"
                  variant="ghost"
                >
                  {item.icon}
                  {item.label}
                  <Badge variant="ghost">
                    {String(index + 1).padStart(2, '0')}
                  </Badge>
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </aside>
    </main>
  );
};

export const Showcase = ({
  page,
}: {
  page: 'home' | 'getting-started' | 'design' | 'components' | 'component';
}) => {
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const openSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    window.addEventListener('keydown', openSearch);
    return () => window.removeEventListener('keydown', openSearch);
  }, []);

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <SiteHeader
        dark={dark}
        onSearch={() => setSearchOpen(true)}
        onTheme={() => setDark((value) => !value)}
      />
      <ComponentSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      {page === 'home' && <HomePage />}
      {page === 'getting-started' && <GettingStartedPage />}
      {page === 'design' && <DesignPage />}
      {page === 'components' && <ComponentsOverview />}
      {page === 'component' && <ComponentPage />}
    </div>
  );
};
