import '@heliannuuthus/ui/styles.css';
import { Avatar } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <>
      <Avatar
        alt="林默"
        fallback={{ children: '林' }}
        shape="circle"
        size="lg"
      />
      <Avatar
        alt="周一"
        fallback={{ children: '周' }}
        shape="square"
        size="lg"
      />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Avatar
        alt="Lin Mo"
        fallback={{ children: 'Lin' }}
        shape="circle"
        size="lg"
      />
      <Avatar
        alt="Monday"
        fallback={{ children: 'Week' }}
        shape="square"
        size="lg"
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
    <div className="demo-preview demo-preview-avatar">
      <Example />
    </div>
  );
}
