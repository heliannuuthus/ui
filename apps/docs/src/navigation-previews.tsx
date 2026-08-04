import { docsCopy } from './i18n/content';
import { useState, type CSSProperties, type ReactNode } from 'react';
import {
  Button,
  NavigationMenu,
  Pagination,
  Tabs,
  type TabsAnimation,
} from '@heliannuuthus/ui';
import {
  Activity,
  Blocks,
  BookOpen,
  ChevronRight,
  CircleHelp,
  Code2,
  Gauge,
  GitBranch,
  Layers3,
  Package,
  Palette,
  Sparkles,
  Users,
} from 'lucide-react';

const productLinks = [
  {
    title: docsCopy('组件库'),
    description: docsCopy('构建一致、可访问的产品界面。'),
    icon: <Blocks />,
  },
  {
    title: docsCopy('设计令牌'),
    description: docsCopy('统一颜色、间距与排版语言。'),
    icon: <Palette />,
  },
  {
    title: docsCopy('布局模板'),
    description: docsCopy('复用经过验证的页面骨架。'),
    icon: <Layers3 />,
  },
  {
    title: docsCopy('开发工具'),
    description: docsCopy('从设计快速进入实现与调试。'),
    icon: <Code2 />,
  },
];

function ProductMenu({ compact = false }: { compact?: boolean }) {
  return (
    <NavigationMenu
      align={compact ? 'end' : 'start'}
      items={[
        {
          label: docsCopy('产品'),
          content: ({ Link }) => (
            <div
              className={
                compact ? 'navigation-menu-compact' : 'navigation-menu-mega'
              }
            >
              {!compact && (
                <Link className="navigation-menu-feature" href="#">
                  <Sparkles />
                  <span>Heliannuuthus UI</span>
                  <strong>{docsCopy('从稳定的基础开始构建产品。')}</strong>
                  <small>{docsCopy('查看设计系统 →')}</small>
                </Link>
              )}
              <div className="navigation-menu-link-grid">
                {productLinks.slice(0, compact ? 2 : 4).map((item) => (
                  <Link href="#" key={item.title}>
                    {item.icon}
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ),
        },
        {
          label: docsCopy('资源'),
          content: ({ Link }) => (
            <div className="navigation-menu-resource-list">
              <Link href="#">
                <BookOpen />
                {docsCopy('文档中心')}
              </Link>
              <Link href="#">
                <GitBranch />
                {docsCopy('更新记录')}
              </Link>
              <Link href="#">
                <CircleHelp />
                {docsCopy('获取帮助')}
              </Link>
            </div>
          ),
        },
        { label: docsCopy('组件'), href: '#', active: true },
      ]}
    />
  );
}

export function NavigationMenuMegaDemo() {
  return (
    <div className="navigation-menu-stage">
      <div className="navigation-menu-sitebar">
        <a href="#" className="navigation-menu-brand">
          <span>H</span>
          Heliannuuthus
        </a>
        <ProductMenu />
        <a href="#" className="navigation-menu-action">
          {docsCopy('开始使用')}
          <ChevronRight />
        </a>
      </div>
      <div className="navigation-menu-hero">
        <span>DESIGN SYSTEM</span>
        <strong>{docsCopy('让产品导航保持清晰。')}</strong>
        <p>
          {docsCopy('打开“产品”或“资源”，查看不同内容宽度之间的平滑切换。')}
        </p>
      </div>
    </div>
  );
}

export function NavigationMenuCompactDemo() {
  return (
    <div className="navigation-menu-compact-stage">
      <span>{docsCopy('右对齐的局部导航')}</span>
      <ProductMenu compact />
    </div>
  );
}

function PageSummary({ children }: { children: ReactNode }) {
  return <div className="pagination-summary">{children}</div>;
}

export function PaginationControlledDemo() {
  const [page, setPage] = useState(3);
  return (
    <div className="pagination-demo-stack">
      <PageSummary>
        <span>{docsCopy('成员列表')}</span>
        <strong>
          {docsCopy('第')}
          {page}
          {docsCopy('页，共 5 页')}
        </strong>
      </PageSummary>
      <Pagination
        ariaLabels={{
          more: docsCopy('更多页面'),
          navigation: docsCopy('分页'),
          next: docsCopy('前往下一页'),
          previous: docsCopy('前往上一页'),
        }}
        current={page}
        nextText={docsCopy('下一页')}
        onChange={setPage}
        pageCount={5}
        previousText={docsCopy('上一页')}
      />
    </div>
  );
}

export function PaginationOverflowDemo() {
  return (
    <div className="pagination-demo-stack">
      <PageSummary>
        <span>{docsCopy('审计日志')}</span>
        <strong>{docsCopy('2,480 条记录')}</strong>
      </PageSummary>
      <Pagination
        ariaLabels={{
          more: docsCopy('更多页面'),
          navigation: docsCopy('分页'),
          next: docsCopy('前往下一页'),
          previous: docsCopy('前往上一页'),
        }}
        current={24}
        getItemHref={(page) => `#page-${page}`}
        nextText={docsCopy('下一页')}
        pageCount={80}
        previousText={docsCopy('上一页')}
      />
    </div>
  );
}

export function TabsDashboardDemo() {
  return (
    <Tabs
      animation="none"
      className="tabs-dashboard-demo"
      defaultValue="overview"
      items={[
        {
          value: 'overview',
          label: (
            <>
              <Gauge />
              {docsCopy('概览')}
            </>
          ),
          content: (
            <div className="tabs-metric-grid">
              <article>
                <span>{docsCopy('本月请求')}</span>
                <strong>82.4k</strong>
                <small>{docsCopy('较上月 +12%')}</small>
              </article>
              <article>
                <span>{docsCopy('可用率')}</span>
                <strong>99.98%</strong>
                <small>{docsCopy('运行稳定')}</small>
              </article>
            </div>
          ),
        },
        {
          value: 'activity',
          label: (
            <>
              <Activity />
              {docsCopy('动态')}
            </>
          ),
          content: (
            <div className="tabs-message-panel">
              {docsCopy('最近 24 小时完成了 18 次部署。')}
            </div>
          ),
        },
        {
          value: 'members',
          label: (
            <>
              <Users />
              {docsCopy('成员')}
            </>
          ),
          content: (
            <div className="tabs-message-panel">
              {docsCopy('当前工作区共有 12 位成员。')}
            </div>
          ),
        },
      ]}
    />
  );
}

type TabsListVariant = 'default' | 'line' | 'outline' | 'soft';

const tabsVariantOptions: Array<{
  label: string;
  value: TabsListVariant;
}> = [
  { label: docsCopy('胶囊'), value: 'default' },
  { label: docsCopy('线型'), value: 'line' },
  { label: docsCopy('描边'), value: 'outline' },
  { label: docsCopy('柔和'), value: 'soft' },
];

export function TabsVariantsDemo() {
  const [variant, setVariant] = useState<TabsListVariant>('default');

  return (
    <div className="tabs-variants-demo">
      <header className="tabs-demo-toolbar">
        <div>
          <span>VARIANT</span>
          <strong>{docsCopy('保持内容不动，只比较标签外观')}</strong>
        </div>
        <div
          aria-label={docsCopy('选择标签样式')}
          className="tabs-demo-options"
          role="group"
        >
          {tabsVariantOptions.map((option) => (
            <Button
              aria-pressed={variant === option.value}
              key={option.value}
              onClick={() => setVariant(option.value)}
              size="xs"
              variant={variant === option.value ? 'secondary' : 'ghost'}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </header>
      <div className="tabs-variants-stage">
        <Tabs
          animation="none"
          centered
          defaultValue="preview"
          items={[
            {
              value: 'preview',
              label: docsCopy('预览'),
              content: docsCopy('实时预览当前组件。'),
            },
            {
              value: 'code',
              label: docsCopy('代码'),
              content: docsCopy('查看组件实现代码。'),
            },
            {
              value: 'tests',
              label: docsCopy('测试'),
              content: docsCopy('所有交互测试均已通过。'),
              disabled: variant === 'outline',
            },
          ]}
          variant={variant}
          viewportClassName="tabs-variants-viewport"
        />
      </div>
    </div>
  );
}

const responsiveTabsItems = [
  {
    value: 'overview',
    label: (
      <>
        <Gauge />
        {docsCopy('项目概览')}
      </>
    ),
    content: docsCopy('查看项目状态、负责人和近期变化。'),
  },
  {
    value: 'activity',
    label: (
      <>
        <Activity />
        {docsCopy('活动记录')}
      </>
    ),
    content: docsCopy('查看团队最近完成的操作。'),
  },
  {
    value: 'branches',
    label: (
      <>
        <GitBranch />
        {docsCopy('分支策略')}
      </>
    ),
    content: docsCopy('查看分支保护与合并规则。'),
  },
  {
    value: 'docs',
    label: (
      <>
        <BookOpen />
        {docsCopy('使用文档')}
      </>
    ),
    content: docsCopy('查看组件接入与升级说明。'),
  },
  {
    value: 'support',
    label: (
      <>
        <CircleHelp />
        {docsCopy('帮助支持')}
      </>
    ),
    content: docsCopy('查看常见问题与支持渠道。'),
  },
] as const;

export function TabsResponsiveDemo() {
  return (
    <div className="tabs-responsive-demo">
      <p>
        {docsCopy(
          '这些宽度只用于验证嵌套场景；组件不会读取固定断点，而是响应当前可用空间。'
        )}
      </p>
      {[320, 480].map((width) => (
        <section
          className="tabs-responsive-frame"
          key={width}
          style={
            {
              '--tabs-responsive-width': `${width}px`,
            } as CSSProperties
          }
        >
          <header>
            <strong>
              ≤ {width}
              {docsCopy('px 测试容器')}
            </strong>
            <span>{docsCopy('使用方向键浏览全部标签')}</span>
          </header>
          <Tabs
            animation="none"
            defaultValue="overview"
            items={responsiveTabsItems}
            scrollButtonLabels={{
              end: docsCopy('向后滚动标签'),
              start: docsCopy('向前滚动标签'),
            }}
            variant={width === 320 ? 'soft' : 'line'}
          />
        </section>
      ))}
    </div>
  );
}

const tabsAnimationOptions: Array<{
  label: string;
  value: TabsAnimation;
}> = [
  { label: docsCopy('淡入'), value: 'fade' },
  { label: docsCopy('滑动'), value: 'slide' },
  { label: docsCopy('关闭'), value: 'none' },
];

export function TabsMotionDemo() {
  const [animation, setAnimation] = useState<TabsAnimation>('slide');

  return (
    <div className="tabs-motion-demo">
      <header className="tabs-demo-toolbar">
        <div>
          <span>MOTION</span>
          <strong>{docsCopy('固定视口，仅切换面板内容')}</strong>
        </div>
        <div
          aria-label={docsCopy('选择内容切换动效')}
          className="tabs-demo-options"
          role="group"
        >
          {tabsAnimationOptions.map((option) => (
            <Button
              aria-pressed={animation === option.value}
              key={option.value}
              onClick={() => setAnimation(option.value)}
              size="xs"
              variant={animation === option.value ? 'secondary' : 'ghost'}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </header>
      <div className="tabs-motion-stage">
        <Tabs
          animation={animation}
          centered
          defaultValue="design"
          variant="soft"
          viewportClassName="tabs-motion-viewport"
          items={[
            {
              value: 'design',
              label: (
                <>
                  <Palette />
                  {docsCopy('设计')}
                </>
              ),
              content: (
                <>
                  <strong>{docsCopy('整理组件视觉规范')}</strong>
                  <p>{docsCopy('确认状态、密度与响应式表现，再进入实现。')}</p>
                </>
              ),
            },
            {
              value: 'code',
              label: (
                <>
                  <Code2 />
                  {docsCopy('开发')}
                </>
              ),
              content: (
                <>
                  <strong>{docsCopy('连接组件与业务状态')}</strong>
                  <p>
                    {docsCopy('键盘切换时，内容沿操作方向移动并保持上下文。')}
                  </p>
                </>
              ),
            },
            {
              value: 'release',
              label: (
                <>
                  <Package />
                  {docsCopy('发布')}
                </>
              ),
              content: (
                <>
                  <strong>{docsCopy('完成验证并发布')}</strong>
                  <p>
                    {docsCopy('降低动态效果时会自动取消位移，仅保留即时切换。')}
                  </p>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
