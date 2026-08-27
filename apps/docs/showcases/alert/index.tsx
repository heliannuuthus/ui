import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Alert is part of the page content; clicking the button conditionally displays an information, success, warning, or error banner instead of opening an overlay.',
      zh: 'Alert 是页面内容的一部分；点击按钮可条件显示信息、成功、警告或错误横幅，而不是打开浮层。',
    },
  },
];

export default function AlertShowcase() {
  return <ComponentShowcase cases={cases} />;
}
