import '@heliannuuthus/ui/styles.css';
import { Badge, Button } from '@heliannuuthus/ui';
import { Mail } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <>
      <Badge indicator={5} indicatorLabel="5 条未读消息">
        <Button aria-label="查看消息" size="icon" variant="outline">
          <Mail />
        </Button>
      </Badge>
      <Badge dir="rtl" indicator={12} offset={[3, -2]}>
        <Button variant="outline">收件箱</Button>
      </Badge>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Badge indicator={5} indicatorLabel="5 unread messages">
        <Button aria-label="View messages" size="icon" variant="outline">
          <Mail />
        </Button>
      </Badge>
      <Badge dir="rtl" indicator={12} offset={[3, -2]}>
        <Button variant="outline">Inbox</Button>
      </Badge>
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
    <div className="demo-preview demo-preview-badge">
      <Example />
    </div>
  );
}
