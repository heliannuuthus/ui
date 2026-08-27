import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/localized-formatting';
import Case03 from './cases/sizes-and-states';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Manage storage capacity with a controlled value, minimum, maximum, and step while text input, keyboard interactions, and step controls share one numeric state.',
      zh: '通过受控值、最小值、最大值和步长管理存储容量，文本输入、键盘与增减按钮共享同一数值状态。',
    },
  },
  {
    component: Case02,
    title: { en: 'Localized formatting', zh: '本地化格式' },
    description: {
      en: 'Use Intl.NumberFormat to display currency while onChange always returns the unformatted number or null.',
      zh: '使用 Intl.NumberFormat 配置显示货币，同时让 onChange 始终返回未格式化的 number 或 null。',
    },
  },
  {
    component: Case03,
    title: { en: 'Sizes and states', zh: '尺寸与状态' },
    description: {
      en: 'Compare common sizes, hidden step controls, read-only, disabled, and invalid states.',
      zh: '比较常用尺寸、隐藏步进按钮、只读、禁用和校验失败状态。',
    },
  },
];

export default function InputNumberShowcase() {
  return <ComponentShowcase cases={cases} />;
}
