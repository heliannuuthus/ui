import '@heliannuuthus/ui/styles.css';
import { Separator } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <div className="flex items-stretch gap-4">
      <div>状态</div>
      <Separator orientation="vertical" />
      <div>负责人</div>
    </div>
  );
})();

const EnExample = (() => {
  return () => (
    <div className="flex items-stretch gap-4">
      <div>Status</div>
      <Separator orientation="vertical" />
      <div>Responsible person</div>
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
