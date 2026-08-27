import { Item } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => <Item href="/releases/1842" title="View release details" />;
})();

const EnExample = (() => {
  return () => <Item href="/releases/1842" title="View release details" />;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-item">
      <Example />
    </div>
  );
}
