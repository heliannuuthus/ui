import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/controlled-state';
import Case03 from './cases/format-tool-set';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use defaultValue to provide the initial state, subsequent states are managed by Toggle itself.',
      zh: '使用 defaultValue 提供初始状态，后续状态由 Toggle 自身管理。',
    },
  },
  {
    component: Case02,
    title: { en: 'controlled state', zh: '受控状态' },
    description: {
      en: 'Read the current switch status through value, and determine the next rendering based on the business status in onChange.',
      zh: '通过 value 读取当前开关状态，并在 onChange 中由业务状态决定下一次渲染。',
    },
  },
  {
    component: Case03,
    title: { en: 'Format tool set', zh: '格式工具组' },
    description: {
      en: 'Toggle and Toggle.Group use the same size; use items to manage the status of tools that can be opened at the same time.',
      zh: 'Toggle 与 Toggle.Group 使用统一尺寸；通过 items 管理可同时开启的工具状态。',
    },
  },
];

export default function ToggleShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
