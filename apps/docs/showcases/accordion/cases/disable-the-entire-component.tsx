import '@heliannuuthus/ui/styles.css';
import { Accordion } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const accordionDisabledItems = [
    {
      value: 'preflight',
      title: copy('预检结果'),
      content: copy('构建、类型检查和 42 项端到端用例均已通过。'),
    },
    {
      value: 'rollback',
      title: copy('回滚方案'),
      content: copy('异常时切回上一版本。'),
    },
  ];

  const AccordionDisabledRootDemo = () => (
    <Accordion
      defaultValue={['preflight']}
      disabled
      items={accordionDisabledItems}
    />
  );

  return AccordionDisabledRootDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AccordionCase08({
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
