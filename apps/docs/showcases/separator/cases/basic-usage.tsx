import '@heliannuuthus/ui/styles.css';
import { Separator } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <section>上方内容</section>
      <Separator />
      <section>下方内容</section>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <section>Content above</section>
      <Separator />
      <section>Content below</section>
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
    <div className="demo-preview demo-preview-separator">
      <Example />
    </div>
  );
}
