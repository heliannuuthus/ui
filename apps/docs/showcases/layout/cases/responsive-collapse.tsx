import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';
import { useState } from 'react';

const ZhExample = (() => {
  const ResponsiveLayout = () => {
    const [breakpointStatus, setBreakpointStatus] = useState('等待首次检测');
    const [changeStatus, setChangeStatus] = useState('尚未请求折叠');

    return (
      <Layout>
        <Layout.Sidebar
          breakpoint="lg"
          collapsible
          collapsedWidth={64}
          labels={{
            collapse: '收起侧边栏',
            expand: '展开侧边栏',
          }}
          onBreakpointChange={(below) =>
            setBreakpointStatus(below ? '低于 lg' : '不低于 lg')
          }
          onChange={(collapsed, reason) =>
            setChangeStatus(
              `${collapsed ? '请求收起' : '请求展开'} · ${reason === 'breakpoint' ? '断点' : '触发器'}`
            )
          }
        >
          导航
        </Layout.Sidebar>
        <Layout.Content>
          <div aria-live="polite" className="layout-responsive-events">
            <span>当前视口</span>
            <strong>{breakpointStatus}</strong>
            <span>最近一次折叠事件</span>
            <strong>{changeStatus}</strong>
          </div>
        </Layout.Content>
      </Layout>
    );
  };

  return ResponsiveLayout;
})();

const EnExample = (() => {
  const ResponsiveLayout = () => {
    const [breakpointStatus, setBreakpointStatus] = useState(
      'Waiting for the first check'
    );
    const [changeStatus, setChangeStatus] = useState('No collapse request yet');

    return (
      <Layout>
        <Layout.Sidebar
          breakpoint="lg"
          collapsible
          collapsedWidth={64}
          labels={{
            collapse: 'Collapse sidebar',
            expand: 'Expand sidebar',
          }}
          onBreakpointChange={(below) =>
            setBreakpointStatus(below ? 'Below lg' : 'At or above lg')
          }
          onChange={(collapsed, reason) =>
            setChangeStatus(
              `${collapsed ? 'Collapse requested' : 'Expand requested'} · ${reason}`
            )
          }
        >
          Nav
        </Layout.Sidebar>
        <Layout.Content>
          <div aria-live="polite" className="layout-responsive-events">
            <span>Current viewport</span>
            <strong>{breakpointStatus}</strong>
            <span>Latest collapse event</span>
            <strong>{changeStatus}</strong>
          </div>
        </Layout.Content>
      </Layout>
    );
  };

  return ResponsiveLayout;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-layout">
      <Example />
    </div>
  );
}
