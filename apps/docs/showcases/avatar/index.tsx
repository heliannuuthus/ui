import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/avatar-sizes';
import Case03 from './cases/image-and-fallback-content';
import Case04 from './cases/impression-caps-and-overlap';
import Case05 from './cases/custom-overflow-count';
import Case06 from './cases/composed-with-tag-and-badge';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'shape switches between circle and rounded-square avatars, with each shape shown as an independent case.',
      zh: 'shape 在圆形和圆角方形之间切换，每种形状作为独立 case 展示。',
    },
  },
  {
    component: Case02,
    title: { en: 'Avatar sizes', zh: '头像尺寸' },
    description: {
      en: 'size provides small, medium, and large avatars while scaling text and status indicators with them.',
      zh: 'size 提供小、中、大三档尺寸，并同步调整文字与状态标记。',
    },
  },
  {
    component: Case03,
    title: { en: 'Image and fallback content', zh: '图片与回退内容' },
    description: {
      en: 'src provides the avatar image; fallback is shown when loading fails, while imageProps and fallbackProps configure loading callbacks and delay.',
      zh: 'src 提供头像图片；加载失败时显示 fallback，并通过 imageProps 与 fallbackProps 配置加载回调和延迟。',
    },
  },
  {
    component: Case04,
    title: { en: 'Impression caps and overlap', zh: '展示上限与重叠程度' },
    description: {
      en: 'max limits the number of visible avatars and automatically generates +N; overlap uses pixel values ​​to control how compact the grouping is.',
      zh: 'max 限制可见头像数量并自动生成 +N；overlap 使用像素值控制分组的紧凑程度。',
    },
  },
  {
    component: Case05,
    title: { en: 'Custom overflow count', zh: '自定义剩余数量' },
    description: {
      en: 'renderCount receives the hidden count and replaces the default +N while inheriting the group shape and size.',
      zh: 'renderCount 接收未展示数量并替换默认 +N，同时继承分组的 shape 与 size。',
    },
  },
  {
    component: Case06,
    title: { en: 'Composed with Tag and Badge', zh: '与 Tag 和 Badge 组合' },
    description: {
      en: 'The badge slot accepts Tag status labels or Badge notification indicators and keeps them anchored to the avatar corner.',
      zh: 'badge 插槽可放置 Tag 状态标签或 Badge 通知标记，并始终锚定在头像右下角。',
    },
  },
];

export default function AvatarShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
