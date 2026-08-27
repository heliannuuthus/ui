import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/choices-and-status';
import Case03 from './cases/submenus-and-dimensions';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'An items array simultaneously describes icons, shortcut keys, disabled states, and dangerous actions.',
      zh: '一个 items 数组同时描述图标、快捷键、禁用状态和危险操作。',
    },
  },
  {
    component: Case02,
    title: { en: 'Choices and Status', zh: '选择与状态' },
    description: {
      en: 'checkbox expresses settings that can be toggled independently, and radio expresses a set of mutually exclusive options.',
      zh: 'checkbox 表达可独立切换的设置，radio 表达一组互斥选项。',
    },
  },
  {
    component: Case03,
    title: { en: 'Submenus and dimensions', zh: '子菜单与尺寸' },
    description: {
      en: 'Operations with children automatically form submenus; size uniformly controls the density and width of the menu.',
      zh: '带 children 的操作自动形成子菜单；size 统一控制菜单的密度和宽度。',
    },
  },
];

export default function DropdownMenuShowcase() {
  return <ComponentShowcase cases={cases} />;
}
