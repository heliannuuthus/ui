import '@heliannuuthus/ui/styles.css';
import { Separator } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <div className="separator-demo-stack">
      <Separator className="h-0.5 bg-primary" />
      <Separator className="h-0 border-t border-dashed bg-transparent" />
      <Separator className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
})();

const EnExample = (() => {
  return () => (
    <div className="separator-demo-stack">
      <Separator className="h-0.5 bg-primary" />
      <Separator className="h-0 border-t border-dashed bg-transparent" />
      <Separator className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
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
