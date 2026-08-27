import { Marker } from '@heliannuuthus/ui';
import { ArrowUpRight } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <Marker
      href="/releases/history"
      icon={<ArrowUpRight />}
      content="View release history"
      classNames={{ icon: 'text-primary', content: 'font-medium' }}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Marker
      href="/releases/history"
      icon={<ArrowUpRight />}
      content="View release history"
      classNames={{ icon: 'text-primary', content: 'font-medium' }}
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
