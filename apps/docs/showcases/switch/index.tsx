import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/settings-list';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Switch is used for binary settings that take effect immediately, and the label should directly explain what will happen when turned on.',
      zh: 'Switch 用于立即生效的二元设置，标签应直接说明开启后会发生什么。',
    },
  },
  {
    component: Case02,
    title: { en: 'Settings list', zh: '设置列表' },
    description: {
      en: 'Switch uses a uniform stretch size; switches update settings immediately, and system items that cannot be turned off interpret constraints through the disabled state.',
      zh: 'Switch 使用统一的舒展尺寸；开关立即更新设置，不可关闭的系统项通过禁用状态解释约束。',
    },
  },
];

export default function SwitchShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
