import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Radio } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const RadioDeliveryDemo = () => {
    const [delivery, setDelivery] = useState('email');

    return (
      <Radio.Group
        aria-label={copy('选择通知方式')}
        minColumnWidth={120}
        onChange={setDelivery}
        options={[
          { label: copy('邮件通知'), value: 'email' },
          { label: copy('站内通知'), value: 'inbox' },
          { label: copy('不通知'), value: 'none' },
        ]}
        value={delivery}
      />
    );
  };

  return RadioDeliveryDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function RadioCase01({
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
