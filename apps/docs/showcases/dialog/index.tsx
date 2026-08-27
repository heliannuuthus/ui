import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Complete a focused editing task without leaving the current page and retain clear cancel and save actions.',
      zh: '在不离开当前页面的情况下完成一项聚焦编辑任务，并保留明确的取消和保存动作。',
    },
  },
];

export default function DialogShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
