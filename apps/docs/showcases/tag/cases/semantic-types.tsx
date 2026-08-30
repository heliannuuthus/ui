import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Tag>默认</Tag>
      <Tag type="primary">主要</Tag>
      <Tag type="info">信息</Tag>
      <Tag type="success">成功</Tag>
      <Tag type="warning">警告</Tag>
      <Tag type="error">错误</Tag>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Tag>Default</Tag>
      <Tag type="primary">Primary</Tag>
      <Tag type="info">Info</Tag>
      <Tag type="success">Success</Tag>
      <Tag type="warning">Warning</Tag>
      <Tag type="error">Error</Tag>
    </>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-tag">
      <Example />
    </div>
  );
}
