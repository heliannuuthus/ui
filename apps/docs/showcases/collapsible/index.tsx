import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic';
import Case02 from './cases/trigger';
import Case03 from './cases/indicator';
import Case04 from './cases/controlled';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Pass in header and content to create an expandable area; when trigger is omitted, the entire Header is responsible for switching states.',
      zh: '传入 header 和 content 即可创建一个可展开区域；省略 trigger 时，整个 Header 负责切换状态。',
    },
  },
  {
    component: Case02,
    title: { en: 'Different triggering methods', zh: '不同触发方式' },
    description: {
      en: 'By default, it is triggered by the entire Header; after passing in the trigger, the Header remains static and is only expanded by independent buttons.',
      zh: '默认由整个 Header 触发；传入 trigger 后，Header 保持静态，只由独立按钮控制展开。',
    },
  },
  {
    component: Case03,
    title: { en: 'Header and Icon', zh: 'Header 与图标' },
    description: {
      en: 'The header can compose any summary content; indicator controls the status icon in both trigger modes, and false hides it.',
      zh: 'header 可以组合任意摘要内容；indicator 在两种触发模式下统一控制状态图标，传 false 时隐藏。',
    },
  },
  {
    component: Case04,
    title: { en: 'Controlled and disabled states', zh: '受控与禁用状态' },
    description: {
      en: 'open and onOpenChange manage controlled expansion, while disabled prevents the trigger from changing state.',
      zh: 'open 与 onOpenChange 管理受控展开状态；disabled 阻止触发器改变状态。',
    },
  },
];

export default function CollapsibleShowcase() {
  return <ComponentShowcase cases={cases} />;
}
