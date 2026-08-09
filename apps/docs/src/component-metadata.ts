import type { ComponentDocumentation } from './component-docs';
import type { ComponentSlug } from './component-catalog';
import type { DocsLocale } from './i18n/resources';

export const componentSearchMetadata = {
  button: [
    'Triggers an action or event for submitting, confirming, navigating, and other immediate operations.',
    ['按钮', '操作', '提交', '确认'],
    ['action', 'submit', 'confirm'],
  ],
  typography: [
    'Provides consistent content hierarchy, body rhythm, and inline text styles.',
    ['排版', '文字', '标题', '正文'],
    ['text', 'heading', 'paragraph'],
  ],
  badge: [
    'Displays status, categories, or short attributes for quick scanning.',
    ['徽标', '状态', '标签'],
    ['status', 'tag', 'label'],
  ],
  kbd: [
    'Displays keyboard keys and shortcut combinations.',
    ['键盘', '快捷键', '按键'],
    ['keyboard', 'shortcut', 'hotkey'],
  ],
  'aspect-ratio': [
    'Keeps media at a fixed ratio in responsive layouts.',
    ['宽高比', '比例', '媒体'],
    ['ratio', 'media', 'responsive'],
  ],
  card: [
    'Groups information and actions around one subject with clear header, content, and footer regions.',
    ['卡片', '容器', '内容分组'],
    ['container', 'panel', 'content'],
  ],
  resizable: [
    'Resizes adjacent content regions with a draggable separator.',
    ['调整大小', '拖拽', '分栏'],
    ['resize', 'split pane', 'drag'],
  ],
  'scroll-area': [
    'Provides a consistent scrolling experience inside constrained regions.',
    ['滚动区域', '滚动条'],
    ['scroll', 'viewport', 'overflow'],
  ],
  masonry: [
    'Places variable-height content into the shortest column and supports full-row items.',
    ['瀑布流', '多列', '网格'],
    ['waterfall', 'columns', 'grid'],
  ],
  stack: [
    'Applies consistent direction, spacing, alignment, and wrapping to related elements.',
    ['堆叠', '间距', '排列'],
    ['flex', 'spacing', 'layout'],
  ],
  layout: [
    'Composes page shells from Header, Content, Footer, and Sidebar regions.',
    ['页面布局', '页头', '侧栏', '页脚'],
    ['shell', 'header', 'sidebar', 'footer'],
  ],
  separator: [
    'Separates adjacent content at different levels horizontally or vertically.',
    ['分隔线', '分割线'],
    ['divider', 'rule'],
  ],
  breadcrumb: [
    'Shows the current location and parent path with support for collapsing deep hierarchies.',
    ['面包屑', '路径', '层级'],
    ['path', 'hierarchy', 'trail'],
  ],
  'dropdown-menu': [
    'Opens a temporary action list from a clear trigger, including choices and nested commands.',
    ['下拉菜单', '操作菜单'],
    ['actions', 'menu', 'popup'],
  ],
  menubar: [
    'Organizes desktop-style top-level commands in a stable application menu.',
    ['菜单栏', '全局命令'],
    ['application menu', 'commands'],
  ],
  'navigation-menu': [
    'Organizes primary destinations and rich grouped navigation panels.',
    ['导航菜单', '大菜单'],
    ['mega menu', 'site navigation'],
  ],
  pagination: [
    'Navigates between pages of a segmented data set and communicates the current range.',
    ['分页', '页码'],
    ['pages', 'pager', 'data range'],
  ],
  tabs: [
    'Switches between mutually exclusive content while preserving context and task continuity.',
    ['标签页', '选项卡', '页签'],
    ['tabbed interface', 'panels'],
  ],
  checkbox: [
    'Controls an independently selectable boolean option.',
    ['复选框', '多选'],
    ['boolean', 'check', 'multi-select'],
  ],
  'date-picker': [
    'Selects a date from an inline calendar or popup trigger.',
    ['日期选择', '日历'],
    ['calendar', 'date input'],
  ],
  form: [
    'Structures fields and connects state, validation, and submission behavior.',
    ['表单', '校验', '提交'],
    ['fields', 'validation', 'submit'],
  ],
  input: [
    'Accepts a single line of text or specially formatted content.',
    ['输入框', '文本输入'],
    ['text field', 'textbox'],
  ],
  'input-number': [
    'Accepts, formats, and steps through numeric values within optional boundaries.',
    ['数字输入框', '数值', '步进器', '金额'],
    ['number input', 'numeric field', 'stepper', 'currency'],
  ],
  radio: [
    'Selects one value from a mutually exclusive group.',
    ['单选框', '单选'],
    ['single choice', 'option'],
  ],
  select: [
    'Selects a predefined value from a popup list.',
    ['选择器', '下拉选择'],
    ['dropdown', 'combobox', 'options'],
  ],
  slider: [
    'Selects a value within a continuous or discrete range.',
    ['滑块', '范围选择'],
    ['range', 'value'],
  ],
  switch: [
    'Immediately toggles a setting between on and off.',
    ['开关', '切换设置'],
    ['on off', 'setting'],
  ],
  toggle: [
    'Toggles the pressed state of a tool or control.',
    ['切换按钮', '按下状态'],
    ['pressed', 'tool button'],
  ],
  accordion: [
    'Expands and collapses a vertically arranged set of content sections.',
    ['手风琴', '折叠面板'],
    ['disclosure', 'expand', 'collapse'],
  ],
  attachment: [
    'Displays file attachment information, status, and actions.',
    ['附件', '文件'],
    ['file', 'upload'],
  ],
  avatar: [
    'Represents a person, team, or other entity.',
    ['头像', '人物'],
    ['profile', 'user', 'image'],
  ],
  bubble: [
    'Displays conversational content and composes with avatars and scroll regions.',
    ['气泡', '对话', '消息'],
    ['chat', 'message', 'conversation'],
  ],
  carousel: [
    'Cycles through peer content in a constrained space.',
    ['轮播', '走马灯'],
    ['slides', 'gallery'],
  ],
  chart: [
    'Provides responsive containers, theme variables, and consistent tooltips for Recharts.',
    ['图表', '数据可视化'],
    ['graph', 'visualization', 'recharts'],
  ],
  collapsible: [
    'Expands or collapses one content region.',
    ['折叠', '展开'],
    ['disclosure', 'expand'],
  ],
  counter: [
    'Animates changing numeric values one digit at a time.',
    ['计数器', '数字动画'],
    ['number', 'animation'],
  ],
  'data-table': [
    'Displays and operates on structured data sets.',
    ['数据表格', '排序', '筛选'],
    ['grid', 'sorting', 'filtering'],
  ],
  empty: [
    'Explains an empty state and offers a useful next step.',
    ['空状态', '无数据'],
    ['no data', 'blank state'],
  ],
  item: [
    'Builds general-purpose list items with content and actions.',
    ['列表项', '条目'],
    ['list row', 'content'],
  ],
  marker: [
    'Marks a position or state within content.',
    ['标记', '位置'],
    ['indicator', 'position'],
  ],
  table: [
    'Displays structured data with semantic rows and columns.',
    ['表格', '行列'],
    ['rows', 'columns'],
  ],
  tooltip: [
    'Provides short supplementary information for a control.',
    ['提示', '文字提示'],
    ['hint', 'hover'],
  ],
  alert: [
    'Persistently displays important information within a page.',
    ['警告', '提示信息'],
    ['notice', 'message'],
  ],
  'alert-dialog': [
    'Interrupts a flow to confirm an action with important consequences.',
    ['确认对话框', '危险确认'],
    ['confirmation', 'destructive'],
  ],
  dialog: [
    'Completes a focused task in a modal layer.',
    ['对话框', '弹窗', '模态框'],
    ['modal', 'overlay'],
  ],
  drawer: [
    'Shows an adaptive temporary panel from a viewport or container edge.',
    ['抽屉', '侧滑面板'],
    ['sheet', 'side panel'],
  ],
  popover: [
    'Shows rich interactive content next to a trigger.',
    ['气泡卡片', '弹出层'],
    ['popup', 'floating panel'],
  ],
  progress: [
    'Communicates task or process completion.',
    ['进度条', '完成度'],
    ['loading progress', 'completion'],
  ],
  skeleton: [
    'Preserves content layout while data is loading.',
    ['骨架屏', '加载占位'],
    ['placeholder', 'loading'],
  ],
  sonner: [
    'Delivers transient feedback through a non-blocking notification queue.',
    ['消息通知', '轻提示'],
    ['notification', 'toast queue'],
  ],
  spinner: [
    'Indicates short activity with indeterminate progress.',
    ['加载图标', '旋转'],
    ['loading', 'activity'],
  ],
  toast: [
    'Shows brief feedback at the edge of the page.',
    ['轻提示', '消息'],
    ['notification', 'feedback'],
  ],
  command: [
    'Provides a searchable, keyboard-operated command list.',
    ['命令面板', '快捷检索'],
    ['command palette', 'cmdk', 'search'],
  ],
  'context-menu': [
    'Provides object-specific actions from a context menu.',
    ['右键菜单', '上下文菜单'],
    ['right click', 'actions'],
  ],
  direction: [
    'Sets the writing direction for a component tree.',
    ['文字方向', '从右到左'],
    ['rtl', 'ltr', 'writing direction'],
  ],
} satisfies Record<
  ComponentSlug,
  readonly [
    summary: string,
    zhAliases: readonly string[],
    enAliases: readonly string[],
  ]
