import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/task-completed-status';
import Case03 from './cases/permission-combination';
import Case04 from './cases/select-status';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'A single Checkbox represents an independently selectable Boolean item, and the entire row of labels and controls remains clickable.',
      zh: '单个 Checkbox 表达一个可独立选择的布尔项，标签与控件保持整行可点击。',
    },
  },
  {
    component: Case02,
    title: { en: 'Task completed status', zh: '任务完成态' },
    description: {
      en: 'Use the task variant to express what can be accomplished; the label will automatically weaken and add a strikethrough when selected, and will be restored after deselecting.',
      zh: '使用 task 变体表达可完成事项；选中后标签自动弱化并添加删除线，取消选中后恢复。',
    },
  },
  {
    component: Case03,
    title: { en: 'Permission combination', zh: '权限组合' },
    description: {
      en: 'Use Checkbox.Group to manage multiple permission values ​​and provide instant feedback on the selected quantity.',
      zh: '使用 Checkbox.Group 管理多个权限值，并即时反馈已选数量。',
    },
  },
  {
    component: Case04,
    title: { en: 'Select status', zh: '选择状态' },
    description: {
      en: 'When selected, the operation is confirmed with particles exploding outward. When unselected, only the check mark is withdrawn; both the uncertain and disabled states are displayed.',
      zh: '选中时以向外爆开的粒子确认操作，取消选中时仅收回勾选标记；同时展示不确定和禁用状态。',
    },
  },
];

export default function CheckboxShowcase() {
  return <ComponentShowcase cases={cases} />;
}
