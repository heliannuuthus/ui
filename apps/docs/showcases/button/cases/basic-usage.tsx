import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';

const ZhExample = (() => {
  const ButtonVariants = () => {
    return (
      <div className="flex flex-wrap gap-3">
        <Button>主要操作</Button>
        <Button variant="secondary">次要操作</Button>
        <Button variant="outline">描边按钮</Button>
        <Button variant="ghost">幽灵按钮</Button>
        <Button variant="link">文字按钮</Button>
        <Button variant="destructive">危险操作</Button>
      </div>
    );
  };

  return ButtonVariants;
})();

const EnExample = (() => {
  const ButtonVariants = () => {
    return (
      <div className="flex flex-wrap gap-3">
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary action</Button>
        <Button variant="outline">Outline button</Button>
        <Button variant="ghost">Ghost button</Button>
        <Button variant="link">Text button</Button>
        <Button variant="destructive">Destructive action</Button>
      </div>
    );
  };

  return ButtonVariants;
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
