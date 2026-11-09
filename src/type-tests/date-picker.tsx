import {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DateTimeRangePicker,
  TimePicker,
  TimeRangePicker,
  type PickerRangeValue,
} from '../components/date-picker';

const dateRange: PickerRangeValue<Date> = [
  new Date(2026, 8, 8),
  new Date(2026, 8, 12),
];
const timeRange: PickerRangeValue<string> = ['09:00', '18:00'];

export const datePickerTypeTests = (
  <>
    <DatePicker defaultValue={new Date()} display="inline" />
    <DateRangePicker defaultValue={dateRange} />
    <DateTimePicker defaultValue={new Date()} minuteStep={15} />
    <DateTimeRangePicker defaultValue={dateRange} minuteStep={30} />
    <TimePicker defaultValue="09:30" minuteStep={15} />
    <DatePicker
      calendar={{
        months: 2,
        zone: 'UTC',
        outside: false,
        classes: { day: 'day' },
      }}
      triggerRef={(button) => {
        button?.focus();
      }}
      classes={{ trigger: 'trigger', calendar: 'calendar' }}
    />
    <DateRangePicker calendar={{ months: 2 }} triggerRef={{ current: null }} />
    <DateTimePicker
      calendar={{ outside: false }}
      triggerRef={{ current: null }}
    />
    <DateTimeRangePicker
      calendar={{ zone: 'UTC' }}
      triggerRef={{ current: null }}
    />
    <TimePicker
      ref={(input) => {
        input?.focus();
      }}
      minuteStep={15}
    />
    <TimeRangePicker
      inputRef={(input) => {
        input?.focus();
      }}
    />

    {/* @ts-expect-error 日期选择器只公开 triggerRef。 */}
    <DatePicker inputRef={{ current: null }} />
    {/* @ts-expect-error 时间选择器只公开 ref。 */}
    <TimePicker inputRef={{ current: null }} />
    {/* @ts-expect-error 时间范围只公开开始输入 inputRef。 */}
    <TimeRangePicker ref={{ current: null }} />
    {/* @ts-expect-error 日历配置使用 months。 */}
    <DatePicker calendar={{ numberOfMonths: 2 }} />
    <TimeRangePicker defaultValue={timeRange} labels={['Start', 'End']} />

    {/* @ts-expect-error DatePicker only accepts Date values. */}
    <DatePicker value="2026-09-08" />
    {/* @ts-expect-error Range pickers require a two-item range. */}
    <DateRangePicker value={new Date()} />
    {/* @ts-expect-error TimePicker does not accept Date values. */}
    <TimePicker value={new Date()} />
    {/* @ts-expect-error Time range values use HH:mm strings. */}
    <TimeRangePicker value={dateRange} />
  </>
);
