import '@heliannuuthus/ui/styles.css';
import { Spinner } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <section aria-busy="true" aria-label="正在同步环境状态">
      <div>
        <span>预览环境</span>
        <Spinner aria-label="预览环境同步中" size="sm" />
      </div>
    </section>
  );
})();

const EnExample = (() => {
  return () => (
    <section aria-busy="true" aria-label="Synchronizing environment status">
      <div>
        <span>Preview environment</span>
        <Spinner aria-label="Preview environment synchronizing" size="sm" />
      </div>
    </section>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-spinner">
      <Example />
    </div>
  );
}
