import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Switch common cover ratios and observe how the same image maintains a stable layout as the width and height of the container change.',
      zh: '切换常用封面比例，观察同一张图片如何随容器宽高变化保持稳定布局。',
    },
  },
];

export default function AspectRatioShowcase() {
  return <ComponentShowcase cases={cases} />;
}
