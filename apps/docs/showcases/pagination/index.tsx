import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/complete-data-pagination';
import Case03 from './cases/simple-and-disabled-states';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'The page number, previous page and next page together update the current state and stop at the boundary.',
      zh: '页码、上一页和下一页共同更新当前状态，并在边界停止。',
    },
  },
  {
    component: Case02,
    span: 'full' as const,
    title: { en: 'Complete data pagination', zh: '完整数据分页' },
    description: {
      en: 'Derive the page count from the total and page size, then keep the visible range, page controls, page-size selection, and quick jump on one line.',
      zh: '通过总数与每页数量推导页数，并在一行内组合数据范围、页码、每页数量和快速跳转。',
    },
  },
  {
    component: Case03,
    span: 'full' as const,
    title: { en: 'Simple and disabled states', zh: '简洁与禁用状态' },
    description: {
      en: 'Simple mode uses a page input for long-range jumps; the disabled state preserves pagination context while preventing every action.',
      zh: '简洁模式使用页码输入完成长范围跳转；禁用状态保留当前分页上下文但阻止全部操作。',
    },
  },
];

export default function PaginationShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
