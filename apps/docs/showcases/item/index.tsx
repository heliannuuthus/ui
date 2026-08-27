import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/member-directory';
import Case03 from './cases/settings-list';
import Case04 from './cases/resource-entry';
import Case05 from './cases/item-sizes';
import Case06 from './cases/media-content-type';
import Case07 from './cases/content-slots';
import Case08 from './cases/linked-item';
import Case09 from './cases/item-group';
import Case10 from './cases/custom-item-rendering';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use Item.Group to organize related activity and separators to maintain the reading rhythm of a continuous list.',
      zh: '用 Item.Group 组织同类动态，并通过分隔线维持连续列表的阅读节奏。',
    },
  },
  {
    component: Case02,
    title: { en: 'Member directory', zh: '成员目录' },
    description: {
      en: 'Keep avatars, role descriptions, and member status aligned on one row; the outlined appearance makes each member’s hit area explicit.',
      zh: '头像、身份说明和成员状态保持同一行对齐，描边外观明确每个成员的点击区域。',
    },
  },
  {
    component: Case03,
    title: { en: 'Settings list', zh: '设置列表' },
    description: {
      en: 'Place the switch in actions so the title names the setting and the description explains its scope; the row itself does not duplicate the click behavior.',
      zh: '把开关放入 actions，让标题解释设置、描述说明影响范围，整行本身不重复承担点击行为。',
    },
  },
  {
    component: Case04,
    title: { en: 'Resource entry', zh: '资源入口' },
    description: {
      en: 'Use href to make the entire resource item a native link; header and footer carry supporting metadata.',
      zh: '使用 href 把整个资源项变成原生链接；header 和 footer 承载辅助元数据。',
    },
  },
  {
    component: Case05,
    title: { en: 'Item sizes', zh: '列表项尺寸' },
    description: {
      en: 'size provides default, small, and extra-small content densities.',
      zh: 'size 分别提供默认、小和超小三档内容密度。',
    },
  },
  {
    component: Case06,
    title: { en: 'Media content type', zh: '媒体内容类型' },
    description: {
      en: 'mediaType explicitly distinguishes plain content, icons, and images so callers do not rely on node-shape inference.',
      zh: 'mediaType 明确区分普通内容、图标和图片，避免调用方依赖节点形态推断样式。',
    },
  },
  {
    component: Case07,
    title: { en: 'Content slots', zh: '内容槽位' },
    description: {
      en: 'header, content, actions, and footer each occupy an independent semantic region instead of being compressed into one combined property row.',
      zh: 'header、content、actions 与 footer 各自占据独立语义区域，不再把多个结构字段塞进同一行说明。',
    },
  },
  {
    component: Case08,
    title: { en: 'Linked item', zh: '链接列表项' },
    description: {
      en: 'When href is provided, Item uses a native anchor for whole-item navigation; otherwise it remains a regular div.',
      zh: '传入 href 时 Item 使用原生 a 元素承载整项导航，未传时保持普通 div。',
    },
  },
  {
    component: Case09,
    title: { en: 'Item group', zh: '列表项集合' },
    description: {
      en: 'Item.Group renders a collection from items, while separator independently selects no separator, the default divider, or custom content.',
      zh: 'Item.Group 通过 items 渲染集合，separator 独立控制无分隔、默认分隔线或自定义分隔内容。',
    },
  },
  {
    component: Case10,
    title: { en: 'Custom item rendering', zh: '自定义列表项渲染' },
    description: {
      en: 'renderItem receives the current ItemGroupEntry and index to replace whole-item rendering without changing the base Item contract.',
      zh: 'renderItem 接收当前 ItemGroupEntry 和索引，用于改写整项渲染，而不是修改 Item 的基础属性。',
    },
  },
];

export default function ItemShowcase() {
  return <ComponentShowcase cases={cases} />;
}
