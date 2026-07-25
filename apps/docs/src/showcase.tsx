import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import { Badge } from '@heliannuuthus/ui/badge';
import { Button } from '@heliannuuthus/ui/button';
import { Card } from '@heliannuuthus/ui/card';
import { Input } from '@heliannuuthus/ui/input';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@heliannuuthus/ui/item';
import { Label } from '@heliannuuthus/ui/label';
import { Masonry, MasonryItem } from '@heliannuuthus/ui/masonry';
import { Separator } from '@heliannuuthus/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from '@heliannuuthus/ui/sidebar';
import { Toggle } from '@heliannuuthus/ui/toggle';
import { Stack } from '@heliannuuthus/ui/stack';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@heliannuuthus/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@heliannuuthus/ui/tooltip';
import {
  H1,
  H2,
  H3,
  TypographyLarge,
  TypographyLead,
  TypographyCode,
  TypographyMuted,
  TypographySmall,
} from '@heliannuuthus/ui/typography';
import {
  ArrowRight,
  Blocks,
  Box,
  Check,
  Code2,
  Copy,
  Github,
  LayoutGrid,
  Menu,
  Moon,
  Package,
  PackagePlus,
  Palette,
  Search,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import {
  componentDocumentation,
  type ComponentExample,
} from './component-docs';
import { ComponentHarness } from './component-harness';
import { SyntaxCode } from './syntax-code';

const repositoryUrl = 'https://github.com/heliannuuthus/ui';
const docsBasePath = window.location.hostname.endsWith('github.io')
  ? '/ui'
  : '';
const avatarUrl = `${docsBasePath}/heliannuuthus.jpg`;
const installCommands = {
  pnpm: 'pnpm add @heliannuuthus/ui',
  npm: 'npm install @heliannuuthus/ui',
  yarn: 'yarn add @heliannuuthus/ui',
  bun: 'bun add @heliannuuthus/ui',
} as const;
type PackageManager = keyof typeof installCommands;

const componentGroups = [
  {
    title: '通用',
    items: ['Button', 'Typography', 'Badge', 'Kbd'],
  },
  {
    title: '布局',
    items: [
      'Aspect Ratio',
      'Card',
      'Resizable',
      'Scroll Area',
      'Masonry',
      'Stack',
      'Layout',
      'Separator',
    ],
  },
  {
    title: '导航',
    items: [
      'Breadcrumb',
      'Dropdown Menu',
      'Menubar',
      'Navigation Menu',
      'Pagination',
      'Tabs',
    ],
  },
  {
    title: '数据录入',
    items: [
      'Checkbox',
      'Date Picker',
      'Form',
      'Input',
      'Radio',
      'Select',
      'Slider',
      'Switch',
      'Toggle',
    ],
  },
  {
    title: '数据展示',
    items: [
      'Accordion',
      'Attachment',
      'Avatar',
      'Bubble',
      'Carousel',
      'Chart',
      'Collapsible',
      'Counter',
      'Data Table',
      'Empty',
      'Hover Card',
      'Item',
      'Marker',
      'Message',
      'Message Scroller',
      'Table',
      'Tooltip',
    ],
  },
  {
    title: '反馈',
    items: [
      'Alert',
      'Alert Dialog',
      'Dialog',
      'Drawer',
      'Popover',
      'Progress',
      'Skeleton',
      'Sonner',
      'Spinner',
      'Toast',
    ],
  },
  {
    title: '其他',
    items: ['Command', 'Context Menu', 'Direction'],
  },
] as const;

const componentCatalog = componentGroups.flatMap((group) => group.items);
const componentSlug = (name: string) => name.toLowerCase().replace(/ /g, '-');
const spaciousComponentSlugs = new Set(
  componentGroups
    .filter((group) => group.title === '布局' || group.title === '导航')
    .flatMap((group) => group.items.map(componentSlug))
);

const demoCode = `import { Button } from '@heliannuuthus/ui/button'

export function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button>开始使用</Button>
      <Button variant="outline">查看文档</Button>
    </div>
  )
}`;

const navItems = [
  { label: '快速开始', to: '/docs/getting-started' },
  { label: '设计理念', to: '/design' },
  { label: '组件库', to: '/components' },
];

function Brand() {
  return (
    <NavLink className="brand" to="/" aria-label="Heliannuuthus UI 首页">
      <span className="brand-avatar" aria-hidden="true">
        <img src={avatarUrl} alt="" />
      </span>
      <span>
        <strong>Heliannuuthus</strong>
        <small>UI</small>
      </span>
    </NavLink>
  );
}

function SiteHeader({ dark, onTheme }: { dark: boolean; onTheme: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Brand />
      <Button
        className="mobile-menu"
        size="icon"
        variant="ghost"
        aria-label={open ? '关闭导航' : '打开导航'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <nav
        className={open ? 'site-nav is-open' : 'site-nav'}
        aria-label="主导航"
      >
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <Button className="search-trigger" variant="outline">
          <Search size={16} />
          <span>搜索组件</span>
          <kbd>⌘ K</kbd>
        </Button>
        <Button
          className="icon-button"
          nativeButton={false}
          render={<a href={repositoryUrl} />}
          size="icon"
          variant="ghost"
          aria-label="在 GitHub 查看源码"
        >
          <Github />
        </Button>
        <Button
          className="icon-button"
          size="icon"
          variant="ghost"
          onClick={onTheme}
          aria-label="切换主题"
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
}

function HomePage() {
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
              {componentCatalog.length} 个可组合组件
            </Badge>
            <H1>构建清晰、一致的产品界面</H1>
            <TypographyLead className="hero-copy">
              Heliannuuthus UI 提供稳定的 React 组件、明确的 API
              与可访问交互，让产品团队把注意力留给真正的业务问题。
            </TypographyLead>
          </Stack>

          <Stack align="center" gap={12} orientation="horizontal" wrap>
            <Button
              nativeButton={false}
              render={<NavLink to="/docs/getting-started" />}
              size="lg"
            >
              开始使用 <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              render={<NavLink to="/components" />}
              size="lg"
              variant="outline"
            >
              浏览组件
            </Button>
          </Stack>

          <Tabs animation="none" className="hero-install" defaultValue="pnpm">
            <TabsList aria-label="选择包管理器" variant="line">
              {(Object.keys(installCommands) as PackageManager[]).map(
                (manager) => (
                  <TabsTrigger
                    key={manager}
                    value={manager}
                    onClick={() => setCopiedManager(null)}
                  >
                    {manager}
                  </TabsTrigger>
                )
              )}
            </TabsList>
            {(Object.keys(installCommands) as PackageManager[]).map(
              (manager) => (
                <TabsContent key={manager} value={manager}>
                  <Button
                    block
                    onClick={() => copyInstall(manager)}
                    variant="outline"
                  >
                    <TypographyCode>{installCommands[manager]}</TypographyCode>
                    {copiedManager === manager ? (
                      <Check data-icon="inline-end" />
                    ) : (
                      <Copy data-icon="inline-end" />
                    )}
                  </Button>
                </TabsContent>
              )
            )}
          </Tabs>
        </Stack>

        <Card
          className="hero-showcase"
          radius="sm"
          title="组件组合预览"
          description="使用公共组件完成真实界面，而不是绘制静态示意图。"
          action={<Badge variant="secondary">Live</Badge>}
        >
          <Stack block gap={24}>
            <Stack align="center" gap={8} orientation="horizontal" wrap>
              <Badge variant="outline">Accessible</Badge>
              <Badge variant="outline">Type-safe</Badge>
              <Badge variant="outline">Composable</Badge>
            </Stack>
            <Stack block gap={8}>
              <Label htmlFor="home-workspace-name">工作区名称</Label>
              <Input defaultValue="Heliannuuthus UI" id="home-workspace-name" />
            </Stack>
            <Stack
              align="center"
              block
              gap={8}
              justify="end"
              orientation="horizontal"
            >
              <Button variant="outline">取消</Button>
              <Button>保存修改</Button>
            </Stack>
          </Stack>
        </Card>
      </section>

      <section className="feature-strip" aria-label="项目特性">
        <div>
          <strong>{componentCatalog.length}</strong>
          <span>个基础组件</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>TypeScript</span>
        </div>
        <div>
          <strong>A11y</strong>
          <span>可访问性优先</span>
        </div>
        <div>
          <strong>Open</strong>
          <span>源码完全可控</span>
        </div>
      </section>

      <section className="home-section philosophy-section">
        <Stack block gap={48}>
          <Stack block className="section-heading" gap={16}>
            <TypographySmall className="section-label">
              DESIGN SYSTEM
            </TypographySmall>
            <H2>让每一个产品共享同一套界面语言</H2>
            <TypographyLead>
              公共组件负责稳定的行为和表达，业务项目专注自己的流程与语义。
            </TypographyLead>
            <Button
              nativeButton={false}
              render={<NavLink to="/design" />}
              variant="link"
            >
              了解设计理念 <ArrowRight data-icon="inline-end" />
            </Button>
          </Stack>
          <Masonry
            className="principle-grid"
            columns={4}
            gap={14}
            minColumnWidth={220}
          >
            {[
              ['清晰', '信息层级先于装饰，让状态、操作与反馈始终可理解。'],
              ['一致', '相同的问题提供相同的解法，跨产品也保持熟悉感。'],
              ['可组合', '小而稳定的能力可以自由组合，业务语义留在业务中。'],
              ['可生长', 'API 为真实场景保留扩展点，并尊重长期兼容性。'],
            ].map(([title, copy]) => (
              <Card key={title} radius="sm">
                <Stack block gap={12}>
                  <H3>{title}</H3>
                  <TypographyMuted>{copy}</TypographyMuted>
                </Stack>
              </Card>
            ))}
          </Masonry>
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
              <TypographySmall className="section-label">
                COMPONENTS
              </TypographySmall>
              <H2>从基础控件到完整交互</H2>
            </Stack>
            <Button
              nativeButton={false}
              render={<NavLink to="/components" />}
              variant="link"
            >
              查看全部组件 <ArrowRight data-icon="inline-end" />
            </Button>
          </Stack>
          <Masonry columns={3} gap={14} minColumnWidth={240}>
            {componentGroups.slice(0, 6).map((group) => (
              <Item
                key={group.title}
                render={
                  <NavLink
                    to={`/components/${componentSlug(group.items[0])}`}
                  />
                }
                variant="outline"
              >
                <ItemMedia variant="icon">
                  <Package />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{group.title}</ItemTitle>
                  <ItemDescription>{group.items.length} 个组件</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ArrowRight />
                </ItemActions>
              </Item>
            ))}
          </Masonry>
        </Stack>
      </section>
    </main>
  );
}

function GettingStartedPage() {
  return (
    <DocLayout
      title="快速开始"
      kicker="接入指南"
      description="用几分钟把 Heliannuuthus UI 接入你的 React 项目。"
      toc={[
        {
          label: '安装',
          href: '#installation',
          icon: <PackagePlus data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: '引入样式',
          href: '#styles',
          icon: <Palette data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: '使用组件',
          href: '#usage',
          icon: <Blocks data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: '下一步',
          href: '#next-step',
          icon: <LayoutGrid data-icon="inline-start" strokeWidth={2.5} />,
        },
      ]}
    >
      <DocSection
        description="选择项目正在使用的包管理器安装。推荐使用 pnpm。"
        icon={<PackagePlus strokeWidth={2.5} />}
        id="installation"
        step="01"
        title="安装"
      >
        <PackageManagerInstall />
      </DocSection>
      <DocSection
        description="在应用入口加载一次全局主题样式。"
        icon={<Palette strokeWidth={2.5} />}
        id="styles"
        step="02"
        title="引入样式"
      >
        <CodeBlock
          code="import '@heliannuuthus/ui/styles.css'"
          fileName="app.tsx"
        />
      </DocSection>
      <DocSection
        description="每个组件都通过明确的子路径导入，便于 tree-shaking，也让依赖边界一目了然。"
        icon={<Blocks strokeWidth={2.5} />}
        id="usage"
        step="03"
        title="使用组件"
      >
        <CodeBlock code={demoCode} fileName="button-example.tsx" />
      </DocSection>
      <Item
        className="next-card"
        id="next-step"
        render={<NavLink to="/components" />}
        variant="outline"
      >
        <ItemMedia variant="icon">
          <LayoutGrid strokeWidth={2.5} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            <Stack align="center" gap={8} orientation="horizontal">
              <Badge variant="secondary">04</Badge>
              <TypographyLarge className="font-bold">
                浏览完整组件目录
              </TypographyLarge>
            </Stack>
          </ItemTitle>
          <ItemDescription>
            继续查看组件示例、API 与具体使用建议。
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ArrowRight />
        </ItemActions>
      </Item>
    </DocLayout>
  );
}

function PackageManagerInstall() {
  return (
    <Tabs animation="none" defaultValue="pnpm">
      <TabsList aria-label="包管理器" variant="line">
        {(Object.keys(installCommands) as PackageManager[]).map((manager) => (
          <TabsTrigger key={manager} value={manager}>
            {manager}
          </TabsTrigger>
        ))}
      </TabsList>
      {(Object.keys(installCommands) as PackageManager[]).map((manager) => (
        <TabsContent key={manager} value={manager}>
          <CodeBlock
            code={installCommands[manager]}
            fileName="terminal"
            language="bash"
            showLineNumbers={false}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function DesignPage() {
  const principles = [
    [
      '01',
      '清晰胜过表现',
      '视觉的首要职责是解释结构。颜色、间距和动效都应服务于理解，而不是争夺注意力。',
    ],
    [
      '02',
      '约定创造效率',
      '一致的命名、状态和反馈让团队少做无谓选择，把注意力留给真正的产品问题。',
    ],
    [
      '03',
      '组合保持边界',
      '公共组件提供可靠能力，业务层负责语义与流程。两者清楚分工，系统才能自由生长。',
    ],
    [
      '04',
      '细节建立信任',
      '键盘操作、窄屏布局、加载与错误状态并非补充，它们共同决定一个组件是否值得依赖。',
    ],
  ] as const;

  return (
    <DocLayout
      title="设计理念"
      kicker="FOUNDATION"
      description="组件不是终点。我们建立的是一套让产品持续保持清晰、一致和可维护的共同语言。"
      toc={principles.map(([number, title]) => ({
        label: title,
        href: `#principle-${number}`,
      }))}
    >
      <Stack block className="design-values" gap={0} separator={<Separator />}>
        {principles.map(([number, title, copy]) => (
          <article id={`principle-${number}`} key={number}>
            <TypographySmall>{number}</TypographySmall>
            <Stack block gap={8}>
              <H3>{title}</H3>
              <TypographyMuted>{copy}</TypographyMuted>
            </Stack>
          </article>
        ))}
      </Stack>
    </DocLayout>
  );
}

function ComponentsOverview() {
  const [query, setQuery] = useState('');
  const groups = useMemo(
    () =>
      componentGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((group) => group.items.length),
    [query]
  );

  return (
    <div className="components-page">
      <header className="components-heading">
        <span>COMPONENTS</span>
        <h1>组件总览</h1>
        <p>覆盖界面构建中的常见场景，并持续从真实产品中沉淀更好的实践。</p>
        <label className="component-search">
          <Search />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索组件"
          />
        </label>
      </header>
      <div className="component-groups">
        {groups.map((group) => (
          <section key={group.title}>
            <header>
              <h2>{group.title}</h2>
              <span>{group.items.length}</span>
            </header>
            <Masonry
              className="component-group-grid"
              columns={4}
              gap={12}
              minColumnWidth={180}
            >
              {group.items.map((item) => (
                <NavLink key={item} to={`/components/${componentSlug(item)}`}>
                  <strong>{item}</strong>
                  <p>{componentDocumentation[componentSlug(item)]?.summary}</p>
                </NavLink>
              ))}
            </Masonry>
          </section>
        ))}
      </div>
    </div>
  );
}

function ComponentNavigation({ component }: { component: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

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
      aria-label="组件导航"
      className="component-docs-sidebar"
      collapsible="none"
    >
      <SidebarHeader className="component-docs-sidebar-header">
        <NavLink to="/components">
          <span>组件</span>
          <small>{componentCatalog.length}</small>
        </NavLink>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent
        className="component-docs-sidebar-content"
        ref={contentRef}
      >
        {componentGroups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="component-docs-sidebar-label">
              <span>{group.title}</span>
              <small>{group.items.length}</small>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const slug = componentSlug(item);
                  return (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton
                        isActive={slug === component}
                        render={<NavLink to={`/components/${slug}`} />}
                        size="sm"
                      >
                        <span>{item}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

function ComponentPage() {
  const { component = 'button' } = useParams();

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [component]);

  if (component === 'button-group') {
    return <Navigate to="/components/button" replace />;
  }
  if (component === 'calendar') {
    return <Navigate to="/components/date-picker" replace />;
  }
  if (component === 'input-group' || component === 'input-otp') {
    return <Navigate to="/components/input" replace />;
  }
  if (component === 'field' || component === 'label') {
    return <Navigate to="/components/form" replace />;
  }
  if (component === 'native-select') {
    return <Navigate to="/components/select" replace />;
  }
  if (component === 'sidebar') {
    return <Navigate to="/components/layout" replace />;
  }
  const name =
    componentCatalog.find((item) => componentSlug(item) === component) ??
    'Button';
  const documentation = componentDocumentation[component];
  return (
    <SidebarProvider
      className="component-detail-layout"
      style={
        {
          '--sidebar-width': 'clamp(240px, 16vw, 288px)',
        } as CSSProperties
      }
    >
      <ComponentNavigation component={component} />
      <SidebarInset
        className={`component-detail${
          spaciousComponentSlugs.has(component)
            ? ' component-detail-spacious'
            : ''
        }`}
      >
        <div className="breadcrumb">
          <NavLink to="/components">组件</NavLink>
          <span>/</span>
          <span>{name}</span>
        </div>
        <div className="component-title">
          <div>
            <h1>{name}</h1>
            <p>
              {documentation?.summary ??
                '该组件的完整使用场景正在按组件目录顺序整理。'}
            </p>
          </div>
          <a
            href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
          >
            <Github /> 查看源码
          </a>
        </div>
        {documentation ? (
          <>
            {documentation.examples.length > 0 && (
              <section className="demo-section">
                <h2>示例</h2>
                <ComponentExampleList
                  component={component}
                  examples={documentation.examples}
                />
              </section>
            )}
            {((documentation.parts?.length ?? 0) > 0 ||
              documentation.api.length > 0) && (
              <section className="component-reference-section">
                <h2>API</h2>
                {documentation.parts && documentation.parts.length > 0 && (
                  <div className="component-reference-block">
                    <h3>组成组件</h3>
                    <div className="component-parts-table">
                      <div className="component-parts-head">
                        <span>组件</span>
                        <span>用途</span>
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
                    {documentation.parts && documentation.parts.length > 0 && (
                      <h3>属性</h3>
                    )}
                    <div className="component-api-table">
                      <div className="component-api-head">
                        <span>属性</span>
                        <span>说明</span>
                        <span>类型</span>
                        <span>默认值</span>
                      </div>
                      {documentation.api.map((property) => (
                        <div
                          key={`${property.component ?? documentation.name}:${property.name}`}
                        >
                          {property.component ? (
                            <Stack gap={2}>
                              <TypographySmall className="font-mono text-muted-foreground">
                                {property.component}
                              </TypographySmall>
                              <code>{property.name}</code>
                            </Stack>
                          ) : (
                            <code>{property.name}</code>
                          )}
                          <span>{property.description}</span>
                          <code>{property.type}</code>
                          <code>{property.defaultValue ?? '—'}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
            <div className="guidance-grid">
              <section>
                <h2>无障碍</h2>
                <ul>
                  {documentation.accessibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>避免这样使用</h2>
                <ul>
                  {documentation.pitfalls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </>
        ) : null}
      </SidebarInset>
    </SidebarProvider>
  );
}

function ComponentExampleList({
  component,
  examples,
}: {
  component: string;
  examples: ComponentExample[];
}) {
  return (
    <Masonry
      className="example-list"
      columns={2}
      gap={[20, 32]}
      minColumnWidth={300}
    >
      {examples.map((example) => (
        <MasonryItem
          className={`example-item${example.wide ? ' example-item-wide' : ''}`}
          key={example.title}
          span={example.wide ? 'full' : 'auto'}
        >
          <ComponentExampleCard component={component} example={example} />
        </MasonryItem>
      ))}
    </Masonry>
  );
}

function ComponentExampleCard({
  component,
  example,
}: {
  component: string;
  example: ComponentExample;
}) {
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
            <TooltipProvider delay={300}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      onClick={copy}
                      aria-label={copied ? '代码已复制' : '复制代码'}
                    />
                  }
                >
                  {copied ? <Check /> : <Copy />}
                </TooltipTrigger>
                <TooltipContent>
                  {copied ? '已复制' : '复制代码'}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="在 GitHub 查看源码"
                    />
                  }
                >
                  <Github />
                </TooltipTrigger>
                <TooltipContent>在 GitHub 查看源码</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href="https://codesandbox.io/p/github/heliannuuthus/ui/main"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="在 CodeSandbox 打开"
                    />
                  }
                >
                  <Box />
                </TooltipTrigger>
                <TooltipContent>在 CodeSandbox 打开</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href="https://stackblitz.com/github/heliannuuthus/ui"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="在 StackBlitz 打开"
                    />
                  }
                >
                  <Zap />
                </TooltipTrigger>
                <TooltipContent>在 StackBlitz 打开</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle
                      className="demo-expand-toggle size-8 min-w-8 p-0"
                      aria-label={expanded ? '收起代码' : '展开代码'}
                      pressed={expanded}
                      onChange={setExpanded}
                    />
                  }
                >
                  <Code2 />
                </TooltipTrigger>
                <TooltipContent>
                  {expanded ? '收起代码' : '展开代码'}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
          example.previewHeight
            ? ({
                '--demo-preview-height': `${example.previewHeight}px`,
              } as CSSProperties)
            : undefined
        }
      >
        {example.cases ? (
          <ComponentHarness cases={example.cases}>
            {(values) =>
              typeof example.preview === 'function'
                ? example.preview(values)
                : example.preview
            }
          </ComponentHarness>
        ) : example.caseAxes ? (
          <ComponentHarness axes={example.caseAxes}>
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
}

function CodeBlock({
  code,
  fileName = 'example.tsx',
  language = 'tsx',
  showLineNumbers = true,
}: {
  code: string;
  fileName?: string;
  language?: 'bash' | 'tsx';
  showLineNumbers?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <SyntaxCode
      action={
        <Button
          aria-label={copied ? '代码已复制' : '复制代码'}
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
}

function DocSection({
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
}) {
  return (
    <section className="doc-section" id={id}>
      <Stack block gap={16}>
        <Item className="p-0" size="sm">
          <ItemMedia variant="icon">{icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>
              <Stack align="center" gap={8} orientation="horizontal">
                <Badge variant="secondary">{step}</Badge>
                <H2 className="border-0 pb-0 text-2xl font-bold">{title}</H2>
              </Stack>
            </ItemTitle>
            <ItemDescription>{description}</ItemDescription>
          </ItemContent>
        </Item>
        {children}
      </Stack>
    </section>
  );
}

function DocLayout({
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
}) {
  return (
    <main className="doc-page">
      <Stack block className="doc-content" gap={48}>
        <Stack block className="doc-intro" gap={8}>
          <Badge className="doc-kicker" variant="outline">
            {kicker}
          </Badge>
          <H1 id="page-title">{title}</H1>
          <TypographyLead className="text-lg leading-8">
            {description}
          </TypographyLead>
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
      <aside aria-label="本页目录" className="doc-toc">
        <Stack align="stretch" gap={16} orientation="horizontal">
          <Separator orientation="vertical" />
          <Stack gap={8}>
            <TypographySmall>本页目录</TypographySmall>
            <Stack gap={2}>
              {toc.map((item, index) => (
                <Button
                  className="doc-toc-link"
                  key={item.href}
                  nativeButton={false}
                  render={<a href={item.href} />}
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
}

export function Showcase({
  page,
}: {
  page: 'home' | 'getting-started' | 'design' | 'components' | 'component';
}) {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? 'site dark' : 'site'}>
      <SiteHeader dark={dark} onTheme={() => setDark((value) => !value)} />
      {page === 'home' && <HomePage />}
      {page === 'getting-started' && <GettingStartedPage />}
      {page === 'design' && <DesignPage />}
      {page === 'components' && <ComponentsOverview />}
      {page === 'component' && <ComponentPage />}
    </div>
  );
}
