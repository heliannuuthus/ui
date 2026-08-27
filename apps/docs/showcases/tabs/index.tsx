import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/four-styles-and-quick-centering';
import Case03 from './cases/narrow-vessel-pressure-testing';
import Case04 from './cases/content-switching-animation';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'The default style carries overview, dynamic and member data, and the content area remains stable after switching.',
      zh: '默认样式承载概览、动态与成员数据，切换后内容区域保持稳定。',
    },
  },
  {
    component: Case02,
    title: { en: 'Four styles and quick centering', zh: '四种样式与快捷居中' },
    description: {
      en: 'Capsule, line, stroke and soft styles cover different levels; centered can directly center the label list.',
      zh: '胶囊、线型、描边和柔和样式覆盖不同层级；centered 可直接让标签列表居中。',
    },
  },
  {
    component: Case03,
    title: { en: 'Narrow vessel pressure testing', zh: '窄容器压力测试' },
    description: {
      en: '320px and 480px are just representative test containers, not component breakpoints; when there is insufficient space, the native scroll bar is hidden and the navigation buttons on both sides are displayed, while horizontal sliding of touch and trackpad is retained.',
      zh: '320px 与 480px 只是代表性的测试容器，不是组件断点；空间不足时隐藏原生滚动条、显示两侧导航按钮，同时保留触摸与触控板横向滑动。',
    },
  },
  {
    component: Case04,
    title: { en: 'Content switching animation', zh: '内容切换动效' },
    description: {
      en: 'A stable content viewport keeps its borders and dimensions unchanged; fade-in or directional sliding only affects panel content, and the system automatically degrades when reducing dynamic effects.',
      zh: '稳定的内容视口保持边框和尺寸不动；淡入或方向滑动只作用于面板内容，系统减少动态效果时自动降级。',
    },
  },
];

export default function TabsShowcase() {
  return <ComponentShowcase cases={cases} />;
}
