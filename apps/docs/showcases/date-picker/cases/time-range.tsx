import '@heliannuuthus/ui/styles.css';
import { TimeRangePicker, type PickerRangeValue } from '@heliannuuthus/ui';
import { useState } from 'react';

export default function TimeRangeCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const [range, setRange] = useState<PickerRangeValue<string> | undefined>([
    '09:00',
    '18:00',
  ]);

  return (
    <div className="picker-demo-stack">
      <span>{locale === 'en' ? 'Business hours' : '营业时间'}</span>
      <TimeRangePicker
        aria-label={locale === 'en' ? 'Business hours' : '营业时间'}
        labels={
          locale === 'en'
            ? ['Opening time', 'Closing time']
            : ['开始时间', '结束时间']
        }
        minuteStep={30}
        onChange={setRange}
        value={range}
      />
      <p>
        {range?.[0] && range[1]
          ? `${range[0]} – ${range[1]}`
          : locale === 'en'
            ? 'Select opening and closing times'
            : '请选择开始与结束时间'}
      </p>
    </div>
  );
}
