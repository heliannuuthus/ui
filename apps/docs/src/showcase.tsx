/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V4 */

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import {
  Button,
  Card,
  Command,
  Drawer,
  Empty,
  Input,
  Item,
  Layout,
  Masonry,
  Popover,
  Provider,
  Separator,
  Stack,
  Tabs,
  Tag,
  Toggle,
  Tooltip,
  Typography,
} from '@heliannuuthus/ui';
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
  PanelLeft,
  Search,
  SearchX,
  SlidersHorizontal,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import {
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Highlight } from 'prism-react-renderer';
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
import { DemoLabel } from './demo-label';
import { docsCopy } from './i18n/content';
import { useDocsLocale, useLocalizedPath } from './i18n/routing';
import {
  PackageManagerIcon,
  type PackageManagerName,
} from './package-manager-icon';
import { SyntaxCode } from './syntax-code';
import { docsSyntaxTheme } from './syntax-theme';
import { orderApiProperties } from './api-property-order';
import {
  apiTypeDefinitionReference,
  createApiTypeDefinitions,
  type ApiTypeDefinition,
} from './api-type-definitions';

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

  for (const property of orderApiProperties(properties, defaultComponent)) {
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

const apiTypeDefinitions = createApiTypeDefinitions(componentDocumentation);

type ApiTypeSyntaxSegment = {
  className?: string;
  end: number;
  start: number;
  style?: CSSProperties;
  text: string;
};

const apiTypeReferencePattern =
  /[A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)*/g;

const ApiType = ({
  excludeReferences,
  inline = false,
  type,
}: {
  excludeReferences?: ReadonlySet<string>;
  inline?: boolean;
  type: string;
}) => {
  const { t } = useTranslation();
  const references = Array.from(type.matchAll(apiTypeReferencePattern)).flatMap(
    (match) => {
      const reference = match[0];
      const definition = excludeReferences?.has(reference)
        ? undefined
        : apiTypeDefinitions.get(reference);

      if (!definition || match.index === undefined) return [];

      return [
        {
          definition,
          end: match.index + reference.length,
          reference,
          start: match.index,
        },
      ];
    }
  );

  return (
    <Highlight code={type} language="tsx" theme={docsSyntaxTheme}>
      {({ tokens, getTokenProps }) => {
        const syntaxSegments: ApiTypeSyntaxSegment[] = [];
        let offset = 0;

        tokens.forEach((line, lineIndex) => {
          line.forEach((token) => {
            const { className, style } = getTokenProps({ token });
            const start = offset;
            offset += token.content.length;
            syntaxSegments.push({
              className,
              end: offset,
              start,
              style,
              text: token.content,
            });
          });

          if (lineIndex < tokens.length - 1) {
            syntaxSegments.push({
              end: offset + 1,
              start: offset,
              text: '\n',
            });
            offset += 1;
          }
        });

        const renderRange = (start: number, end: number, key: string) =>
          syntaxSegments.flatMap((segment, segmentIndex) => {
            const rangeStart = Math.max(start, segment.start);
            const rangeEnd = Math.min(end, segment.end);

            if (rangeStart >= rangeEnd) return [];

            return [
              <span
                className={segment.className}
                key={`${key}-${segmentIndex}`}
                style={segment.style}
              >
                {segment.text.slice(
                  rangeStart - segment.start,
                  rangeEnd - segment.start
                )}
              </span>,
            ];
          });

        const content: React.ReactNode[] = [];
        let cursor = 0;

        references.forEach((reference, index) => {
          content.push(
            ...renderRange(cursor, reference.start, `text-${index}`)
          );
          content.push(
            <Popover
              align="start"
              classNames={{ content: 'component-api-type-popover' }}
              content={
                <ApiTypeDefinitionPreview definition={reference.definition} />
              }
              delay={180}
              key={`${reference.reference}-${reference.start}`}
              side="top"
              trigger={
                <Button
                  aria-label={t('docs.previewType', {
                    type: reference.reference,
                  })}
                  className="component-api-type-reference"
                  size="xs"
                  variant="link"
                >
                  {renderRange(
                    reference.start,
                    reference.end,
                    `reference-${index}`
                  )}
                </Button>
              }
              triggerMode="hover"
            />
          );
          cursor = reference.end;
        });
        content.push(...renderRange(cursor, type.length, 'text-final'));

        return inline ? (
          <span className="component-api-type">{content}</span>
        ) : (
          <code className="component-api-type">{content}</code>
        );
      }}
    </Highlight>
  );
};

const ApiTypeDefinitionPreview = ({
  definition,
}: {
  definition: ApiTypeDefinition;
}) => {
  const ownReference = new Set([apiTypeDefinitionReference(definition.name)]);

  return (
    <div className="component-api-type-definition">
      {definition.definition ? (
        <pre className="component-api-type-source">
          <ApiType
            excludeReferences={ownReference}
            inline
            type={definition.definition}
          />
        </pre>
      ) : (
        <>
          <code className="component-api-type-declaration">
            <span>type</span> <strong>{definition.name}</strong> ={' '}
            <ApiType
              excludeReferences={ownReference}
              inline
              type={definition.declaration ?? '{'}
            />
          </code>
          <div className="component-api-type-fields">
            {definition.api?.map((property) => (
              <div key={property.name}>
                <code>
                  <strong>{property.name}</strong>
                  {property.required ? ':' : '?:'}{' '}
                  <ApiType inline type={property.type} />
                </code>
                <p>{property.description}</p>
              </div>
            ))}
          </div>
          <code className="component-api-type-declaration">{'}'}</code>
        </>
      )}
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
const providerCode = `import { Provider } from '@heliannuuthus/ui'

<Provider
  appearance="system"
  direction="ltr"
  theme={{
    colors: { primary: 'oklch(0.55 0.17 155)' },
    darkColors: { primary: 'oklch(0.72 0.15 155)' },
    radius: '0.75rem',
  }}
  components={{
    Avatar: { shape: 'square' },
    Button: { size: 'sm' },
    Card: { variant: 'outline' },
  }}
>
  <App />
</Provider>`;

const providerColorTokens = [
  'background',
  'foreground',
  'primary',
  'primaryForeground',
  'secondary',
  'secondaryForeground',
  'muted',
  'mutedForeground',
  'accent',
  'accentForeground',
  'destructive',
  'info',
  'success',
  'warning',
  'border',
  'input',
  'ring',
  'card',
  'cardForeground',
  'popover',
  'popoverForeground',
] as const;

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

const SiteFooter = () => {
  const path = useLocalizedPath();
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <Typography.Text as="span" weight="semibold">
        Heliannuuthus UI
      </Typography.Text>
      <Stack align="center" gap={4} orientation="horizontal" wrap>
        <Button href={path('/components')} size="sm" variant="link">
          {t('navigation.components')}
        </Button>
        <span aria-hidden="true">·</span>
        <Button href={repositoryUrl} size="sm" variant="link">
          GitHub
        </Button>
      </Stack>
      <Typography.Text as="span" size="sm" tone="muted">
        React primitives · MIT
      </Typography.Text>
    </footer>
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
            <Tag type="primary">
              <Sparkles data-icon="inline-start" />
              {t('home.componentCount', { count: componentCatalog.length })}
            </Tag>
            <Typography.Title>{t('home.title')}</Typography.Title>
            <Typography.Text
              as="p"
              size="xl"
              tone="muted"
              className="hero-copy"
            >
              {t('home.description')}
            </Typography.Text>
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
          header={{
            title: t('home.previewTitle'),
            description: t('home.previewDescription'),
            action: <Tag type="success">Live</Tag>,
          }}
        >
          <Stack block gap={24}>
            <Stack align="center" gap={8} orientation="horizontal" wrap>
              <Tag>Accessible</Tag>
              <Tag>Type-safe</Tag>
              <Tag>Composable</Tag>
            </Stack>
            <Stack block gap={8}>
              <DemoLabel htmlFor="home-workspace-name">
                {t('home.workspaceName')}
              </DemoLabel>
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
            <Typography.Text
              as="small"
              size="sm"
              weight="medium"
              className="section-label"
            >
              DESIGN SYSTEM
            </Typography.Text>
            <Typography.Title level={2}>
              {t('home.philosophyTitle')}
            </Typography.Title>
            <Typography.Text as="p" size="xl" tone="muted">
              {t('home.philosophyDescription')}
            </Typography.Text>
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
                    <Typography.Title level={3}>{title}</Typography.Title>
                    <Typography.Text as="p" size="sm" tone="muted">
                      {copy}
                    </Typography.Text>
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
              <Typography.Text
                as="small"
                size="sm"
                weight="medium"
                className="section-label"
              >
                COMPONENTS
              </Typography.Text>
              <Typography.Title level={2}>
                {t('home.componentsTitle')}
              </Typography.Title>
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
                  mediaType="icon"
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
  const configurationItems = [
    {
      description: t('gettingStarted.appearanceDescription'),
      name: 'appearance',
      values: ['light', 'dark', 'system'],
    },
    {
      description: t('gettingStarted.directionDescription'),
      name: 'direction',
      values: ['ltr', 'rtl'],
    },
    {
      description: t('gettingStarted.colorsDescription'),
      name: 'theme.colors',
      values: providerColorTokens,
    },
    {
      description: t('gettingStarted.darkColorsDescription'),
      name: 'theme.darkColors',
    },
    {
      description: t('gettingStarted.radiusDescription'),
      name: 'theme.radius',
    },
    {
      description: t('gettingStarted.avatarDefaultsDescription'),
      name: 'components.Avatar',
      values: ['shape', 'size'],
    },
    {
      description: t('gettingStarted.buttonDefaultsDescription'),
      name: 'components.Button',
      values: ['block', 'size', 'variant'],
    },
    {
      description: t('gettingStarted.cardDefaultsDescription'),
      name: 'components.Card',
      values: ['variant'],
    },
  ] as const;

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
          label: t('gettingStarted.configuration'),
          href: '#global-configuration',
          icon: (
            <SlidersHorizontal data-icon="inline-start" strokeWidth={2.5} />
          ),
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
      <DocSection
        description={t('gettingStarted.configurationDescription')}
        icon={<SlidersHorizontal strokeWidth={2.5} />}
        id="global-configuration"
        step="04"
        title={t('gettingStarted.configuration')}
      >
        <CodeBlock code={providerCode} fileName="app.tsx" />
        <Stack block gap={12}>
          <Typography.Title level={3} className="text-lg">
            {t('gettingStarted.configurationItems')}
          </Typography.Title>
          <dl className="provider-contract">
            {configurationItems.map((item) => (
              <div key={item.name}>
                <dt>
                  <Typography.Code>{item.name}</Typography.Code>
                </dt>
                <dd>
                  <Typography.Text as="p" size="sm" tone="muted">
                    {item.description}
                  </Typography.Text>
                  {'values' in item && item.values ? (
                    <div className="provider-contract-values">
                      {item.values.map((value) => (
                        <Typography.Code key={value}>{value}</Typography.Code>
                      ))}
                    </div>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </Stack>
        <Item
          className="provider-boundary"
          description={t('gettingStarted.configurationBoundaryDescription')}
          media={<Sparkles strokeWidth={2.5} />}
          mediaType="icon"
          title={t('gettingStarted.configurationBoundary')}
          variant="outline"
        />
      </DocSection>
      <Item
        actions={<ArrowRight />}
        className="next-card"
        description={t('gettingStarted.nextDescription')}
        id="next-step"
        media={<LayoutGrid strokeWidth={2.5} />}
        mediaType="icon"
        href={path('/components')}
        title={
          <Stack align="center" gap={8} orientation="horizontal">
            <Tag type="primary">05</Tag>
            <Typography.Text
              as="div"
              size="lg"
              weight="semibold"
              className="font-bold"
            >
              {t('gettingStarted.nextTitle')}
            </Typography.Text>
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
            <Typography.Text as="small" size="sm" weight="medium">
              {number}
            </Typography.Text>
            <Stack block gap={8}>
              <Typography.Title level={3}>{title}</Typography.Title>
              <Typography.Text as="p" size="sm" tone="muted">
                {copy}
              </Typography.Text>
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
        classNames: { content: 'component-command-dialog' },
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
        closable: false,
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

const ComponentNavigation = ({
  component,
  onNavigate,
}: {
  component: string;
  onNavigate?: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const path = useLocalizedPath();
  const { t } = useTranslation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const content = contentRef.current;
      const activeItem = content?.querySelector<HTMLElement>(
        '.component-docs-sidebar-link[data-active]'
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
    <Layout.Sidebar
      aria-label={t('components.navigation')}
      className="component-docs-sidebar"
      width="clamp(240px, 16vw, 288px)"
    >
      <header className="component-docs-sidebar-header">
        <NavLink to={path('/components')}>
          <span>{t('components.label')}</span>
          <small>{componentCatalog.length}</small>
        </NavLink>
      </header>
      <Separator />
      <div className="component-docs-sidebar-content" ref={contentRef}>
        {componentGroups.map((group) => (
          <section className="component-docs-sidebar-group" key={group.title}>
            <h2 className="component-docs-sidebar-label">
              <span>{t(`groups.${group.key}`)}</span>
              <small>{group.items.length}</small>
            </h2>
            <ul className="component-docs-sidebar-menu">
              {group.items.map((item) => {
                const slug = componentSlug(item);
                return (
                  <li key={item}>
                    <ComponentNavigationLink
                      isActive={slug === component}
                      item={item}
                      onNavigate={onNavigate}
                      slug={slug}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </Layout.Sidebar>
  );
};

const ComponentNavigationDrawer = ({ component }: { component: string }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Drawer
      behavior="panel"
      classNames={{ content: 'component-navigation-drawer' }}
      onOpenChange={setOpen}
      open={open}
      side="left"
      handle={false}
      title={t('components.navigation')}
      trigger={
        <Button
          className="component-navigation-trigger"
          size="sm"
          variant="outline"
        >
          <PanelLeft aria-hidden="true" />
          {t('components.openNavigation')}
        </Button>
      }
    >
      <ComponentNavigation
        component={component}
        onNavigate={() => setOpen(false)}
      />
    </Drawer>
  );
};

const ComponentNavigationLink = ({
  isActive,
  item,
  onNavigate,
  slug,
}: {
  isActive: boolean;
  item: string;
  onNavigate?: () => void;
  slug: string;
}) => {
  const path = useLocalizedPath();
  const locale = useDocsLocale();
  const to = path(`/components/${slug}`);

  return (
    <NavLink
      className="component-docs-sidebar-link"
      data-active={isActive || undefined}
      onClick={onNavigate}
      to={to}
    >
      <span>{localizedComponentName(item, locale)}</span>
    </NavLink>
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
  if (component === 'sheet') {
    return <Navigate to={path('/components/drawer')} replace />;
  }
  if (component === 'data-table') {
    return <Navigate to={path('/components/table')} replace />;
  }
  const canonicalName =
    componentCatalog.find((item) => componentSlug(item) === component) ??
    'Button';
  const name = localizedComponentName(canonicalName, locale);
  const documentation = componentDocumentation[component];
  const metadata = localizedComponentMetadata(component, locale, documentation);
  return (
    <Layout className="component-detail-layout">
      <ComponentNavigation component={component} />
      <Layout.Content
        className={`component-detail${
          spaciousComponentSlugs.has(component)
            ? ' component-detail-spacious'
            : ''
        }`}
      >
        <ComponentNavigationDrawer component={component} />
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
          <Button
            href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
            size="sm"
            variant="outline"
          >
            <Github /> {t('actions.viewSource')}
          </Button>
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
                    <p className="component-inherited-props-notice">
                      {t('components.inheritedPropsNotice')}
                    </p>
                    <div className="component-api-groups">
                      {groupApiProperties(documentation.api, documentation.name)
                        .filter(
                          (group) =>
                            !documentation.typeDefinitionGroups?.includes(
                              group.component
                            )
                        )
                        .map((group) => (
                          <section
                            className="component-api-group"
                            key={group.component}
                          >
                            <h4>
                              <code>{group.component}</code>
                            </h4>
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
                                  <ApiType type={property.type} />
                                  <code>{property.defaultValue ?? '—'}</code>
                                </div>
                              ))}
                            </div>
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
      </Layout.Content>
    </Layout>
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
      columns={3}
      gap={[20, 32]}
      items={examples.map((example) => ({
        className: `example-item${example.wide ? ' example-item-wide' : ''}`,
        content: (
          <ComponentExampleCard component={component} example={example} />
        ),
        key: example.title,
        span: example.wide ? 'full' : 'auto',
      }))}
      minColumnWidth="26rem"
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
      variant="outline"
      classNames={{
        header: 'example-card-header',
        title: 'example-card-title',
        description: 'example-card-description',
        content: 'example-card-body',
        footer: 'example-card-footer block p-0',
      }}
      header={{
        title: <h3>{example.title}</h3>,
        description: <p>{example.description}</p>,
      }}
      footer={
        <div className="example-card-footer-content">
          <div className="demo-actions">
            <Tooltip
              content={t(copied ? 'demo.copied' : 'demo.copyCode')}
              delay={300}
              trigger={
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={copy}
                  aria-label={t(copied ? 'actions.copied' : 'demo.copyCode')}
                >
                  {copied ? <Check /> : <Copy />}
                </Button>
              }
            />
            <Tooltip
              content={t('actions.viewOnGitHub')}
              delay={300}
              trigger={
                <Button
                  href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
                  size="icon-sm"
                  variant="ghost"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('actions.viewOnGitHub')}
                >
                  <Github />
                </Button>
              }
            />
            <Tooltip
              content={t('demo.openCodeSandbox')}
              delay={300}
              trigger={
                <Button
                  href="https://codesandbox.io/p/github/heliannuuthus/ui/main"
                  size="icon-sm"
                  variant="ghost"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('demo.openCodeSandbox')}
                >
                  <Box />
                </Button>
              }
            />
            <Tooltip
              content={t('demo.openStackBlitz')}
              delay={300}
              trigger={
                <Button
                  href="https://stackblitz.com/github/heliannuuthus/ui"
                  size="icon-sm"
                  variant="ghost"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('demo.openStackBlitz')}
                >
                  <Zap />
                </Button>
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
    >
      <div
        className={`demo-preview demo-preview-${component}${
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
          mediaType="icon"
          size="sm"
          title={
            <Stack align="center" gap={8} orientation="horizontal">
              <Tag type="primary">{step}</Tag>
              <Typography.Title
                level={2}
                className="border-0 pb-0 text-2xl font-bold"
              >
                {title}
              </Typography.Title>
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
          <Tag className="doc-kicker">{kicker}</Tag>
          <Typography.Title id="page-title">{title}</Typography.Title>
          <Typography.Text
            as="p"
            size="xl"
            tone="muted"
            className="text-lg leading-8"
          >
            {description}
          </Typography.Text>
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
            <Typography.Text as="small" size="sm" weight="medium">
              {t('docs.onThisPage')}
            </Typography.Text>
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
                  <Tag>{String(index + 1).padStart(2, '0')}</Tag>
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </aside>
    </main>
  );
};

export type ShowcasePage =
  'home' | 'getting-started' | 'design' | 'components' | 'component';

export const Showcase = ({ page }: { page: ShowcasePage }) => {
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
    <Provider appearance={dark ? 'dark' : 'light'} className="site">
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
      <SiteFooter />
    </Provider>
  );
};
