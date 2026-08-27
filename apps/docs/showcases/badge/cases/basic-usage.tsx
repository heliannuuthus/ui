import '@heliannuuthus/ui/styles.css';
import { Badge } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Badge indicator={5} />
      <Badge indicator={0} />
      <Badge indicator={123} max={99} />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Badge indicator={5} />
      <Badge indicator={0} />
      <Badge indicator={123} max={99} />
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
    <div className="demo-preview demo-preview-badge">
      <Example />
    </div>
  );
}
