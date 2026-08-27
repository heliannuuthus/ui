import { FileText } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Item, Tag } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Item
      href="/release-notes/v0.12.0"
      variant="outline"
      header={<Tag>发布说明</Tag>}
      media={<FileText />}
      mediaType="icon"
      title="v0.12.0-release-notes.md"
      description="Markdown · 18 KB"
      footer={<span>许澄维护 · 8 分钟前更新</span>}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Item
      href="/release-notes/v0.12.0"
      variant="outline"
      header={<Tag>Release notes</Tag>}
      media={<FileText />}
      mediaType="icon"
      title="v0.12.0-release-notes.md"
      description="Markdown · 18 KB"
      footer={<span>Maintained by Xu Cheng · Updated 8 minutes ago</span>}
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
