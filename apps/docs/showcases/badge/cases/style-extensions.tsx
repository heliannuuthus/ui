import '@heliannuuthus/ui/styles.css';
import { Badge } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Badge
      classNames={{ indicator: 'bg-primary' }}
      indicator={8}
      styles={{ indicator: { fontVariantNumeric: 'tabular-nums' } }}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Badge
      classNames={{ indicator: 'bg-primary' }}
      indicator={8}
      styles={{ indicator: { fontVariantNumeric: 'tabular-nums' } }}
    />
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
