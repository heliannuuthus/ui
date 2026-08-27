import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/deep-path-collapse';
import Case03 from './cases/node-menus-and-visual-styles';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Breadcrumbs are placed before the page title, and the last level only indicates the current location and no longer provides a link.',
      zh: '面包屑放在页面标题之前，最后一级只表示当前位置，不再提供链接。',
    },
  },
  {
    component: Case02,
    title: { en: 'Deep path collapse', zh: '深层路径折叠' },
    description: {
      en: 'When the path is too long, only the middle level will be collapsed, and the starting point, direct parent, and current page will be retained as positioning anchor points.',
      zh: '路径过长时只收起中间层级，保留起点、直接父级和当前页面作为定位锚点。',
    },
  },
  {
    component: Case03,
    title: { en: 'Node menus and visual styles', zh: '节点菜单与视觉样式' },
    description: {
      en: 'Drop-down nodes are used to switch sibling positions; separators and styles only change the visual expression, not the path semantics.',
      zh: '下拉节点用于切换同级位置；分隔符和样式只改变视觉表达，不改变路径语义。',
    },
  },
];

export default function BreadcrumbShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
