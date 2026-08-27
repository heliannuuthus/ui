import '@heliannuuthus/ui/styles.css';
import { Button, Tooltip } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Tooltip content="上方靠左提示" openDelay={100} placement="topLeft">
      <Button>上方靠左</Button>
    </Tooltip>
  );
})();

const EnExample = (() => {
  return () => (
    <Tooltip content="Top-left tooltip" openDelay={100} placement="topLeft">
      <Button>Top left</Button>
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
