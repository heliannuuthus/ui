import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Tag>默认标签</Tag>;
})();

const EnExample = (() => {
  return () => <Tag>Default tag</Tag>;
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
