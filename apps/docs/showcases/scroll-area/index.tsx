import type { ReactNode } from 'react';
import {
  ComponentShowcase,
  type ShowcaseCase,
} from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/horizontal-content';
import Case03 from './cases/two-axis-content';
import Case04 from './cases/animated-release-stream';

const cases = [
  {
    component: Case04,
    span: 'full',
    title: {
      en: 'Navigable release stream',
      zh: '可导航的发布动态',
    },
    description: {
      en: 'Items enter with lightweight motion as they reach the viewport. Use the arrow keys to browse and Enter to select the active event.',
      zh: '列表项进入视口时轻量出现；使用方向键浏览，并按 Enter 选择当前事件。',
    },
  },
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Constrain a vertical list without adding borders, backgrounds, or corner radii to the ScrollArea root.',
      zh: '限制纵向列表的高度，不向 ScrollArea 根节点附加边框、背景或圆角。',
    },
  },
  {
    component: Case02,
    title: { en: 'Horizontal content', zh: '横向内容' },
    description: {
      en: 'Use horizontal orientation for content that should keep its intrinsic width instead of wrapping or compressing.',
      zh: '横向内容需要保留自身宽度、不应换行或压缩时，使用 horizontal 方向。',
    },
  },
  {
    component: Case03,
    title: { en: 'Two-axis content', zh: '双轴内容' },
    description: {
      en: 'Use both directions for wide and tall structures such as data matrices, canvases, and dense inspectors.',
      zh: '数据矩阵、画布与密集检查器同时横向和纵向溢出时，使用 both。',
    },
  },
] satisfies ShowcaseCase[];

export default function ScrollAreaShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
