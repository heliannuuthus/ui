import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const ButtonSizes = () => {
    return (
      <div className="flex flex-wrap items-end justify-center gap-3">
        <Button size="xs">超小按钮</Button>
        <Button size="sm">小按钮</Button>
        <Button>默认按钮</Button>
        <Button size="lg">大按钮</Button>
      </div>
    );
  };

  return ButtonSizes;
})();

const EnExample = (() => {
  const ButtonSizes = () => {
    return (
      <div className="flex flex-wrap items-end justify-center gap-3">
        <Button size="xs">Extra small button</Button>
        <Button size="sm">Small button</Button>
        <Button>Default Button</Button>
        <Button size="lg">Big button</Button>
      </div>
    );
  };

  return ButtonSizes;
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
