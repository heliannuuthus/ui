import {
  Content as LayoutContent,
  Footer as LayoutFooter,
  Header as LayoutHeader,
  Layout,
  Sidebar as LayoutSidebar,
} from '@heliannuuthus/ui/layout';
import {
  Bell,
  Blocks,
  ChartNoAxesColumnIncreasing,
  CircleUserRound,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Search,
  Settings,
} from 'lucide-react';

const navigationItems = [
  { label: '概览', icon: LayoutDashboard, active: true },
  { label: '项目', icon: FolderKanban },
  { label: '组件', icon: Blocks },
  { label: '报告', icon: FileText },
];

function PreviewHeader({ compact = false }: { compact?: boolean }) {
  return (
    <LayoutHeader className="layout-demo-header">
      <span className="layout-demo-brand">H</span>
      {!compact && <strong>Heliannuuthus</strong>}
      <span className="layout-demo-header-spacer" />
      <Search />
      <Bell />
      <CircleUserRound />
    </LayoutHeader>
  );
}

function PreviewSidebar({
  label = '工作区',
  width = 112,
}: {
  label?: string;
  width?: number;
}) {
  return (
    <LayoutSidebar
      aria-label={label}
      className="layout-demo-sidebar"
      width={width}
    >
      <small>{label}</small>
      <nav aria-label={`${label}导航`}>
        {navigationItems.map((item) => (
          <a
            className={item.active ? 'is-active' : undefined}
            href="#"
            key={item.label}
          >
            <item.icon />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <a href="#">
        <Settings />
        <span>设置</span>
      </a>
    </LayoutSidebar>
  );
}

function PreviewContent({ detailed = false }: { detailed?: boolean }) {
  return (
    <LayoutContent className="layout-demo-content" render={<div />}>
      <div className="layout-demo-heading">
        <span>工作台</span>
        <strong>{detailed ? '项目进度' : '欢迎回来'}</strong>
      </div>
      <div className="layout-demo-metrics">
        <article>
          <span>进行中</span>
          <strong>08</strong>
        </article>
        <article>
          <span>本周发布</span>
          <strong>24</strong>
        </article>
        {detailed && (
          <article>
            <span>完成率</span>
            <strong>92%</strong>
          </article>
        )}
      </div>
      <div className="layout-demo-chart" aria-hidden="true">
        <ChartNoAxesColumnIncreasing />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </LayoutContent>
  );
}

export function LayoutPageDemo() {
  return (
    <div className="layout-demo-frame">
      <Layout className="layout-demo-shell">
        <PreviewHeader />
        <PreviewContent />
        <LayoutFooter className="layout-demo-footer">
          <span>© 2026 Heliannuuthus</span>
          <span>状态正常</span>
        </LayoutFooter>
      </Layout>
    </div>
  );
}

export function LayoutLeftSidebarDemo() {
  return (
    <div className="layout-demo-frame">
      <Layout className="layout-demo-shell">
        <PreviewSidebar />
        <Layout>
          <PreviewHeader compact />
          <PreviewContent />
        </Layout>
      </Layout>
    </div>
  );
}

export function LayoutRightSidebarDemo() {
  return (
    <div className="layout-demo-frame">
      <Layout className="layout-demo-shell">
        <Layout>
          <PreviewHeader compact />
          <PreviewContent />
          <LayoutFooter className="layout-demo-footer">
            <span>最后更新于 14:32</span>
          </LayoutFooter>
        </Layout>
        <LayoutSidebar
          aria-label="详情面板"
          className="layout-demo-sidebar layout-demo-sidebar-detail"
          width={104}
        >
          <small>项目详情</small>
          <dl>
            <div>
              <dt>负责人</dt>
              <dd>Lin</dd>
            </div>
            <div>
              <dt>状态</dt>
              <dd>进行中</dd>
            </div>
            <div>
              <dt>版本</dt>
              <dd>v0.12</dd>
            </div>
          </dl>
        </LayoutSidebar>
      </Layout>
    </div>
  );
}

export function LayoutApplicationDemo() {
  return (
    <div className="layout-demo-frame layout-demo-frame-wide">
      <Layout className="layout-demo-shell">
        <PreviewHeader />
        <Layout>
          <PreviewSidebar width={124} />
          <PreviewContent detailed />
        </Layout>
        <LayoutFooter className="layout-demo-footer">
          <span>生产环境</span>
          <span>所有系统运行正常</span>
        </LayoutFooter>
      </Layout>
    </div>
  );
}
