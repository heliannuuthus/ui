import { Attachment } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  const states = ['idle', 'uploading', 'processing', 'error', 'done'] as const;

  return () =>
    states.map((state) => (
      <Attachment key={state} state={state} title="web-console.tgz" />
    ));
})();

const EnExample = (() => {
  const states = ['idle', 'uploading', 'processing', 'error', 'done'] as const;

  return () =>
    states.map((state) => (
      <Attachment key={state} state={state} title="web-console.tgz" />
    ));
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-attachment demo-preview-wrap">
      <Example />
    </div>
  );
}
