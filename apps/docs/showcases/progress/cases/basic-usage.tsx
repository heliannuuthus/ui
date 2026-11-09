import '@heliannuuthus/ui/styles.css';
import { Progress } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Progress effect="sparkle" value={68} label="生产环境" display />
  );
})();

const EnExample = (() => {
  return () => (
    <Progress
      effect="sparkle"
      value={68}
      label="Production environment"
      display
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
    <div className="demo-preview demo-preview-progress">
      <Example />
    </div>
  );
}
