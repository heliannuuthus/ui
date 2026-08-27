import '@heliannuuthus/ui/styles.css';
import { Badge, Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Badge indicator indicatorLabel="有新的系统通知">
      <Button variant="outline">系统通知</Button>
    </Badge>
  );
})();

const EnExample = (() => {
  return () => (
    <Badge indicator indicatorLabel="New system notification">
      <Button variant="outline">System notifications</Button>
    </Badge>
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
