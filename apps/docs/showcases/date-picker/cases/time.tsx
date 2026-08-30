import '@heliannuuthus/ui/styles.css';
import { TimePicker } from '@heliannuuthus/ui';
import { useState } from 'react';

export default function TimeCase({ locale = 'zh' }: { locale?: 'en' | 'zh' }) {
  const [time, setTime] = useState<string | undefined>('09:30');

  return (
    <div className="picker-demo-stack">
      <label htmlFor="time-picker-demo">
        {locale === 'en' ? 'Daily reminder' : '每日提醒'}
      </label>
      <TimePicker
        aria-label={locale === 'en' ? 'Daily reminder' : '每日提醒'}
        id="time-picker-demo"
        minuteStep={15}
        onChange={setTime}
        value={time}
      />
      <p>
        {time
          ? `${locale === 'en' ? 'Every day at' : '每天'} ${time}`
          : locale === 'en'
            ? 'No reminder time'
            : '未设置提醒时间'}
      </p>
    </div>
  );
}
