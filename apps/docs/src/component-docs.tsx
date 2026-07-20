import type { ReactNode } from 'react';
import { Badge } from '@heliannuuthus/ui/badge';
import { Button } from '@heliannuuthus/ui/button';
import { ButtonGroup } from '@heliannuuthus/ui/button-group';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import { Kbd } from '@heliannuuthus/ui/kbd';
import { Separator } from '@heliannuuthus/ui/separator';
import { Switch } from '@heliannuuthus/ui/switch';
import {
  H2,
  TypographyBlockquote,
  TypographyCode,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from '@heliannuuthus/ui/typography';
import { ArrowRight, Download, Mail, Plus, Trash2 } from 'lucide-react';
import { BreadcrumbPlaygroundDemo } from './breadcrumb-preview';
import {
  DropdownMenuActionsDemo,
  DropdownMenuSelectionDemo,
  DropdownMenuSubmenuDemo,
} from './dropdown-menu-preview';
import {
  CheckboxPermissionsDemo,
  ComboboxMemberDemo,
  DatePickerInlineDemo,
  DatePickerReleaseDemo,
  FieldProfileDemo,
  FieldLabelPairingDemo,
  FormInviteDemo,
  GroupCompositionDemo,
  InputOtpVerificationDemo,
  InputStatesDemo,
  RadioPlanDemo,
  SelectNativeDemo,
  SelectWorkspaceDemo,
  SliderBudgetDemo,
  SwitchSettingsDemo,
  TextareaCounterDemo,
} from './data-entry-previews';
import {
  MenubarCommandsDemo,
  MenubarNestedDemo,
  MenubarViewDemo,
} from './menubar-preview';
import {
  NavigationMenuCompactDemo,
  NavigationMenuMegaDemo,
  PaginationControlledDemo,
  PaginationOverflowDemo,
  SidebarWorkspaceDemo,
  TabsDashboardDemo,
  TabsMotionDemo,
  TabsVariantsDemo,
} from './navigation-previews';
import {
  AccordionScenarioDemo,
  AlertDialogScenarioDemo,
  AttachmentScenarioDemo,
  CarouselScenarioDemo,
  ChartScenarioDemo,
  CollapsibleScenarioDemo,
  CommandScenarioDemo,
  ContextMenuScenarioDemo,
  DataTableScenarioDemo,
  DialogScenarioDemo,
  DirectionScenarioDemo,
  DrawerScenarioDemo,
  HoverCardScenarioDemo,
  ItemScenarioDemo,
  MarkerScenarioDemo,
  MessageScenarioDemo,
  PopoverScenarioDemo,
  SheetScenarioDemo,
  ToastScenarioDemo,
  TooltipScenarioDemo,
} from './scenario-previews';
import { minimalComponentPreviews } from './minimal-previews';

export type ApiProperty = {
  name: string;
  description: string;
  type: string;
  defaultValue?: string;
};

export type ComponentPart = {
  name: string;
  description: string;
};

export type ComponentExample = {
  title: string;
  description: string;
  preview: ReactNode;
  code: string;
  wide?: boolean;
  previewHeight?: number;
};

export type ComponentDocumentation = {
  name: string;
  slug: string;
  summary: string;
  whenToUse: string[];
  examples: ComponentExample[];
  parts?: ComponentPart[];
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
      title: '组合按钮',
      description:
        '将紧密相关的操作收进同一个视觉组；需要补充组内状态时使用 text 属性。',
      preview: (
        <ButtonGroup text="2 / 8">
          <Button variant="outline">上一项</Button>
          <Button>下一项</Button>
        </ButtonGroup>
      ),
      code: `import { Button } from '@heliannuuthus/ui/button'
import { ButtonGroup } from '@heliannuuthus/ui/button-group'

export function GroupedButtons() {
  return (
    <ButtonGroup text="2 / 8">
      <Button variant="outline">上一项</Button>
      <Button>下一项</Button>
    </ButtonGroup>
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
  parts: [
    { name: 'Button', description: '触发单个明确操作的基础按钮。' },
    {
      name: 'ButtonGroup',
      description: '组合紧密相关的按钮，并支持水平或垂直排列。',
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
      title: '完整内容排版',
      description:
        '用标题、导语、正文、引用、行内代码和辅助信息组织一段连贯、可阅读的内容。',
      wide: true,
      preview: (
        <div className="typography-stack">
          <H2>让界面语言保持清晰</H2>
          <TypographyLead>
            稳定的排版让用户先理解内容，再自然地注意到设计。
          </TypographyLead>
          <TypographyP>
            Heliannuuthus UI
            通过一致的标题层级、正文节奏和辅助信息，帮助产品在不同页面中保持清晰、可信且易于阅读的表达。
          </TypographyP>
          <TypographyBlockquote>
            一致的界面，来自每一次一致的内容决策。
          </TypographyBlockquote>
          <TypographyP>
            使用 <TypographyCode>@heliannuuthus/ui/typography</TypographyCode>{' '}
            中的语义组件组合内容，并让视觉层级始终服务于阅读顺序。
          </TypographyP>
          <TypographyMuted>设计系统札记 · 5 分钟阅读</TypographyMuted>
        </div>
      ),
      code: `import {
  H2,
  TypographyBlockquote,
  TypographyCode,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from '@heliannuuthus/ui/typography'

export function TypographyStory() {
  return (
    <article>
      <H2>让界面语言保持清晰</H2>
      <TypographyLead>稳定的排版让用户先理解内容，再自然地注意到设计。</TypographyLead>
      <TypographyP>一致的标题层级和正文节奏，让内容清晰、可信且易于阅读。</TypographyP>
      <TypographyBlockquote>一致的界面，来自每一次一致的内容决策。</TypographyBlockquote>
      <TypographyP>
        使用 <TypographyCode>@heliannuuthus/ui/typography</TypographyCode> 组合内容。
      </TypographyP>
      <TypographyMuted>设计系统札记 · 5 分钟阅读</TypographyMuted>
    </article>
  )
}`,
    },
  ],
  parts: [
    {
      name: 'H1–H4',
      description: '语义化的四级标题。',
    },
    {
      name: 'TypographyP',
      description: '正文段落。',
    },
    {
      name: 'TypographyLead / Muted',
      description: '导语与辅助正文。',
    },
    {
      name: 'TypographyLarge / Small',
      description: '强调文字和较小标签。',
    },
    {
      name: 'TypographyBlockquote / Code',
      description: '引用和行内代码。',
    },
  ],
  api: [
    {
      name: 'children',
      description: '排版组件的文本或行内内容。',
      type: 'React.ReactNode',
    },
    {
      name: 'className',
      description: '扩展对应语义元素的样式。',
      type: 'string',
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
      description: '通过 keys 属性统一多个按键之间的间距。',
      preview: (
        <div className="example-row">
          <Kbd keys={['⌘', 'K']} />
          <Kbd keys={['Ctrl', 'Shift', 'P']} />
        </div>
      ),
      code: `import { Kbd } from '@heliannuuthus/ui/kbd'

<Kbd keys={['⌘', 'K']} />`,
    },
  ],
  api: [
    {
      name: 'keys',
      description: '通过同一个 Kbd 渲染快捷键组合。',
      type: 'ReactNode[]',
    },
    {
      name: 'separator',
      description: '组合快捷键之间的分隔内容。',
      type: 'ReactNode',
      defaultValue: "'+'",
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

const separatorDocumentation: ComponentDocumentation = {
  name: 'Separator',
  slug: 'separator',
  summary: '用水平或垂直分隔线组织相邻但不同层级的内容。',
  whenToUse: [
    '需要在纵向内容之间建立章节边界。',
    '需要在横向工具栏或元信息之间建立分组边界。',
  ],
  examples: [
    {
      title: '水平分隔',
      description: '分隔上下排列的内容区块，默认无需声明 orientation。',
      preview: (
        <div className="separator-horizontal-demo">
          <section>
            <span>项目空间</span>
            <strong>Heliannuuthus UI</strong>
            <p>一套用于构建清晰、稳定界面的基础组件。</p>
          </section>
          <Separator />
          <section>
            <span>最近更新</span>
            <strong>组件文档与交互示例</strong>
            <p>今天 14:30 · 由 Heliannuuthus 更新</p>
          </section>
        </div>
      ),
      code: `import { Separator } from '@heliannuuthus/ui/separator'

<section>上方内容</section>
<Separator />
<section>下方内容</section>`,
      wide: true,
      previewHeight: 360,
    },
    {
      title: '垂直分隔',
      description: '分隔同一行内的操作或元信息，并保持各分组的阅读关系。',
      preview: (
        <div className="separator-vertical-demo">
          <div>
            <span>状态</span>
            <strong>设计中</strong>
          </div>
          <Separator orientation="vertical" />
          <div>
            <span>负责人</span>
            <strong>Heliannuuthus</strong>
          </div>
          <Separator orientation="vertical" />
          <div>
            <span>更新时间</span>
            <strong>刚刚</strong>
          </div>
        </div>
      ),
      code: `import { Separator } from '@heliannuuthus/ui/separator'

<div className="flex items-stretch">
  <span>状态</span>
  <Separator orientation="vertical" />
  <span>负责人</span>
</div>`,
      wide: true,
      previewHeight: 360,
    },
  ],
  api: [
    {
      name: 'orientation',
      description: '设置分隔线的布局方向。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'className',
      description: '扩展分隔线的尺寸、颜色和间距。',
      type: 'string',
    },
  ],
  accessibility: [
    '组件会根据 orientation 提供对应的分隔方向语义。',
    '仅用于装饰时，不要让分隔线进入键盘焦点顺序。',
  ],
  pitfalls: [
    '垂直分隔线需要父容器具有明确高度或可拉伸的高度。',
    '不要用分隔线代替真正的标题层级与内容分组。',
  ],
};

const aspectRatioDocumentation: ComponentDocumentation = {
  name: 'Aspect Ratio',
  slug: 'aspect-ratio',
  summary: '让媒体内容在响应式布局中保持固定比例。',
  whenToUse: [
    '文章封面、视频和商品图需要在不同宽度下保持一致构图。',
    '需要预留稳定的媒体区域，避免图片加载后引起页面跳动。',
  ],
  examples: [
    {
      title: '响应式封面编辑',
      description:
        '切换常用封面比例，观察同一张图片如何随容器宽高变化保持稳定布局。',
      wide: true,
      preview: minimalComponentPreviews['aspect-ratio'],
      code: `import { useState } from 'react'
import { AspectRatio } from '@heliannuuthus/ui/aspect-ratio'
import { Button } from '@heliannuuthus/ui/button'

const ratios = [
  { label: '16:9', value: 16 / 9 },
  { label: '4:3', value: 4 / 3 },
  { label: '1:1', value: 1 },
]

export function CoverEditor() {
  const [ratio, setRatio] = useState(ratios[0])

  return (
    <div>
      <AspectRatio ratio={ratio.value}>
        <img src="/cover.jpg" alt="内容封面" />
      </AspectRatio>
      {ratios.map((option) => (
        <Button key={option.label} onClick={() => setRatio(option)}>
          {option.label}
        </Button>
      ))}
    </div>
  )
}`,
    },
  ],
  api: [
    {
      name: 'ratio',
      description: '容器宽高比，例如 16 / 9、4 / 3 或 1。',
      type: 'number',
    },
    {
      name: 'children',
      description: '需要约束比例的媒体或内容。',
      type: 'React.ReactNode',
    },
    {
      name: 'className',
      description: '扩展比例容器样式。',
      type: 'string',
    },
  ],
  accessibility: [
    '媒体内容仍需提供准确的替代文本或字幕。',
    '比例切换控件需要暴露当前选中状态。',
  ],
  pitfalls: [
    '不要只设置固定高度，否则响应式宽度下会失去目标比例。',
    '重要主体不要贴近图片边缘，以免在不同宽高比下被裁切。',
  ],
};

const cardDocumentation: ComponentDocumentation = {
  name: 'Card',
  slug: 'card',
  summary: '用清晰的头部、内容和底部区域承载同一主题的信息与操作。',
  whenToUse: [
    '需要将一组相关信息和操作组织成独立内容单元。',
    '需要明确区分标题信息、主体内容和底部操作。',
  ],
  examples: [
    {
      title: 'Card 结构关系',
      description:
        'Header 负责标题与辅助操作，Content 承载主体，Footer 放置与整张卡片相关的操作。',
      wide: true,
      preview: minimalComponentPreviews.card,
      code: `import { Card } from '@heliannuuthus/ui/card'

export function WorkspaceCard() {
  return (
    <Card
      title="工作区资料"
      description="修改成员看到的工作区名称。"
      action={<button>更多操作</button>}
      footer="取消与保存操作"
    >
      主体表单或内容
    </Card>
  )
}`,
    },
  ],
  api: [
    {
      name: 'size',
      description: '控制 Card 的整体内边距密度。',
      type: "'default' | 'sm'",
      defaultValue: "'default'",
    },
    {
      name: 'title',
      description: '卡片标题；存在时自动生成 Header。',
      type: 'ReactNode',
    },
    {
      name: 'description',
      description: '标题下方的辅助说明。',
      type: 'ReactNode',
    },
    {
      name: 'action',
      description: 'Header 右侧的辅助操作。',
      type: 'ReactNode',
    },
    {
      name: 'children',
      description: '卡片主体内容。',
      type: 'ReactNode',
    },
    {
      name: 'footer',
      description: '底部操作或补充信息。',
      type: 'ReactNode',
    },
    {
      name: 'classNames',
      description: '扩展 header、content、footer 等内部区域样式。',
      type: 'CardClassNames',
    },
    {
      name: 'className',
      description: '扩展 Card 根节点样式。',
      type: 'string',
    },
  ],
  accessibility: [
    '标题应准确描述卡片主题，并保持页面标题层级连续。',
    'action 和 footer 中的图标按钮需要提供可访问名称。',
  ],
  pitfalls: [
    '不要把互不相关的信息仅因为视觉需要塞进同一张 Card。',
    '不要在 Header、Content 和 Footer 中重复同一组主要操作。',
  ],
};

const resizableDocumentation: ComponentDocumentation = {
  name: 'Resizable',
  slug: 'resizable',
  summary: '通过可拖动分隔线调整相邻内容区域的尺寸。',
  whenToUse: [
    '文件树、列表或导航需要与详情内容共享同一工作区。',
    '用户需要根据当前任务主动分配相邻区域的可用空间。',
  ],
  examples: [
    {
      title: '可调整的工作区',
      description:
        '拖动文件区和预览区之间的分隔线，或聚焦分隔线后使用方向键调整宽度。',
      wide: true,
      preview: minimalComponentPreviews.resizable,
      code: `import { Resizable } from '@heliannuuthus/ui/resizable'

export function Workspace() {
  return (
    <Resizable
      orientation="horizontal"
      withHandle
      panels={[
        { id: 'files', defaultSize: '34', minSize: '24', content: '文件列表' },
        { id: 'preview', defaultSize: '66', minSize: '40', content: '内容预览' },
      ]}
    />
  )
}`,
    },
  ],
  api: [
    {
      name: 'panels',
      description: '定义每个区域的内容、标识和尺寸约束。',
      type: 'ResizablePanelConfig[]',
    },
    {
      name: 'orientation',
      description: '内容区域的排列方向。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'withHandle',
      description: '在自动生成的分隔线中显示可视拖动标记。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'handleClassName',
      description: '扩展自动生成的分隔线样式。',
      type: 'string',
    },
  ],
  accessibility: [
    '分隔线保持可聚焦，并支持方向键调整相邻区域尺寸。',
    'panels 中的导航和内容仍需使用各自正确的语义结构。',
  ],
  pitfalls: [
    '不要让任一区域缩小到内容无法理解或操作的程度。',
    '移动端空间不足时，应评估是否改用纵向排列或折叠导航。',
  ],
};

const breadcrumbDocumentation: ComponentDocumentation = {
  name: 'Breadcrumb',
  slug: 'breadcrumb',
  summary: '展示当前位置与上级路径，并在层级较深时提供快速返回入口。',
  whenToUse: [
    '页面存在三层以上的稳定信息层级。',
    '用户需要理解当前位置并返回任一上级页面。',
  ],
  examples: [
    {
      title: '页面头部配置器',
      description:
        '在真实页面层级中动态组合首页图标、样式、尺寸、分隔符和深层路径折叠。',
      preview: <BreadcrumbPlaygroundDemo />,
      code: `import { useState } from 'react'
import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb'

const items = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products' },
  { label: '设计系统', href: '/design' },
  { label: '组件库', href: '/components' },
  { label: '导航', menu: navigationItems },
  { label: 'Breadcrumb' },
]

export function PageBreadcrumb() {
  const [compact, setCompact] = useState(true)

  return (
    <Breadcrumb
      items={items}
      homeIcon
      variant="pill"
      separator="dot"
      maxItems={compact ? 4 : undefined}
    />
  )
}`,
      wide: true,
      previewHeight: 640,
    },
  ],
  api: [
    {
      name: 'items',
      description: '设置每一级的名称、链接、图标、禁用状态和下拉菜单。',
      type: 'BreadcrumbItem[]',
    },
    {
      name: 'variant',
      description: '路径项的视觉样式。',
      type: "'default' | 'underline' | 'pill'",
      defaultValue: "'default'",
    },
    {
      name: 'separator',
      description: '设置统一的路径分隔符，也可以传入自己的图标。',
      type: "'chevron' | 'slash' | 'dot' | ReactNode",
      defaultValue: "'chevron'",
    },
    {
      name: 'size',
      description: '控制文字与路径项的整体密度。',
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'maxItems',
      description: '超过数量后将中间路径收进可操作的省略菜单。',
      type: 'number',
    },
    {
      name: 'itemsBeforeCollapse / itemsAfterCollapse',
      description: '控制折叠前后保留的路径项数量。',
      type: 'number',
      defaultValue: '1 / 2',
    },
    {
      name: 'homeIcon',
      description: '为首项显示内置首页图标，或传入自定义图标。',
      type: 'boolean | ReactNode',
      defaultValue: 'false',
    },
  ],
  accessibility: [
    '根节点使用带有 breadcrumb 名称的 nav，路径使用有序列表。',
    '当前页面使用 aria-current，视觉分隔符不进入读屏顺序。',
    '折叠项和层级菜单支持键盘打开与导航。',
  ],
  pitfalls: [
    '不要在只有一到两层页面时增加没有导航价值的 Breadcrumb。',
    '避免展示超过五个可见层级；深层路径应使用 maxItems 收起。',
  ],
};

const dropdownMenuDocumentation: ComponentDocumentation = {
  name: 'Dropdown Menu',
  slug: 'dropdown-menu',
  summary:
    '从一个明确的触发器展开临时操作列表，可承载普通命令、选择状态和分层操作。',
  whenToUse: [
    '当前界面没有足够空间直接展示一组次要操作。',
    '操作与某个按钮、对象或局部上下文紧密相关。',
  ],
  examples: [
    {
      title: '常用操作',
      description: '一个 items 数组同时描述图标、快捷键、禁用状态和危险操作。',
      preview: <DropdownMenuActionsDemo />,
      code: `import { Button } from '@heliannuuthus/ui/button'
import { DropdownMenu } from '@heliannuuthus/ui/dropdown-menu'
import { FilePlus2, Trash2 } from 'lucide-react'

<DropdownMenu
  trigger={<Button variant="outline">文件操作</Button>}
  items={[
    { type: 'label', label: '文件操作' },
    { label: '新建文件', icon: <FilePlus2 />, shortcut: '⌘N' },
    { label: '创建副本', disabled: true },
    { type: 'separator' },
    { label: '移至废纸篓', icon: <Trash2 />, destructive: true },
  ]}
/>`,
    },
    {
      title: '选择与状态',
      description: 'checkbox 表达可独立切换的设置，radio 表达一组互斥选项。',
      preview: <DropdownMenuSelectionDemo />,
      code: `import { useState } from 'react'
import { Button } from '@heliannuuthus/ui/button'
import { DropdownMenu } from '@heliannuuthus/ui/dropdown-menu'

export function ViewSettings() {
  const [sidebar, setSidebar] = useState(true)
  const [density, setDensity] = useState('comfortable')

  return (
    <DropdownMenu
      trigger={<Button variant="outline">视图设置</Button>}
      items={[
        {
          type: 'checkbox',
          label: '显示侧栏',
          checked: sidebar,
          onCheckedChange: setSidebar,
        },
        { type: 'separator' },
        {
          type: 'radio',
          value: density,
          onValueChange: setDensity,
          items: [
            { label: '紧凑', value: 'compact' },
            { label: '舒适', value: 'comfortable' },
          ],
        },
      ]}
    />
  )
}`,
    },
    {
      title: '子菜单与尺寸',
      description:
        '带 children 的操作自动形成子菜单；size 统一控制菜单的密度和宽度。',
      preview: <DropdownMenuSubmenuDemo />,
      code: `import { Button } from '@heliannuuthus/ui/button'
import { DropdownMenu } from '@heliannuuthus/ui/dropdown-menu'

<DropdownMenu
  size="lg"
  align="end"
  trigger={<Button>导出</Button>}
  items={[
    {
      label: '导出为',
      children: [
        { label: 'PDF 文档', onSelect: exportPdf },
        { label: 'PNG 图片', onSelect: exportPng },
        { label: 'CSV 表格', onSelect: exportCsv },
      ],
    },
    { type: 'separator' },
    { label: '下载原始文件', onSelect: downloadOriginal },
  ]}
/>`,
    },
  ],
  api: [
    {
      name: 'trigger',
      description: '打开菜单的按钮或其他可交互元素。',
      type: 'ReactElement',
    },
    {
      name: 'items',
      description: '描述操作、分组标题、分隔线、勾选项、单选组和子菜单。',
      type: 'DropdownMenuEntry[]',
    },
    {
      name: 'size',
      description: '控制菜单项密度和菜单最小宽度。',
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'align',
      description: '菜单相对触发器的对齐方式。',
      type: "'start' | 'center' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'side',
      description: '菜单优先出现的方向；空间不足时会自动避让。',
      type: "'top' | 'right' | 'bottom' | 'left'",
      defaultValue: "'bottom'",
    },
    {
      name: 'open / defaultOpen / onOpenChange',
      description: '以受控或非受控方式管理菜单开关状态。',
      type: 'boolean / boolean / (open: boolean) => void',
    },
  ],
  accessibility: [
    '触发器需要提供可理解的文字或 aria-label，并支持 Enter、Space 和方向键打开菜单。',
    '菜单项保持明确的动作名称；仅图标不足以表达操作含义。',
    '危险操作使用 destructive 进行视觉提示，但最终删除仍应提供确认或撤销能力。',
  ],
  pitfalls: [
    '不要把主要操作藏进菜单；高频主要动作应直接显示在界面上。',
    '避免超过两层子菜单，过深的结构会增加指针和键盘操作成本。',
  ],
};

const menubarDocumentation: ComponentDocumentation = {
  name: 'Menubar',
  slug: 'menubar',
  summary: '组织桌面应用式的顶层命令，让多组全局操作在稳定位置中被发现和执行。',
  whenToUse: [
    '产品具有文件、编辑、视图等跨页面或跨内容的全局命令。',
    '用户需要通过键盘连续切换多个顶层菜单并执行高密度操作。',
  ],
  examples: [
    {
      title: '应用命令',
      description:
        '文件和编辑菜单包含分组、图标、快捷键、禁用状态与危险操作，并提供实际反馈。',
      wide: true,
      previewHeight: 500,
      preview: <MenubarCommandsDemo />,
      code: `import { Menubar } from '@heliannuuthus/ui/menubar'

<Menubar
  menus={[
    {
      label: '文件',
      items: [
        { type: 'label', label: '文档' },
        { label: '新建文档', shortcut: '⌘N', onSelect: createDocument },
        { label: '保存', shortcut: '⌘S', onSelect: saveDocument },
        { type: 'separator' },
        { label: '移至废纸篓', destructive: true, onSelect: removeDocument },
      ],
    },
    {
      label: '编辑',
      items: [
        { label: '撤销', shortcut: '⌘Z', onSelect: undo },
        { label: '重做', shortcut: '⇧⌘Z', disabled: true },
      ],
    },
  ]}
/>`,
    },
    {
      title: '可选视图状态',
      description:
        'checkbox 控制可独立开关的视图项，radio 管理互斥主题，并把状态同步到内容区。',
      wide: true,
      previewHeight: 500,
      preview: <MenubarViewDemo />,
      code: `import { useState } from 'react'
import { Menubar } from '@heliannuuthus/ui/menubar'

export function ViewMenubar() {
  const [sidebar, setSidebar] = useState(true)
  const [theme, setTheme] = useState('system')

  return (
    <Menubar
      menus={[
        {
          label: '视图',
          items: [
            {
              type: 'checkbox',
              label: '显示侧栏',
              checked: sidebar,
              onCheckedChange: setSidebar,
            },
            { type: 'separator' },
            {
              type: 'radio',
              value: theme,
              onValueChange: setTheme,
              items: [
                { label: '跟随系统', value: 'system' },
                { label: '浅色', value: 'light' },
                { label: '深色', value: 'dark' },
              ],
            },
          ],
        },
      ]}
    />
  )
}`,
    },
    {
      title: '二级菜单与顶层状态',
      description:
        '在组件文档工作台中用 children 组织最近组件与导出格式，顶层菜单同时支持禁用状态。',
      wide: true,
      previewHeight: 500,
      preview: <MenubarNestedDemo />,
      code: `import { Menubar } from '@heliannuuthus/ui/menubar'

<Menubar
  size="lg"
  menus={[
    {
      label: '组件',
      items: [
        {
          label: '最近编辑',
          children: [
            { label: 'Menubar', onSelect: openMenubarDocs },
            { label: 'Navigation Menu', onSelect: openNavigationDocs },
          ],
        },
      ],
    },
    { label: '发布', disabled: true, items: [] },
  ]}
/>`,
    },
  ],
  api: [
    {
      name: 'menus',
      description: '定义顶层菜单名称、禁用状态和每组内部命令。',
      type: 'MenubarMenuConfig[]',
    },
    {
      name: 'menus[].items',
      description: '承载普通命令、标题、分隔线、勾选项、单选组及二级菜单。',
      type: 'DropdownMenuEntry[]',
    },
    {
      name: 'size',
      description: '控制顶层菜单栏与触发项的整体密度。',
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'loop',
      description: '控制方向键导航到边界后是否循环。',
      type: 'boolean',
      defaultValue: 'true',
    },
  ],
  accessibility: [
    '顶层菜单支持左右方向键切换，菜单内部使用上下方向键移动焦点。',
    '快捷键文本只提供提示；应用仍需自行注册对应的全局键盘命令。',
    '菜单名称和命令名称应直接表达动作，不要仅依赖图标。',
  ],
  pitfalls: [
    'Menubar 面向全局命令，不适合替代站点主导航或页面标签页。',
    '不要把所有页面操作塞进顶层菜单，应保留稳定且跨上下文的命令。',
  ],
};

const navigationMenuDocumentation: ComponentDocumentation = {
  name: 'Navigation Menu',
  slug: 'navigation-menu',
  summary:
    '组织站点或产品的主要入口，并在需要时展开带有说明和分组的丰富导航面板。',
  whenToUse: [
    '一级入口需要同时展示分类、说明或推荐内容。',
    '站点导航需要兼顾直接链接和可展开的内容分组。',
  ],
  examples: [
    {
      title: '产品级大菜单',
      description:
        '把产品入口、资源入口和当前页面放入同一条站点导航，弹层宽度随内容平滑变化。',
      wide: true,
      previewHeight: 500,
      preview: <NavigationMenuMegaDemo />,
      code: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@heliannuuthus/ui/navigation-menu'

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>产品</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/components">组件库</NavigationMenuLink>
        <NavigationMenuLink href="/tokens">设计令牌</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink active href="/components">组件</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    },
    {
      title: '局部导航与对齐',
      description:
        '在工具栏右侧使用较小内容面板，并通过 align 控制弹层相对导航的对齐方式。',
      preview: <NavigationMenuCompactDemo />,
      code: `<NavigationMenu align="end">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>产品</NavigationMenuTrigger>
      <NavigationMenuContent>{/* compact links */}</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    },
  ],
  api: [
    {
      name: 'align',
      description: '控制弹层相对导航根节点的水平对齐方式。',
      type: "'start' | 'center' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'NavigationMenuTrigger',
      description: '打开一组富导航内容的顶层入口。',
      type: 'NavigationMenuPrimitive.Trigger.Props',
    },
    {
      name: 'NavigationMenuLink',
      description: '直接导航到目标页面，active 表示当前位置。',
      type: 'NavigationMenuPrimitive.Link.Props',
    },
    {
      name: 'NavigationMenuContent',
      description: '承载分组链接、说明或推荐入口的弹出内容。',
      type: 'NavigationMenuPrimitive.Content.Props',
    },
  ],
  accessibility: [
    '顶层入口和弹层链接支持键盘聚焦与方向键导航。',
    '当前页面使用 active 状态，并保持链接文字能独立表达目标。',
  ],
  pitfalls: [
    '不要用大菜单隐藏唯一的主要行动；高频入口应保持直接可见。',
    '避免在弹层中继续嵌套第三层导航。',
  ],
};

