import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/left-navigation';
import Case03 from './cases/details-on-the-right';
import Case04 from './cases/complete-application-framework';
import Case05 from './cases/responsive-collapse';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'The most basic vertical combination: Header and Footer maintain a fixed area, and Content occupies the remaining space in the middle.',
      zh: '最基础的纵向组合：Header 和 Footer 保持固定区域，Content 占据中间剩余空间。',
    },
  },
  {
    component: Case02,
    title: { en: 'Left navigation', zh: '左侧导航' },
    description: {
      en: 'Sidebar is arranged horizontally with a nested Layout; the nested area continues to be responsible for the vertical relationship between Header and Content.',
      zh: 'Sidebar 与一个嵌套 Layout 横向排列；嵌套区域继续负责 Header 和 Content 的纵向关系。',
    },
  },
  {
    component: Case03,
    title: { en: 'Details on the right', zh: '右侧详情' },
    description: {
      en: 'Placing Sidebar after content creates a right-side auxiliary area suitable for directories, properties, and contextual details.',
      zh: '将 Sidebar 放在内容之后即可形成右侧辅助区，适合目录、属性和上下文详情。',
    },
  },
  {
    component: Case04,
    title: { en: 'Complete application framework', zh: '完整应用框架' },
    description: {
      en: 'Header and Footer span the entire page, and Sidebar and Content are nested in the middle area, making it suitable for the backend and workbench.',
      zh: 'Header 和 Footer 跨越整页，中间区域再嵌套 Sidebar 与 Content，适合后台和工作台。',
    },
  },
  {
    component: Case05,
    title: { en: 'Responsive collapse', zh: '响应式折叠' },
    description: {
      en: 'The Sidebar collapses automatically below lg and can also be toggled manually with its built-in trigger; collapsedWidth controls the remaining width.',
      zh: 'Sidebar 在 lg 以下自动折叠，也可以通过内置触发器手动切换；collapsedWidth 决定折叠后保留的宽度。',
    },
  },
];

export default function LayoutShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
