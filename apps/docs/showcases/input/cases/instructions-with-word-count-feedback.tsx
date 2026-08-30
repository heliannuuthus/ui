import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const TextAreaCounterDemo = () => {
    const [value, setValue] = useState(
      copy('补充这次发布的背景、影响范围和回滚方式。')
    );
    const maxLength = 120;

    return (
      <div className="data-form-shell data-textarea-demo">
        <div className="data-label-row">
          <label className="text-sm font-medium" htmlFor="textarea-release">
            {copy('发布说明')}
          </label>
          <span>
            {value.length} / {maxLength}
          </span>
        </div>
        <Input.TextArea
          id="textarea-release"
          value={value}
          maxLength={maxLength}
          onChange={(event) => setValue(event.target.value)}
          placeholder={copy('说明本次变更…')}
        />
        <div className="data-form-actions">
          <span>
            {copy('支持换行，最多')}
            {maxLength}
            {copy('个字符。')}
          </span>
          <Button size="sm" disabled={!value.trim()}>
            {copy('保存说明')}
          </Button>
        </div>
      </div>
    );
  };

  return TextAreaCounterDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function InputCase05({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-input">
      <Example />
    </div>
  );
}
