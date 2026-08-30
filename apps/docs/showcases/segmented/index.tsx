import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/icons-and-layouts';
import Case03 from './cases/vertical-alignment';

const cases = [
  {
    component: Case01,
    title: { en: 'View selection', zh: '视图选择' },
    description: {
      en: 'A complete toolbar example: Segmented changes the view value while the application renders the selected presentation.',
      zh: '完整的工具栏场景：Segmented 只切换视图值，应用负责呈现对应布局。',
    },
    span: 'full' as const,
  },
  {
    component: Case02,
    title: { en: 'Reading density', zh: '阅读密度' },
    description: {
      en: 'Use block for equal-width choices when the selected value changes one display setting.',
      zh: '当选中值用于调整单项显示设置时，用 block 让各选项等宽。',
    },
  },
  {
    component: Case03,
    title: { en: 'Vertical alignment', zh: '垂直对齐' },
    description: {
      en: 'Vertical orientation works as a compact value control beside a narrow canvas, not as a floating navigation pill.',
      zh: '垂直方向适合放在窄画布旁控制一个值，而不是充当悬浮导航胶囊。',
    },
  },
];

export default function SegmentedShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
