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

export function componentSlug(name: string) {
  return name.toLowerCase().replace(/ /g, '-') as ComponentSlug;
}
