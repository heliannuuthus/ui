import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/vertical-separation';
import Case03 from './cases/custom-divider';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Horizontal lines separate sections, list groups, or information levels that appear above and below each other.',
      zh: '水平线分隔上下排列的章节、列表分组或信息层级。',
    },
  },
  {
    component: Case02,
    title: { en: 'vertical separation', zh: '垂直分隔' },
    description: {
      en: 'Vertical lines separate operations, status, or metainformation that appear side by side on the same line.',
      zh: '垂直线分隔同一行内并列的操作、状态或元信息。',
    },
  },
  {
    component: Case03,
    title: { en: 'Custom divider', zh: '自定义分隔线' },
    description: {
      en: 'Customize thickness, color, dashed lines and gradient effects via className or style.',
      zh: '通过 className 或 style 自定义粗细、颜色、虚线和渐变效果。',
    },
  },
];

export default function SeparatorShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