>;

const collectDocumentationText = (documentation: ComponentDocumentation) => {
  return [
    documentation.summary,
    ...documentation.whenToUse,
    ...documentation.examples.flatMap((example) => [
      example.title,
      typeof example.description === 'string' ? example.description : '',
    ]),
    ...(documentation.parts ?? []).flatMap((part) => [
      part.name,
      part.description,
    ]),
    ...(documentation.relatedComponents ?? []).flatMap((related) => [
      related.name,
      related.description,
    ]),
    documentation.semanticDom?.description ?? '',
    ...documentation.api.flatMap((property) => [
      property.name,
      property.description,
      property.type,
    ]),
    ...documentation.accessibility,
    ...documentation.pitfalls,
  ].filter(Boolean);
};

export const localizedComponentMetadata = (
  slug: string,
  locale: DocsLocale,
  documentation: ComponentDocumentation | undefined
) => {
  const entry =
    componentSearchMetadata[slug as keyof typeof componentSearchMetadata];
  const summary =
    locale === 'en'
      ? (entry?.[0] ?? documentation?.summary ?? '')
      : (documentation?.summary ?? '');
  const aliases = locale === 'en' ? (entry?.[2] ?? []) : (entry?.[1] ?? []);
  const searchText =
    locale === 'zh' && documentation
      ? collectDocumentationText(documentation)
      : [summary, ...aliases];

  return {
    aliases,
    searchText,
    summary,
  };
};
