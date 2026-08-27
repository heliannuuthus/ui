import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Accordion } from '@heliannuuthus/ui';
import { Tag } from '@heliannuuthus/ui';
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

  const AccordionControlledDemo = () => {
    const [value, setValue] = useState<string[]>(['preflight']);

    return (
      <div className="display-panel">
        <div className="display-panel-heading">
          <div>
            <span className="display-eyebrow">value + onChange</span>
            <strong>{copy('受控展开状态')}</strong>
          </div>
          <Tag>{value.length > 0 ? value.join(', ') : copy('全部关闭')}</Tag>
        </div>
        <Accordion
          items={accordionDisabledItems}
          onChange={setValue}
          value={value}
        />
      </div>
    );
  };

  return AccordionControlledDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function AccordionCase03({
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
