import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/semantic-types';
import Case03 from './cases/icon-placement';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Tag is presentation-only and always renders as a span.',
      zh: 'Tag 是纯展示元素，始终渲染为 span。',
    },
  },
  {
    component: Case02,
    title: { en: 'Semantic types', zh: '语义类型' },
    description: {
      en: 'type expresses the tag semantics; do not choose an unrelated type only for its color.',
      zh: 'type 表达标签的语义，不要只为了颜色选择与内容无关的类型。',
    },
  },
  {
    component: Case03,
    title: { en: 'Icon placement', zh: '图标位置' },
    description: {
      en: 'Supporting icons can appear before or after the text; keep decorative icons hidden from assistive technology.',
      zh: '辅助图标可以放在文字前后；装饰性图标应对辅助技术隐藏。',
    },
  },
];

export default function TagShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
