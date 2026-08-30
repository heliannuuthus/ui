import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use the same notification to undertake the loading, success or failure stages of an asynchronous task to avoid repeated stacking of messages.',
      zh: '用同一条通知承接异步任务的加载、成功或失败阶段，避免重复堆叠消息。',
    },
  },
];

export default function SonnerShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
