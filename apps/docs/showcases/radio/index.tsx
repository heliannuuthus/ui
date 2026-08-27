import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/plan-radio-button';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Conventional text options use options first, and Radio.Group generates labels and values ​​uniformly.',
      zh: '常规文本选项优先使用 options，由 Radio.Group 统一生成标签与值。',
    },
  },
  {
    component: Case02,
    title: { en: 'Plan radio button', zh: '方案单选卡' },
    description: {
      en: 'Expand mutually exclusive options into an entire row of clickable cards while retaining native radio-select semantics.',
      zh: '将互斥选项扩展为整行可点击的卡片，同时保留原生单选语义。',
    },
  },
];

export default function RadioShowcase() {
  return <ComponentShowcase cases={cases} />;
}
