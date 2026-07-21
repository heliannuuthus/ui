import { useState, type CSSProperties, type ReactNode } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@heliannuuthus/ui/navigation-menu';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@heliannuuthus/ui/pagination';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@heliannuuthus/ui/sidebar';
import {
  Tabs,
  type TabsAnimation,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@heliannuuthus/ui/tabs';
import {
  Activity,
  Bell,
  Blocks,
  BookOpen,
  Box,
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  CircleHelp,
  Code2,
  FolderKanban,
  Gauge,
  GitBranch,
  Home,
  Layers3,
  LayoutDashboard,
  Package,
  Palette,
  Settings,
  ShieldCheck,
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
    <NavigationMenu align={compact ? 'end' : 'start'}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>产品</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
              className={
                compact ? 'navigation-menu-compact' : 'navigation-menu-mega'
              }
            >
              {!compact && (
                <NavigationMenuLink
                  className="navigation-menu-feature"
                  href="#"
                >
                  <Sparkles />
                  <span>Heliannuuthus UI</span>
                  <strong>从稳定的基础开始构建产品。</strong>
                  <small>查看设计系统 →</small>
                </NavigationMenuLink>
              )}
              <div className="navigation-menu-link-grid">
                {productLinks.slice(0, compact ? 2 : 4).map((item) => (
                  <NavigationMenuLink href="#" key={item.title}>
                    {item.icon}
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>资源</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="navigation-menu-resource-list">
              <NavigationMenuLink href="#">
                <BookOpen /> 文档中心
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <GitBranch /> 更新记录
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <CircleHelp /> 获取帮助
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink active href="#">
            组件
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="pagination-demo-stack">
      <PageSummary>
        <span>成员列表</span>
        <strong>第 {page} 页，共 5 页</strong>
      </PageSummary>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="上一页"
              aria-disabled={page === 1}
              onClick={(event) => {
                event.preventDefault();
                setPage((value) => Math.max(1, value - 1));
              }}
            />
          </PaginationItem>
          {pages.map((value) => (
            <PaginationItem key={value}>
              <PaginationLink
                href="#"
                isActive={page === value}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(value);
                }}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              text="下一页"
              aria-disabled={page === 5}
              onClick={(event) => {
                event.preventDefault();
                setPage((value) => Math.min(5, value + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" text="上一页" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">23</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              24
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">25</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">80</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" text="下一页" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export function TabsDashboardDemo() {
  return (
    <Tabs defaultValue="overview" className="tabs-dashboard-demo">
      <TabsList>
        <TabsTrigger value="overview">
          <Gauge /> 概览
        </TabsTrigger>
        <TabsTrigger value="activity">
          <Activity /> 动态
        </TabsTrigger>
        <TabsTrigger value="members">
          <Users /> 成员
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
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
      </TabsContent>
      <TabsContent value="activity">
        <div className="tabs-message-panel">最近 24 小时完成了 18 次部署。</div>
      </TabsContent>
      <TabsContent value="members">
        <div className="tabs-message-panel">当前工作区共有 12 位成员。</div>
      </TabsContent>
    </Tabs>
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
        <Tabs defaultValue="preview" animation="none">
          <TabsList variant={variant} centered={centered}>
            <TabsTrigger value="preview">预览</TabsTrigger>
            <TabsTrigger value="code">代码</TabsTrigger>
            <TabsTrigger value="tests" disabled={variant === 'outline'}>
              测试
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview">实时预览当前组件。</TabsContent>
          <TabsContent value="code">查看组件实现代码。</TabsContent>
          <TabsContent value="tests">所有交互测试均已通过。</TabsContent>
        </Tabs>
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
      <Tabs defaultValue="design" animation={animation}>
        <TabsList variant="soft" centered>
          <TabsTrigger value="design">
            <Palette /> 设计
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code2 /> 开发
          </TabsTrigger>
          <TabsTrigger value="release">
            <Package /> 发布
          </TabsTrigger>
        </TabsList>
        <div className="tabs-motion-viewport">
          <TabsContent value="design">
            <strong>整理组件视觉规范</strong>
            <p>确认状态、密度与响应式表现，再进入实现。</p>
          </TabsContent>
          <TabsContent value="code">
            <strong>连接组件与业务状态</strong>
            <p>键盘切换时，内容沿操作方向移动并保持上下文。</p>
          </TabsContent>
          <TabsContent value="release">
            <strong>完成验证并发布</strong>
            <p>降低动态效果时会自动取消位移，仅保留即时切换。</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

const sidebarItems = [
  { label: '工作台', icon: LayoutDashboard, active: true },
  { label: '项目', icon: FolderKanban, badge: '8' },
  { label: '组件', icon: Box, badge: '42' },
  { label: '分析', icon: ChartNoAxesColumnIncreasing },
];

export function SidebarWorkspaceDemo() {
  return (
    <div className="sidebar-demo-viewport">
      <SidebarProvider
        className="sidebar-demo-provider"
        style={{ '--sidebar-width': '13rem' } as CSSProperties}
      >
        <Sidebar
          variant="inset"
          collapsible="icon"
          className="sidebar-demo-panel"
        >
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <span className="sidebar-demo-logo">H</span>
                  <span>Heliannuuthus UI</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarInput placeholder="搜索工作区" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>工作区</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active}>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.badge && (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>设置</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="sidebar-demo-inset">
          <header>
            <SidebarTrigger />
            <div>
              <span>工作台</span>
              <strong>产品概览</strong>
            </div>
            <Bell />
          </header>
          <main>
            <article>
              <Home />
              <span>今日访问</span>
              <strong>12,804</strong>
            </article>
            <article>
              <Package />
              <span>已发布组件</span>
              <strong>42</strong>
            </article>
            <article>
              <ShieldCheck />
              <span>系统状态</span>
              <strong>稳定</strong>
            </article>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
