import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Button block>继续</Button>;
})();

const EnExample = (() => {
  return () => <Button block>Continue</Button>;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-button">
      <Example />
    </div>
  );
}
