import '@heliannuuthus/ui/styles.css';
import { Avatar, Badge } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Avatar
      alt="陈序"
      badge={<Badge indicator={8} indicatorLabel="8 条未读消息" />}
      fallback="陈"
      size="lg"
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Avatar
      alt="Chen Xu"
      badge={<Badge indicator={8} indicatorLabel="8 unread messages" />}
      fallback="Chen"
      size="lg"
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
    <div className="demo-preview demo-preview-avatar">
      <Example />
    </div>
  );
}
