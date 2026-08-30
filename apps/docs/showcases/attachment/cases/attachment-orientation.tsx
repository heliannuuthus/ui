import { Attachment } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Attachment orientation="horizontal" title="web-console.tgz" />
      <Attachment orientation="vertical" title="web-console.tgz" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Attachment orientation="horizontal" title="web-console.tgz" />
      <Attachment orientation="vertical" title="web-console.tgz" />
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
    <div className="demo-preview demo-preview-attachment">
      <Example />
    </div>
  );
}
