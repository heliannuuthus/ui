import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Responsive media cover', zh: '响应式媒体封面' },
    description: {
      en: 'Reserve a predictable area for article covers, video previews, and product images before the media finishes loading.',
      zh: '为文章封面、视频预览和商品图预留可预测的区域，并在媒体加载前稳定页面布局。',
    },
  },
];

export default function AspectRatioShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
