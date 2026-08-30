import { Bold } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Toggle } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Toggle defaultValue aria-label="切换粗体">
      <Bold />
      粗体
    </Toggle>
  );
})();

const EnExample = (() => {
  return () => (
    <Toggle defaultValue aria-label="toggle bold">
      <Bold />
      Bold
    </Toggle>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-toggle">
      <Example />
    </div>
  );
}
