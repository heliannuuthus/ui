import { useMemo, useState } from 'react';
import { Button } from '@heliannuuthus/ui/button';
import { Input } from '@heliannuuthus/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@heliannuuthus/ui/tooltip';
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Github,
  Menu,
  Moon,
  Package,
  PanelBottomClose,
  PanelBottomOpen,
  Search,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';
import {
  componentDocumentation,
  type ComponentExample,
} from './component-docs';

const repositoryUrl = 'https://github.com/heliannuuthus/ui';
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
    items: ['Button', 'Button Group', 'Typography', 'Badge', 'Kbd'],
  },
  {
    title: '布局',
    items: ['Aspect Ratio', 'Card', 'Resizable', 'Scroll Area', 'Separator'],
  },
  {
    title: '导航',
    items: [
      'Breadcrumb',
      'Dropdown Menu',
      'Menubar',
      'Navigation Menu',
      'Pagination',
      'Sidebar',
      'Tabs',
    ],
  },
  {
    title: '数据录入',
    items: [
      'Calendar',
      'Checkbox',
      'Combobox',
      'Date Picker',
      'Field',
      'Form',
      'Input',
      'Input Group',
      'Input OTP',
      'Label',
      'Native Select',
      'Radio Group',
      'Select',
      'Slider',
      'Switch',
      'Textarea',
      'Toggle',
      'Toggle Group',
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
      'Sheet',
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
      <span className="brand-symbol" aria-hidden="true">
        H
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
      <button
        className="mobile-menu"
        type="button"
        aria-label={open ? '关闭导航' : '打开导航'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
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
        <button className="search-trigger" type="button">
          <Search size={16} />
          <span>搜索组件</span>
          <kbd>⌘ K</kbd>
        </button>
        <a
          className="icon-button"
          href={repositoryUrl}
          aria-label="在 GitHub 查看源码"
        >
          <Github />
        </a>
        <button
          className="icon-button"
          type="button"
          onClick={onTheme}
          aria-label="切换主题"
        >
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
}

function HomePage() {
  const [packageManager, setPackageManager] = useState<PackageManager>('pnpm');
  const [copied, setCopied] = useState(false);
  const installCommand = installCommands[packageManager];
  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main>
      <section className="home-hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-content">
          <div className="release-pill">
            <Sparkles size={14} /> v0.1 已发布 <ArrowRight size={14} />
          </div>
          <h1>
            为 Heliannuuthus 产品而生的
            <span>React 组件基础设施</span>
          </h1>
          <p>
            一套清晰、可组合、可掌控的 UI 基础层。以开放代码为起点， 用成熟的
            API 和一致的设计语言连接每一个产品。
          </p>
          <div className="hero-actions">
            <NavLink className="primary-action" to="/docs/getting-started">
              开始使用 <ArrowRight size={17} />
            </NavLink>
            <NavLink className="secondary-action" to="/components">
              浏览组件
            </NavLink>
          </div>
          <div className="hero-install">
            <div className="package-manager-switch" aria-label="选择包管理器">
              {(Object.keys(installCommands) as PackageManager[]).map(
                (manager) => (
                  <button
                    className={packageManager === manager ? 'active' : ''}
                    key={manager}
                    type="button"
                    onClick={() => {
                      setPackageManager(manager);
                      setCopied(false);
                    }}
                  >
                    {manager}
                  </button>
                )
              )}
            </div>
            <button
              className="install-command"
              type="button"
              onClick={copyInstall}
            >
              <span className="prompt">$</span>
              <code>{installCommand}</code>
              <span>{copied ? <Check /> : <Copy />}</span>
            </button>
          </div>
        </div>
        <div className="hero-showcase" aria-label="组件能力预览">
          <div className="showcase-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>component-preview.tsx</small>
            </div>
            <div className="showcase-canvas">
              <div className="floating-chip chip-one">Accessible</div>
              <div className="floating-chip chip-two">Type-safe</div>
              <div className="preview-card">
                <div className="preview-avatar">H</div>
                <div>
                  <strong>建立你的界面</strong>
                  <p>组合组件，而不是重复造轮子。</p>
                </div>
                <div className="preview-input">name@example.com</div>
                <div className="preview-buttons">
                  <Button>继续</Button>
                  <Button variant="outline">取消</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="section-heading">
          <span>01 / DESIGN</span>
          <h2>设计应该让产品更像一个整体</h2>
          <p>不以风格覆盖业务，而以稳定、清晰的规则降低每一次决策的成本。</p>
          <NavLink to="/design">
            了解设计理念 <ArrowRight size={16} />
          </NavLink>
        </div>
        <div className="principle-grid">
          {[
            ['清晰', '信息层级先于装饰，让状态、操作与反馈始终可理解。'],
            ['一致', '相同的问题提供相同的解法，跨产品也保持熟悉感。'],
            ['可组合', '小而稳定的能力可以自由组合，业务语义留在业务中。'],
            ['可生长', 'API 为真实场景保留扩展点，并尊重长期兼容性。'],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section component-teaser">
        <div className="section-heading horizontal">
          <div>
            <span>02 / COMPONENTS</span>
            <h2>从基础控件到完整交互</h2>
          </div>
          <NavLink to="/components">
            查看全部组件 <ArrowRight size={16} />
          </NavLink>
        </div>
        <div className="teaser-grid">
          {componentGroups.slice(0, 6).map((group) => (
            <NavLink
              key={group.title}
              to={`/components/${componentSlug(group.items[0])}`}
            >
              <Package />
              <div>
                <strong>{group.title}</strong>
                <span>{group.items.length} 个组件</span>
              </div>
              <ArrowRight />
            </NavLink>
          ))}
        </div>
      </section>
    </main>
  );
}

function GettingStartedPage() {
  return (
    <DocLayout title="快速开始" kicker="GUIDE">
      <p className="lead">用几分钟把 Heliannuuthus UI 接入你的 React 项目。</p>
      <h2>安装</h2>
      <p>选择项目正在使用的包管理器安装。推荐使用 pnpm。</p>
      <PackageManagerInstall />
      <h2>引入样式</h2>
      <p>在应用入口加载一次全局主题样式。</p>
      <CodeBlock code="import '@heliannuuthus/ui/styles.css'" />
      <h2>使用组件</h2>
      <p>
        每个组件都通过明确的子路径导入，便于
        tree-shaking，也让依赖边界一目了然。
      </p>
      <CodeBlock code={demoCode} />
      <div className="next-card">
        <div>
          <span>下一步</span>
          <strong>浏览完整组件目录</strong>
        </div>
        <NavLink to="/components">
          <ArrowRight />
        </NavLink>
      </div>
    </DocLayout>
  );
}

function PackageManagerInstall() {
  const [packageManager, setPackageManager] = useState<PackageManager>('pnpm');

  return (
    <div className="package-install">
      <div className="package-tabs" role="tablist" aria-label="包管理器">
        {(Object.keys(installCommands) as PackageManager[]).map((manager) => (
          <button
            aria-controls="package-install-command"
            aria-selected={packageManager === manager}
            className={packageManager === manager ? 'active' : ''}
            key={manager}
            role="tab"
            type="button"
            onClick={() => setPackageManager(manager)}
          >
            {manager}
          </button>
        ))}
      </div>
      <div id="package-install-command" role="tabpanel">
        <CodeBlock code={installCommands[packageManager]} />
      </div>
    </div>
  );
}

function DesignPage() {
  return (
    <DocLayout title="设计理念" kicker="FOUNDATION">
      <p className="lead">
        组件不是终点。我们建立的是一套让产品持续保持清晰、一致和可维护的共同语言。
      </p>
      <div className="design-values">
        {[
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
        ].map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
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
            <div>
              {group.items.map((item) => (
                <NavLink key={item} to={`/components/${componentSlug(item)}`}>
                  <strong>{item}</strong>
                  <p>{componentDocumentation[componentSlug(item)]?.summary}</p>
                </NavLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ComponentPage() {
  const { component = 'button' } = useParams();
  const name =
    componentCatalog.find((item) => componentSlug(item) === component) ??
    'Button';
  const documentation = componentDocumentation[component];
  return (
    <div className="component-detail-layout">
      <aside className="component-sidebar">
        <strong>组件</strong>
        {componentGroups.map((group) => (
          <div key={group.title}>
            <span>{group.title}</span>
            {group.items.map((item) => (
              <NavLink key={item} to={`/components/${componentSlug(item)}`}>
                {item}
              </NavLink>
            ))}
          </div>
        ))}
      </aside>
      <main className="component-detail">
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
            <section className="component-guide-section">
              <h2>何时使用</h2>
              <ul>
                {documentation.whenToUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            {documentation.examples.length > 0 && (
              <section className="demo-section">
                <h2>使用场景</h2>
                <p>以下示例均使用组件库中的真实组件渲染。</p>
                <div className="example-list">
                  {documentation.examples.map((example) => (
                    <ComponentExampleCard
                      key={example.title}
                      component={component}
                      example={example}
                    />
                  ))}
                </div>
              </section>
            )}
            <section className="component-reference-section">
              <h2>API</h2>
              <div className="component-api-table">
                <div className="component-api-head">
                  <span>属性</span>
                  <span>说明</span>
                  <span>类型</span>
                  <span>默认值</span>
                </div>
                {documentation.api.map((property) => (
                  <div key={property.name}>
                    <code>{property.name}</code>
                    <span>{property.description}</span>
                    <code>{property.type}</code>
                    <code>{property.defaultValue ?? '—'}</code>
                  </div>
                ))}
              </div>
            </section>
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
      </main>
    </div>
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
    <article className="example-article">
      <header>
        <h3>{example.title}</h3>
        <p>{example.description}</p>
      </header>
      <div className="demo-card">
        <div className="demo-preview">{example.preview}</div>
        <TooltipProvider delay={300}>
          <footer className="demo-actions">
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
              <TooltipContent>{copied ? '已复制' : '复制代码'}</TooltipContent>
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
                <Code2 />
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
                <ExternalLink />
              </TooltipTrigger>
              <TooltipContent>在 StackBlitz 打开</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    className="demo-expand-button"
                    type="button"
                    aria-expanded={expanded}
                    aria-pressed={expanded}
                    aria-label={expanded ? '收起代码' : '展开代码'}
                    onClick={() => setExpanded((value) => !value)}
                  />
                }
              >
                {expanded ? <PanelBottomClose /> : <PanelBottomOpen />}
              </TooltipTrigger>
              <TooltipContent>
                {expanded ? '收起代码' : '展开代码'}
              </TooltipContent>
            </Tooltip>
          </footer>
        </TooltipProvider>
        {expanded && (
          <pre className="demo-code">
            <code>{example.code}</code>
          </pre>
        )}
      </div>
    </article>
  );
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="code-block">
      <pre>
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? <Check /> : <Copy />}
      </button>
    </div>
  );
}

function DocLayout({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <main className="doc-page">
      <div className="doc-content">
        <span className="doc-kicker">{kicker}</span>
        <h1>{title}</h1>
        {children}
      </div>
      <aside className="doc-toc">
        <span>本页目录</span>
        <a href="#">概览</a>
        <a href="#">核心内容</a>
        <a href="#">下一步</a>
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
      <footer className="site-footer">
        <Brand />
        <p>为 Heliannuuthus 产品构建稳定、清晰的界面基础。</p>
        <span>MIT © 2026 Heliannuuthus</span>
      </footer>
    </div>
  );
}
