import '@heliannuuthus/ui/styles.css';
import { Marker } from '@heliannuuthus/ui';
import { CircleDot } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <Marker variant="border" icon={<CircleDot />} content="2 条未读消息" />
  );
})();

const EnExample = (() => {
  return () => (
    <Marker variant="border" icon={<CircleDot />} content="2 unread messages" />
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
