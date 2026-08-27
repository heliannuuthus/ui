import '@heliannuuthus/ui/styles.css';
import { Button, Stack } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Stack gap={8} orientation="horizontal">
      <Button>保存</Button>
      <Button variant="outline">取消</Button>
    </Stack>
  );
})();

const EnExample = (() => {
  return () => (
    <Stack gap={8} orientation="horizontal">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
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
