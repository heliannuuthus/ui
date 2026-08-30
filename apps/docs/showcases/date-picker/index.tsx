import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/date-range';
import Case03 from './cases/date-time';
import Case04 from './cases/date-time-range';
import Case05 from './cases/time';
import Case06 from './cases/time-range';

const cases = [
  {
    component: Case01,
    title: { en: 'Date Picker', zh: '日期选择 Date Picker' },
    description: {
      en: 'Choose one calendar date for deadlines, birthdays, and other day-level values.',
      zh: '为截止日期、生日等精确到天的字段选择单个日期。',
    },
  },
  {
    component: Case02,
    title: { en: 'Date Range Picker', zh: '日期范围 Date Range Picker' },
    description: {
      en: 'Select a start and end date in one continuous calendar interaction.',
      zh: '在一次连续的日历交互中选择开始与结束日期。',
    },
  },
  {
    component: Case03,
    title: { en: 'Date Time Picker', zh: '日期时间 Date Time Picker' },
    description: {
      en: 'Combine a calendar date with an exact time for scheduled events.',
      zh: '将日历日期与具体时间组合，用于发布、预约等定时事件。',
    },
  },
  {
    component: Case04,
    title: {
      en: 'Date Time Range Picker',
      zh: '日期时间范围 Date Time Range Picker',
    },
    description: {
      en: 'Define a complete window whose start and end both include date and time.',
      zh: '定义开始和结束均包含日期与时间的完整窗口。',
    },
  },
  {
    component: Case05,
    title: { en: 'Time Picker', zh: '时间选择 Time Picker' },
    description: {
      en: 'Choose a recurring or date-independent time without introducing a time zone.',
      zh: '选择周期性或与日期无关的时间，不额外引入时区语义。',
    },
  },
  {
    component: Case06,
    title: { en: 'Time Range Picker', zh: '时间范围 Time Range Picker' },
    description: {
      en: 'Capture opening hours, shifts, and other start-to-end times.',
      zh: '录入营业时间、班次等只包含开始与结束时间的区间。',
    },
  },
];

export default function DatePickerShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
