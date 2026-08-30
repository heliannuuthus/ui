import '@heliannuuthus/ui/styles.css';
import { Marker } from '@heliannuuthus/ui';
import { Archive } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <Marker
      href="#archived-release-notes"
      icon={<Archive />}
      content="定位到归档说明"
      variant="separator"
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Marker
      href="#archived-release-notes"
      icon={<Archive />}
      content="Jump to archived notes"
      variant="separator"
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
    <div className="demo-preview demo-preview-marker">
      <Example />
    </div>
  );
}
