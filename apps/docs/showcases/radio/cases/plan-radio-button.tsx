import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Radio } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const RadioPlanDemo = ({
    orientation = 'vertical',
  }: {
    orientation?: 'horizontal' | 'vertical';
  }) => {
    const [plan, setPlan] = useState('team');
    const plans = [
      ['free', copy('个人版'), copy('1 位成员'), copy('免费')],
      ['team', copy('团队版'), copy('最多 20 位成员'), copy('¥ 68 / 月')],
      ['enterprise', copy('企业版'), copy('高级权限与审计'), copy('联系销售')],
    ];

    return (
      <Radio.Group
        className="data-radio-cards"
        value={plan}
        onChange={setPlan}
        orientation={orientation}
        aria-label={copy('选择方案')}
        options={plans.map(([value, title, description, price]) => ({
          className: 'data-radio-card',
          value,
          label: (
            <>
              <span className="data-radio-copy">
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
              <b>{price}</b>
            </>
          ),
        }))}
      />
    );
  };

  return RadioPlanDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function RadioCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-radio">
      <Example />
    </div>
  );
}
