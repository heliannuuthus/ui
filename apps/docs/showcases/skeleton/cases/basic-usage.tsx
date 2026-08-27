import '@heliannuuthus/ui/styles.css';
import { Skeleton } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <div>
      <Skeleton className="h-10 w-10 rounded-full" />
      <Skeleton className="h-4 w-44" />
    </div>
  );
})();

const EnExample = (() => {
  return () => (
    <div>
      <Skeleton className="h-10 w-10 rounded-full" />
      <Skeleton className="h-4 w-44" />
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
    <div className="demo-preview demo-preview-skeleton">
      <Example />
    </div>
  );
}
