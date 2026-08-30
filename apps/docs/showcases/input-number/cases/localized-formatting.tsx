import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Input } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const InputNumberCurrencyDemo = () => {
    const [price, setPrice] = useState<number | null>(1280);

    return (
      <div className="data-form-stack">
        <div className="minimal-field">
          <label className="text-sm font-medium" htmlFor="service-price">
            {copy('服务价格')}
          </label>
          <Input.Number
            decrementLabel={copy('减少数值')}
            format={{
              currency: 'CNY',
              currencyDisplay: 'symbol',
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
              style: 'currency',
            }}
            id="service-price"
            incrementLabel={copy('增加数值')}
            inputProps={{
              'aria-roledescription': copy('数字输入框'),
            }}
            locale={locale === 'en' ? 'en-US' : 'zh-CN'}
            min={0}
            onChange={setPrice}
            smallStep={0.01}
            step={10}
            value={price}
          />
        </div>
        <p className="data-result" aria-live="polite">
          {copy('原始数值：')}
          {price ?? copy('未设置')}
        </p>
      </div>
    );
  };

  return InputNumberCurrencyDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function InputNumberCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-input-number">
      <Example />
    </div>
  );
}
