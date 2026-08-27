import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'The component creates the scrollable viewport and required scrollbars internally; applications only provide dimensions, scrollbar configuration, and content.',
      zh: '组件内部创建可滚动视口和所需滚动条；业务只需提供尺寸、滚动条配置与内容。',
    },
  },
];

export default function ScrollAreaShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
