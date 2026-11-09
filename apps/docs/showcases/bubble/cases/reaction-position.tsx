import { Bubble } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Bubble
      content={{ children: 'Ready for review' }}
      reactions={{ children: '👍 2', ...{ side: 'top', align: 'start' } }}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Bubble
      content={{ children: 'Ready for review' }}
      reactions={{ children: '👍 2', ...{ side: 'top', align: 'start' } }}
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
