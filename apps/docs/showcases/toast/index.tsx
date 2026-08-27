import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/local-notification';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Place the Provider at the root of the application, and descendant components call success, info, warning, or error through useToast; they are displayed at the top of the page by default.',
      zh: '在应用根部放置 Provider，后代组件通过 useToast 调用 success、info、warning 或 error；默认显示在页面顶部。',
    },
  },
  {
    component: Case02,
    title: { en: 'local notification', zh: '局部通知' },
    description: {
      en: 'The local Provider will create an independent notification channel and constrain the Toast to the nearest positioning container without covering the entire page.',
      zh: '局部 Provider 会创建独立通知通道，并将 Toast 约束在最近的定位容器中，不覆盖整个页面。',
    },
  },
];

export default function ToastShowcase() {
  return <ComponentShowcase cases={cases} />;
}
