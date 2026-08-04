export const componentGroups = [
  {
    key: 'general',
    title: '通用',
    items: ['Button', 'Typography', 'Badge', 'Kbd'],
  },
  {
    key: 'layout',
    title: '布局',
    items: [
      'Aspect Ratio',
      'Card',
      'Resizable',
      'Scroll Area',
      'Masonry',
      'Stack',
      'Layout',
      'Separator',
    ],
  },
  {
    key: 'navigation',
    title: '导航',
    items: [
      'Breadcrumb',
      'Dropdown Menu',
      'Menubar',
      'Navigation Menu',
      'Pagination',
      'Tabs',
    ],
  },
  {
    key: 'dataEntry',
    title: '数据录入',
    items: [
      'Checkbox',
      'Date Picker',
      'Form',
      'Input',
      'Radio',
      'Select',
      'Slider',
      'Switch',
      'Toggle',
    ],
  },
  {
    key: 'dataDisplay',
    title: '数据展示',
    items: [
      'Accordion',
      'Attachment',
      'Avatar',
      'Bubble',
      'Carousel',
      'Chart',
      'Collapsible',
      'Counter',
      'Data Table',
      'Empty',
      'Item',
      'Marker',
      'Table',
      'Tooltip',
    ],
  },
  {
    key: 'feedback',
    title: '反馈',
    items: [
      'Alert',
      'Alert Dialog',
      'Dialog',
      'Drawer',
      'Popover',
      'Progress',
      'Skeleton',
      'Sonner',
      'Spinner',
      'Toast',
    ],
  },
  {
    key: 'other',
    title: '其他',
    items: ['Command', 'Context Menu', 'Direction'],
  },
] as const;

export const componentCatalog = componentGroups.flatMap((group) => group.items);

type KebabCase<Value extends string> =
  Value extends `${infer Head} ${infer Tail}`
    ? `${Lowercase<Head>}-${KebabCase<Tail>}`
    : Lowercase<Value>;

export type ComponentName = (typeof componentCatalog)[number];
export type ComponentSlug = KebabCase<ComponentName>;

export const zhComponentNames = {
  Button: '按钮',
  Typography: '排版',
  Badge: '徽标',
  Kbd: '键盘按键',
  'Aspect Ratio': '宽高比',
  Card: '卡片',
  Resizable: '可调整大小',
  'Scroll Area': '滚动区域',
  Masonry: '瀑布流',
  Stack: '堆叠',
  Layout: '布局',
  Separator: '分隔线',
  Breadcrumb: '面包屑',
  'Dropdown Menu': '下拉菜单',
  Menubar: '菜单栏',
  'Navigation Menu': '导航菜单',
  Pagination: '分页',
  Tabs: '标签页',
  Checkbox: '复选框',
  'Date Picker': '日期选择器',
  Form: '表单',
  Input: '输入框',
  Radio: '单选框',
  Select: '选择器',
  Slider: '滑块',
  Switch: '开关',
  Toggle: '切换按钮',
  Accordion: '手风琴',
  Attachment: '附件',
  Avatar: '头像',
  Bubble: '气泡',
  Carousel: '轮播',
  Chart: '图表',
  Collapsible: '折叠',
  Counter: '计数器',
  'Data Table': '数据表格',
  Empty: '空状态',
  Item: '列表项',
  Marker: '标记',
  Table: '表格',
  Tooltip: '文字提示',
  Alert: '警告提示',
  'Alert Dialog': '确认对话框',
  Dialog: '对话框',
  Drawer: '抽屉',
  Popover: '气泡卡片',
  Progress: '进度条',
  Skeleton: '骨架屏',
  Sonner: '消息通知',
  Spinner: '加载图标',
  Toast: '轻提示',
  Command: '命令面板',
  'Context Menu': '右键菜单',
  Direction: '文字方向',
} satisfies Record<ComponentName, string>;

export const localizedComponentName = (name: string, locale: 'zh' | 'en') => {
  if (locale === 'en') return name;
  return zhComponentNames[name as ComponentName] ?? name;
};

export const componentSlug = (name: string) => {
  return name.toLowerCase().replace(/ /g, '-') as ComponentSlug;
};
