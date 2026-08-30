import '@heliannuuthus/ui/styles.css';
import { Stack } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Stack orientation="horizontal" separator={<span aria-hidden>·</span>}>
      <span>概览</span>
      <span>活动</span>
      <span>设置</span>
    </Stack>
  );
})();

const EnExample = (() => {
  return () => (
    <Stack orientation="horizontal" separator={<span aria-hidden>·</span>}>
      <span>Overview</span>
      <span>Activity</span>
      <span>Settings</span>
    </Stack>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-stack">
      <Example />
    </div>
  );
}
