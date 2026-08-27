import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/message-alignment';
import Case03 from './cases/reaction-position';
import Case04 from './cases/content-node-properties';
import Case05 from './cases/avatars-and-scrollable-conversations';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Each semantic variant is shown as an independent case instead of mixing multiple appearances in one preview.',
      zh: 'variant 的每种语义外观都作为独立 case 展示，避免在同一个预览区域混合比较。',
    },
  },
  {
    component: Case02,
    title: { en: 'Message alignment', zh: '消息对齐' },
    description: {
      en: 'align only places a bubble at the start or end of the message flow and does not imply sender identity.',
      zh: 'align 只控制单个气泡位于消息流的起始侧或末端，不隐含发送者身份。',
    },
  },
  {
    component: Case03,
    title: { en: 'Reaction position', zh: '回应位置' },
    description: {
      en: 'The side and align fields in reactionsProps place reactions on the top or bottom and at either horizontal edge.',
      zh: 'reactionsProps 的 side 与 align 分别控制回应位于气泡上下侧和左右边缘。',
    },
  },
  {
    component: Case04,
    title: { en: 'Content node properties', zh: '内容节点属性' },
    description: {
      en: 'contentProps passes standard HTML, ARIA, data attributes, events, and className to the inner content node.',
      zh: 'contentProps 向内部内容节点传递标准 HTML、ARIA、data 属性、事件和 className。',
    },
  },
  {
    component: Case05,
    title: {
      en: 'Avatars and scrollable conversations',
      zh: '头像与可滚动会话',
    },
    description: {
      en: 'Without introducing additional Message abstraction, directly combine Bubble, Avatar and ScrollArea to build a two-way conversation.',
      zh: '不引入额外 Message 抽象，直接组合 Bubble、Avatar 与 ScrollArea 构建双向会话。',
    },
  },
];

export default function BubbleShowcase() {
  return <ComponentShowcase cases={cases} />;
}
