import * as React from 'react';
import { format, type Locale } from 'date-fns';
import { enUS, zhCN } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover } from './popover';
import { cn } from '../lib/utils';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

interface DatePickerClassNames {
  calendar?: string;
  trigger?: string;
}

interface DatePickerStyles {
  calendar?: React.CSSProperties;
  trigger?: React.CSSProperties;
}

interface DatePickerProps extends Pick<
  React.ComponentProps<'button'>,
  'aria-describedby' | 'aria-invalid' | 'id' | 'name' | 'onBlur'
> {
  display?: 'popover' | 'inline';
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLButtonElement>;
  required?: boolean;
  locale?: 'en' | 'zh';
  classNames?: DatePickerClassNames;
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'className' | 'style'
  >;
  styles?: DatePickerStyles;
}

const DatePicker = ({
  display = 'popover',
  value,
  defaultValue,
  onChange,
  placeholder = '选择日期',
  disabled,
  id,
  inputRef,
  name,
  onBlur,
  required,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  locale: localeName = 'zh',
  classNames,
  calendarProps,
  styles,
}: DatePickerProps) => {
  const formControl = useFormControl<Date | undefined>();
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLButtonElement> | undefined
  );
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);
  const selectedValue = formControl
    ? formControl.value
    : value === undefined
      ? uncontrolledValue
      : value;
  const handleChange = (nextValue: Date | undefined) => {
    if (!formControl && value === undefined) setUncontrolledValue(nextValue);
    onChange?.(nextValue);
    formControl?.onChange(nextValue);
  };
  const locale = calendarProps?.locale ?? (localeName === 'en' ? enUS : zhCN);
  const formattingLocale =
    locale.formatLong && locale.localize ? (locale as Locale) : zhCN;
  const calendar = (
    <Calendar
      {...calendarProps}
      locale={locale}
      mode="single"
      selected={selectedValue}
      onSelect={handleChange}
      disabled={
        disabled || formControl?.disabled ? () => true : calendarProps?.disabled
      }
      className={classNames?.calendar}
      style={styles?.calendar}
    />
  );

  if (display === 'inline') return calendar;

  return (
    <Popover
      align="start"
      content={calendar}
      classNames={{ content: 'w-auto p-0' }}
      trigger={
        <Button
          aria-describedby={mergeIds(
            ariaDescribedBy,
            formControl?.descriptionId,
            formControl?.messageId
          )}
          aria-invalid={ariaInvalid ?? formControl?.invalid}
          aria-required={required || formControl?.required}
          variant="outline"
          disabled={disabled || formControl?.disabled}
          id={id ?? formControl?.controlId}
          name={formControl?.name ?? name}
          onBlur={(event) => {
            onBlur?.(event);
            formControl?.onBlur();
          }}
          ref={controlRef}
          className={cn(
            'w-60 justify-start text-left font-normal',
            !selectedValue && 'text-muted-foreground',
            classNames?.trigger
          )}
          style={styles?.trigger}
        >
          <CalendarIcon />
          {selectedValue
            ? format(selectedValue, 'PPP', { locale: formattingLocale })
            : placeholder}
        </Button>
      }
    />
  );
};

registerFormControl(DatePicker);

export {
  DatePicker,
  type DatePickerClassNames,
  type DatePickerProps,
  type DatePickerStyles,
};
