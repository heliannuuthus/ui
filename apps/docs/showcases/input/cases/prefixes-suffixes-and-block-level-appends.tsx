import { Button, Input } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Input
      defaultValue="docs"
      prefix="ui.dev/"
      suffix={<Button>复制</Button>}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Input
      defaultValue="docs"
      prefix="ui.dev/"
      suffix={<Button>Copy</Button>}
    />
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-input">
      <Example />
    </div>
  );
}
