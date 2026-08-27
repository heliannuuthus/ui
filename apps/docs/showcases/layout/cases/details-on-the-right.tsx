import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Layout>
      <Layout.Content>工作区内容</Layout.Content>
      <Layout.Sidebar width={280}>详情面板</Layout.Sidebar>
    </Layout>
  );
})();

const EnExample = (() => {
  return () => (
    <Layout>
      <Layout.Content>Workspace Content</Layout.Content>
      <Layout.Sidebar width={280}>Details panel</Layout.Sidebar>
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
