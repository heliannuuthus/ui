import * as React from 'react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '../lib/utils';

interface DatePickerProps {
  display?: 'popover' | 'inline';
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
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
  className,
  calendarClassName,
  calendarProps,
}: DatePickerProps) {
  const calendar = (
    <Calendar
      {...calendarProps}
      mode="single"
      selected={value}
      onSelect={onChange}
      disabled={disabled ? () => true : calendarProps?.disabled}
      className={cn(display === 'inline' && className, calendarClassName)}
    />
  );

  if (display === 'inline') return calendar;

  return (
    <Popover>
      <PopoverTrigger
        render={
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
            {value ? format(value, 'PPP', { locale: zhCN }) : placeholder}
          </Button>
        }
      />
      <PopoverContent className="w-auto p-0" align="start">
        {calendar}
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, type DatePickerProps };
