import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/four-directions';
import Case03 from './cases/bind-parent-container';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use the page edge for longer content and continuous actions while preserving the current page context.',
      zh: '从页面边缘承载较长内容和连续操作，同时保留当前页面上下文。',
    },
  },
  {
    component: Case02,
    title: { en: 'four directions', zh: '四个方向' },
    description: {
      en: 'Unified entry from top, right, bottom, and left; adaptive mode retains gestures in narrow screens and converges to a stable edge panel in wide screens.',
      zh: '统一从上、右、下、左进入；adaptive 模式在窄屏保留手势，在宽屏收敛为稳定的边缘面板。',
    },
  },
  {
    component: Case03,
    span: 'full' as const,
    title: { en: 'Bind parent container', zh: '绑定父容器' },
    description: {
      en: 'After passing in container, the portal, viewport and panel are all limited to the specified parent container, and the four directions remain consistent.',
      zh: '传入 container 后，Portal、视口与面板都限制在指定父容器内，四个方向仍保持一致。',
    },
  },
];

export default function DrawerShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
