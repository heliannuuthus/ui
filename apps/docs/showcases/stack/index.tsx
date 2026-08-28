import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/value-spacing';
import Case03 from './cases/compact-combination-across-controls';
import Case04 from './cases/cross-axis-aligned-with-main-axis';
import Case05 from './cases/item-separators';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use orientation and gap to create the simplest horizontal layout with consistent spacing.',
      zh: '使用 orientation 和 gap 完成最基础的横向间距布局。',
    },
  },
  {
    component: Case02,
    title: { en: 'Value spacing', zh: '数值间距' },
    description: {
      en: 'gap accepts a numerical value; drag the slider to adjust it between 0–12px, in increments or decrements of 3px.',
      zh: 'gap 接收数值；拖动滑块在 0–12px 之间调整，每次递增或递减 3px。',
    },
  },
  {
    component: Case03,
    title: { en: 'Compact combination across controls', zh: '跨控件紧凑组合' },
    description: {
      en: 'Compact not only combines buttons, but can also splice Input, Select, Slider and operation controls.',
      zh: 'Compact 不只组合按钮，也可以拼接 Input、Select、Slider 与操作控件。',
    },
  },
  {
    component: Case04,
    span: 'full' as const,
    title: { en: 'Cross axis aligned with main axis', zh: '交叉轴与主轴对齐' },
    description: {
      en: 'align controls cross-axis alignment, and justify controls main-axis distribution; the example code shows the corresponding properties and values in full.',
      zh: 'align 控制交叉轴对齐，justify 控制主轴分布；对应属性和值在示例代码中完整展示。',
    },
  },
  {
    component: Case05,
    title: { en: 'Item separators', zh: '元素分隔' },
    description: {
      en: 'separator inserts a consistent visual divider between adjacent items without repeating it on every child.',
      zh: 'separator 在相邻元素之间插入一致的视觉分隔，不需要为每个子元素重复编写。',
    },
  },
];

export default function StackShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
