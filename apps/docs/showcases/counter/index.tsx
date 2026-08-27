import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/build-count';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Pass in value to display values ​​with bit-by-bit scrolling feedback.',
      zh: '传入 value 即可展示带逐位滚动反馈的数值。',
    },
  },
  {
    component: Case02,
    title: { en: 'build count', zh: '构建计数' },
    description: {
      en: 'When the value changes, only the changed digits are scrolled; fixing places can avoid layout jumps caused by changes in digits.',
      zh: '数值变化时只滚动发生变化的位；固定 places 可以避免位数变化导致布局跳动。',
    },
  },
];

export default function CounterShowcase() {
  return <ComponentShowcase cases={cases} />;
}
