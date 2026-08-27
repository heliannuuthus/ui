import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/release-regularly';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'When you need to continuously view the month and scheduling context, use the inline display format and provide synchronous feedback on the selection results.',
      zh: '需要持续查看月份与排期上下文时，使用 inline 展示形式并同步反馈选择结果。',
    },
  },
  {
    component: Case02,
    title: { en: 'Release regularly', zh: '定时发布' },
    description: {
      en: 'Select or clear Publish Date in the compact settings row, fit form and filter.',
      zh: '在紧凑设置行中选择或清除发布日期，适合表单和筛选器。',
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
