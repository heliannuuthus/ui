import { Bubble } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Bubble
      content="Ready for review"
      reactions="👍 2"
      reactionsProps={{ side: 'top', align: 'start' }}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Bubble
      content="Ready for review"
      reactions="👍 2"
      reactionsProps={{ side: 'top', align: 'start' }}
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
