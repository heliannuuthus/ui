import '@heliannuuthus/ui/styles.css';
import { Checkbox } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Checkbox>接收产品更新</Checkbox>;
})();

const EnExample = (() => {
  return () => <Checkbox>Receive product updates</Checkbox>;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-checkbox">
      <Example />
    </div>
  );
}
