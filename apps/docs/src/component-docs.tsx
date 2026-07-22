import type { ReactNode } from 'react';
import { Badge } from '@heliannuuthus/ui/badge';
import { Button } from '@heliannuuthus/ui/button';
import { ButtonGroup } from '@heliannuuthus/ui/button-group';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import { Kbd } from '@heliannuuthus/ui/kbd';
import { Masonry, MasonryItem } from '@heliannuuthus/ui/masonry';
import { Separator } from '@heliannuuthus/ui/separator';
import { Stack, type StackAlign, type StackGap } from '@heliannuuthus/ui/stack';
import { Switch } from '@heliannuuthus/ui/switch';
import { Toggle } from '@heliannuuthus/ui/toggle';
import {
  H2,
  TypographyBlockquote,
  TypographyCode,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from '@heliannuuthus/ui/typography';
import {
  ArrowRight,
  Bold,
  Download,
  Italic,
  Mail,
  Plus,
  Trash2,
  Underline,
} from 'lucide-react';
import {
  BreadcrumbBasicDemo,
  BreadcrumbCollapsedDemo,
  BreadcrumbVariantsDemo,
} from './breadcrumb-preview';
import { CardAnatomyDemo } from './card-preview';
import {
  DropdownMenuActionsDemo,
  DropdownMenuSelectionDemo,
  DropdownMenuSubmenuDemo,
} from './dropdown-menu-preview';
import {
  CheckboxPermissionsDemo,
  DatePickerInlineDemo,
  DatePickerReleaseDemo,
  FieldProfileDemo,
  FieldLabelPairingDemo,
  FormInviteDemo,
  InputGroupAddressDemo,
  InputOtpVerificationDemo,
  InputStatesDemo,
  RadioDeliveryDemo,
  RadioPlanDemo,
  SelectNativeDemo,
  SelectMemberSearchDemo,
  SelectWorkspaceDemo,
  SliderBudgetDemo,
  SliderElasticDemo,
  SwitchSettingsDemo,
  TextAreaCounterDemo,
} from './data-entry-previews';
import {
  AccordionIndicatorDemo,
  AccordionModesDemo,
  AttachmentReleaseDemo,
  AvatarOwnersDemo,
  BubbleReviewDemo,
  CarouselAutoplayDemo,
  CarouselHighlightsDemo,
  ChartDeploymentDemo,
  CollapsibleBuildDemo,
  CollapsiblePolicyDemo,
  CounterBuildDemo,
  DataTableGroupedHeaderDemo,
  DataTableReleaseDemo,
  EmptyCompositionDemo,
  EmptyDefaultDemo,
  EmptyReleaseDemo,
  HoverCardOwnerDemo,
  ItemActivityDemo,
  MarkerTimelineDemo,
  MessageReviewDemo,
  MessageScrollerReleaseDemo,
  TableReleaseDemo,
  TooltipPlacementsDemo,
} from './data-display-previews';
import {
  AlertDialogDeleteDemo,
  AlertReleaseDemo,
  DialogReleaseDemo,
  DrawerContainedDemo,
  DrawerReleaseDemo,
  PopoverOwnersDemo,
  ProgressReleaseDemo,
  SkeletonReleaseDemo,
  SonnerPublishDemo,
  SpinnerLoadingDemo,
  SpinnerSizesDemo,
  ToastLocalDemo,
  ToastSemanticDemo,
} from './feedback-previews';
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
import { minimalComponentPreviews } from './minimal-previews';
import type {
  ComponentHarnessControl,
  ComponentHarnessValues,
} from './component-harness';

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
  preview: ReactNode | ((values: ComponentHarnessValues) => ReactNode);
  code: string;
  harness?: ComponentHarnessControl[];
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
      description: '将紧密相关的操作收进同一个视觉组，并保持操作语义单一。',
      preview: (
        <ButtonGroup aria-label="分页操作">
          <Button variant="outline">上一项</Button>
          <Button>下一项</Button>
        </ButtonGroup>
      ),
      code: `import { Button } from '@heliannuuthus/ui/button'
import { ButtonGroup } from '@heliannuuthus/ui/button-group'

export function GroupedButtons() {
  return (
    <ButtonGroup aria-label="分页操作">
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
      name: 'block',
      description: '让按钮填满父容器的可用宽度。',
      type: 'boolean',
      defaultValue: 'false',
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
      harness: [
        {
          name: 'variant',
          label: '样式',
          defaultValue: 'default',
          options: [
            { label: '默认', value: 'default' },
            { label: '次要', value: 'secondary' },
            { label: '描边', value: 'outline' },
            { label: '弱化', value: 'ghost' },
            { label: '危险', value: 'destructive' },
          ],
        },
      ],
      preview: (values) => {
        const variant = (values.variant ?? 'default') as
          'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
        return (
          <Stack gap="sm" orientation="horizontal" wrap>
            <Badge variant={variant}>组件稳定</Badge>
            <Badge variant={variant}>v0.1.0</Badge>
            <Badge variant={variant}>
              <span className="status-dot" />
              运行中
            </Badge>
          </Stack>
        );
      },
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
      title: '方向与内容分组',
      description: '在章节边界和行内元信息之间切换，观察方向如何匹配内容关系。',
      harness: [
        {
          name: 'orientation',
          label: '方向',
          defaultValue: 'horizontal',
          options: [
            { label: '水平', value: 'horizontal' },
            { label: '垂直', value: 'vertical' },
          ],
        },
      ],
      preview: (values) =>
        values.orientation === 'vertical' ? (
          <div className="separator-vertical-demo">
            <div className="separator-vertical-item">
              <span>状态</span>
              <strong>设计中</strong>
            </div>
            <Separator orientation="vertical" />
            <div className="separator-vertical-item">
              <span>负责人</span>
              <strong>Heliannuuthus</strong>
            </div>
            <Separator orientation="vertical" />
            <div className="separator-vertical-item">
              <span>更新时间</span>
              <strong>刚刚</strong>
            </div>
          </div>
        ) : (
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
<section>下方内容</section>

<div className="flex items-stretch gap-4">
  <div>状态</div>
  <Separator orientation="vertical" />
  <div>负责人</div>
</div>`,
      wide: true,
      previewHeight: 420,
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

const masonryDocumentation: ComponentDocumentation = {
  name: 'Masonry',
  slug: 'masonry',
  summary: '将不同高度的内容持续放入当前最短列，并允许指定内容独占整行。',
  whenToUse: [
    '卡片需要根据容器宽度自动显示一至多列，并紧接当前最短列继续排列。',
    '某些总结、横幅或末尾内容需要跨越当前所有列。',
  ],
  examples: [
    {
      title: '响应式分栏与整行内容',
      description:
        '切换最大列数与间距；各卡片保持独立高度，末尾检查项通过 span="full" 独占整行。',
      harness: [
        {
          name: 'columns',
          label: '最大列数',
          defaultValue: '3',
          options: [
            { label: '两列', value: '2' },
            { label: '三列', value: '3' },
          ],
        },
        {
          name: 'gap',
          label: '间距',
          defaultValue: 'compact',
          options: [
            { label: '紧凑', value: 'compact' },
            { label: '宽松', value: 'relaxed' },
          ],
        },
      ],
      preview: (values) => (
        <Masonry
          aria-label="响应式瀑布布局示例"
          className="masonry-layout-demo"
          columns={values.columns === '2' ? 2 : 3}
          gap={values.gap === 'relaxed' ? [24, 24] : [14, 16]}
          minColumnWidth={170}
        >
          <MasonryItem className="masonry-layout-item masonry-layout-item-tall">
            <span>01</span>
            <strong>基础组件</strong>
            <p>按钮、输入与选择器的交互规范。</p>
          </MasonryItem>
          <MasonryItem className="masonry-layout-item masonry-layout-item-short">
            <span>02</span>
            <strong>布局规则</strong>
            <p>间距、对齐与响应式边界。</p>
          </MasonryItem>
          <MasonryItem className="masonry-layout-item masonry-layout-item-medium">
            <span>03</span>
            <strong>设计令牌</strong>
            <p>颜色、圆角和排版的共享约束。</p>
          </MasonryItem>
          <MasonryItem
            className="masonry-layout-item masonry-layout-item-full"
            span="full"
          >
            <span>FULL</span>
            <strong>发布检查</strong>
            <p>这一项始终从第一列跨到最后一列。</p>
          </MasonryItem>
        </Masonry>
      ),
      code: `import { Masonry, MasonryItem } from '@heliannuuthus/ui/masonry'

<Masonry columns={3} minColumnWidth={240} gap={[16, 20]}>
  <MasonryItem style={{ minHeight: 180 }}>基础组件</MasonryItem>
  <MasonryItem style={{ minHeight: 120 }}>布局规则</MasonryItem>
  <MasonryItem style={{ minHeight: 150 }}>设计令牌</MasonryItem>
  <MasonryItem span="full">发布检查</MasonryItem>
</Masonry>`,
      wide: true,
      previewHeight: 520,
    },
  ],
  parts: [
    {
      name: 'Masonry',
      description: '定义最大列数、最小列宽与行列间距。',
    },
    {
      name: 'MasonryItem',
      description: '承载单个内容项，并可通过 span="full" 独占整行。',
    },
  ],
  api: [
    {
      name: 'columns',
      description: '设置容器允许显示的最大列数；实际列数随可用宽度减少。',
      type: 'number',
      defaultValue: '3',
    },
    {
      name: 'minColumnWidth',
      description: '设置单列期望的最小宽度，用于决定响应式折列时机。',
      type: 'number | string',
      defaultValue: '240',
    },
    {
      name: 'gap',
      description: '设置统一间距，数组依次表示水平与垂直间距。',
      type: 'number | string | [number | string, number | string]',
      defaultValue: '16',
    },
    {
      name: 'asChild',
      description: '将 Masonry 布局属性合并到唯一子元素，避免增加包装节点。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'span',
      description: 'MasonryItem 是否按普通单元或跨越整行排列。',
      type: "'auto' | 'full'",
      defaultValue: "'auto'",
    },
  ],
  accessibility: [
    '组件只改变视觉位置，内容语义、键盘焦点和读屏顺序仍按 DOM 顺序保留。',
    '需要表达列表、文章或分组语义时，应在内容节点上提供对应元素或角色。',
  ],
  pitfalls: [
    '不要依靠视觉列位置表达严格顺序；不同高度可能让后续内容出现在更高的位置。',
    '不要仅靠卡片位置表达顺序；窄屏折为单列后仍应能按源码顺序阅读。',
  ],
};

const stackDocumentation: ComponentDocumentation = {
  name: 'Stack',
  slug: 'stack',
  summary: '为一组相关元素提供一致的方向、间距、对齐和换行规则。',
  whenToUse: [
    '一组控件或标签需要保持稳定间距，但不需要共享选择状态。',
    '相同内容需要在水平、垂直或窄屏换行布局之间切换。',
    '相邻控件需要折叠边框与圆角时，使用 Stack.Compact 形成连续轮廓。',
  ],
  examples: [
    {
      title: '常规间距与紧凑组合',
      description:
        '常规 Stack 管理间距和对齐；Compact 将相邻控件拼接成连续的操作组。',
      harness: [
        {
          name: 'mode',
          label: '模式',
          defaultValue: 'regular',
          options: [
            { label: '常规', value: 'regular' },
            { label: '紧凑组', value: 'compact' },
          ],
        },
        {
          name: 'orientation',
          label: '方向',
          defaultValue: 'horizontal',
          options: [
            { label: '水平', value: 'horizontal' },
            { label: '垂直', value: 'vertical' },
          ],
        },
        {
          name: 'gap',
          label: '间距',
          defaultValue: 'md',
          options: [
            { label: '紧凑', value: 'sm' },
            { label: '默认', value: 'md' },
            { label: '宽松', value: 'lg' },
          ],
        },
        {
          name: 'align',
          label: '对齐',
          defaultValue: 'center',
          options: [
            { label: '起点', value: 'start' },
            { label: '居中', value: 'center' },
            { label: '终点', value: 'end' },
          ],
        },
      ],
      preview: (values) => {
        const orientation =
          values.orientation === 'vertical' ? 'vertical' : 'horizontal';

        if (values.mode === 'compact') {
          return (
            <Stack.Compact
              aria-label="文档操作"
              className="stack-compact-demo"
              orientation={orientation}
            >
              <Button variant="outline">预览</Button>
              <Button variant="outline">代码</Button>
              <Button variant="outline">发布</Button>
            </Stack.Compact>
          );
        }

        return (
          <Stack
            align={(values.align ?? 'center') as StackAlign}
            className="stack-variant-demo"
            gap={(values.gap ?? 'md') as StackGap}
            orientation={orientation}
          >
            <span className="stack-variant-item stack-variant-item-short">
              筛选
            </span>
            <span className="stack-variant-item stack-variant-item-tall">
              排序方式
            </span>
            <span className="stack-variant-item">仅看可用</span>
          </Stack>
        );
      },
      code: `import { Stack } from '@heliannuuthus/ui/stack'

<Stack block orientation="horizontal" gap="md" align="center" justify="between" wrap>
  <Filter />
  <Sort />
  <Availability />
</Stack>

<Stack.Compact orientation="horizontal" aria-label="文档操作">
  <Button variant="outline">预览</Button>
  <Button variant="outline">代码</Button>
  <Button variant="outline">发布</Button>
</Stack.Compact>`,
      previewHeight: 420,
    },
  ],
  parts: [
    {
      name: 'Stack',
      description: '按方向、间距与对齐规则排列一组相关内容。',
    },
    {
      name: 'Stack.Compact',
      description: '折叠相邻控件的间距、边框和圆角，形成连续操作组。',
    },
  ],
  api: [
    {
      name: 'orientation',
      description: '设置元素水平或垂直排列。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'vertical'",
    },
    {
      name: 'gap',
      description: '设置统一间距，数组依次表示水平与垂直间距。',
      type: "'sm' | 'md' | 'lg' | number | [number, number]",
      defaultValue: "'md'",
    },
    {
      name: 'align',
      description: '设置交叉轴对齐方式。',
      type: "'start' | 'center' | 'end' | 'baseline' | 'stretch'",
      defaultValue: "'stretch'",
    },
    {
      name: 'justify',
      description: '设置主轴内容分布方式。',
      type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
      defaultValue: "'start'",
    },
    {
      name: 'block',
      description: '让 Stack 填满父容器的可用宽度。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'wrap',
      description: '在水平方向空间不足时允许自动换行。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'separator',
      description: '在相邻元素之间插入统一分隔内容。',
      type: 'ReactNode',
    },
    {
      name: 'Stack.Compact.orientation',
      description: '设置紧凑组的拼接方向；紧凑组不允许换行。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
  ],
  accessibility: [
    'Stack 只提供视觉布局，不改变子元素原有语义和焦点顺序。',
    'Stack.Compact 默认提供 group 角色；同一区域存在多个操作组时应补充 aria-label。',
    '需要表达选择关系时仍应使用 Radio.Group、Toggle.Group 等带状态语义的组件。',
  ],
  pitfalls: [
    '不要用 Stack 代替表单分组、单选组或工具栏等语义结构。',
    '不要让 Stack.Compact 换行；空间不足时应切换为垂直方向。',
    '不要通过空白字符或子元素外边距模拟组件间距。',
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
      harness: [
        {
          name: 'size',
          label: '密度',
          defaultValue: 'sm',
          options: [
            { label: '紧凑', value: 'sm' },
            { label: '默认', value: 'default' },
          ],
        },
      ],
      preview: (values) => (
        <CardAnatomyDemo size={values.size === 'default' ? 'default' : 'sm'} />
      ),
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
      name: 'radius',
      description: '控制 Card 外轮廓的圆角密度。',
      type: "'default' | 'sm' | 'none'",
      defaultValue: "'default'",
    },
    {
      name: 'variant',
      description: '控制 Card 的层级表达，可选择阴影、描边或透明容器。',
      type: "'elevated' | 'outline' | 'ghost'",
      defaultValue: "'elevated'",
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
      title: '页面层级',
      description:
        '面包屑放在页面标题之前，最后一级只表示当前位置，不再提供链接。',
      preview: <BreadcrumbBasicDemo />,
      code: `import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb'

const items = [
  { label: '首页', href: '/' },
  { label: '组件', href: '/components' },
  { label: '导航', href: '/components/navigation-menu' },
  { label: 'Breadcrumb' },
]

export function PageBreadcrumb() {
  return <Breadcrumb items={items} homeIcon />
}`,
      wide: true,
      previewHeight: 380,
    },
    {
      title: '深层路径折叠',
      description:
        '路径过长时只收起中间层级，保留起点、直接父级和当前页面作为定位锚点。',
      preview: <BreadcrumbCollapsedDemo />,
      code: `import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb'

<Breadcrumb
  items={releasePath}
  homeIcon
  maxItems={4}
  itemsBeforeCollapse={1}
  itemsAfterCollapse={2}
/>`,
      wide: true,
      previewHeight: 300,
    },
    {
      title: '节点菜单与视觉样式',
      description:
        '下拉节点用于切换同级位置；分隔符和样式只改变视觉表达，不改变路径语义。',
      preview: <BreadcrumbVariantsDemo />,
      code: `import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb'

<Breadcrumb items={itemsWithMenu} />
<Breadcrumb items={items} variant="underline" separator="slash" />
<Breadcrumb items={items} variant="pill" separator="dot" size="sm" />`,
      wide: true,
      previewHeight: 420,
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
      harness: [
        {
          name: 'variant',
          label: '样式',
          defaultValue: 'default',
          options: [
            { label: '胶囊', value: 'default' },
            { label: '线型', value: 'line' },
            { label: '描边', value: 'outline' },
            { label: '柔和', value: 'soft' },
          ],
        },
      ],
      preview: (values) => (
        <TabsVariantsDemo
          variant={
            values.variant === 'line' ||
            values.variant === 'outline' ||
            values.variant === 'soft'
              ? values.variant
              : 'default'
          }
        />
      ),
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
      harness: [
        {
          name: 'animation',
          label: '动效',
          defaultValue: 'slide',
          options: [
            { label: '淡入', value: 'fade' },
            { label: '滑动', value: 'slide' },
            { label: '关闭', value: 'none' },
          ],
        },
      ],
      preview: (values) => (
        <TabsMotionDemo
          animation={
            values.animation === 'fade' || values.animation === 'none'
              ? values.animation
              : 'slide'
          }
        />
      ),
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
  masonry: masonryDocumentation,
  stack: stackDocumentation,
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

const remainingComponents = [
  ['Scroll Area', 'scroll-area', '为受限区域提供一致的滚动体验。'],
  ['Checkbox', 'checkbox', '控制可独立选择的布尔选项。'],
  ['Date Picker', 'date-picker', '通过内联日历或弹出触发器选择单个日期。'],
  ['Form', 'form', '组织字段结构，并连接状态、校验与提交行为。'],
  ['Input', 'input', '接收单行文本或特定格式内容。'],
  ['Radio', 'radio', '从互斥选项中选择一个值。'],
  ['Select', 'select', '从弹出列表中选择预定义值。'],
  ['Slider', 'slider', '在连续或离散范围内选择数值。'],
  ['Switch', 'switch', '即时切换设置的开关状态。'],
  ['Toggle', 'toggle', '切换一个可按下的工具状态。'],
  ['Accordion', 'accordion', '按需展开一组纵向排列的内容区域。'],
  ['Attachment', 'attachment', '展示附件信息、状态与操作。'],
  ['Avatar', 'avatar', '表示人物、团队或其他实体。'],
  ['Bubble', 'bubble', '展示对话消息与附加信息。'],
  ['Carousel', 'carousel', '在有限空间中轮播同级内容。'],
  ['Chart', 'chart', '为 Recharts 提供响应式容器、主题变量和统一的信息提示。'],
  ['Collapsible', 'collapsible', '控制单个内容区域展开收起。'],
  ['Counter', 'counter', '以逐位滚动动画展示变化中的数值。'],
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
  ['Alert Dialog', 'alert-dialog', '打断当前流程并确认具有重要后果的操作。'],
  ['Dialog', 'dialog', '在模态层中完成聚焦任务。'],
  ['Drawer', 'drawer', '从视口或父容器边缘展示自适应临时面板。'],
  ['Popover', 'popover', '在触发器附近展示富交互浮层。'],
  ['Progress', 'progress', '展示任务或流程完成进度。'],
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

const avatarBasicExample = componentDocumentation.avatar.examples[0];
if (avatarBasicExample) {
  avatarBasicExample.title = '发布负责人';
  avatarBasicExample.description =
    '平铺小、中、大三种尺寸，直接比较头像、在线状态和溢出人数的缩放关系。';
  avatarBasicExample.harness = undefined;
  avatarBasicExample.preview = <AvatarOwnersDemo />;
  avatarBasicExample.code = `import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from '@heliannuuthus/ui/avatar'

{(['sm', 'default', 'lg'] as const).map((size) => (
  <AvatarGroup key={size} aria-label={\`\${size} 尺寸的发布负责人\`}>
    <Avatar size={size}>
      <AvatarFallback>林</AvatarFallback>
      <AvatarBadge />
    </Avatar>
    <AvatarGroupCount>+3</AvatarGroupCount>
  </AvatarGroup>
))}`;
  avatarBasicExample.previewHeight = 300;
}

const emptyBasicExample = componentDocumentation.empty.examples[0];
if (emptyBasicExample) {
  emptyBasicExample.title = '默认空状态';
  emptyBasicExample.description =
    '不传任何内容也会显示默认图标和“暂无内容”，适合作为安全、稳定的兜底状态。';
  emptyBasicExample.harness = undefined;
  emptyBasicExample.preview = <EmptyDefaultDemo />;
  emptyBasicExample.code = `import { Empty } from '@heliannuuthus/ui/empty'

<Empty />`;
  emptyBasicExample.previewHeight = 360;
}

const tableBasicExample = componentDocumentation.table.examples[0];
if (tableBasicExample) {
  tableBasicExample.title = '发布窗口';
  tableBasicExample.description =
    '用语义化表头、表体、表尾和标题展示无需复杂状态管理的数据。';
  tableBasicExample.preview = <TableReleaseDemo />;
  tableBasicExample.code = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@heliannuuthus/ui/table'

<Table>
  <TableCaption>今晚 22:00 发布窗口中的服务。</TableCaption>
  <TableHeader>{/* column headings */}</TableHeader>
  <TableBody>{/* release rows */}</TableBody>
  <TableFooter>{/* summary */}</TableFooter>
</Table>`;
  tableBasicExample.previewHeight = 460;
}

const alertBasicExample = componentDocumentation.alert.examples[0];
if (alertBasicExample) {
  alertBasicExample.harness = undefined;
  alertBasicExample.title = '语义状态';
  alertBasicExample.description =
    'Alert 是页面内容的一部分；点击按钮可条件显示信息、成功、警告或错误横幅，而不是打开浮层。';
  alertBasicExample.preview = <AlertReleaseDemo />;
  alertBasicExample.code = `import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from '@heliannuuthus/ui/alert'

{visible && <Alert variant="warning">
  <TriangleAlert />
  <AlertTitle>回滚镜像即将过期</AlertTitle>
  <AlertDescription>建议在发布前重新构建。</AlertDescription>
  <AlertAction><Button onClick={() => setVisible(false)}>关闭</Button></AlertAction>
</Alert>}`;
  alertBasicExample.previewHeight = 380;
}

const dataEntryExamples: Record<string, ComponentExample[]> = {
  checkbox: [
    {
      title: '权限组合',
      description: '使用 Checkbox.Group 管理多个权限值，并即时反馈已选数量。',
      preview: <CheckboxPermissionsDemo />,
      code: `import { Checkbox } from '@heliannuuthus/ui/checkbox'

<Checkbox.Group
  name="permission"
  value={selected}
  onChange={setSelected}
  options={[
    { label: '查看项目', value: 'read' },
    { label: '参与评论', value: 'comment' },
    { label: '管理项目', value: 'manage' },
  ]}
/>`,
      previewHeight: 380,
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
      preview: <InputGroupAddressDemo />,
      code: `<InputGroup>
  <InputGroupAddon>ui.dev/</InputGroupAddon>
  <InputGroupInput defaultValue="docs" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>复制</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`,
      wide: true,
      previewHeight: 480,
    },
    {
      title: '验证码形态',
      description:
        '使用 shape 切换连接方块与独立方块，两种形态共享同一份验证码状态。',
      harness: [
        {
          name: 'shape',
          label: '形状',
          defaultValue: 'connected',
          options: [
            { label: '连接', value: 'connected' },
            { label: '独立', value: 'separated' },
          ],
        },
      ],
      preview: (values) => (
        <InputOtpVerificationDemo
          shape={values.shape === 'separated' ? 'separated' : 'connected'}
        />
      ),
      code: `<InputOTP
  maxLength={6}
  value={value}
  onChange={setValue}
  shape="connected"
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>{/* 后三位 */}</InputOTPGroup>
</InputOTP>

<InputOTP maxLength={6} shape="separated">
  <InputOTPGroup>{/* 六个独立方块槽位 */}</InputOTPGroup>
</InputOTP>`,
      wide: true,
      previewHeight: 560,
    },
    {
      title: '带字数反馈的说明',
      description: '为长文本提供清楚的标签、字符上限、当前计数和提交条件。',
      preview: <TextAreaCounterDemo />,
      code: `import { Input, TextArea } from '@heliannuuthus/ui/input'

<Input.TextArea
  value={value}
  maxLength={120}
  onChange={(event) => setValue(event.target.value)}
/>

<TextArea placeholder="也可以使用平铺导出" />`,
      wide: true,
      previewHeight: 380,
    },
  ],
  radio: [
    {
      title: '选项配置',
      description:
        '常规文本选项优先使用 options，由 Radio.Group 统一生成标签与值。',
      preview: <RadioDeliveryDemo />,
      code: `import { Radio } from '@heliannuuthus/ui/radio'

<Radio.Group
  value={delivery}
  onChange={setDelivery}
  options={[
    { label: '邮件通知', value: 'email' },
    { label: '站内通知', value: 'inbox' },
    { label: '不通知', value: 'none' },
  ]}
/>`,
      previewHeight: 280,
    },
    {
      title: '方案单选卡',
      description: '将互斥选项扩展为整行可点击的卡片，同时保留原生单选语义。',
      harness: [
        {
          name: 'orientation',
          label: '方向',
          defaultValue: 'vertical',
          options: [
            { label: '纵向', value: 'vertical' },
            { label: '横向', value: 'horizontal' },
          ],
        },
      ],
      preview: (values) => (
        <RadioPlanDemo
          orientation={
            values.orientation === 'horizontal' ? 'horizontal' : 'vertical'
          }
        />
      ),
      code: `import { Radio } from '@heliannuuthus/ui/radio'

<Radio.Group
  value={plan}
  onChange={setPlan}
  orientation="horizontal"
  columns={3}
  minColumnWidth={180}
>
  <Radio value="free">个人版</Radio>
  <Radio value="team">团队版</Radio>
</Radio.Group>`,
      previewHeight: 430,
    },
  ],
  select: [
    {
      title: '搜索并选择成员',
      description:
        '候选项较多且用户知道关键词时，直接输入过滤、清除并重新选择。',
      preview: <SelectMemberSearchDemo />,
      code: `<Select value={value} onChange={setValue} items={members}>
  <SelectTrigger placeholder="搜索成员…" showClear />
  <SelectContent>
    <SelectEmpty>没有找到成员</SelectEmpty>
    <SelectList>
      {(member) => <SelectItem value={member}>{member}</SelectItem>}
    </SelectList>
  </SelectContent>
</Select>`,
      previewHeight: 320,
    },
    {
      title: '分组选择',
      description:
        '候选项固定时仍使用同一 Select，通过分组、分隔线和禁用项明确列表结构。',
      preview: <SelectWorkspaceDemo />,
      code: `<Select value={value} onChange={setValue} items={workspaceGroups}>
  <SelectTrigger placeholder="选择工作区" />
  <SelectContent>
    <SelectList>{/* SelectGroup / SelectCollection */}</SelectList>
  </SelectContent>
</Select>`,
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
      previewHeight: 340,
    },
  ],
  slider: [
    {
      title: '弹性反馈',
      description:
        '拖到边界外时轨道与图标产生受约束的拉伸并自然回弹；实际值仍严格限制在 min 与 max 之间。',
      preview: <SliderElasticDemo />,
      code: `import { Slider } from '@heliannuuthus/ui/slider'
import { Volume1, Volume2 } from 'lucide-react'

<Slider
  aria-label="播放器音量"
  effect="elastic"
  startIcon={<Volume1 />}
  endIcon={<Volume2 />}
  value={volume}
  onValueChange={setVolume}
  min={0}
  max={100}
  step={2}
/>`,
      previewHeight: 340,
    },
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
      previewHeight: 340,
    },
  ],
  switch: [
    {
      title: '设置列表',
      description: '开关立即更新设置；不可关闭的系统项通过禁用状态解释约束。',
      harness: [
        {
          name: 'size',
          label: '尺寸',
          defaultValue: 'default',
          options: [
            { label: '紧凑', value: 'sm' },
            { label: '默认', value: 'default' },
          ],
        },
      ],
      preview: (values) => (
        <SwitchSettingsDemo size={values.size === 'sm' ? 'sm' : 'default'} />
      ),
      code: `<Switch checked={enabled} onCheckedChange={setEnabled} />
<Switch checked disabled />`,
      previewHeight: 390,
    },
  ],
  toggle: [
    {
      title: '格式工具组',
      description:
        '通过 Toggle.Group 统一管理一组可同时开启的工具状态，组内仍直接使用 Toggle。',
      harness: [
        {
          name: 'variant',
          label: '样式',
          defaultValue: 'outline',
          options: [
            { label: '描边', value: 'outline' },
            { label: '默认', value: 'default' },
          ],
        },
        {
          name: 'spacing',
          label: '间距',
          defaultValue: 'compact',
          options: [
            { label: '紧凑', value: 'compact' },
            { label: '分离', value: 'separate' },
          ],
        },
      ],
      preview: (values) => (
        <Toggle.Group
          aria-label="文本格式"
          defaultValue={['bold']}
          multiple
          spacing={values.spacing === 'compact' ? 0 : 2}
          variant={values.variant === 'default' ? 'default' : 'outline'}
        >
          <Toggle value="bold" aria-label="粗体">
            <Bold />
          </Toggle>
          <Toggle value="italic" aria-label="斜体">
            <Italic />
          </Toggle>
          <Toggle value="underline" aria-label="下划线">
            <Underline />
          </Toggle>
        </Toggle.Group>
      ),
      code: `import { Toggle } from '@heliannuuthus/ui/toggle'

<Toggle.Group
  value={formats}
  onChange={setFormats}
  multiple
  variant="outline"
  spacing={0}
>
  <Toggle value="bold" aria-label="粗体"><Bold /></Toggle>
  <Toggle value="italic" aria-label="斜体"><Italic /></Toggle>
  <Toggle value="underline" aria-label="下划线"><Underline /></Toggle>
</Toggle.Group>`,
      previewHeight: 300,
    },
  ],
};

for (const [slug, examples] of Object.entries(dataEntryExamples)) {
  componentDocumentation[slug]?.examples.push(...examples);
}

const dataDisplayExamples: Record<string, ComponentExample[]> = {
  accordion: [
    {
      title: '展开模式',
      description: '纵向面板支持单项或多项展开，可按内容关系选择合适模式。',
      preview: <AccordionModesDemo />,
      code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@heliannuuthus/ui/accordion'

<Accordion defaultValue={['preflight']}>
  <AccordionItem value="preflight">
    <AccordionTrigger>预检结果</AccordionTrigger>
    <AccordionContent>42 项检查均已通过。</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion
  multiple
  defaultValue={['preflight', 'rollback']}
>
  <AccordionItem value="preflight">
    <AccordionTrigger>预检结果</AccordionTrigger>
    <AccordionContent>42 项检查均已通过。</AccordionContent>
  </AccordionItem>
  <AccordionItem value="rollback">
    <AccordionTrigger>回滚方案</AccordionTrigger>
    <AccordionContent>异常时切回上一版本。</AccordionContent>
  </AccordionItem>
</Accordion>`,
      previewHeight: 500,
      wide: true,
    },
    {
      title: '指示器',
      description:
        '统一设置指示器的位置；传入一个节点时随状态旋转，或分别定义折叠态与展开态。',
      preview: <AccordionIndicatorDemo />,
      code: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@heliannuuthus/ui/accordion'
import { Minus, Plus } from 'lucide-react'

<Accordion indicatorPosition="start" defaultValue={['deployment']}>
  <AccordionItem value="deployment">
    <AccordionTrigger>部署策略</AccordionTrigger>
    <AccordionContent>先灰度 10%，观察后全量发布。</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion
  indicator={<Plus />}
  expandedIndicator={<Minus />}
  defaultValue={['deployment']}
>
  <AccordionItem value="deployment">
    <AccordionTrigger>部署策略</AccordionTrigger>
    <AccordionContent>先灰度 10%，观察后全量发布。</AccordionContent>
  </AccordionItem>
</Accordion>`,
      previewHeight: 420,
      wide: true,
    },
  ],
  attachment: [
    {
      title: '横向附件',
      description:
        '将文件类型、名称、处理状态和操作排在同一行，适合列表与消息附件。',
      preview: <AttachmentReleaseDemo orientation="horizontal" />,
      code: `import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@heliannuuthus/ui/attachment'

<Attachment state="processing" orientation="horizontal">
  <AttachmentMedia><FileArchive /></AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>web-console.tgz</AttachmentTitle>
    <AttachmentDescription>8.4 MB · 正在校验</AttachmentDescription>
  </AttachmentContent>
</Attachment>`,
      previewHeight: 360,
    },
    {
      title: '纵向附件',
      description:
        '以缩略卡形式突出文件媒体，适合素材选择、上传结果和紧凑画廊。',
      preview: <AttachmentReleaseDemo orientation="vertical" />,
      code: `import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@heliannuuthus/ui/attachment'

<Attachment state="processing" orientation="vertical">
  <AttachmentMedia><FileArchive /></AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>web-console.tgz</AttachmentTitle>
    <AttachmentDescription>8.4 MB · 正在校验</AttachmentDescription>
  </AttachmentContent>
</Attachment>`,
      previewHeight: 360,
    },
  ],
  bubble: [
    {
      title: '评审对话',
      description:
        '平铺强调、柔和和描边三种回复样式，直接比较消息层级和轻量反馈的视觉关系。',
      preview: <BubbleReviewDemo />,
      code: `import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from '@heliannuuthus/ui/bubble'

<BubbleGroup>
  <Bubble align="end" variant="default">
    <BubbleContent>已经补充完成，可以重新评审。</BubbleContent>
    <BubbleReactions>✓ 2</BubbleReactions>
  </Bubble>
  <Bubble align="end" variant="tinted">
    <BubbleContent>已经补充完成，可以重新评审。</BubbleContent>
    <BubbleReactions>✓ 2</BubbleReactions>
  </Bubble>
  <Bubble align="end" variant="outline">
    <BubbleContent>已经补充完成，可以重新评审。</BubbleContent>
    <BubbleReactions>✓ 2</BubbleReactions>
  </Bubble>
</BubbleGroup>`,
      previewHeight: 440,
      wide: true,
    },
  ],
  carousel: [
    {
      title: '默认导航',
      description: '使用左右箭头浏览同级内容，页码点可放在轮播上方或下方。',
      harness: [
        {
          name: 'dotPosition',
          label: '页码点位置',
          defaultValue: 'bottom',
          options: [
            { label: '上方', value: 'top' },
            { label: '下方', value: 'bottom' },
          ],
        },
      ],
      preview: (values) => (
        <CarouselHighlightsDemo
          dotPosition={values.dotPosition === 'top' ? 'top' : 'bottom'}
        />
      ),
      code: `import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@heliannuuthus/ui/carousel'

<Carousel>
  <CarouselContent>
    {highlights.map((item) => <CarouselItem key={item.id}>{item.title}</CarouselItem>)}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselDots position="bottom" />
</Carousel>`,
      previewHeight: 440,
    },
    {
      title: '自定义导航',
      description:
        '通过 children 与 render function 替换箭头和页码点，同时保留滚动状态与键盘交互。',
      harness: [
        {
          name: 'dotPosition',
          label: '页码点位置',
          defaultValue: 'top',
          options: [
            { label: '上方', value: 'top' },
            { label: '下方', value: 'bottom' },
          ],
        },
      ],
      preview: (values) => (
        <CarouselHighlightsDemo
          customControls
          dotPosition={values.dotPosition === 'bottom' ? 'bottom' : 'top'}
        />
      ),
      code: `import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@heliannuuthus/ui/carousel'

<Carousel>
  <CarouselContent>
    {highlights.map((item) => <CarouselItem key={item.id}>{item.title}</CarouselItem>)}
  </CarouselContent>
  <CarouselPrevious><span aria-hidden>←</span></CarouselPrevious>
  <CarouselNext><span aria-hidden>→</span></CarouselNext>
  <CarouselDots position="top">
    {({ index }) => <span>{index + 1}</span>}
  </CarouselDots>
</Carousel>`,
      previewHeight: 440,
    },
    {
      title: '自动播放与景深动效',
      description:
        'depth 变体加入 React Bits 风格的 3D 景深过渡；自动播放默认在悬停时暂停，并通过 loop 无缝回到第一项。',
      preview: <CarouselAutoplayDemo />,
      code: `import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@heliannuuthus/ui/carousel'

<Carousel
  autoplay
  autoplayDelay={3000}
  loop
  variant="depth"
>
  <CarouselContent>
    {highlights.map((item) => (
      <CarouselItem key={item.id}>{item.title}</CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselDots />
</Carousel>`,
      previewHeight: 480,
      wide: true,
    },
  ],
  chart: [
    {
      title: 'Recharts 主题适配',
      description:
        '柱形、坐标轴和比例尺由 Recharts 绘制；ChartContainer 负责响应式尺寸、明暗主题色变量，以及统一的 Tooltip 外观。',
      harness: [
        {
          name: 'metric',
          label: '指标',
          defaultValue: 'success',
          options: [
            { label: '成功率', value: 'success' },
            { label: '部署耗时', value: 'duration' },
          ],
        },
      ],
      preview: (values) => (
        <ChartDeploymentDemo
          metric={values.metric === 'duration' ? 'duration' : 'success'}
        />
      ),
      code: `import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@heliannuuthus/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

const chartConfig = {
  success: { label: '成功率', color: 'var(--primary)' },
} satisfies ChartConfig

<ChartContainer config={chartConfig}>
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="day" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="success" fill="var(--color-success)" />
  </BarChart>
</ChartContainer>`,
      previewHeight: 500,
    },
  ],
  collapsible: [
    {
      title: '整行标题触发',
      description:
        '适合构建日志、详情摘要和辅助信息；整个 Header 都可点击，展开内容以铺开方式进入。',
      preview: <CollapsibleBuildDemo />,
      code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleFooter,
  CollapsibleHeader,
  CollapsibleIndicator,
} from '@heliannuuthus/ui/collapsible'

<Collapsible>
  <CollapsibleHeader>
    <div>
      <strong>构建 #1842 已完成</strong>
      <span>1m 48s · commit 7f92c1a</span>
    </div>
    <CollapsibleIndicator />
  </CollapsibleHeader>
  <CollapsibleContent>
    {/* build output */}
    <CollapsibleFooter>日志保留 30 天</CollapsibleFooter>
  </CollapsibleContent>
</Collapsible>`,
      previewHeight: 380,
    },
    {
      title: '独立按钮触发',
      description:
        '适合高级设置、筛选条件和渐进式配置；摘要保持可见，由独立 Collapse 按钮控制内容。',
      preview: <CollapsiblePolicyDemo />,
      code: `import { Button } from '@heliannuuthus/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleFooter,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from '@heliannuuthus/ui/collapsible'

<Collapsible>
  <div className="flex items-center gap-3">
    <div className="flex-1">灰度发布策略</div>
    <CollapsibleTrigger render={<Button variant="outline" />}>
      配置
      <CollapsibleIndicator />
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent>
    {/* advanced settings */}
    <CollapsibleFooter>仅影响下一次发布</CollapsibleFooter>
  </CollapsibleContent>
</Collapsible>`,
      previewHeight: 380,
    },
  ],
  counter: [
    {
      title: '构建计数',
      description:
        '数值变化时只滚动发生变化的位；固定 places 可以避免位数变化导致布局跳动。',
      preview: <CounterBuildDemo />,
      code: `import { Counter } from '@heliannuuthus/ui/counter'

<Counter
  value={count}
  places={[1000, 100, 10, 1]}
  fontSize={60}
  fontWeight={600}
  suffix={<small>次</small>}
  valueText={\`\${count} 次构建\`}
/>`,
      previewHeight: 400,
    },
  ],
  'data-table': [
    {
      title: '操作列',
      description:
        '操作列也是普通 ColumnDef：通过 cell 取得当前行，再组合主操作、图标按钮或 Dropdown Menu。',
      preview: <DataTableReleaseDemo />,
      code: `import type { ColumnDef } from '@tanstack/react-table'
import {
  DataTable,
  DataTableActions,
  DataTableColumnHeader,
} from '@heliannuuthus/ui/data-table'
import { Button } from '@heliannuuthus/ui/button'
import { DropdownMenu } from '@heliannuuthus/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

const columns: ColumnDef<Release>[] = [
  {
    accessorKey: 'version',
    header: ({ column }) => (
      <DataTableColumnHeader column={column}>版本</DataTableColumnHeader>
    ),
  },
  {
    id: 'actions',
    header: '操作',
    meta: { align: 'end' },
    cell: ({ row }) => (
      <DataTableActions aria-label={row.original.version + ' 操作'}>
        <Button variant="ghost">查看</Button>
        <DropdownMenu
          align="end"
          trigger={
            <Button
              aria-label={row.original.version + ' 更多操作'}
              size="icon-sm"
              variant="ghost"
            >
              <MoreHorizontal />
            </Button>
          }
          items={[
            { label: '下载日志' },
            { label: '归档记录' },
            { type: 'separator' },
            { label: '删除记录', destructive: true },
          ]}
        />
      </DataTableActions>
    ),
  },
]

<DataTable
  columns={columns}
  data={releaseRecords}
  filterColumn="version"
/>`,
      wide: true,
      previewHeight: 580,
    },
    {
      title: '分组表头',
      description:
        '在 ColumnDef 中嵌套 columns 即可形成多级表头；DataTable 会计算跨列、层级和空状态宽度。',
      preview: <DataTableGroupedHeaderDemo />,
      code: `import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@heliannuuthus/ui/data-table'

const columns: ColumnDef<Release>[] = [
  {
    header: '发布信息',
    columns: [
      { accessorKey: 'version', header: '版本' },
      { accessorKey: 'environment', header: '环境' },
    ],
  },
  {
    header: '执行情况',
    columns: [
      { accessorKey: 'owner', header: '负责人' },
      { accessorKey: 'status', header: '状态' },
    ],
  },
  {
    header: '操作',
    columns: [
      {
        id: 'detail',
        header: '记录',
        meta: { align: 'end' },
        cell: ({ row }) => <Button>{row.original.version} 详情</Button>,
      },
    ],
  },
]

<DataTable columns={columns} data={releaseRecords} />`,
      wide: true,
      previewHeight: 560,
    },
  ],
  empty: [
    {
      title: 'Props 配置',
      description:
        '常见空状态直接配置图标、标题、说明和操作；场景变化时只替换对应 props。',
      harness: [
        {
          name: 'context',
          label: '场景',
          defaultValue: 'new',
          options: [
            { label: '首次使用', value: 'new' },
            { label: '筛选无结果', value: 'filtered' },
          ],
        },
      ],
      preview: (values) => (
        <EmptyReleaseDemo
          context={values.context === 'filtered' ? 'filtered' : 'new'}
        />
      ),
      code: `import { Empty } from '@heliannuuthus/ui/empty'

<Empty
  icon={<Cloud />}
  title="还没有生产发布"
  description="完成预检后，可以从这里安排第一次生产发布。"
  actions={<Button>安排发布</Button>}
/>`,
      previewHeight: 420,
    },
    {
      title: '自定义组合',
      description:
        '只有品牌插画、状态摘要或复杂操作布局才切换到 custom 变体，并组合 Header 与 Content。',
      preview: <EmptyCompositionDemo />,
      code: `import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@heliannuuthus/ui/empty'

<Empty variant="custom">
  <EmptyHeader>
    <EmptyMedia><ShieldCheck /></EmptyMedia>
    <EmptyTitle>等待安全审计</EmptyTitle>
    <EmptyDescription>审计通过前暂无可发布版本。</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    {/* 状态摘要和自定义操作 */}
  </EmptyContent>
</Empty>`,
      previewHeight: 440,
    },
  ],
  'hover-card': [
    {
      title: '负责人预览',
      description:
        '在不离开当前文字上下文的前提下，通过悬停或键盘聚焦补充实体信息。',
      harness: [
        {
          name: 'side',
          label: '位置',
          defaultValue: 'bottom',
          options: [
            { label: '下方', value: 'bottom' },
            { label: '右侧', value: 'right' },
          ],
        },
      ],
      preview: (values) => (
        <HoverCardOwnerDemo
          side={values.side === 'right' ? 'right' : 'bottom'}
        />
      ),
      code: `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@heliannuuthus/ui/hover-card'

<HoverCard>
  <HoverCardTrigger>@linmo</HoverCardTrigger>
  <HoverCardContent side="bottom">负责人资料</HoverCardContent>
</HoverCard>`,
      previewHeight: 340,
    },
  ],
  item: [
    {
      title: '协作动态',
      description:
        '用稳定的媒体、内容和操作插槽组织不同长度的列表项，同时切换整体强调程度。',
      harness: [
        {
          name: 'variant',
          label: '样式',
          defaultValue: 'outline',
          options: [
            { label: '默认', value: 'default' },
            { label: '描边', value: 'outline' },
            { label: '柔和', value: 'muted' },
          ],
        },
      ],
      preview: (values) => (
        <ItemActivityDemo
          variant={
            values.variant === 'default' || values.variant === 'muted'
              ? values.variant
              : 'outline'
          }
        />
      ),
      code: `import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@heliannuuthus/ui/item'

<Item variant="outline">
  <ItemMedia variant="icon"><MessageCircle /></ItemMedia>
  <ItemContent>
    <ItemTitle>林默回复了检查项</ItemTitle>
    <ItemDescription>确认索引变更不会锁表。</ItemDescription>
  </ItemContent>
  <ItemActions>{/* actions */}</ItemActions>
</Item>`,
      previewHeight: 430,
    },
  ],
  marker: [
    {
      title: '时间线标记',
      description: '在连续内容之间标记关键时间点；分隔线和下边框适合不同密度。',
      harness: [
        {
          name: 'variant',
          label: '样式',
          defaultValue: 'separator',
          options: [
            { label: '默认', value: 'default' },
            { label: '分隔', value: 'separator' },
            { label: '下边框', value: 'border' },
          ],
        },
      ],
      preview: (values) => (
        <MarkerTimelineDemo
          variant={
            values.variant === 'default' || values.variant === 'border'
              ? values.variant
              : 'separator'
          }
        />
      ),
      code: `import { Marker, MarkerContent, MarkerIcon } from '@heliannuuthus/ui/marker'

<Marker variant="separator">
  <MarkerIcon><CircleDot /></MarkerIcon>
  <MarkerContent>生产发布开始 · 21:46</MarkerContent>
</Marker>`,
      previewHeight: 380,
    },
  ],
  message: [
    {
      title: '完整消息结构',
      description:
        '把头像、发送者、消息内容和送达状态组合为一条完整消息，并用对齐表达说话方。',
      harness: [
        {
          name: 'align',
          label: '对齐',
          defaultValue: 'start',
          options: [
            { label: '接收方', value: 'start' },
            { label: '发送方', value: 'end' },
          ],
        },
      ],
      preview: (values) => (
        <MessageReviewDemo align={values.align === 'end' ? 'end' : 'start'} />
      ),
      code: `import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from '@heliannuuthus/ui/message'

<Message align="start">
  <MessageAvatar>{/* avatar */}</MessageAvatar>
  <MessageContent>
    <MessageHeader>林默 · 发布负责人</MessageHeader>
    <Bubble><BubbleContent>预检通过了。</BubbleContent></Bubble>
    <MessageFooter>21:46 · 已读</MessageFooter>
  </MessageContent>
</Message>`,
      previewHeight: 380,
    },
  ],
  'message-scroller': [
    {
      title: '发布消息流',
      description:
        '在固定高度中保持消息锚点、滚动位置和“回到最新”操作，适合持续追加的会话。',
      preview: <MessageScrollerReleaseDemo />,
      code: `import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@heliannuuthus/ui/message-scroller'

<MessageScrollerProvider defaultScrollPosition="end">
  <MessageScroller>
    <MessageScrollerViewport>
      <MessageScrollerContent>
        {messages.map((message) => (
          <MessageScrollerItem messageId={message.id} scrollAnchor>
            {message.content}
          </MessageScrollerItem>
        ))}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`,
      previewHeight: 520,
    },
  ],
  tooltip: [
    {
      title: '八个方位',
      description:
        '将常用方位围绕同一参照物完整展示，悬停或聚焦任意按钮即可检查方向和对齐方式。',
      preview: <TooltipPlacementsDemo />,
      code: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@heliannuuthus/ui/tooltip'

<TooltipProvider delay={100}>
  <Tooltip>
    <TooltipTrigger><Button>左上</Button></TooltipTrigger>
    <TooltipContent side="top" align="start">左上提示</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      previewHeight: 440,
      wide: true,
    },
  ],
};

for (const [slug, examples] of Object.entries(dataDisplayExamples)) {
  componentDocumentation[slug]?.examples.push(...examples);
}

const feedbackExamples: Record<string, ComponentExample[]> = {
  'alert-dialog': [
    {
      title: '删除预览环境',
      description:
        '仅用于必须由用户确认的警告或危险操作；成功和普通信息应使用 Alert 或 Toast。',
      harness: [
        {
          name: 'size',
          label: '尺寸',
          defaultValue: 'default',
          options: [
            { label: '默认', value: 'default' },
            { label: '紧凑', value: 'sm' },
          ],
        },
      ],
      preview: (values) => (
        <AlertDialogDeleteDemo size={values.size === 'sm' ? 'sm' : 'default'} />
      ),
      code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@heliannuuthus/ui/alert-dialog'

<AlertDialog>
  <AlertDialogTrigger>删除预览环境</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>删除 preview-142？</AlertDialogTitle>
      <AlertDialogDescription>此操作无法撤销。</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>保留环境</AlertDialogCancel>
      <AlertDialogAction variant="destructive">确认删除</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      previewHeight: 300,
    },
  ],
  dialog: [
    {
      title: '安排生产发布',
      description:
        '在不离开当前页面的情况下完成一项聚焦编辑任务，并保留明确的取消和保存动作。',
      preview: <DialogReleaseDemo />,
      code: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@heliannuuthus/ui/dialog'

<Dialog>
  <DialogTrigger>安排发布</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>安排生产环境发布</DialogTitle>
      <DialogDescription>选择版本和发布时间。</DialogDescription>
    </DialogHeader>
    {/* fields */}
    <DialogFooter>{/* actions */}</DialogFooter>
  </DialogContent>
</Dialog>`,
      previewHeight: 300,
    },
  ],
  drawer: [
    {
      title: '四个方向',
      description:
        '统一从上、右、下、左进入；adaptive 模式在窄屏保留手势，在宽屏收敛为稳定的边缘面板。',
      preview: <DrawerReleaseDemo />,
      code: `import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@heliannuuthus/ui/drawer'

<Drawer behavior="adaptive" side="right">
  <DrawerTrigger>从右侧打开</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>今晚的发布窗口</DrawerTitle>
      <DrawerDescription>22:00–23:00</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`,
      previewHeight: 340,
    },
    {
      title: '绑定父容器',
      description:
        '传入 container 后，Portal、视口与面板都限制在指定父容器内，四个方向仍保持一致。',
      preview: <DrawerContainedDemo />,
      code: `const containerRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} className="relative overflow-hidden">
  <Drawer container={containerRef} side="left" behavior="panel">
    <DrawerTrigger>从左侧打开</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>局部筛选</DrawerTitle>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
</div>`,
      previewHeight: 560,
      wide: true,
    },
  ],
  popover: [
    {
      title: '查看发布负责人',
      description:
        '在触发器附近补充少量关联信息与轻量操作，不打断当前阅读上下文。',
      harness: [
        {
          name: 'side',
          label: '位置',
          defaultValue: 'bottom',
          options: [
            { label: '下方', value: 'bottom' },
            { label: '右侧', value: 'right' },
          ],
        },
      ],
      preview: (values) => (
        <PopoverOwnersDemo
          side={values.side === 'right' ? 'right' : 'bottom'}
        />
      ),
      code: `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@heliannuuthus/ui/popover'

<Popover>
  <PopoverTrigger>3 位负责人</PopoverTrigger>
  <PopoverContent side="bottom">
    <PopoverHeader>
      <PopoverTitle>发布负责人</PopoverTitle>
      <PopoverDescription>发布和回滚时会通知这些成员。</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`,
      previewHeight: 300,
    },
  ],
  progress: [
    {
      title: '部署进度',
      description:
        '把完成比例与当前阶段放在一起，让用户知道任务正在做什么以及还剩多少。',
      preview: <ProgressReleaseDemo />,
      code: `import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@heliannuuthus/ui/progress'

<Progress effect="sparkle" value={68}>
  <ProgressLabel>生产环境</ProgressLabel>
  <ProgressValue />
</Progress>`,
      previewHeight: 360,
    },
  ],
  skeleton: [
    {
      title: '发布列表骨架',
      description:
        '加载前复刻最终内容的层级和密度，避免数据出现时产生明显布局跳动。',
      harness: [
        {
          name: 'density',
          label: '密度',
          defaultValue: 'comfortable',
          options: [
            { label: '舒适', value: 'comfortable' },
            { label: '紧凑', value: 'compact' },
          ],
        },
        {
          name: 'effect',
          label: '加载效果',
          defaultValue: 'shimmer',
          options: [
            { label: '镜面扫光', value: 'shimmer' },
            { label: '明暗呼吸', value: 'pulse' },
            { label: '静态', value: 'none' },
          ],
        },
      ],
      preview: (values) => (
        <SkeletonReleaseDemo
          density={values.density === 'compact' ? 'compact' : 'comfortable'}
          effect={
            values.effect === 'pulse' || values.effect === 'none'
              ? values.effect
              : 'shimmer'
          }
        />
      ),
      code: `import { Skeleton } from '@heliannuuthus/ui/skeleton'

<div className="release-row">
  <Skeleton className="size-8 rounded-full" effect="shimmer" />
  <div>
    <Skeleton className="h-3 w-28" />
    <Skeleton className="mt-2 h-2.5 w-40" />
  </div>
</div>`,
      previewHeight: 420,
    },
  ],
  sonner: [
    {
      title: '异步发布结果',
      description:
        '用同一条通知承接异步任务的加载、成功或失败阶段，避免重复堆叠消息。',
      preview: <SonnerPublishDemo />,
      code: `import { Toaster } from '@heliannuuthus/ui/sonner'
import { toast } from 'sonner'

toast.promise(publish(), {
  loading: '正在发布到生产环境…',
  success: 'v0.12.0 已发布',
  error: '发布失败，请检查构建日志',
})

<Toaster position="bottom-right" richColors />`,
      previewHeight: 300,
    },
  ],
  spinner: [
    {
      title: '图标尺寸',
      description:
        '大、中、小直接展示原始加载图标，尺寸不会隐含按钮高度或其他容器样式。',
      preview: <SpinnerSizesDemo />,
      code: `import { Spinner } from '@heliannuuthus/ui/spinner'

<Spinner aria-label="小号加载" size="sm" />
<Spinner aria-label="正在加载" />
<Spinner aria-label="大号加载" size="lg" />`,
      previewHeight: 300,
    },
    {
      title: '局部加载状态',
      description:
        '只在正在更新的内容区域放置图标与状态说明，页面其他部分保持可阅读、可操作。',
      preview: <SpinnerLoadingDemo />,
      code: `import { Spinner } from '@heliannuuthus/ui/spinner'

<section aria-busy="true" aria-label="正在同步环境状态">
  <div>
    <span>预览环境</span>
    <Spinner aria-label="预览环境同步中" size="sm" />
  </div>
</section>`,
      previewHeight: 420,
      wide: true,
    },
  ],
  toast: [
    {
      title: '全局语义通知',
      description:
        '在应用根部放置 Provider，后代组件通过 useToast 调用 success、info、warning 或 error；默认显示在页面顶部。',
      preview: <ToastSemanticDemo />,
      code: `import { ToastProvider, useToast } from '@heliannuuthus/ui/toast'

function PublishAction() {
  const { toast } = useToast()

  return (
    <Button onClick={() => toast.success('发布已完成')}>
      发布
    </Button>
  )
}

<ToastProvider>
  <App />
</ToastProvider>`,
      previewHeight: 320,
    },
    {
      title: '局部通知',
      description:
        '局部 Provider 会创建独立通知通道，并将 Toast 约束在最近的定位容器中，不覆盖整个页面。',
      preview: <ToastLocalDemo />,
      code: `import { ToastProvider, useToast } from '@heliannuuthus/ui/toast'

function WorkspaceAction() {
  const { toast } = useToast()
  return <Button onClick={() => toast.info('预览已刷新')}>刷新</Button>
}

<div className="relative overflow-hidden">
  <ToastProvider scope="local">
    <WorkspaceAction />
  </ToastProvider>
</div>`,
      previewHeight: 420,
      wide: true,
    },
  ],
};

for (const [slug, examples] of Object.entries(feedbackExamples)) {
  componentDocumentation[slug]?.examples.push(...examples);
}

const dataDisplayApi: Record<string, ApiProperty[]> = {
  accordion: [
    {
      name: 'value / defaultValue',
      description: '使用受控或非受控方式指定展开项。',
      type: 'string[]',
    },
    {
      name: 'onValueChange',
      description: '展开项变化时调用。',
      type: '(value, eventDetails) => void',
    },
    {
      name: 'multiple',
      description: '允许同时展开多个条目。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'indicatorPosition',
      description: '将展开指示器放在标题起始侧或末端。',
      type: "'start' | 'end'",
      defaultValue: "'end'",
    },
    {
      name: 'indicator',
      description: '自定义折叠态指示器；未设置展开态时会随状态旋转。',
      type: 'ReactNode',
      defaultValue: '<ChevronDownIcon />',
    },
    {
      name: 'expandedIndicator',
      description: '可选的展开态指示器，适合加号/减号等两态图标。',
      type: 'ReactNode',
      defaultValue: '—',
    },
    {
      name: 'disabled',
      description: '禁用整个 Accordion 或单个 AccordionItem。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'keepMounted / hiddenUntilFound',
      description: '控制关闭面板是否保留在 DOM，或允许浏览器页内查找展开。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  attachment: [
    {
      name: 'state',
      description: '表达附件当前处理阶段并驱动状态样式。',
      type: "'idle' | 'uploading' | 'processing' | 'error' | 'done'",
      defaultValue: "'done'",
    },
    {
      name: 'size',
      description: '设置附件的整体密度。',
      type: "'xs' | 'sm' | 'default'",
      defaultValue: "'default'",
    },
    {
      name: 'orientation',
      description: '切换行式附件或纵向缩略附件。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'AttachmentMedia.variant',
      description: '选择图标或图片媒体样式。',
      type: "'icon' | 'image'",
      defaultValue: "'icon'",
    },
    {
      name: 'AttachmentTrigger.render',
      description: '将整个附件渲染为链接或按钮触发区域。',
      type: 'ReactElement | render function',
    },
  ],
  avatar: [
    {
      name: 'size',
      description: '设置头像尺寸，并同步 Badge 与分组计数。',
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'AvatarImage.src / alt',
      description: '提供头像资源和替代文本。',
      type: 'string',
    },
    {
      name: 'AvatarFallback',
      description: '图片不可用时显示姓名缩写或图标。',
      type: 'component',
    },
    {
      name: 'AvatarBadge',
      description: '在头像右下角表达在线或认证状态。',
      type: 'component',
    },
    {
      name: 'AvatarGroup / AvatarGroupCount',
      description: '叠放多个头像，并汇总未显示人数。',
      type: 'component',
    },
  ],
  bubble: [
    {
      name: 'variant',
      description: '设置消息气泡的强调与语义外观。',
      type: "'default' | 'secondary' | 'muted' | 'tinted' | 'outline' | 'ghost' | 'destructive'",
      defaultValue: "'default'",
    },
    {
      name: 'align',
      description: '将气泡对齐到消息流起始侧或末尾侧。',
      type: "'start' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'BubbleContent.render',
      description: '将内容渲染为可交互按钮、链接或自定义元素。',
      type: 'ReactElement | render function',
    },
    {
      name: 'BubbleReactions.side / align',
      description: '定位气泡边缘的回应或状态。',
      type: "'top' | 'bottom' / 'start' | 'end'",
    },
  ],
  carousel: [
    {
      name: 'variant',
      description: '选择标准滑动或带 3D 景深过渡的展示方式。',
      type: "'default' | 'depth'",
      defaultValue: "'default'",
    },
    {
      name: 'autoplay / autoplayDelay',
      description: '开启自动前进并设置每次切换之间的等待时间。',
      type: 'boolean / number',
      defaultValue: 'false / 3000',
    },
    {
      name: 'loop',
      description: '让最后一项与第一项首尾相接并持续循环。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'pauseOnHover',
      description: '自动播放时，指针进入轮播区域即暂停，离开后继续。',
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      name: 'opts',
      description: '传入对齐、每次滚动数量等底层 Embla 配置。',
      type: 'CarouselOptions',
    },
    {
      name: 'plugins',
      description: '连接自动播放等 Embla 插件。',
      type: 'CarouselPlugin',
    },
    {
      name: 'setApi',
      description: '取得轮播实例以读取当前页或执行命令。',
      type: '(api: CarouselApi) => void',
    },
    {
      name: 'CarouselPrevious / CarouselNext.children',
      description: '替换默认方向图标，同时保留滚动行为和禁用状态。',
      type: 'ReactNode',
    },
    {
      name: 'CarouselDots.position',
      description: '将页码点放在轮播上方或下方。',
      type: "'top' | 'bottom'",
      defaultValue: "'bottom'",
    },
    {
      name: 'CarouselDots.children',
      description: '按页码索引和选中状态自定义每一个指示点。',
      type: 'ReactNode | ({ index, isSelected }) => ReactNode',
    },
    {
      name: 'useCarousel',
      description: '读取当前页、总页数和滚动方法以构建完全自定义的控制器。',
      type: 'hook',
    },
  ],
  chart: [
    {
      name: 'ChartContainer.config',
      description:
        '把 Recharts 的 dataKey 映射为主题颜色、可读标签和可选图标，不定义图表类型或数据。',
      type: 'ChartConfig',
    },
    {
      name: 'ChartContainer.children',
      description:
        '接收 BarChart、LineChart、PieChart 等 Recharts 图表元素，由 Recharts 执行实际绘制。',
      type: 'Recharts chart element',
    },
    {
      name: 'ChartContainer.initialDimension',
      description: '为首次测量前提供稳定尺寸，减少布局跳动。',
      type: '{ width: number; height: number }',
      defaultValue: '{ width: 320, height: 200 }',
    },
    {
      name: 'ChartTooltipContent.indicator',
      description: '设置统一 Tooltip 中数据系列的颜色标记样式。',
      type: "'dot' | 'line' | 'dashed'",
      defaultValue: "'dot'",
    },
    {
      name: 'hideLabel / hideIndicator',
      description: '按展示密度隐藏 Tooltip 标签或系列标记。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'ChartLegendContent.verticalAlign',
      description: '根据 Recharts 图例位置设置上方或下方的布局间距。',
      type: "'top' | 'bottom'",
    },
  ],
  collapsible: [
    {
      name: 'open / defaultOpen',
      description: '使用受控或非受控方式管理内容展开状态。',
      type: 'boolean',
    },
    {
      name: 'onOpenChange',
      description: '用户展开或收起内容时调用。',
      type: '(open: boolean, eventDetails) => void',
    },
    {
      name: 'disabled',
      description: '阻止触发器改变展开状态。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'CollapsibleTrigger.render',
      description: '使用独立 Button 或自定义元素控制内容展开。',
      type: 'ReactElement | render function',
    },
    {
      name: 'CollapsibleHeader',
      description: '将整个标题区域渲染为可点击、可聚焦的展开触发器。',
      type: 'component',
    },
    {
      name: 'CollapsibleContent',
      description: '承载可折叠内容，并默认提供卷起、铺开的高度与透明度动效。',
      type: 'component',
    },
    {
      name: 'CollapsibleIndicator.children',
      description: '替换默认箭头；图标会跟随展开状态旋转。',
      type: 'ReactNode',
      defaultValue: '<ChevronDownIcon />',
    },
    {
      name: 'CollapsibleFooter',
      description: '在展开内容底部组合说明、状态或操作。',
      type: 'component',
    },
  ],
  counter: [
    {
      name: 'value',
      description: '设置需要展示并驱动逐位滚动的数值。',
      type: 'number',
    },
    {
      name: 'places',
      description:
        '固定需要展示的数位；使用小数点字符串分隔整数和小数位，省略时根据 value 自动推导。',
      type: "readonly (number | '.')[]",
    },
    {
      name: 'fontSize / fontWeight / gap',
      description: '设置数字字号、字重和数位间距。',
      type: 'number | CSS font weight',
      defaultValue: '64 / 700 / 4',
    },
    {
      name: 'prefix / suffix',
      description: '在滚动数值前后组合货币、单位或其他视觉内容。',
      type: 'ReactNode',
    },
    {
      name: 'valueText',
      description: '为辅助技术提供包含单位和上下文的完整数值文本。',
      type: 'string',
    },
    {
      name: 'springOptions',
      description: '调整各数位滚动时的弹簧参数。',
      type: 'SpringOptions',
    },
  ],
  'data-table': [
    {
      name: 'columns',
      description: '定义访问键、表头、单元格和嵌套列组。',
      type: 'ColumnDef<TData, TValue>[]',
    },
    {
      name: 'ColumnDef.cell',
      description: '根据当前 row、cell 和 table 上下文渲染内容或操作。',
      type: '(context: CellContext) => ReactNode',
    },
    {
      name: 'ColumnDef.columns',
      description: '嵌套子列并生成多级分组表头。',
      type: 'ColumnDef<TData>[]',
    },
    {
      name: 'ColumnDef.meta',
      description: '设置表头与单元格的对齐和扩展类名。',
      type: "{ align?: 'start' | 'center' | 'end'; headerClassName?; cellClassName? }",
    },
    {
      name: 'DataTableColumnHeader',
      description: '组合可排序的列标题，并显示排序提示图标。',
      type: 'component',
    },
    {
      name: 'DataTableActions',
      description: '在操作列内靠右组合一个或多个按钮、菜单或链接。',
      type: 'component',
    },
    {
      name: 'DataTableActions.aria-label',
      description: '使用当前记录标识为每一行的操作组提供唯一名称。',
      type: 'string',
    },
    {
      name: 'data',
      description: '提供表格数据记录。',
      type: 'TData[]',
    },
    {
      name: 'filterColumn',
      description: '指定由顶部输入框筛选的列 id。',
      type: 'string',
    },
    {
      name: 'filterPlaceholder',
      description: '设置筛选输入框提示与可访问名称。',
      type: 'string',
      defaultValue: "'筛选…'",
    },
    {
      name: 'emptyMessage',
      description: '无匹配行时跨列展示的说明。',
      type: 'string',
      defaultValue: "'暂无数据'",
    },
  ],
  empty: [
    {
      name: 'variant',
      description: '使用默认 props 布局，或切换到完全自定义的组合布局。',
      type: "'default' | 'custom'",
      defaultValue: "'default'",
    },
    {
      name: 'icon',
      description: '替换默认 Inbox 图标；传入 null 可明确隐藏图标。',
      type: 'ReactNode',
      defaultValue: '<InboxIcon />',
    },
    {
      name: 'title',
      description: '说明当前为什么没有内容；传入 null 可隐藏标题。',
      type: 'ReactNode',
      defaultValue: "'暂无内容'",
    },
    {
      name: 'description',
      description: '补充原因、筛选建议或下一步说明。',
      type: 'ReactNode',
    },
    {
      name: 'actions',
      description: '渲染主要按钮、链接或一组相关操作。',
      type: 'ReactNode',
    },
    {
      name: 'EmptyHeader / EmptyMedia / EmptyTitle / EmptyDescription',
      description: '在 custom 变体中组合完全自定义的头部内容。',
      type: 'components',
    },
    {
      name: 'EmptyContent',
      description: '在 custom 变体中承载状态摘要和自定义操作。',
      type: 'component',
    },
  ],
  'hover-card': [
    {
      name: 'open / defaultOpen',
      description: '使用受控或非受控方式管理预览卡片。',
      type: 'boolean',
    },
    {
      name: 'onOpenChange',
      description: '卡片因悬停、聚焦或关闭操作变化时调用。',
      type: '(open: boolean, eventDetails) => void',
    },
    {
      name: 'HoverCardContent.side',
      description: '设置内容相对触发器的首选方向。',
      type: "'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end'",
      defaultValue: "'bottom'",
    },
    {
      name: 'align / sideOffset / alignOffset',
      description: '微调浮层对齐方式与触发器间距。',
      type: 'Positioner props',
    },
  ],
  item: [
    {
      name: 'variant',
      description: '设置列表项的默认、描边或柔和外观。',
      type: "'default' | 'outline' | 'muted'",
      defaultValue: "'default'",
    },
    {
      name: 'size',
      description: '设置列表项内容密度。',
      type: "'xs' | 'sm' | 'default'",
      defaultValue: "'default'",
    },
    {
      name: 'render',
      description: '将 Item 根节点渲染为链接、按钮或自定义元素。',
      type: 'ReactElement | render function',
    },
    {
      name: 'ItemMedia.variant',
      description: '选择普通内容、图标或图片媒体。',
      type: "'default' | 'icon' | 'image'",
      defaultValue: "'default'",
    },
    {
      name: 'ItemHeader / ItemFooter',
      description: '添加横跨整行的前置或后置内容。',
      type: 'component',
    },
  ],
  marker: [
    {
      name: 'variant',
      description: '选择纯文本、两侧分隔线或下边框标记。',
      type: "'default' | 'separator' | 'border'",
      defaultValue: "'default'",
    },
    {
      name: 'render',
      description: '将 Marker 根节点渲染为链接或自定义元素。',
      type: 'ReactElement | render function',
    },
    {
      name: 'MarkerIcon',
      description: '承载装饰性状态图标并自动隐藏可访问语义。',
      type: 'component',
    },
    {
      name: 'MarkerContent',
      description: '承载可换行的标记文字或链接。',
      type: 'component',
    },
  ],
  message: [
    {
      name: 'align',
      description: '控制头像与内容的起始侧或末尾侧排列。',
      type: "'start' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'MessageAvatar',
      description: '承载头像、机器人图标或发送者标识。',
      type: 'component',
    },
    {
      name: 'MessageHeader / MessageFooter',
      description: '展示发送者、时间和送达状态等消息元数据。',
      type: 'component',
    },
    {
      name: 'MessageContent',
      description: '组合一个或多个 Bubble、附件和消息操作。',
      type: 'component',
    },
  ],
  'message-scroller': [
    {
      name: 'autoScroll',
      description: '追加消息时在用户位于末尾时持续跟随。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'defaultScrollPosition',
      description: '设置首次渲染时的起点、末尾或最后锚点。',
      type: "'start' | 'end' | 'last-anchor'",
      defaultValue: "'end'",
    },
    {
      name: 'MessageScrollerItem.messageId / scrollAnchor',
      description: '标识消息并声明稳定滚动锚点。',
      type: 'string / boolean',
    },
    {
      name: 'MessageScrollerButton.direction',
      description: '显示滚动到开头或末尾的浮动操作。',
      type: "'start' | 'end'",
      defaultValue: "'end'",
    },
    {
      name: 'useMessageScroller',
      description: '以编程方式滚动到开头、末尾或指定消息。',
      type: 'hook',
    },
  ],
  table: [
    {
      name: 'TableCaption',
      description: '提供整张表格的语义标题或补充说明。',
      type: 'component',
    },
    {
      name: 'TableHeader / TableHead',
      description: '定义列标题和表头语义。',
      type: 'component',
    },
    {
      name: 'TableBody / TableRow / TableCell',
      description: '组织数据行与单元格，并支持选中状态。',
      type: 'component',
    },
    {
      name: 'TableFooter',
      description: '展示汇总、总计或表尾说明。',
      type: 'component',
    },
    {
      name: 'className',
      description: '扩展 table 或各语义分区的样式。',
      type: 'string',
    },
  ],
  tooltip: [
    {
      name: 'TooltipProvider.delay',
      description: '设置同一 Provider 下 Tooltip 的打开延迟。',
      type: 'number',
      defaultValue: '0',
    },
    {
      name: 'open / defaultOpen',
      description: '使用受控或非受控方式管理 Tooltip。',
      type: 'boolean',
    },
    {
      name: 'onOpenChange',
      description: '因悬停、聚焦或关闭导致状态变化时调用。',
      type: '(open: boolean, eventDetails) => void',
    },
    {
      name: 'TooltipContent.side',
      description: '设置内容相对触发器的首选方向。',
      type: "'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end'",
      defaultValue: "'top'",
    },
    {
      name: 'align / sideOffset / alignOffset',
      description: '微调浮层对齐和与触发器的间距。',
      type: 'Positioner props',
    },
  ],
  alert: [
    {
      name: 'variant',
      description:
        '设置提示的语义状态；destructive 作为 error 的兼容别名保留。',
      type: "'default' | 'info' | 'success' | 'warning' | 'error' | 'destructive'",
      defaultValue: "'default'",
    },
    {
      name: 'AlertAction',
      description: '放置查看详情、重试或关闭等与当前提示直接相关的操作。',
      type: 'component',
    },
  ],
  drawer: [
    {
      name: 'side',
      description: '设置面板进入和停靠的方向。',
      type: "'top' | 'right' | 'bottom' | 'left'",
      defaultValue: "'bottom'",
    },
    {
      name: 'behavior',
      description:
        'adaptive 在不同宽度下调整手柄与贴边样式；gesture 保留触摸抽屉形态；panel 使用稳定面板形态。',
      type: "'adaptive' | 'gesture' | 'panel'",
      defaultValue: "'adaptive'",
    },
    {
      name: 'container',
      description:
        '将 Portal、视口和面板绑定到指定父容器；父容器需要建立定位和裁切上下文。',
      type: 'HTMLElement | RefObject<HTMLElement | null>',
    },
    {
      name: 'snapPoints',
      description: '为手势模式定义分段展开位置。',
      type: '(number | string)[]',
    },
    {
      name: 'DrawerContent.showCloseButton',
      description: '控制右上角的标准关闭操作。',
      type: 'boolean',
      defaultValue: 'true',
    },
  ],
  progress: [
    {
      name: 'value',
      description: '设置当前进度；传入 null 表示无法确定完成比例。',
      type: 'number | null',
      defaultValue: 'null',
    },
    {
      name: 'effect',
      description: '在数值变化时为指示条前沿增加一次短暂的推进动效。',
      type: "'none' | 'sparkle'",
      defaultValue: "'none'",
    },
    {
      name: 'min / max',
      description: '设置进度范围，并同步无障碍数值。',
      type: 'number',
      defaultValue: '0 / 100',
    },
  ],
  skeleton: [
    {
      name: 'effect',
      description:
        '选择镜面扫光、明暗呼吸或静态占位；系统要求减少动态效果时，扫光会自动停止。',
      type: "'shimmer' | 'pulse' | 'none'",
      defaultValue: "'shimmer'",
    },
  ],
};

for (const [slug, api] of Object.entries(dataDisplayApi)) {
  if (componentDocumentation[slug]) componentDocumentation[slug].api = api;
}

componentDocumentation.carousel.summary =
  '横向浏览同级内容，支持标准与景深动效、自动播放、首尾循环，以及可自定义的箭头和页码点。';
componentDocumentation.carousel.whenToUse = [
  '同一层级有多张重点内容卡片，但当前区域只适合突出展示一项。',
  '需要轮播营销亮点、版本更新或媒体内容，并允许用户主动前后浏览。',
];
componentDocumentation.carousel.accessibility = [
  '轮播区域、幻灯片、前后按钮和页码点均保留可识别的语义与键盘操作。',
  '开启自动播放后，动态内容不会持续触发读屏播报；系统要求减少动态效果时会停止自动播放和景深过渡。',
];
componentDocumentation.carousel.pitfalls = [
  '不要用自动播放承载必须阅读或必须操作的内容，用户仍应能通过箭头和页码点主动导航。',
  '自动播放默认悬停暂停；若关闭 pauseOnHover，需要提供其他清晰的暂停方式。',
  '单屏塞入过多文字会让轮播难以扫读，内容较长时改用列表或分页。',
];

componentDocumentation.counter.summary =
  '以逐位滚动动画呈现持续变化的数字；组件只负责展示，数值和业务操作由外部状态控制。';
componentDocumentation.counter.whenToUse = [
  '需要强调统计指标、余额、计数或实时读数的变化过程。',
  '需要在固定数位中更新数字，减少整段文本突然替换造成的视觉跳动。',
];
componentDocumentation.counter.parts = [
  {
    name: 'Counter',
    description:
      '根据 value、places 和格式属性渲染可访问的滚动数值，并提供前后缀与样式扩展点。',
  },
];
componentDocumentation.counter.accessibility = [
  '视觉数字对辅助技术隐藏，并通过 valueText 提供完整、稳定的文本值。',
  '高频更新默认不主动播报；确实需要播报变化时，再设置 aria-live="polite"。',
];
componentDocumentation.counter.pitfalls = [
  'Counter 不管理加减或请求状态；按钮、定时器和业务数据应由外部组件组合。',
  '频繁变化时建议固定 places，避免数位数量变化引起布局跳动。',
  '不要为纯装饰或高频实时数据开启 assertive 播报。',
];

componentDocumentation.drawer.summary =
  '统一桌面 Sheet 与移动端 Drawer：从视口或指定父容器的任意边缘打开，并根据 behavior 调整面板与手势呈现。';
componentDocumentation.drawer.whenToUse = [
  '需要从当前视口边缘承接筛选、详情、导航或短流程任务。',
  '需要把临时面板限制在工作台、预览器或卡片等局部父容器中。',
];
componentDocumentation.drawer.parts = [
  {
    name: 'Drawer',
    description: '管理方向、自适应行为、父容器、开关状态与手势参数。',
  },
  {
    name: 'DrawerTrigger / DrawerClose',
    description: '连接打开与关闭操作，并保留焦点返回关系。',
  },
  {
    name: 'DrawerContent',
    description: '渲染面板、遮罩、视口、滑动手柄和标准关闭按钮。',
  },
  {
    name: 'DrawerHeader / DrawerFooter',
    description: '组合标题说明、正文与底部操作。',
  },
];
componentDocumentation.drawer.pitfalls = [
  '使用 container 时，父容器必须设置 position: relative 和 overflow: hidden。',
  '不要仅根据设备名称选择行为；触摸密集任务使用 gesture，稳定编辑面板使用 panel，不确定时使用 adaptive。',
];

componentDocumentation.chart.summary =
  'Chart 是 Recharts 的设计系统适配层，统一响应式尺寸、主题颜色、Tooltip 和 Legend；它本身不绘制具体图表。';
componentDocumentation.chart.whenToUse = [
  '已经使用 Recharts 绘制柱状图、折线图、面积图或饼图，需要接入组件库的明暗主题与视觉规范。',
  '多个图表需要共享 dataKey 对应的颜色、名称、图标，以及一致的 Tooltip 和 Legend。',
];
componentDocumentation.chart.parts = [
  {
    name: 'ChartContainer',
    description:
      '提供 ResponsiveContainer、图表配置上下文和按实例隔离的主题 CSS 变量。',
  },
  {
    name: 'ChartConfig',
    description: '把 Recharts 的 dataKey 映射到颜色、可读名称和图标。',
  },
  {
    name: 'ChartTooltip / ChartTooltipContent',
    description: '连接 Recharts Tooltip，并使用组件库样式展示系列名称与数值。',
  },
  {
    name: 'ChartLegend / ChartLegendContent',
    description: '连接 Recharts Legend，并根据 ChartConfig 渲染统一图例。',
  },
];
componentDocumentation.chart.accessibility = [
  '为图表所在区域提供标题或文本摘要，不能只依赖悬停 Tooltip 传达关键信息。',
  '不要只用颜色区分系列；同时提供名称、图例、标记或必要的数据表。',
];
componentDocumentation.chart.pitfalls = [
  '不要把 ChartContainer 当作绘图 API；图表类型、坐标轴、比例尺和数据仍由 Recharts 组件定义。',
  '不要在 ChartConfig 中处理数据请求、聚合或业务计算，它只描述系列的展示信息。',
];

componentDocumentation.collapsible.summary =
  '按需展开一块辅助内容；既可使用独立按钮触发，也可让整个自定义 Header 成为触发区域。';
componentDocumentation.collapsible.whenToUse = [
  '默认只展示摘要，用户需要时再查看日志、详情、说明或高级配置。',
  '页面只需要控制一个内容区域；多个并列区域需要互相协调时使用 Accordion。',
];
componentDocumentation.collapsible.parts = [
  {
    name: 'Collapsible',
    description: '管理单个内容区域的受控或非受控展开状态。',
  },
  {
    name: 'CollapsibleTrigger',
    description: '将独立 Button 或自定义元素连接为展开触发器。',
  },
  {
    name: 'CollapsibleHeader / CollapsibleIndicator',
    description: '构建整行可点击的自定义标题，并显示随状态变化的指示器。',
  },
  {
    name: 'CollapsibleContent / CollapsibleFooter',
    description: '组合带默认展开动效的内容区域和可选底部信息。',
  },
];
componentDocumentation.collapsible.accessibility = [
  'Header 和独立 Trigger 都使用原生按钮语义，并通过 aria-expanded 传达展开状态。',
  '动效会响应 prefers-reduced-motion；不要移除键盘焦点样式。',
];
componentDocumentation.collapsible.pitfalls = [
  '不要在可点击的 CollapsibleHeader 内嵌套链接或按钮；有额外操作时改用独立 CollapsibleTrigger。',
  '不要用 Collapsible 组织多个需要单选或多选联动的面板，这类结构应使用 Accordion。',
];

componentDocumentation['data-table'].summary =
  'DataTable 把 TanStack Table 的数据模型渲染成组件库表格；列定义同时负责访问数据、组合表头、渲染单元格和声明行操作。';
componentDocumentation['data-table'].whenToUse = [
  '需要对一组同构记录进行筛选、排序、分页，或在每行提供上下文操作。',
  '字段较多，需要通过分组表头表达列之间的层级关系。',
];
componentDocumentation['data-table'].parts = [
  {
    name: 'DataTable',
    description: '连接数据、列模型、筛选、排序、表头分组和分页渲染。',
  },
  {
    name: 'ColumnDef',
    description:
      '通过 header、cell、columns 和 meta 声明每列的结构与展示方式。',
  },
  {
    name: 'DataTableColumnHeader',
    description: '为可排序列提供一致的按钮、状态切换和图标。',
  },
  {
    name: 'DataTableActions',
    description: '在普通 cell 中组合当前记录的按钮、菜单或链接。',
  },
];
componentDocumentation['data-table'].accessibility = [
  '分组表头使用 colgroup/col scope，并保留正确的 colSpan 与 rowSpan 关系。',
  '只有图标的行操作必须包含当前记录，例如“v0.12.0 更多操作”，不能让每行都只有“更多”。',
];
componentDocumentation['data-table'].pitfalls = [
  '不要在 DataTable 内硬编码业务操作；通过 ColumnDef.cell 读取 row.original 后组合业务按钮。',
  '不要为了视觉分区手写两个并列表格；使用嵌套 columns 生成真正关联的数据表头。',
  '操作较多时保留一个高频动作，其余收进菜单，避免操作列无限变宽。',
];

componentDocumentation.empty.summary =
  '为空集合或缺失结果提供稳定占位；默认直接渲染图标与标题，常见内容通过 props 配置，复杂展示再使用 custom 组合。';
componentDocumentation.empty.whenToUse = [
  '列表、表格、搜索或首次使用场景当前没有可展示内容。',
  '需要解释空状态原因，并提供一个清晰、可执行的下一步。',
];
componentDocumentation.empty.parts = [
  {
    name: 'Empty',
    description:
      '默认根据 icon、title、description 和 actions 生成完整空状态。',
  },
  {
    name: 'EmptyHeader / EmptyContent',
    description: '仅在 custom 变体中控制复杂标题区、状态摘要和操作布局。',
  },
  {
    name: 'EmptyMedia / EmptyTitle / EmptyDescription',
    description: '为 custom 变体提供与默认布局一致的语义插槽。',
  },
];
componentDocumentation.empty.accessibility = [
  '默认装饰图标会从无障碍树中隐藏，标题和说明承担状态表达。',
  '操作文案应说明下一步，例如“清除筛选”或“创建项目”，不要只写“确定”。',
];
componentDocumentation.empty.pitfalls = [
  '不要为普通空状态重复拼装 Header 和 Content，优先使用 props。',
  '只有需要品牌插画、额外状态摘要或复杂布局时才使用 custom 变体。',
  '加载中、请求失败和权限不足不是空数据，应分别使用 Skeleton、Alert 或专门的权限反馈。',
];

componentDocumentation.spinner.summary =
  '用旋转图标表示无法预估完成时间的短时等待；尺寸只控制图标本身，组件不会附带按钮或布局容器。';
componentDocumentation.spinner.whenToUse = [
  '局部内容正在刷新、同步或生成，且预计很快完成。',
  '需要在紧凑状态行、媒体占位或操作旁边提供轻量等待反馈。',
];
componentDocumentation.spinner.api = [
  {
    name: 'size',
    description: '设置加载图标本身的尺寸，不改变周围容器。',
    type: "'sm' | 'default' | 'lg'",
    defaultValue: "'default'",
  },
  {
    name: 'className',
    description: '覆盖尺寸、颜色或其他 SVG 样式。',
    type: 'string',
  },
];
componentDocumentation.spinner.accessibility = [
  '为独立 Spinner 提供描述当前任务的 aria-label，例如“正在同步环境状态”。',
  '区域加载时在最近的容器设置 aria-busy="true"，并保持其他区域可操作。',
];
componentDocumentation.spinner.pitfalls = [
  '不要为了展示尺寸把 Spinner 包进 Button；按钮加载态应由真实操作按钮自行组合。',
  '长时间或可量化任务应使用 Progress，首屏结构加载优先使用 Skeleton。',
  '不要同时在同一局部区域堆叠多个表达相同状态的 Spinner。',
];

componentDocumentation.toast.summary =
  '在页面顶部短暂反馈操作结果；内置 success、info、warning、error 四种语义样式，并可通过 Provider 隔离全局或局部通知通道。';
componentDocumentation.toast.whenToUse = [
  '操作已经结束，需要短暂确认结果，但不应打断用户当前任务。',
  '组件树中的深层操作需要调用统一的页面级通知，或工作区内部需要独立的局部通知。',
];
componentDocumentation.toast.parts = [
  {
    name: 'ToastProvider',
    description: '创建通知 Context，并根据 scope 渲染全局或局部 Toaster。',
  },
  {
    name: 'useToast',
    description: '在 Provider 后代中取得绑定当前通知通道的 toast API。',
  },
  {
    name: 'Toaster',
    description: '直接配置通知容器的位置、数量、持续时间和局部化方式。',
  },
];
componentDocumentation.toast.api = [
  {
    name: 'ToastProvider.scope / Toaster.scope',
    description: '选择相对视口的全局通知或相对父容器的局部通知。',
    type: "'global' | 'local'",
    defaultValue: "'global'",
  },
  {
    name: 'useToast().toast',
    description: '调用 success、info、warning、error、loading 或 promise。',
    type: 'Toast API',
  },
  {
    name: 'position',
    description: '设置通知相对视口或局部容器的出现位置。',
    type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
    defaultValue: "'top-center'",
  },
  {
    name: 'richColors',
    description: '启用内置语义色；默认已经开启，可按需关闭。',
    type: 'boolean',
    defaultValue: 'true',
  },
];
componentDocumentation.toast.accessibility = [
  'Toast 使用非阻塞通知区域；消息标题应简短，并在 description 中说明必要上下文。',
  '局部通知的父容器必须可见且尺寸稳定，避免通知被意外裁切到无法阅读。',
];
componentDocumentation.toast.pitfalls = [
  '不要在同一应用根部挂载多个未指定 id 的全局 Provider，否则同一通知可能重复展示。',
  'scope="local" 时父容器需要 position: relative 和 overflow: hidden。',
  '需要用户立即确认的危险操作使用 Alert Dialog，持续存在的页面状态使用 Alert。',
];

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
      name: 'onChange',
      description: '选中状态变化时调用。',
      type: '(checked: boolean) => void',
    },
    {
      name: 'disabled',
      description: '阻止交互并降低视觉强调。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'Checkbox.Group.value / defaultValue',
      description: '管理已选中的多个值。',
      type: 'string[]',
    },
    {
      name: 'Checkbox.Group.options',
      description: '从标签与值配置生成一组 Checkbox。',
      type: 'CheckboxOption[]',
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
      description: '选择文本、邮箱、密码等原生输入类型。',
      type: 'HTMLInputTypeAttribute',
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
      name: 'InputGroupAddon.align',
      description: '将附加内容放到行内或块级首尾。',
      type: "'inline-start' | 'inline-end' | 'block-start' | 'block-end'",
    },
    {
      name: 'InputGroupButton',
      description: '承载与当前输入直接关联的紧凑动作。',
      type: 'component',
    },
    {
      name: 'InputGroupInput',
      description: '用于单行输入并继承组级焦点状态。',
      type: 'component',
    },
    {
      name: 'InputGroupTextArea',
      description: '用于多行输入并支持块级附加内容。',
      type: 'component',
    },
    { name: 'maxLength', description: '设置验证码总位数。', type: 'number' },
    {
      name: 'InputOTP.shape',
      description: '切换连接方块或独立方块验证码槽位。',
      type: "'connected' | 'separated'",
      defaultValue: "'connected'",
    },
    {
      name: 'value / onChange',
      description: '管理当前验证码字符串。',
      type: 'string / (value: string) => void',
    },
    {
      name: 'InputOTPSlot.index',
      description: '将可视槽位映射到验证码字符。',
      type: 'number',
    },
    {
      name: 'pattern',
      description: '限制允许输入的字符类型。',
      type: 'string',
    },
    {
      name: 'TextArea / Input.TextArea',
      description: '接收可换行的多行文本，并支持平铺或复合组件入口。',
      type: 'component',
    },
    {
      name: 'TextArea.rows',
      description: '设置初始可见文本行数。',
      type: 'number',
    },
    {
      name: 'TextArea.maxLength',
      description: '限制多行文本可输入的字符数量。',
      type: 'number',
    },
  ],
  radio: [
    {
      name: 'Radio.value',
      description: '标识 Radio 在所属分组中的值。',
      type: 'string | number',
    },
    {
      name: 'Radio.Group.value / defaultValue',
      description: '管理互斥选择中的当前值。',
      type: 'string',
    },
    {
      name: 'Radio.Group.onChange',
      description: '当前单选值变化时调用。',
      type: '(value: string) => void',
    },
    {
      name: 'Radio.Group.options',
      description: '从标签与值配置生成一组 Radio。',
      type: 'RadioOption[]',
    },
    {
      name: 'orientation',
      description: '声明键盘导航方向；横向时启用 Masonry 自适应分栏。',
      type: "'horizontal' | 'vertical'",
    },
    {
      name: 'columns',
      description: '横向布局允许显示的最大列数。',
      type: 'number',
      defaultValue: '3',
    },
    {
      name: 'minColumnWidth',
      description: '横向布局中单个选项的期望最小宽度。',
      type: 'number | string',
      defaultValue: '180',
    },
    {
      name: 'gap',
      description: '设置 Radio.Group 选项之间的水平与垂直间距。',
      type: 'number | string | [number | string, number | string]',
      defaultValue: '12',
    },
    {
      name: 'disabled',
      description: '禁用整个 Radio.Group 或单个 Radio。',
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  select: [
    {
      name: 'items',
      description: '提供固定且可过滤的候选项集合，支持平铺或分组数据。',
      type: 'Item[] | Group<Item>[]',
    },
    {
      name: 'value / defaultValue',
      description: '使用受控或非受控选择值。',
      type: 'Item | Item[] | null',
    },
    {
      name: 'onChange',
      description: '选择新项目时调用。',
      type: '(value: Item | Item[] | null) => void',
    },
    {
      name: 'searchValue / defaultSearchValue / onSearch',
      description: '受控或非受控地管理候选项过滤关键词。',
      type: 'string / (query: string) => void',
    },
    {
      name: 'onOpenChange',
      description: '候选弹层打开或关闭时调用。',
      type: '(open: boolean) => void',
    },
    {
      name: 'multiple',
      description: '允许选择多个值，并配合 SelectChips 展示。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'SelectTrigger.showClear / showTrigger',
      description: '控制选择输入框尾部的清除与展开动作。',
      type: 'boolean',
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
      name: 'effect',
      description:
        '为拖拽越过范围边界时增加弹性拉伸和回弹；减少动态效果偏好下自动停用。',
      type: "'none' | 'elastic'",
      defaultValue: "'none'",
    },
    {
      name: 'startIcon / endIcon',
      description:
        '在轨道起止位置组合图标；elastic 模式下对应边缘图标会跟随拉伸反馈。',
      type: 'ReactNode',
    },
    {
      name: 'value / defaultValue',
      description: '设置一个或多个滑块值。',
      type: 'number | number[]',
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
  toggle: [
    {
      name: 'pressed / defaultPressed',
      description: '管理单个 Toggle 的受控或非受控按下状态。',
      type: 'boolean',
    },
    {
      name: 'onChange',
      description: '单个 Toggle 的按下状态变化时调用。',
      type: '(pressed: boolean) => void',
    },
    {
      name: 'variant',
      description: '设置透明或描边外观。',
      type: "'default' | 'outline'",
      defaultValue: "'default'",
    },
    {
      name: 'size',
      description: '设置 Toggle 的控件尺寸。',
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'Toggle.Group.value / defaultValue',
      description: '管理组内当前按下的 Toggle 值。',
      type: 'string[]',
    },
    {
      name: 'Toggle.Group.onChange',
      description: '组内按下值变化时调用。',
      type: '(value: string[]) => void',
    },
    {
      name: 'Toggle.Group.multiple',
      description: '允许同时按下多个 Toggle。',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'Toggle.Group.orientation',
      description: '设置方向并匹配方向键导航。',
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'Toggle.Group.spacing',
      description: '设置组内间距；0 会形成连续的紧凑控件。',
      type: 'number',
      defaultValue: '2',
    },
  ],
};

for (const [slug, api] of Object.entries(dataEntryApi)) {
  if (componentDocumentation[slug]) componentDocumentation[slug].api = api;
}

componentDocumentation.input.summary =
  '通过单行、多行、组合输入和验证码承接不同复杂度的录入任务。';
componentDocumentation.input.whenToUse = [
  '输入单行或多行文本、带前后缀的结构化内容或固定长度验证码。',
  '需要在同一输入任务中组合说明、附加动作和状态反馈。',
];
componentDocumentation.input.parts = [
  { name: 'Input', description: '接收单行文本与原生输入类型。' },
  {
    name: 'TextArea / Input.TextArea',
    description: '接收多行文本，并与 Input 共享状态与样式约定。',
  },
  {
    name: 'InputGroup',
    description: '组合输入控件、前后缀、按钮和块级附加内容。',
  },
  {
    name: 'InputOTP',
    description: '接收固定长度验证码，并支持连接方块与独立方块。',
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

componentDocumentation.checkbox.summary =
  '使用 Checkbox 标记单个可提交选择，并通过 Checkbox.Group 管理多选值。';
componentDocumentation.checkbox.whenToUse = [
  '独立状态需要用户确认后再随表单提交。',
  '一组可见选项允许同时选中多个值。',
];
componentDocumentation.checkbox.parts = [
  {
    name: 'Checkbox',
    description: '同时承载选中控件、可点击标签与单个布尔状态。',
  },
  {
    name: 'Checkbox.Group',
    description: '管理多个 Checkbox 的已选值、禁用状态与布局。',
  },
];

componentDocumentation.radio.summary =
  '使用 Radio 表达单个选项，并通过 Radio.Group 组织互斥选择。';
componentDocumentation.radio.whenToUse = [
  '候选项较少，并希望用户直接看到、比较所有选项。',
  '一组选项只允许选中一个值。',
];
componentDocumentation.radio.parts = [
  { name: 'Radio', description: '表达单个可选项及其选中状态。' },
  {
    name: 'Radio.Group',
    description: '管理一组 Radio 的互斥值、键盘导航与布局。',
  },
];

componentDocumentation.toggle.summary =
  '使用 Toggle 切换单个工具状态，并通过 Toggle.Group 管理单选或多选工具组。';
componentDocumentation.toggle.whenToUse = [
  '工具栏中的一个状态需要立即开启或关闭。',
  '一组紧密相关的工具需要共享单选或多选状态与键盘导航。',
];
componentDocumentation.toggle.parts = [
  { name: 'Toggle', description: '表达单个可按下、可释放的工具状态。' },
  {
    name: 'Toggle.Group',
    description: '管理一组 Toggle 的值、选择模式、方向和紧凑样式。',
  },
];

componentDocumentation.select.summary =
  '从固定候选项中选择一个或多个值，并使用同一套交互直接过滤较长列表。';
componentDocumentation.select.whenToUse = [
  '候选项固定时使用 Select；列表较长时直接输入关键词过滤，无需切换组件。',
  '需要分组、禁用项、多选或自定义弹出层时组合 Select 的对应子组件。',
  '选项简单并希望沿用操作系统交互时使用 NativeSelect。',
];
componentDocumentation.select.parts = [
  {
    name: 'Select',
    description: '统一管理选择值、搜索关键词、弹层状态和候选项过滤。',
  },
  {
    name: 'SelectTrigger / SelectContent / SelectList',
    description: '组成可输入的选择控件及其候选弹层。',
  },
  {
    name: 'SelectGroup / SelectCollection / SelectItem',
    description: '渲染平铺或分组的过滤结果。',
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

const toggleBasicExample = componentDocumentation.toggle.examples[0];
if (toggleBasicExample) {
  toggleBasicExample.description =
    '使用 pressed 或 defaultPressed 管理单个工具状态，状态变化统一通过 onChange 通知。';
  toggleBasicExample.code = `import { Toggle } from '@heliannuuthus/ui/toggle'

<Toggle defaultPressed onChange={setPressed} aria-label="切换粗体">
  <Bold />
  粗体
</Toggle>`;
  toggleBasicExample.previewHeight = 300;
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
  description:
    '选中时以向外爆开的粒子确认操作，取消选中时仅收回勾选标记；同时展示不确定和禁用状态。',
  preview: (
    <div className="example-row">
      <Checkbox className="minimal-control">未选择</Checkbox>
      <Checkbox className="minimal-control" defaultChecked>
        已选择
      </Checkbox>
      <Checkbox className="minimal-control" indeterminate>
        部分选择
      </Checkbox>
      <Checkbox className="minimal-control" disabled>
        不可用
      </Checkbox>
    </div>
  ),
  code: `import { Checkbox } from '@heliannuuthus/ui/checkbox'\n\n<Checkbox>未选择</Checkbox>\n<Checkbox defaultChecked>已选择</Checkbox>\n<Checkbox indeterminate>部分选择</Checkbox>\n<Checkbox disabled>不可用</Checkbox>`,
});

const spaciousPreviewHeights: Record<string, number> = {
  'aspect-ratio': 560,
  card: 560,
  masonry: 520,
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
