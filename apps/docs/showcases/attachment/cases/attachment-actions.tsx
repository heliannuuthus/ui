import { Attachment, Button } from '@heliannuuthus/ui';
import { Download } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Attachment
      actions={
        <Button aria-label="下载附件">
          <Download />
        </Button>
      }
      title="web-console.tgz"
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Attachment
      actions={
        <Button aria-label="Download attachment">
          <Download />
        </Button>
      }
      title="web-console.tgz"
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
    <div className="demo-preview demo-preview-attachment">
      <Example />
    </div>
  );
}
