import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/anchored-notifications';
import Case03 from './cases/status-dot';
import Case04 from './cases/style-extensions';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Without children, the notification renders independently. Zero remains visible and values above max use capped text.',
      zh: '没有 children 时独立显示通知；数字 0 会保留，超过 max 时显示封顶文案。',
    },
  },
  {
    component: Case02,
    title: { en: 'Anchored notifications', zh: '锚点通知' },
    description: {
      en: 'With children, the notification is positioned at the inline-end top corner; offset fine-tunes its logical position.',
      zh: '传入 children 后，通知会定位到对象的 inline-end 顶角；offset 可微调逻辑方向位置。',
    },
  },
  {
    component: Case03,
    title: { en: 'Status dot', zh: '状态红点' },
    description: {
      en: 'When indicator is true, only a dot is displayed. Because it has no visible content, indicatorLabel is required.',
      zh: 'indicator 为 true 时只显示红点；因为没有可见内容，必须提供 indicatorLabel。',
    },
  },
  {
    component: Case04,
    title: { en: 'Style extensions', zh: '样式扩展' },
    description: {
      en: 'Use className and style for the root, and the matching classNames and styles slot for the indicator.',
      zh: '根节点使用 className 与 style，通知标记使用对应的 classNames 和 styles 插槽。',
    },
  },
];

export default function BadgeShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
