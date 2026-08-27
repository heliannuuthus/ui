import { Bubble } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Bubble align="start" content="Incoming message" />
      <Bubble align="end" content="Outgoing message" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Bubble align="start" content="Incoming message" />
      <Bubble align="end" content="Outgoing message" />
    </>
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
