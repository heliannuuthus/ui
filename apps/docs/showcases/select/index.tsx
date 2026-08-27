import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/group-selection';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'When there are many candidates and the user knows the keywords, they can directly enter to filter, clear and re-select.',
      zh: '候选项较多且用户知道关键词时，直接输入过滤、清除并重新选择。',
    },
  },
  {
    component: Case02,
    title: { en: 'Group selection', zh: '分组选择' },
    description: {
      en: 'The same Select is used when candidates are fixed, with groupings, separators, and disabled items clarifying the list structure.',
      zh: '候选项固定时仍使用同一 Select，通过分组、分隔线和禁用项明确列表结构。',
    },
  },
];

export default function SelectShowcase() {
  return <ComponentShowcase cases={cases} />;
}
