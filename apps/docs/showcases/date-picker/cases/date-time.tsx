import '@heliannuuthus/ui/styles.css';
import { DateTimePicker } from '@heliannuuthus/ui';
import { useState } from 'react';

export default function DateTimeCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const [dateTime, setDateTime] = useState<Date | undefined>(
    new Date(2026, 8, 8, 14, 30)
  );
  const formatter = new Intl.DateTimeFormat(
    locale === 'en' ? 'en-US' : 'zh-CN',
    { dateStyle: 'medium', timeStyle: 'short' }
  );

  return (
    <div className="picker-demo-stack">
      <label htmlFor="date-time-demo">
        {locale === 'en' ? 'Publish at' : '发布时间'}
      </label>
      <DateTimePicker
        id="date-time-demo"
        locale={locale}
        minuteStep={15}
        onChange={setDateTime}
        value={dateTime}
      />
      <p>
        {dateTime
          ? formatter.format(dateTime)
          : locale === 'en'
            ? 'No publish time selected'
            : '尚未选择发布时间'}
      </p>
    </div>
  );
}
