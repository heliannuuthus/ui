import '@heliannuuthus/ui/styles.css';
import { Switch } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <label>
      <Switch defaultChecked />
      启用通知
    </label>
  );
})();

const EnExample = (() => {
  return () => (
    <label>
      <Switch defaultChecked />
      Enable notification
    </label>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-switch">
      <Example />
    </div>
  );
}
