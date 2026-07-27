import { useState, type ReactNode } from 'react';
import { NavigationMenu } from '@heliannuuthus/ui';
import { Pagination } from '@heliannuuthus/ui';
import { Tabs, type TabsAnimation } from '@heliannuuthus/ui';
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
    title: '组件库',
    description: '构建一致、可访问的产品界面。',
    icon: <Blocks />,
  },
  {
    title: '设计令牌',
    description: '统一颜色、间距与排版语言。',
    icon: <Palette />,
  },
  {
    title: '布局模板',
    description: '复用经过验证的页面骨架。',
    icon: <Layers3 />,
  },
  {
    title: '开发工具',
    description: '从设计快速进入实现与调试。',
    icon: <Code2 />,
  },
];

function ProductMenu({ compact = false }: { compact?: boolean }) {
  return (
    <NavigationMenu
      align={compact ? 'end' : 'start'}
      items={[
        {
          label: '产品',
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
                  <strong>从稳定的基础开始构建产品。</strong>
                  <small>查看设计系统 →</small>
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
          label: '资源',
          content: ({ Link }) => (
            <div className="navigation-menu-resource-list">
              <Link href="#">
                <BookOpen /> 文档中心
              </Link>
              <Link href="#">
                <GitBranch /> 更新记录
              </Link>
              <Link href="#">
                <CircleHelp /> 获取帮助
              </Link>
            </div>
          ),
        },
        { label: '组件', href: '#', active: true },
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
          开始使用 <ChevronRight />
        </a>
      </div>
      <div className="navigation-menu-hero">
        <span>DESIGN SYSTEM</span>
        <strong>让产品导航保持清晰。</strong>
        <p>打开“产品”或“资源”，查看不同内容宽度之间的平滑切换。</p>
      </div>
    </div>
  );
}

export function NavigationMenuCompactDemo() {
  return (
    <div className="navigation-menu-compact-stage">
      <span>右对齐的局部导航</span>
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
        <span>成员列表</span>
        <strong>第 {page} 页，共 5 页</strong>
      </PageSummary>
      <Pagination current={page} onChange={setPage} pageCount={5} />
    </div>
  );
}

export function PaginationOverflowDemo() {
  return (
    <div className="pagination-demo-stack">
      <PageSummary>
        <span>审计日志</span>
        <strong>2,480 条记录</strong>
      </PageSummary>
      <Pagination
        current={24}
        getItemHref={(page) => `#page-${page}`}
        pageCount={80}
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
              <Gauge /> 概览
            </>
          ),
          content: (
            <div className="tabs-metric-grid">
              <article>
                <span>本月请求</span>
                <strong>82.4k</strong>
                <small>较上月 +12%</small>
              </article>
              <article>
                <span>可用率</span>
                <strong>99.98%</strong>
                <small>运行稳定</small>
              </article>
            </div>
          ),
        },
        {
          value: 'activity',
          label: (
            <>
              <Activity /> 动态
            </>
          ),
          content: (
            <div className="tabs-message-panel">
              最近 24 小时完成了 18 次部署。
            </div>
          ),
        },
        {
          value: 'members',
          label: (
            <>
              <Users /> 成员
            </>
          ),
          content: (
            <div className="tabs-message-panel">当前工作区共有 12 位成员。</div>
          ),
        },
      ]}
    />
  );
}

type TabsListVariant = 'default' | 'line' | 'outline' | 'soft';

export function TabsVariantsDemo({
  variant = 'default',
}: {
  variant?: TabsListVariant;
}) {
  const centered = variant === 'line' || variant === 'soft';

  return (
    <div className="tabs-variants-demo">
      <div className="tabs-style-sample">
        <Tabs
          animation="none"
          centered={centered}
          defaultValue="preview"
          items={[
            { value: 'preview', label: '预览', content: '实时预览当前组件。' },
            { value: 'code', label: '代码', content: '查看组件实现代码。' },
            {
              value: 'tests',
              label: '测试',
              content: '所有交互测试均已通过。',
              disabled: variant === 'outline',
            },
          ]}
          variant={variant}
        />
      </div>
    </div>
  );
}

export function TabsMotionDemo({
  animation = 'slide',
}: {
  animation?: TabsAnimation;
}) {
  return (
    <div className="tabs-motion-demo">
      <Tabs
        animation={animation}
        centered
        defaultValue="design"
        panelClassName="tabs-motion-viewport"
        variant="soft"
        items={[
          {
            value: 'design',
            label: (
              <>
                <Palette /> 设计
              </>
            ),
            content: (
              <>
                <strong>整理组件视觉规范</strong>
                <p>确认状态、密度与响应式表现，再进入实现。</p>
              </>
            ),
          },
          {
            value: 'code',
            label: (
              <>
                <Code2 /> 开发
              </>
            ),
            content: (
              <>
                <strong>连接组件与业务状态</strong>
                <p>键盘切换时，内容沿操作方向移动并保持上下文。</p>
              </>
            ),
          },
          {
            value: 'release',
            label: (
              <>
                <Package /> 发布
              </>
            ),
            content: (
              <>
                <strong>完成验证并发布</strong>
                <p>降低动态效果时会自动取消位移，仅保留即时切换。</p>
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
