import '@heliannuuthus/ui/styles.css';
import { DatePicker } from '@heliannuuthus/ui';
import { useState } from 'react';

const DatePickerExample = () => {
  const [date, setDate] = useState<Date>();
  return <DatePicker display="inline" onChange={setDate} value={date} />;
};

export default function ExampleCase({
  locale: _locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  return (
    <div className="demo-preview demo-preview-date-picker">
      <DatePickerExample />
    </div>
  );
}
