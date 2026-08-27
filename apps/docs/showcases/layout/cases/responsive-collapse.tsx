import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';
import { useState } from 'react';

const ZhExample = (() => {
  const ResponsiveLayout = () => {
    const [status, setStatus] = useState('');

    return (
      <Layout>
        <Layout.Sidebar
          breakpoint="lg"
          collapsible
          collapsedWidth={64}
          defaultCollapsed={false}
          side="start"
          labels={{
            collapse: '收起侧边栏',
            expand: '展开侧边栏',
          }}
          onBreakpointChange={(below) => setStatus(below ? '窄屏' : '宽屏')}
          onChange={(collapsed, reason) =>
            setStatus((collapsed ? '已收起' : '已展开') + '：' + reason)
          }
        >
          Navigation
        </Layout.Sidebar>
        <Layout.Content>{status}</Layout.Content>
      </Layout>
    );
  };

  return ResponsiveLayout;
})();

const EnExample = (() => {
  const ResponsiveLayout = () => {
    const [status, setStatus] = useState('');

    return (
      <Layout>
        <Layout.Sidebar
          breakpoint="lg"
          collapsible
          collapsedWidth={64}
          defaultCollapsed={false}
          side="start"
          labels={{
            collapse: 'Collapse sidebar',
            expand: 'Expand sidebar',
          }}
          onBreakpointChange={(below) => setStatus(below ? 'Narrow' : 'Wide')}
          onChange={(collapsed, reason) =>
            setStatus((collapsed ? 'Collapsed' : 'Expanded') + ': ' + reason)
          }
        >
          Navigation
        </Layout.Sidebar>
        <Layout.Content>{status}</Layout.Content>
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
