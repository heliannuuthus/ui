import '@heliannuuthus/ui/styles.css';
import { Bubble } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Bubble
      align="end"
      content={{ children: '已经补充完成，可以重新评审。' }}
      reactions={{ children: '✓ 2' }}
      variant="elevated"
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Bubble
      align="end"
      content={{
        children: 'The update is complete and ready for another review.',
      }}
      reactions={{ children: '✓ 2' }}
      variant="elevated"
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
    <div className="demo-preview demo-preview-bubble">
      <Example />
    </div>
  );
}
