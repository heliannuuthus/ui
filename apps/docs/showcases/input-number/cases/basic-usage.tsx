import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Input } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const InputNumberCapacityDemo = () => {
    const [capacity, setCapacity] = useState<number | null>(32);

    return (
      <div className="data-form-stack">
        <div className="minimal-field">
          <label className="text-sm font-medium" htmlFor="storage-capacity">
            {copy('存储容量')}
          </label>
          <Input.Number
            decrementLabel={copy('减少数值')}
            id="storage-capacity"
            incrementLabel={copy('增加数值')}
            inputProps={{
              'aria-roledescription': copy('数字输入框'),
            }}
            max={256}
            min={1}
            onChange={setCapacity}
            step={1}
            suffix="GB"
            value={capacity}
          />
          <small className="data-field-hint">
            {copy('使用方向键或增减按钮逐级调整。')}
          </small>
        </div>
        <p className="data-result" aria-live="polite">
          {copy('当前容量：')}
          {capacity == null ? copy('未设置') : `${capacity} GB`}
        </p>
      </div>
    );
  };

  return InputNumberCapacityDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function InputNumberCase01({
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
