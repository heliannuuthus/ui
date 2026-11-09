import * as React from 'react';
import { format, type Locale } from 'date-fns';
import { enUS, zhCN } from 'date-fns/locale';
import {
  CalendarClockIcon,
  CalendarIcon,
  ClockIcon,
  MoveRightIcon,
} from 'lucide-react';
import type { DateRange as DayPickerRange } from 'react-day-picker';

import { cn } from '../lib/utils';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from './button';
import { Calendar } from './calendar';
import { Input } from './input';
import {
  FormControlBoundary,
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';
import { Popover } from './popover';

type PickerLocale = 'en' | 'zh';
type PickerRangeValue<Value> = readonly [Value | undefined, Value | undefined];

type DatePickerClasses = {
  calendar?: string;
  trigger?: string;
};

type DatePickerStyles = {
  [Slot in keyof DatePickerClasses]?: React.CSSProperties;
};

type DateTimePickerClasses = DatePickerClasses & {
  time?: string;
};

type DateTimePickerStyles = {
  [Slot in keyof DateTimePickerClasses]?: React.CSSProperties;
};

type TimeRangePickerClasses = {
  end?: string;
  separator?: string;
  start?: string;
};

type TimeRangePickerStyles = {
  [Slot in keyof TimeRangePickerClasses]?: React.CSSProperties;
};

type CalendarProps = Omit<
  React.ComponentProps<typeof Calendar>,
  'className' | 'mode' | 'onSelect' | 'selected' | 'style'
>;

type PickerButtonProps = Pick<
  React.ComponentProps<'button'>,
  'aria-describedby' | 'aria-invalid' | 'aria-label' | 'id' | 'name' | 'onBlur'
>;

type DatePickerProps = PickerButtonProps & {
  calendar?: CalendarProps;
  className?: string;
  classes?: DatePickerClasses;
  defaultValue?: Date;
  disabled?: boolean;
  display?: 'inline' | 'popover';
  triggerRef?: React.Ref<HTMLButtonElement>;
  locale?: PickerLocale;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  styles?: DatePickerStyles;
  value?: Date;
};

type DateRangePickerProps = Omit<
  DatePickerProps,
  'defaultValue' | 'onChange' | 'value'
> & {
  defaultValue?: PickerRangeValue<Date>;
  onChange?: (range: PickerRangeValue<Date> | undefined) => void;
  value?: PickerRangeValue<Date>;
};

type DateTimePickerProps = Omit<DatePickerProps, 'classes' | 'styles'> & {
  classes?: DateTimePickerClasses;
  minuteStep?: number;
  styles?: DateTimePickerStyles;
};

type DateTimeRangePickerProps = Omit<
  DateRangePickerProps,
  'classes' | 'styles'
> & {
  classes?: DateTimePickerClasses;
  minuteStep?: number;
  styles?: DateTimePickerStyles;
};

type TimeInputProps = Pick<
  React.ComponentProps<'input'>,
  | 'aria-describedby'
  | 'aria-invalid'
  | 'aria-label'
  | 'autoComplete'
  | 'disabled'
  | 'id'
  | 'max'
  | 'min'
  | 'name'
  | 'onBlur'
  | 'required'
>;

type TimePickerProps = TimeInputProps & {
  className?: string;
  defaultValue?: string;
  ref?: React.Ref<HTMLInputElement>;
  minuteStep?: number;
  onChange?: (time: string | undefined) => void;
  style?: React.CSSProperties;
  value?: string;
};

type TimeRangePickerProps = Omit<
  TimePickerProps,
  'defaultValue' | 'onChange' | 'placeholder' | 'ref' | 'value'
> & {
  classes?: TimeRangePickerClasses;
  defaultValue?: PickerRangeValue<string>;
  labels?: readonly [string, string];
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (range: PickerRangeValue<string> | undefined) => void;
  styles?: TimeRangePickerStyles;
  value?: PickerRangeValue<string>;
};

const localeData = (locale: PickerLocale) => (locale === 'en' ? enUS : zhCN);

const formattingLocale = (locale: Partial<Locale>, fallback: Locale) =>
  locale.formatLong && locale.localize ? (locale as Locale) : fallback;

const calendarRange = (
  value: PickerRangeValue<Date> | undefined
): DayPickerRange | undefined =>
  value ? { from: value[0], to: value[1] } : undefined;

const pickerRange = (
  value: DayPickerRange | undefined
): PickerRangeValue<Date> | undefined =>
  value ? [value.from, value.to] : undefined;

const timeValue = (date: Date | undefined) =>
  date ? format(date, 'HH:mm') : '';

const withTime = (date: Date, source: Date | undefined) => {
  const next = new Date(date);

  next.setHours(source?.getHours() ?? 0, source?.getMinutes() ?? 0, 0, 0);

  return next;
};

const withTimeValue = (date: Date | undefined, value: string) => {
  const next = date ? new Date(date) : new Date();

  const [hours = 0, minutes = 0] = value.split(':').map(Number);

  next.setHours(hours, minutes, 0, 0);

  return next;
};

const dateLabel = (
  value: Date | undefined,
  pattern: string,
  locale: Locale,
  placeholder: string
) => (value ? format(value, pattern, { locale }) : placeholder);

const rangeLabel = (
  value: PickerRangeValue<Date> | undefined,
  pattern: string,
  locale: Locale,
  placeholder: string
) => {
  if (!value?.[0]) return placeholder;
  const start = format(value[0], pattern, { locale });

  const end = value[1] ? format(value[1], pattern, { locale }) : '…';
  return `${start} – ${end}`;
};

const PickerRoot = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="picker"
    className={cn('inline-flex max-w-full', className)}
    {...props}
  />
);

