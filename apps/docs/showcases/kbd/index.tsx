import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/combination-shortcut-keys';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: "Use key names that are easily identifiable on the user's device.",
      zh: '使用用户设备上容易识别的按键名称。',
    },
  },
  {
    component: Case02,
    title: { en: 'Combination shortcut keys', zh: '组合快捷键' },
    description: {
      en: 'Unify the spacing between multiple keys through the keys attribute.',
      zh: '通过 keys 属性统一多个按键之间的间距。',
    },
  },
];

export default function KbdShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
