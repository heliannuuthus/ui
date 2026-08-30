import '@heliannuuthus/ui/styles.css';
import { DatePicker } from '@heliannuuthus/ui';
import { useState } from 'react';

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 8, 8));
  const formatter = new Intl.DateTimeFormat(
    locale === 'en' ? 'en-US' : 'zh-CN',
    { dateStyle: 'long' }
  );

  return (
    <div className="picker-demo-stack">
      <label htmlFor="date-picker-demo">
        {locale === 'en' ? 'Delivery date' : '交付日期'}
      </label>
      <DatePicker
        id="date-picker-demo"
        locale={locale}
        onChange={setDate}
        value={date}
      />
      <p>
        {date
          ? formatter.format(date)
          : locale === 'en'
            ? 'No date selected'
            : '尚未选择日期'}
      </p>
    </div>
  );
}
