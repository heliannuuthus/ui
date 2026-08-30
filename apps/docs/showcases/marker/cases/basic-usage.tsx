import '@heliannuuthus/ui/styles.css';
import { Marker } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <article>昨天的更新内容</article>
      <Marker content="今天" variant="separator" />
      <article>今天的更新内容</article>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <article>Yesterday’s updates</article>
      <Marker content="Today" variant="separator" />
      <article>Today’s updates</article>
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
    <div className="demo-preview demo-preview-marker">
      <Example />
    </div>
  );
}
