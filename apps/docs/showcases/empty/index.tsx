import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/title-and-description';
import Case03 from './cases/icon';
import Case04 from './cases/action-area';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Pass title explicitly to identify what is empty; the default icon is only a visual aid and does not replace the status text.',
      zh: '显式传入 title 说明当前为空的对象；默认图标仅提供辅助视觉，不替代状态文案。',
    },
  },
  {
    component: Case02,
    title: { en: 'Title and description', zh: '标题与说明' },
    description: {
      en: 'title must identify what is empty, while description adds a reason, filtering suggestion, or next step.',
      zh: 'title 必须明确说明当前为空的对象，description 再补充原因、筛选建议或下一步。',
    },
  },
  {
    component: Case03,
    title: { en: 'Icon', zh: '图标' },
    description: {
      en: 'icon uses a generic inbox by default; replace it with a contextual icon or pass null to hide it.',
      zh: 'icon 默认使用通用收件箱图标，也可以替换为场景图标或传 null 隐藏。',
    },
  },
  {
    component: Case04,
    title: { en: 'Action area', zh: '操作区域' },
    description: {
      en: 'Actions can host status summaries and action buttons without exposing internal layout components.',
      zh: 'actions 可以承载状态摘要和操作按钮，不需要暴露内部布局组件。',
    },
  },
];

export default function EmptyShowcase() {
  return <ComponentShowcase cases={cases} />;
}
