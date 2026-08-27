import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button } from '@heliannuuthus/ui';
import { DatePicker } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DatePickerReleaseDemo = () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2026, 6, 24));

    return (
      <div className="data-inline-setting">
        <div>
          <strong>{copy('定时发布')}</strong>
          <p>{copy('选择一个日期，未选择时保持为草稿。')}</p>
        </div>
        <DatePicker
          locale={locale}
          value={date}
          onChange={setDate}
          placeholder={copy('选择发布日期')}
        />
        <Button variant="ghost" size="sm" onClick={() => setDate(undefined)}>
          {copy('清除')}
        </Button>
      </div>
    );
  };

  return DatePickerReleaseDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function DatePickerCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-date-picker">
      <Example />
    </div>
  );
}
