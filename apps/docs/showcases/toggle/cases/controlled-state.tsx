import { Bold, Italic } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Toggle } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Toggle.Group
      defaultValue={['bold']}
      items={[
        { value: 'bold', label: <Bold />, 'aria-label': '粗体' },
        { value: 'italic', label: <Italic />, 'aria-label': '斜体' },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Toggle.Group
      defaultValue={['bold']}
      items={[
        { value: 'bold', label: <Bold />, 'aria-label': 'bold' },
        { value: 'italic', label: <Italic />, 'aria-label': 'italic' },
      ]}
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
    <div className="demo-preview demo-preview-toggle">
      <Example />
    </div>
  );
}
