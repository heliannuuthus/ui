import '@heliannuuthus/ui/styles.css';
import { Separator } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <div className="separator-demo-stack">
      <section>上方内容</section>
      <Separator />
      <section>下方内容</section>
    </div>
  );
})();

const EnExample = (() => {
  return () => (
    <div className="separator-demo-stack">
      <section>Content above</section>
      <Separator />
      <section>Content below</section>
    </div>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-separator">
      <div className="separator-demo-stage">
        <Example />
      </div>
    </div>
  );
}
