import { Empty } from '@heliannuuthus/ui';
import { SearchX } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Empty title="No results" />
      <Empty icon={<SearchX />} title="No results" />
      <Empty icon={null} title="No results" />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Empty title="No results" />
      <Empty icon={<SearchX />} title="No results" />
      <Empty icon={null} title="No results" />
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
    <div className="demo-preview demo-preview-empty">
      <Example />
    </div>
  );
}
