import '@heliannuuthus/ui/styles.css';
import { Layout } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Layout>
      <Layout.Header>项目导航</Layout.Header>
      <Layout.Content>页面内容</Layout.Content>
      <Layout.Footer>页脚信息</Layout.Footer>
    </Layout>
  );
})();

const EnExample = (() => {
  return () => (
    <Layout>
      <Layout.Header>Project Navigation</Layout.Header>
      <Layout.Content>Page content</Layout.Content>
      <Layout.Footer>Footer information</Layout.Footer>
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
