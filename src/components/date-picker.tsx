import * as React from 'react';
import { format, type Locale } from 'date-fns';
import { enUS, zhCN } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover } from './popover';
import { cn } from '../lib/utils';

interface DatePickerProps {
  display?: 'popover' | 'inline';
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  locale?: 'en' | 'zh';
  className?: string;
  calendarClassName?: string;
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'className'
  >;
}

function DatePicker({
  display = 'popover',
  value,
  onChange,
  placeholder = '选择日期',
  disabled,
  locale: localeName = 'zh',
  className,
  calendarClassName,
  calendarProps,
}: DatePickerProps) {
  const locale = calendarProps?.locale ?? (localeName === 'en' ? enUS : zhCN);
  const formattingLocale =
    locale.formatLong && locale.localize ? (locale as Locale) : zhCN;
  const calendar = (
    <Calendar
      {...calendarProps}
      locale={locale}
      mode="single"
      selected={value}
      onSelect={onChange}
      disabled={disabled ? () => true : calendarProps?.disabled}
      className={cn(display === 'inline' && className, calendarClassName)}
    />
  );

  if (display === 'inline') return calendar;

  return (
    <Popover
      align="start"
      content={calendar}
      contentClassName="w-auto p-0"
      trigger={
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-60 justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon />
          {value
            ? format(value, 'PPP', { locale: formattingLocale })
            : placeholder}
        </Button>
      }
    />
  );
}

export { DatePicker, type DatePickerProps };
