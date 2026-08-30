import { Bubble } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Bubble
      content="Build completed"
      contentProps={{ role: 'status', 'aria-live': 'polite' }}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Bubble
      content="Build completed"
      contentProps={{ role: 'status', 'aria-live': 'polite' }}
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
    <div className="demo-preview demo-preview-bubble">
      <Example />
    </div>
  );
}
