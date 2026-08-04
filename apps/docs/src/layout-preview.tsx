import { docsCopy } from './i18n/content';
import { Layout } from '@heliannuuthus/ui';
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
  { label: docsCopy('概览'), icon: LayoutDashboard, active: true },
  { label: docsCopy('项目'), icon: FolderKanban },
  { label: docsCopy('组件'), icon: Blocks },
  { label: docsCopy('报告'), icon: FileText },
];

function PreviewHeader({ compact = false }: { compact?: boolean }) {
  return (
    <Layout.Header className="layout-demo-header">
      <span className="layout-demo-brand">H</span>
      {!compact && <strong>Heliannuuthus</strong>}
      <span className="layout-demo-header-spacer" />
      <Search />
      <Bell />
      <CircleUserRound />
    </Layout.Header>
  );
}

function PreviewSidebar({
  label = docsCopy('工作区'),
  width = 112,
}: {
  label?: string;
  width?: number;
}) {
  return (
    <Layout.Sidebar
      aria-label={label}
      className="layout-demo-sidebar"
      width={width}
    >
      <small>{label}</small>
      <nav aria-label={docsCopy(`${label}导航`)}>
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
        <span>{docsCopy('设置')}</span>
      </a>
    </Layout.Sidebar>
  );
}

function PreviewContent({ detailed = false }: { detailed?: boolean }) {
  return (
    <Layout.Content className="layout-demo-content">
      <div className="layout-demo-heading">
        <span>{docsCopy('工作台')}</span>
        <strong>
          {detailed ? docsCopy('项目进度') : docsCopy('欢迎回来')}
        </strong>
      </div>
      <div className="layout-demo-metrics">
        <article>
          <span>{docsCopy('进行中')}</span>
          <strong>08</strong>
        </article>
        <article>
          <span>{docsCopy('本周发布')}</span>
          <strong>24</strong>
        </article>
        {detailed && (
          <article>
            <span>{docsCopy('完成率')}</span>
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
    </Layout.Content>
  );
}

export function LayoutPageDemo() {
  return (
    <div className="layout-demo-frame">
      <Layout className="layout-demo-shell">
        <PreviewHeader />
        <PreviewContent />
        <Layout.Footer className="layout-demo-footer">
          <span>© 2026 Heliannuuthus</span>
          <span>{docsCopy('状态正常')}</span>
        </Layout.Footer>
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
          <Layout.Footer className="layout-demo-footer">
            <span>{docsCopy('最后更新于 14:32')}</span>
          </Layout.Footer>
        </Layout>
        <Layout.Sidebar
          aria-label={docsCopy('详情面板')}
          className="layout-demo-sidebar layout-demo-sidebar-detail"
          width={104}
        >
          <small>{docsCopy('项目详情')}</small>
          <dl>
            <div>
              <dt>{docsCopy('负责人')}</dt>
              <dd>Lin</dd>
            </div>
            <div>
              <dt>{docsCopy('状态')}</dt>
              <dd>{docsCopy('进行中')}</dd>
            </div>
            <div>
              <dt>{docsCopy('版本')}</dt>
              <dd>v0.12</dd>
            </div>
          </dl>
        </Layout.Sidebar>
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
        <Layout.Footer className="layout-demo-footer">
          <span>{docsCopy('生产环境')}</span>
          <span>{docsCopy('所有系统运行正常')}</span>
        </Layout.Footer>
      </Layout>
    </div>
  );
}