const paginationDocumentation: ComponentDocumentation = {
  name: 'Pagination',
  slug: 'pagination',
  summary: '在分段数据集合之间导航，并明确当前页、相邻页和数据范围。',
  whenToUse: [
    '完整数据无法在一个视图中高效加载或理解。',
    '用户需要在当前位置附近跳转，或返回之前浏览的结果页。',
  ],
  examples: [
    {
      title: '受控分页',
      description: '页码、上一页和下一页共同更新当前状态，并在边界停止。',
      preview: <PaginationControlledDemo />,
      code: `const [page, setPage] = useState(3)

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={() => setPage(page - 1)} />
    </PaginationItem>
    {[1, 2, 3, 4, 5].map((value) => (
      <PaginationItem key={value}>
        <PaginationLink isActive={page === value}>{value}</PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext onClick={() => setPage(page + 1)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    },
    {
      title: '大量数据与省略',
      description: '保留首页、末页和当前页附近范围，其余页码用省略标记收起。',
      preview: <PaginationOverflowDemo />,
      code: `<Pagination>
  <PaginationContent>
    <PaginationPrevious text="上一页" />
    <PaginationLink>1</PaginationLink>
    <PaginationEllipsis />
    <PaginationLink>23</PaginationLink>
    <PaginationLink isActive>24</PaginationLink>
    <PaginationLink>25</PaginationLink>
    <PaginationEllipsis />
    <PaginationLink>80</PaginationLink>
    <PaginationNext text="下一页" />
  </PaginationContent>
</Pagination>`,
    },
  ],
  api: [
    {
      name: 'isActive',
      description: '标识当前页面并设置 aria-current。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'text',
      description: '自定义上一页和下一页的可见文字。',
      type: 'string',
      defaultValue: "'Previous' / 'Next'",
    },
    {
      name: 'href',
      description: '为页码提供可复制、可打开新窗口的真实地址。',
      type: 'string',
    },
  ],
  accessibility: [
    '当前页使用 aria-current，上一页和下一页保留明确的可访问名称。',
    '不可用的边界操作同时设置 aria-disabled 并阻止导航。',
  ],
  pitfalls: [
    '不要一次展示所有页码；长范围应围绕当前页进行压缩。',
    '如果数据天然适合连续浏览，应评估加载更多或虚拟滚动。',
  ],
};

const tabsDocumentation: ComponentDocumentation = {
  name: 'Tabs',
  slug: 'tabs',
  summary: '在同一上下文中切换互斥内容，同时保持页面位置和任务连续性。',
  whenToUse: [
    '多组内容处于同一层级，并且用户通常只需要查看其中一组。',
    '切换内容不应改变页面主路径或丢失当前任务上下文。',
  ],
  examples: [
    {
      title: '数据面板',
      description: '默认样式承载概览、动态与成员数据，切换后内容区域保持稳定。',
      preview: <TabsDashboardDemo />,
      code: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">概览</TabsTrigger>
    <TabsTrigger value="activity">动态</TabsTrigger>
    <TabsTrigger value="members">成员</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">概览数据</TabsContent>
  <TabsContent value="activity">最近动态</TabsContent>
  <TabsContent value="members">成员列表</TabsContent>
</Tabs>`,
    },
    {
      title: '四种样式与快捷居中',
      description:
        '胶囊、线型、描边和柔和样式覆盖不同层级；centered 可直接让标签列表居中。',
      wide: true,
      previewHeight: 420,
      preview: <TabsVariantsDemo />,
      code: `<Tabs defaultValue="preview">
  <TabsList variant="line" centered>
    <TabsTrigger value="preview">预览</TabsTrigger>
    <TabsTrigger value="code">代码</TabsTrigger>
    <TabsTrigger value="tests">测试</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">实时预览当前组件。</TabsContent>
</Tabs>`,
    },
    {
      title: '内容切换动效',
      description:
        '在淡入、方向滑动和关闭动效之间即时切换；系统减少动态效果时自动降级。',
      preview: <TabsMotionDemo />,
      code: `<Tabs defaultValue="design" animation="slide">
  <TabsList variant="soft" centered>
    <TabsTrigger value="design">设计</TabsTrigger>
    <TabsTrigger value="code">开发</TabsTrigger>
    <TabsTrigger value="release">发布</TabsTrigger>
  </TabsList>
  <TabsContent value="design">整理组件视觉规范</TabsContent>
  <TabsContent value="code">连接组件与业务状态</TabsContent>
  <TabsContent value="release">完成验证并发布</TabsContent>
</Tabs>`,
      wide: true,
      previewHeight: 520,
    },
  ],
  api: [
    {
      name: 'defaultValue / value',
      description: '以非受控或受控方式指定当前标签。',
      type: 'string',
    },
    {
      name: 'orientation',
      description: '设置标签水平或纵向排列。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'variant',
      description: '切换胶囊、线型、描边或柔和指示器。',
      type: "'default' | 'line' | 'outline' | 'soft'",
      defaultValue: "'default'",
    },
    {
      name: 'animation',
      description: '设置面板内容的切换动效。',
      type: "'none' | 'fade' | 'slide'",
      defaultValue: "'fade'",
    },
    {
      name: 'centered',
      description: '在 TabsList 上快速居中标签列表。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  accessibility: [
    '标签列表、标签和面板之间保留正确的 ARIA 关联。',
    '水平标签使用左右方向键，纵向标签使用上下方向键移动。',
  ],
  pitfalls: [
    '不要用 Tabs 表达有前后依赖的步骤流程。',
    '标签过多时应减少分组或改用导航，不应挤压到无法辨认。',
  ],
};

const sidebarDocumentation: ComponentDocumentation = {
  name: 'Sidebar',
  slug: 'sidebar',
  summary:
    '承载产品级导航、工作区切换和辅助操作，并在不同屏幕宽度下折叠或转为抽屉。',
  whenToUse: [
    '产品具有稳定的多模块结构，需要持续可见的导航入口。',
    '桌面端需要折叠为图标导航，移动端需要转换为临时面板。',
  ],
  examples: [
    {
      title: '可折叠工作区',
      description:
        '包含品牌、搜索、分组导航、数量标记、页脚和内容区；点击左上角按钮折叠为图标模式。',
      wide: true,
      previewHeight: 560,
      preview: <SidebarWorkspaceDemo />,
      code: `<SidebarProvider>
  <Sidebar variant="inset" collapsible="icon">
    <SidebarHeader>
      <SidebarInput placeholder="搜索工作区" />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>工作区</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>{/* navigation items */}</SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>{/* settings */}</SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    {/* page content */}
  </SidebarInset>
</SidebarProvider>`,
    },
  ],
  api: [
    {
      name: 'defaultOpen / open / onOpenChange',
      description: '管理桌面侧栏的展开状态。',
      type: 'boolean / boolean / (open: boolean) => void',
    },
    {
      name: 'variant',
      description: '选择贴边、浮动或嵌入内容区的外观。',
      type: "'sidebar' | 'floating' | 'inset'",
      defaultValue: "'sidebar'",
    },
    {
      name: 'collapsible',
      description: '设置移出屏幕、折叠为图标或始终展开。',
      type: "'offcanvas' | 'icon' | 'none'",
      defaultValue: "'offcanvas'",
    },
    {
      name: 'side',
      description: '将侧栏放在内容左侧或右侧。',
      type: "'left' | 'right'",
      defaultValue: "'left'",
    },
  ],
  accessibility: [
    '折叠按钮提供可访问名称，并支持 Ctrl/Command + B 快捷键。',
    '折叠为图标后，导航入口仍需通过 Tooltip 提供文字名称。',
  ],
  pitfalls: [
    '不要把页面内的少量筛选项升级成产品级 Sidebar。',
    '折叠状态不能只依赖图标形状表达导航含义。',
  ],
};

export const componentDocumentation: Record<string, ComponentDocumentation> = {
  button: buttonDocumentation,
  typography: typographyDocumentation,
  badge: badgeDocumentation,
  kbd: kbdDocumentation,
  separator: separatorDocumentation,
  'aspect-ratio': aspectRatioDocumentation,
  card: cardDocumentation,
  resizable: resizableDocumentation,
  breadcrumb: breadcrumbDocumentation,
  'dropdown-menu': dropdownMenuDocumentation,
  menubar: menubarDocumentation,
  'navigation-menu': navigationMenuDocumentation,
  pagination: paginationDocumentation,
  sidebar: sidebarDocumentation,
  tabs: tabsDocumentation,
};

const componentUsageGuidance: Record<string, string[]> = {
  group: [
    '多个输入、选择或操作需要共享边框、焦点状态和紧凑排列时使用。',
    '需要在控件前后放置单位、前缀、说明或内联操作时使用。',
  ],
  'scroll-area': [
    '内容需要限制在明确高度或宽度内，同时仍允许用户完整浏览时使用。',
    '需要统一局部滚动条外观时使用；页面级滚动仍交给浏览器处理。',
  ],
  checkbox: [
    '从一组选项中选择任意多个值，或确认一项需要随表单提交的声明。',
    '单个二态设置若点击后应立即生效，应优先使用 Switch。',
  ],
  combobox: [
    '候选项较多，用户通常知道关键词并需要通过输入缩小范围时使用。',
    '候选项较少且固定时优先使用 Select；选项全部可见时可使用 Radio。',
  ],
  'date-picker': [
    '表单、筛选或排期任务需要选择准确日期时使用。',
    '需要持续查看月份上下文时使用内联日历，紧凑表单中使用弹出选择。',
  ],
  form: [
    '需要收集、校验并提交一组相关信息时使用。',
    '字段需要统一标签、说明、错误反馈和受控状态时使用。',
  ],
  input: [
    '表单需要输入单行文本、邮箱、密码、搜索词或验证码时使用。',
    '需要多行长文本时使用 Textarea；固定候选项不要使用自由输入。',
  ],
  radio: [
    '需要从少量、全部可见且互斥的选项中选择一个值时使用。',
    '选项通常保持在 2–5 个；更多候选项应使用 Select 或 Combobox。',
  ],
  select: [
    '候选项固定但不适合全部平铺，用户需要从列表中选择一个值时使用。',
    '候选项很多且依赖关键词查找时使用 Combobox，简单场景可使用 NativeSelect。',
  ],
  slider: [
    '用户需要通过位置直观选择近似数值或连续范围时使用。',
    '金额、数量等要求精确输入时，应同时提供可编辑数值或改用数字输入。',
  ],
  switch: [
    '单个设置需要在切换后立即生效，并明确表达开启与关闭状态时使用。',
    '需要等待提交后才生效，或属于多选题时使用 Checkbox。',
  ],
  textarea: [
    '需要输入备注、说明、反馈等可换行长文本时使用。',
    '应提供清晰标签；存在长度约束时同步展示字数和错误反馈。',
  ],
  toggle: [
    '工具栏中的单个模式需要在按下与未按下之间切换时使用。',
    '切换结果应即时可见；普通动作仍使用 Button。',
  ],
  'toggle-group': [
    '一组紧凑工具需要支持单选或多选按下状态时使用。',
    '不要用它承担页面导航；内容视图切换应使用 Tabs。',
  ],
  accordion: [
    '多段较长或不规则内容需要渐进展开，以减少页面初始信息量时使用。',
    '内容彼此独立且同时只需查看一项时使用单开模式。',
  ],
  attachment: [
    '需要展示文件名称、类型、大小以及上传、处理或失败状态时使用。',
    '附件需要预览、重试、下载或移除等与文件直接相关的操作时使用。',
  ],
  avatar: [
    '需要快速识别用户、团队或组织，并以图片或文字回退展示身份时使用。',
    '多人参与或在线状态需要紧凑呈现时使用 AvatarGroup。',
  ],
  bubble: [
    '对话界面需要呈现一段具体发言、回复或系统生成内容时使用。',
    '说话人、时间和状态属于完整会话记录时，应与 Message 组合。',
  ],
  carousel: [
    '3–5 个同层级图片或卡片需要在有限空间内轮播时使用。',
    '关键内容不要只放在自动轮播中，并始终提供当前位置和方向提示。',
  ],
  chart: [
    '需要比较趋势、比例或类别关系，图形比表格更易理解时使用。',
    '必须同时提供图例、单位和可访问的数据摘要，精确值仍可配合 Table。',
  ],
  collapsible: [
    '单个辅助区域需要独立展开或收起时使用。',
    '多个同级区域需要统一管理展开状态时使用 Accordion。',
  ],
  'data-table': [
    '结构化数据需要排序、搜索、筛选或分页等交互时使用。',
    '只有少量静态行列时使用 Table，避免引入不必要的状态管理。',
  ],
  empty: [
    '列表尚无内容、筛选无结果或首次使用需要解释下一步时使用。',
    '应说明空状态原因，并在存在明确恢复路径时提供主要操作。',
  ],
  'hover-card': [
    '悬停或聚焦一个已知对象时，需要补充人物、链接或资源预览时使用。',
    '完成任务所必需的信息不能只存在于 Hover Card 中。',
  ],
  item: [
    '列表需要重复呈现标题、说明、媒体和行级操作时使用。',
    '同一列表中的 Item 应保持一致的信息顺序和操作位置。',
  ],
  marker: [
    '内容流中需要用短标签、图标或分隔线标记时间、状态或上下文时使用。',
    'Marker 只补充阅读线索，不应替代标题或可交互控件。',
  ],
  message: [
    '会话需要呈现说话人、内容、时间和发送状态组成的完整消息单元时使用。',
    '只需要气泡外观时使用 Bubble；长消息流再与 MessageScroller 组合。',
  ],
  'message-scroller': [
    '聊天或日志持续追加内容，需要保持最新消息可见并允许回看历史时使用。',
    '用户离开底部后应保留阅读位置，并提供明确的回到底部入口。',
  ],
  table: [
    '需要用语义化行列展示少量静态结构化数据并便于横向比较时使用。',
    '需要排序、筛选、搜索和分页时使用 DataTable。',
  ],
  tooltip: [
    '图标、缩写或被截断内容需要一段简短、非交互说明时使用。',
    '需要链接、按钮或较长富内容时使用 Popover，并确保键盘可触发。',
  ],
  alert: [
    '页面或区域中需要持续展示重要状态、风险或处理建议时使用。',
    '短暂操作结果使用 Toast；必须立即决策的重要信息使用 Dialog。',
  ],
  'alert-dialog': [
    '删除、覆盖或离开未保存内容等高风险操作需要用户明确确认时使用。',
    '确认文案应说明具体后果，并让安全操作默认获得焦点。',
  ],
  dialog: [
    '用户需要在不离开当前页面的情况下完成一个聚焦任务时使用。',
    '简单补充信息使用 Popover；轻量确认可使用 AlertDialog。',
  ],
  drawer: [
    '移动端或触控场景需要从边缘拉出补充任务，同时保留原页面上下文时使用。',
    '内容过长或任务过于复杂时应改用独立页面。',
  ],
  popover: [
    '触发器附近需要展示补充信息、表单或少量操作时使用。',
    '只有简短文字说明时使用 Tooltip；主要任务使用 Dialog。',
  ],
  progress: [
    '任务具有可计算完成比例，需要持续反馈进度时使用。',
    '无法计算进度的短时等待使用 Spinner，较长任务应同时说明当前阶段。',
  ],
  sheet: [
    '桌面端需要从屏幕边缘打开筛选、详情或辅助导航面板时使用。',
    '主任务不可被遮挡或面板需要永久存在时，应使用页面内布局。',
  ],
  skeleton: [
    '页面首次加载且内容结构可预期，需要减少布局跳动时使用。',
    '局部短操作使用 Spinner；骨架形状应尽量匹配最终内容。',
  ],
  sonner: [
    '应用需要统一管理可堆叠、自动消失的全局操作反馈时使用。',
    '重要失败不能只依赖短暂通知，应在页面内保留错误或升级为 Dialog。',
  ],
  spinner: [
    '局部操作正在进行且无法计算完成比例，等待时间较短时使用。',
    '应靠近受影响区域并配合文字说明，避免让整个页面无原因地旋转。',
  ],
  toast: [
    '保存、复制或发送等操作完成后，需要不阻断流程地反馈结果时使用。',
    '反馈应简短并自动消失；需要持续处理的信息使用 Alert。',
  ],
  command: [
    '高频用户需要通过键盘搜索并执行跨页面命令时使用。',
    '命令名称应可搜索且动词明确，高风险操作仍需二次确认。',
  ],
  'context-menu': [
    '鼠标右键或长按某个对象时，需要提供与该对象直接相关的次要操作。',
    '关键操作不能只存在于 ContextMenu，应为触控和键盘用户保留替代入口。',
  ],
  direction: [
    '应用或局部组件树需要切换 LTR 与 RTL 书写方向时使用。',
    '应在稳定边界统一设置方向，并验证图标、动画和键盘方向是否正确镜像。',
  ],
};

const remainingComponents = [
  ['Group', 'group', '在统一布局表面中组合多个表单控件。'],
  ['Scroll Area', 'scroll-area', '为受限区域提供一致的滚动体验。'],
  ['Checkbox', 'checkbox', '控制可独立选择的布尔选项。'],
  ['Combobox', 'combobox', '通过输入搜索并选择候选值。'],
  ['Date Picker', 'date-picker', '通过内联日历或弹出触发器选择单个日期。'],
  ['Form', 'form', '组织字段结构，并连接状态、校验与提交行为。'],
  ['Input', 'input', '接收单行文本或特定格式内容。'],
  ['Radio', 'radio', '单独选择一个选项，或通过 RadioGroup 组织互斥选择。'],
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
    whenToUse: componentUsageGuidance[slug] ?? [
      `需要${summary.replace(/[。]$/, '')}时。`,
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
  if (!documentation || documentation.examples.length > 0) continue;
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

const dataEntryExamples: Record<string, ComponentExample[]> = {
  checkbox: [
    {
      title: '权限组合',
      description: '将多个独立布尔选项组成权限列表，并即时反馈已开启数量。',
      preview: <CheckboxPermissionsDemo />,
      code: `<Checkbox checked={enabled} onCheckedChange={setEnabled} />`,
      previewHeight: 380,
    },
  ],
  combobox: [
    {
      title: '搜索并选择成员',
      description:
        '候选项较多且用户知道关键词时，允许输入过滤、清除并重新选择。',
      preview: <ComboboxMemberDemo />,
      code: `<Combobox value={value} onValueChange={setValue} items={members}>
  <ComboboxInput placeholder="搜索成员…" showClear />
  <ComboboxContent>
    <ComboboxEmpty>没有找到成员</ComboboxEmpty>
    <ComboboxList>{/* ComboboxItem */}</ComboboxList>
  </ComboboxContent>
</Combobox>`,
      previewHeight: 320,
    },
  ],
  'date-picker': [
    {
      title: '内联日历',
      description:
        '需要持续查看月份与排期上下文时，使用 inline 展示形式并同步反馈选择结果。',
      preview: <DatePickerInlineDemo />,
      code: `const [date, setDate] = useState<Date>()

<DatePicker display="inline" value={date} onChange={setDate} />`,
      wide: true,
      previewHeight: 500,
    },
    {
      title: '定时发布',
      description: '在紧凑设置行中选择或清除发布日期，适合表单和筛选器。',
      preview: <DatePickerReleaseDemo />,
      code: `<DatePicker
  value={date}
  onChange={setDate}
  placeholder="选择发布日期"
/>`,
      wide: true,
      previewHeight: 300,
    },
  ],
  form: [
    {
      title: '字段结构与状态',
      description: '同时展示标签、说明、错误信息，以及适合设置项的水平字段。',
      preview: <FieldProfileDemo />,
      code: `import { Field, FieldError, FieldLabel } from '@heliannuuthus/ui/form'

<Field data-invalid="true">
  <FieldLabel htmlFor="handle">个人标识</FieldLabel>
  <Input id="handle" aria-invalid />
  <FieldError>只能使用小写字母、数字和连字符。</FieldError>
</Field>`,
      wide: true,
      previewHeight: 500,
    },
    {
      title: '标签关联与必要性',
      description:
        'Label 通过 htmlFor 关联真实控件；必填标记和可选提示作为 Field 的辅助信息。',
      preview: <FieldLabelPairingDemo />,
      code: `import { Field, FieldDescription, FieldLabel } from '@heliannuuthus/ui/form'

<Field>
  <FieldLabel htmlFor="team-name">团队名称 *</FieldLabel>
  <Input id="team-name" required />
</Field>

<Field>
  <FieldLabel htmlFor="role">职位</FieldLabel>
  <Input id="role" />
  <FieldDescription>可选</FieldDescription>
</Field>`,
      wide: true,
      previewHeight: 340,
    },
    {
      title: '带校验的邀请表单',
      description: '连接 react-hook-form，展示必填校验、错误关联和提交结果。',
      preview: <FormInviteDemo />,
      code: `import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@heliannuuthus/ui/form'

const form = useForm({ defaultValues: { email: '', note: '' } })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      rules={{ required: '请输入邮箱地址。' }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>邮箱地址</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>`,
      wide: true,
      previewHeight: 560,
    },
  ],
  input: [
    {
      title: '字段状态',
      description:
        '在同一组中比较默认、校验失败、只读和禁用输入，避免混淆语义。',
      preview: <InputStatesDemo />,
      code: `<Input defaultValue="设计系统迁移" />
<Input aria-invalid defaultValue="my workspace" />
<Input value="UI-2048" readOnly />
<Input value="项目进行中" disabled />`,
      wide: true,
      previewHeight: 340,
    },
    {
      title: '前后缀与块级附加内容',
      description:
        '组合固定前缀、复制动作和文本计数；附加内容始终服务于同一输入任务。',
      preview: <GroupCompositionDemo />,
      code: `<Group>
  <GroupAddon>ui.dev/</GroupAddon>
  <Input defaultValue="docs" />
  <GroupAddon align="inline-end">
    <Button variant="ghost" size="xs">复制</Button>
  </GroupAddon>
</Group>`,
      wide: true,
      previewHeight: 480,
    },
    {
      title: '验证码形态',
      description:
        '设置 variant 即可切换连续方块、分段方块与独立方块，三种形态共享同一份验证码状态。',
      preview: <InputOtpVerificationDemo />,
      code: `<Input
  type="otp"
  maxLength={6}
  value={value}
  onChange={setValue}
  variant="connected"
/>

<Input type="otp" maxLength={6} variant="segmented" />

<Input type="otp" maxLength={6} variant="separated" />`,
      wide: true,
      previewHeight: 660,
    },
  ],
  radio: [
    {
      title: '方案单选卡',
      description: '将互斥选项扩展为整行可点击的卡片，同时保留原生单选语义。',
      preview: <RadioPlanDemo />,
      code: `<Radio
  checked={recommended}
  onCheckedChange={setRecommended}
/>

<RadioGroup value={plan} onValueChange={setPlan}>
  <label><Radio value="free" />个人版</label>
  <label><Radio value="team" />团队版</label>
</RadioGroup>`,
      wide: true,
      previewHeight: 430,
    },
  ],
  select: [
    {
      title: '分组选择',
      description:
        '当候选项固定且不需要搜索时，用分组、分隔线和禁用项明确列表结构。',
      preview: <SelectWorkspaceDemo />,
      code: `<Select value={value} onValueChange={setValue}>
  <SelectTrigger><SelectValue placeholder="选择工作区" /></SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>我的工作区</SelectLabel>
      <SelectItem value="design">设计系统</SelectItem>
    </SelectGroup>
      </SelectContent>
</Select>`,
      wide: true,
      previewHeight: 380,
    },
    {
      title: '原生选择',
      description:
        '选项简单且优先使用系统交互时，使用 NativeSelect；同样支持分组、尺寸和禁用状态。',
      preview: <SelectNativeDemo />,
      code: `<NativeSelect defaultValue="cn-east">
  <NativeSelectOptGroup label="中国大陆">
    <NativeSelectOption value="cn-east">华东</NativeSelectOption>
    <NativeSelectOption value="cn-north">华北</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`,
      wide: true,
      previewHeight: 340,
    },
  ],
  slider: [
    {
      title: '范围选择',
      description: '使用双滑块选择预算区间，并把当前值与范围边界直接展示出来。',
      preview: <SliderBudgetDemo />,
      code: `<Slider
  value={range}
  onValueChange={setRange}
  min={0}
  max={100}
  step={2}
/>`,
    },
  ],
  switch: [
    {
      title: '设置列表',
      description: '开关立即更新设置；不可关闭的系统项通过禁用状态解释约束。',
      preview: <SwitchSettingsDemo />,
      code: `<Switch checked={enabled} onCheckedChange={setEnabled} />
<Switch checked disabled />`,
      previewHeight: 390,
    },
  ],
  textarea: [
    {
      title: '带字数反馈的说明',
      description: '为长文本提供清楚的标签、字符上限、当前计数和提交条件。',
      preview: <TextareaCounterDemo />,
      code: `<Textarea
  value={value}
  maxLength={120}
  onChange={(event) => setValue(event.target.value)}
/>`,
      wide: true,
      previewHeight: 380,
    },
  ],
};

for (const [slug, examples] of Object.entries(dataEntryExamples)) {
  componentDocumentation[slug]?.examples.push(...examples);
}

const scenarioExamples: Record<string, ComponentExample[]> = {
  accordion: [
    {
      title: '渐进展开信息',
      description: '常见问题保持标题可扫描，只在用户需要时展开详细答案。',
      preview: <AccordionScenarioDemo />,
      code: `<Accordion defaultValue={['account']}>
  <AccordionItem value="account">
    <AccordionTrigger>如何修改工作区名称？</AccordionTrigger>
    <AccordionContent>在工作区设置中修改。</AccordionContent>
  </AccordionItem>
</Accordion>`,
    },
  ],
  attachment: [
    {
      title: '文件生命周期',
      description:
        '同时展示文件元信息、完成与失败状态，以及和文件直接相关的操作。',
      preview: <AttachmentScenarioDemo />,
      code: `<Attachment state="done">
  <AttachmentMedia><FileText /></AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>产品需求说明.pdf</AttachmentTitle>
    <AttachmentDescription>2.4 MB · 上传完成</AttachmentDescription>
  </AttachmentContent>
</Attachment>`,
    },
  ],
  carousel: [
    {
      title: '同层内容轮播',
      description:
        '用明确的前后操作浏览少量同层卡片，并让用户始终知道当前位置。',
      preview: <CarouselScenarioDemo />,
      code: `<Carousel opts={{ loop: true }}>
  <CarouselContent>
    <CarouselItem>建立结构</CarouselItem>
    <CarouselItem>完善状态</CarouselItem>
    <CarouselItem>交付验证</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
      previewHeight: 310,
    },
  ],
  chart: [
    {
      title: '趋势比较',
      description:
        '使用一致的单位和图例比较月度趋势，精确数据仍可由 Tooltip 补充。',
      preview: <ChartScenarioDemo />,
      code: `<ChartContainer config={{ visits: { label: '访问量', color: 'var(--primary)' } }}>
  <BarChart data={data} accessibilityLayer>
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="visits" fill="var(--color-visits)" />
  </BarChart>
</ChartContainer>`,
      wide: true,
      previewHeight: 400,
    },
  ],
  collapsible: [
    {
      title: '单区块展开',
      description: '让低频高级选项保持收起，同时保留清晰的触发器和当前上下文。',
      preview: <CollapsibleScenarioDemo />,
      code: `<Collapsible>
  <CollapsibleTrigger>展开高级筛选</CollapsibleTrigger>
  <CollapsibleContent>负责人：全部成员</CollapsibleContent>
</Collapsible>`,
    },
  ],
  table: [
    {
      title: '可操作数据表',
      description:
        '当结构化数据需要搜索、排序和分页时，在语义 Table 上组合 DataTable。',
      preview: <DataTableScenarioDemo />,
      code: `<DataTable
  columns={columns}
  data={members}
  filterColumn="name"
  filterPlaceholder="搜索成员…"
/>`,
      wide: true,
      previewHeight: 480,
    },
  ],
  'hover-card': [
    {
      title: '对象预览',
      description:
        '悬停或聚焦成员链接时补充身份与活动信息，不隐藏完成任务所需内容。',
      preview: <HoverCardScenarioDemo />,
      code: `<HoverCard>
  <HoverCardTrigger render={<a href="/members/linxia">@林夏</a>} />
  <HoverCardContent>产品设计师 · 最近参与 8 个组件评审</HoverCardContent>
</HoverCard>`,
    },
  ],
  item: [
    {
      title: '可扫描列表项',
      description:
        '保持媒体、标题、说明和行级操作的位置一致，让重复内容便于比较。',
      preview: <ItemScenarioDemo />,
      code: `<ItemGroup>
  <Item variant="outline">
    <ItemMedia><FolderOpen /></ItemMedia>
    <ItemContent>
      <ItemTitle>设计系统</ItemTitle>
      <ItemDescription>18 个组件 · 2 分钟前更新</ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>`,
      previewHeight: 320,
    },
  ],
  marker: [
    {
      title: '内容流标记',
      description: '用日期分隔和事件标记补充阅读上下文，而不取代标题层级。',
      preview: <MarkerScenarioDemo />,
      code: `<Marker variant="separator">
  <MarkerContent>今天</MarkerContent>
</Marker>
<Marker variant="border">
  <MarkerIcon><CalendarDays /></MarkerIcon>
  <MarkerContent>14:30 · 组件文档已更新</MarkerContent>
</Marker>`,
    },
  ],
  message: [
    {
      title: '完整会话流',
      description:
        'Message 组织身份与时间，Bubble 承载发言，MessageScroller 管理长会话滚动。',
      preview: <MessageScenarioDemo />,
      code: `<MessageScrollerProvider>
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        <Message>
          <MessageAvatar>HN</MessageAvatar>
          <MessageContent>
            <MessageHeader>Heliannuuthus · 14:28</MessageHeader>
            <Bubble><BubbleContent>消息内容</BubbleContent></Bubble>
            <MessageFooter>已发送</MessageFooter>
          </MessageContent>
        </Message>
      </MessageScrollerContent>
    </MessageScrollerViewport>
  </MessageScroller>
</MessageScrollerProvider>`,
      wide: true,
      previewHeight: 430,
    },
  ],
  tooltip: [
    {
      title: '图标说明',
      description: '为只有图标的操作提供简短说明，并同时支持悬停和键盘聚焦。',
      preview: <TooltipScenarioDemo />,
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button aria-label="分享" />} />
    <TooltipContent>分享当前页面</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
  ],
  'alert-dialog': [
    {
      title: '高风险确认',
      description: '明确说出删除对象和不可逆后果，并将取消操作保持为安全出口。',
      preview: <AlertDialogScenarioDemo />,
      code: `<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>删除项目</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>确认删除项目？</AlertDialogTitle>
    <AlertDialogDescription>此操作无法撤销。</AlertDialogDescription>
    <AlertDialogCancel>取消</AlertDialogCancel>
    <AlertDialogAction>确认删除</AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>`,
    },
  ],
  dialog: [
    {
      title: '聚焦编辑任务',
      description:
        '在不离开当前页面的情况下完成短表单，并提供明确的保存与取消操作。',
      preview: <DialogScenarioDemo />,
      code: `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>编辑资料</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>编辑工作区资料</DialogTitle>
      <DialogDescription>保存后所有成员都会看到最新内容。</DialogDescription>
    </DialogHeader>
    <DialogFooter>取消与保存操作</DialogFooter>
  </DialogContent>
</Dialog>`,
    },
  ],
  drawer: [
    {
      title: '移动端补充任务',
      description: '从底部拉出筛选任务，支持触控下滑关闭并保留原页面上下文。',
      preview: <DrawerScenarioDemo />,
      code: `<Drawer showSwipeHandle>
  <DrawerTrigger render={<Button />}>查看移动筛选</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>筛选项目</DrawerTitle>
      <DrawerDescription>向下滑动以返回列表。</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`,
    },
  ],
  popover: [
    {
      title: '就近补充信息',
      description: '在触发器附近承载比 Tooltip 更丰富的说明和少量后续操作。',
      preview: <PopoverScenarioDemo />,
      code: `<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>查看发布计划</PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>下次发布</PopoverTitle>
    <PopoverDescription>7 月 24 日 10:00</PopoverDescription>
    <Button size="sm">打开排期</Button>
  </PopoverContent>
</Popover>`,
    },
  ],
  sheet: [
    {
      title: '桌面侧边面板',
      description: '从页面边缘打开筛选或详情，在较宽屏幕上保持稳定的任务层级。',
      preview: <SheetScenarioDemo />,
      code: `<Sheet>
  <SheetTrigger render={<Button />}>打开桌面筛选</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>筛选组件</SheetTitle>
      <SheetDescription>选择分类与稳定状态。</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
    },
  ],
  toast: [
    {
      title: '非阻塞操作反馈',
      description: '保存完成后短暂反馈结果；重要失败仍应在页面内持续展示。',
      preview: <ToastScenarioDemo />,
      code: `<Button onClick={() => toast.success('设置已保存')}>
  保存并提示
</Button>
<Toaster />`,
    },
  ],
  command: [
    {
      title: '键盘命令检索',
      description: '让高频用户通过关键词和快捷键快速定位跨页面命令。',
      preview: <CommandScenarioDemo />,
      code: `<Command>
  <CommandInput placeholder="搜索命令…" />
  <CommandList>
    <CommandGroup heading="导航">
      <CommandItem>搜索组件 <CommandShortcut>⌘K</CommandShortcut></CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
      previewHeight: 360,
    },
  ],
  'context-menu': [
    {
      title: '对象相关操作',
      description:
        '右键对象时只展示和当前对象直接相关的次要操作，并保留其他入口。',
      preview: <ContextMenuScenarioDemo />,
      code: `<ContextMenu>
  <ContextMenuTrigger>在项目卡片上点击右键</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>打开</ContextMenuItem>
    <ContextMenuItem>分享</ContextMenuItem>
    <ContextMenuItem variant="destructive">删除</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
      previewHeight: 320,
    },
  ],
  direction: [
    {
      title: '双向布局边界',
      description:
        '在稳定组件树边界切换 LTR 与 RTL，并检查内容、图标和交互方向。',
      preview: <DirectionScenarioDemo />,
      code: `<DirectionProvider direction="rtl">
  <div dir="rtl">العربية</div>
</DirectionProvider>`,
      previewHeight: 300,
    },
  ],
};

for (const [slug, examples] of Object.entries(scenarioExamples)) {
  componentDocumentation[slug]?.examples.push(...examples);
}

const dataEntryApi: Record<string, ApiProperty[]> = {
  checkbox: [
    {
      name: 'checked / defaultChecked',
      description: '使用受控或非受控选中状态。',
      type: 'boolean',
    },
    {
      name: 'indeterminate',
      description: '表达子项只被部分选择。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'onCheckedChange',
      description: '选中状态变化时调用。',
      type: '(checked: boolean) => void',
    },
    {
      name: 'disabled',
      description: '阻止交互并降低视觉强调。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  combobox: [
    { name: 'items', description: '提供可搜索的候选项集合。', type: 'Item[]' },
    {
      name: 'value / onValueChange',
      description: '管理当前选中的候选值。',
      type: 'Item | null / callback',
    },
    {
      name: 'multiple',
      description: '允许选择多个值，并配合 Chips 展示。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'showClear / showTrigger',
      description: '控制输入框尾部的清除与展开动作。',
      type: 'boolean',
    },
  ],
  'date-picker': [
    {
      name: 'display',
      description: '选择内联日历或由按钮触发的弹出日历。',
      type: "'inline' | 'popover'",
      defaultValue: "'popover'",
    },
    {
      name: 'value',
      description: '当前选择的日期。',
      type: 'Date | undefined',
    },
    {
      name: 'onChange',
      description: '选择或清除日期时调用。',
      type: '(date?: Date) => void',
    },
    {
      name: 'placeholder',
      description: '未选择日期时的提示。',
      type: 'string',
      defaultValue: "'选择日期'",
    },
    {
      name: 'disabled',
      description: '禁用触发器与日历日期选择。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'calendarProps',
      description: '透传月份导航、禁用日期和本地化等日历配置。',
      type: 'CalendarProps',
    },
    {
      name: 'calendarClassName',
      description: '扩展内层日历样式。',
      type: 'string',
    },
  ],
  form: [
    {
      name: 'Form / FormField',
      description: '提供 react-hook-form 上下文，并连接字段名称、规则和状态。',
      type: 'FormProvider / Controller',
    },
    {
      name: 'FormControl / FormMessage',
      description: '向控件注入可访问属性，并展示当前字段的校验错误。',
      type: 'component',
    },
    {
      name: 'Field.orientation',
      description: '设置标签、内容与控件的排列方向。',
      type: "'vertical' | 'horizontal' | 'responsive'",
      defaultValue: "'vertical'",
    },
    {
      name: 'Field.data-invalid',
      description: '将错误语义和颜色传递给整个字段。',
      type: 'boolean',
    },
    {
      name: 'FieldDescription',
      description: '补充输入格式、用途或影响。',
      type: 'component',
    },
    {
      name: 'FieldError',
      description: '展示单条或聚合的校验错误。',
      type: 'component',
    },
    {
      name: 'FieldLabel / Label',
      description: '通过 htmlFor 将标签文本与任意表单控件建立可访问关联。',
      type: 'component',
    },
    {
      name: 'htmlFor',
      description: '关联目标表单控件的 id。',
      type: 'string',
    },
  ],
  input: [
    {
      name: 'type',
      description: '选择原生输入类型，或使用 otp 进入验证码模式。',
      type: "HTMLInputTypeAttribute | 'otp'",
      defaultValue: "'text'",
    },
    {
      name: 'value / defaultValue',
      description: '使用受控或非受控输入值。',
      type: 'string | number',
    },
    {
      name: 'aria-invalid',
      description: '标记校验失败并启用错误样式。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'readOnly / disabled',
      description: '区分可聚焦只读与不可交互状态。',
      type: 'boolean',
    },
    {
      name: 'variant',
      description: '设置验证码的连续、分段或独立方块布局。',
      type: "'connected' | 'segmented' | 'separated'",
      defaultValue: "'connected'",
    },
    {
      name: 'maxLength',
      description: '设置验证码总位数；OTP 模式默认为 6。',
      type: 'number',
      defaultValue: '6',
    },
    {
      name: 'value / onChange',
      description: '管理当前验证码字符串。',
      type: 'string / (value: string) => void',
    },
    {
      name: 'pattern',
      description: '限制允许输入的字符类型。',
      type: 'string',
    },
  ],
  radio: [
    {
      name: 'Radio.checked / defaultChecked',
      description: '单独使用时管理选中状态。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'Radio.onCheckedChange',
      description: '单独 Radio 被选中时调用。',
      type: '(checked: boolean) => void',
    },
    {
      name: 'Radio.value',
      description: '位于 RadioGroup 中时标识当前选项。',
      type: 'unknown',
      defaultValue: "'on'",
    },
    {
      name: 'value / defaultValue',
      description: '管理互斥选择中的当前值。',
      type: 'string',
    },
    {
      name: 'onValueChange',
      description: '当前单选值变化时调用。',
      type: '(value: string) => void',
    },
    {
      name: 'orientation',
      description: '声明键盘导航和布局方向。',
      type: "'horizontal' | 'vertical'",
    },
    {
      name: 'disabled',
      description: '禁用整个 RadioGroup 或单个 Radio。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  select: [
    {
      name: 'value / defaultValue',
      description: '使用受控或非受控选择值。',
      type: 'string | null',
    },
    {
      name: 'onValueChange',
      description: '选择新项目时调用。',
      type: '(value: string | null) => void',
    },
    {
      name: 'SelectTrigger.size',
      description: '设置触发器高度。',
      type: "'default' | 'sm'",
      defaultValue: "'default'",
    },
    {
      name: 'SelectGroup / SelectLabel',
      description: '为较长的固定列表建立清晰分组。',
      type: 'component',
    },
    {
      name: 'NativeSelect.size',
      description: '设置原生选择控件的默认或紧凑高度。',
      type: "'default' | 'sm'",
      defaultValue: "'default'",
    },
    {
      name: 'NativeSelectOptGroup',
      description: '通过浏览器原生 optgroup 为选项分组。',
      type: 'component',
    },
    {
      name: 'disabled',
      description: '禁用 Select 或 NativeSelect。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  slider: [
    {
      name: 'value / defaultValue',
      description: '设置一个或多个滑块值。',
      type: 'number[]',
    },
    {
      name: 'min / max',
      description: '定义允许选择的数值范围。',
      type: 'number',
      defaultValue: '0 / 100',
    },
    {
      name: 'step',
      description: '设置每次键盘或指针移动的步长。',
      type: 'number',
      defaultValue: '1',
    },
    {
      name: 'orientation',
      description: '切换水平或垂直方向。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
  ],
  switch: [
    {
      name: 'checked / defaultChecked',
      description: '使用受控或非受控开关状态。',
      type: 'boolean',
    },
    {
      name: 'onCheckedChange',
      description: '开关状态变化时立即调用。',
      type: '(checked: boolean) => void',
    },
    {
      name: 'disabled',
      description: '阻止状态变化并显示不可用状态。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'name / value',
      description: '在原生表单提交中标识字段和值。',
      type: 'string',
    },
  ],
  textarea: [
    {
      name: 'value / defaultValue',
      description: '使用受控或非受控多行文本。',
      type: 'string',
    },
    { name: 'rows', description: '设置初始可见文本行数。', type: 'number' },
    { name: 'maxLength', description: '限制可输入字符数量。', type: 'number' },
    {
      name: 'aria-invalid',
      description: '标记校验失败并启用错误样式。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
};

for (const [slug, api] of Object.entries(dataEntryApi)) {
  if (componentDocumentation[slug]) componentDocumentation[slug].api = api;
}

componentDocumentation.input.summary =
  '通过基础输入、组合输入和验证码输入承接不同复杂度的录入任务。';
componentDocumentation.input.whenToUse = [
  '输入单行文本、带前后缀的结构化内容或固定长度验证码。',
  '需要在同一输入任务中组合说明、附加动作和状态反馈。',
];
componentDocumentation.input.parts = [
  {
    name: 'Input',
    description: '统一接收原生单行输入与固定长度验证码。',
  },
];

componentDocumentation.group.summary =
  '在统一布局表面中组合输入、文本域、按钮与其他表单控件。';
componentDocumentation.group.whenToUse = [
  '多个控件共同完成一个输入任务，需要共享边框和状态反馈。',
  '需要在控件行内或块级首尾放置前缀、后缀、计数与操作。',
];
componentDocumentation.group.examples = [
  {
    title: '组合表单控件',
    description:
      'Group 只负责布局和聚合状态，Input、Textarea 与 Button 保留各自行为。',
    preview: <GroupCompositionDemo />,
    code: `<Group>
  <GroupAddon>ui.dev/</GroupAddon>
  <Input defaultValue="docs" />
  <GroupAddon align="inline-end">
    <Button variant="ghost" size="xs">复制</Button>
  </GroupAddon>
</Group>

<Group>
  <Textarea />
  <GroupAddon align="block-end">16 / 120</GroupAddon>
</Group>`,
    wide: true,
    previewHeight: 480,
  },
];
componentDocumentation.group.parts = [
  { name: 'Group', description: '聚合布局、边框、焦点和错误状态。' },
  {
    name: 'GroupAddon',
    description: '在行内或块级首尾放置文本、图标和操作。',
  },
];
componentDocumentation.group.api = [
  {
    name: 'orientation',
    description: '设置控件的主排列方向。',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
  },
  {
    name: 'GroupAddon.align',
    description: '将附加内容放到行内或块级首尾。',
    type: "'inline-start' | 'inline-end' | 'block-start' | 'block-end'",
    defaultValue: "'inline-start'",
  },
  {
    name: 'children',
    description: '直接组合 Input、Textarea、Button、Select 等组件。',
    type: 'React.ReactNode',
  },
];

componentDocumentation.form.summary =
  '通过 Field 与 Label 组织字段语义，并连接表单状态、校验和提交行为。';
componentDocumentation.form.whenToUse = [
  '组织标签、控件、说明和错误信息，建立完整的字段语义。',
  '需要连接表单状态、校验规则、错误反馈与提交行为。',
];
componentDocumentation.form.parts = [
  {
    name: 'Form / FormField',
    description: '提供表单上下文，并连接字段状态、规则和提交行为。',
  },
  {
    name: 'Field',
    description: '组织一个表单字段的布局、状态和语义关系。',
  },
  {
    name: 'FieldLabel / Label',
    description: '为输入控件提供可点击、可访问的文本标签。',
  },
  {
    name: 'FieldDescription',
    description: '补充输入格式、用途或影响。',
  },
  {
    name: 'FieldError',
    description: '展示与当前字段相关的校验错误。',
  },
];

componentDocumentation.select.summary =
  '通过自定义弹出列表或浏览器原生控件，从固定候选项中选择一个值。';
componentDocumentation.select.whenToUse = [
  '候选项固定，需要分组、禁用项或自定义弹出层时使用 Select。',
  '选项简单并希望沿用操作系统交互时使用 NativeSelect。',
];
componentDocumentation.select.parts = [
  {
    name: 'Select',
    description: '提供可定制触发器、弹出列表、分组和选项状态。',
  },
  {
    name: 'NativeSelect',
    description: '使用浏览器原生选择交互完成轻量单选。',
  },
];

const inputBasicExample = componentDocumentation.input.examples[0];
if (inputBasicExample) {
  inputBasicExample.title = '基础输入';
  inputBasicExample.description =
    '使用标签说明输入目的，并保持默认、悬停和聚焦状态清晰可辨。';
  inputBasicExample.code = `import { Input } from '@heliannuuthus/ui/input'

<Input type="email" placeholder="name@example.com" />`;
  inputBasicExample.wide = true;
  inputBasicExample.previewHeight = 280;
}

componentDocumentation.switch.examples.push({
  title: '基础与状态',
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
  wide: true,
  previewHeight: 280,
});

const switchExamples = componentDocumentation.switch.examples;
const switchSettingsIndex = switchExamples.findIndex(
  (example) => example.title === '设置列表'
);
if (switchSettingsIndex >= 0) {
  const [switchSettingsExample] = switchExamples.splice(switchSettingsIndex, 1);
  if (switchSettingsExample) {
    switchSettingsExample.wide = true;
    switchExamples.push(switchSettingsExample);
  }
}

componentDocumentation.checkbox.examples.push({
  title: '基础与状态',
  description:
    '选中时以向外爆开的粒子确认操作，取消选中时仅收回勾选标记；同时展示不确定和禁用状态。',
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
  wide: true,
  previewHeight: 280,
});

componentDocumentation.toggle.summary =
  '通过 Toggle 与 ToggleGroup 组织单个或成组的可按下工具状态。';
componentDocumentation.toggle.whenToUse = [
  '工具栏中的模式需要在按下与未按下之间即时切换时使用 Toggle。',
  '多个紧凑工具需要互斥或多选时使用 ToggleGroup；页面视图切换应使用 Tabs。',
];
componentDocumentation.toggle.parts = [
  { name: 'Toggle', description: '切换单个工具的按下状态。' },
  {
    name: 'ToggleGroup',
    description: '统一管理一组单选或多选 Toggle 的值与方向。',
  },
  { name: 'ToggleGroupItem', description: '定义组内一个可选择的工具项。' },
];

componentDocumentation.table.summary =
  '使用 Table 展示语义化行列，并在需要操作数据集合时组合 DataTable。';
componentDocumentation.table.whenToUse = [
  '少量静态数据需要按行列比较时使用 Table。',
  '数据需要搜索、排序、筛选或分页时使用 DataTable，避免自行重复编排状态。',
];
componentDocumentation.table.parts = [
  {
    name: 'Table',
    description:
      '提供 TableHeader、TableBody、TableRow 与 TableCell 等语义结构。',
  },
  {
    name: 'DataTable',
    description: '在语义表格上组合列定义、搜索、排序、筛选和分页。',
  },
];

componentDocumentation.message.summary =
  '组合 Message、Bubble 与 MessageScroller 构建完整且可持续滚动的会话流。';
componentDocumentation.message.whenToUse = [
  'Message 组织说话人、时间和状态，Bubble 承载一段具体内容。',
  '消息持续追加并允许回看历史时，用 MessageScroller 管理滚动位置和回到底部。',
];
componentDocumentation.message.parts = [
  { name: 'Message', description: '组织单条消息的身份、内容和状态区域。' },
  { name: 'Bubble', description: '展示一段发言、回复或系统生成内容。' },
  {
    name: 'MessageScroller',
    description: '管理长消息流的视口、追加内容与回到底部行为。',
  },
];

componentDocumentation.toast.summary =
  '通过 Toaster 与 toast API 在页面边缘短暂反馈非阻塞的操作结果。';
componentDocumentation.toast.whenToUse = [
  '保存、复制或发送完成后，需要不打断当前流程地反馈结果时使用。',
  '重要失败应在页面内持续展示；Sonner 仅作为旧导入路径的兼容别名。',
];
componentDocumentation.toast.parts = [
  { name: 'Toaster', description: '挂载并统一配置全局通知容器。' },
  { name: 'toast', description: '创建成功、失败、警告或普通通知。' },
];

const redundantBasicExampleSlugs = new Set([
  'checkbox',
  'combobox',
  'form',
  'input',
  'radio',
  'select',
  'switch',
  'textarea',
]);

for (const slug of redundantBasicExampleSlugs) {
  const examples = componentDocumentation[slug]?.examples;
  if (
    examples &&
    examples.length > 1 &&
    (examples[0]?.title === '基础用法' || examples[0]?.title === '基础输入')
  ) {
    examples.shift();
  }
}

const exampleTitleOrder: Record<string, string[]> = {
  button: ['按钮类型', '不同尺寸', '带图标的按钮', '状态', '组合按钮'],
  checkbox: ['基础与状态', '权限组合'],
  'date-picker': ['定时发布', '内联日历'],
  'dropdown-menu': ['常用操作', '选择与状态', '子菜单与尺寸'],
  switch: ['基础与状态', '设置列表'],
};

for (const [slug, titles] of Object.entries(exampleTitleOrder)) {
  const examples = componentDocumentation[slug]?.examples;
  examples?.sort((left, right) => {
    const leftIndex = titles.indexOf(left.title);
    const rightIndex = titles.indexOf(right.title);
    return (
      (leftIndex < 0 ? Number.MAX_SAFE_INTEGER : leftIndex) -
      (rightIndex < 0 ? Number.MAX_SAFE_INTEGER : rightIndex)
    );
  });
}

const fullWidthExamples: Record<string, Record<string, number>> = {
  button: { 组合按钮: 260 },
  checkbox: { 基础与状态: 280, 权限组合: 380 },
  'dropdown-menu': { 子菜单与尺寸: 360 },
  switch: { 基础与状态: 280, 设置列表: 390 },
  table: { 基础用法: 300, 可操作数据表: 480 },
};

for (const [slug, examplesByTitle] of Object.entries(fullWidthExamples)) {
  for (const example of componentDocumentation[slug]?.examples ?? []) {
    const previewHeight = examplesByTitle[example.title];
    if (previewHeight) {
      example.wide = true;
      example.previewHeight = previewHeight;
    }
  }
}

const spaciousPreviewHeights: Record<string, number> = {
  'aspect-ratio': 560,
  card: 560,
  resizable: 620,
  'scroll-area': 480,
  separator: 360,
  breadcrumb: 400,
  'dropdown-menu': 460,
  menubar: 560,
  'navigation-menu': 580,
  pagination: 400,
  sidebar: 640,
  tabs: 520,
};

for (const [slug, minimumHeight] of Object.entries(spaciousPreviewHeights)) {
  for (const example of componentDocumentation[slug]?.examples ?? []) {
    example.wide = true;
    example.previewHeight = Math.max(example.previewHeight ?? 0, minimumHeight);
  }
}
