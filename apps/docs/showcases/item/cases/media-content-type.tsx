import { Item } from '@heliannuuthus/ui';
import { FileText } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Item media={<FileText />} mediaType="icon" title="Release notes" />
      <Item
        media={<img alt="Cover" src="/cover.jpg" />}
        mediaType="image"
        title="Cover"
      />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Item media={<FileText />} mediaType="icon" title="Release notes" />
      <Item
        media={<img alt="Cover" src="/cover.jpg" />}
        mediaType="image"
        title="Cover"
      />
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
    <div className="demo-preview demo-preview-item">
      <Example />
    </div>
  );
}
