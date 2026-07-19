import type { ReactNode } from 'react';
import { Badge } from '@heliannuuthus/ui/badge';
import { Button } from '@heliannuuthus/ui/button';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import { Kbd, KbdGroup } from '@heliannuuthus/ui/kbd';
import { Switch } from '@heliannuuthus/ui/switch';
import {
  TypographyBlockquote,
  TypographyCode,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from '@heliannuuthus/ui/typography';
import { ArrowRight, Download, Mail, Plus, Trash2 } from 'lucide-react';
import { minimalComponentPreviews } from './minimal-previews';

export type ApiProperty = {
  name: string;
  description: string;
  type: string;
  defaultValue?: string;
};

export type ComponentExample = {
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
};

export type ComponentDocumentation = {
  name: string;
  slug: string;
  summary: string;
  whenToUse: string[];
  examples: ComponentExample[];
  api: ApiProperty[];
  accessibility: string[];
  pitfalls: string[];
};

const buttonImport = `import { Button } from '@heliannuuthus/ui/button'`;

const buttonDocumentation: ComponentDocumentation = {
  name: 'Button',
  slug: 'button',
  summary: '触发操作或事件的基础控件，用于提交、确认、导航及页面中的即时操作。',
  whenToUse: [
    '用户需要执行一个明确动作，例如提交表单、创建内容或确认选择。',
    '页面需要区分主要、次要、危险和低强调操作。',
    '需要仅图标按钮时，必须同时提供可访问名称。',
  ],
  examples: [
    {
      title: '按钮类型',
      description:
        '使用视觉层级表达操作优先级。一个操作区域通常只保留一个主要按钮。',
      preview: (
        <div className="example-row">
          <Button>主要操作</Button>
          <Button variant="secondary">次要操作</Button>
          <Button variant="outline">描边按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="link">文字链接</Button>
          <Button variant="destructive">危险操作</Button>
        </div>
      ),
      code: `${buttonImport}

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>主要操作</Button>
      <Button variant="secondary">次要操作</Button>
      <Button variant="outline">描边按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="link">文字链接</Button>
      <Button variant="destructive">危险操作</Button>
    </div>
  )
}`,
    },
    {
      title: '不同尺寸',
      description:
        '尺寸应跟随容器密度，而不是用来表达重要程度。默认尺寸适合大多数表单与页面。',
      preview: (
        <div className="example-row example-row-end">
          <Button size="xs">超小按钮</Button>
          <Button size="sm">小按钮</Button>
          <Button>默认按钮</Button>
          <Button size="lg">大按钮</Button>
        </div>
      ),
      code: `${buttonImport}

export function ButtonSizes() {
  return (
    <div className="flex items-end gap-3">
      <Button size="xs">超小按钮</Button>
      <Button size="sm">小按钮</Button>
      <Button>默认按钮</Button>
      <Button size="lg">大按钮</Button>
    </div>
  )
}`,
    },
    {
      title: '带图标的按钮',
      description:
        '图标用于帮助识别动作。仅图标模式需要通过 aria-label 说明用途。',
      preview: (
        <div className="example-row">
          <Button>
            <Plus data-icon="inline-start" />
            新建项目
          </Button>
          <Button variant="outline">
            <Download data-icon="inline-start" />
            导出
          </Button>
          <Button size="icon" aria-label="发送邮件">
            <Mail />
          </Button>
          <Button size="icon" variant="destructive" aria-label="删除项目">
            <Trash2 />
          </Button>
        </div>
      ),
      code: `${buttonImport}
import { Download, Mail, Plus } from 'lucide-react'

export function ButtonWithIcon() {
  return (
    <>
      <Button><Plus data-icon="inline-start" />新建项目</Button>
      <Button variant="outline"><Download data-icon="inline-start" />导出</Button>
      <Button size="icon" aria-label="发送邮件"><Mail /></Button>
    </>
  )
}`,
    },
    {
      title: '状态',
      description:
        '禁用状态用于暂时不可执行的操作；加载状态应保留原有宽度并向用户解释进度。',
      preview: (
        <div className="example-row">
          <Button disabled>不可用</Button>
          <Button aria-busy="true" disabled>
            <span className="button-loader" />
            处理中
          </Button>
          <Button aria-invalid="true" variant="outline">
            校验失败
          </Button>
        </div>
      ),
      code: `${buttonImport}

export function ButtonStates() {
  return (
    <>
      <Button disabled>不可用</Button>
      <Button aria-busy="true" disabled>处理中</Button>
      <Button aria-invalid="true" variant="outline">校验失败</Button>
    </>
  )
}`,
    },
  ],
  api: [
    {
      name: 'variant',
      description: '按钮的视觉样式。',
      type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'",
      defaultValue: "'default'",
    },
    {
      name: 'size',
      description: '按钮尺寸，也包含仅图标尺寸。',
      type: "'xs' | 'sm' | 'default' | 'lg' | 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg'",
      defaultValue: "'default'",
    },
    {
      name: 'disabled',
      description: '阻止鼠标和键盘触发操作。',
      type: 'boolean',
      defaultValue: 'false',
    },
    { name: 'className', description: '扩展按钮根节点样式。', type: 'string' },
    {
      name: 'render',
      description: 'Base UI 渲染函数，用于替换底层元素。',
      type: 'ReactElement | ((props, state) => ReactElement)',
    },
  ],
  accessibility: [
    '仅图标按钮必须提供 aria-label 或可见文本。',
    '不要用颜色作为区分危险操作的唯一信息。',
    '异步操作使用 aria-busy，并避免在处理中改变按钮宽度。',
  ],
  pitfalls: [
    '不要在同一操作组中放置多个同等强调的主要按钮。',
    '不要用禁用按钮隐藏失败原因；在附近说明需要满足的条件。',
  ],
};

const typographyDocumentation: ComponentDocumentation = {
  name: 'Typography',
  slug: 'typography',
  summary: '提供一致的内容层级、正文节奏和行内文本样式。',
  whenToUse: [
    '文档、详情页和内容页面需要稳定的标题层级。',
    '需要统一正文、辅助文字、引用和代码的排版节奏。',
  ],
  examples: [
    {
      title: '标题层级',
      description: '标题层级表达内容结构。不要仅为了字号跳过语义层级。',
      preview: (
        <div className="typography-stack">
          <TypographyH1>一级标题</TypographyH1>
          <TypographyH2>二级标题</TypographyH2>
          <TypographyH3>三级标题</TypographyH3>
          <TypographyH4>四级标题</TypographyH4>
        </div>
      ),
      code: `import { TypographyH1, TypographyH2, TypographyH3, TypographyH4 } from '@heliannuuthus/ui/typography'

export function Headings() {
  return <><TypographyH1>一级标题</TypographyH1><TypographyH2>二级标题</TypographyH2><TypographyH3>三级标题</TypographyH3><TypographyH4>四级标题</TypographyH4></>
}`,
    },
    {
      title: '正文与辅助文字',
      description: '通过语义明确的文本样式建立稳定阅读节奏。',
      preview: (
        <div className="typography-stack">
          <TypographyLead>这是用于页面导语的强调文本。</TypographyLead>
          <TypographyP>
            正文承担主要信息，适合连续阅读和较长的产品说明。
          </TypographyP>
          <TypographyLarge>强调内容</TypographyLarge>
          <TypographySmall>较短的标签或说明</TypographySmall>
          <TypographyMuted>辅助信息与非关键元数据</TypographyMuted>
        </div>
      ),
      code: `import { TypographyLead, TypographyP, TypographyLarge, TypographySmall, TypographyMuted } from '@heliannuuthus/ui/typography'`,
    },
    {
      title: '引用与行内代码',
      description: '引用用于标记来源或观点，行内代码用于技术标识符和短命令。',
      preview: (
        <div className="typography-stack">
          <TypographyBlockquote>
            一致的界面来自一致的决策。
          </TypographyBlockquote>
          <TypographyP>
            通过 <TypographyCode>@heliannuuthus/ui/button</TypographyCode>{' '}
            子路径导入组件。
          </TypographyP>
        </div>
      ),
      code: `import { TypographyBlockquote, TypographyCode, TypographyP } from '@heliannuuthus/ui/typography'`,
    },
  ],
  api: [
    {
      name: 'TypographyH1–H4',
      description: '语义化的四级标题。',
      type: 'React.ComponentProps<heading>',
    },
    {
      name: 'TypographyP',
      description: '正文段落。',
      type: "React.ComponentProps<'p'>",
    },
    {
      name: 'TypographyLead / Muted',
      description: '导语与辅助正文。',
      type: "React.ComponentProps<'p'>",
    },
    {
      name: 'TypographyLarge / Small',
      description: '强调文字和较小标签。',
      type: 'React HTML attributes',
    },
    {
      name: 'TypographyBlockquote / Code',
      description: '引用和行内代码。',
      type: 'React HTML attributes',
    },
  ],
  accessibility: [
    '保持标题层级连续。',
    '辅助文字仍需满足对比度要求，不要仅依靠较浅颜色表达次要信息。',
  ],
  pitfalls: [
    '不要把排版组件当作布局容器。',
    '不要为了视觉字号选择错误的标题语义。',
  ],
};

const badgeDocumentation: ComponentDocumentation = {
  name: 'Badge',
  slug: 'badge',
  summary: '展示状态、分类或简短属性，帮助用户快速扫描信息。',
  whenToUse: ['标记对象的状态或分类。', '在有限空间内展示短小、非交互属性。'],
  examples: [
    {
      title: '徽标类型',
      description: '根据语义选择层级，危险样式只用于需要注意的负向状态。',
      preview: (
        <div className="example-row">
          <Badge>默认</Badge>
          <Badge variant="secondary">次要</Badge>
          <Badge variant="outline">描边</Badge>
          <Badge variant="ghost">弱化</Badge>
          <Badge variant="destructive">失败</Badge>
        </div>
      ),
      code: `import { Badge } from '@heliannuuthus/ui/badge'

export function BadgeVariants() {
  return <><Badge>默认</Badge><Badge variant="secondary">次要</Badge><Badge variant="outline">描边</Badge><Badge variant="destructive">失败</Badge></>
}`,
    },
    {
      title: '状态与图标',
      description: '短文本配合图标提升可扫描性，但文本仍需独立表达完整含义。',
      preview: (
        <div className="example-row">
          <Badge>
            <span className="status-dot" />
            运行中
          </Badge>
          <Badge variant="secondary">草稿</Badge>
          <Badge variant="outline">v0.1.0</Badge>
          <Badge variant="link" render={<a href={packageUrlForDocs()} />}>
            查看版本
            <ArrowRight />
          </Badge>
        </div>
      ),
      code: `import { Badge } from '@heliannuuthus/ui/badge'

<Badge><span aria-hidden="true" />运行中</Badge>
<Badge variant="outline">v0.1.0</Badge>`,
    },
  ],
  api: [
    {
      name: 'variant',
      description: '徽标视觉样式。',
      type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'",
      defaultValue: "'default'",
    },
    {
      name: 'render',
      description: '替换默认 span，例如渲染为链接。',
      type: 'ReactElement | render function',
    },
    { name: 'className', description: '扩展根节点样式。', type: 'string' },
  ],
  accessibility: [
    '状态不能只依靠颜色表达，必须保留文本。',
    '可点击徽标应渲染为链接或按钮，获得正确语义。',
  ],
  pitfalls: [
    '避免放入长句或复杂操作。',
    '不要把 Badge 用作没有键盘语义的可点击控件。',
  ],
};

function packageUrlForDocs() {
  return 'https://www.npmjs.com/package/@heliannuuthus/ui';
}

const kbdDocumentation: ComponentDocumentation = {
  name: 'Kbd',
  slug: 'kbd',
  summary: '以键帽形式展示键盘按键和快捷键组合。',
  whenToUse: ['解释键盘快捷方式。', '在菜单、提示或命令面板中展示操作按键。'],
  examples: [
    {
      title: '单个按键',
      description: '使用用户设备上容易识别的按键名称。',
      preview: (
        <div className="example-row">
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>⌫</Kbd>
        </div>
      ),
      code: `import { Kbd } from '@heliannuuthus/ui/kbd'

<Kbd>Enter</Kbd>`,
    },
    {
      title: '组合快捷键',
      description: '通过 KbdGroup 统一多个按键之间的间距。',
      preview: (
        <div className="example-row">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>Shift</Kbd>
            <span>+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
      ),
      code: `import { Kbd, KbdGroup } from '@heliannuuthus/ui/kbd'

<KbdGroup><Kbd>⌘</Kbd><span>+</span><Kbd>K</Kbd></KbdGroup>`,
    },
  ],
  api: [
    {
      name: 'Kbd',
      description: '单个键盘按键。',
      type: "React.ComponentProps<'kbd'>",
    },
    {
      name: 'KbdGroup',
      description: '快捷键组合容器。',
      type: "React.ComponentProps<'div'>",
    },
    { name: 'className', description: '扩展组件样式。', type: 'string' },
  ],
  accessibility: [
    '同时用文本解释不常见的快捷键用途。',
    '针对 macOS 和 Windows 展示对应的平台按键。',
  ],
  pitfalls: [
    'Kbd 只用于展示，不应承担实际键盘事件监听。',
    '不要假设所有用户都使用同一种键盘布局。',
  ],
};

export const componentDocumentation: Record<string, ComponentDocumentation> = {
  button: buttonDocumentation,
  typography: typographyDocumentation,
  badge: badgeDocumentation,
  kbd: kbdDocumentation,
};

const remainingComponents = [
  ['Button Group', 'button-group', '组织一组紧密相关的操作。'],
  ['Aspect Ratio', 'aspect-ratio', '让媒体内容在响应式布局中保持固定比例。'],
  ['Card', 'card', '承载同一主题的信息和操作。'],
  ['Resizable', 'resizable', '允许用户调整相邻面板尺寸。'],
  ['Scroll Area', 'scroll-area', '为受限区域提供一致的滚动体验。'],
  ['Separator', 'separator', '在视觉和语义上分隔内容。'],
  ['Breadcrumb', 'breadcrumb', '展示当前位置及其层级路径。'],
  ['Dropdown Menu', 'dropdown-menu', '在触发器附近提供临时操作菜单。'],
  ['Menubar', 'menubar', '提供桌面应用式的顶层菜单。'],
  ['Navigation Menu', 'navigation-menu', '组织产品或站点的主要入口。'],
  ['Pagination', 'pagination', '在分段数据集合之间导航。'],
  ['Sidebar', 'sidebar', '承载产品级导航与工作区入口。'],
  ['Tabs', 'tabs', '切换同一上下文中的互斥内容。'],
  ['Calendar', 'calendar', '以月历结构展示并选择日期。'],
  ['Checkbox', 'checkbox', '控制可独立选择的布尔选项。'],
  ['Combobox', 'combobox', '通过输入搜索并选择候选值。'],
  ['Date Picker', 'date-picker', '通过输入框与日历选择日期。'],
  ['Field', 'field', '组织标签、控件、描述和错误信息。'],
  ['Form', 'form', '连接字段状态、校验与提交行为。'],
  ['Input', 'input', '接收单行文本或特定格式内容。'],
  ['Input Group', 'input-group', '组合输入框、前后缀与关联操作。'],
  ['Input OTP', 'input-otp', '录入固定长度的一次性验证码。'],
  ['Label', 'label', '为表单控件提供可访问标签。'],
  ['Native Select', 'native-select', '使用原生控件完成轻量选择。'],
  ['Radio Group', 'radio-group', '从互斥选项中选择一个值。'],
  ['Select', 'select', '从弹出列表中选择预定义值。'],
  ['Slider', 'slider', '在连续或离散范围内选择数值。'],
  ['Switch', 'switch', '即时切换设置的开关状态。'],
  ['Textarea', 'textarea', '接收可换行的多行文本。'],
  ['Toggle', 'toggle', '切换一个可按下的工具状态。'],
  ['Toggle Group', 'toggle-group', '组织单选或多选的切换控件。'],
  ['Accordion', 'accordion', '按需展开垂直排列的内容区域。'],
  ['Attachment', 'attachment', '展示附件信息、状态与操作。'],
  ['Avatar', 'avatar', '表示人物、团队或其他实体。'],
  ['Bubble', 'bubble', '展示对话消息与附加信息。'],
  ['Carousel', 'carousel', '在有限空间中轮播同级内容。'],
  ['Chart', 'chart', '为数据可视化提供主题与交互基础。'],
  ['Collapsible', 'collapsible', '控制单个内容区域展开收起。'],
  ['Data Table', 'data-table', '展示并操作结构化数据集合。'],
  ['Empty', 'empty', '解释无数据状态并提供下一步。'],
  ['Hover Card', 'hover-card', '在悬停或聚焦时补充关联信息。'],
  ['Item', 'item', '构建包含内容和操作的通用列表项。'],
  ['Marker', 'marker', '标记内容中的位置或状态。'],
  ['Message', 'message', '呈现单条会话消息及其状态。'],
  ['Message Scroller', 'message-scroller', '管理消息流滚动和最新内容跟随。'],
  ['Table', 'table', '使用语义化行列展示数据。'],
  ['Tooltip', 'tooltip', '为控件提供简短补充说明。'],
  ['Alert', 'alert', '持续展示重要的页面内提示。'],
  ['Alert Dialog', 'alert-dialog', '确认具有重要后果的操作。'],
  ['Dialog', 'dialog', '在模态层中完成聚焦任务。'],
  ['Drawer', 'drawer', '从边缘展示临时任务内容。'],
  ['Popover', 'popover', '在触发器附近展示富交互浮层。'],
  ['Progress', 'progress', '展示任务或流程完成进度。'],
  ['Sheet', 'sheet', '从屏幕边缘覆盖打开面板。'],
  ['Skeleton', 'skeleton', '在加载前维持内容布局。'],
  ['Sonner', 'sonner', '以非阻塞队列反馈短暂结果。'],
  ['Spinner', 'spinner', '表示无法确定进度的短时加载。'],
  ['Toast', 'toast', '在页面边缘短暂反馈操作结果。'],
  ['Command', 'command', '提供可搜索的键盘命令列表。'],
  ['Context Menu', 'context-menu', '提供对象相关的上下文操作。'],
  ['Direction', 'direction', '设置组件树的文字书写方向。'],
] as const;

for (const [name, slug, summary] of remainingComponents) {
  componentDocumentation[slug] = {
    name,
    slug,
    summary,
    whenToUse: [
      `需要${summary.replace(/[。]$/, '')}时。`,
      '需要覆盖默认、受控、禁用和窄屏状态时。',
    ],
    examples: [],
    api: [
      {
        name: 'className',
        description: '扩展根节点或语义插槽样式。',
        type: 'string',
      },
      {
        name: 'children',
        description: '组件内容或复合组件子节点。',
        type: 'React.ReactNode',
      },
      {
        name: 'disabled',
        description: '在支持交互的节点上禁用操作。',
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'value / defaultValue',
        description: '在支持状态时选择受控或非受控模式。',
        type: 'component-specific',
      },
    ],
    accessibility: [
      '保留底层语义、焦点管理与键盘交互。',
      '为触发器、图标和状态提供可感知名称。',
    ],
    pitfalls: [
      '不要移除焦点样式或绕过状态属性。',
      '不要写死业务文案、尺寸和产品状态。',
    ],
  };
}

for (const [slug, preview] of Object.entries(minimalComponentPreviews)) {
  const documentation = componentDocumentation[slug];
  if (!documentation) continue;
  const importName = documentation.name.replace(/ /g, '');
  documentation.examples = [
    {
      title: '基础用法',
      description: `${documentation.name} 的真实默认结构与推荐内容层级。`,
      preview,
      code: `import * as ${importName} from '@heliannuuthus/ui/${slug}'\n\n// 根据下方预览组合该模块导出的组件。`,
    },
  ];
}

componentDocumentation.switch.examples.push({
  title: '开关状态',
  description: '真实展示开启、关闭和禁用状态，禁用开关不会响应指针操作。',
  preview: (
    <div className="example-row">
      <label className="minimal-control">
        <Switch defaultChecked />
        已开启
      </label>
      <label className="minimal-control">
        <Switch />
        已关闭
      </label>
      <label className="minimal-control">
        <Switch disabled />
        不可用
      </label>
    </div>
  ),
  code: `import { Switch } from '@heliannuuthus/ui/switch'\n\n<Switch defaultChecked />\n<Switch />\n<Switch disabled />`,
});

componentDocumentation.checkbox.examples.push({
  title: '选择状态',
  description: '真实展示未选、已选、不确定和禁用状态。',
  preview: (
    <div className="example-row">
      <label className="minimal-control">
        <Checkbox />
        未选择
      </label>
      <label className="minimal-control">
        <Checkbox defaultChecked />
        已选择
      </label>
      <label className="minimal-control">
        <Checkbox indeterminate />
        部分选择
      </label>
      <label className="minimal-control">
        <Checkbox disabled />
        不可用
      </label>
    </div>
  ),
  code: `import { Checkbox } from '@heliannuuthus/ui/checkbox'\n\n<Checkbox />\n<Checkbox defaultChecked />\n<Checkbox indeterminate />\n<Checkbox disabled />`,
});
