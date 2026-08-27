import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/local-navigation-and-alignment';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Put the product entrance, resource entrance and current page into the same site navigation, and the width of the elastic layer will change smoothly with the content.',
      zh: '把产品入口、资源入口和当前页面放入同一条站点导航，弹层宽度随内容平滑变化。',
    },
  },
  {
    component: Case02,
    title: { en: 'Local navigation and alignment', zh: '局部导航与对齐' },
    description: {
      en: 'Use a smaller content panel on the right side of the toolbar, and use align to control the alignment of the popup relative to the navigation.',
      zh: '在工具栏右侧使用较小内容面板，并通过 align 控制弹层相对导航的对齐方式。',
    },
  },
];

export default function NavigationMenuShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
