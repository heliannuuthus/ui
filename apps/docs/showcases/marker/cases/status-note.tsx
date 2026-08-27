import '@heliannuuthus/ui/styles.css';
import { Marker } from '@heliannuuthus/ui';
import { CheckCircle2 } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <Marker icon={<CheckCircle2 />} content="以下设置已同步到生产环境" />
  );
})();

const EnExample = (() => {
  return () => (
    <Marker
      icon={<CheckCircle2 />}
      content="The following settings are synced to production"
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
