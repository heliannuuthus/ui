import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/adaptive-number-of-columns';
import Case03 from './cases/cross-column-content';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Provide stable keys and content through items, and Masonry will create and measure layout nodes for each item.',
      zh: '通过 items 提供稳定 key 与内容，Masonry 会为每一项创建并测量布局节点。',
    },
  },
  {
    component: Case02,
    title: { en: 'Adaptive number of columns', zh: '自适应列数' },
    description: {
      en: 'Drag the slider to set the maximum number of columns allowed in a row; the actual number of columns automatically drops back based on the container width and the minimum column width, with a maximum of six columns displayed.',
      zh: '拖动滑块设置一行允许的最大列数；实际列数根据容器宽度与最小列宽自动回落，最多显示六列。',
    },
  },
  {
    component: Case03,
    title: { en: 'Cross-column content', zh: '跨列内容' },
    description: {
      en: 'Set span="full" in a single item configuration; this item will wait for all previous columns to end and occupy the entire row, and subsequent content will continue to be arranged from the same position.',
      zh: '在单项配置中设置 span="full"；该项会等待前面所有列结束并独占整行，后续内容再从统一位置继续排列。',
    },
  },
];

export default function MasonryShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
