import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/unread-boundary';
import Case03 from './cases/status-note';
import Case04 from './cases/linked-marker';
import Case05 from './cases/link-and-slot-styles';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Separate dates in messages, activity feeds, or update logs so the label reads as a content boundary rather than a timeline node.',
      zh: '在消息、动态或更新记录中分隔日期，让标签成为内容边界而不是时间线节点。',
    },
  },
  {
    component: Case02,
    title: { en: 'Unread boundary', zh: '未读边界' },
    description: {
      en: 'Place the unread count between read and unread content; the icon reinforces status while the bottom border keeps the layout compact.',
      zh: '把未读数量放在已读与未读内容之间；图标强化状态，底边框保持紧凑。',
    },
  },
  {
    component: Case03,
    title: { en: 'Status note', zh: '状态说明' },
    description: {
      en: 'Describe the shared state of subsequent content within a related settings group without treating Marker as an alert or notification container.',
      zh: '在一组相关设置之间说明后续内容的共同状态，不把 Marker 当作警告或通知容器。',
    },
  },
  {
    component: Case04,
    title: { en: 'Linked marker', zh: '链接标记' },
    description: {
      en: 'With href, a marker can point to a document anchor or another section of continuous content while preserving native link semantics.',
      zh: '传入 href 后，标记可以指向文档锚点或另一段连续内容，并保留原生链接语义。',
    },
  },
  {
    component: Case05,
    title: { en: 'Link and slot styles', zh: '链接与槽位样式' },
    description: {
      en: 'href gives the entire Marker native link semantics, while classNames extends the icon and content slots independently.',
      zh: 'href 让整个 Marker 使用原生链接语义，classNames 分别扩展 icon 与 content 槽位。',
    },
  },
];

export default function MarkerShowcase() {
  return <ComponentShowcase cases={cases} />;
}
