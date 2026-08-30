import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';
import { useState } from 'react';

type Copy = {
  collapse: string;
  collapsed: string;
  controlled: string;
  expand: string;
  expanded: string;
  navigation: string;
  uncontrolled: string;
};

const createExample = (copy: Copy) => {
  return function CollapseStateExample() {
    const [controlledCollapsed, setControlledCollapsed] = useState(true);
    const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState(true);

    return (
      <div className="layout-collapse-models">
        <section className="layout-collapse-model">
          <strong>{copy.uncontrolled}</strong>
          <Layout>
            <Layout.Sidebar
              aria-label={copy.uncontrolled}
              collapsible
              collapsedWidth={56}
              defaultCollapsed
              labels={{ collapse: copy.collapse, expand: copy.expand }}
              onChange={setUncontrolledCollapsed}
            >
              <span className="layout-collapse-model-navigation">
                {copy.navigation}
              </span>
            </Layout.Sidebar>
            <div className="layout-collapse-model-content">
              {uncontrolledCollapsed ? copy.collapsed : copy.expanded}
            </div>
          </Layout>
        </section>

        <section className="layout-collapse-model">
          <strong>{copy.controlled}</strong>
          <Layout>
            <Layout.Sidebar
              aria-label={copy.controlled}
              collapsed={controlledCollapsed}
              collapsible
              collapsedWidth={56}
              labels={{ collapse: copy.collapse, expand: copy.expand }}
              onChange={setControlledCollapsed}
            >
              <span className="layout-collapse-model-navigation">
                {copy.navigation}
              </span>
            </Layout.Sidebar>
            <div className="layout-collapse-model-content">
              {controlledCollapsed ? copy.collapsed : copy.expanded}
            </div>
          </Layout>
        </section>
      </div>
    );
  };
};

const ZhExample = createExample({
  collapse: '收起侧边栏',
  collapsed: '已收起',
  controlled: '受控：collapsed + onChange',
  expand: '展开侧边栏',
  expanded: '已展开',
  navigation: '导航',
  uncontrolled: '非受控：defaultCollapsed',
});

const EnExample = createExample({
  collapse: 'Collapse sidebar',
  collapsed: 'Collapsed',
  controlled: 'Controlled: collapsed + onChange',
  expand: 'Expand sidebar',
  expanded: 'Expanded',
  navigation: 'Navigation',
  uncontrolled: 'Uncontrolled: defaultCollapsed',
});

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
