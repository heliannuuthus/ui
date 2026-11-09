import { FileArchive } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Attachment } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Attachment
        media={{ content: <FileArchive />, type: 'icon' }}
        title="web-console.tgz"
      />
      <Attachment
        media={{
          content: <img alt="附件缩略图" src="/cover.jpg" />,
          type: 'image',
        }}
        title="cover.jpg"
      />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Attachment
        media={{ content: <FileArchive />, type: 'icon' }}
        title="web-console.tgz"
      />
      <Attachment
        media={{
          content: <img alt="Attachment thumbnail" src="/cover.jpg" />,
          type: 'image',
        }}
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
