import '@heliannuuthus/ui/styles.css';
import { Empty } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Empty
      title="没有匹配的发布记录"
      description="尝试缩短关键词或清除当前筛选条件。"
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Empty
      title="No matching release records"
      description="Try shortening the keyword or clearing the current filters."
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
    <div className="demo-preview demo-preview-empty">
      <Example />
    </div>
  );
}
