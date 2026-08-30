import '@heliannuuthus/ui/styles.css';
import { DateRangePicker, type PickerRangeValue } from '@heliannuuthus/ui';
import { useState } from 'react';

export default function DateRangeCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const [range, setRange] = useState<PickerRangeValue<Date> | undefined>([
    new Date(2026, 8, 8),
    new Date(2026, 8, 12),
  ]);
  const formatter = new Intl.DateTimeFormat(
    locale === 'en' ? 'en-US' : 'zh-CN',
    { dateStyle: 'medium' }
  );

  return (
    <div className="picker-demo-stack">
      <label htmlFor="date-range-demo">
        {locale === 'en' ? 'Travel dates' : '出行日期'}
      </label>
      <DateRangePicker
        id="date-range-demo"
        locale={locale}
        onChange={setRange}
        value={range}
      />
      <p>
        {range?.[0] && range[1]
          ? `${formatter.format(range[0])} – ${formatter.format(range[1])}`
          : locale === 'en'
            ? 'Select a start and end date'
            : '请选择开始与结束日期'}
      </p>
    </div>
  );
}
