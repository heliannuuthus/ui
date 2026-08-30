import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/twelve-placements';
import Case03 from './cases/arrow';
import Case04 from './cases/controlled-state-and-container';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Provides a brief additional description for the control.',
      zh: '为控件提供简短补充说明。',
    },
  },
  {
    component: Case02,
    title: { en: 'Twelve placements', zh: '十二个位置' },
    description: {
      en: 'placement defines the popup position relative to the trigger; edge placements align popup edges and keep the arrow within the corresponding edge safe area.',
      zh: 'placement 表示浮层相对触发器的位置；边缘位置保持浮层边缘对齐，并将箭头固定在对应边缘的安全区。',
    },
  },
  {
    component: Case03,
    title: { en: 'Arrow', zh: '箭头' },
    description: {
      en: 'The arrow matches the placement anchor point by default and can also be hidden.',
      zh: '箭头默认匹配 placement 的落点，也可将其隐藏。',
    },
  },
  {
    component: Case04,
    title: { en: 'Controlled state and container', zh: '受控状态与容器' },
    description: {
      en: 'Control visibility with open and onOpenChange, and configure delays and the portal container.',
      zh: '通过 open 与 onOpenChange 管理显隐，并可设置延迟和 Portal 容器。',
    },
  },
];

export default function TooltipShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
