import '@heliannuuthus/ui/styles.css';
import { Spinner } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Spinner aria-label="小号加载" size="sm" />
      <Spinner aria-label="正在加载" />
      <Spinner aria-label="大号加载" size="lg" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Spinner aria-label="small size loading" size="sm" />
      <Spinner aria-label="Loading" />
      <Spinner aria-label="Large size loading" size="lg" />
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
    <div className="demo-preview demo-preview-spinner">
      <Example />
    </div>
  );
}
