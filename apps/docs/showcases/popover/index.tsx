import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/hover-preview-manager';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Add a small amount of relevant information and light operations near the trigger without interrupting the current reading context.',
      zh: '在触发器附近补充少量关联信息与轻量操作，不打断当前阅读上下文。',
    },
  },
  {
    component: Case02,
    title: { en: 'Hover preview manager', zh: '悬停预览负责人' },
    description: {
      en: 'After setting the trigger to hover, related information will be displayed on mouse hover or keyboard focus, which is suitable for entity preview.',
      zh: '将 trigger 设为 hover 后，鼠标悬停或键盘聚焦都会展示关联信息，适合实体预览。',
    },
  },
];

export default function PopoverShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
