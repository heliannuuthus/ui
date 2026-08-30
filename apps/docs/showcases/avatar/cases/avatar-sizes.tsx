import { Avatar } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Avatar size="sm" alt="林默" fallback="林" />
      <Avatar size="default" alt="林默" fallback="林" />
      <Avatar size="lg" alt="林默" fallback="林" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Avatar size="sm" alt="Lin Mo" fallback="L" />
      <Avatar size="default" alt="Lin Mo" fallback="L" />
      <Avatar size="lg" alt="Lin Mo" fallback="L" />
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
    <div className="demo-preview demo-preview-avatar">
      <Example />
    </div>
  );
}
