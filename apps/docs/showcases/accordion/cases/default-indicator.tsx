import '@heliannuuthus/ui/styles.css';
import { Accordion } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Accordion
      defaultValue={['deployment']}
      items={[
        {
          value: 'deployment',
          title: '部署策略',
          content: '先灰度 10%，观察后全量发布。',
        },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Accordion
      defaultValue={['deployment']}
      items={[
        {
          value: 'deployment',
          title: 'Deployment strategy',
          content: 'Roll out to 10% first, observe, then release to everyone.',
        },
      ]}
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
    <div className="demo-preview demo-preview-accordion">
      <Example />
    </div>
  );
}
