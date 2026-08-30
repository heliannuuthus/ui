import '@heliannuuthus/ui/styles.css';
import { DateTimeRangePicker, type PickerRangeValue } from '@heliannuuthus/ui';
import { useState } from 'react';

export default function DateTimeRangeCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const [range, setRange] = useState<PickerRangeValue<Date> | undefined>([
    new Date(2026, 8, 8, 9, 0),
    new Date(2026, 8, 9, 18, 0),
  ]);
  const formatter = new Intl.DateTimeFormat(
    locale === 'en' ? 'en-US' : 'zh-CN',
    { dateStyle: 'short', timeStyle: 'short' }
  );

  return (
    <div className="picker-demo-stack">
      <label htmlFor="date-time-range-demo">
        {locale === 'en' ? 'Maintenance window' : '维护窗口'}
      </label>
      <DateTimeRangePicker
        id="date-time-range-demo"
        locale={locale}
        minuteStep={30}
        onChange={setRange}
        value={range}
      />
      <p>
        {range?.[0] && range[1]
          ? `${formatter.format(range[0])} – ${formatter.format(range[1])}`
          : locale === 'en'
            ? 'Select the complete maintenance window'
            : '请选择完整的维护时间段'}
      </p>
    </div>
  );
}
