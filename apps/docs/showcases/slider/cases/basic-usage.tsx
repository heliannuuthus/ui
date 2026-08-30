import '@heliannuuthus/ui/styles.css';
import { Slider } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => <Slider aria-label="音量" defaultValue={64} min={0} max={100} />;
})();

const EnExample = (() => {
  return () => (
    <Slider aria-label="Volume" defaultValue={64} min={0} max={100} />
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-slider">
      <Example />
    </div>
  );
}
