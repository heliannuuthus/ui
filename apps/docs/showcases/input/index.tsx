import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/field-status';
import Case03 from './cases/prefixes-suffixes-and-block-level-appends';
import Case04 from './cases/verification-code-form';
import Case05 from './cases/instructions-with-word-count-feedback';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use labels to explain the purpose of the input and keep default, hover, and focus states clearly identifiable.',
      zh: '使用标签说明输入目的，并保持默认、悬停和聚焦状态清晰可辨。',
    },
  },
  {
    component: Case02,
    title: { en: 'Field status', zh: '字段状态' },
    description: {
      en: 'Compare default, failed validation, read-only and disabled inputs in the same group to avoid confusing semantics.',
      zh: '在同一组中比较默认、校验失败、只读和禁用输入，避免混淆语义。',
    },
  },
  {
    component: Case03,
    title: {
      en: 'Prefixes, suffixes and block-level appends',
      zh: '前后缀与块级附加内容',
    },
    description: {
      en: 'Combine fixed prefixes, copy actions, and text counts; additional content always serves the same input task.',
      zh: '组合固定前缀、复制动作和文本计数；附加内容始终服务于同一输入任务。',
    },
  },
  {
    component: Case04,
    title: { en: 'Verification code form', zh: '验证码形态' },
    description: {
      en: 'Use the Input variant to switch between connected and separated blocks, previewing one option at a time with the segmented control.',
      zh: '使用 Input 的 variant 切换连接方块与独立方块，并通过分段控件逐项预览。',
    },
  },
  {
    component: Case05,
    title: {
      en: 'Instructions with word count feedback',
      zh: '带字数反馈的说明',
    },
    description: {
      en: 'Provide clear labels, character limits, current count, and submission conditions for long text.',
      zh: '为长文本提供清楚的标签、字符上限、当前计数和提交条件。',
    },
  },
];

export default function InputShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
