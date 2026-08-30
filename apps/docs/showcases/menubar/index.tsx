import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/optional-view-state';
import Case03 from './cases/secondary-menu-and-top-level-status';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'File and edit menus contain groups, icons, shortcut keys, disabled states, dangerous actions, and provide practical feedback.',
      zh: '文件和编辑菜单包含分组、图标、快捷键、禁用状态与危险操作，并提供实际反馈。',
    },
  },
  {
    component: Case02,
    title: { en: 'Optional view state', zh: '可选视图状态' },
    description: {
      en: 'Checkbox controls view items that can be switched independently, radio manages mutually exclusive topics, and synchronizes status to the content area.',
      zh: 'checkbox 控制可独立开关的视图项，radio 管理互斥主题，并把状态同步到内容区。',
    },
  },
  {
    component: Case03,
    title: {
      en: 'Secondary menu and top-level status',
      zh: '二级菜单与顶层状态',
    },
    description: {
      en: 'Use children in the component document workbench to organize recent components and export formats, and the top-level menu also supports the disabled state.',
      zh: '在组件文档工作台中用 children 组织最近组件与导出格式，顶层菜单同时支持禁用状态。',
    },
  },
];

export default function MenubarShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
