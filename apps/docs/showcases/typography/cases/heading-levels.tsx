import '@heliannuuthus/ui/styles.css';
import { Typography } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Typography.Title>H1</Typography.Title>
      <Typography.Title level={2}>H2</Typography.Title>
      <Typography.Title level={3}>H3</Typography.Title>
      <Typography.Title level={4}>H4</Typography.Title>
      <Typography.Title level={5}>H5</Typography.Title>
      <Typography.Title level={6}>H6</Typography.Title>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Typography.Title>H1</Typography.Title>
      <Typography.Title level={2}>H2</Typography.Title>
      <Typography.Title level={3}>H3</Typography.Title>
      <Typography.Title level={4}>H4</Typography.Title>
      <Typography.Title level={5}>H5</Typography.Title>
      <Typography.Title level={6}>H6</Typography.Title>
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
    <div className="demo-preview demo-preview-typography">
      <Example />
    </div>
  );
}
