import '@heliannuuthus/ui/styles.css';
import { Button, Tooltip } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Tooltip content="默认箭头" placement="topLeft">
      <Button>显示箭头</Button>
    </Tooltip>
  );
})();

const EnExample = (() => {
  return () => (
    <Tooltip content="Default arrow" placement="topLeft">
      <Button>Show arrow</Button>
    </Tooltip>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-tooltip">
      <Example />
    </div>
  );
}
