import '@heliannuuthus/ui/styles.css';
import { Counter } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Counter value={7.4} fontSize={52} fontWeight={600} />;
})();

const EnExample = (() => {
  return () => <Counter value={7.4} fontSize={52} fontWeight={600} />;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-counter">
      <Example />
    </div>
  );
}
