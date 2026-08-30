import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/single-item-expansion';
import Case02 from './cases/multiple-expansion';
import Case03 from './cases/controlled-state';
import Case04 from './cases/default-indicator';
import Case05 from './cases/start-position';
import Case06 from './cases/state-function-indicator';
import Case07 from './cases/disable-one-item';
import Case08 from './cases/disable-the-entire-component';
import Case09 from './cases/closed-panel-retention';

const cases = [
  {
    component: Case01,
    title: { en: 'Single item expansion', zh: '单项展开' },
    description: {
      en: 'By default, only one item is open at a time; opening another item closes the previous one.',
      zh: '默认一次只展开一个条目，打开新条目时关闭前一个。',
    },
  },
  {
    component: Case02,
    title: { en: 'Multiple expansion', zh: '多项展开' },
    description: {
      en: 'Set multiple to allow several items to remain open at the same time.',
      zh: '设置 multiple 后允许多个条目同时保持展开。',
    },
  },
  {
    component: Case03,
    title: { en: 'controlled state', zh: '受控状态' },
    description: {
      en: 'value represents the currently expanded items, and onChange receives the complete value array after user interaction.',
      zh: 'value 表示当前展开条目，onChange 接收用户操作后的完整值数组。',
    },
  },
  {
    component: Case04,
    title: { en: 'Default indicator', zh: '默认指示器' },
    description: {
      en: 'Omit indicator to show the default arrow at the end of the title and rotate it with the open state.',
      zh: '省略 indicator 时在标题末端显示默认箭头，并随展开状态旋转。',
    },
  },
  {
    component: Case05,
    title: { en: 'Start position', zh: '起始位置' },
    description: {
      en: 'Use Accordion.Indicator position to place the default arrow at the start of the title.',
      zh: '通过 Accordion.Indicator 的 position 将默认箭头放到标题起始侧。',
    },
  },
  {
    component: Case06,
    title: { en: 'State function indicator', zh: '状态函数指示器' },
    description: {
      en: 'Use Accordion.Indicator to set the position in one place. Its children state function receives the current item’s open, disabled, and value state so the caller controls what is rendered.',
      zh: '使用 Accordion.Indicator 统一设置位置；children 状态函数接收当前条目的 open、disabled 和 value，由调用方决定展示内容。',
    },
  },
  {
    component: Case07,
    title: { en: 'Disable one item', zh: '禁用单个条目' },
    description: {
      en: 'Set disabled on an AccordionItem to prevent trigger interaction for that item only.',
      zh: '在 AccordionItem 上设置 disabled，仅阻止该条目的触发交互。',
    },
  },
  {
    component: Case08,
    title: { en: 'Disable the entire component', zh: '禁用整个组件' },
    description: {
      en: 'Set disabled on Accordion to prevent every item from opening or closing.',
      zh: '在 Accordion 上设置 disabled，统一阻止所有条目的展开与收起。',
    },
  },
  {
    component: Case09,
    title: { en: 'Closed panel retention', zh: '关闭面板保留策略' },
    description: {
      en: 'Closed panels unmount by default; keepMounted preserves internal state, while hiddenUntilFound retains searchable content for the browser find feature.',
      zh: '默认关闭时卸载面板；keepMounted 保留内部状态；hiddenUntilFound 保留内容并允许浏览器页内查找定位。',
    },
  },
];

export default function AccordionShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
