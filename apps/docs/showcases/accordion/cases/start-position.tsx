import '@heliannuuthus/ui/styles.css';
import { Accordion } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const accordionIndicatorItems = [
    {
      value: 'deployment',
      title: copy('部署策略'),
      content: copy('先灰度 10%，观察十分钟后全量发布。'),
    },
    {
      value: 'cache',
      title: copy('缓存刷新'),
      content: copy('发布完成后刷新边缘节点缓存。'),
    },
  ];

  const AccordionStartIndicatorDemo = () => (
    <Accordion
      data-example="start-indicator"
      defaultValue={['deployment']}
      indicator={<Accordion.Indicator position="start" />}
      items={accordionIndicatorItems}
    />
  );

  return AccordionStartIndicatorDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AccordionCase05({
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
