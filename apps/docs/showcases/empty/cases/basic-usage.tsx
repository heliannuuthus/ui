import '@heliannuuthus/ui/styles.css';
import { Empty } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Empty title="暂无内容" />;
})();

const EnExample = (() => {
  return () => <Empty title="No content" />;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-empty">
      <Example />
    </div>
  );
}
