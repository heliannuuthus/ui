import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sidebar>Sidebar</Layout.Sidebar>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
})();

const EnExample = (() => {
  return () => (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sidebar>Sidebar</Layout.Sidebar>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
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
