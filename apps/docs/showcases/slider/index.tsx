import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/elastic-feedback';
import Case03 from './cases/range-selection';
import Case04 from './cases/vertical-direction';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use a single slider to select a value between clear minimum and maximum values.',
      zh: '使用单个滑块在明确的最小值和最大值之间选择数值。',
    },
  },
  {
    component: Case02,
    title: { en: 'Elastic feedback', zh: '弹性反馈' },
    description: {
      en: 'The transparent safe area reserves space for slight zooming and cross-border rebound, and icons and text at both ends always provide consistent feedback.',
      zh: '透明安全区为轻微缩放与越界回弹预留空间，两端图标和文字始终保持一致反馈。',
    },
  },
  {
    component: Case03,
    title: { en: 'Range selection', zh: '范围选择' },
    description: {
      en: 'Use the dual sliders to select a budget range and display the current value and range boundaries directly.',
      zh: '使用双滑块选择预算区间，并把当前值与范围边界直接展示出来。',
    },
  },
  {
    component: Case04,
    title: { en: 'vertical direction', zh: '垂直方向' },
    description: {
      en: 'After providing the container with an explicit height, build vertical parameter control via orientation="vertical" .',
      zh: '为容器提供明确高度后，通过 orientation="vertical" 构建纵向参数控制。',
    },
  },
];

export default function SliderShowcase() {
  return <ComponentShowcase cases={cases} />;
}
