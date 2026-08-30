import '@heliannuuthus/ui/styles.css';
import { Input } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Input type="email" placeholder="name@example.com" />;
})();

const EnExample = (() => {
  return () => <Input type="email" placeholder="name@example.com" />;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-input">
      <Example />
    </div>
  );
}
