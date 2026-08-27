import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/icon-size';
import Case03 from './cases/partial-loading-status';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Spinner represents a short load where the completion ratio cannot be determined and is used with visible status text.',
      zh: 'Spinner 表示无法确定完成比例的短时加载，并与可见状态文字一起使用。',
    },
  },
  {
    component: Case02,
    title: { en: 'icon size', zh: '图标尺寸' },
    description: {
      en: 'Large, medium, and small directly display the original loading icon, and the size does not imply button height or other container styles.',
      zh: '大、中、小直接展示原始加载图标，尺寸不会隐含按钮高度或其他容器样式。',
    },
  },
  {
    component: Case03,
    title: { en: 'Partial loading status', zh: '局部加载状态' },
    description: {
      en: 'Only place icons and status descriptions in the content area being updated, and keep other parts of the page readable and operable.',
      zh: '只在正在更新的内容区域放置图标与状态说明，页面其他部分保持可阅读、可操作。',
    },
  },
];

export default function SpinnerShowcase() {
  return <ComponentShowcase cases={cases} />;
}
