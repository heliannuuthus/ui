import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/different-sizes';
import Case03 from './cases/combination-button';
import Case04 from './cases/fill-container';
import Case05 from './cases/form-and-click-events';
import Case06 from './cases/button-with-icon';
import Case07 from './cases/state';
import Case08 from './cases/link-mode';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use visual hierarchy to express operational priorities. An operating area usually only retains one main button.',
      zh: '使用视觉层级表达操作优先级。一个操作区域通常只保留一个主要按钮。',
    },
  },
  {
    component: Case02,
    title: { en: 'different sizes', zh: '不同尺寸' },
    description: {
      en: 'Size follows container density; it does not express the importance of an action.',
      zh: '尺寸跟随容器密度，不用于表达操作的重要程度。',
    },
  },
  {
    component: Case03,
    title: { en: 'Combination button', zh: '组合按钮' },
    description: {
      en: 'Group closely related operations into the same visual group and keep the operation semantics single.',
      zh: '将紧密相关的操作收进同一个视觉组，并保持操作语义单一。',
    },
  },
  {
    component: Case04,
    title: { en: 'Fill container', zh: '填满容器' },
    description: {
      en: 'Use block to make one button fill the available width of its parent.',
      zh: '使用 block 让单个按钮占满父容器的可用宽度。',
    },
  },
  {
    component: Case05,
    title: { en: 'Form and click events', zh: '表单与点击事件' },
    description: {
      en: 'Native type preserves form semantics; use onClick for immediate actions that do not depend on form submission.',
      zh: '原生 type 保留表单语义；onClick 适合处理不依赖表单提交的即时操作。',
    },
  },
  {
    component: Case06,
    title: { en: 'button with icon', zh: '带图标的按钮' },
    description: {
      en: 'Icons are used to help identify actions. Only icon mode requires an aria-label to indicate its purpose.',
      zh: '图标用于帮助识别动作。仅图标模式需要通过 aria-label 说明用途。',
    },
  },
  {
    component: Case07,
    title: { en: 'state', zh: '状态' },
    description: {
      en: 'Disabled means temporarily unavailable; loading keeps the original width and communicates progress.',
      zh: '禁用表示暂不可用；加载状态保留原有宽度并说明进度。',
    },
  },
  {
    component: Case08,
    title: { en: 'Link mode', zh: '链接模式' },
    description: {
      en: 'href switches the root to a native a element; target, rel, and download are native link attributes, while variant and size only control visual styling.',
      zh: 'href 会把根节点切换为原生 a 元素；target、rel 与 download 都是原生链接属性，variant 和 size 只负责视觉样式。',
    },
  },
];

export default function ButtonShowcase() {
  return <ComponentShowcase cases={cases} />;
}