const DatePicker = ({
  display = 'popover',
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  id,
  triggerRef,
  name,
  onBlur,
  required,
  className,
  style,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  locale: localeName = 'zh',
  classes,
  calendar,
  styles,
}: DatePickerProps) => {
  const formControl = useFormControl<Date | undefined>();

  const controlRef = useMergedRefs(
    triggerRef,
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
  const fallbackLocale = localeData(localeName);

  const locale = calendar?.locale ?? fallbackLocale;
  const labelLocale = formattingLocale(locale, fallbackLocale);

  const resolvedPlaceholder =
    placeholder ?? (localeName === 'en' ? 'Select date' : '选择日期');

  const isDisabled = disabled || formControl?.disabled;
  const calendarContent = (
    <Calendar
      {...calendar}
      locale={locale}
      mode="single"
      selected={selectedValue}
      onSelect={handleChange}
      disabled={isDisabled ? () => true : calendar?.disabled}
      className={classes?.calendar}
      style={styles?.calendar}
    />
  );

  if (display === 'inline') {
    return (
      <PickerRoot className={className} style={style}>
        {calendarContent}
      </PickerRoot>
    );
  }

  return (
    <PickerRoot className={className} style={style}>
      <Popover
        align="start"
        content={calendarContent}
        classes={{ content: 'w-auto p-0' }}
        trigger={
          <Button
            aria-describedby={mergeIds(
              ariaDescribedBy,
              formControl?.descriptionId,
              formControl?.messageId
            )}
            aria-invalid={ariaInvalid ?? formControl?.invalid}
            aria-label={ariaLabel}
            aria-required={required || formControl?.required}
            variant="outline"
            disabled={isDisabled}
            id={id ?? formControl?.controlId}
            name={formControl?.name ?? name}
            onBlur={(event) => {
              onBlur?.(event);

              formControl?.onBlur();
            }}
            ref={controlRef}
            className={cn(
              'w-60 max-w-full justify-start text-left font-normal',
              !selectedValue && 'text-muted-foreground',
              classes?.trigger
            )}
            style={styles?.trigger}
          >
            <CalendarIcon />
            <span className="min-w-0 truncate">
              {dateLabel(
                selectedValue,
                'PPP',
                labelLocale,
                resolvedPlaceholder
              )}
            </span>
          </Button>
        }
      />
    </PickerRoot>
  );
};

const DateRangePicker = ({
  display = 'popover',
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  id,
  triggerRef,
  name,
  onBlur,
  required,
  className,
  style,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  locale: localeName = 'zh',
  classes,
  calendar,
  styles,
}: DateRangePickerProps) => {
  const isMobile = useIsMobile();

  const formControl = useFormControl<PickerRangeValue<Date> | undefined>();

  const controlRef = useMergedRefs(
    triggerRef,
    formControl?.ref as React.Ref<HTMLButtonElement> | undefined
  );

  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const selectedValue = formControl
    ? formControl.value
    : value === undefined
      ? uncontrolledValue
      : value;
  const handleChange = (nextValue: DayPickerRange | undefined) => {
    const nextRange = pickerRange(nextValue);

    if (!formControl && value === undefined) setUncontrolledValue(nextRange);

    onChange?.(nextRange);

    formControl?.onChange(nextRange);
  };
  const fallbackLocale = localeData(localeName);

  const locale = calendar?.locale ?? fallbackLocale;
  const labelLocale = formattingLocale(locale, fallbackLocale);

  const resolvedPlaceholder =
    placeholder ?? (localeName === 'en' ? 'Select date range' : '选择日期范围');

  const isDisabled = disabled || formControl?.disabled;
  const calendarContent = (
    <Calendar
      {...calendar}
      locale={locale}
      mode="range"
      months={calendar?.months ?? (isMobile ? 1 : 2)}
      classes={{
        ...calendar?.classes,
        months: cn('flex flex-row gap-4', calendar?.classes?.months),
      }}
      selected={calendarRange(selectedValue)}
      onSelect={handleChange}
      disabled={isDisabled ? () => true : calendar?.disabled}
      className={classes?.calendar}
      style={styles?.calendar}
    />
  );

  if (display === 'inline') {
    return (
      <PickerRoot className={className} style={style}>
        {calendarContent}
      </PickerRoot>
    );
  }

  return (
    <PickerRoot className={className} style={style}>
      <Popover
        align="start"
        content={calendarContent}
        classes={{
          content: 'w-max max-w-[calc(100vw-2rem)] overflow-auto p-0',
        }}
        trigger={
          <Button
            aria-describedby={mergeIds(
              ariaDescribedBy,
              formControl?.descriptionId,
              formControl?.messageId
            )}
            aria-invalid={ariaInvalid ?? formControl?.invalid}
            aria-label={ariaLabel}
            aria-required={required || formControl?.required}
            variant="outline"
            disabled={isDisabled}
            id={id ?? formControl?.controlId}
            name={formControl?.name ?? name}
            onBlur={(event) => {
              onBlur?.(event);

              formControl?.onBlur();
            }}
            ref={controlRef}
            className={cn(
              'w-80 max-w-full justify-start text-left font-normal',
              !selectedValue?.[0] && 'text-muted-foreground',
              classes?.trigger
            )}
            style={styles?.trigger}
          >
            <CalendarIcon />
            <span className="min-w-0 truncate">
              {rangeLabel(
                selectedValue,
                'PP',
                labelLocale,
                resolvedPlaceholder
              )}
            </span>
          </Button>
        }
      />
    </PickerRoot>
  );
};

const DateTimePicker = ({
  display = 'popover',
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  id,
  triggerRef,
  name,
  onBlur,
  required,
  className,
  style,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  locale: localeName = 'zh',
  classes,
  calendar,
  minuteStep = 1,
  styles,
}: DateTimePickerProps) => {
  const formControl = useFormControl<Date | undefined>();

  const controlRef = useMergedRefs(
    triggerRef,
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
  const fallbackLocale = localeData(localeName);

  const locale = calendar?.locale ?? fallbackLocale;
  const labelLocale = formattingLocale(locale, fallbackLocale);

  const resolvedPlaceholder =
    placeholder ??
    (localeName === 'en' ? 'Select date and time' : '选择日期和时间');

  const isDisabled = disabled || formControl?.disabled;
  const timeLabel = localeName === 'en' ? 'Time' : '时间';
  const content = (
    <div>
      <Calendar
        {...calendar}
        locale={locale}
        mode="single"
        selected={selectedValue}
        onSelect={(date) =>
          handleChange(date ? withTime(date, selectedValue) : undefined)
        }
        disabled={isDisabled ? () => true : calendar?.disabled}
        className={classes?.calendar}
        style={styles?.calendar}
      />
      <div className="border-t border-border p-3">
        <FormControlBoundary>
          <Input
            aria-label={timeLabel}
            className={cn('w-full', classes?.time)}
            disabled={isDisabled}
            onInput={(event) =>
              handleChange(
                withTimeValue(selectedValue, event.currentTarget.value)
              )
            }
            prefix={<ClockIcon />}
            step={minuteStep * 60}
            style={styles?.time}
            type="time"
            value={timeValue(selectedValue)}
          />
        </FormControlBoundary>
      </div>
    </div>
  );

  if (display === 'inline') {
    return (
      <PickerRoot className={className} style={style}>
        {content}
      </PickerRoot>
    );
  }

  return (
    <PickerRoot className={className} style={style}>
      <Popover
        align="start"
        content={content}
        classes={{ content: 'w-auto p-0' }}
        trigger={
          <Button
            aria-describedby={mergeIds(
              ariaDescribedBy,
              formControl?.descriptionId,
              formControl?.messageId
            )}
            aria-invalid={ariaInvalid ?? formControl?.invalid}
            aria-label={ariaLabel}
            aria-required={required || formControl?.required}
            variant="outline"
            disabled={isDisabled}
            id={id ?? formControl?.controlId}
            name={formControl?.name ?? name}
            onBlur={(event) => {
              onBlur?.(event);

              formControl?.onBlur();
            }}
            ref={controlRef}
            className={cn(
              'w-72 max-w-full justify-start text-left font-normal',
              !selectedValue && 'text-muted-foreground',
              classes?.trigger
            )}
            style={styles?.trigger}
          >
            <CalendarClockIcon />
            <span className="min-w-0 truncate">
              {dateLabel(
                selectedValue,
                'PPp',
                labelLocale,
                resolvedPlaceholder
              )}
            </span>
          </Button>
        }
      />
    </PickerRoot>
  );
};

const DateTimeRangePicker = ({
  display = 'popover',
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  id,
  triggerRef,
  name,
  onBlur,
  required,
  className,
  style,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  locale: localeName = 'zh',
  classes,
  calendar,
  minuteStep = 1,
  styles,
}: DateTimeRangePickerProps) => {
  const isMobile = useIsMobile();

  const formControl = useFormControl<PickerRangeValue<Date> | undefined>();

  const controlRef = useMergedRefs(
    triggerRef,
    formControl?.ref as React.Ref<HTMLButtonElement> | undefined
  );

  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const selectedValue = formControl
    ? formControl.value
    : value === undefined
      ? uncontrolledValue
      : value;
  const setValue = (nextValue: PickerRangeValue<Date> | undefined) => {
    if (!formControl && value === undefined) setUncontrolledValue(nextValue);

    onChange?.(nextValue);

    formControl?.onChange(nextValue);
  };
  const fallbackLocale = localeData(localeName);

  const locale = calendar?.locale ?? fallbackLocale;
  const labelLocale = formattingLocale(locale, fallbackLocale);

  const resolvedPlaceholder =
    placeholder ??
    (localeName === 'en' ? 'Select date and time range' : '选择日期和时间范围');

  const isDisabled = disabled || formControl?.disabled;
  const startTimeLabel = localeName === 'en' ? 'Start time' : '开始时间';
  const endTimeLabel = localeName === 'en' ? 'End time' : '结束时间';
  const content = (
    <div>
      <Calendar
        {...calendar}
        locale={locale}
        mode="range"
        months={calendar?.months ?? (isMobile ? 1 : 2)}
        classes={{
          ...calendar?.classes,
          months: cn('flex flex-row gap-4', calendar?.classes?.months),
        }}
        selected={calendarRange(selectedValue)}
        onSelect={(nextRange) => {
          const next = pickerRange(nextRange);

          setValue(
            next
              ? [
                  next[0] ? withTime(next[0], selectedValue?.[0]) : undefined,
                  next[1] ? withTime(next[1], selectedValue?.[1]) : undefined,
                ]
              : undefined
          );
        }}
        disabled={isDisabled ? () => true : calendar?.disabled}
        className={classes?.calendar}
        style={styles?.calendar}
      />
      <div
        className={cn(
          'grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-border p-3',
          classes?.time
        )}
        style={styles?.time}
      >
        <FormControlBoundary>
          <Input
            aria-label={startTimeLabel}
            disabled={isDisabled || !selectedValue?.[0]}
            onInput={(event) =>
              setValue([
                withTimeValue(selectedValue?.[0], event.currentTarget.value),
                selectedValue?.[1],
              ])
            }
            step={minuteStep * 60}
            type="time"
            value={timeValue(selectedValue?.[0])}
          />
          <MoveRightIcon
            aria-hidden="true"
            className="size-4 text-muted-foreground"
          />
          <Input
            aria-label={endTimeLabel}
            disabled={isDisabled || !selectedValue?.[1]}
            onInput={(event) =>
              setValue([
                selectedValue?.[0],
                withTimeValue(selectedValue?.[1], event.currentTarget.value),
              ])
            }
            step={minuteStep * 60}
            type="time"
            value={timeValue(selectedValue?.[1])}
          />
        </FormControlBoundary>
      </div>
    </div>
  );

  if (display === 'inline') {
    return (
      <PickerRoot className={className} style={style}>
        {content}
      </PickerRoot>
    );
  }

  return (
    <PickerRoot className={className} style={style}>
      <Popover
        align="start"
        content={content}
        classes={{
          content: 'w-max max-w-[calc(100vw-2rem)] overflow-auto p-0',
        }}
        trigger={
          <Button
            aria-describedby={mergeIds(
              ariaDescribedBy,
              formControl?.descriptionId,
              formControl?.messageId
            )}
            aria-invalid={ariaInvalid ?? formControl?.invalid}
            aria-label={ariaLabel}
            aria-required={required || formControl?.required}
            variant="outline"
            disabled={isDisabled}
            id={id ?? formControl?.controlId}
            name={formControl?.name ?? name}
            onBlur={(event) => {
              onBlur?.(event);

              formControl?.onBlur();
            }}
            ref={controlRef}
            className={cn(
              'w-96 max-w-full justify-start text-left font-normal',
              !selectedValue?.[0] && 'text-muted-foreground',
              classes?.trigger
            )}
            style={styles?.trigger}
          >
            <CalendarClockIcon />
            <span className="min-w-0 truncate">
              {rangeLabel(
                selectedValue,
                'Pp',
                labelLocale,
                resolvedPlaceholder
              )}
            </span>
          </Button>
        }
      />
    </PickerRoot>
  );
};

const TimePicker = ({
  value,
  defaultValue,
  onChange,
  ref,
  minuteStep = 1,
  disabled,
  required,
  id,
  name,
  onBlur,
  className,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  ...props
}: TimePickerProps) => {
  const formControl = useFormControl<string | undefined>();

  const controlRef = useMergedRefs(
    ref,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );

  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const selectedValue = formControl
    ? formControl.value
    : value === undefined
      ? uncontrolledValue
      : value;
  const handleChange = (nextValue: string | undefined) => {
    if (!formControl && value === undefined) setUncontrolledValue(nextValue);

    onChange?.(nextValue);

    formControl?.onChange(nextValue);
  };

  return (
    <FormControlBoundary>
      <Input
        {...props}
        aria-describedby={mergeIds(
          ariaDescribedBy,
          formControl?.descriptionId,
          formControl?.messageId
        )}
        aria-invalid={ariaInvalid ?? formControl?.invalid}
        className={cn('w-44', className)}
        disabled={disabled || formControl?.disabled}
        id={id ?? formControl?.controlId}
        name={formControl?.name ?? name}
        onBlur={(event) => {
          onBlur?.(event);

          formControl?.onBlur();
        }}
        onInput={(event) =>
          handleChange(event.currentTarget.value || undefined)
        }
        prefix={<ClockIcon />}
        ref={controlRef}
        required={required || formControl?.required}
        step={minuteStep * 60}
        type="time"
        value={selectedValue ?? ''}
      />
    </FormControlBoundary>
  );
};

const TimeRangePicker = ({
  value,
  defaultValue,
  onChange,
  labels,
  inputRef,
  minuteStep = 1,
  disabled,
  required,
  id,
  name,
  onBlur,
  className,
  style,
  classes,
  styles,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  ...props
}: TimeRangePickerProps) => {
  const formControl = useFormControl<PickerRangeValue<string> | undefined>();

  const startRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );

  const [uncontrolledValue, setUncontrolledValue] =
    React.useState(defaultValue);

  const selectedValue = formControl
    ? formControl.value
    : value === undefined
      ? uncontrolledValue
      : value;
  const setValue = (nextValue: PickerRangeValue<string>) => {
    const normalized = nextValue[0] || nextValue[1] ? nextValue : undefined;
    if (!formControl && value === undefined) setUncontrolledValue(normalized);

    onChange?.(normalized);

    formControl?.onChange(normalized);
  };
  const isDisabled = disabled || formControl?.disabled;
  const resolvedLabels = labels ?? ['Start time', 'End time'];
  const describedBy = mergeIds(
    ariaDescribedBy,
    formControl?.descriptionId,
    formControl?.messageId
  );

  return (
    <PickerRoot
      aria-label={ariaLabel}
      className={cn(
        'items-center gap-2 rounded-3xl border border-input bg-background px-3 transition-[color,box-shadow,border-color] has-focus-visible:border-primary has-focus-visible:ring-3 has-focus-visible:ring-primary/20',
        isDisabled && 'cursor-not-allowed bg-muted/50 opacity-60',
        className
      )}
      role="group"
      style={style}
    >
      <FormControlBoundary>
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid ?? formControl?.invalid}
          aria-label={resolvedLabels[0]}
          className={cn(
            'h-9 min-w-0 flex-1 bg-transparent text-sm outline-none disabled:cursor-not-allowed',
            classes?.start
          )}
          disabled={isDisabled}
          id={id ?? formControl?.controlId}
          name={name ? `${name}-start` : formControl?.name}
          onBlur={(event) => {
            onBlur?.(event);

            formControl?.onBlur();
          }}
          onInput={(event) =>
            setValue([
              event.currentTarget.value || undefined,
              selectedValue?.[1],
            ])
          }
          ref={startRef}
          required={required || formControl?.required}
          step={minuteStep * 60}
          style={styles?.start}
          type="time"
          value={selectedValue?.[0] ?? ''}
        />
        <MoveRightIcon
          aria-hidden="true"
          className={cn(
            'size-4 shrink-0 text-muted-foreground',
            classes?.separator
          )}
          style={styles?.separator}
        />
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid ?? formControl?.invalid}
          aria-label={resolvedLabels[1]}
          className={cn(
            'h-9 min-w-0 flex-1 bg-transparent text-sm outline-none disabled:cursor-not-allowed',
            classes?.end
          )}
          disabled={isDisabled}
          id={id ? `${id}-end` : undefined}
          name={name ? `${name}-end` : undefined}
          onBlur={(event) => {
            onBlur?.(event);

            formControl?.onBlur();
          }}
          onInput={(event) =>
            setValue([
              selectedValue?.[0],
              event.currentTarget.value || undefined,
            ])
          }
          required={required || formControl?.required}
          step={minuteStep * 60}
          style={styles?.end}
          type="time"
          value={selectedValue?.[1] ?? ''}
        />
      </FormControlBoundary>
    </PickerRoot>
  );
};

registerFormControl(DatePicker);

registerFormControl(DateRangePicker);

registerFormControl(DateTimePicker);

registerFormControl(DateTimeRangePicker);

registerFormControl(TimePicker);

registerFormControl(TimeRangePicker);

export {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DateTimeRangePicker,
  TimePicker,
  TimeRangePicker,
  type DatePickerClasses,
  type DatePickerProps,
  type DatePickerStyles,
  type DateRangePickerProps,
  type DateTimePickerClasses,
  type DateTimePickerProps,
  type DateTimePickerStyles,
  type DateTimeRangePickerProps,
  type PickerLocale,
  type PickerRangeValue,
  type TimePickerProps,
  type TimeRangePickerClasses,
  type TimeRangePickerProps,
  type TimeRangePickerStyles,
};
