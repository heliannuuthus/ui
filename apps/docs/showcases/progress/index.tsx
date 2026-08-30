import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/deployment-progress';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use label, value, and showValue to simultaneously describe the progress object, completion percentage, and remaining range.',
      zh: '用 label、value 和 showValue 同时说明进度对象、完成比例和剩余范围。',
    },
  },
  {
    component: Case02,
    title: { en: 'Deployment progress', zh: '部署进度' },
    description: {
      en: 'Putting the completion percentage alongside the current stage lets users know what the task is doing and how much is left.',
      zh: '把完成比例与当前阶段放在一起，让用户知道任务正在做什么以及还剩多少。',
    },
  },
];

export default function ProgressShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
