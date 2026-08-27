import { Item } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Item size="default" title="Release notes" />
      <Item size="sm" title="Release notes" />
      <Item size="xs" title="Release notes" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Item size="default" title="Release notes" />
      <Item size="sm" title="Release notes" />
      <Item size="xs" title="Release notes" />
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
    <div className="demo-preview demo-preview-item">
      <Example />
    </div>
  );
}
