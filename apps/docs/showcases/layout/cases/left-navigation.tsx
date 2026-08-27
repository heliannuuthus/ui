import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Layout>
      <Layout.Sidebar width={240}>项目导航</Layout.Sidebar>
      <Layout.Content>工作区内容</Layout.Content>
    </Layout>
  );
})();

const EnExample = (() => {
  return () => (
    <Layout>
      <Layout.Sidebar width={240}>Project Navigation</Layout.Sidebar>
      <Layout.Content>Workspace Content</Layout.Content>
    </Layout>
  );
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
