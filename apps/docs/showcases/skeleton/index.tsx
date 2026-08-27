import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/publish-list-skeleton';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Assemble the skeleton with a size similar to the final content to keep the page structure stable until loading is complete.',
      zh: '用与最终内容相近的尺寸组合骨架，加载完成前维持页面结构稳定。',
    },
  },
  {
    component: Case02,
    title: { en: 'publish list skeleton', zh: '发布列表骨架' },
    description: {
      en: 'Replicate the level and density of the final content before loading to avoid obvious layout jumps when data appears.',
      zh: '加载前复刻最终内容的层级和密度，避免数据出现时产生明显布局跳动。',
    },
  },
];

export default function SkeletonShowcase() {
  return <ComponentShowcase cases={cases} />;
}
