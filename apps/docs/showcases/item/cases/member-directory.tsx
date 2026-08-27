import '@heliannuuthus/ui/styles.css';
import { Avatar, Item, Tag } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Item
      variant="outline"
      media={<Avatar alt="林默" fallback="林" />}
      title="林默"
      description="平台工程 · 发布管理员"
      actions={<Tag type="success">在线</Tag>}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Item
      variant="outline"
      media={<Avatar alt="Lin Mo" fallback="L" />}
      title="Lin Mo"
      description="Platform engineering · Release administrator"
      actions={<Tag type="success">Online</Tag>}
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
    <div className="demo-preview demo-preview-item">
      <Example />
    </div>
  );
}
