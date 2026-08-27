import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/checkbox-and-radio-states';
import Case03 from './cases/nested-submenu';
import Case04 from './cases/open-state-and-disabled';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'items demonstrates group labels, icons, shortcuts, disabled entries, separators, and destructive actions; the selected result appears below the trigger area.',
      zh: 'items 同时体现分组标题、图标、快捷键、禁用项、分隔线和危险操作；选择后结果会显示在触发区域下方。',
    },
  },
  {
    component: Case02,
    title: { en: 'Checkbox and radio states', zh: '勾选与单选状态' },
    description: {
      en: 'A checkbox entry manages an independent boolean state, while a radio entry manages mutually exclusive options; the result remains visible in the trigger area after the menu closes.',
      zh: 'checkbox entry 管理独立布尔状态，radio entry 管理互斥选项；关闭菜单后结果仍保留在触发区域中。',
    },
  },
  {
    component: Case03,
    title: { en: 'Nested submenu', zh: '嵌套子菜单' },
    description: {
      en: 'A regular item with children becomes a submenu, suitable for placing multiple formats or targets of the same action in a second level.',
      zh: '普通 item 提供 children 时形成子菜单，适合将同一动作的多个格式或目标收进第二层。',
    },
  },
  {
    component: Case04,
    title: { en: 'Open state and disabled', zh: '开关状态与禁用' },
    description: {
      en: 'Compare the default uncontrolled mode, controlled mode managed through open and onOpenChange, and the state where disabled prevents triggering.',
      zh: '比较默认非受控、通过 open 与 onOpenChange 管理的受控模式，以及 disabled 阻止触发的状态。',
    },
  },
];

export default function ContextMenuShowcase() {
  return <ComponentShowcase cases={cases} />;
}
