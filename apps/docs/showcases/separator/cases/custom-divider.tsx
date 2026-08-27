import '@heliannuuthus/ui/styles.css';
import { Separator } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Separator className="h-0.5 bg-primary" />
      <Separator className="h-0 border-t border-dashed bg-transparent" />
      <Separator className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Separator className="h-0.5 bg-primary" />
      <Separator className="h-0 border-t border-dashed bg-transparent" />
      <Separator className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-flow demo-preview-separator">
      <Example />
    </div>
  );
}
