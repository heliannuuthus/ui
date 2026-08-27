import '@heliannuuthus/ui/styles.css';
import { Skeleton } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <div className="release-row">
      <Skeleton className="size-8 rounded-full" effect="shimmer" />
      <div>
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-2 h-2.5 w-40" />
      </div>
    </div>
  );
})();

const EnExample = (() => {
  return () => (
    <div className="release-row">
      <Skeleton className="size-8 rounded-full" effect="shimmer" />
      <div>
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-2 h-2.5 w-40" />
      </div>
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
