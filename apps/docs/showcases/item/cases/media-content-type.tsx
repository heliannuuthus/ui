import { Item } from '@heliannuuthus/ui';
import { FileText } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Item
        media={{ content: <FileText />, type: 'icon' }}
        title="Release notes"
      />
      <Item
        media={{ content: <img alt="Cover" src="/cover.jpg" />, type: 'image' }}
        title="Cover"
      />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Item
        media={{ content: <FileText />, type: 'icon' }}
        title="Release notes"
      />
      <Item
        media={{ content: <img alt="Cover" src="/cover.jpg" />, type: 'image' }}
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
