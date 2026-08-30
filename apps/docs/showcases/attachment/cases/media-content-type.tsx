import { FileArchive } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Attachment } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Attachment
        media={<FileArchive />}
        mediaType="icon"
        title="web-console.tgz"
      />
      <Attachment
        media={<img alt="附件缩略图" src="/cover.jpg" />}
        mediaType="image"
        title="cover.jpg"
      />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Attachment
        media={<FileArchive />}
        mediaType="icon"
        title="web-console.tgz"
      />
      <Attachment
        media={<img alt="Attachment thumbnail" src="/cover.jpg" />}
        mediaType="image"
        title="cover.jpg"
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
    <div className="demo-preview demo-preview-attachment">
      <Example />
    </div>
  );
}
