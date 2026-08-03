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
  LayoutGrid,
  Menu,
  Moon,
  Package,
  PackagePlus,
  Palette,
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
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  componentDocumentation,
  type ApiProperty,
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

function groupApiProperties(
  properties: ApiProperty[],
  defaultComponent: string
) {
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
}

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
      'Item',
      'Marker',
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

const demoCode = `import { Button } from '@heliannuuthus/ui'

export function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button>开始使用</Button>
      <Button variant="outline">查看文档</Button>
    </div>
  )
}`;
const styleImportCode = `import '@heliannuuthus/ui/styles.css'
import './app.css'`;
const viteConfigCode = `import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { heliannuuthusUI } from '@heliannuuthus/ui/vite'

export default defineConfig({
  plugins: [heliannuuthusUI(), react()],
})`;

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

function SiteHeader({
  dark,
  onSearch,
  onTheme,
}: {
  dark: boolean;
  onSearch: () => void;
  onTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Brand />
      <Button
        className="mobile-menu"
        size="icon"
        variant="ghost"
        aria-controls="site-navigation"
        aria-label={open ? '关闭导航' : '打开导航'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <nav
        id="site-navigation"
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
        <Button className="search-trigger" variant="outline" onClick={onSearch}>
          <Search size={16} />
          <span>搜索组件</span>
          <kbd>⌘ K</kbd>
        </Button>
        <Button
          className="mobile-search-trigger"
          size="icon"
          variant="ghost"
          aria-label="搜索组件"
          onClick={onSearch}
        >
          <Search />
        </Button>
        <Button
          className="icon-button"
          href={repositoryUrl}
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
            <Typography.H1>构建清晰、一致的产品界面</Typography.H1>
            <Typography.Lead className="hero-copy">
              Heliannuuthus UI 提供稳定的 React 组件、明确的 API
              与可访问交互，让产品团队把注意力留给真正的业务问题。
            </Typography.Lead>
          </Stack>

          <Stack align="center" gap={12} orientation="horizontal" wrap>
            <Button href="/docs/getting-started" size="lg">
              开始使用 <ArrowRight data-icon="inline-end" />
            </Button>
            <Button href="/components" size="lg" variant="outline">
              浏览组件
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
                label: manager,
                content: (
                  <Button
                    block
                    onClick={() => copyInstall(manager)}
                    variant="outline"
                  >
                    <Typography.Code>
                      {installCommands[manager]}
                    </Typography.Code>
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
            <Typography.Small className="section-label">
              DESIGN SYSTEM
            </Typography.Small>
            <Typography.H2>让每一个产品共享同一套界面语言</Typography.H2>
            <Typography.Lead>
              公共组件负责稳定的行为和表达，业务项目专注自己的流程与语义。
            </Typography.Lead>
            <Button href="/design" variant="link">
              了解设计理念 <ArrowRight data-icon="inline-end" />
            </Button>
          </Stack>
          <Masonry
            className="principle-grid"
            columns={4}
            gap={14}
            items={[
              ['清晰', '信息层级先于装饰，让状态、操作与反馈始终可理解。'],
              ['一致', '相同的问题提供相同的解法，跨产品也保持熟悉感。'],
              ['可组合', '小而稳定的能力可以自由组合，业务语义留在业务中。'],
              ['可生长', 'API 为真实场景保留扩展点，并尊重长期兼容性。'],
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
              <Typography.H2>从基础控件到完整交互</Typography.H2>
            </Stack>
            <Button href="/components" variant="link">
              查看全部组件 <ArrowRight data-icon="inline-end" />
            </Button>
          </Stack>
          <Masonry
            columns={3}
            gap={14}
            items={componentGroups.slice(0, 6).map((group) => ({
              content: (
                <Item
                  actions={<ArrowRight />}
                  description={`${group.items.length} 个组件`}
                  media={<Package />}
                  mediaVariant="icon"
                  href={`/components/${componentSlug(group.items[0])}`}
                  title={group.title}
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
          label: '导入样式',
          href: '#build-integration',
          icon: <Code2 data-icon="inline-start" strokeWidth={2.5} />,
        },
        {
          label: 'Vite 优化',
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
        description="在应用入口导入一次共享样式。这个方式不绑定包管理器或构建工具。"
        icon={<Code2 strokeWidth={2.5} />}
        id="build-integration"
        step="02"
        title="导入样式"
      >
        <Stack block gap={12}>
          <CodeBlock code={styleImportCode} fileName="main.tsx" />
          <Item
            description="pnpm、npm、Yarn 和 Bun 都可以安装；Vite、Rollup、Webpack、Rspack、Parcel 与 Next.js 等现代构建工具都可以消费根入口和这份 CSS。"
            title="构建工具无关"
            variant="outline"
          />
        </Stack>
      </DocSection>
      <DocSection
        description="只使用少量组件的 Vite 应用可以选择按组件装配样式。"
        icon={<Palette strokeWidth={2.5} />}
        id="styles"
        step="03"
        title="可选 Vite 优化"
      >
        <Stack block gap={12}>
          <CodeBlock code={viteConfigCode} fileName="vite.config.ts" />
          <Item
            description="启用插件时移除 @heliannuuthus/ui/styles.css。插件会把静态具名根导入改写到私有组件入口，并自动加载对应样式。"
            title="窄组件集优化"
            variant="outline"
          />
          <Item
            description="按组件 CSS 会重复部分 Tailwind 工具类；使用组件较多时，共享样式通常更小，此时无需启用插件。"
            title="按应用规模选择"
            variant="outline"
          />
          <Item
            description="主题默认值位于较低优先级的 CSS layer，异步组件不会覆盖业务定义的语义变量。组件子路径始终是私有实现。"
            title="稳定覆盖"
            variant="outline"
          />
        </Stack>
      </DocSection>
      <DocSection
        description="使用具名根导入；业务构建工具会自动 tree-shake，只保留实际使用的组件与依赖。"
        icon={<Blocks strokeWidth={2.5} />}
        id="usage"
        step="04"
        title="使用组件"
      >
        <Stack block gap={12}>
          <CodeBlock code={demoCode} fileName="button-example.tsx" />
          <Item
            description="所有构建工具都从 @heliannuuthus/ui 使用具名根导入。JavaScript 会正常 tree-shake；只有启用可选 Vite 插件时才要求静态具名导入。"
            title="稳定的公共入口"
            variant="outline"
          />
        </Stack>
      </DocSection>
      <Item
        actions={<ArrowRight />}
        className="next-card"
        description="继续查看组件示例、API 与具体使用建议。"
        id="next-step"
        media={<LayoutGrid strokeWidth={2.5} />}
        mediaVariant="icon"
        href="/components"
        title={
          <Stack align="center" gap={8} orientation="horizontal">
            <Badge variant="secondary">05</Badge>
            <Typography.Large className="font-bold">
              浏览完整组件目录
            </Typography.Large>
          </Stack>
        }
        variant="outline"
      />
    </DocLayout>
  );
}

function PackageManagerInstall() {
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
}

function ComponentsOverview() {
  const [query, setQuery] = useState('');
  const groups = useMemo(
    () =>
      componentGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            const slug = componentSlug(item);
            const searchText =
              `${item} ${group.title} ${componentDocumentation[slug]?.summary ?? ''}`.toLowerCase();
            return searchText.includes(query.trim().toLowerCase());
          }),
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
      {groups.length > 0 ? (
        <div className="component-groups">
          {groups.map((group) => (
            <section key={group.title}>
              <header>
                <h2>{group.title}</h2>
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
              清除搜索
            </Button>
          }
          className="component-search-empty"
          description="换一个组件名称试试，或清除搜索查看完整目录。"
          icon={<SearchX />}
          title={`没有找到“${query}”`}
        />
      )}
    </div>
  );
}

function ComponentOverviewCard({ item }: { item: string }) {
  const summary = componentDocumentation[componentSlug(item)]?.summary ?? '';
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
        <NavLink to={`/components/${componentSlug(item)}`}>
          <strong>{item}</strong>
          <p ref={summaryRef} data-overflowing={overflowing || undefined}>
            {summary}
          </p>
        </NavLink>
      }
    />
  );
}

function ComponentSearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();

  const selectComponent = (slug: string) => {
    onOpenChange(false);
    navigate(`/components/${slug}`);
  };

  return (
    <Command
      className="component-command"
      dialog={{
        contentClassName: 'component-command-dialog',
        description: '搜索并打开 Heliannuuthus UI 组件文档',
        footer: (
          <div className="component-command-footer">
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              选择
            </span>
            <span>
              <kbd>↵</kbd>
              打开
            </span>
            <span>
              <kbd>esc</kbd>
              关闭
            </span>
          </div>
        ),
        open,
        showCloseButton: false,
        title: '搜索组件',
        onOpenChange,
      }}
      emptyText={
        <>
          <span className="component-command-empty-icon">
            <SearchX aria-hidden="true" />
          </span>
          <strong>没有匹配的组件</strong>
          <span>试试 Button、表单、导航或反馈。</span>
        </>
      }
      groups={componentGroups.map((group) => ({
        heading: `${group.title} · ${group.items.length}`,
        options: group.items.map((item) => {
          const slug = componentSlug(item);
          const summary = componentDocumentation[slug]?.summary ?? '';
          return {
            icon: (
              <span className="component-command-icon">
                <Box aria-hidden="true" />
              </span>
            ),
            keywords: [group.title, summary],
            label: (
              <span className="component-command-copy">
                <strong>{item}</strong>
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
      placeholder="搜索组件名称或用途…"
    />
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
      <Sidebar.Header className="component-docs-sidebar-header">
        <NavLink to="/components">
          <span>组件</span>
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
              <span>{group.title}</span>
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
}

function ComponentNavigationLink({
  isActive,
  item,
  slug,
}: {
  isActive: boolean;
  item: string;
  slug: string;
}) {
  const to = `/components/${slug}`;
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to);

  return (
    <Sidebar.MenuButton
      href={href}
      isActive={isActive}
      onClick={handleClick}
      size="sm"
    >
      <span>{item}</span>
    </Sidebar.MenuButton>
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
            {documentation.relatedComponents &&
              documentation.relatedComponents.length > 0 && (
                <nav
                  className="component-related"
                  aria-label={`${documentation.name} 相关组件`}
                >
                  <span>相关组件</span>
                  {documentation.relatedComponents.map((related) => (
                    <NavLink
                      key={related.slug}
                      to={`/components/${related.slug}`}
                    >
                      <span>
                        <strong>{related.name}</strong>
                        <small>{related.description}</small>
                      </span>
                      <ArrowRight aria-hidden="true" />
                    </NavLink>
                  ))}
                </nav>
              )}
            {documentation.examples.length > 0 && (
              <section className="demo-section">
                <h2>示例</h2>
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
                    <h3>属性</h3>
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
                          <div className="component-api-table">
                            <div className="component-api-head">
                              <span>属性</span>
                              <span>说明</span>
                              <span>类型</span>
                              <span>默认值</span>
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
                        </section>
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
      </Sidebar.Inset>
    </Sidebar.Provider>
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
            <Tooltip
              content={copied ? '已复制' : '复制代码'}
              delay={300}
              trigger={
                <button
                  type="button"
                  onClick={copy}
                  aria-label={copied ? '代码已复制' : '复制代码'}
                >
                  {copied ? <Check /> : <Copy />}
                </button>
              }
            />
            <Tooltip
              content="在 GitHub 查看源码"
              delay={300}
              trigger={
                <a
                  href={`${repositoryUrl}/blob/main/src/components/${component}.tsx`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="在 GitHub 查看源码"
                >
                  <Github />
                </a>
              }
            />
            <Tooltip
              content="在 CodeSandbox 打开"
              delay={300}
              trigger={
                <a
                  href="https://codesandbox.io/p/github/heliannuuthus/ui/main"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="在 CodeSandbox 打开"
                >
                  <Box />
                </a>
              }
            />
            <Tooltip
              content="在 StackBlitz 打开"
              delay={300}
              trigger={
                <a
                  href="https://stackblitz.com/github/heliannuuthus/ui"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="在 StackBlitz 打开"
                >
                  <Zap />
                </a>
              }
            />
            <Tooltip
              content={expanded ? '收起代码' : '展开代码'}
              delay={300}
              trigger={
                <Toggle
                  className="demo-expand-toggle size-8 min-w-8 p-0"
                  aria-label={expanded ? '收起代码' : '展开代码'}
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
          example.previewHeight
            ? ({
                '--demo-preview-height': `${example.previewHeight}px`,
              } as CSSProperties)
            : undefined
        }
      >
        {example.cases ? (
          <ComponentHarness cases={example.cases} layout={example.caseLayout}>
            {(values) =>
              typeof example.preview === 'function'
                ? example.preview(values)
                : example.preview
            }
          </ComponentHarness>
        ) : example.caseAxes ? (
          <ComponentHarness axes={example.caseAxes} layout={example.caseLayout}>
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
      <aside aria-label="本页目录" className="doc-toc">
        <Stack align="stretch" gap={16} orientation="horizontal">
          <Separator orientation="vertical" />
          <Stack gap={8}>
            <Typography.Small>本页目录</Typography.Small>
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
}

export function Showcase({
  page,
}: {
  page: 'home' | 'getting-started' | 'design' | 'components' | 'component';
}) {
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const openSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
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
}
