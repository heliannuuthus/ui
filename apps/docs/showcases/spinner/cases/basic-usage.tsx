import '@heliannuuthus/ui/styles.css';
import { Spinner } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <div>
      <Spinner />
      正在加载组件……
    </div>
  );
})();

const EnExample = (() => {
  return () => (
    <div>
      <Spinner />
      Loading components...
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
    <div className="demo-preview demo-preview-spinner">
      <Example />
    </div>
  );
}
