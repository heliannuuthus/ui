import { docsCopy } from './i18n/content';
import type { ReactNode } from 'react';
import { Badge, Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { Empty } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Kbd } from '@heliannuuthus/ui';
import { ScrollArea } from '@heliannuuthus/ui';
import { Separator } from '@heliannuuthus/ui';
import { Stack } from '@heliannuuthus/ui';
import { Toggle } from '@heliannuuthus/ui';
import { Typography } from '@heliannuuthus/ui';
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
import {
  CardAnatomyDemo,
  CardBasicDemo,
  CardSemanticDomDemo,
} from './card-preview';
import { ButtonActionsDemo } from './button-preview';
import {
  CommandDialogDemo,
  CommandEmptyDemo,
  CommandGroupsDemo,
  CommandPlaceholderDemo,
} from './command-preview';
import {
  ContextMenuActionsDemo,
  ContextMenuSelectionDemo,
  ContextMenuStateDemo,
  ContextMenuSubmenuDemo,
} from './context-menu-preview';
import {
  MasonryBasicDemo,
  MasonryResponsiveDemo,
  MasonrySpanDemo,
} from './masonry-preview';
import {
  StackAlignmentDemo,
  StackCompactVariantsDemo,
  StackGapDemo,
} from './stack-preview';
import { TableSemanticDomDemo } from './table-preview';
import {
  DropdownMenuActionsDemo,
  DropdownMenuSelectionDemo,
  DropdownMenuSubmenuDemo,
} from './dropdown-menu-preview';
import {
  CheckboxPermissionsDemo,
  CheckboxTasksDemo,
  DatePickerInlineDemo,
  DatePickerReleaseDemo,
  FieldProfileDemo,
  FieldLabelPairingDemo,
  FormCustomControlDemo,
  FormFieldDependencyDemo,
  FormIntegrationDemo,
  InputAffixDemo,
  InputNumberCapacityDemo,
  InputNumberCurrencyDemo,
  InputOtpVerificationDemo,
  InputStatesDemo,
  RadioDeliveryDemo,
  RadioPlanDemo,
  SelectMemberSearchDemo,
  SelectWorkspaceDemo,
  SliderBudgetDemo,
  SliderElasticDemo,
  SliderVerticalDemo,
  SwitchSettingsDemo,
  TextAreaCounterDemo,
  ToggleControlledDemo,
} from './data-entry-previews';
import {
  AccordionDefaultIndicatorDemo,
  AccordionControlledDemo,
  AccordionDisabledItemDemo,
  AccordionDisabledRootDemo,
  AccordionPresenceDemo,
  AccordionReleaseDemo,
  AccordionStartIndicatorDemo,
  AccordionStateIndicatorDemo,
  AttachmentActionsDemo,
  AttachmentBasicDemo,
  AttachmentGroupDemo,
  AttachmentMediaTypeDemo,
  AttachmentOrientationDemo,
  AttachmentSizeDemo,
  AttachmentStateDemo,
  AttachmentTriggerDemo,
  AvatarBadgeDemo,
  AvatarCountDemo,
  AvatarGroupDemo,
  AvatarShapeDemo,
  AvatarSourceDemo,
  BubbleAlignmentDemo,
  BubbleContentPropsDemo,
  BubbleConversationDemo,
  BubbleReactionsDemo,
  BubbleVariantsDemo,
  CarouselAutoplayDemo,
  CarouselClassNamesDemo,
  CarouselControlsDemo,
  CarouselCustomPaginationDemo,
  CarouselDotsDemo,
  CarouselHighlightsDemo,
  CarouselRefDemo,
  CollapsibleBasicDemo,
  CollapsibleIndicatorDemo,
  CollapsibleStateDemo,
  CollapsibleTriggerModesDemo,
  CounterBuildDemo,
  TableManagedExpandableDemo,
  TableManualModeDemo,
  TableControlledStateDemo,
  TableGroupedHeaderDemo,
  TableManagedDemo,
  TableManagedVirtualDemo,
  TableStatusDemo,
  EmptyCompositionDemo,
  EmptyDefaultDemo,
  EmptyIconDemo,
  ItemActivityDemo,
  ItemGroupDemo,
  ItemGroupRenderDemo,
  ItemLinkDemo,
  ItemMediaTypeDemo,
  ItemSizeDemo,
  ItemStructureDemo,
  MarkerLinkDemo,
  ItemMemberDirectoryDemo,
  ItemResourceDemo,
  ItemSettingsDemo,
  MarkerDateSectionDemo,
  MarkerStatusDemo,
  MarkerUnreadDemo,
  TableCellDemo,
  TableExpandableDemo,
  TableFixedDemo,
  TablePaginationDemo,
  TableReleaseDemo,
  TooltipArrowDemo,
  TooltipBasicDemo,
  TooltipBehaviorDemo,
  TooltipPlacementsDemo,
} from './data-display-previews';
import {
  AlertDialogDeleteDemo,
  AlertReleaseDemo,
  DialogReleaseDemo,
  DrawerContainedDemo,
  DrawerDirectionsDemo,
  DrawerReleaseDemo,
  PopoverOwnerPreviewDemo,
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
  LayoutApplicationDemo,
  LayoutCollapsibleSidebarDemo,
  LayoutLeftSidebarDemo,
  LayoutPageDemo,
  LayoutRightSidebarDemo,
} from './layout-preview';
import {
  NavigationMenuCompactDemo,
  NavigationMenuMegaDemo,
  PaginationControlledDemo,
  PaginationOverflowDemo,
  PaginationStatesDemo,
  TabsDashboardDemo,
  TabsMotionDemo,
  TabsResponsiveDemo,
  TabsVariantsDemo,
} from './navigation-previews';
import {
  ResizableAdvancedDemo,
  ResizableVerticalDemo,
} from './resizable-preview';
import { minimalComponentPreviews } from './minimal-previews';
import {
  type ComponentHarnessCase,
  type ComponentHarnessCaseAxis,
  type ComponentHarnessValues,
} from './component-harness';
import { createCasesFromAxes } from './component-harness-cases';

export type ApiProperty = {
  component?: string;
  name: string;
  description: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
};

export type ApiTypePreview = {
  api?: ApiProperty[];
  declaration?: string;
  definition?: string;
  name: string;
};

export type ComponentPart = {
  name: string;
  description: string;
};

export type RelatedComponent = {
  name: string;
  slug: string;
  description: string;
};

export type ComponentExample = {
  title: string;
  description: ReactNode;
  preview: ReactNode | ((values: ComponentHarnessValues) => ReactNode);
  code: string;
  coveredProperties?: string[];
  caseAxes?: ComponentHarnessCaseAxis[];
  caseMinWidth?: number;
  cases?: ComponentHarnessCase[];
  wide?: boolean;
  previewHeight?: number | 'auto';
};

export type ComponentDocumentation = {
  name: string;
  slug: string;
  summary: string;
  whenToUse: string[];
  examples: ComponentExample[];
  parts?: ComponentPart[];
  relatedComponents?: RelatedComponent[];
  semanticDom?: {
    description: string;
    preview: ReactNode;
  };
  typeDefinitionGroups?: string[];
  typePreviews?: ApiTypePreview[];
  api: ApiProperty[];
  accessibility: string[];
  pitfalls: string[];
};

const buttonImport = `import { Button } from '@heliannuuthus/ui'`;

const buttonDocumentation: ComponentDocumentation = {
  name: 'Button',
  slug: 'button',
  summary: docsCopy(
    '触发操作或事件的基础控件；设置 href 时切换为使用相同视觉样式的原生链接。'
  ),
  whenToUse: [
    docsCopy('用户需要执行一个明确动作，例如提交表单、创建内容或确认选择。'),
    docsCopy('页面需要区分主要、次要、危险和低强调操作。'),
    docsCopy('需要仅图标按钮时，必须同时提供可访问名称。'),
  ],
  examples: [
    {
      title: docsCopy('按钮类型'),
      description: docsCopy(
        '使用视觉层级表达操作优先级。一个操作区域通常只保留一个主要按钮。'
      ),
      preview: (
        <div className="example-row">
          <Button>{docsCopy('主要操作')}</Button>
          <Button variant="secondary">{docsCopy('次要操作')}</Button>
          <Button variant="outline">{docsCopy('描边按钮')}</Button>
          <Button variant="ghost">{docsCopy('幽灵按钮')}</Button>
          <Button variant="link">{docsCopy('文字按钮')}</Button>
          <Button variant="destructive">{docsCopy('危险操作')}</Button>
        </div>
      ),
      code: docsCopy(`${buttonImport}

export const ButtonVariants = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>主要操作</Button>
      <Button variant="secondary">次要操作</Button>
      <Button variant="outline">描边按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="link">文字按钮</Button>
      <Button variant="destructive">危险操作</Button>
    </div>
  )
}`),
    },
    {
      title: docsCopy('不同尺寸'),
      description: docsCopy('尺寸跟随容器密度，不用于表达操作的重要程度。'),
      preview: (
        <div className="example-row example-row-end">
          <Button size="xs">{docsCopy('超小按钮')}</Button>
          <Button size="sm">{docsCopy('小按钮')}</Button>
          <Button>{docsCopy('默认按钮')}</Button>
          <Button size="lg">{docsCopy('大按钮')}</Button>
        </div>
      ),
      code: docsCopy(`${buttonImport}

export const ButtonSizes = () => {
  return (
    <div className="flex items-end gap-3">
      <Button size="xs">超小按钮</Button>
      <Button size="sm">小按钮</Button>
      <Button>默认按钮</Button>
      <Button size="lg">大按钮</Button>
    </div>
  )
}`),
    },
    {
      title: docsCopy('组合按钮'),
      description: docsCopy(
        '将紧密相关的操作收进同一个视觉组，并保持操作语义单一。'
      ),
      preview: (
        <div className="mx-auto w-80 max-w-full">
          <Button.Group
            aria-label={docsCopy('分页操作')}
            block
            orientation="horizontal"
          >
            <Button variant="outline">{docsCopy('上一项')}</Button>
            <Button>{docsCopy('下一项')}</Button>
          </Button.Group>
        </div>
      ),
      code: docsCopy(`import { Button } from '@heliannuuthus/ui'

export const GroupedButtons = () => {
  return (
    <div className="mx-auto w-80 max-w-full">
      <Button.Group aria-label="分页操作" block orientation="horizontal">
        <Button variant="outline">上一项</Button>
        <Button>下一项</Button>
      </Button.Group>
    </div>
  )
}`),
    },
    {
      title: docsCopy('填满容器'),
      description: docsCopy('使用 block 让单个按钮占满父容器的可用宽度。'),
      preview: <Button block>{docsCopy('继续')}</Button>,
      code: docsCopy(`${buttonImport}

<Button block>继续</Button>`),
    },
    {
      title: docsCopy('表单与点击事件'),
      description: docsCopy(
        '原生 type 保留表单语义；onClick 适合处理不依赖表单提交的即时操作。'
      ),
      preview: <ButtonActionsDemo />,
      code: docsCopy(`${buttonImport}
import { useState } from 'react'

export const FormActions = () => {
  const [message, setMessage] = useState('尚未执行操作')

  return (
    <form className="flex flex-wrap items-center justify-center gap-3" onSubmit={(event) => {
      event.preventDefault()
      setMessage('表单已提交')
    }}>
      <Button type="submit">保存</Button>
      <Button type="button" variant="outline" onClick={() => setMessage('草稿已预览')}>
        预览
      </Button>
      <output aria-live="polite">{message}</output>
    </form>
  )
}`),
    },
    {
      title: docsCopy('带图标的按钮'),
      description: docsCopy(
        '图标用于帮助识别动作。仅图标模式需要通过 aria-label 说明用途。'
      ),
      preview: (
        <div className="example-row">
          <Button>
            <Plus data-icon="inline-start" />
            {docsCopy('新建项目')}
          </Button>
          <Button variant="outline">
            <Download data-icon="inline-start" />
            {docsCopy('导出')}
          </Button>
          <Button size="icon" aria-label={docsCopy('发送邮件')}>
            <Mail />
          </Button>
          <Button
            size="icon"
            variant="destructive"
            aria-label={docsCopy('删除项目')}
          >
            <Trash2 />
          </Button>
        </div>
      ),
      code: docsCopy(`${buttonImport}
import { Download, Mail, Plus } from 'lucide-react'

export const ButtonWithIcon = () => {
  return (
    <>
      <Button><Plus data-icon="inline-start" />新建项目</Button>
      <Button variant="outline"><Download data-icon="inline-start" />导出</Button>
      <Button size="icon" aria-label="发送邮件"><Mail /></Button>
    </>
  )
}`),
    },
    {
      title: docsCopy('状态'),
      description: docsCopy(
        '禁用表示暂不可用；加载状态保留原有宽度并说明进度。'
      ),
      preview: (
        <div className="example-row">
          <Button disabled>{docsCopy('不可用')}</Button>
          <Button aria-busy="true" disabled>
            <span className="button-loader" />
            {docsCopy('处理中')}
          </Button>
          <Button aria-invalid="true" variant="outline">
            {docsCopy('校验失败')}
          </Button>
        </div>
      ),
      code: docsCopy(`${buttonImport}

export const ButtonStates = () => {
  return (
    <>
      <Button disabled>不可用</Button>
      <Button aria-busy="true" disabled>处理中</Button>
      <Button aria-invalid="true" variant="outline">校验失败</Button>
    </>
  )
}`),
    },
    {
      title: docsCopy('链接模式'),
      description: docsCopy(
        'href 会把根节点切换为原生 a 元素；target、rel 与 download 都是原生链接属性，variant 和 size 只负责视觉样式。'
      ),
      preview: (
        <div className="example-row">
          <Button href="/components/card" variant="outline">
            {docsCopy('查看 Card 文档')}
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            href="https://ui.heliannuuthus.com"
            rel="noreferrer"
            target="_blank"
            variant="outline"
          >
            {docsCopy('新窗口打开')}
          </Button>
          <Button download="heliannuuthus-ui.css" href="/styles.css">
            {docsCopy('下载样式文件')}
          </Button>
        </div>
      ),
      code: docsCopy(`${buttonImport}
import { ArrowRight } from 'lucide-react'

<Button href="/components/card" variant="outline">
  查看 Card 文档
  <ArrowRight data-icon="inline-end" />
</Button>

<Button
  href="https://ui.heliannuuthus.com"
  target="_blank"
  rel="noreferrer"
  variant="outline"
>
  新窗口打开
</Button>

<Button href="/styles.css" download="heliannuuthus-ui.css">
  下载样式文件
</Button>`),
    },
  ],
  parts: [
    {
      name: 'Button',
      description: docsCopy(
        '未设置 href 时渲染原生 button；设置 href 时渲染原生 a 元素。'
      ),
    },
    {
      name: 'Button.Group',
      description: docsCopy('组合紧密相关的按钮，并支持水平或垂直排列。'),
    },
  ],
  api: [
    {
      name: 'variant',
      description: docsCopy('按钮或链接的视觉样式；不参与决定根元素的语义。'),
      type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'",
      defaultValue: "'default'",
    },
    {
      name: 'size',
      description: docsCopy('按钮尺寸，也包含仅图标尺寸。'),
      type: "'xs' | 'sm' | 'default' | 'lg' | 'icon-xs' | 'icon-sm' | 'icon' | 'icon-lg'",
      defaultValue: "'default'",
    },
    {
      name: 'block',
      description: docsCopy('让按钮填满父容器的可用宽度。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'href',
      description: docsCopy(
        '导航地址与根元素判别字段；设置后渲染为 a，未设置时渲染为原生 button。'
      ),
      type: 'string',
    },
    {
      name: 'disabled',
      description: docsCopy(
        '禁用当前操作；链接模式下同步设置 aria-disabled 并阻止导航。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'type',
      description: docsCopy('原生按钮类型，仅在未设置 href 时使用。'),
      type: "'button' | 'submit' | 'reset'",
      defaultValue: "'button'",
    },
    {
      name: 'target',
      description: docsCopy('链接打开位置，仅在设置 href 时使用。'),
      type: 'HTMLAttributeAnchorTarget',
    },
    {
      name: 'rel',
      description: docsCopy('链接与当前页面的关系，仅在设置 href 时使用。'),
      type: 'string',
    },
    {
      name: 'download',
      description: docsCopy('下载链接资源，仅在设置 href 时使用。'),
      type: 'boolean | string',
    },
    {
      name: 'onClick',
      description: docsCopy('点击后的回调；禁用状态下不会触发。'),
      type: 'MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>',
    },
    {
      name: 'children',
      description: docsCopy('按钮或链接中展示的内容。'),
      type: 'ReactNode',
    },
    {
      name: 'className',
      description: docsCopy('扩展按钮根节点样式。'),
      type: 'string',
    },
    {
      name: 'style',
      description: docsCopy('扩展按钮根节点的行内样式。'),
      type: 'CSSProperties',
    },
    {
      name: 'ref',
      description: docsCopy('访问实际渲染的 button 或 a 元素。'),
      type: 'Ref<HTMLButtonElement | HTMLAnchorElement>',
    },
    {
      component: 'Button.Group',
      name: 'orientation',
      description: docsCopy('设置按钮组水平或垂直拼接。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      component: 'Button.Group',
      name: 'block',
      description: docsCopy('让按钮组填满父容器的可用宽度。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: docsCopy('原生属性'),
      description: docsCopy(
        '支持对应 button 或 a 的标准 HTML、ARIA、data 属性和事件。'
      ),
      type: 'ButtonHTMLAttributes | AnchorHTMLAttributes',
    },
  ],
  accessibility: [
    docsCopy('仅图标按钮必须提供 aria-label 或可见文本。'),
    docsCopy('不要用颜色作为区分危险操作的唯一信息。'),
    docsCopy('异步操作使用 aria-busy，并避免在处理中改变按钮宽度。'),
  ],
  pitfalls: [
    docsCopy('不要在同一操作组中放置多个同等强调的主要按钮。'),
    docsCopy('不要用禁用按钮隐藏失败原因；在附近说明需要满足的条件。'),
    docsCopy(
      '执行操作时不要设置 href；页面导航也不要通过 onClick 手动修改地址。'
    ),
  ],
};

const typographyDocumentation: ComponentDocumentation = {
  name: 'Typography',
  slug: 'typography',
  summary: docsCopy(
    '提供语义明确的标题、正文、引用和行内代码，并让文本语义与视觉层级独立组合。'
  ),
  whenToUse: [
    docsCopy('页面需要使用连续的 h1–h6 标题层级。'),
    docsCopy('正文需要独立组合语义元素、字号、颜色层级与字重。'),
    docsCopy('引用与行内代码需要保留原生 HTML 语义。'),
  ],
  examples: [
    {
      title: docsCopy('完整内容排版'),
      description: docsCopy(
        '用标题、导语、正文、引用、行内代码和辅助信息组织一段连贯、可阅读的内容。'
      ),
      wide: true,
      preview: (
        <div className="typography-stack">
          <Typography.Title level={2}>
            {docsCopy('让界面语言保持清晰')}
          </Typography.Title>
          <Typography.Text as="p" size="xl" tone="muted">
            {docsCopy('稳定的排版让用户先理解内容，再自然地注意到设计。')}
          </Typography.Text>
          <Typography.Text as="p">
            {docsCopy(
              'Heliannuuthus UI 通过一致的标题层级、正文节奏和辅助信息，帮助产品在不同页面中保持清晰、可信且易于阅读的表达。'
            )}
          </Typography.Text>
          <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
            {docsCopy('一致的界面，来自每一次一致的内容决策。')}
          </Typography.Blockquote>
          <Typography.Text as="p">
            {docsCopy('使用')}
            <Typography.Code>@heliannuuthus/ui</Typography.Code>{' '}
            {docsCopy('中的语义组件组合内容，并让视觉层级始终服务于阅读顺序。')}
          </Typography.Text>
          <Typography.Text as="p" size="sm" tone="muted">
            {docsCopy('设计系统札记 · 5 分钟阅读')}
          </Typography.Text>
        </div>
      ),
      code: docsCopy(`import { Typography } from '@heliannuuthus/ui'

export const TypographyStory = () => {
  return (
    <article className="grid gap-4">
      <Typography.Title level={2}>让界面语言保持清晰</Typography.Title>
      <Typography.Text as="p" size="xl" tone="muted">
        稳定的排版让用户先理解内容，再自然地注意到设计。
      </Typography.Text>
      <Typography.Text as="p">
        一致的标题层级和正文节奏，让内容清晰、可信且易于阅读。
      </Typography.Text>
      <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
        一致的界面，来自每一次一致的内容决策。
      </Typography.Blockquote>
      <Typography.Text as="p">
        使用 <Typography.Code>@heliannuuthus/ui</Typography.Code> 组合内容。
      </Typography.Text>
      <Typography.Text as="small" size="sm" tone="muted">
        设计系统札记 · 5 分钟阅读
      </Typography.Text>
    </article>
  )
}`),
      coveredProperties: [
        'Typography.Title.children',
        'Typography.Text.children',
        'Typography.Blockquote.children',
        'Typography.Code.children',
      ],
    },
    {
      title: docsCopy('标题层级'),
      description: docsCopy(
        'level 同时选择 h1–h6 语义元素和对应视觉层级，页面应从 h1 开始保持连续顺序。'
      ),
      preview: (
        <div className="typography-title-levels">
          <Typography.Title>H1</Typography.Title>
          <Typography.Title level={2}>H2</Typography.Title>
          <Typography.Title level={3}>H3</Typography.Title>
          <Typography.Title level={4}>H4</Typography.Title>
          <Typography.Title level={5}>H5</Typography.Title>
          <Typography.Title level={6}>H6</Typography.Title>
        </div>
      ),
      code: `import { Typography } from '@heliannuuthus/ui'

<Typography.Title>H1</Typography.Title>
<Typography.Title level={2}>H2</Typography.Title>
<Typography.Title level={3}>H3</Typography.Title>
<Typography.Title level={4}>H4</Typography.Title>
<Typography.Title level={5}>H5</Typography.Title>
<Typography.Title level={6}>H6</Typography.Title>`,
      coveredProperties: [
        'Typography.Title.level',
        'Typography.Title.className',
        'Typography.Title.style',
      ],
      wide: true,
    },
    {
      title: docsCopy('文本定制'),
      description: docsCopy(
        'as 选择真实语义元素；size、tone 与 weight 分别控制字号、颜色层级和字重，可以按内容需要自由组合。'
      ),
      preview: (
        <Stack block gap={12}>
          <Typography.Text>{docsCopy('默认行内正文')}</Typography.Text>
          <Typography.Text as="p" size="xl" tone="muted">
            {docsCopy('大号次要段落适合承载页面导语。')}
          </Typography.Text>
          <Typography.Text as="div" size="lg" weight="semibold">
            {docsCopy('块级强调文字')}
          </Typography.Text>
          <Typography.Text as="small" size="sm" tone="muted" weight="medium">
            {docsCopy('较小的辅助信息')}
          </Typography.Text>
        </Stack>
      ),
      code: docsCopy(`import { Typography } from '@heliannuuthus/ui'

<Typography.Text>默认行内正文</Typography.Text>
<Typography.Text as="p" size="xl" tone="muted">
  大号次要段落适合承载页面导语。
</Typography.Text>
<Typography.Text as="div" size="lg" weight="semibold">
  块级强调文字
</Typography.Text>
<Typography.Text as="small" size="sm" tone="muted" weight="medium">
  较小的辅助信息
</Typography.Text>`),
      coveredProperties: [
        'Typography.Text.as',
        'Typography.Text.size',
        'Typography.Text.tone',
        'Typography.Text.weight',
        'Typography.Text.className',
        'Typography.Text.style',
      ],
    },
    {
      title: docsCopy('引用与行内代码'),
      description: docsCopy(
        'Blockquote 保留引用来源，Code 在正文中标记短代码；多行代码块应使用独立的 pre 与 code 结构。'
      ),
      preview: (
        <Stack block gap={16}>
          <Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
            {docsCopy('语义先于视觉，视觉服务于内容层级。')}
          </Typography.Blockquote>
          <Typography.Text as="p">
            {docsCopy('安装命令为')}{' '}
            <Typography.Code>pnpm add @heliannuuthus/ui</Typography.Code>
          </Typography.Text>
        </Stack>
      ),
      code: docsCopy(`import { Typography } from '@heliannuuthus/ui'

<Typography.Blockquote cite="https://ui.heliannuuthus.com/design">
  语义先于视觉，视觉服务于内容层级。
</Typography.Blockquote>
<Typography.Text as="p">
  安装命令为 <Typography.Code>pnpm add @heliannuuthus/ui</Typography.Code>
</Typography.Text>`),
      coveredProperties: [
        'Typography.Blockquote.cite',
        'Typography.Blockquote.className',
        'Typography.Blockquote.style',
        'Typography.Code.className',
        'Typography.Code.style',
      ],
    },
  ],
  parts: [
    {
      name: 'Typography.Title',
      description: docsCopy('通过 level 渲染 h1–h6 语义标题和对应视觉层级。'),
    },
    {
      name: 'Typography.Text',
      description: docsCopy('组合文本语义元素、字号、颜色层级与字重。'),
    },
    {
      name: 'Typography.Blockquote',
      description: docsCopy('使用原生 blockquote 表达带来源的引用内容。'),
    },
    {
      name: 'Typography.Code',
      description: docsCopy('使用原生 code 标记正文中的短代码。'),
    },
  ],
  api: [
    {
      component: 'Typography.Title',
      name: 'level',
      description: docsCopy('设置标题语义元素和对应视觉层级。'),
      type: '1 | 2 | 3 | 4 | 5 | 6',
      defaultValue: '1',
    },
    {
      component: 'Typography.Title',
      name: 'children',
      description: docsCopy('标题内容。'),
      type: 'ReactNode',
    },
    {
      component: 'Typography.Title',
      name: 'className',
      description: docsCopy('扩展标题元素样式。'),
      type: 'string',
    },
    {
      component: 'Typography.Title',
      name: 'style',
      description: docsCopy('扩展标题元素行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Typography.Text',
      name: 'as',
      description: docsCopy('设置真实文本元素，不改变视觉属性。'),
      type: "'span' | 'p' | 'div' | 'small'",
      defaultValue: "'span'",
    },
    {
      component: 'Typography.Text',
      name: 'size',
      description: docsCopy('设置字号与匹配的行高。'),
      type: "'sm' | 'md' | 'lg' | 'xl'",
      defaultValue: "'md'",
    },
    {
      component: 'Typography.Text',
      name: 'tone',
      description: docsCopy('设置默认或次要正文颜色。'),
      type: "'default' | 'muted'",
      defaultValue: "'default'",
    },
    {
      component: 'Typography.Text',
      name: 'weight',
      description: docsCopy('设置正文的字重。'),
      type: "'normal' | 'medium' | 'semibold'",
      defaultValue: "'normal'",
    },
    {
      component: 'Typography.Text',
      name: 'children',
      description: docsCopy('文本内容。'),
      type: 'ReactNode',
    },
    {
      component: 'Typography.Text',
      name: 'className',
      description: docsCopy('扩展文本元素样式。'),
      type: 'string',
    },
    {
      component: 'Typography.Text',
      name: 'style',
      description: docsCopy('扩展文本元素行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Typography.Blockquote',
      name: 'cite',
      description: docsCopy('设置引用内容的来源 URL。'),
      type: 'string',
    },
    {
      component: 'Typography.Blockquote',
      name: 'children',
      description: docsCopy('引用内容。'),
      type: 'ReactNode',
    },
    {
      component: 'Typography.Blockquote',
      name: 'className',
      description: docsCopy('扩展引用元素样式。'),
      type: 'string',
    },
    {
      component: 'Typography.Blockquote',
      name: 'style',
      description: docsCopy('扩展引用元素行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Typography.Code',
      name: 'children',
      description: docsCopy('行内代码内容。'),
      type: 'ReactNode',
    },
    {
      component: 'Typography.Code',
      name: 'className',
      description: docsCopy('扩展代码元素样式。'),
      type: 'string',
    },
    {
      component: 'Typography.Code',
      name: 'style',
      description: docsCopy('扩展代码元素行内样式。'),
      type: 'CSSProperties',
    },
  ],
  accessibility: [
    docsCopy('页面从 h1 开始保持标题层级连续，不要因为视觉大小跳过级别。'),
    docsCopy('根据内容语义选择 Text 的 as，而不是根据默认外观选择元素。'),
    docsCopy('次要文字仍需满足对比度要求，不要仅依靠颜色表达信息。'),
  ],
  pitfalls: [
    docsCopy('不要使用 Title.level 只追求字号；标题级别首先表达文档结构。'),
    docsCopy('不要用 Text.as 调整视觉，字号、颜色和字重分别使用对应属性。'),
    docsCopy('Code 用于行内短代码；多行代码块应组合原生 pre 与 code。'),
  ],
};

const tagDocumentation: ComponentDocumentation = {
  name: 'Tag',
  slug: 'tag',
  summary: docsCopy('用简短文本表达对象的状态、分类或属性。'),
  whenToUse: [
    docsCopy('标记对象的状态、分类或稳定属性。'),
    docsCopy('在列表、卡片和详情中提供便于扫描的短文本。'),
  ],
  examples: [
    {
      title: docsCopy('基础用法'),
      description: docsCopy('Tag 是纯展示元素，始终渲染为 span。'),
      preview: <Tag>{docsCopy('默认标签')}</Tag>,
      code: docsCopy(`import { Tag } from '@heliannuuthus/ui'

<Tag>默认标签</Tag>`),
      coveredProperties: ['children', 'className', 'style'],
    },
    {
      title: docsCopy('语义类型'),
      description: docsCopy(
        'type 表达标签的语义，不要只为了颜色选择与内容无关的类型。'
      ),
      preview: (
        <div className="example-row">
          <Tag>{docsCopy('默认')}</Tag>
          <Tag type="primary">{docsCopy('主要')}</Tag>
          <Tag type="info">{docsCopy('信息')}</Tag>
          <Tag type="success">{docsCopy('成功')}</Tag>
          <Tag type="warning">{docsCopy('警告')}</Tag>
          <Tag type="error">{docsCopy('错误')}</Tag>
        </div>
      ),
      code: docsCopy(`import { Tag } from '@heliannuuthus/ui'

<Tag>默认</Tag>
<Tag type="primary">主要</Tag>
<Tag type="info">信息</Tag>
<Tag type="success">成功</Tag>
<Tag type="warning">警告</Tag>
<Tag type="error">错误</Tag>`),
      coveredProperties: ['type'],
    },
  ],
  api: [
    {
      name: 'type',
      description: docsCopy('设置标签表达的语义类型。'),
      type: "'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'",
      defaultValue: "'default'",
    },
    {
      name: 'children',
      description: docsCopy('标签中的简短文本或辅助图标。'),
      type: 'ReactNode',
    },
    {
      name: 'className',
      description: docsCopy('扩展标签样式。'),
      type: 'string',
    },
    {
      name: 'style',
      description: docsCopy('扩展标签行内样式。'),
      type: 'CSSProperties',
    },
  ],
  accessibility: [
    docsCopy('状态不能只依靠颜色表达，标签文本必须保留完整含义。'),
    docsCopy('Tag 支持标准 span、ARIA、data 属性和事件，并转发 span ref。'),
  ],
  pitfalls: [
    docsCopy('不要把 Tag 用作按钮或链接；交互场景应组合 Button 或原生链接。'),
    docsCopy('避免在 Tag 中放入长句或复杂操作。'),
  ],
};

const badgeDocumentation: ComponentDocumentation = {
  name: 'Badge',
  slug: 'badge',
  summary: docsCopy('在对象角落或独立位置展示通知数字与状态红点。'),
  whenToUse: [
    docsCopy('在按钮、头像或其他对象上叠加未读数量。'),
    docsCopy('只需提示存在新内容，或需要独立展示简短计数。'),
  ],
  examples: [
    {
      title: docsCopy('独立数字'),
      description: docsCopy(
        '没有 children 时独立显示通知；数字 0 会保留，超过 max 时显示封顶文案。'
      ),
      preview: (
        <Stack align="center" gap={16} orientation="horizontal">
          <Badge indicator={5} />
          <Badge indicator={0} />
          <Badge indicator={123} max={99} />
        </Stack>
      ),
      code: docsCopy(`import { Badge } from '@heliannuuthus/ui'

<Badge indicator={5} />
<Badge indicator={0} />
<Badge indicator={123} max={99} />`),
      coveredProperties: ['indicator', 'max', 'className', 'style'],
      previewHeight: 56,
    },
    {
      title: docsCopy('锚点通知'),
      description: docsCopy(
        '传入 children 后，通知会定位到对象的 inline-end 顶角；offset 可微调逻辑方向位置。'
      ),
      preview: (
        <Stack gap={28} orientation="horizontal" wrap>
          <Badge indicator={5} indicatorLabel={docsCopy('5 条未读消息')}>
            <Button
              aria-label={docsCopy('查看 5 条未读消息')}
              size="icon"
              variant="outline"
            >
              <Mail />
            </Button>
          </Badge>
          <Badge dir="rtl" indicator={12} offset={[3, -2]}>
            <Button variant="outline">{docsCopy('收件箱')}</Button>
          </Badge>
        </Stack>
      ),
      code: docsCopy(`import { Badge, Button } from '@heliannuuthus/ui'
import { Mail } from 'lucide-react'

<Badge indicator={5} indicatorLabel="5 条未读消息">
  <Button aria-label="查看消息" size="icon" variant="outline">
    <Mail />
  </Button>
</Badge>

<Badge dir="rtl" indicator={12} offset={[3, -2]}>
  <Button variant="outline">收件箱</Button>
</Badge>`),
      coveredProperties: ['children', 'offset', 'indicatorLabel'],
    },
    {
      title: docsCopy('状态红点'),
      description: docsCopy(
        'indicator 为 true 时只显示红点；因为没有可见内容，必须提供 indicatorLabel。'
      ),
      preview: (
        <Badge indicator indicatorLabel={docsCopy('有新的系统通知')}>
          <Button variant="outline">{docsCopy('系统通知')}</Button>
        </Badge>
      ),
      code: docsCopy(`import { Badge, Button } from '@heliannuuthus/ui'

<Badge indicator indicatorLabel="有新的系统通知">
  <Button variant="outline">系统通知</Button>
</Badge>`),
    },
    {
      title: docsCopy('样式扩展'),
      description: docsCopy(
        '根节点使用 className 与 style，通知标记使用对应的 classNames 和 styles 插槽。'
      ),
      preview: (
        <Badge
          classNames={{ indicator: 'bg-primary' }}
          indicator={8}
          styles={{ indicator: { fontVariantNumeric: 'tabular-nums' } }}
        />
      ),
      code: docsCopy(`import { Badge } from '@heliannuuthus/ui'

<Badge
  classNames={{ indicator: 'bg-primary' }}
  indicator={8}
  styles={{ indicator: { fontVariantNumeric: 'tabular-nums' } }}
/>`),
      coveredProperties: ['classNames', 'styles'],
    },
  ],
  api: [
    {
      name: 'indicator',
      description: docsCopy(
        '设置通知内容；true 显示红点，节点显示内容，false、null 或 undefined 隐藏。'
      ),
      type: 'true | ReactNode | false | null',
    },
    {
      name: 'max',
      description: docsCopy('设置数字通知的显示上限，超出时追加加号。'),
      type: 'number',
      defaultValue: '99',
    },
    {
      name: 'offset',
      description: docsCopy('微调通知相对锚点的水平与垂直位置。'),
      type: 'readonly [horizontal: number, vertical: number]',
      defaultValue: '[0, 0]',
    },
    {
      name: 'indicatorLabel',
      description: docsCopy('设置通知的无障碍名称；红点模式必须提供。'),
      type: 'string',
    },
    {
      name: 'children',
      description: docsCopy('设置通知标记的锚点；省略时独立显示。'),
      type: 'ReactNode',
    },
    {
      name: 'className',
      description: docsCopy('扩展根节点样式。'),
      type: 'string',
    },
    {
      name: 'style',
      description: docsCopy('扩展根节点行内样式。'),
      type: 'CSSProperties',
    },
  ],
  accessibility: [
    docsCopy('红点没有可见文字，必须通过 indicatorLabel 说明通知含义。'),
    docsCopy('数字已有可见文本；含义不明确时仍应补充 indicatorLabel。'),
    docsCopy('Badge 支持标准 span、ARIA、data 属性和事件，并转发 span ref。'),
  ],
  pitfalls: [
    docsCopy('Badge 只表示通知；状态、分类和简短属性应使用 Tag。'),
    docsCopy(
      '不要把 Badge 本身当作交互控件，应把 Button 或链接作为 children。'
    ),
  ],
};

const kbdDocumentation: ComponentDocumentation = {
  name: 'Kbd',
  slug: 'kbd',
  summary: docsCopy('以键帽形式展示键盘按键和快捷键组合。'),
  whenToUse: [
    docsCopy('解释键盘快捷方式。'),
    docsCopy('在菜单、提示或命令面板中展示操作按键。'),
  ],
  examples: [
    {
      title: docsCopy('单个按键'),
      description: docsCopy('使用用户设备上容易识别的按键名称。'),
      preview: (
        <div className="example-row">
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>⌫</Kbd>
        </div>
      ),
      code: `import { Kbd } from '@heliannuuthus/ui'

<Kbd>Enter</Kbd>`,
    },
    {
      title: docsCopy('组合快捷键'),
      description: docsCopy('通过 keys 属性统一多个按键之间的间距。'),
      preview: (
        <div className="example-row">
          <Kbd keys={['⌘', 'K']} />
          <Kbd keys={['Ctrl', 'Shift', 'P']} />
          <Kbd keys={['Ctrl', 'Alt', 'Delete']} separator="·" />
        </div>
      ),
      code: `import { Kbd } from '@heliannuuthus/ui'

<Kbd keys={['⌘', 'K']} />
<Kbd keys={['Ctrl', 'Alt', 'Delete']} separator="·" />`,
    },
  ],
  api: [
    {
      name: 'keys',
      description: docsCopy('通过同一个 Kbd 渲染快捷键组合。'),
      type: 'ReactNode[]',
    },
    {
      name: 'separator',
      description: docsCopy('组合快捷键之间的分隔内容。'),
      type: 'ReactNode',
      defaultValue: "'+'",
    },
    {
      name: 'className',
      description: docsCopy('扩展组件样式。'),
      type: 'string',
    },
  ],
  accessibility: [
    docsCopy('同时用文本解释不常见的快捷键用途。'),
    docsCopy('针对 macOS 和 Windows 展示对应的平台按键。'),
  ],
  pitfalls: [
    docsCopy('Kbd 只用于展示，不应承担实际键盘事件监听。'),
    docsCopy('不要假设所有用户都使用同一种键盘布局。'),
  ],
};

const separatorDocumentation: ComponentDocumentation = {
  name: 'Separator',
  slug: 'separator',
  summary: docsCopy('用水平或垂直分隔线组织相邻但不同层级的内容。'),
  whenToUse: [
    docsCopy('需要在纵向内容之间建立章节边界。'),
    docsCopy('需要在横向工具栏或元信息之间建立分组边界。'),
  ],
  examples: [
    {
      title: docsCopy('水平分隔'),
      description: docsCopy('水平线分隔上下排列的章节、列表分组或信息层级。'),
      preview: (
        <div className="separator-horizontal-demo">
          <section>
            <span>{docsCopy('项目空间')}</span>
            <strong>Heliannuuthus UI</strong>
            <p>{docsCopy('一套用于构建清晰、稳定界面的基础组件。')}</p>
          </section>
          <Separator />
          <section>
            <span>{docsCopy('最近更新')}</span>
            <strong>{docsCopy('组件文档与交互示例')}</strong>
            <p>{docsCopy('今天 14:30 · 由 Heliannuuthus 更新')}</p>
          </section>
        </div>
      ),
      code: docsCopy(`import { Separator } from '@heliannuuthus/ui'

<section>上方内容</section>
<Separator />
<section>下方内容</section>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('垂直分隔'),
      description: docsCopy('垂直线分隔同一行内并列的操作、状态或元信息。'),
      preview: (
        <div className="separator-vertical-demo">
          <div className="separator-vertical-item">
            <span>{docsCopy('状态')}</span>
            <strong>{docsCopy('设计中')}</strong>
          </div>
          <Separator orientation="vertical" />
          <div className="separator-vertical-item">
            <span>{docsCopy('负责人')}</span>
            <strong>Heliannuuthus</strong>
          </div>
          <Separator orientation="vertical" />
          <div className="separator-vertical-item">
            <span>{docsCopy('更新时间')}</span>
            <strong>{docsCopy('刚刚')}</strong>
          </div>
        </div>
      ),
      code: docsCopy(`import { Separator } from '@heliannuuthus/ui'

<div className="flex items-stretch gap-4">
  <div>状态</div>
  <Separator orientation="vertical" />
  <div>负责人</div>
</div>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('自定义分隔线'),
      description: docsCopy(
        '通过 className 或 style 自定义粗细、颜色、虚线和渐变效果。'
      ),
      preview: (
        <div className="separator-custom-demo">
          <section>
            <span>{docsCopy('强调色')}</span>
            <Separator className="separator-custom-primary" />
          </section>
          <section>
            <span>{docsCopy('虚线')}</span>
            <Separator className="separator-custom-dashed" />
          </section>
          <section>
            <span>{docsCopy('渐隐')}</span>
            <Separator className="separator-custom-gradient" />
          </section>
        </div>
      ),
      code: `import { Separator } from '@heliannuuthus/ui'

<Separator className="h-0.5 bg-primary" />
<Separator className="h-0 border-t border-dashed bg-transparent" />
<Separator className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />`,
      previewHeight: 360,
    },
  ],
  api: [
    {
      name: 'orientation',
      description: docsCopy('设置分隔线的布局方向。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'className',
      description: docsCopy('扩展分隔线的尺寸、颜色和间距。'),
      type: 'string',
    },
    {
      name: 'style',
      description: docsCopy('使用行内样式扩展分隔线。'),
      type: 'CSSProperties',
    },
    {
      name: docsCopy('原生属性'),
      description: docsCopy(
        '通过标准 div 的行内样式、ARIA、data 属性与事件完成扩展。'
      ),
      type: 'HTMLAttributes<HTMLDivElement>',
    },
  ],
  accessibility: [
    docsCopy('组件会根据 orientation 提供对应的分隔方向语义。'),
    docsCopy('仅用于装饰时，不要让分隔线进入键盘焦点顺序。'),
  ],
  pitfalls: [
    docsCopy('垂直分隔线需要父容器具有明确高度或可拉伸的高度。'),
    docsCopy('不要用分隔线代替真正的标题层级与内容分组。'),
  ],
};

const masonryDocumentation: ComponentDocumentation = {
  name: 'Masonry',
  slug: 'masonry',
  typeDefinitionGroups: ['MasonryItem'],
  summary: docsCopy(
    '将不同高度的内容持续放入当前最短列，并允许指定内容独占整行。'
  ),
  whenToUse: [
    docsCopy(
      '卡片需要根据容器宽度自动显示一至多列，并紧接当前最短列继续排列。'
    ),
    docsCopy('某些总结、横幅或末尾内容需要跨越当前所有列。'),
  ],
  examples: [
    {
      title: docsCopy('基础用法'),
      description: docsCopy(
        '通过 items 提供稳定 key 与内容，Masonry 会为每一项创建并测量布局节点。'
      ),
      preview: <MasonryBasicDemo />,
      code: `import { Masonry, type MasonryItem } from '@heliannuuthus/ui'

const items = cards.map((card) => ({
  key: card.id,
  content: <Card {...card} />,
})) satisfies readonly MasonryItem[];

<Masonry
  columns={3}
  minColumnWidth={180}
  gap={[14, 20]}
  items={items}
/>`,
      wide: true,
      previewHeight: 560,
    },
    {
      title: docsCopy('自适应列数'),
      description: docsCopy(
        '拖动滑块设置一行允许的最大列数；实际列数根据容器宽度与最小列宽自动回落，最多显示六列。'
      ),
      preview: <MasonryResponsiveDemo />,
      code: `import { Masonry } from '@heliannuuthus/ui'

<Masonry
  columns={6}
  minColumnWidth={140}
  gap={14}
  items={cards}
/>`,
      wide: true,
      previewHeight: 520,
    },
    {
      title: docsCopy('跨列内容'),
      description: docsCopy(
        '在单项配置中设置 span="full"；该项会等待前面所有列结束并独占整行，后续内容再从统一位置继续排列。'
      ),
      preview: <MasonrySpanDemo />,
      code: `import { Masonry } from '@heliannuuthus/ui'

<Masonry
  columns={3}
  minColumnWidth={180}
  gap={14}
  items={[
    { key: 'a', content: <Card>A</Card> },
    { key: 'b', content: <Card>B</Card> },
    {
      key: 'release',
      content: <ReleaseNotice />,
      span: 'full',
    },
    { key: 'c', content: <Card>C</Card> },
  ]}
/>`,
      wide: true,
      previewHeight: 520,
    },
  ],
  parts: [
    {
      name: 'Masonry',
      description: docsCopy(
        '接收 items，并统一完成内容包装、测量、最短列分配和跨列布局。'
      ),
    },
  ],
  api: [
    {
      name: 'items',
      description: docsCopy('提供需要布局的 MasonryItem 配置列表。'),
      type: 'readonly MasonryItem[]',
    },
    {
      name: 'columns',
      description: docsCopy(
        '设置容器允许显示的最大列数；它是上限，实际列数会随可用宽度自动减少。'
      ),
      type: 'number',
      defaultValue: '3',
    },
    {
      name: 'minColumnWidth',
      description: docsCopy('设置单列期望的最小宽度，用于决定响应式折列时机。'),
      type: 'number | string',
      defaultValue: '240',
    },
    {
      name: 'gap',
      description: docsCopy('设置统一间距，数组依次表示水平与垂直间距。'),
      type: 'number | string | [number | string, number | string]',
      defaultValue: '16',
    },
    {
      component: 'MasonryItem',
      name: 'key',
      description: docsCopy('提供稳定且唯一的 React key，用于识别当前布局项。'),
      type: 'React.Key',
      required: true,
    },
    {
      component: 'MasonryItem',
      name: 'content',
      description: docsCopy(
        '设置布局项内部展示的卡片、媒体或其他 React 内容。'
      ),
      type: 'React.ReactNode',
      required: true,
    },
    {
      component: 'MasonryItem',
      name: 'span',
      description: docsCopy(
        '控制单项按普通列宽排列，或等待当前各列结束后独占整行。'
      ),
      type: "'auto' | 'full'",
      defaultValue: "'auto'",
    },
    {
      component: 'MasonryItem',
      name: 'className',
      description: docsCopy('为当前布局项扩展样式类。'),
      type: 'string',
    },
    {
      component: 'MasonryItem',
      name: 'style',
      description: docsCopy(
        '通过标准 div 的行内样式、ARIA、data 属性、角色与事件扩展当前布局项。'
      ),
      type: 'React.CSSProperties',
    },
  ],
  accessibility: [
    docsCopy(
      '组件只改变视觉位置，内容语义、键盘焦点和读屏顺序仍按 DOM 顺序保留。'
    ),
    docsCopy(
      '需要表达列表、文章或分组语义时，应在内容节点上提供对应元素或角色。'
    ),
  ],
  pitfalls: [
    docsCopy(
      '不要依靠视觉列位置表达严格顺序；不同高度可能让后续内容出现在更高的位置。'
    ),
    docsCopy('不要仅靠卡片位置表达顺序；窄屏折为单列后仍应能按源码顺序阅读。'),
  ],
};

const stackDocumentation: ComponentDocumentation = {
  name: 'Stack',
  slug: 'stack',
  summary: docsCopy('为一组相关元素提供一致的方向、间距、对齐和换行规则。'),
  whenToUse: [
    docsCopy('一组控件或标签需要保持稳定间距，但不需要共享选择状态。'),
    docsCopy('相同内容需要在水平、垂直或窄屏换行布局之间切换。'),
    docsCopy('相邻控件需要折叠边框与圆角时，使用 Stack.Compact 形成连续轮廓。'),
  ],
  examples: [
    {
      title: docsCopy('基础用法'),
      description: docsCopy(
        '使用 orientation 和 gap 完成最基础的横向间距布局。'
      ),
      preview: (
        <Stack gap={8} orientation="horizontal">
          <Button>{docsCopy('保存')}</Button>
          <Button variant="outline">{docsCopy('取消')}</Button>
        </Stack>
      ),
      code: docsCopy(`import { Button, Stack } from '@heliannuuthus/ui'

<Stack gap={8} orientation="horizontal">
  <Button>保存</Button>
  <Button variant="outline">取消</Button>
</Stack>`),
      cases: [
        {
          isDefault: true,
          label: docsCopy('默认'),
          properties: {
            gap: 8,
            orientation: 'horizontal',
          },
          values: {},
        },
      ],
    },
    {
      title: docsCopy('数值间距'),
      description: docsCopy(
        'gap 接收数值；拖动滑块在 0–12px 之间调整，每次递增或递减 3px。'
      ),
      preview: <StackGapDemo />,
      code: `import { useState } from 'react'
import { Slider, Stack } from '@heliannuuthus/ui'

export const StackGapExample = () => {
  const [gap, setGap] = useState(6)

  return (
    <>
      <Slider min={0} max={12} step={3} value={gap} onChange={setGap} />
      <Stack block gap={gap} orientation="horizontal" wrap>
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index}>{index + 1}</span>
        ))}
      </Stack>
    </>
  )
}`,
      previewHeight: 460,
    },
    {
      title: docsCopy('跨控件紧凑组合'),
      description: docsCopy(
        'Compact 不只组合按钮，也可以拼接 Input、Select、Slider 与操作控件。'
      ),
      caseAxes: [
        {
          name: 'orientation',
          label: docsCopy('方向'),
          defaultValue: 'horizontal',
          property: 'Stack.Compact.orientation',
          options: [
            { label: docsCopy('水平'), value: 'horizontal' },
            { label: docsCopy('垂直'), value: 'vertical' },
          ],
        },
      ],
      preview: (values) => (
        <StackCompactVariantsDemo
          orientation={
            values.orientation === 'vertical' ? 'vertical' : 'horizontal'
          }
        />
      ),
      code: docsCopy(`import { useState } from 'react'
import { Input } from '@heliannuuthus/ui'
import { Slider } from '@heliannuuthus/ui'
import { Stack } from '@heliannuuthus/ui'

export const SliderCompactExample = () => {
  const [quality, setQuality] = useState(68)

  return (
    <Stack block gap={8}>
      <Stack.Compact block aria-label="压缩质量">
        <div className="flex min-h-9 flex-1 items-center border px-4">
          <Slider
            aria-label="压缩质量滑块"
            value={quality}
            onChange={setQuality}
            min={0}
            max={100}
          />
        </div>
        <Input
          aria-label="压缩质量数值"
          className="w-24"
          suffix="%"
          type="number"
          value={quality}
          onChange={(event) => setQuality(Number(event.target.value))}
        />
      </Stack.Compact>
      <span aria-live="polite">当前压缩质量：{quality}%</span>
    </Stack>
  )
}`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('交叉轴与主轴对齐'),
      description: docsCopy(
        'align 控制交叉轴对齐，justify 控制主轴分布；对应属性和值在示例代码中完整展示。'
      ),
      caseAxes: [
        {
          name: 'axis',
          label: docsCopy('布局轴'),
          defaultValue: 'align',
          property: false,
          options: [
            { label: docsCopy('交叉轴'), value: 'align' },
            { label: docsCopy('主轴'), value: 'justify' },
          ],
        },
      ],
      preview: (values) => (
        <StackAlignmentDemo
          axis={values.axis === 'justify' ? 'justify' : 'align'}
        />
      ),
      code: `import { Stack } from '@heliannuuthus/ui'

<Stack orientation="horizontal" gap={6} align="center">
  <Filter />
  <Sort />
  <Availability />
</Stack>

<Stack block orientation="horizontal" gap={6} justify="between">
  <Filter />
  <Sort />
  <Availability />
</Stack>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('元素分隔'),
      description: docsCopy(
        'separator 在相邻元素之间插入一致的视觉分隔，不需要为每个子元素重复编写。'
      ),
      preview: (
        <Stack orientation="horizontal" separator={<span aria-hidden>·</span>}>
          <span>{docsCopy('概览')}</span>
          <span>{docsCopy('活动')}</span>
          <span>{docsCopy('设置')}</span>
        </Stack>
      ),
      code: docsCopy(`import { Stack } from '@heliannuuthus/ui'

<Stack orientation="horizontal" separator={<span aria-hidden>·</span>}>
  <span>概览</span>
  <span>活动</span>
  <span>设置</span>
</Stack>`),
    },
  ],
  parts: [
    {
      name: 'Stack',
      description: docsCopy('按方向、间距与对齐规则排列一组相关内容。'),
    },
    {
      name: 'Stack.Compact',
      description: docsCopy('折叠相邻控件的间距、边框和圆角，形成连续操作组。'),
    },
  ],
  api: [
    {
      name: 'orientation',
      description: docsCopy('设置元素水平或垂直排列。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'vertical'",
    },
    {
      name: 'gap',
      description: docsCopy('设置统一间距，数组依次表示水平与垂直间距。'),
      type: 'number | [number, number]',
      defaultValue: '12',
    },
    {
      name: 'align',
      description: docsCopy('设置交叉轴对齐方式。'),
      type: "'start' | 'center' | 'end' | 'baseline' | 'stretch'",
      defaultValue: "'stretch'",
    },
    {
      name: 'justify',
      description: docsCopy('设置主轴内容分布方式。'),
      type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
      defaultValue: "'start'",
    },
    {
      name: 'block',
      description: docsCopy('让 Stack 填满父容器的可用宽度。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'wrap',
      description: docsCopy('在水平方向空间不足时允许自动换行。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'separator',
      description: docsCopy('在相邻元素之间插入统一分隔内容。'),
      type: 'ReactNode',
    },
    {
      component: 'Stack.Compact',
      name: 'orientation',
      description: docsCopy('设置紧凑组的拼接方向；紧凑组不允许换行。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      component: 'Stack.Compact',
      name: 'block',
      description: docsCopy('让紧凑组填满父容器，适合包含 Input 的组合。'),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  accessibility: [
    docsCopy('Stack 只提供视觉布局，不改变子元素原有语义和焦点顺序。'),
    docsCopy(
      'Compact 默认提供 group 角色；同一区域存在多个操作组时应补充 aria-label。'
    ),
    docsCopy('需要表达选择关系时仍应使用 Radio.Group 或 Toggle.Group。'),
  ],
  pitfalls: [
    docsCopy('不要用 Stack 代替表单分组、单选组或工具栏等语义结构。'),
    docsCopy('不要让 Compact 换行；空间不足时应切换为垂直方向。'),
    docsCopy('不要通过空白字符或子元素外边距模拟组件间距。'),
  ],
};

const aspectRatioDocumentation: ComponentDocumentation = {
  name: 'Aspect Ratio',
  slug: 'aspect-ratio',
  summary: docsCopy('让媒体内容在响应式布局中保持固定比例。'),
  whenToUse: [
    docsCopy('文章封面、视频和商品图需要在不同宽度下保持一致构图。'),
    docsCopy('需要预留稳定的媒体区域，避免图片加载后引起页面跳动。'),
  ],
  examples: [
    {
      title: docsCopy('响应式封面编辑'),
      description: docsCopy(
        '切换常用封面比例，观察同一张图片如何随容器宽高变化保持稳定布局。'
      ),
      wide: true,
      preview: minimalComponentPreviews['aspect-ratio'],
      code: docsCopy(`import { useState } from 'react'
import { AspectRatio } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'

const ratios = [
  { label: '16:9', value: 16 / 9 },
  { label: '4:3', value: 4 / 3 },
  { label: '1:1', value: 1 },
]

export const CoverEditor = () => {
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
}`),
    },
  ],
  api: [
    {
      name: 'ratio',
      description: docsCopy('容器宽高比，例如 16 / 9、4 / 3 或 1。'),
      type: 'number',
    },
    {
      name: 'children',
      description: docsCopy('需要约束比例的媒体或内容。'),
      type: 'React.ReactNode',
    },
    {
      name: 'className',
      description: docsCopy('扩展比例容器样式。'),
      type: 'string',
    },
  ],
  accessibility: [
    docsCopy('媒体内容仍需提供准确的替代文本或字幕。'),
    docsCopy('比例切换控件需要暴露当前选中状态。'),
  ],
  pitfalls: [
    docsCopy('不要只设置固定高度，否则响应式宽度下会失去目标比例。'),
    docsCopy('重要主体不要贴近图片边缘，以免在不同宽高比下被裁切。'),
  ],
};

const cardDocumentation: ComponentDocumentation = {
  name: 'Card',
  slug: 'card',
  typeDefinitionGroups: ['CardHeader', 'CardClassNames'],
  summary: docsCopy('用清晰的头部、内容和底部区域承载同一主题的信息与操作。'),
  whenToUse: [
    docsCopy('需要将一组相关信息和操作组织成独立内容单元。'),
    docsCopy('需要明确区分标题信息、主体内容和底部操作。'),
  ],
  examples: [
    {
      title: docsCopy('基础卡片'),
      description: docsCopy('只提供标题和内容，即可快速组织一组相关信息。'),
      caseAxes: [
        {
          name: 'variant',
          label: docsCopy('外观'),
          defaultValue: 'elevated',
          options: [
            { label: docsCopy('阴影'), value: 'elevated' },
            { label: docsCopy('描边'), value: 'outline' },
            { label: docsCopy('透明'), value: 'ghost' },
          ],
        },
      ],
      preview: (values) => (
        <CardBasicDemo
          variant={
            values.variant === 'outline' || values.variant === 'ghost'
              ? values.variant
              : 'elevated'
          }
        />
      ),
      code: docsCopy(`import { Button, Card, Input } from '@heliannuuthus/ui'

export const UpdateCard = () => {
  return (
    <Card header={{ title: '设计系统更新' }} variant="elevated">
      <p>本周补充了组件示例与无障碍说明。</p>
    </Card>
  )
}

<Card header={{ title: '描边卡片' }} variant="outline" />
<Card header={{ title: '透明卡片' }} variant="ghost" />`),
    },
    {
      title: docsCopy('Header、Content 与 Footer'),
      description: docsCopy(
        'Header 负责标题与辅助操作，Content 承载主体，Footer 放置与整张卡片相关的操作。'
      ),
      preview: <CardAnatomyDemo />,
      code: docsCopy(`import { Card } from '@heliannuuthus/ui'

export const WorkspaceCard = () => {
  return (
    <Card
      header={{
        title: '工作区资料',
        description: '修改成员看到的工作区名称。',
        action: <Button variant="ghost">更多操作</Button>,
      }}
      footer={
        <>
          <span>上次保存于 10:24</span>
          <Button>保存修改</Button>
        </>
      }
    >
      <label>
        工作区名称
        <Input defaultValue="Heliannuuthus UI" />
      </label>
    </Card>
  )
}`),
    },
  ],
  semanticDom: {
    description: docsCopy(
      '悬停、聚焦或点击右侧属性行，查看根节点 className/style 与 CardClassNames/CardStyles 各字段对应的真实区域。'
    ),
    preview: <CardSemanticDomDemo />,
  },
  api: [
    {
      name: 'variant',
      description: docsCopy(
        '控制 Card 的层级表达，可选择阴影、描边或透明容器。'
      ),
      type: "'elevated' | 'outline' | 'ghost'",
      defaultValue: "'elevated'",
    },
    {
      name: 'header',
      description: docsCopy(
        '统一配置标题、辅助说明与右侧操作；不再占用根节点原生 title 属性。'
      ),
      type: 'CardHeader',
    },
    {
      name: 'children',
      description: docsCopy('卡片主体内容。'),
      type: 'ReactNode',
    },
    {
      name: 'footer',
      description: docsCopy('底部操作或补充信息。'),
      type: 'ReactNode',
    },
    {
      name: 'classNames',
      description: docsCopy('通过 CardClassNames 按语义区域扩展内部样式。'),
      type: 'CardClassNames',
    },
    {
      name: 'className',
      description: docsCopy('扩展 Card 根节点样式。'),
      type: 'string',
    },
    {
      component: 'CardHeader',
      name: 'title',
      description: docsCopy('卡片标题；传入 header 时必须提供。'),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'CardHeader',
      name: 'description',
      description: docsCopy('标题下方的辅助说明。'),
      type: 'ReactNode',
    },
    {
      component: 'CardHeader',
      name: 'action',
      description: docsCopy('Header 右侧的辅助操作。'),
      type: 'ReactNode',
    },
    {
      component: 'CardClassNames',
      name: 'header',
      description: docsCopy('扩展包含标题、说明与右侧操作的头部区域。'),
      type: 'string',
    },
    {
      component: 'CardClassNames',
      name: 'title',
      description: docsCopy('扩展卡片标题区域。'),
      type: 'string',
    },
    {
      component: 'CardClassNames',
      name: 'description',
      description: docsCopy('扩展标题下方的辅助说明区域。'),
      type: 'string',
    },
    {
      component: 'CardClassNames',
      name: 'action',
      description: docsCopy('扩展头部右侧的辅助操作区域。'),
      type: 'string',
    },
    {
      component: 'CardClassNames',
      name: 'content',
      description: docsCopy('扩展卡片主要内容区域。'),
      type: 'string',
    },
    {
      component: 'CardClassNames',
      name: 'footer',
      description: docsCopy('扩展卡片底部的补充信息与操作区域。'),
      type: 'string',
    },
  ],
  accessibility: [
    docsCopy('标题应准确描述卡片主题，并保持页面标题层级连续。'),
    docsCopy('header.action 和 footer 中的图标按钮需要提供可访问名称。'),
  ],
  pitfalls: [
    docsCopy('不要把互不相关的信息仅因为视觉需要塞进同一张 Card。'),
    docsCopy('不要在 Header、Content 和 Footer 中重复同一组主要操作。'),
  ],
};

const resizableDocumentation: ComponentDocumentation = {
  name: 'Resizable',
  slug: 'resizable',
  typeDefinitionGroups: [
    'ResizableClassNames',
    'ResizableItem',
    'ResizableSeparatorRenderProps',
  ],
  summary: docsCopy('通过可拖动分隔线调整相邻内容区域的尺寸。'),
  whenToUse: [
    docsCopy('文件树、列表或导航需要与详情内容共享同一工作区。'),
    docsCopy('用户需要根据当前任务主动分配相邻区域的可用空间。'),
  ],
  examples: [
    {
      title: docsCopy('可调整的工作区'),
      description: docsCopy(
        '拖动文件区和预览区之间的分隔线，或聚焦分隔线后使用方向键调整宽度。'
      ),
      wide: true,
      preview: minimalComponentPreviews.resizable,
      code: docsCopy(`import { Resizable } from '@heliannuuthus/ui'
import { GripVertical } from 'lucide-react'

export const Workspace = () => {
  return (
    <Resizable
      orientation="horizontal"
      separator={<GripVertical aria-hidden />}
      items={[
        { key: 'files', panel: '文件列表', size: ['34', '24'] },
        { key: 'preview', panel: '内容预览', size: ['66', '40'] },
      ]}
    />
  )
}`),
    },
    {
      title: docsCopy('纵向区域'),
      description: docsCopy(
        '设置 vertical 后可调整上下区域，适合编辑器与终端、预览与日志等场景。'
      ),
      wide: true,
      preview: <ResizableVerticalDemo />,
      code: docsCopy(`import { Resizable } from '@heliannuuthus/ui'
import { GripHorizontal } from 'lucide-react'

export const EditorWithTerminal = () => {
  return (
    <Resizable
      className="h-96"
      orientation="vertical"
      separator={<GripHorizontal aria-hidden />}
      items={[
        {
          key: 'editor',
          panel: <section>编辑器</section>,
          size: ['64', '38'],
        },
        {
          key: 'terminal',
          panel: <section>终端</section>,
          size: ['36', '20'],
        },
      ]}
    />
  )
}`),
    },
    {
      title: docsCopy('尺寸约束与分隔线覆盖'),
      description: docsCopy(
        'size 集中表达初始、最小和最大尺寸；item 可覆盖默认分隔线，并通过 onResize 获取实时尺寸。'
      ),
      wide: true,
      preview: <ResizableAdvancedDemo />,
      code: docsCopy(`import { useState } from 'react'
import { Resizable } from '@heliannuuthus/ui'
import { GripVertical } from 'lucide-react'

export const ConstrainedWorkspace = () => {
  const [navigationSize, setNavigationSize] = useState(24)

  return (
    <Resizable
      className="h-80"
      separator={({ index }) => <span>{index + 1}</span>}
      items={[
        {
          key: 'navigation',
          panel: <aside>导航 · {navigationSize}%</aside>,
          size: ['24', '18', '34'],
          collapsible: true,
          collapsedSize: 0,
          separator: <GripVertical aria-hidden />,
          onResize: (size) =>
            setNavigationSize(Math.round(size.asPercentage)),
        },
        {
          key: 'canvas',
          panel: <main>画布</main>,
          size: ['52', '36'],
        },
        {
          key: 'inspector',
          panel: <aside>属性</aside>,
          size: ['24', '18', '34'],
          collapsible: true,
          collapsedSize: 0,
        },
      ]}
    />
  )
}`),
    },
  ],
  api: [
    {
      name: 'items',
      description: docsCopy(
        '定义各面板的内容、稳定标识、尺寸约束和分隔线覆盖。'
      ),
      type: 'ResizableItem[]',
    },
    {
      name: 'orientation',
      description: docsCopy('内容区域的排列方向。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'separator',
      description: docsCopy(
        '所有分隔线的默认内容；可传入 ReactNode，或根据索引和方向动态渲染。'
      ),
      type: 'ReactNode | ((props: ResizableSeparatorRenderProps) => ReactNode)',
    },
    {
      name: 'classNames',
      description: docsCopy('扩展 panel 和 separator 语义槽的统一样式。'),
      type: 'ResizableClassNames',
    },
    {
      component: 'ResizableClassNames',
      name: 'panel',
      description: docsCopy('扩展所有面板内容区域的样式。'),
      type: 'string',
    },
    {
      component: 'ResizableClassNames',
      name: 'separator',
      description: docsCopy('扩展所有可拖动分隔线的样式。'),
      type: 'string',
    },
    {
      component: 'ResizableItem',
      name: 'key',
      description: docsCopy(
        '面板的稳定标识，同时用于 React 渲染和底层布局关联。'
      ),
      type: 'string | number',
      required: true,
    },
    {
      component: 'ResizableItem',
      name: 'panel',
      description: docsCopy('面板中渲染的 React 节点。'),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'ResizableItem',
      name: 'size',
      description: docsCopy(
        '依次设置初始、最小和最大尺寸；数字按像素解释，无单位字符串按百分比解释。'
      ),
      type: 'readonly [defaultSize, minSize?, maxSize?]',
    },
    {
      component: 'ResizableItem',
      name: 'collapsible',
      description: docsCopy('尺寸低于 size 中的最小值时是否允许面板折叠。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'ResizableItem',
      name: 'collapsedSize',
      description: docsCopy('面板折叠后的尺寸。'),
      type: 'number | string',
      defaultValue: "'0%'",
    },
    {
      component: 'ResizableItem',
      name: 'separator',
      description: docsCopy(
        '覆盖当前 item 之后的分隔线内容；传入 null 可隐藏视觉内容。'
      ),
      type: 'ResizableSeparator',
    },
    {
      component: 'ResizableItem',
      name: 'onResize',
      description: docsCopy(
        '面板尺寸变化时调用，并提供当前尺寸、item key 和上次尺寸。'
      ),
      type: '(size: PanelSize, key: string | number, previousSize?: PanelSize) => void',
    },
    {
      component: 'ResizableSeparatorRenderProps',
      name: 'index',
      description: docsCopy('当前分隔线在 items 间的顺序索引。'),
      type: 'number',
      required: true,
    },
    {
      component: 'ResizableSeparatorRenderProps',
      name: 'itemKey',
      description: docsCopy('分隔线前一个面板的稳定标识。'),
      type: 'string | number',
      required: true,
    },
    {
      component: 'ResizableSeparatorRenderProps',
      name: 'nextItemKey',
      description: docsCopy('分隔线后一个面板的稳定标识。'),
      type: 'string | number',
      required: true,
    },
    {
      component: 'ResizableSeparatorRenderProps',
      name: 'orientation',
      description: docsCopy('当前面板组的排列方向。'),
      type: "'horizontal' | 'vertical'",
      required: true,
    },
  ],
  accessibility: [
    docsCopy('分隔线保持可聚焦，并支持方向键调整相邻区域尺寸。'),
    docsCopy('separator 提供的纯装饰内容应使用 aria-hidden。'),
    docsCopy('items 中的导航和内容仍需使用各自正确的语义结构。'),
  ],
  pitfalls: [
    docsCopy('不要让任一区域缩小到内容无法理解或操作的程度。'),
    docsCopy(
      '不要在 separator 中嵌套按钮等可聚焦控件，以免与分隔线的键盘交互冲突。'
    ),
    docsCopy('移动端空间不足时，应评估是否改用纵向排列或折叠导航。'),
  ],
};

const breadcrumbDocumentation: ComponentDocumentation = {
  name: 'Breadcrumb',
  slug: 'breadcrumb',
  summary: docsCopy('展示当前位置与上级路径，并在层级较深时提供快速返回入口。'),
  whenToUse: [
    docsCopy('页面存在三层以上的稳定信息层级。'),
    docsCopy('用户需要理解当前位置并返回任一上级页面。'),
  ],
  examples: [
    {
      title: docsCopy('页面层级'),
      description: docsCopy(
        '面包屑放在页面标题之前，最后一级只表示当前位置，不再提供链接。'
      ),
      preview: <BreadcrumbBasicDemo />,
      code: docsCopy(`import { Breadcrumb } from '@heliannuuthus/ui'

const items = [
  { label: '首页', href: '/' },
  { label: '组件', href: '/components' },
  { label: '导航', href: '/components/navigation-menu' },
  { label: 'Breadcrumb' },
]

export const PageBreadcrumb = () => {
  return <Breadcrumb items={items} icon />
}`),
      wide: true,
      previewHeight: 380,
    },
    {
      title: docsCopy('深层路径折叠'),
      description: docsCopy(
        '路径过长时只收起中间层级，保留起点、直接父级和当前页面作为定位锚点。'
      ),
      preview: <BreadcrumbCollapsedDemo />,
      code: `import { Breadcrumb } from '@heliannuuthus/ui'

<Breadcrumb
  items={releasePath}
  icon
  collapse={{ maxItems: 4, before: 1, after: 2 }}
/>`,
      cases: [
        {
          label: docsCopy('默认'),
          values: {},
          properties: {
            collapse: '{ maxItems: 4, before: 1, after: 2 }',
          },
          isDefault: true,
        },
      ],
      wide: true,
      previewHeight: 300,
    },
    {
      title: docsCopy('节点菜单与视觉样式'),
      description: docsCopy(
        '下拉节点用于切换同级位置；分隔符和样式只改变视觉表达，不改变路径语义。'
      ),
      preview: <BreadcrumbVariantsDemo />,
      code: `import { Breadcrumb } from '@heliannuuthus/ui'

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
      description: docsCopy(
        '设置每一级的名称、链接、图标、禁用状态和下拉菜单。'
      ),
      type: 'BreadcrumbItem[]',
    },
    {
      name: 'variant',
      description: docsCopy('路径项的视觉样式。'),
      type: "'default' | 'underline' | 'pill'",
      defaultValue: "'default'",
    },
    {
      name: 'separator',
      description: docsCopy('设置统一的路径分隔符，也可以传入自己的图标。'),
      type: 'BreadcrumbSeparator',
      defaultValue: "'chevron'",
    },
    {
      name: 'size',
      description: docsCopy('控制文字与路径项的整体密度。'),
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'collapse',
      description: docsCopy(
        '设置路径折叠阈值，或进一步配置前后保留数量和触发器名称。'
      ),
      type: 'number | BreadcrumbCollapseOptions',
    },
    {
      name: 'icon',
      description: docsCopy('为首项显示内置首页图标，或传入自定义图标。'),
      type: 'boolean | ReactNode',
      defaultValue: 'false',
    },
    {
      name: '...navProps',
      description: docsCopy(
        '除 children 外，可直接传入 nav 元素支持的 id、className、style、ARIA、data 属性和原生事件。'
      ),
      type: 'Omit<ComponentProps<"nav">, "children">',
    },
  ],
  typePreviews: [
    {
      name: 'BreadcrumbCollapseOptions',
      definition: `type BreadcrumbCollapseOptions = {
  maxItems: number
  before?: number // default: 1
  after?: number // default: 2
  label?: string
}`,
    },
  ],
  accessibility: [
    docsCopy('根节点使用带有 breadcrumb 名称的 nav，路径使用有序列表。'),
    docsCopy('当前页面使用 aria-current，视觉分隔符不进入读屏顺序。'),
    docsCopy('折叠项和层级菜单支持键盘打开与导航。'),
  ],
  pitfalls: [
    docsCopy('不要在只有一到两层页面时增加没有导航价值的 Breadcrumb。'),
    docsCopy('避免展示超过五个可见层级；深层路径应使用 collapse 收起。'),
  ],
};

const dropdownMenuDocumentation: ComponentDocumentation = {
  name: 'Dropdown Menu',
  slug: 'dropdown-menu',
  summary: docsCopy(
    '从一个明确的触发器展开临时操作列表，可承载普通命令、选择状态和分层操作。'
  ),
  whenToUse: [
    docsCopy('当前界面没有足够空间直接展示一组次要操作。'),
    docsCopy('操作与某个按钮、对象或局部上下文紧密相关。'),
  ],
  examples: [
    {
      title: docsCopy('常用操作'),
      description: docsCopy(
        '一个 items 数组同时描述图标、快捷键、禁用状态和危险操作。'
      ),
      preview: <DropdownMenuActionsDemo />,
      code: docsCopy(`import { Button } from '@heliannuuthus/ui'
import { DropdownMenu } from '@heliannuuthus/ui'
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
/>`),
    },
    {
      title: docsCopy('选择与状态'),
      description: docsCopy(
        'checkbox 表达可独立切换的设置，radio 表达一组互斥选项。'
      ),
      preview: <DropdownMenuSelectionDemo />,
      code: docsCopy(`import { useState } from 'react'
import { Button } from '@heliannuuthus/ui'
import { DropdownMenu } from '@heliannuuthus/ui'

export const ViewSettings = () => {
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
          onChange: setSidebar,
        },
        { type: 'separator' },
        {
          type: 'radio',
          value: density,
          onChange: setDensity,
          items: [
            { label: '紧凑', value: 'compact' },
            { label: '舒适', value: 'comfortable' },
          ],
        },
      ]}
    />
  )
}`),
    },
    {
      title: docsCopy('子菜单与尺寸'),
      description: docsCopy(
        '带 children 的操作自动形成子菜单；size 统一控制菜单的密度和宽度。'
      ),
      preview: <DropdownMenuSubmenuDemo />,
      code: docsCopy(`import { Button } from '@heliannuuthus/ui'
import { DropdownMenu } from '@heliannuuthus/ui'

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
/>`),
    },
  ],
  api: [
    {
      name: 'trigger',
      description: docsCopy('打开菜单的按钮或其他可交互元素。'),
      type: 'ReactElement',
    },
    {
      name: 'items',
      description: docsCopy(
        '描述操作、分组标题、分隔线、勾选项、单选组和子菜单。'
      ),
      type: 'DropdownMenuEntry[]',
    },
    {
      name: 'size',
      description: docsCopy('控制菜单项密度和菜单最小宽度。'),
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'align',
      description: docsCopy('菜单相对触发器的对齐方式。'),
      type: "'start' | 'center' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'side',
      description: docsCopy('菜单优先出现的方向；空间不足时会自动避让。'),
      type: "'top' | 'right' | 'bottom' | 'left'",
      defaultValue: "'bottom'",
    },
    {
      name: 'open',
      description: docsCopy('以受控方式管理菜单开关状态。'),
      type: 'boolean',
    },
    {
      name: 'defaultOpen',
      description: docsCopy('设置菜单非受控模式下的初始开关状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'onOpenChange',
      description: docsCopy('菜单开关状态变化时调用。'),
      type: '(open: boolean) => void',
    },
  ],
  accessibility: [
    docsCopy(
      '触发器需要提供可理解的文字或 aria-label，并支持 Enter、Space 和方向键打开菜单。'
    ),
    docsCopy('菜单项保持明确的动作名称；仅图标不足以表达操作含义。'),
    docsCopy(
      '危险操作使用 destructive 进行视觉提示，但最终删除仍应提供确认或撤销能力。'
    ),
  ],
  pitfalls: [
    docsCopy('不要把主要操作藏进菜单；高频主要动作应直接显示在界面上。'),
    docsCopy('避免超过两层子菜单，过深的结构会增加指针和键盘操作成本。'),
  ],
};

const menubarDocumentation: ComponentDocumentation = {
  name: 'Menubar',
  slug: 'menubar',
  typeDefinitionGroups: ['MenubarMenuConfig'],
  summary: docsCopy(
    '组织桌面应用式的顶层命令，让多组全局操作在稳定位置中被发现和执行。'
  ),
  whenToUse: [
    docsCopy('产品具有文件、编辑、视图等跨页面或跨内容的全局命令。'),
    docsCopy('用户需要通过键盘连续切换多个顶层菜单并执行高密度操作。'),
  ],
  examples: [
    {
      title: docsCopy('应用命令'),
      description: docsCopy(
        '文件和编辑菜单包含分组、图标、快捷键、禁用状态与危险操作，并提供实际反馈。'
      ),
      wide: true,
      previewHeight: 500,
      preview: <MenubarCommandsDemo />,
      code: docsCopy(`import { Menubar } from '@heliannuuthus/ui'

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
/>`),
    },
    {
      title: docsCopy('可选视图状态'),
      description: docsCopy(
        'checkbox 控制可独立开关的视图项，radio 管理互斥主题，并把状态同步到内容区。'
      ),
      wide: true,
      previewHeight: 500,
      preview: <MenubarViewDemo />,
      code: docsCopy(`import { useState } from 'react'
import { Menubar } from '@heliannuuthus/ui'

export const ViewMenubar = () => {
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
              onChange: setSidebar,
            },
            { type: 'separator' },
            {
              type: 'radio',
              value: theme,
              onChange: setTheme,
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
}`),
    },
    {
      title: docsCopy('二级菜单与顶层状态'),
      description: docsCopy(
        '在组件文档工作台中用 children 组织最近组件与导出格式，顶层菜单同时支持禁用状态。'
      ),
      wide: true,
      previewHeight: 500,
      preview: <MenubarNestedDemo />,
      code: docsCopy(`import { Menubar } from '@heliannuuthus/ui'

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
/>`),
    },
  ],
  api: [
    {
      name: 'menus',
      description: docsCopy('定义顶层菜单名称、禁用状态和每组内部命令。'),
      type: 'MenubarMenuConfig[]',
    },
    {
      component: 'MenubarMenuConfig',
      name: 'label',
      description: docsCopy('设置顶层菜单触发项的可见名称。'),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'MenubarMenuConfig',
      name: 'items',
      description: docsCopy(
        '承载普通命令、标题、分隔线、勾选项、单选组及二级菜单。'
      ),
      type: 'DropdownMenuEntry[]',
      required: true,
    },
    {
      component: 'MenubarMenuConfig',
      name: 'disabled',
      description: docsCopy('禁用当前顶层菜单及其触发项。'),
      type: 'boolean',
    },
    {
      name: 'size',
      description: docsCopy('控制顶层菜单栏与触发项的整体密度。'),
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      name: 'loop',
      description: docsCopy('控制方向键导航到边界后是否循环。'),
      type: 'boolean',
      defaultValue: 'true',
    },
  ],
  accessibility: [
    docsCopy('顶层菜单支持左右方向键切换，菜单内部使用上下方向键移动焦点。'),
    docsCopy('快捷键文本只提供提示；应用仍需自行注册对应的全局键盘命令。'),
    docsCopy('菜单名称和命令名称应直接表达动作，不要仅依赖图标。'),
  ],
  pitfalls: [
    docsCopy('Menubar 面向全局命令，不适合替代站点主导航或页面标签页。'),
    docsCopy('不要把所有页面操作塞进顶层菜单，应保留稳定且跨上下文的命令。'),
  ],
};

const navigationMenuDocumentation: ComponentDocumentation = {
  name: 'Navigation Menu',
  slug: 'navigation-menu',
  summary: docsCopy(
    '组织站点或产品的主要入口，并在需要时展开带有说明和分组的丰富导航面板。'
  ),
  whenToUse: [
    docsCopy('一级入口需要同时展示分类、说明或推荐内容。'),
    docsCopy('站点导航需要兼顾直接链接和可展开的内容分组。'),
  ],
  examples: [
    {
      title: docsCopy('产品级大菜单'),
      description: docsCopy(
        '把产品入口、资源入口和当前页面放入同一条站点导航，弹层宽度随内容平滑变化。'
      ),
      wide: true,
      previewHeight: 500,
      preview: <NavigationMenuMegaDemo />,
      code: docsCopy(`import { NavigationMenu } from '@heliannuuthus/ui'

<NavigationMenu
  items={[
    {
      label: '产品',
      value: 'product',
      content: ({ Link }) => (
        <>
          <Link href="/components">组件库</Link>
          <Link href="/tokens">设计令牌</Link>
        </>
      ),
    },
    { active: true, href: '/components', label: '组件' },
  ]}
/>`),
    },
    {
      title: docsCopy('局部导航与对齐'),
      description: docsCopy(
        '在工具栏右侧使用较小内容面板，并通过 align 控制弹层相对导航的对齐方式。'
      ),
      preview: <NavigationMenuCompactDemo />,
      code: docsCopy(`<NavigationMenu
  align="end"
  items={[
    {
      label: '产品',
      content: ({ Link }) => (
        <Link href="/components">组件库</Link>
      ),
    },
  ]}
/>`),
    },
  ],
  api: [
    {
      name: 'align',
      description: docsCopy('控制弹层相对导航根节点的水平对齐方式。'),
      type: "'start' | 'center' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'NavigationMenuTrigger',
      description: docsCopy('打开一组富导航内容的顶层入口。'),
      type: 'NavigationMenuPrimitive.Trigger.Props',
    },
    {
      name: 'NavigationMenuLink',
      description: docsCopy('直接导航到目标页面，active 表示当前位置。'),
      type: 'NavigationMenuPrimitive.Link.Props',
    },
    {
      name: 'NavigationMenuContent',
      description: docsCopy('承载分组链接、说明或推荐入口的弹出内容。'),
      type: 'NavigationMenuPrimitive.Content.Props',
    },
  ],
  accessibility: [
    docsCopy('顶层入口和弹层链接支持键盘聚焦与方向键导航。'),
    docsCopy('当前页面使用 active 状态，并保持链接文字能独立表达目标。'),
  ],
  pitfalls: [
    docsCopy('不要用大菜单隐藏唯一的主要行动；高频入口应保持直接可见。'),
    docsCopy('避免在弹层中继续嵌套第三层导航。'),
  ],
};

const paginationDocumentation: ComponentDocumentation = {
  name: 'Pagination',
  slug: 'pagination',
  summary: docsCopy('在分段数据集合之间导航，并明确当前页、相邻页和数据范围。'),
  whenToUse: [
    docsCopy('完整数据无法在一个视图中高效加载或理解。'),
    docsCopy('用户需要在当前位置附近跳转，或返回之前浏览的结果页。'),
  ],
  examples: [
    {
      title: docsCopy('受控分页'),
      description: docsCopy(
        '页码、上一页和下一页共同更新当前状态，并在边界停止。'
      ),
      preview: <PaginationControlledDemo />,
      code: `const [page, setPage] = useState(3)

<Pagination
  current={page}
  onChange={setPage}
  pageCount={12}
/>`,
    },
    {
      title: docsCopy('完整数据分页'),
      description: docsCopy(
        '通过总数与每页数量推导页数，并在一行内组合数据范围、页码、每页数量和快速跳转。'
      ),
      preview: <PaginationOverflowDemo />,
      previewHeight: 180,
      wide: true,
      code: docsCopy(`<Pagination
  current={24}
  total={2480}
  pageSize={20}
  showTotal
  showSizeChanger
  showQuickJumper
      />`),
    },
    {
      title: docsCopy('简洁与禁用状态'),
      description: docsCopy(
        '简洁模式使用页码输入完成长范围跳转；禁用状态保留当前分页上下文但阻止全部操作。'
      ),
      preview: <PaginationStatesDemo />,
      code: `<Pagination
  defaultCurrent={6}
  defaultPageSize={10}
  total={120}
  simple
  size="sm"
/>

<Pagination
  defaultCurrent={3}
  pageCount={8}
  disabled
  previous={false}
  next={false}
/>

<Pagination pageCount={1} hideOnSinglePage />`,
    },
  ],
  api: [
    {
      name: 'align',
      description: docsCopy('设置分页器在可用宽度内的对齐方式。'),
      type: "'start' | 'center' | 'end'",
      defaultValue: "'center'",
    },
    {
      name: 'current',
      description: docsCopy('受控模式下的当前页，从 1 开始。'),
      type: 'number',
    },
    {
      name: 'defaultCurrent',
      description: docsCopy('非受控模式下的初始页码。'),
      type: 'number',
      defaultValue: '1',
    },
    {
      name: 'pageCount',
      description: docsCopy(
        '直接设置总页数；省略时由 total 与 pageSize 推导。'
      ),
      type: 'number',
    },
    {
      name: 'total',
      description: docsCopy(
        '设置数据总数，并结合 pageSize 推导总页数；pageCount 可直接覆盖推导结果。'
      ),
      type: 'number',
      defaultValue: '0',
    },
    {
      name: 'pageSize',
      description: docsCopy('受控模式下的每页数据条数。'),
      type: 'number',
    },
    {
      name: 'defaultPageSize',
      description: docsCopy('非受控模式下的初始每页数据条数。'),
      type: 'number',
      defaultValue: '10',
    },
    {
      name: 'onChange',
      description: docsCopy('页码或每页数量变化时回传下一页和每页数量。'),
      type: '(page: number, pageSize: number) => void',
    },
    {
      name: 'onPageSizeChange',
      description: docsCopy('每页数量变化时回传校正后的页码和每页数量。'),
      type: '(page: number, pageSize: number) => void',
    },
    {
      name: 'pageSizeOptions',
      description: docsCopy('设置每页数量选择器的候选值。'),
      type: 'readonly number[]',
      defaultValue: '[10, 20, 50, 100]',
    },
    {
      name: 'pageSizeLabel',
      description: docsCopy('格式化每页数量选项的可见文字。'),
      type: '(pageSize: number) => ReactNode',
    },
    {
      name: 'showSizeChanger',
      description: docsCopy('显示每页数量选择器。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'showQuickJumper',
      description: docsCopy(
        '显示快速跳页输入框，并可配置标签、后缀和确认按钮。'
      ),
      type: 'boolean | PaginationQuickJumperOptions',
      defaultValue: 'false',
    },
    {
      name: 'showTotal',
      description: docsCopy('显示数据总数，或根据总数与当前范围自定义摘要。'),
      type: 'boolean | ((total: number, range: readonly [number, number]) => ReactNode)',
      defaultValue: 'false',
    },
    {
      name: 'simple',
      description: docsCopy('使用紧凑的页码输入模式，并可设为只读。'),
      type: 'boolean | PaginationSimpleOptions',
      defaultValue: 'false',
    },
    {
      name: 'disabled',
      description: docsCopy('禁用所有分页、跳页和每页数量操作。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'hideOnSinglePage',
      description: docsCopy('只有一页时隐藏整个分页器。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'previous',
      description: docsCopy(
        '控制上一页条目；false 隐藏，true 使用默认内容，ReactNode 自定义完整内容。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'true',
    },
    {
      name: 'next',
      description: docsCopy(
        '控制下一页条目；false 隐藏，true 使用默认内容，ReactNode 自定义完整内容。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'true',
    },
    {
      name: 'first',
      description: docsCopy(
        '控制第一页条目；false 隐藏，true 使用默认图标，ReactNode 自定义完整内容。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'false',
    },
    {
      name: 'last',
      description: docsCopy(
        '控制最后一页条目；false 隐藏，true 使用默认图标，ReactNode 自定义完整内容。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'false',
    },
    {
      name: 'showTitle',
      description: docsCopy('为页码和导航按钮提供原生 title 提示。'),
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      name: 'ariaLabels',
      description: docsCopy(
        '本地化分页导航、前后翻页按钮和省略页码的无障碍名称。'
      ),
      type: 'PaginationAriaLabels',
    },
    {
      name: 'getItemAriaLabel',
      description: docsCopy('根据条目类型、页码和选中状态生成无障碍名称。'),
      type: '(context: PaginationAriaLabelContext) => string',
    },
    {
      name: 'getItemHref',
      description: docsCopy(
        '为页码和导航按钮生成可复制、可打开新窗口的真实地址。'
      ),
      type: '(page: number, type: PaginationItemType) => string',
    },
    {
      name: 'boundaries',
      description: docsCopy('控制首尾两侧始终保留多少个边界页码。'),
      type: 'number',
      defaultValue: '1',
    },
    {
      name: 'siblings',
      description: docsCopy('控制当前页两侧保留多少个相邻页码。'),
      type: 'number',
      defaultValue: '1',
    },
    {
      name: 'renderItem',
      description: docsCopy('自定义页码、导航按钮和省略标记的最终渲染。'),
      type: '(item: PaginationRenderItemProps) => ReactNode',
    },
    {
      name: 'size',
      description: docsCopy('设置分页控件尺寸。'),
      type: 'PaginationSize',
      defaultValue: "'default'",
    },
    {
      name: 'classNames',
      description: docsCopy('按语义插槽扩展分页器内部类名。'),
      type: 'PaginationClassNames',
    },
    {
      name: 'styles',
      description: docsCopy('按语义插槽扩展分页器内部行内样式。'),
      type: 'PaginationStyles',
    },
  ],
  accessibility: [
    docsCopy('当前页使用 aria-current，上一页和下一页保留明确的可访问名称。'),
    docsCopy('不可用的边界操作同时设置 aria-disabled 并阻止导航。'),
  ],
  pitfalls: [
    docsCopy('不要一次展示所有页码；长范围应围绕当前页进行压缩。'),
    docsCopy('如果数据天然适合连续浏览，应评估加载更多或虚拟滚动。'),
  ],
};

const tabsDocumentation: ComponentDocumentation = {
  name: 'Tabs',
  slug: 'tabs',
  summary: docsCopy(
    '在同一上下文中切换互斥内容，同时保持页面位置和任务连续性。'
  ),
  whenToUse: [
    docsCopy('多组内容处于同一层级，并且用户通常只需要查看其中一组。'),
    docsCopy('切换内容不应改变页面主路径或丢失当前任务上下文。'),
  ],
  examples: [
    {
      title: docsCopy('数据面板'),
      description: docsCopy(
        '默认样式承载概览、动态与成员数据，切换后内容区域保持稳定。'
      ),
      preview: <TabsDashboardDemo />,
      code: docsCopy(`<Tabs
  defaultValue="overview"
  items={[
    { value: 'overview', label: '概览', content: <Overview /> },
    { value: 'activity', label: '动态', content: <Activity /> },
    { value: 'members', label: '成员', content: <Members /> },
  ]}
/>`),
    },
    {
      title: docsCopy('四种样式与快捷居中'),
      description: docsCopy(
        '胶囊、线型、描边和柔和样式覆盖不同层级；centered 可直接让标签列表居中。'
      ),
      wide: true,
      previewHeight: 420,
      preview: <TabsVariantsDemo />,
      code: docsCopy(`<Tabs
  centered
  defaultValue="preview"
  variant="line"
  items={[
    { value: 'preview', label: '预览', content: '实时预览当前组件。' },
    { value: 'code', label: '代码', content: '查看实现代码。' },
    { value: 'tests', label: '测试', content: '查看测试结果。' },
  ]}
/>`),
    },
    {
      title: docsCopy('窄容器压力测试'),
      description: docsCopy(
        '320px 与 480px 只是代表性的测试容器，不是组件断点；空间不足时隐藏原生滚动条、显示两侧导航按钮，同时保留触摸与触控板横向滑动。'
      ),
      cases: [
        {
          label: docsCopy('默认名称'),
          properties: {},
          values: { labels: 'default' },
        },
        {
          isDefault: true,
          label: docsCopy('本地化名称'),
          properties: { scrollLabels: '{ start, end }' },
          values: { labels: 'custom' },
        },
      ],
      preview: (values) => (
        <TabsResponsiveDemo
          labels={values.labels === 'default' ? 'default' : 'custom'}
        />
      ),
      code: docsCopy(`<div className="w-[320px] max-w-full">
  <Tabs
    defaultValue="overview"
    items={[
      { value: 'overview', label: '项目概览', content: <Overview /> },
      { value: 'activity', label: '活动记录', content: <Activity /> },
      { value: 'branches', label: '分支策略', content: <Branches /> },
      { value: 'docs', label: '使用文档', content: <Docs /> },
      { value: 'support', label: '帮助支持', content: <Support /> },
    ]}
    scrollLabels={{
      start: '向前滚动标签',
      end: '向后滚动标签',
    }}
  />
</div>`),
      wide: true,
      previewHeight: 440,
    },
    {
      title: docsCopy('内容切换动效'),
      description: docsCopy(
        '稳定的内容视口保持边框和尺寸不动；淡入或方向滑动只作用于面板内容，系统减少动态效果时自动降级。'
      ),
      preview: <TabsMotionDemo />,
      code: docsCopy(`<Tabs
  animation="slide"
  centered
  classNames={{
    panel: 'p-8',
    viewport: 'mt-4 min-h-48 rounded-xl border',
  }}
  defaultValue="design"
  variant="soft"
  items={[
    { value: 'design', label: '设计', content: '整理组件视觉规范' },
    { value: 'code', label: '开发', content: '连接组件与业务状态' },
    { value: 'release', label: '发布', content: '完成验证并发布' },
  ]}
/>`),
      wide: true,
      previewHeight: 520,
    },
  ],
  typeDefinitionGroups: [
    'TabsItem',
    'TabsScrollLabels',
    'TabsClassNames',
    'TabsStyles',
  ],
  api: [
    {
      name: 'items',
      description: docsCopy(
        '标签配置列表，决定标签、对应面板及禁用状态。必填。'
      ),
      type: 'readonly TabsItem[]',
      required: true,
    },
    {
      name: 'value',
      description: docsCopy(
        '受控模式下当前激活标签的 value；传入 null 时不激活标签。'
      ),
      type: 'string | null',
    },
    {
      name: 'defaultValue',
      description: docsCopy(
        '非受控模式下的初始标签；省略时自动选择第一个可用标签。'
      ),
      type: 'string | null',
      defaultValue: docsCopy('首个可用标签'),
    },
    {
      name: 'onChange',
      description: docsCopy('激活标签变化时调用，回传新的 value。'),
      type: '(value: string | null) => void',
    },
    {
      name: 'orientation',
      description: docsCopy('设置标签列表方向，同时决定键盘方向键行为。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      name: 'variant',
      description: docsCopy('切换胶囊、线型、描边或柔和指示器。'),
      type: "'default' | 'line' | 'outline' | 'soft'",
      defaultValue: "'default'",
    },
    {
      name: 'animation',
      description: docsCopy(
        '设置面板内容的切换动效；减少动态效果偏好下自动降级。'
      ),
      type: "'none' | 'fade' | 'slide'",
      defaultValue: "'fade'",
    },
    {
      name: 'centered',
      description: docsCopy('在 TabsList 上快速居中标签列表。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'scrollLabels',
      description: docsCopy(
        '本地化横向溢出时自动出现的起始与末尾滚动按钮名称。'
      ),
      type: 'Partial<TabsScrollLabels>',
      defaultValue: docsCopy('内置英文文案'),
    },
    {
      name: 'className',
      description: docsCopy('扩展 Tabs 根容器样式。'),
      type: 'string',
    },
    {
      component: 'TabsItem',
      name: 'value',
      description: docsCopy('标签与对应面板共享的唯一标识。'),
      type: 'string',
      required: true,
    },
    {
      component: 'TabsItem',
      name: 'label',
      description: docsCopy('标签触发器中展示的内容。'),
      type: 'React.ReactNode',
      required: true,
    },
    {
      component: 'TabsItem',
      name: 'content',
      description: docsCopy('标签激活后展示的面板内容。'),
      type: 'React.ReactNode',
      required: true,
    },
    {
      component: 'TabsItem',
      name: 'disabled',
      description: docsCopy('禁用该标签并跳过鼠标与键盘激活。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'TabsScrollLabels',
      name: 'start',
      description: docsCopy('向列表起始方向滚动按钮的可访问名称。'),
      type: 'string',
      defaultValue: "'Scroll tabs backward'",
      required: true,
    },
    {
      component: 'TabsScrollLabels',
      name: 'end',
      description: docsCopy('向列表末尾方向滚动按钮的可访问名称。'),
      type: 'string',
      defaultValue: "'Scroll tabs forward'",
      required: true,
    },
  ],
  accessibility: [
    docsCopy('标签列表、标签和面板之间保留正确的 ARIA 关联。'),
    docsCopy('水平标签使用左右方向键，纵向标签使用上下方向键移动。'),
    docsCopy(
      '横向标签溢出时，前后按钮提供可本地化名称；触控滚动和焦点自动带出仍然可用。'
    ),
  ],
  pitfalls: [
    docsCopy('不要用 Tabs 表达有前后依赖的步骤流程。'),
    docsCopy('标签过多时应减少分组或改用导航，不应挤压到无法辨认。'),
    docsCopy(
      '不要为 Tabs 硬编码设备断点；应让它服从实际父容器，并在嵌套窄空间中验证溢出行为。'
    ),
  ],
};

const layoutDocumentation: ComponentDocumentation = {
  name: 'Layout',
  slug: 'layout',
  summary: docsCopy(
    '使用 Header、Content、Footer 和 Sidebar 组合页面骨架，让常见布局关系保持清晰且可嵌套。'
  ),
  whenToUse: [
    docsCopy('页面需要稳定的页头、主体和页脚结构。'),
    docsCopy('应用需要在内容左侧或右侧加入导航、目录或详情区域。'),
    docsCopy('复杂页面需要通过嵌套 Layout 组合纵向与横向区域。'),
  ],
  examples: [
    {
      title: docsCopy('页面骨架'),
      description: docsCopy(
        '最基础的纵向组合：Header 和 Footer 保持固定区域，Content 占据中间剩余空间。'
      ),
      previewHeight: 370,
      preview: <LayoutPageDemo />,
      code: `import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout.Header>Header</Layout.Header>
  <Layout.Content>Content</Layout.Content>
  <Layout.Footer>Footer</Layout.Footer>
</Layout>`,
    },
    {
      title: docsCopy('左侧导航'),
      description: docsCopy(
        'Sidebar 与一个嵌套 Layout 横向排列；嵌套区域继续负责 Header 和 Content 的纵向关系。'
      ),
      previewHeight: 370,
      preview: <LayoutLeftSidebarDemo />,
      code: `import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout.Sidebar width={240}>Sidebar</Layout.Sidebar>
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
  </Layout>
</Layout>`,
    },
    {
      title: docsCopy('右侧详情'),
      description: docsCopy(
        '将 Sidebar 放在内容之后即可形成右侧辅助区，适合目录、属性和上下文详情。'
      ),
      previewHeight: 370,
      preview: <LayoutRightSidebarDemo />,
      code: `import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout>
    <Layout.Content>Content</Layout.Content>
  </Layout>
  <Layout.Sidebar width="18rem">Details</Layout.Sidebar>
</Layout>`,
    },
    {
      title: docsCopy('完整应用框架'),
      description: docsCopy(
        'Header 和 Footer 跨越整页，中间区域再嵌套 Sidebar 与 Content，适合后台和工作台。'
      ),
      previewHeight: 370,
      preview: <LayoutApplicationDemo />,
      code: `import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout.Header>Header</Layout.Header>
  <Layout>
    <Layout.Sidebar>Sidebar</Layout.Sidebar>
    <Layout.Content>Content</Layout.Content>
  </Layout>
  <Layout.Footer>Footer</Layout.Footer>
</Layout>`,
    },
    {
      title: docsCopy('响应式折叠'),
      description: docsCopy(
        'Sidebar 在 lg 以下自动折叠，也可以通过内置触发器手动切换；collapsedWidth 决定折叠后保留的宽度。'
      ),
      previewHeight: 370,
      caseAxes: [
        {
          name: 'defaultCollapsed',
          label: docsCopy('初始状态'),
          defaultValue: 'false',
          property: 'Layout.Sidebar.defaultCollapsed',
          options: [
            { label: docsCopy('展开'), value: 'false' },
            { label: docsCopy('收起'), value: 'true' },
          ],
        },
        {
          name: 'side',
          label: docsCopy('位置'),
          defaultValue: 'start',
          property: 'Layout.Sidebar.side',
          options: [
            { label: docsCopy('起始侧'), value: 'start' },
            { label: docsCopy('结束侧'), value: 'end' },
          ],
        },
      ],
      preview: (values) => (
        <LayoutCollapsibleSidebarDemo
          defaultCollapsed={values.defaultCollapsed === 'true'}
          side={values.side === 'end' ? 'end' : 'start'}
        />
      ),
      code: docsCopy(`import { Layout } from '@heliannuuthus/ui'
import { useState } from 'react'

export const ResponsiveLayout = () => {
  const [status, setStatus] = useState('')

  return (
    <Layout>
      <Layout.Sidebar
        breakpoint="lg"
        collapsible
        collapsedWidth={64}
        defaultCollapsed={false}
        side="start"
        labels={{
          collapse: '收起侧边栏',
          expand: '展开侧边栏',
        }}
        onBreakpointChange={(below) => setStatus(below ? '窄屏' : '宽屏')}
        onChange={(collapsed, reason) =>
          setStatus(
            (collapsed ? '已收起' : '已展开') + '：' + reason
          )
        }
      >
        Navigation
      </Layout.Sidebar>
      <Layout.Content>{status}</Layout.Content>
    </Layout>
  )
}`),
    },
  ],
  parts: [
    {
      name: 'Layout',
      description: docsCopy(
        '组合纵向区域；直接包含 Sidebar 时自动切换为横向排列。'
      ),
    },
    {
      name: 'Layout.Header',
      description: docsCopy('页面或局部布局顶部的固定区域。'),
    },
    {
      name: 'Layout.Content',
      description: docsCopy('承载主要内容并占据布局中的剩余空间。'),
    },
    {
      name: 'Layout.Footer',
      description: docsCopy('页面或局部布局底部的固定区域。'),
    },
    {
      name: 'Layout.Sidebar',
      description: docsCopy('放置导航、目录或详情的侧边区域。'),
    },
  ],
  api: [
    {
      component: 'Layout.Sidebar',
      name: 'breakpoint',
      description: docsCopy(
        '低于指定视口断点时自动折叠；使用与 Tailwind 默认断点一致的 token。'
      ),
      type: "'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    },
    {
      component: 'Layout.Sidebar',
      name: 'collapsed',
      description: docsCopy('受控的折叠状态。'),
      type: 'boolean',
    },
    {
      component: 'Layout.Sidebar',
      name: 'collapsedWidth',
      description: docsCopy(
        '折叠后的侧边栏宽度；数字按像素处理，设置为 0 时隐藏内容。'
      ),
      type: 'number | string',
      defaultValue: '80',
    },
    {
      component: 'Layout.Sidebar',
      name: 'collapsible',
      description: docsCopy(
        '启用内置折叠触发器；传入 ReactNode 可以替换默认图标。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'false',
    },
    {
      component: 'Layout.Sidebar',
      name: 'defaultCollapsed',
      description: docsCopy('非受控模式下的初始折叠状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Layout.Sidebar',
      name: 'onBreakpointChange',
      description: docsCopy('进入或离开 breakpoint 范围时调用。'),
      type: '(below: boolean) => void',
    },
    {
      component: 'Layout.Sidebar',
      name: 'onChange',
      description: docsCopy(
        '折叠状态请求变化时调用，并说明变化来自断点还是触发器。'
      ),
      type: "(collapsed: boolean, reason: 'breakpoint' | 'trigger') => void",
    },
    {
      component: 'Layout.Sidebar',
      name: 'side',
      description: docsCopy(
        '声明侧边栏位于逻辑起始侧或结束侧，用于调整内置触发器的位置与图标。'
      ),
      type: "'start' | 'end'",
      defaultValue: "'start'",
    },
    {
      component: 'Layout.Sidebar',
      name: 'labels',
      description: docsCopy(
        '设置内置折叠触发器在展开和折叠状态下的可访问名称。'
      ),
      type: 'LayoutSidebarLabels',
      defaultValue:
        "{ collapse: 'Collapse sidebar', expand: 'Expand sidebar' }",
    },
    {
      component: 'Layout.Sidebar',
      name: 'width',
      description: docsCopy(
        '设置侧边区域宽度；数字按像素处理，也可以传入任意 CSS 长度。'
      ),
      type: 'number | string',
      defaultValue: '240',
    },
    {
      component: docsCopy('全部组成组件'),
      name: docsCopy('原生属性'),
      description: docsCopy(
        'Layout 支持 div 属性；Header、Content、Footer 和 Sidebar 分别支持对应语义元素的标准属性。'
      ),
      type: 'HTMLAttributes',
    },
  ],
  accessibility: [
    docsCopy(
      'Header、Content、Footer 和 Sidebar 默认使用 header、main、footer 和 aside 语义元素。'
    ),
    docsCopy(
      '同一页面只应保留一个 Content 主地标；局部布局请使用普通内容容器，避免出现多个 main。'
    ),
    docsCopy('Sidebar 中的导航或详情区域需要提供可辨认的 aria-label。'),
  ],
  pitfalls: [
    docsCopy(
      '不要把所有区域平铺在同一个 Layout；跨整页的 Header 和 Footer 应包住中间的嵌套 Layout。'
    ),
    docsCopy(
      '文字导航在窄屏下通常不适合压成图标栏；将 collapsedWidth 设置为 0，并组合 Drawer 提供完整导航。'
    ),
  ],
};

export const componentDocumentation: Record<string, ComponentDocumentation> = {
  button: buttonDocumentation,
  typography: typographyDocumentation,
  tag: tagDocumentation,
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
  layout: layoutDocumentation,
  tabs: tabsDocumentation,
};

const remainingComponents = [
  ['Scroll Area', 'scroll-area', docsCopy('为受限区域提供一致的滚动体验。')],
  ['Checkbox', 'checkbox', docsCopy('控制可独立选择的布尔选项。')],
  [
    'Date Picker',
    'date-picker',
    docsCopy('通过内联日历或弹出触发器选择单个日期。'),
  ],
  ['Form', 'form', docsCopy('组织字段结构，并连接状态、校验与提交行为。')],
  ['Input', 'input', docsCopy('接收单行文本或特定格式内容。')],
  ['Input Number', 'input-number', docsCopy('输入、格式化并按步长调整数值。')],
  ['Radio', 'radio', docsCopy('从互斥选项中选择一个值。')],
  ['Select', 'select', docsCopy('从弹出列表中选择预定义值。')],
  ['Slider', 'slider', docsCopy('在连续或离散范围内选择数值。')],
  ['Switch', 'switch', docsCopy('即时切换设置的开关状态。')],
  ['Toggle', 'toggle', docsCopy('切换一个可按下的工具状态。')],
  ['Accordion', 'accordion', docsCopy('按需展开一组纵向排列的内容区域。')],
  ['Attachment', 'attachment', docsCopy('展示附件信息、状态与操作。')],
  ['Avatar', 'avatar', docsCopy('表示人物、团队或其他实体。')],
  ['Bubble', 'bubble', docsCopy('展示对话内容，并与头像、滚动区域自由组合。')],
  ['Carousel', 'carousel', docsCopy('在有限空间中轮播同级内容。')],
  ['Collapsible', 'collapsible', docsCopy('控制单个内容区域展开收起。')],
  ['Counter', 'counter', docsCopy('以逐位滚动动画展示变化中的数值。')],
  ['Table', 'data-table', docsCopy('展示并操作结构化数据集合。')],
  ['Empty', 'empty', docsCopy('解释无数据状态并提供下一步。')],
  ['Item', 'item', docsCopy('构建包含内容和操作的通用列表项。')],
  ['Marker', 'marker', docsCopy('标记连续内容中的分段位置或状态。')],
  ['Table', 'table', docsCopy('展示、操作并自定义结构化数据集合。')],
  ['Tooltip', 'tooltip', docsCopy('为控件提供简短补充说明。')],
  ['Alert', 'alert', docsCopy('持续展示重要的页面内提示。')],
  [
    'Alert Dialog',
    'alert-dialog',
    docsCopy('打断当前流程并确认具有重要后果的操作。'),
  ],
  ['Dialog', 'dialog', docsCopy('在模态层中完成聚焦任务。')],
  ['Drawer', 'drawer', docsCopy('从视口或父容器边缘展示自适应临时面板。')],
  ['Popover', 'popover', docsCopy('在触发器附近展示富交互浮层。')],
  ['Progress', 'progress', docsCopy('展示任务或流程完成进度。')],
  ['Skeleton', 'skeleton', docsCopy('在加载前维持内容布局。')],
  ['Sonner', 'sonner', docsCopy('以非阻塞队列反馈短暂结果。')],
  ['Spinner', 'spinner', docsCopy('表示无法确定进度的短时加载。')],
  ['Toast', 'toast', docsCopy('在页面边缘短暂反馈操作结果。')],
  ['Command', 'command', docsCopy('提供可搜索的键盘命令列表。')],
  ['Context Menu', 'context-menu', docsCopy('提供对象相关的上下文操作。')],
] as const;

for (const [name, slug, summary] of remainingComponents) {
  componentDocumentation[slug] = {
    name,
    slug,
    summary,
    whenToUse: [
      docsCopy(`需要${summary.replace(/[。]$/, '')}时。`),
      docsCopy('需要覆盖默认、受控、禁用和窄屏状态时。'),
    ],
    examples: [],
    api: [
      {
        name: 'className',
        description: docsCopy('扩展根节点或语义插槽样式。'),
        type: 'string',
      },
      {
        name: 'children',
        description: docsCopy('组件内容或复合组件子节点。'),
        type: 'React.ReactNode',
      },
      {
        name: 'disabled',
        description: docsCopy('在支持交互的节点上禁用操作。'),
        type: 'boolean',
        defaultValue: 'false',
      },
      {
        name: 'value',
        description: docsCopy('在支持状态时设置受控值。'),
        type: 'component-specific',
      },
      {
        name: 'defaultValue',
        description: docsCopy('在支持状态时设置非受控初始值。'),
        type: 'component-specific',
      },
    ],
    accessibility: [
      docsCopy('保留底层语义、焦点管理与键盘交互。'),
      docsCopy('为触发器、图标和状态提供可感知名称。'),
    ],
    pitfalls: [
      docsCopy('不要移除焦点样式或绕过状态属性。'),
      docsCopy('不要写死业务文案、尺寸和产品状态。'),
    ],
  };
}

const minimalExampleCopy: Record<
  string,
  { description: string; code: string }
> = {
  checkbox: {
    description: docsCopy(
      '单个 Checkbox 表达一个可独立选择的布尔项，标签与控件保持整行可点击。'
    ),
    code: docsCopy(`import { Checkbox } from '@heliannuuthus/ui'

<Checkbox>接收产品更新</Checkbox>`),
  },
  command: {
    description: docsCopy(
      '通过 groups 和 options 创建可搜索的命令列表，选项负责图标、快捷键与执行回调。'
    ),
    code: docsCopy(`import { Command } from '@heliannuuthus/ui'

<Command
  groups={[
    {
      heading: '常用命令',
      options: [
        { label: '新建文件', shortcut: '⌘N', value: 'new-file' },
        { label: '打开设置', shortcut: '⌘,', value: 'settings' },
      ],
    },
  ]}
/>`),
  },
  'context-menu': {
    description: docsCopy(
      '将菜单绑定到明确的内容区域，右键或键盘菜单键打开与当前对象相关的操作。'
    ),
    code: docsCopy(`import { Button, ContextMenu } from '@heliannuuthus/ui'

<ContextMenu
  trigger={<Button variant="outline">在这里单击右键</Button>}
  items={[
    { label: '复制链接' },
    { type: 'separator' },
    { label: '删除项目', destructive: true },
  ]}
/>`),
  },
  counter: {
    description: docsCopy('传入 value 即可展示带逐位滚动反馈的数值。'),
    code: `import { Counter } from '@heliannuuthus/ui'

<Counter value={7.4} fontSize={52} fontWeight={600} />`,
  },
  progress: {
    description: docsCopy(
      '用 label、value 和 showValue 同时说明进度对象、完成比例和剩余范围。'
    ),
    code: docsCopy(`import { Progress } from '@heliannuuthus/ui'

<Progress label="文档覆盖率" showValue value={68} />`),
  },
  skeleton: {
    description: docsCopy(
      '用与最终内容相近的尺寸组合骨架，加载完成前维持页面结构稳定。'
    ),
    code: `import { Skeleton } from '@heliannuuthus/ui'

<div>
  <Skeleton className="h-10 w-10 rounded-full" />
  <Skeleton className="h-4 w-44" />
</div>`,
  },
  slider: {
    description: docsCopy('使用单个滑块在明确的最小值和最大值之间选择数值。'),
    code: docsCopy(`import { Slider } from '@heliannuuthus/ui'

<Slider aria-label="音量" defaultValue={64} min={0} max={100} />`),
  },
  spinner: {
    description: docsCopy(
      'Spinner 表示无法确定完成比例的短时加载，并与可见状态文字一起使用。'
    ),
    code: docsCopy(`import { Spinner } from '@heliannuuthus/ui'

<div><Spinner />正在加载组件……</div>`),
  },
  switch: {
    description: docsCopy(
      'Switch 用于立即生效的二元设置，标签应直接说明开启后会发生什么。'
    ),
    code: docsCopy(`import { Switch } from '@heliannuuthus/ui'

<label><Switch defaultChecked />启用通知</label>`),
  },
};

for (const [slug, preview] of Object.entries(minimalComponentPreviews)) {
  const documentation = componentDocumentation[slug];
  if (!documentation || documentation.examples.length > 0) continue;
  const importName = documentation.name.replace(/ /g, '');
  const copy = minimalExampleCopy[slug];
  documentation.examples = [
    {
      title: docsCopy('基础用法'),
      description:
        copy?.description ??
        docsCopy(`${documentation.name} 的默认结构与最小推荐配置。`),
      preview,
      code: copy?.code ?? `import { ${importName} } from '@heliannuuthus/ui'`,
    },
  ];
}

componentDocumentation.command.examples.push(
  {
    title: docsCopy('分组与选项'),
    description: docsCopy(
      '每个 group 使用 heading 标记分组标题，并通过 options 配置命令值、标签、检索关键词、图标、快捷键、禁用状态和执行回调。'
    ),
    preview: <CommandGroupsDemo />,
    code: `import { Command, type CommandGroup } from '@heliannuuthus/ui'

const groups: CommandGroup[] = [
  {
    heading: 'Files',
    options: [
      {
        value: 'new-file',
        label: 'New file',
        keywords: ['create', 'document'],
        shortcut: '⌘N',
        onSelect: () => createFile(),
      },
      { value: 'open-file', label: 'Open file', disabled: true },
    ],
  },
  {
    heading: 'Preferences',
    options: [{ value: 'settings', label: 'Open settings' }],
  },
]

<Command groups={groups} />`,
    previewHeight: 480,
  },
  {
    title: docsCopy('搜索输入提示'),
    description: docsCopy(
      'placeholder 只描述搜索输入框尚未输入内容时的预期查询，不负责空结果反馈。'
    ),
    preview: <CommandPlaceholderDemo />,
    code: `<Command
  groups={groups}
  placeholder="Search pages, files, or settings…"
/>`,
    previewHeight: 380,
  },
  {
    title: docsCopy('空结果内容'),
    description: docsCopy(
      'emptyText 仅在过滤后没有匹配命令时显示，可以是纯文本，也可以是包含图标、标题和建议的 ReactNode。'
    ),
    preview: <CommandEmptyDemo />,
    code: `const [query, setQuery] = useState('missing command')

<Command
  groups={groups}
  inputProps={{ value: query, onChange: setQuery }}
  emptyText="No matching command"
/>`,
    previewHeight: 380,
  },
  {
    title: docsCopy('命令弹窗'),
    description: docsCopy(
      'dialog 是 Command 对通用 Dialog 的组合入口，用来把同一份命令列表放入模态层；它负责触发器、标题、说明和开关状态，groups 仍负责命令内容。'
    ),
    preview: <CommandDialogDemo />,
    code: `import { Button, Command } from '@heliannuuthus/ui'

<Command
  dialog={{
    trigger: <Button>Open command palette</Button>,
    title: 'Quick actions',
    description: 'Search and run a workspace action.',
  }}
  groups={groups}
/>`,
    previewHeight: 300,
  }
);

componentDocumentation['context-menu'].examples = [
  {
    title: docsCopy('基础用法'),
    description: docsCopy(
      'items 同时体现分组标题、图标、快捷键、禁用项、分隔线和危险操作；选择后结果会显示在触发区域下方。'
    ),
    preview: <ContextMenuActionsDemo />,
    code: `import { ContextMenu } from '@heliannuuthus/ui'

<ContextMenu
  trigger={<div tabIndex={0}>Right-click here</div>}
  items={[
    { type: 'label', label: 'Page actions' },
    { label: 'Copy link', shortcut: '⌘C', onSelect: copyLink },
    { label: 'Copy internal link', disabled: true },
    { type: 'separator' },
    { label: 'Delete page', destructive: true, onSelect: deletePage },
  ]}
/>`,
    previewHeight: 420,
  },
  {
    title: docsCopy('勾选与单选状态'),
    description: docsCopy(
      'checkbox entry 管理独立布尔状态，radio entry 管理互斥选项；关闭菜单后结果仍保留在触发区域中。'
    ),
    preview: <ContextMenuSelectionDemo />,
    code: `<ContextMenu
  trigger={<div tabIndex={0}>Page visibility</div>}
  items={[
    {
      type: 'checkbox',
      label: 'Show comments',
      checked: showComments,
      onChange: setShowComments,
    },
    {
      type: 'radio',
      value: access,
      onChange: setAccess,
      items: [
        { label: 'Only me', value: 'private' },
        { label: 'Team members', value: 'team' },
      ],
    },
  ]}
/>`,
    previewHeight: 380,
  },
  {
    title: docsCopy('嵌套子菜单'),
    description: docsCopy(
      '普通 item 提供 children 时形成子菜单，适合将同一动作的多个格式或目标收进第二层。'
    ),
    preview: <ContextMenuSubmenuDemo />,
    code: `<ContextMenu
  trigger={<div tabIndex={0}>File preview</div>}
  items={[
    {
      label: 'Export as',
      children: [
        { label: 'PDF document', onSelect: exportPdf },
        { label: 'PNG image', onSelect: exportPng },
        { label: 'CSV spreadsheet', onSelect: exportCsv },
      ],
    },
  ]}
/>`,
    previewHeight: 380,
  },
  {
    title: docsCopy('开关状态与禁用'),
    description: docsCopy(
      '比较默认非受控、通过 open 与 onOpenChange 管理的受控模式，以及 disabled 阻止触发的状态。'
    ),
    caseMinWidth: 250,
    cases: [
      {
        isDefault: true,
        label: docsCopy('非受控'),
        properties: { defaultOpen: false },
        values: { mode: 'uncontrolled' },
      },
      {
        label: docsCopy('受控'),
        properties: { onOpenChange: 'setOpen', open: 'open' },
        values: { mode: 'controlled' },
      },
      {
        label: docsCopy('禁用'),
        properties: { disabled: true },
        values: { mode: 'disabled' },
      },
    ],
    preview: (values) => (
      <ContextMenuStateDemo
        mode={
          values.mode === 'controlled' || values.mode === 'disabled'
            ? values.mode
            : 'uncontrolled'
        }
      />
    ),
    code: `<ContextMenu defaultOpen={false} items={items} trigger={target} />
<ContextMenu open={open} onOpenChange={setOpen} items={items} trigger={target} />
<ContextMenu disabled items={items} trigger={target} />`,
    previewHeight: 380,
  },
];

componentDocumentation['dropdown-menu'].typePreviews = [
  {
    name: 'DropdownMenuEntry',
    definition: `type DropdownMenuEntry =
  | DropdownMenuItemEntry
  | DropdownMenuLabelEntry
  | DropdownMenuSeparatorEntry
  | DropdownMenuCheckboxEntry
  | DropdownMenuRadioEntry`,
  },
  {
    name: 'DropdownMenuItemEntry',
    definition: `type DropdownMenuItemEntry = {
  type?: 'item'
  label: ReactNode
  icon?: ReactNode
  shortcut?: ReactNode
  href?: string
  disabled?: boolean
  destructive?: boolean
  onSelect?: () => void
  children?: DropdownMenuEntry[]
}`,
  },
  {
    name: 'DropdownMenuLabelEntry',
    definition: `type DropdownMenuLabelEntry = {
  type: 'label'
  label: ReactNode
}`,
  },
  {
    name: 'DropdownMenuSeparatorEntry',
    definition: `type DropdownMenuSeparatorEntry = {
  type: 'separator'
}`,
  },
  {
    name: 'DropdownMenuCheckboxEntry',
    definition: `type DropdownMenuCheckboxEntry = {
  type: 'checkbox'
  label: ReactNode
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}`,
  },
  {
    name: 'DropdownMenuRadioOption',
    definition: `type DropdownMenuRadioOption = {
  label: ReactNode
  value: string
  disabled?: boolean
}`,
  },
  {
    name: 'DropdownMenuRadioEntry',
    definition: `type DropdownMenuRadioEntry = {
  type: 'radio'
  value: string
  onChange?: (value: string) => void
  items: DropdownMenuRadioOption[]
}`,
  },
];

const scrollAreaDocumentation = componentDocumentation['scroll-area'];
if (scrollAreaDocumentation) {
  scrollAreaDocumentation.summary = docsCopy(
    '在受限区域内承载长内容，并通过封装后的原生滚动视口提供一致的滚动体验。'
  );
  scrollAreaDocumentation.whenToUse = [
    docsCopy(
      '列表、日志或长文本必须保持在固定高度内，但仍需完整访问全部内容。'
    ),
    docsCopy('需要保持原生滚动、键盘操作和触控惯性，同时统一滚动条样式。'),
    docsCopy('内容可能横向溢出，或需要配置滚动条的尺寸与显隐策略。'),
  ];
  scrollAreaDocumentation.examples = [
    {
      title: docsCopy('基础滚动区域'),
      description: docsCopy(
        '组件内部创建可滚动视口和所需滚动条；业务只需提供尺寸、滚动条配置与内容。'
      ),
      preview: (
        <ScrollArea
          className="h-72 w-full max-w-xl rounded-3xl border bg-card"
          scrollbar={{ size: 'sm', visibility: 'auto' }}
        >
          <div className="divide-y px-5">
            {Array.from({ length: 12 }, (_, index) => (
              <p className="py-4 text-sm text-muted-foreground" key={index}>
                {docsCopy('可滚动内容')} {index + 1}
              </p>
            ))}
          </div>
        </ScrollArea>
      ),
      code: docsCopy(`import { ScrollArea } from '@heliannuuthus/ui'

<ScrollArea
  className="h-72 rounded-3xl border"
  scrollbar={{ size: 'sm', visibility: 'auto' }}
>
  <div className="divide-y px-5">
    {items.map((item) => (
      <p className="py-4" key={item.id}>{item.label}</p>
    ))}
  </div>
</ScrollArea>`),
      previewHeight: 440,
    },
  ];
  scrollAreaDocumentation.parts = [
    {
      name: 'ScrollArea',
      description: docsCopy(
        '封装根容器、可聚焦滚动视口、滚动条与双轴交汇角，无需业务手动组合内部部件。'
      ),
    },
  ];
  scrollAreaDocumentation.api = [
    {
      name: 'orientation',
      description: docsCopy('决定渲染纵向、横向或两个方向的滚动条。'),
      type: "'vertical' | 'horizontal' | 'both'",
      defaultValue: "'vertical'",
    },
    {
      name: 'scrollbar',
      description: docsCopy('集中配置滚动条尺寸与显隐策略。'),
      type: 'ScrollAreaScrollbarConfig',
      defaultValue: "{ size: 'md', visibility: 'auto' }",
    },
  ];
  scrollAreaDocumentation.typePreviews = [
    {
      name: 'ScrollAreaScrollbarConfig',
      definition: `type ScrollAreaScrollbarConfig = {
  size?: 'sm' | 'md' | 'lg' | number
  visibility?: 'auto' | 'always' | 'hidden'
}`,
      api: [
        {
          name: 'size',
          description: docsCopy(
            '设置滚动条粗细；预设分别为 6、10、14 像素，数字按像素处理。'
          ),
          type: "'sm' | 'md' | 'lg' | number",
          defaultValue: "'md'",
        },
        {
          name: 'visibility',
          description: docsCopy(
            '自动按悬停或滚动显示、始终显示，或完全隐藏滚动条。'
          ),
          type: "'auto' | 'always' | 'hidden'",
          defaultValue: "'auto'",
        },
      ],
    },
  ];
  scrollAreaDocumentation.accessibility = [
    docsCopy(
      '内部视口只在内容溢出时进入 Tab 顺序，并保留浏览器原生键盘滚动行为。'
    ),
    docsCopy(
      '隐藏滚动条不会禁用滚动；仍需确保触控、滚轮与键盘均可到达全部内容。'
    ),
    docsCopy(
      '列表、日志等内容语义应声明在子内容容器上，不需要操作内部 viewport。'
    ),
  ];
  scrollAreaDocumentation.pitfalls = [
    docsCopy('不要在内容可以自然撑开页面时强行嵌套滚动区域。'),
    docsCopy('隐藏滚动条前应确认界面仍有足够线索表明内容可以滚动。'),
    docsCopy(
      '不要依赖或覆盖内部 viewport、thumb 与 corner；它们不是公共组合 API。'
    ),
  ];
}

componentDocumentation.avatar.examples = [
  {
    title: docsCopy('头像形状'),
    description: docsCopy(
      'shape 在圆形和圆角方形之间切换，每种形状作为独立 case 展示。'
    ),
    caseAxes: [
      {
        name: 'shape',
        label: docsCopy('形状'),
        defaultValue: 'circle',
        options: [
          { label: docsCopy('圆形'), value: 'circle' },
          { label: docsCopy('圆角方形'), value: 'square' },
        ],
      },
    ],
    preview: (values) => (
      <AvatarShapeDemo
        shape={values.shape === 'square' ? 'square' : 'circle'}
      />
    ),
    code: docsCopy(`import { Avatar } from '@heliannuuthus/ui'

<Avatar alt="林默" fallback="林" shape="circle" size="lg" />
<Avatar alt="周一" fallback="周" shape="square" size="lg" />`),
    previewHeight: 'auto',
  },
  {
    title: docsCopy('头像尺寸'),
    description: docsCopy(
      'size 提供小、中、大三档尺寸，并同步调整文字与状态标记。'
    ),
    caseAxes: [
      {
        name: 'size',
        label: docsCopy('尺寸'),
        defaultValue: 'default',
        options: [
          { label: docsCopy('小'), value: 'sm' },
          { label: docsCopy('中'), value: 'default' },
          { label: docsCopy('大'), value: 'lg' },
        ],
      },
    ],
    preview: (values) => (
      <AvatarShapeDemo
        size={
          values.size === 'sm' || values.size === 'lg' ? values.size : 'default'
        }
      />
    ),
    code: docsCopy(`<Avatar size="sm" alt="林默" fallback="林" />
<Avatar size="default" alt="林默" fallback="林" />
<Avatar size="lg" alt="林默" fallback="林" />`),
    previewHeight: 'auto',
  },
  {
    title: docsCopy('图片与回退内容'),
    description: docsCopy(
      'src 提供头像图片；加载失败时显示 fallback，并通过 imageProps 与 fallbackProps 配置加载回调和延迟。'
    ),
    caseAxes: [
      {
        name: 'source',
        label: docsCopy('图片状态'),
        defaultValue: 'image',
        options: [
          { label: docsCopy('图片可用'), value: 'image' },
          { label: docsCopy('显示回退'), value: 'fallback' },
        ],
      },
    ],
    preview: (values) => (
      <AvatarSourceDemo
        source={values.source === 'fallback' ? 'fallback' : 'image'}
      />
    ),
    code: docsCopy(`<Avatar
  alt="林默"
  src="/avatars/lin.png"
  fallback="林"
  fallbackProps={{ delay: 200 }}
  imageProps={{ onLoadingStatusChange: setStatus }}
/>`),
    previewHeight: 'auto',
  },
  {
    title: docsCopy('展示上限与重叠程度'),
    description: docsCopy(
      'max 限制可见头像数量并自动生成 +N；overlap 使用像素值控制分组的紧凑程度。'
    ),
    preview: <AvatarGroupDemo />,
    code: `import { Avatar } from '@heliannuuthus/ui'

<Avatar.Group
  items={members.map((member) => ({
    key: member.id,
    alt: member.name,
    fallback: member.initials,
  }))}
  max={4}
  overlap={8}
  size="lg"
/>`,
    previewHeight: 460,
  },
  {
    title: docsCopy('自定义剩余数量'),
    description: docsCopy(
      'renderCount 接收未展示数量并替换默认 +N，同时继承分组的 shape 与 size。'
    ),
    caseAxes: [
      {
        name: 'count',
        label: docsCopy('剩余数量'),
        defaultValue: 'default',
        options: [
          { label: docsCopy('默认'), value: 'default' },
          { label: docsCopy('自定义'), value: 'custom' },
        ],
      },
    ],
    preview: (values) => <AvatarCountDemo custom={values.count === 'custom'} />,
    code: `<Avatar.Group
  items={members}
  max={3}
  renderCount={(count) => <Tag>+{count}</Tag>}
  shape="square"
  size="lg"
/>`,
    previewHeight: 'auto',
  },
  {
    title: docsCopy('与 Tag 和 Badge 组合'),
    description: docsCopy(
      'badge 插槽可放置 Tag 状态标签或 Badge 通知标记，并始终锚定在头像右下角。'
    ),
    preview: <AvatarBadgeDemo />,
    code: docsCopy(`import { Avatar, Badge } from '@heliannuuthus/ui'

<Avatar
  alt="陈序"
  badge={<Badge indicator={8} indicatorLabel="8 条未读消息" />}
  fallback="陈"
  size="lg"
/>`),
    previewHeight: 440,
  },
];

const emptyBasicExample = componentDocumentation.empty.examples[0];
if (emptyBasicExample) {
  emptyBasicExample.title = docsCopy('默认空状态');
  emptyBasicExample.description = docsCopy(
    '显式传入 title 说明当前为空的对象；默认图标仅提供辅助视觉，不替代状态文案。'
  );
  emptyBasicExample.caseAxes = undefined;
  emptyBasicExample.preview = <EmptyDefaultDemo />;
  emptyBasicExample.code = docsCopy(`import { Empty } from '@heliannuuthus/ui'

<Empty title="暂无内容" />`);
  emptyBasicExample.previewHeight = 360;
}

const tableBasicExample = componentDocumentation.table.examples[0];
if (tableBasicExample) {
  tableBasicExample.title = docsCopy('自定义表格');
  tableBasicExample.description = docsCopy(
    '数据已经完成加工，或需要完全控制结构时，直接组合 Header、Body 和 Footer；Footer 承载列汇总。'
  );
  tableBasicExample.caseAxes = undefined;
  tableBasicExample.preview = <TableReleaseDemo />;
  tableBasicExample.code = docsCopy(`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'

<Table.Primitive>
  <Table.Header>{/* 列标题 */}</Table.Header>
  <Table.Body>{/* 数据行 */}</Table.Body>
  <Table.Footer>{/* 汇总行 */}</Table.Footer>
</Table.Primitive>`);
  tableBasicExample.wide = true;
  tableBasicExample.previewHeight = 460;
}

const alertBasicExample = componentDocumentation.alert.examples[0];
if (alertBasicExample) {
  alertBasicExample.caseAxes = undefined;
  alertBasicExample.title = docsCopy('语义状态');
  alertBasicExample.description = docsCopy(
    'Alert 是页面内容的一部分；点击按钮可条件显示信息、成功、警告或错误横幅，而不是打开浮层。'
  );
  alertBasicExample.preview = <AlertReleaseDemo />;
  alertBasicExample.code = docsCopy(`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from '@heliannuuthus/ui'

{visible && <Alert variant="warning">
  <TriangleAlert />
  <AlertTitle>回滚镜像即将过期</AlertTitle>
  <AlertDescription>建议在发布前重新构建。</AlertDescription>
  <AlertAction><Button onClick={() => setVisible(false)}>关闭</Button></AlertAction>
</Alert>}`);
  alertBasicExample.previewHeight = 380;
}

const dataEntryExamples: Record<string, ComponentExample[]> = {
  checkbox: [
    {
      title: docsCopy('任务完成态'),
      description: docsCopy(
        '使用 task 变体表达可完成事项；选中后标签自动弱化并添加删除线，取消选中后恢复。'
      ),
      preview: <CheckboxTasksDemo />,
      code: docsCopy(`import { Checkbox } from '@heliannuuthus/ui'

<Checkbox.Group
  variant="task"
  value={completed}
  onChange={setCompleted}
  options={[
    { label: '确认设计令牌', value: 'tokens' },
    { label: '更新组件文档', value: 'docs' },
    { label: '发布新版本', value: 'release' },
  ]}
/>`),
      previewHeight: 380,
    },
    {
      title: docsCopy('权限组合'),
      description: docsCopy(
        '使用 Checkbox.Group 管理多个权限值，并即时反馈已选数量。'
      ),
      preview: <CheckboxPermissionsDemo />,
      code: docsCopy(`import { Checkbox } from '@heliannuuthus/ui'

<Checkbox.Group
  name="permission"
  value={selected}
  onChange={setSelected}
  options={[
    { label: '查看项目', value: 'read' },
    { label: '参与评论', value: 'comment' },
    { label: '管理项目', value: 'manage' },
  ]}
/>`),
      previewHeight: 380,
    },
  ],
  'date-picker': [
    {
      title: docsCopy('内联日历'),
      description: docsCopy(
        '需要持续查看月份与排期上下文时，使用 inline 展示形式并同步反馈选择结果。'
      ),
      preview: <DatePickerInlineDemo />,
      code: `const [date, setDate] = useState<Date>()

<DatePicker display="inline" value={date} onChange={setDate} />`,
      previewHeight: 'auto',
      wide: true,
    },
    {
      title: docsCopy('定时发布'),
      description: docsCopy(
        '在紧凑设置行中选择或清除发布日期，适合表单和筛选器。'
      ),
      preview: <DatePickerReleaseDemo />,
      code: docsCopy(`<DatePicker
  value={date}
  onChange={setDate}
  placeholder="选择发布日期"
/>`),
      previewHeight: 'auto',
    },
  ],
  form: [
    {
      title: docsCopy('字段监听与联动'),
      description: docsCopy(
        '使用 Form.useWatch 精确订阅参与渲染的字段，并通过 setValue 更新关联字段。'
      ),
      preview: <FormFieldDependencyDemo />,
      code: `import { Form, Input, Radio } from '@heliannuuthus/ui'

type Values = {
  plan: 'personal' | 'team'
  seats: number | null
}

const PlanActions = () => {
  const currentForm = Form.useFormInstance<Values>()

  return (
    <Button onClick={async () => {
      const values = currentForm.getValues()
      if (values.plan === 'team' && !values.seats) {
        currentForm.setError('seats', { message: t('seatsRequired') })
      }
      await currentForm.trigger('seats')
    }}>
      {t('validate')}
    </Button>
  )
}

export const PlanForm = () => {
  const form = Form.useForm<Values>({
    defaultValues: { plan: 'personal', seats: 1 },
  })
  const plan = Form.useWatch('plan', form)
  const seats = Form.useWatch('seats', form)

  return (
    <Form
      form={form}
      onValuesChange={(values, info) => {
        console.log(info.name, values)
      }}
      onSubmit={save}
    >
      <Form.Field name="plan" label={t('plan')}>
        <Radio.Group options={planOptions} />
      </Form.Field>
      <Form.Field name="seats" label={t('seats')} disabled={plan !== 'team'}>
        <Input.Number min={2} />
      </Form.Field>
      <output>{seats ?? 0}</output>
      <Button
        type="button"
        onClick={() => form.setValue('seats', 5, {
          shouldDirty: true,
          shouldValidate: true,
        })}
      >
        {t('setFiveSeats')}
      </Button>
      <PlanActions />
    </Form>
  )
}`,
      coveredProperties: [
        'Form.useForm.options',
        'Form.useWatch.return',
        'Form.useFormInstance.return',
        'FormInstance.getValues',
        'FormInstance.setError',
        'FormInstance.setValue',
        'FormInstance.trigger',
      ],
      previewHeight: 460,
    },
    {
      title: docsCopy('字段结构与状态'),
      description: docsCopy(
        '同时展示标签、说明、错误信息，以及适合设置项的水平字段。'
      ),
      preview: <FieldProfileDemo />,
      code: docsCopy(`import { Form, Input } from '@heliannuuthus/ui'

<Form.Field
  name="handle"
  label="个人标识"
  description="用于生成公开资料地址。"
  rules={{ pattern: /^[a-z0-9-]+$/ }}
>
  <Input />
</Form.Field>`),
      previewHeight: 500,
    },
    {
      title: docsCopy('标签关联与必要性'),
      description: docsCopy(
        'Form.Field 自动关联标签与真实控件，并统一生成必填标记和辅助说明。'
      ),
      preview: <FieldLabelPairingDemo />,
      code: docsCopy(`import { Form, Input } from '@heliannuuthus/ui'

<Form.Field name="teamName" label="团队名称" required>
  <Input />
</Form.Field>

<Form.Field name="role" label="职位" description="可选">
  <Input />
</Form.Field>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('完整组件表单'),
      description: docsCopy(
        '在一个表单中验证全部受支持控件的值绑定、校验状态与无障碍关系。'
      ),
      preview: <FormIntegrationDemo />,
      code: `import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Slider,
  Switch,
  Toggle,
} from '@heliannuuthus/ui'

const form = Form.useForm({
  defaultValues: {
    confirmation: false,
    formats: ['markdown'],
    inviteCode: '',
    launchDate: undefined,
    name: '',
    notifications: true,
    permissions: ['read'],
    pinned: false,
    region: 'asia',
    reviewThreshold: 2,
    retryLimit: 3,
    summary: '',
    visibility: 'team',
    workspace: null,
  },
})

<Form form={form} onSubmit={onSubmit}>
  <Form.Field
    name="name"
    label={t('workspace.name')}
    rules={{ required: t('validation.required') }}
  >
    <Input />
  </Form.Field>

  <Form.Field name="summary" label={t('workspace.description')}>
    <Input.TextArea />
  </Form.Field>

  <Form.Field name="inviteCode" label={t('workspace.inviteCode')}>
    <Input.OTP maxLength={6} />
  </Form.Field>

  <Form.Field name="region" label={t('workspace.region')}>
    <Select options={regionOptions} />
  </Form.Field>

  <Form.Field name="workspace" label={t('workspace.parent')}>
    <Select options={workspaceOptions} showClear />
  </Form.Field>

  <Form.Field name="notifications" label={t('workspace.notifications')}>
    <Switch />
  </Form.Field>

  <Form.Field
    name="confirmation"
    rules={{ required: t('validation.confirm') }}
  >
    <Checkbox>{t('workspace.confirm')}</Checkbox>
  </Form.Field>

  <Form.Field name="permissions" label={t('workspace.permissions')}>
    <Checkbox.Group options={permissionOptions} />
  </Form.Field>

  <Form.Field name="visibility" label={t('workspace.visibility')}>
    <Radio.Group options={visibilityOptions} />
  </Form.Field>

  <Form.Field name="launchDate" label={t('workspace.launchDate')}>
    <DatePicker />
  </Form.Field>

  <Form.Field name="reviewThreshold" label={t('workspace.reviewThreshold')}>
    <Slider min={1} max={5} />
  </Form.Field>

  <Form.Field name="retryLimit" label={t('workspace.retryLimit')}>
    <Input.Number min={0} max={10} />
  </Form.Field>

  <Form.Field name="pinned" label={t('workspace.pinned')}>
    <Toggle>{t('actions.pin')}</Toggle>
  </Form.Field>

  <Form.Field name="formats" label={t('workspace.formats')}>
    <Toggle.Group multiple items={formatOptions} />
  </Form.Field>

  <Button type="submit">{t('actions.save')}</Button>
</Form>`,
      coveredProperties: ['FormInstance.reset', 'FormInstance.formState'],
      previewHeight: 'auto',
      wide: true,
    },
    {
      title: docsCopy('自定义控件接入'),
      description: docsCopy(
        '对比只实现值绑定的最小控件，以及额外支持错误聚焦和完整字段属性的控件。'
      ),
      preview: <FormCustomControlDemo />,
      code: `import { forwardRef } from 'react'
import {
  Button,
  Form,
  Radio,
  type FormFieldInjectedControlProps,
} from '@heliannuuthus/ui'

type Priority = '' | 'routine' | 'important' | 'urgent'

type PriorityControlProps = FormFieldInjectedControlProps<Priority>

const options = [
  { label: t('priority.routine'), value: 'routine' },
  { label: t('priority.important'), value: 'important' },
  { label: t('priority.urgent'), value: 'urgent' },
] as const

// Minimum: value binding with a regular function component
const MinimalPriorityControl = ({
  onChange,
  ...props
}: PriorityControlProps) => (
  <Radio.Group
    {...props}
    columns={3}
    minColumnWidth={0}
    onChange={onChange}
    options={options}
  />
)

// Complete: forward the ref to enable validation-error focus
const CompletePriorityControl = forwardRef<
  HTMLInputElement,
  PriorityControlProps
>(
  ({ onChange, ...props }, ref) => (
    <Radio.Group
      {...props}
      columns={3}
      inputRef={ref}
      minColumnWidth={0}
      onChange={onChange}
      options={options}
    />
  )
)

type Values = {
  completePriority: Priority
  minimalPriority: Priority
}

const form = Form.useForm<Values>({
  defaultValues: {
    completePriority: '',
    minimalPriority: 'routine',
  },
})

<Form form={form} onSubmit={onSubmit}>
  <Form.Field<Values, 'minimalPriority'>
    name="minimalPriority"
    label={t('priority.minimal')}
  >
    <MinimalPriorityControl />
  </Form.Field>

  <Form.Field<Values, 'completePriority'>
    name="completePriority"
    label={t('priority.complete')}
    description={t('priority.description')}
    rules={{ required: t('priority.required') }}
  >
    <CompletePriorityControl />
  </Form.Field>

  <Button type="submit">{t('actions.save')}</Button>
</Form>`,
      previewHeight: 500,
    },
  ],
  input: [
    {
      title: docsCopy('字段状态'),
      description: docsCopy(
        '在同一组中比较默认、校验失败、只读和禁用输入，避免混淆语义。'
      ),
      preview: <InputStatesDemo />,
      code: docsCopy(`<Input defaultValue="设计系统迁移" />
<Input aria-invalid defaultValue="my workspace" />
<Input value="UI-2048" readOnly />
<Input value="项目进行中" disabled />`),
      previewHeight: 340,
    },
    {
      title: docsCopy('前后缀与块级附加内容'),
      description: docsCopy(
        '组合固定前缀、复制动作和文本计数；附加内容始终服务于同一输入任务。'
      ),
      preview: <InputAffixDemo />,
      code: docsCopy(`<Input
  defaultValue="docs"
  prefix="ui.dev/"
  suffix={<Button>复制</Button>}
/>`),
      previewHeight: 480,
    },
    {
      title: docsCopy('验证码形态'),
      description: docsCopy(
        '使用 Input 的 variant 切换连接方块与独立方块，并通过分段控件逐项预览。'
      ),
      caseAxes: [
        {
          name: 'variant',
          label: docsCopy('变体'),
          defaultValue: 'connected',
          options: [
            { label: docsCopy('连接'), value: 'connected' },
            { label: docsCopy('独立'), value: 'separated' },
          ],
        },
      ],
      preview: (values) => (
        <InputOtpVerificationDemo
          variant={values.variant === 'separated' ? 'separated' : 'connected'}
        />
      ),
      code: `<Input.OTP
  maxLength={6}
  value={value}
  onChange={setValue}
  variant="connected"
/>

<Input.OTP maxLength={6} variant="separated" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('带字数反馈的说明'),
      description: docsCopy(
        '为长文本提供清楚的标签、字符上限、当前计数和提交条件。'
      ),
      preview: <TextAreaCounterDemo />,
      code: `import { Input } from '@heliannuuthus/ui'

<Input.TextArea
  value={value}
  maxLength={120}
  onChange={(event) => setValue(event.target.value)}
/>`,
      previewHeight: 380,
    },
  ],
  'input-number': [
    {
      title: docsCopy('受控数值与边界'),
      description: docsCopy(
        '通过受控值、最小值、最大值和步长管理存储容量，文本输入、键盘与增减按钮共享同一数值状态。'
      ),
      preview: <InputNumberCapacityDemo />,
      code: docsCopy(`import { Input } from '@heliannuuthus/ui'

<Input.Number
  value={capacity}
  onChange={setCapacity}
  min={1}
  max={256}
  step={1}
  suffix="GB"
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('本地化格式'),
      description: docsCopy(
        '使用 Intl.NumberFormat 配置显示货币，同时让 onChange 始终返回未格式化的 number 或 null。'
      ),
      preview: <InputNumberCurrencyDemo />,
      code: docsCopy(`import { Input } from '@heliannuuthus/ui'

<Input.Number
  value={price}
  onChange={setPrice}
  min={0}
  step={10}
  smallStep={0.01}
  locale="zh-CN"
  format={{
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2,
  }}
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('尺寸与状态'),
      description: docsCopy(
        '比较常用尺寸、隐藏步进按钮、只读、禁用和校验失败状态。'
      ),
      caseMinWidth: 220,
      cases: [
        {
          isDefault: true,
          label: docsCopy('默认'),
          properties: { size: 'default' },
          values: { size: 'default', state: 'default' },
        },
        {
          label: docsCopy('小尺寸'),
          properties: { size: 'sm' },
          values: { size: 'sm', state: 'default' },
        },
        {
          label: docsCopy('大尺寸'),
          properties: { size: 'lg' },
          values: { size: 'lg', state: 'default' },
        },
        {
          label: docsCopy('无步进按钮'),
          properties: { controls: false },
          values: { size: 'default', state: 'plain' },
        },
        {
          label: docsCopy('只读'),
          properties: { readOnly: true },
          values: { size: 'default', state: 'readonly' },
        },
        {
          label: docsCopy('禁用'),
          properties: { disabled: true },
          values: { size: 'default', state: 'disabled' },
        },
        {
          label: docsCopy('校验失败'),
          properties: {},
          values: { size: 'default', state: 'invalid' },
        },
      ],
      preview: (values) => (
        <Input.Number
          aria-invalid={values.state === 'invalid' || undefined}
          aria-label={docsCopy('并发任务数')}
          controls={values.state !== 'plain'}
          decrementLabel={docsCopy('减少数值')}
          defaultValue={8}
          disabled={values.state === 'disabled'}
          incrementLabel={docsCopy('增加数值')}
          inputProps={{
            'aria-roledescription': docsCopy('数字输入框'),
          }}
          max={64}
          min={1}
          readOnly={values.state === 'readonly'}
          size={
            values.size === 'sm' || values.size === 'lg'
              ? values.size
              : 'default'
          }
        />
      ),
      code: `<Input.Number size="sm" defaultValue={8} />
<Input.Number controls={false} defaultValue={8} />
<Input.Number value={8} readOnly />
<Input.Number value={8} disabled />
<Input.Number aria-invalid defaultValue={8} />`,
      previewHeight: 360,
      wide: true,
    },
  ],
  radio: [
    {
      title: docsCopy('选项配置'),
      description: docsCopy(
        '常规文本选项优先使用 options，由 Radio.Group 统一生成标签与值。'
      ),
      preview: <RadioDeliveryDemo />,
      code: docsCopy(`import { Radio } from '@heliannuuthus/ui'

<Radio.Group
  value={delivery}
  onChange={setDelivery}
  options={[
    { label: '邮件通知', value: 'email' },
    { label: '站内通知', value: 'inbox' },
    { label: '不通知', value: 'none' },
  ]}
/>`),
      previewHeight: 280,
    },
    {
      title: docsCopy('方案单选卡'),
      description: docsCopy(
        '将互斥选项扩展为整行可点击的卡片，同时保留原生单选语义。'
      ),
      caseAxes: [
        {
          name: 'orientation',
          label: docsCopy('方向'),
          defaultValue: 'vertical',
          options: [
            { label: docsCopy('纵向'), value: 'vertical' },
            { label: docsCopy('横向'), value: 'horizontal' },
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
      code: docsCopy(`import { Radio } from '@heliannuuthus/ui'

<Radio.Group
  value={plan}
  onChange={setPlan}
  orientation="horizontal"
  columns={3}
  minColumnWidth={180}
  options={[
    { label: '个人版', value: 'free' },
    { label: '团队版', value: 'team' },
  ]}
/>`),
      previewHeight: 430,
    },
  ],
  select: [
    {
      title: docsCopy('搜索并选择成员'),
      description: docsCopy(
        '候选项较多且用户知道关键词时，直接输入过滤、清除并重新选择。'
      ),
      cases: [
        {
          isDefault: true,
          label: docsCopy('内置过滤'),
          properties: { filter: docsCopy('内置过滤') },
          values: { mode: 'default' },
        },
        {
          label: docsCopy('自定义过滤'),
          properties: { filter: 'startsWith' },
          values: { mode: 'custom-filter' },
        },
        {
          label: docsCopy('受控打开态'),
          properties: { onOpenChange: 'setOpen', open: 'open' },
          values: { mode: 'controlled-open' },
        },
      ],
      preview: (values) => (
        <SelectMemberSearchDemo
          mode={
            values.mode === 'custom-filter' || values.mode === 'controlled-open'
              ? values.mode
              : 'default'
          }
        />
      ),
      code: docsCopy(`<Select
  value={value}
  onChange={setValue}
  options={members.map((member) => ({
    label: member.name,
    value: member.id,
  }))}
  placeholder="搜索成员…"
  showClear
/>`),
      previewHeight: 320,
    },
    {
      title: docsCopy('分组选择'),
      description: docsCopy(
        '候选项固定时仍使用同一 Select，通过分组、分隔线和禁用项明确列表结构。'
      ),
      preview: <SelectWorkspaceDemo />,
      code: docsCopy(`<Select
  value={value}
  onChange={setValue}
  options={[
    {
      label: '个人工作区',
      options: personalWorkspaces,
    },
    {
      label: '团队工作区',
      options: teamWorkspaces,
    },
  ]}
  placeholder="选择工作区"
/>`),
      previewHeight: 380,
    },
  ],
  slider: [
    {
      title: docsCopy('弹性反馈'),
      description: docsCopy(
        '透明安全区为轻微缩放与越界回弹预留空间，两端图标和文字始终保持一致反馈。'
      ),
      preview: <SliderElasticDemo />,
      code: docsCopy(`import { Slider } from '@heliannuuthus/ui'
import { Volume1, Volume2 } from 'lucide-react'

<Slider
  aria-label="播放器音量"
  startIcon={<Volume1 />}
  endIcon={<Volume2 />}
  startLabel="静音"
  endLabel="最大"
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={2}
/>`),
      previewHeight: 340,
    },
    {
      title: docsCopy('范围选择'),
      description: docsCopy(
        '使用双滑块选择预算区间，并把当前值与范围边界直接展示出来。'
      ),
      preview: <SliderBudgetDemo />,
      code: `<Slider
  value={range}
  onChange={setRange}
  min={0}
  max={100}
  step={2}
/>`,
      previewHeight: 340,
    },
    {
      title: docsCopy('垂直方向'),
      description: docsCopy(
        '为容器提供明确高度后，通过 orientation="vertical" 构建纵向参数控制。'
      ),
      preview: <SliderVerticalDemo />,
      code: docsCopy(`<Slider
  aria-label="人声电平"
  className="h-56"
  orientation="vertical"
  value={level}
  onChange={setLevel}
  min={0}
  max={100}
  step={2}
/>`),
      previewHeight: 480,
    },
  ],
  switch: [
    {
      title: docsCopy('设置列表'),
      description: docsCopy(
        'Switch 使用统一的舒展尺寸；开关立即更新设置，不可关闭的系统项通过禁用状态解释约束。'
      ),
      preview: <SwitchSettingsDemo />,
      code: `<Switch checked={enabled} onChange={setEnabled} />
<Switch checked disabled />`,
      previewHeight: 390,
    },
  ],
  toggle: [
    {
      title: docsCopy('受控状态'),
      description: docsCopy(
        '通过 value 读取当前开关状态，并在 onChange 中由业务状态决定下一次渲染。'
      ),
      preview: <ToggleControlledDemo />,
      code: docsCopy(`import { useState } from 'react'
import { Toggle } from '@heliannuuthus/ui'

export const ControlledToggle = () => {
  const [value, setValue] = useState(true)

  return (
    <Toggle value={value} onChange={setValue} aria-label="切换粗体">
      <Bold />
      粗体
    </Toggle>
  )
}`),
      previewHeight: 320,
    },
    {
      title: docsCopy('格式工具组'),
      description: docsCopy(
        'Toggle 与 Toggle.Group 使用统一尺寸；通过 items 管理可同时开启的工具状态。'
      ),
      caseAxes: [
        {
          name: 'variant',
          label: docsCopy('样式'),
          defaultValue: 'outline',
          options: [
            { label: docsCopy('描边'), value: 'outline' },
            { label: docsCopy('默认'), value: 'default' },
          ],
        },
      ],
      preview: (values) => (
        <Toggle.Group
          aria-label={docsCopy('文本格式')}
          defaultValue={['bold']}
          items={[
            { value: 'bold', label: <Bold />, 'aria-label': docsCopy('粗体') },
            {
              value: 'italic',
              label: <Italic />,
              'aria-label': docsCopy('斜体'),
            },
            {
              value: 'underline',
              label: <Underline />,
              'aria-label': docsCopy('下划线'),
            },
          ]}
          multiple
          variant={values.variant === 'default' ? 'default' : 'outline'}
        />
      ),
      code: docsCopy(`import { Toggle } from '@heliannuuthus/ui'

<Toggle.Group
  value={formats}
  onChange={setFormats}
  multiple
  variant="outline"
  items={[
    { value: 'bold', label: <Bold />, 'aria-label': '粗体' },
    { value: 'italic', label: <Italic />, 'aria-label': '斜体' },
    { value: 'underline', label: <Underline />, 'aria-label': '下划线' },
  ]}
/>`),
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
      title: docsCopy('单项展开'),
      description: docsCopy('默认一次只展开一个条目，打开新条目时关闭前一个。'),
      preview: <AccordionReleaseDemo mode="single" />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion
  defaultValue={['preflight']}
  items={[
    {
      value: 'preflight',
      title: '预检结果',
      content: '42 项检查均已通过。',
    },
    {
      value: 'rollback',
      title: '回滚方案',
      content: '异常时切回上一版本。',
    },
  ]}
/>`),
      previewHeight: 420,
    },
    {
      title: docsCopy('多项展开'),
      description: docsCopy('设置 multiple 后允许多个条目同时保持展开。'),
      preview: <AccordionReleaseDemo mode="multiple" />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion
  defaultValue={['preflight', 'rollback']}
  multiple
  items={[
    {
      value: 'preflight',
      title: '预检结果',
      content: '42 项检查均已通过。',
    },
    {
      value: 'rollback',
      title: '回滚方案',
      content: '异常时切回上一版本。',
    },
  ]}
/>`),
      previewHeight: 420,
    },
    {
      title: docsCopy('受控状态'),
      description: docsCopy(
        'value 表示当前展开条目，onChange 接收用户操作后的完整值数组。'
      ),
      preview: <AccordionControlledDemo />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion
  items={items}
  value={value}
  onChange={setValue}
/>`),
      previewHeight: 420,
    },
    {
      title: docsCopy('默认指示器'),
      description: docsCopy(
        '省略 indicator 时在标题末端显示默认箭头，并随展开状态旋转。'
      ),
      preview: <AccordionDefaultIndicatorDemo />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion
  defaultValue={['deployment']}
  items={[
    {
      value: 'deployment',
      title: '部署策略',
      content: '先灰度 10%，观察后全量发布。',
    },
  ]}
/>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('起始位置'),
      description: docsCopy(
        '通过 Accordion.Indicator 的 position 将默认箭头放到标题起始侧。'
      ),
      preview: <AccordionStartIndicatorDemo />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion
  indicator={<Accordion.Indicator position="start" />}
  items={items}
/>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('状态函数指示器'),
      description: docsCopy(
        '使用 Accordion.Indicator 统一设置位置；children 状态函数接收当前条目的 open、disabled 和 value，由调用方决定展示内容。'
      ),
      preview: <AccordionStateIndicatorDemo />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'
import { Minus, Plus } from 'lucide-react'

<Accordion
  defaultValue={['deployment']}
  indicator={
    <Accordion.Indicator position="start">
      {({ open }) => (open ? <Minus /> : <Plus />)}
    </Accordion.Indicator>
  }
  items={[
    {
      value: 'deployment',
      title: '部署策略',
      content: '先灰度 10%，观察后全量发布。',
    },
  ]}
/>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('禁用单个条目'),
      description: docsCopy(
        '在 AccordionItem 上设置 disabled，仅阻止该条目的触发交互。'
      ),
      preview: <AccordionDisabledItemDemo />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion
  items={[
    {
      value: 'preflight',
      title: '预检结果',
      content: '42 项检查均已通过。',
      disabled: true,
    },
    {
      value: 'rollback',
      title: '回滚方案',
      content: '异常时切回上一版本。',
    },
  ]}
/>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('禁用整个组件'),
      description: docsCopy(
        '在 Accordion 上设置 disabled，统一阻止所有条目的展开与收起。'
      ),
      preview: <AccordionDisabledRootDemo />,
      code: docsCopy(`import { Accordion } from '@heliannuuthus/ui'

<Accordion disabled items={items} />`),
      previewHeight: 360,
    },
    {
      title: docsCopy('关闭面板保留策略'),
      description: docsCopy(
        '默认关闭时卸载面板；keepMounted 保留内部状态；hiddenUntilFound 保留内容并允许浏览器页内查找定位。'
      ),
      caseAxes: [
        {
          name: 'strategy',
          label: docsCopy('保留策略'),
          defaultValue: 'unmount',
          options: [
            { label: docsCopy('默认卸载'), value: 'unmount' },
            { label: docsCopy('保持挂载'), value: 'mounted' },
            { label: docsCopy('支持页内查找'), value: 'findable' },
          ],
        },
      ],
      preview: (values) => (
        <AccordionPresenceDemo
          strategy={
            values.strategy === 'mounted' || values.strategy === 'findable'
              ? values.strategy
              : 'unmount'
          }
        />
      ),
      code: `<Accordion items={items} />
<Accordion items={items} keepMounted />
<Accordion items={items} hiddenUntilFound />`,
      previewHeight: 'auto',
    },
  ],
  attachment: [
    {
      title: docsCopy('基础附件'),
      description: docsCopy(
        'title、description 与 media 分别承载文件名称、辅助信息和类型图标。'
      ),
      preview: <AttachmentBasicDemo />,
      code: docsCopy(`import { Attachment } from '@heliannuuthus/ui'

<Attachment
  title="web-console.tgz"
  description="8.4 MB · 正在校验"
  media={<FileArchive />}
  state="processing"
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('媒体内容类型'),
      description: docsCopy(
        'mediaType 明确声明 media 是图标还是图片，让缩略图获得正确的尺寸、裁切与状态样式。'
      ),
      caseAxes: [
        {
          name: 'mediaType',
          label: docsCopy('媒体类型'),
          defaultValue: 'icon',
          options: [
            { label: docsCopy('图标'), value: 'icon' },
            { label: docsCopy('图片'), value: 'image' },
          ],
        },
      ],
      preview: (values) => (
        <AttachmentMediaTypeDemo
          mediaType={values.mediaType === 'image' ? 'image' : 'icon'}
        />
      ),
      code: docsCopy(`import { Attachment } from '@heliannuuthus/ui'

<Attachment
  media={<FileArchive />}
  mediaType="icon"
  title="web-console.tgz"
/>

<Attachment
  media={<img alt="附件缩略图" src="/cover.jpg" />}
  mediaType="image"
  title="cover.jpg"
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('处理状态'),
      description: docsCopy(
        'state 分别表达等待、上传、处理、失败和完成阶段；状态文案仍由 description 明确说明。'
      ),
      caseAxes: [
        {
          name: 'state',
          label: docsCopy('状态'),
          defaultValue: 'done',
          options: [
            { label: docsCopy('等待上传'), value: 'idle' },
            { label: docsCopy('正在上传'), value: 'uploading' },
            { label: docsCopy('正在处理'), value: 'processing' },
            { label: docsCopy('上传失败'), value: 'error' },
            { label: docsCopy('已完成'), value: 'done' },
          ],
        },
      ],
      preview: (values) => (
        <AttachmentStateDemo
          state={
            values.state === 'idle' ||
            values.state === 'uploading' ||
            values.state === 'processing' ||
            values.state === 'error'
              ? values.state
              : 'done'
          }
        />
      ),
      code: `const states = ['idle', 'uploading', 'processing', 'error', 'done'] as const

{states.map((state) => (
  <Attachment key={state} state={state} title="web-console.tgz" />
))}`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('附件尺寸'),
      description: docsCopy(
        'size 只控制单个附件的整体密度；不同尺寸通过分段控件逐项预览。'
      ),
      caseAxes: [
        {
          name: 'size',
          label: docsCopy('尺寸'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认'), value: 'default' },
            { label: docsCopy('小'), value: 'sm' },
            { label: docsCopy('超小'), value: 'xs' },
          ],
        },
      ],
      preview: (values) => (
        <AttachmentSizeDemo
          size={
            values.size === 'sm' || values.size === 'xs'
              ? values.size
              : 'default'
          }
        />
      ),
      code: `<Attachment size="default" title="web-console.tgz" />
<Attachment size="sm" title="web-console.tgz" />
<Attachment size="xs" title="web-console.tgz" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('附件方向'),
      description: docsCopy(
        'horizontal 适合文件列表，vertical 以缩略卡形式突出媒体内容。'
      ),
      caseAxes: [
        {
          name: 'orientation',
          label: docsCopy('方向'),
          defaultValue: 'horizontal',
          options: [
            { label: docsCopy('横向'), value: 'horizontal' },
            { label: docsCopy('纵向'), value: 'vertical' },
          ],
        },
      ],
      preview: (values) => (
        <AttachmentOrientationDemo
          orientation={
            values.orientation === 'vertical' ? 'vertical' : 'horizontal'
          }
        />
      ),
      code: `<Attachment orientation="horizontal" title="web-console.tgz" />
<Attachment orientation="vertical" title="web-console.tgz" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('附件操作'),
      description: docsCopy(
        'actions 只放置与当前附件直接相关的下载、重试或移除操作。'
      ),
      preview: <AttachmentActionsDemo />,
      code: docsCopy(`<Attachment
  actions={<Button aria-label="下载附件"><Download /></Button>}
  title="web-console.tgz"
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('整卡触发'),
      description: docsCopy(
        'trigger 接收链接或按钮元素，在保留正确元素语义的同时让整个附件可点击。'
      ),
      preview: <AttachmentTriggerDemo />,
      code: docsCopy(`<Attachment
  title="release-notes.md"
  trigger={<a aria-label="预览 release-notes.md" href="/files/release-notes.md" />}
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('附件集合'),
      description: docsCopy(
        'Attachment.Group 通过 items 渲染一组附件，并为横向溢出提供滚动与吸附行为。'
      ),
      preview: <AttachmentGroupDemo />,
      code: `import { Attachment } from '@heliannuuthus/ui'

<Attachment.Group
  items={files.map((file) => ({
    key: file.id,
    title: file.name,
    description: file.size,
    media: <FileArchive />,
    state: file.state,
  }))}
/>`,
      previewHeight: 'auto',
    },
  ],
  carousel: [
    {
      title: docsCopy('景深轮播与点位位置'),
      description: docsCopy(
        'Carousel 始终使用景深过渡；paginationPosition 控制默认点位位于内容前方或后方。'
      ),
      caseAxes: [
        {
          name: 'dotPosition',
          label: docsCopy('页码点位置'),
          defaultValue: 'bottom',
          options: [
            { label: docsCopy('上方'), value: 'top' },
            { label: docsCopy('下方'), value: 'bottom' },
          ],
        },
      ],
      preview: (values) => (
        <CarouselHighlightsDemo
          dotPosition={values.dotPosition === 'top' ? 'top' : 'bottom'}
        />
      ),
      code: `import { Carousel } from '@heliannuuthus/ui'

<Carousel
  controls
  items={highlights}
  pagination="dots"
  paginationPosition="after"
  renderItem={(item) => <HighlightCard item={item} />}
/>`,
      previewHeight: 440,
    },
    {
      title: docsCopy('导航按钮'),
      description: docsCopy(
        'controls 决定是否渲染上一项和下一项按钮；按钮属性通过 previousButtonProps 与 nextButtonProps 独立扩展。'
      ),
      caseAxes: [
        {
          name: 'controls',
          label: docsCopy('导航按钮'),
          defaultValue: 'buttons',
          options: [
            { label: docsCopy('显示'), value: 'buttons' },
            { label: docsCopy('隐藏'), value: 'none' },
          ],
        },
      ],
      preview: (values) => (
        <CarouselControlsDemo
          mode={values.controls === 'none' ? 'none' : 'buttons'}
        />
      ),
      code: `<Carousel
  controls={false}
  items={items}
  previousButtonProps={{ 'aria-label': 'Previous release' }}
  nextButtonProps={{ 'aria-label': 'Next release' }}
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('分页点'),
      description: docsCopy(
        'pagination 控制默认点位或隐藏分页，renderDot 只改写单个点位的内容。'
      ),
      caseAxes: [
        {
          name: 'pagination',
          label: docsCopy('分页点'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认'), value: 'default' },
            { label: docsCopy('自定义'), value: 'custom' },
            { label: docsCopy('隐藏'), value: 'hidden' },
          ],
        },
      ],
      preview: (values) => (
        <CarouselDotsDemo
          mode={
            values.pagination === 'custom' || values.pagination === 'hidden'
              ? values.pagination
              : 'default'
          }
        />
      ),
      code: `<Carousel
  items={items}
  pagination="dots"
  renderDot={({ index, isSelected }) =>
    isSelected ? index + 1 : '·'
  }
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('轨道与项目样式'),
      description: docsCopy(
        'classNames 按 content 与 item 语义槽位扩展轮播轨道和项目样式。'
      ),
      preview: <CarouselClassNamesDemo />,
      code: `<Carousel
  items={items}
  classNames={{ content: 'gap-3', item: 'basis-2/3 pl-3' }}
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('自定义翻页器'),
      description: docsCopy(
        'pagination 接收函数时提供页码状态与控制方法，可直接组合符合当前页面的完整翻页器。'
      ),
      preview: <CarouselCustomPaginationDemo />,
      code: docsCopy(`import { Button, Carousel } from '@heliannuuthus/ui'

<Carousel
  items={highlights}
  renderItem={(item) => <HighlightCard item={item} />}
  pagination={({ currentPage, pageCount, scrollNext, scrollPrev }) => (
      <div role="group" aria-label="轮播分页">
        <Button onClick={scrollPrev}>上一页</Button>
        <span aria-live="polite">{currentPage} / {pageCount}</span>
        <Button onClick={scrollNext}>下一页</Button>
      </div>
  )}
/>`),
      previewHeight: 440,
    },
    {
      title: docsCopy('自动播放'),
      description: docsCopy(
        'autoplay 传 true 使用默认间隔，传数字直接设置秒数；loop 循环始终沿下一页方向越过首尾。'
      ),
      preview: <CarouselAutoplayDemo />,
      code: `import { Carousel } from '@heliannuuthus/ui'

<Carousel
  autoplay={3}
  controls
  items={highlights}
  loop
  pagination="dots"
  renderItem={(item) => <HighlightCard item={item} />}
/>`,
      previewHeight: 480,
    },
    {
      title: docsCopy('外部控制'),
      description: docsCopy(
        '通过 ref 调用 scrollPrev、scrollNext、scrollTo、play 与 pause，不暴露底层轮播实例。'
      ),
      preview: <CarouselRefDemo />,
      code: `const carouselRef = useRef<CarouselRef>(null)

<Carousel ref={carouselRef} items={items} />
<Button onClick={() => carouselRef.current?.scrollPrev()}>Previous</Button>
<Button onClick={() => carouselRef.current?.scrollNext()}>Next</Button>`,
      previewHeight: 'auto',
    },
  ],
  collapsible: [
    {
      title: docsCopy('基础用法'),
      description: docsCopy(
        '传入 header 和 content 即可创建一个可展开区域；省略 trigger 时，整个 Header 负责切换状态。'
      ),
      preview: <CollapsibleBasicDemo />,
      code: docsCopy(`import { Collapsible } from '@heliannuuthus/ui'

<Collapsible
  defaultOpen
  header={<strong>本次发布包含 6 项变更</strong>}
  content={<p>优化筛选器响应速度，并修复轮播首尾切换动效。</p>}
/>`),
      previewHeight: 300,
    },
    {
      title: docsCopy('不同触发方式'),
      description: docsCopy(
        '默认由整个 Header 触发；传入 trigger 后，Header 保持静态，只由独立按钮控制展开。'
      ),
      caseAxes: [
        {
          name: 'triggerMode',
          label: docsCopy('触发方式'),
          defaultValue: 'header',
          options: [
            { label: docsCopy('Header 触发'), value: 'header' },
            { label: docsCopy('按钮触发'), value: 'button' },
          ],
        },
      ],
      preview: (values) => (
        <CollapsibleTriggerModesDemo
          mode={values.triggerMode === 'button' ? 'button' : 'header'}
        />
      ),
      code: docsCopy(`import { Collapsible } from '@heliannuuthus/ui'
import { ChevronRight } from 'lucide-react'

{/* 整个 Header 触发 */}
<Collapsible
  header={<BuildSummary />}
  content={<BuildOutput />}
/>

{/* 独立按钮触发 */}
<Collapsible
  header={<PolicySummary />}
  trigger="配置"
  indicator={<ChevronRight />}
  triggerProps={{ size: 'sm', variant: 'outline' }}
  content={<PolicySettings />}
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('Header 与图标'),
      description: docsCopy(
        'header 可以组合任意摘要内容；indicator 在两种触发模式下统一控制状态图标，传 false 时隐藏。'
      ),
      caseAxes: [
        {
          name: 'indicator',
          label: docsCopy('图标'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认图标'), value: 'default' },
            { label: docsCopy('自定义图标'), value: 'custom' },
            { label: docsCopy('隐藏图标'), value: 'hidden' },
          ],
        },
      ],
      preview: (values) => (
        <CollapsibleIndicatorDemo
          mode={
            values.indicator === 'custom' || values.indicator === 'hidden'
              ? values.indicator
              : 'default'
          }
        />
      ),
      code: `import { Collapsible } from '@heliannuuthus/ui'
import { ChevronRight } from 'lucide-react'

<Collapsible
  header={<BuildSummary />}
  content={<BuildOutput />}
  indicator={<ChevronRight />}
/>

<Collapsible
  header={<PlainSummary />}
  content={<Details />}
  indicator={false}
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('受控与禁用状态'),
      description: docsCopy(
        'open 与 onOpenChange 管理受控展开状态；disabled 阻止触发器改变状态。'
      ),
      caseAxes: [
        {
          name: 'mode',
          label: docsCopy('状态'),
          defaultValue: 'controlled',
          options: [
            { label: docsCopy('受控'), value: 'controlled' },
            { label: docsCopy('禁用'), value: 'disabled' },
          ],
        },
      ],
      preview: (values) => (
        <CollapsibleStateDemo
          mode={values.mode === 'disabled' ? 'disabled' : 'controlled'}
        />
      ),
      code: `<Collapsible
  open={open}
  onOpenChange={setOpen}
  header={<Summary />}
  content={<Details />}
/>

<Collapsible disabled header={<Summary />} content={<Details />} />`,
      previewHeight: 'auto',
    },
  ],
  counter: [
    {
      title: docsCopy('构建计数'),
      description: docsCopy(
        '数值变化时只滚动发生变化的位；固定 places 可以避免位数变化导致布局跳动。'
      ),
      preview: <CounterBuildDemo />,
      code: docsCopy(`import { Counter } from '@heliannuuthus/ui'

<Counter
  value={count}
  places={[1000, 100, 10, 1]}
  fontSize={60}
  fontWeight={600}
  suffix={<small>次</small>}
  valueText={\`\${count} 次构建\`}
/>`),
      previewHeight: 400,
    },
  ],
  'data-table': [
    {
      title: docsCopy('基础用法'),
      description: docsCopy(
        '默认组合搜索、排序、固定列、操作列、Footer 和 Pagination；业务只需要提供 data 与 Table.Column。'
      ),
      preview: <TableManagedDemo />,
      code: docsCopy(`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'
import { DropdownMenu } from '@heliannuuthus/ui'
import { Stack } from '@heliannuuthus/ui'
import { MoreHorizontal } from 'lucide-react'

const columns: Table.Column<Release>[] = [
  {
    accessor: 'version',
    header: '版本',
    sortable: true,
  },
  {
    key: 'actions',
    align: 'center',
    fixed: 'end',
    header: '操作',
    width: 144,
    render: (_, row) => (
      <Stack align="center" aria-label={row.version + ' 操作'} gap={4} justify="center" orientation="horizontal" role="group">
        <Button variant="ghost">查看</Button>
        <DropdownMenu
          align="end"
          trigger={
            <Button
              aria-label={row.version + ' 更多操作'}
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
      </Stack>
    ),
  },
]

<Table
  columns={columns}
  data={releaseRecords}
  search={{ columnKeys: ['version'], placeholder: '筛选版本…' }}
  footer={(rows) => \`当前页 \${rows.length} 条发布记录\`}
  rowKey="version"
  pagination={{ pageSize: 3 }}
  classNames={{ table: 'min-w-[820px]' }}
/>`),
      wide: true,
      previewHeight: 420,
    },
    {
      title: docsCopy('行展开'),
      description: docsCopy(
        'expandable 会自动补齐展开列、键盘按钮和跨列详情行；固定在起始侧的业务列会自动避开展开按钮。'
      ),
      cases: [
        {
          isDefault: true,
          label: docsCopy('默认'),
          properties: {
            expandable: '{ defaultValue, labels, render }',
          },
          values: { mode: 'default' },
        },
        {
          label: docsCopy('限制展开'),
          properties: {
            expandable: '{ canExpand, defaultValue, labels, render }',
          },
          values: { mode: 'restricted' },
        },
      ],
      preview: (values) => (
        <TableManagedExpandableDemo
          mode={values.mode === 'restricted' ? 'restricted' : 'default'}
        />
      ),
      code: docsCopy(`import { Table } from '@heliannuuthus/ui'

<Table
  columns={columns}
  data={releaseRecords}
  expandable={{
    defaultValue: ['v0.12.0'],
    render: (row) => <ReleaseDetail release={row} />,
  }}
  rowKey="version"
  pagination={false}
/>`),
      wide: true,
      previewHeight: 500,
    },
    {
      title: docsCopy('分组表头'),
      description: docsCopy(
        '在 Table.Column 中嵌套 columns 即可形成多级表头；Table 会计算跨列、层级和空状态宽度。'
      ),
      preview: <TableGroupedHeaderDemo />,
      code: docsCopy(`import { Table } from '@heliannuuthus/ui'

const columns: Table.Column<Release>[] = [
  {
    header: '发布信息',
    columns: [
      { accessor: 'version', header: '版本', sortable: true },
      { accessor: 'environment', header: '环境' },
    ],
  },
  {
    header: '执行情况',
    columns: [
      { accessor: 'owner', header: '负责人' },
      { accessor: 'status', header: '状态' },
    ],
  },
  {
    header: '操作',
    columns: [
      {
        key: 'detail',
        header: '记录',
        align: 'center',
        render: (_, row) => <Button>{row.version} 详情</Button>,
      },
    ],
  },
]

<Table columns={columns} data={releaseRecords} />`),
      wide: true,
      previewHeight: 560,
    },
    {
      title: docsCopy('虚拟滚动'),
      description: docsCopy(
        'virtual 只滚动并虚拟化表体；Header 固定在容器顶部，固定列、横向滚动和自定义 render 会继续生效。'
      ),
      preview: <TableManagedVirtualDemo />,
      code: `import { Table } from '@heliannuuthus/ui'

<Table
  columns={columns}
  data={records}
  rowKey="id"
  pagination={false}
  classNames={{ table: 'min-w-[900px]' }}
  virtual={{
    containerHeight: 320,
    overscan: 8,
    rowHeight: 48,
  }}
/>`,
      wide: true,
      previewHeight: 600,
    },
    {
      title: docsCopy('受控排序、分页与行选择'),
      description: docsCopy(
        'sorting、pagination 和 rowSelection 都可以由业务受控；每次交互都会返回公开状态，不暴露底层表格实例。'
      ),
      preview: <TableControlledStateDemo />,
      code: `import { useState, type Key } from 'react'
import { Table } from '@heliannuuthus/ui'

const [sort, setSort] = useState<Table.SortState | null>(null)
const [page, setPage] = useState(1)
const [selectedKeys, setSelectedKeys] = useState<Key[]>([])

<Table
  columns={columns}
  data={records}
  rowKey="id"
  sorting={{ value: sort, onChange: setSort }}
  pagination={{ current: page, onChange: setPage, pageSize: 20 }}
  rowSelection={{ value: selectedKeys, onChange: setSelectedKeys }}
/>`,
      wide: true,
      previewHeight: 600,
    },
    {
      title: docsCopy('分页摘要'),
      description: docsCopy('显示数据总数，或根据总数与当前范围自定义摘要。'),
      cases: [
        {
          isDefault: true,
          label: docsCopy('默认摘要'),
          properties: { pagination: '{ pageSize: 3, summary: true }' },
          values: { summary: 'default' },
        },
        {
          label: docsCopy('自定义摘要'),
          properties: { pagination: '{ pageSize: 3, summary: customSummary }' },
          values: { summary: 'custom' },
        },
        {
          label: docsCopy('隐藏摘要'),
          properties: { pagination: '{ pageSize: 3, summary: false }' },
          values: { summary: 'hidden' },
        },
      ],
      preview: (values) => (
        <TableManagedDemo
          summary={
            values.summary === 'custom' || values.summary === 'hidden'
              ? values.summary
              : 'default'
          }
        />
      ),
      code: `<Table
  columns={columns}
  data={releaseRecords}
  pagination={{ pageSize: 3, summary: true }}
/>

<Table
  columns={columns}
  data={releaseRecords}
  pagination={{ pageSize: 3, summary: customSummary }}
/>

<Table
  columns={columns}
  data={releaseRecords}
  pagination={{ pageSize: 3, summary: false }}
/>`,
      wide: true,
      previewHeight: 460,
    },
    {
      title: docsCopy('加载与外部状态组合'),
      description: docsCopy(
        'Table 只内置布尔 loading；定制空结果和请求错误分别组合 Empty 与 Alert。'
      ),
      caseAxes: [
        {
          name: 'state',
          label: docsCopy('状态'),
          defaultValue: 'loading',
          options: [
            { label: docsCopy('加载中'), value: 'loading' },
            { label: docsCopy('空结果'), value: 'empty' },
            { label: docsCopy('错误'), value: 'error' },
          ],
        },
      ],
      preview: (values) => (
        <TableStatusDemo
          state={
            values.state === 'error'
              ? 'error'
              : values.state === 'empty'
                ? 'empty'
                : 'loading'
          }
        />
      ),
      code: docsCopy(`import { Alert, Empty, Table } from '@heliannuuthus/ui'

if (request.error) {
  return <Alert variant="error" title="发布记录加载失败" />
}

if (!request.pending && records.length === 0) {
  return <Empty title="没有匹配记录" />
}

<Table
  columns={columns}
  data={records}
  loading={request.pending}
/>`),
      wide: true,
      previewHeight: 460,
    },
    {
      title: docsCopy('服务端数据模式'),
      description: docsCopy(
        'search、sorting 与 pagination 的 manual 模式只管理公开状态，不在客户端二次处理服务端返回的数据。'
      ),
      preview: <TableManualModeDemo />,
      code: `import { Table } from '@heliannuuthus/ui'

<Table
  columns={columns}
  data={request.pageRows}
  rowKey="id"
  search={{ mode: 'manual', value: query, onChange: setQuery }}
  sorting={{ mode: 'manual', value: sort, onChange: setSort }}
  pagination={{
    mode: 'manual',
    current: page,
    pageSize: 20,
    total: request.total,
    onChange: setPage,
  }}
/>`,
      wide: true,
      previewHeight: 600,
    },
  ],
  empty: [
    {
      title: docsCopy('标题与说明'),
      description: docsCopy(
        'title 必须明确说明当前为空的对象，description 再补充原因、筛选建议或下一步。'
      ),
      preview: (
        <Empty
          className="display-empty"
          description={docsCopy('尝试缩短关键词或清除当前筛选条件。')}
          title={docsCopy('没有匹配的发布记录')}
        />
      ),
      code: docsCopy(`import { Empty } from '@heliannuuthus/ui'

<Empty
  title="没有匹配的发布记录"
  description="尝试缩短关键词或清除当前筛选条件。"
/>`),
      previewHeight: 420,
    },
    {
      title: docsCopy('图标'),
      description: docsCopy(
        'icon 默认使用通用收件箱图标，也可以替换为场景图标或传 null 隐藏。'
      ),
      caseAxes: [
        {
          name: 'icon',
          label: docsCopy('图标'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认'), value: 'default' },
            { label: docsCopy('自定义'), value: 'custom' },
            { label: docsCopy('隐藏'), value: 'hidden' },
          ],
        },
      ],
      preview: (values) => (
        <EmptyIconDemo
          mode={
            values.icon === 'custom' || values.icon === 'hidden'
              ? values.icon
              : 'default'
          }
        />
      ),
      code: `<Empty title="No results" />
<Empty icon={<SearchX />} title="No results" />
<Empty icon={null} title="No results" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('操作区域'),
      description: docsCopy(
        'actions 可以承载状态摘要和操作按钮，不需要暴露内部布局组件。'
      ),
      preview: <EmptyCompositionDemo />,
      code: docsCopy(`import { Empty } from '@heliannuuthus/ui'

<Empty
  icon={<ShieldCheck />}
  title="等待安全审计"
  description="审计通过前暂无可发布版本。"
  actions={<AuditSummary />}
/>`),
      previewHeight: 440,
    },
  ],
  item: [
    {
      title: docsCopy('协作动态'),
      description: docsCopy(
        '用 Item.Group 组织同类动态，并通过分隔线维持连续列表的阅读节奏。'
      ),
      preview: <ItemActivityDemo />,
      code: docsCopy(`import { Tag, Item } from '@heliannuuthus/ui'

<Item.Group
  separator
  items={[
    {
      media: <MessageCircle />,
      mediaType: 'icon',
      title: '林默回复了检查项',
      description: '确认索引变更不会锁表。',
      actions: <Tag>2 分钟前</Tag>,
    },
  ]}
/>`),
      previewHeight: 340,
    },
    {
      title: docsCopy('成员目录'),
      description: docsCopy(
        '头像、身份说明和成员状态保持同一行对齐，描边外观明确每个成员的点击区域。'
      ),
      preview: <ItemMemberDirectoryDemo />,
      code: docsCopy(`import { Avatar, Tag, Item } from '@heliannuuthus/ui'

<Item
  variant="outline"
  media={<Avatar alt="林默" fallback="林" />}
  title="林默"
  description="平台工程 · 发布管理员"
  actions={<Tag type="success">在线</Tag>}
/>`),
      previewHeight: 340,
    },
    {
      title: docsCopy('设置列表'),
      description: docsCopy(
        '把开关放入 actions，让标题解释设置、描述说明影响范围，整行本身不重复承担点击行为。'
      ),
      preview: <ItemSettingsDemo />,
      code: docsCopy(`import { Item, Switch } from '@heliannuuthus/ui'

<Item
  variant="muted"
  media={<Cloud />}
  mediaType="icon"
  title="自动部署预览环境"
  description="合并到 main 后自动更新预览环境。"
  actions={<Switch aria-label="自动部署预览环境" />}
/>`),
      previewHeight: 340,
    },
    {
      title: docsCopy('资源入口'),
      description: docsCopy(
        '使用 href 把整个资源项变成原生链接；header 和 footer 承载辅助元数据。'
      ),
      preview: <ItemResourceDemo />,
      code: docsCopy(`import { Tag, Item } from '@heliannuuthus/ui'

<Item
  href="/release-notes/v0.12.0"
  variant="outline"
  header={<Tag>发布说明</Tag>}
  media={<FileText />}
  mediaType="icon"
  title="v0.12.0-release-notes.md"
  description="Markdown · 18 KB"
  footer={<span>许澄维护 · 8 分钟前更新</span>}
/>`),
      previewHeight: 320,
    },
    {
      title: docsCopy('列表项尺寸'),
      description: docsCopy('size 分别提供默认、小和超小三档内容密度。'),
      caseAxes: [
        {
          name: 'size',
          label: docsCopy('尺寸'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认'), value: 'default' },
            { label: docsCopy('小'), value: 'sm' },
            { label: docsCopy('超小'), value: 'xs' },
          ],
        },
      ],
      preview: (values) => (
        <ItemSizeDemo
          size={
            values.size === 'sm' || values.size === 'xs'
              ? values.size
              : 'default'
          }
        />
      ),
      code: `<Item size="default" title="Release notes" />
<Item size="sm" title="Release notes" />
<Item size="xs" title="Release notes" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('媒体内容类型'),
      description: docsCopy(
        'mediaType 明确区分普通内容、图标和图片，避免调用方依赖节点形态推断样式。'
      ),
      caseAxes: [
        {
          name: 'mediaType',
          label: docsCopy('媒体类型'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('普通内容'), value: 'default' },
            { label: docsCopy('图标'), value: 'icon' },
            { label: docsCopy('图片'), value: 'image' },
          ],
        },
      ],
      preview: (values) => (
        <ItemMediaTypeDemo
          mediaType={
            values.mediaType === 'icon' || values.mediaType === 'image'
              ? values.mediaType
              : 'default'
          }
        />
      ),
      code: `<Item media={<FileText />} mediaType="icon" title="Release notes" />
<Item media={<img alt="Cover" src="/cover.jpg" />} mediaType="image" title="Cover" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('内容槽位'),
      description: docsCopy(
        'header、content、actions 与 footer 各自占据独立语义区域，不再把多个结构字段塞进同一行说明。'
      ),
      caseAxes: [
        {
          name: 'slot',
          label: docsCopy('内容槽位'),
          defaultValue: 'content',
          options: [
            { label: 'header', value: 'header' },
            { label: 'content', value: 'content' },
            { label: 'actions', value: 'actions' },
            { label: 'footer', value: 'footer' },
          ],
        },
      ],
      preview: (values) => (
        <ItemStructureDemo
          slot={
            values.slot === 'header' ||
            values.slot === 'actions' ||
            values.slot === 'footer'
              ? values.slot
              : 'content'
          }
        />
      ),
      code: `<Item
  header={<Status />}
  title="Production release"
  content={<Metadata />}
  actions={<Button>View</Button>}
  footer={<UpdatedAt />}
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('链接列表项'),
      description: docsCopy(
        '传入 href 时 Item 使用原生 a 元素承载整项导航，未传时保持普通 div。'
      ),
      preview: <ItemLinkDemo />,
      code: `<Item href="/releases/1842" title="View release details" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('列表项集合'),
      description: docsCopy(
        'Item.Group 通过 items 渲染集合，separator 独立控制无分隔、默认分隔线或自定义分隔内容。'
      ),
      caseAxes: [
        {
          name: 'separator',
          label: docsCopy('分隔内容'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('无分隔'), value: 'none' },
            { label: docsCopy('默认分隔线'), value: 'default' },
            { label: docsCopy('自定义内容'), value: 'custom' },
          ],
        },
      ],
      preview: (values) => (
        <ItemGroupDemo
          separator={
            values.separator === 'none' || values.separator === 'custom'
              ? values.separator
              : 'default'
          }
        />
      ),
      code: `<Item.Group items={items} separator />
<Item.Group items={items} separator={<Marker content="Production" />} />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('自定义列表项渲染'),
      description: docsCopy(
        'renderItem 接收当前 ItemGroupEntry 和索引，用于改写整项渲染，而不是修改 Item 的基础属性。'
      ),
      preview: <ItemGroupRenderDemo />,
      code: `<Item.Group
  items={items}
  renderItem={({ key, ...item }, index) => (
    <Item key={key} {...item} actions={<Tag>0{index + 1}</Tag>} />
  )}
/>`,
      previewHeight: 'auto',
    },
  ],
  marker: [
    {
      title: docsCopy('日期分段'),
      description: docsCopy(
        '在消息、动态或更新记录中分隔日期，让标签成为内容边界而不是时间线节点。'
      ),
      preview: <MarkerDateSectionDemo />,
      code: docsCopy(`import { Marker } from '@heliannuuthus/ui'

<article>昨天的更新内容</article>
<Marker content="今天" variant="separator" />
<article>今天的更新内容</article>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('未读边界'),
      description: docsCopy(
        '把未读数量放在已读与未读内容之间；图标强化状态，底边框保持紧凑。'
      ),
      preview: <MarkerUnreadDemo />,
      code: docsCopy(`import { Marker } from '@heliannuuthus/ui'
import { CircleDot } from 'lucide-react'

<Marker
  variant="border"
  icon={<CircleDot />}
  content="2 条未读消息"
/>`),
      previewHeight: 360,
    },
    {
      title: docsCopy('状态说明'),
      description: docsCopy(
        '在一组相关设置之间说明后续内容的共同状态，不把 Marker 当作警告或通知容器。'
      ),
      preview: <MarkerStatusDemo />,
      code: docsCopy(`import { Marker } from '@heliannuuthus/ui'
import { CheckCircle2 } from 'lucide-react'

<Marker
  icon={<CheckCircle2 />}
  content="以下设置已同步到生产环境"
/>`),
      previewHeight: 330,
    },
    {
      title: docsCopy('链接标记'),
      description: docsCopy(
        '传入 href 后，标记可以指向文档锚点或另一段连续内容，并保留原生链接语义。'
      ),
      preview: <MarkerLinkDemo />,
      code: docsCopy(`import { Marker } from '@heliannuuthus/ui'
import { Archive } from 'lucide-react'

<Marker
  href="#archived-release-notes"
  icon={<Archive />}
  content="定位到归档说明"
  variant="separator"
/>`),
      previewHeight: 330,
    },
    {
      title: docsCopy('链接与槽位样式'),
      description: docsCopy(
        'href 让整个 Marker 使用原生链接语义，classNames 分别扩展 icon 与 content 槽位。'
      ),
      preview: <MarkerLinkDemo />,
      code: `<Marker
  href="/releases/history"
  icon={<ArrowUpRight />}
  content="View release history"
  classNames={{ icon: 'text-primary', content: 'font-medium' }}
/>`,
      previewHeight: 'auto',
    },
  ],
  bubble: [
    {
      title: docsCopy('气泡样式'),
      description: docsCopy(
        'variant 的每种语义外观都作为独立 case 展示，避免在同一个预览区域混合比较。'
      ),
      caseAxes: [
        {
          name: 'variant',
          label: docsCopy('样式'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认'), value: 'default' },
            { label: docsCopy('次要'), value: 'secondary' },
            { label: docsCopy('弱化'), value: 'muted' },
            { label: docsCopy('浮起'), value: 'elevated' },
            { label: docsCopy('柔和'), value: 'tinted' },
            { label: docsCopy('描边'), value: 'outline' },
            { label: docsCopy('透明'), value: 'ghost' },
            { label: docsCopy('危险'), value: 'destructive' },
          ],
        },
      ],
      preview: (values) => (
        <BubbleVariantsDemo
          variant={
            values.variant === 'secondary' ||
            values.variant === 'muted' ||
            values.variant === 'elevated' ||
            values.variant === 'tinted' ||
            values.variant === 'outline' ||
            values.variant === 'ghost' ||
            values.variant === 'destructive'
              ? values.variant
              : 'default'
          }
        />
      ),
      code: docsCopy(`import { Bubble } from '@heliannuuthus/ui'

<Bubble
  align="end"
  content="已经补充完成，可以重新评审。"
  reactions="✓ 2"
  variant="elevated"
/>`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('消息对齐'),
      description: docsCopy(
        'align 只控制单个气泡位于消息流的起始侧或末端，不隐含发送者身份。'
      ),
      caseAxes: [
        {
          name: 'align',
          label: docsCopy('对齐'),
          defaultValue: 'start',
          options: [
            { label: docsCopy('起始侧'), value: 'start' },
            { label: docsCopy('末端'), value: 'end' },
          ],
        },
      ],
      preview: (values) => (
        <BubbleAlignmentDemo align={values.align === 'end' ? 'end' : 'start'} />
      ),
      code: `<Bubble align="start" content="Incoming message" />
<Bubble align="end" content="Outgoing message" />`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('回应位置'),
      description: docsCopy(
        'reactionsProps 的 side 与 align 分别控制回应位于气泡上下侧和左右边缘。'
      ),
      caseAxes: [
        {
          name: 'position',
          label: docsCopy('回应位置'),
          defaultValue: 'bottom-end',
          options: [
            { label: docsCopy('顶部起始侧'), value: 'top-start' },
            { label: docsCopy('顶部末端'), value: 'top-end' },
            { label: docsCopy('底部起始侧'), value: 'bottom-start' },
            { label: docsCopy('底部末端'), value: 'bottom-end' },
          ],
        },
      ],
      preview: (values) => (
        <BubbleReactionsDemo
          position={
            values.position === 'top-start' ||
            values.position === 'top-end' ||
            values.position === 'bottom-start'
              ? values.position
              : 'bottom-end'
          }
        />
      ),
      code: `<Bubble
  content="Ready for review"
  reactions="👍 2"
  reactionsProps={{ side: 'top', align: 'start' }}
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('内容节点属性'),
      description: docsCopy(
        'contentProps 向内部内容节点传递标准 HTML、ARIA、data 属性、事件和 className。'
      ),
      preview: <BubbleContentPropsDemo />,
      code: `<Bubble
  content="Build completed"
  contentProps={{ role: 'status', 'aria-live': 'polite' }}
/>`,
      previewHeight: 'auto',
    },
    {
      title: docsCopy('头像与可滚动会话'),
      description: docsCopy(
        '不引入额外 Message 抽象，直接组合 Bubble、Avatar 与 ScrollArea 构建双向会话。'
      ),
      preview: <BubbleConversationDemo />,
      code: docsCopy(`import { Bubble } from '@heliannuuthus/ui'
import { Avatar } from '@heliannuuthus/ui'
import { ScrollArea } from '@heliannuuthus/ui'

<ScrollArea
  className="h-80"
  scrollbar={{ size: 'sm', visibility: 'auto' }}
>
  <div role="list" aria-label="协作消息">
    {messages.map((message) => (
      <div className="flex gap-2" role="listitem">
        <Avatar alt={message.author} fallback={message.avatar} />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <span>{message.author} · {message.time}</span>
          <Bubble content={message.content} variant="elevated" />
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`),
      previewHeight: 'auto',
      wide: true,
    },
  ],
  table: [
    {
      title: docsCopy('固定列与横向滚动'),
      description: (
        <>
          {docsCopy('对应的')}
          <code>Head</code>
          {docsCopy('与')}
          <code>Cell</code>
          {docsCopy('同时设置')} <code>fixed=&quot;start&quot;</code>
          {docsCopy('固定起始列，或设置')} <code>fixed=&quot;end&quot;</code>
          {docsCopy('固定末尾列；再给')}
          <code>Table.Primitive</code> {docsCopy('设置')}
          <code>className=&quot;min-w-[960px]&quot;</code>{' '}
          {docsCopy('等大于容器的最小宽度，中间列即可横向滚动。')}
        </>
      ),
      preview: <TableFixedDemo />,
      code: docsCopy(`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'

<Table.Primitive classNames={{ table: 'min-w-[960px] table-fixed' }}>
  <Table.Header>
    <Table.Row>
      <Table.Head fixed="start" className="w-40">服务</Table.Head>
      <Table.Head className="w-28">版本</Table.Head>
      <Table.Head className="w-28">区域</Table.Head>
      <Table.Head className="w-32">最近部署</Table.Head>
      <Table.Head fixed="end" align="center" className="w-24">操作</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell fixed="start">Web Console</Table.Cell>
      <Table.Cell>v0.12.0</Table.Cell>
      <Table.Cell fixed="end" align="center">
        <Button
          aria-label="监控 Web Console"
          size="xs"
          variant="ghost"
        >
          监控
        </Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`),
      previewHeight: 500,
      wide: true,
    },
    {
      title: docsCopy('与 Pagination 组合'),
      description: docsCopy(
        'Table 只负责当前页的语义结构，Pagination 管理页码；本地数组或服务端数据都使用同一受控组合。'
      ),
      preview: <TablePaginationDemo />,
      code: docsCopy(`import { useState } from 'react'
import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'
import { Pagination } from '@heliannuuthus/ui'

const [page, setPage] = useState(1)
const visibleRows = rows.slice((page - 1) * 10, page * 10)

<>
  <Table.Primitive>
    {/* render visibleRows，并在末列提供查看、审批等操作 Button */}
  </Table.Primitive>
  <Pagination
    current={page}
    pageCount={Math.ceil(rows.length / 10)}
    onChange={setPage}
  />
</>`),
      previewHeight: 500,
      wide: true,
    },
    {
      title: docsCopy('Primitive 行展开'),
      description: docsCopy(
        '使用普通 Button 控制 aria-expanded，并通过 Row 与跨列 Cell 承载详情，不需要额外的表格专用组件。'
      ),
      preview: <TableExpandableDemo />,
      code: docsCopy(`import { Fragment, useState } from 'react'
import { Button, Table } from '@heliannuuthus/ui'
import { ChevronRight } from 'lucide-react'

const [expandedId, setExpandedId] = useState<string | null>(null)

<Table.Primitive>
  <Table.Body>
    {rows.map((row) => {
      const expanded = row.id === expandedId
      return (
        <Fragment key={row.id}>
          <Table.Row>
            <Table.Cell>
              <Button
                aria-expanded={expanded}
                aria-label={\`\${expanded ? '收起' : '展开'} \${row.id}\`}
                size="icon-xs"
                variant="ghost"
                onClick={() => setExpandedId(expanded ? null : row.id)}
              >
                <ChevronRight className={expanded ? 'rotate-90' : ''} />
              </Button>
            </Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
          </Table.Row>
          {expanded && (
            <Table.Row>
              <Table.Cell colSpan={2}>{row.detail}</Table.Cell>
            </Table.Row>
          )}
        </Fragment>
      )
    })}
  </Table.Body>
</Table.Primitive>`),
      previewHeight: 520,
      wide: true,
    },
    {
      title: docsCopy('列对齐、超长省略与自定义 Cell'),
      description: docsCopy(
        'align 统一控制起始、居中和末端对齐；Head 与 Cell 的 ellipsis 在溢出时提供全文 Tooltip，自定义组件直接作为 Cell 子节点。'
      ),
      preview: <TableCellDemo />,
      code: docsCopy(`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'
import { ArrowUpRight } from 'lucide-react'

const ActionCell = () => {
  return (
    <Button
      aria-label="配置 Realtime Gateway"
      size="xs"
      variant="ghost"
    >
      配置 <ArrowUpRight data-icon="inline-end" />
    </Button>
  )
}

<Table.Primitive classNames={{ table: 'table-fixed' }}>
  <Table.Header>
    <Table.Row>
      <Table.Head align="start">服务</Table.Head>
      <Table.Head ellipsis="服务说明、最近一次生产部署上下文与异常原因">服务说明、最近一次生产部署上下文与异常原因</Table.Head>
      <Table.Head align="end">成功率</Table.Head>
      <Table.Head align="center">操作</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Realtime Gateway</Table.Cell>
      <Table.Cell ellipsis>{description}</Table.Cell>
      <Table.Cell align="end">99.98%</Table.Cell>
      <Table.Cell align="center"><ActionCell /></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`),
      previewHeight: 430,
      wide: true,
    },
  ],
  tooltip: [
    {
      title: docsCopy('显示 Tooltip'),
      description: docsCopy('为控件提供简短补充说明。'),
      preview: <TooltipBasicDemo />,
      code: `<Tooltip content={tooltipContent}>{trigger}</Tooltip>`,
      previewHeight: 300,
    },
    {
      title: docsCopy('十二个位置'),
      description: docsCopy(
        'placement 表示浮层相对触发器的位置；边缘位置保持浮层边缘对齐，并将箭头固定在对应边缘的安全区。'
      ),
      preview: <TooltipPlacementsDemo />,
      code: docsCopy(`import { Button, Tooltip } from '@heliannuuthus/ui'

<Tooltip
  content="上方靠左提示"
  openDelay={100}
  placement="topLeft"
>
  <Button>上方靠左</Button>
</Tooltip>`),
      previewHeight: 440,
      wide: true,
    },
    {
      title: docsCopy('箭头'),
      description: docsCopy('箭头默认匹配 placement 的落点，也可将其隐藏。'),
      preview: <TooltipArrowDemo />,
      code: docsCopy(`import { Button, Tooltip } from '@heliannuuthus/ui'

<Tooltip
  content="默认箭头"
  placement="topLeft"
>
  <Button>显示箭头</Button>
</Tooltip>`),
      previewHeight: 300,
      wide: true,
    },
    {
      title: docsCopy('受控状态与容器'),
      description: docsCopy(
        '通过 open 与 onOpenChange 管理显隐，并可设置延迟和 Portal 容器。'
      ),
      preview: <TooltipBehaviorDemo />,
      code: docsCopy(`import { Button, Tooltip } from '@heliannuuthus/ui'
import { useState } from 'react'

const [container, setContainer] = useState<HTMLDivElement | null>(null)
const [open, setOpen] = useState(false)

<div ref={setContainer}>
  <Tooltip
    closeDelay={150}
    container={container}
    content="受控提示"
    onOpenChange={setOpen}
    open={open}
    openDelay={250}
  >
    <Button>悬停或聚焦</Button>
  </Tooltip>
  <Button onClick={() => setOpen((value) => !value)}>
    {open ? '关闭提示' : '打开提示'}
  </Button>
</div>`),
      coveredProperties: [
        'closeDelay',
        'container',
        'onOpenChange',
        'open',
        'openDelay',
      ],
      previewHeight: 320,
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
      title: docsCopy('删除预览环境'),
      description: docsCopy(
        '仅用于必须由用户确认的警告或危险操作；成功和普通信息应使用 Alert 或 Toast。'
      ),
      caseAxes: [
        {
          name: 'size',
          label: docsCopy('尺寸'),
          defaultValue: 'default',
          options: [
            { label: docsCopy('默认'), value: 'default' },
            { label: docsCopy('紧凑'), value: 'sm' },
          ],
        },
      ],
      preview: (values) => (
        <AlertDialogDeleteDemo size={values.size === 'sm' ? 'sm' : 'default'} />
      ),
      code: docsCopy(`import { AlertDialog, Button } from '@heliannuuthus/ui'

<AlertDialog
  trigger={<Button variant="destructive">删除预览环境</Button>}
  title="删除 preview-142？"
  description="此操作无法撤销。"
  cancelText="保留环境"
  confirmText="确认删除"
  confirmVariant="destructive"
  onConfirm={removePreview}
/>`),
      previewHeight: 300,
    },
  ],
  dialog: [
    {
      title: docsCopy('安排生产发布'),
      description: docsCopy(
        '在不离开当前页面的情况下完成一项聚焦编辑任务，并保留明确的取消和保存动作。'
      ),
      preview: <DialogReleaseDemo />,
      code: docsCopy(`import { Button, Dialog } from '@heliannuuthus/ui'

<Dialog
  trigger={<Button>安排发布</Button>}
  title="安排生产环境发布"
  description="选择版本和发布时间。"
  cancelText="取消"
  confirmText="保存"
  onConfirm={scheduleRelease}
>
  <ReleaseFields />
</Dialog>`),
      previewHeight: 300,
    },
  ],
  drawer: [
    {
      title: docsCopy('今晚的发布窗口'),
      description: docsCopy(
        '从页面边缘承载较长内容和连续操作，同时保留当前页面上下文。'
      ),
      preview: <DrawerReleaseDemo />,
      code: docsCopy(`import { Button, Drawer } from '@heliannuuthus/ui'

<Drawer
  behavior="adaptive"
  side="right"
  trigger={<Button>从右侧打开</Button>}
  title="今晚的发布窗口"
  description="22:00–23:00"
>
  <ReleaseWindow />
</Drawer>`),
      previewHeight: 340,
    },
    {
      title: docsCopy('四个方向'),
      description: docsCopy(
        '统一从上、右、下、左进入；adaptive 模式在窄屏保留手势，在宽屏收敛为稳定的边缘面板。'
      ),
      preview: <DrawerDirectionsDemo />,
      code: docsCopy(`import { Button, Drawer } from '@heliannuuthus/ui'

<Drawer
  behavior="adaptive"
  side="right"
  trigger={<Button>从右侧打开</Button>}
  title="今晚的发布窗口"
  description="22:00–23:00"
>
  <ReleaseWindow />
</Drawer>`),
      previewHeight: 340,
    },
    {
      title: docsCopy('绑定父容器'),
      description: docsCopy(
        '传入 container 后，Portal、视口与面板都限制在指定父容器内，四个方向仍保持一致。'
      ),
      preview: <DrawerContainedDemo />,
      code: docsCopy(`const containerRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} className="relative overflow-hidden">
  <Drawer
    behavior="panel"
    container={containerRef}
    side="left"
    title="局部筛选"
    trigger={<Button>从左侧打开</Button>}
  >
    <FilterFields />
  </Drawer>
</div>`),
      previewHeight: 560,
      wide: true,
    },
  ],
  popover: [
    {
      title: docsCopy('查看发布负责人'),
      description: docsCopy(
        '在触发器附近补充少量关联信息与轻量操作，不打断当前阅读上下文。'
      ),
      preview: <PopoverOwnersDemo />,
      code: docsCopy(`import { Button, Popover } from '@heliannuuthus/ui'

<Popover
  trigger={<Button variant="outline">3 位负责人</Button>}
  title="发布负责人"
  description="发布和回滚时会通知这些成员。"
  content={<OwnerList />}
  side="bottom"
/>`),
      previewHeight: 300,
    },
    {
      title: docsCopy('悬停预览负责人'),
      description: docsCopy(
        '将 trigger 设为 hover 后，鼠标悬停或键盘聚焦都会展示关联信息，适合实体预览。'
      ),
      preview: <PopoverOwnerPreviewDemo />,
      code: docsCopy(`import { Button, Popover } from '@heliannuuthus/ui'

<Popover
  triggerMode="hover"
  trigger={<Button variant="link">@linmo</Button>}
  content="负责人资料"
  delay={300}
  closeDelay={150}
  side="bottom"
/>`),
      previewHeight: 340,
    },
  ],
  progress: [
    {
      title: docsCopy('部署进度'),
      description: docsCopy(
        '把完成比例与当前阶段放在一起，让用户知道任务正在做什么以及还剩多少。'
      ),
      preview: <ProgressReleaseDemo />,
      code: docsCopy(`import { Progress } from '@heliannuuthus/ui'

<Progress
  effect="sparkle"
  label="生产环境"
  showValue
  value={68}
/>`),
      previewHeight: 360,
    },
  ],
  skeleton: [
    {
      title: docsCopy('发布列表骨架'),
      description: docsCopy(
        '加载前复刻最终内容的层级和密度，避免数据出现时产生明显布局跳动。'
      ),
      caseAxes: [
        {
          name: 'density',
          label: docsCopy('密度'),
          defaultValue: 'comfortable',
          options: [
            { label: docsCopy('舒适'), value: 'comfortable' },
            { label: docsCopy('紧凑'), value: 'compact' },
          ],
        },
        {
          name: 'effect',
          label: docsCopy('加载效果'),
          defaultValue: 'shimmer',
          options: [
            { label: docsCopy('镜面扫光'), value: 'shimmer' },
            { label: docsCopy('明暗呼吸'), value: 'pulse' },
            { label: docsCopy('静态'), value: 'none' },
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
      code: `import { Skeleton } from '@heliannuuthus/ui'

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
      title: docsCopy('异步发布结果'),
      description: docsCopy(
        '用同一条通知承接异步任务的加载、成功或失败阶段，避免重复堆叠消息。'
      ),
      preview: <SonnerPublishDemo />,
      code: docsCopy(`import { Sonner, toast } from '@heliannuuthus/ui'

toast.promise(publish(), {
  loading: '正在发布到生产环境…',
  success: 'v0.12.0 已发布',
  error: '发布失败，请检查构建日志',
})

<Sonner position="bottom-right" richColors />`),
      previewHeight: 300,
    },
  ],
  spinner: [
    {
      title: docsCopy('图标尺寸'),
      description: docsCopy(
        '大、中、小直接展示原始加载图标，尺寸不会隐含按钮高度或其他容器样式。'
      ),
      preview: <SpinnerSizesDemo />,
      code: docsCopy(`import { Spinner } from '@heliannuuthus/ui'

<Spinner aria-label="小号加载" size="sm" />
<Spinner aria-label="正在加载" />
<Spinner aria-label="大号加载" size="lg" />`),
      previewHeight: 'auto',
    },
    {
      title: docsCopy('局部加载状态'),
      description: docsCopy(
        '只在正在更新的内容区域放置图标与状态说明，页面其他部分保持可阅读、可操作。'
      ),
      preview: <SpinnerLoadingDemo />,
      code: docsCopy(`import { Spinner } from '@heliannuuthus/ui'

<section aria-busy="true" aria-label="正在同步环境状态">
  <div>
    <span>预览环境</span>
    <Spinner aria-label="预览环境同步中" size="sm" />
  </div>
</section>`),
      previewHeight: 420,
      wide: true,
    },
  ],
  toast: [
    {
      title: docsCopy('全局语义通知'),
      description: docsCopy(
        '在应用根部放置 Provider，后代组件通过 useToast 调用 success、info、warning 或 error；默认显示在页面顶部。'
      ),
      preview: <ToastSemanticDemo />,
      code: docsCopy(`import { Toast, useToast } from '@heliannuuthus/ui'

const PublishAction = () => {
  const { toast } = useToast()

  return (
    <Button onClick={() => toast.success('发布已完成')}>
      发布
    </Button>
  )
}

<Toast.Provider>
  <App />
</Toast.Provider>`),
      previewHeight: 320,
    },
    {
      title: docsCopy('局部通知'),
      description: docsCopy(
        '局部 Provider 会创建独立通知通道，并将 Toast 约束在最近的定位容器中，不覆盖整个页面。'
      ),
      preview: <ToastLocalDemo />,
      code: docsCopy(`import { Toast, useToast } from '@heliannuuthus/ui'

const WorkspaceAction = () => {
  const { toast } = useToast()
  return <Button onClick={() => toast.info('预览已刷新')}>刷新</Button>
}

<div className="relative overflow-hidden">
  <Toast.Provider scope="local">
    <WorkspaceAction />
  </Toast.Provider>
</div>`),
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
      name: 'value',
      description: docsCopy('使用受控或非受控方式指定展开项。'),
      type: 'string[]',
    },
    {
      name: 'defaultValue',
      description: docsCopy('使用受控或非受控方式指定展开项。'),
      type: 'string[]',
    },
    {
      name: 'onChange',
      description: docsCopy('展开项变化时调用。'),
      type: '(value, eventDetails) => void',
    },
    {
      name: 'multiple',
      description: docsCopy('允许同时展开多个条目。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'indicator',
      description: docsCopy(
        '设置 Accordion.Indicator；省略时使用位于末端、随展开状态旋转的默认箭头，传入 null 时隐藏。'
      ),
      type: 'ReactElement<AccordionIndicatorProps> | null',
      defaultValue: '<Accordion.Indicator />',
    },
    {
      component: 'Accordion.Indicator',
      name: 'children',
      description: docsCopy(
        '传入静态节点时随展开状态旋转；传入状态函数时接收 open、disabled 与 value，并完全控制展示内容。'
      ),
      type: 'ReactNode | ((state: AccordionIndicatorState) => ReactNode)',
    },
    {
      component: 'Accordion.Indicator',
      name: 'position',
      description: docsCopy('将指示器放在标题起始侧或末端。'),
      type: "'start' | 'end'",
      defaultValue: "'end'",
    },
    {
      name: 'disabled',
      description: docsCopy('禁用整个 Accordion 或单个 AccordionItem。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'keepMounted',
      description: docsCopy(
        '关闭面板后仍保留其 DOM，适合保留内部状态；不能与 hiddenUntilFound 同时使用。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'hiddenUntilFound',
      description: docsCopy(
        '通过 hidden="until-found" 保留关闭面板，使浏览器页内查找可以定位并展开内容；不能与 keepMounted 同时使用。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  attachment: [
    {
      name: 'state',
      description: docsCopy('表达附件当前处理阶段并驱动状态样式。'),
      type: "'idle' | 'uploading' | 'processing' | 'error' | 'done'",
      defaultValue: "'done'",
    },
    {
      name: 'size',
      description: docsCopy('设置附件的整体密度。'),
      type: "'xs' | 'sm' | 'default'",
      defaultValue: "'default'",
    },
    {
      name: 'orientation',
      description: docsCopy('切换行式附件或纵向缩略附件。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
    {
      component: 'AttachmentMedia',
      name: 'variant',
      description: docsCopy('声明媒体内容是图标还是图片。'),
      type: "'icon' | 'image'",
      defaultValue: "'icon'",
    },
    {
      name: 'trigger',
      description: docsCopy('传入链接或按钮元素，使整个附件成为对应触发区域。'),
      type: 'ReactElement',
    },
  ],
  avatar: [
    {
      name: 'shape',
      description: docsCopy('设置圆形头像或圆角方形头像。'),
      type: "'circle' | 'square'",
      defaultValue: "'circle'",
    },
    {
      name: 'size',
      description: docsCopy('设置头像尺寸，并同步 AvatarBadge 与分组计数。'),
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    {
      component: 'AvatarImage',
      name: 'src',
      description: docsCopy('提供头像图片资源。'),
      type: 'string',
    },
    {
      component: 'AvatarImage',
      name: 'alt',
      description: docsCopy('提供头像图片的替代文本。'),
      type: 'string',
    },
    {
      name: 'AvatarFallback',
      description: docsCopy('图片不可用时显示姓名缩写或图标。'),
      type: 'component',
    },
    {
      name: 'badge',
      description: docsCopy(
        '在头像右下角放置在线点、认证图标或 Tag 等状态节点。'
      ),
      type: 'ReactNode',
    },
    {
      component: 'Avatar.Group',
      name: 'max',
      description: docsCopy('限制可见头像数量，并自动将剩余数量显示为 +N。'),
      type: 'number',
      defaultValue: '—',
    },
    {
      component: 'Avatar.Group',
      name: 'overlap',
      description: docsCopy('使用像素值控制相邻头像的重叠程度。'),
      type: 'number',
      defaultValue: '8',
    },
    {
      component: 'Avatar.Group',
      name: 'size',
      description: docsCopy('为组内头像和自动生成的计数项设置统一尺寸。'),
      type: 'AvatarSize',
      defaultValue: "'default'",
    },
    {
      component: 'Avatar.Group',
      name: 'shape',
      description: docsCopy('为组内头像和自动生成的计数项设置统一形状。'),
      type: 'AvatarShape',
      defaultValue: "'circle'",
    },
    {
      component: 'Avatar.Group',
      name: 'renderCount',
      description: docsCopy('自定义溢出数量的呈现方式。'),
      type: '(count: number) => ReactNode',
      defaultValue: '—',
    },
    {
      name: 'AvatarGroupCount',
      description: docsCopy(
        '不使用 max 时，也可以手动组合自定义的分组计数项。'
      ),
      type: 'component',
    },
  ],
  carousel: [
    {
      name: 'autoplay',
      description: docsCopy(
        '传 true 以默认 3 秒间隔自动播放，或直接传入正数设置切换秒数。'
      ),
      type: 'boolean | number',
      defaultValue: 'false',
    },
    {
      name: 'loop',
      description: docsCopy(
        '让最后一项与第一项首尾相接；自动播放跨越首尾时始终沿下一页方向继续。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'pauseOnHover',
      description: docsCopy('自动播放时，指针进入轮播区域即暂停，离开后继续。'),
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      name: 'ref',
      description: docsCopy(
        '从 Carousel 外部滚动、播放或暂停；底层轮播实例不会暴露。'
      ),
      type: 'React.Ref<CarouselRef>',
    },
  ],
  collapsible: [
    {
      name: 'header',
      description: docsCopy(
        '设置始终可见的摘要内容；未传 trigger 时，整个 Header 同时作为触发器。'
      ),
      type: 'ReactNode',
    },
    {
      name: 'content',
      description: docsCopy('设置展开后显示的内容。'),
      type: 'ReactNode',
    },
    {
      name: 'footer',
      description: docsCopy('设置内容区域后的可选底部信息或操作。'),
      type: 'ReactNode',
    },
    {
      name: 'trigger',
      description: docsCopy(
        '设置独立触发按钮的内容；传入后 Header 保持静态，不再响应展开操作。'
      ),
      type: 'ReactNode',
    },
    {
      name: 'triggerProps',
      description: docsCopy('设置独立触发按钮的外观、尺寸和原生触发器属性。'),
      type: 'CollapsibleTriggerProps & ButtonVariantProps',
    },
    {
      name: 'indicator',
      description: docsCopy(
        '统一设置 Header 或独立触发按钮的状态图标；true 使用默认图标，false 隐藏，也可传入自定义节点。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'true',
    },
    {
      name: 'open',
      description: docsCopy('以受控方式管理内容展开状态。'),
      type: 'boolean',
    },
    {
      name: 'defaultOpen',
      description: docsCopy('设置非受控模式的初始展开状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'onOpenChange',
      description: docsCopy('用户展开或收起内容时调用。'),
      type: '(open: boolean, eventDetails) => void',
    },
    {
      name: 'disabled',
      description: docsCopy('阻止触发器改变展开状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  counter: [
    {
      name: 'value',
      description: docsCopy('设置需要展示并驱动逐位滚动的数值。'),
      type: 'number',
    },
    {
      name: 'places',
      description: docsCopy(
        '固定需要展示的数位；使用小数点字符串分隔整数和小数位，省略时根据 value 自动推导。'
      ),
      type: "readonly (number | '.')[]",
    },
    {
      name: 'fontSize',
      description: docsCopy('设置数字字号。'),
      type: 'number',
      defaultValue: '64',
    },
    {
      name: 'fontWeight',
      description: docsCopy('设置数字字重。'),
      type: 'CSSProperties["fontWeight"]',
      defaultValue: '700',
    },
    {
      name: 'gap',
      description: docsCopy('设置数字数位间距。'),
      type: 'number',
      defaultValue: '4',
    },
    {
      name: 'prefix',
      description: docsCopy('在滚动数值前组合货币或其他视觉内容。'),
      type: 'ReactNode',
    },
    {
      name: 'suffix',
      description: docsCopy('在滚动数值后组合单位或其他视觉内容。'),
      type: 'ReactNode',
    },
    {
      name: 'valueText',
      description: docsCopy('为辅助技术提供包含单位和上下文的完整数值文本。'),
      type: 'string',
    },
    {
      name: 'springOptions',
      description: docsCopy('调整各数位滚动时的弹簧参数。'),
      type: 'SpringOptions',
    },
  ],
  'data-table': [
    {
      name: 'columns',
      description: docsCopy(
        '使用库自有的列模型定义访问器、表头、单元格和嵌套列组。'
      ),
      type: 'Table.Column<TData>[]',
      required: true,
    },
    {
      component: 'Table.Column',
      name: 'key',
      description: docsCopy('设置稳定的列标识；使用字段 accessor 时可省略。'),
      type: 'string',
    },
    {
      component: 'Table.Column',
      name: 'accessor',
      description: docsCopy('读取字段或通过函数计算当前列值。'),
      type: 'keyof TData | (row: TData) => unknown',
    },
    {
      component: 'Table.Column',
      name: 'header',
      description: docsCopy('设置列标题。'),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'Table.Column',
      name: 'render',
      description: docsCopy('根据当前值、记录和索引渲染单元格。'),
      type: 'Table.Render<TData>',
    },
    {
      component: 'Table.Column',
      name: 'columns',
      description: docsCopy('嵌套子列并生成分组表头。'),
      type: 'Table.Column<TData>[]',
    },
    {
      component: 'Table.Column',
      name: 'sortable',
      description: docsCopy('启用默认排序，或提供业务比较函数。'),
      type: 'boolean | ((a: TData, b: TData) => number)',
    },
    {
      component: 'Table.Column',
      name: 'align',
      description: docsCopy('设置表头与单元格内容对齐方式。'),
      type: "'start' | 'center' | 'end'",
      defaultValue: "'start'",
    },
    {
      component: 'Table.Column',
      name: 'fixed',
      description: docsCopy('将列固定在表格起始侧或末端。'),
      type: "'start' | 'end'",
    },
    {
      component: 'Table.Column',
      name: 'width',
      description: docsCopy('设置列宽，并参与固定列偏移计算。'),
      type: 'number',
    },
    {
      component: 'Table.Column',
      name: 'ellipsis',
      description: docsCopy(
        '控制整列的文本截断与 Tooltip；设置为 true 时使用当前表头或单元格内容，传入 ReactNode 时使用该节点作为 Tooltip 内容。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'false',
    },
    {
      component: 'Table.Column',
      name: 'classNames',
      description: docsCopy('按 header 与 cell 扩展当前列的类名。'),
      type: 'Table.ColumnClassNames<TData>',
    },
    {
      component: 'Table.Column',
      name: 'styles',
      description: docsCopy('按 header 与 cell 设置当前列的行内样式。'),
      type: 'Table.ColumnStyles<TData>',
    },
    {
      component: 'Table.ColumnClassNames',
      name: 'header',
      description: docsCopy('扩展当前列所有表头单元格的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ColumnClassNames',
      name: 'cell',
      description: docsCopy('按列或当前记录扩展数据单元格的类名。'),
      type: 'string | ((row: TData, index: number) => string)',
    },
    {
      component: 'Table.ColumnStyles',
      name: 'header',
      description: docsCopy('设置当前列所有表头单元格的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.ColumnStyles',
      name: 'cell',
      description: docsCopy('按列或当前记录设置数据单元格的行内样式。'),
      type: 'CSSProperties | ((row: TData, index: number) => CSSProperties)',
    },
    {
      component: 'Table.ClassNames',
      name: 'toolbar',
      description: docsCopy('扩展搜索等表格级操作区域的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'container',
      description: docsCopy('扩展滚动、边框与圆角容器的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'table',
      description: docsCopy('扩展原生 table 节点的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'header',
      description: docsCopy('扩展表头区域的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'body',
      description: docsCopy('扩展表体区域的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'footer',
      description: docsCopy('扩展表尾汇总区域的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'state',
      description: docsCopy('扩展内置加载与空数据状态单元格的类名。'),
      type: 'string',
    },
    {
      component: 'Table.ClassNames',
      name: 'pagination',
      description: docsCopy('扩展分页摘要与翻页控件容器的类名。'),
      type: 'string',
    },
    {
      component: 'Table.Styles',
      name: 'toolbar',
      description: docsCopy('设置搜索等表格级操作区域的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'container',
      description: docsCopy('设置滚动、边框与圆角容器的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'table',
      description: docsCopy('设置原生 table 节点的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'header',
      description: docsCopy('设置表头区域的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'body',
      description: docsCopy('设置表体区域的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'footer',
      description: docsCopy('设置表尾汇总区域的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'state',
      description: docsCopy('设置内置加载与空数据状态单元格的行内样式。'),
      type: 'CSSProperties',
    },
    {
      component: 'Table.Styles',
      name: 'pagination',
      description: docsCopy('设置分页摘要与翻页控件容器的行内样式。'),
      type: 'CSSProperties',
    },
    {
      name: 'data',
      description: docsCopy('提供表格数据记录。'),
      type: 'readonly TData[]',
      required: true,
    },
    {
      name: 'footer',
      description: docsCopy('渲染表尾汇总；传入函数时会收到当前页可见数据。'),
      type: 'ReactNode | ((visibleRows: readonly TData[]) => ReactNode)',
    },
    {
      name: 'showHeader',
      description: docsCopy('控制是否渲染表头。'),
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      name: 'rowKey',
      description: docsCopy(
        '提供稳定的业务行标识；省略时依次回退到记录的 key 和当前索引。'
      ),
      type: 'keyof TData | ((row: TData, index: number) => Key)',
    },
    {
      name: 'rowProps',
      description: docsCopy(
        '根据当前记录与索引扩展 Row 的类名、事件和原生属性。'
      ),
      type: "(row: TData, index: number) => Omit<ComponentProps<'tr'>, 'children'>",
    },
    {
      name: 'search',
      description: docsCopy(
        '配置搜索状态、字段范围与客户端或 manual 服务端模式。'
      ),
      type: 'false | Table.SearchProps<TData>',
      defaultValue: 'false',
    },
    {
      name: 'sorting',
      description: docsCopy(
        '配置排序的受控状态，以及客户端或 manual 服务端模式。'
      ),
      type: 'false | Table.SortingProps',
      defaultValue: '{}',
    },
    {
      name: 'pagination',
      description: docsCopy('配置分页状态与摘要；设置为 false 时关闭分页。'),
      type: 'false | Table.PaginationProps',
      defaultValue: '{ pageSize: 10 }',
    },
    {
      name: 'rowSelection',
      description: docsCopy('配置行选择的受控状态、禁用规则和可访问名称。'),
      type: 'Table.RowSelectionProps<TData>',
    },
    {
      name: 'expandable',
      description: docsCopy('配置行展开的受控状态、可展开规则和详情内容。'),
      type: 'Table.ExpandableProps<TData>',
    },
    {
      name: 'virtual',
      description: docsCopy(
        '启用固定行高的虚拟表体；不能与 expandable 同时使用。'
      ),
      type: 'boolean | Table.VirtualProps',
      defaultValue: 'false',
    },
    {
      name: 'loading',
      description: docsCopy(
        '显示内置加载状态；空数据由 Table 自动展示默认提示。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'classNames',
      description: docsCopy(
        '按 toolbar、container、table、header、body、footer、state 与 pagination 定制内部语义区域。'
      ),
      type: 'Table.ClassNames',
    },
    {
      name: 'styles',
      description: docsCopy('按与 classNames 相同的语义区域设置行内样式。'),
      type: 'Table.Styles',
    },
  ],
  empty: [
    {
      name: 'variant',
      description: docsCopy(
        '使用默认 props 布局，或切换到完全自定义的组合布局。'
      ),
      type: "'default' | 'custom'",
      defaultValue: "'default'",
    },
    {
      name: 'icon',
      description: docsCopy('替换默认 Inbox 图标；传入 null 可明确隐藏图标。'),
      type: 'ReactNode',
      defaultValue: '<InboxIcon />',
    },
    {
      name: 'title',
      description: docsCopy('明确说明当前为空的对象或结果。'),
      type: 'ReactNode',
      required: true,
    },
    {
      name: 'description',
      description: docsCopy('补充原因、筛选建议或下一步说明。'),
      type: 'ReactNode',
    },
    {
      name: 'actions',
      description: docsCopy('渲染主要按钮、链接或一组相关操作。'),
      type: 'ReactNode',
    },
    ...['EmptyHeader', 'EmptyMedia', 'EmptyTitle', 'EmptyDescription'].map(
      (name) => ({
        name,
        description: docsCopy('在 custom 变体中组合完全自定义的头部内容。'),
        type: 'component',
      })
    ),
    {
      name: 'EmptyContent',
      description: docsCopy('在 custom 变体中承载状态摘要和自定义操作。'),
      type: 'component',
    },
  ],
  item: [
    {
      name: 'variant',
      description: docsCopy('设置列表项的默认、描边或柔和外观。'),
      type: "'default' | 'outline' | 'muted'",
      defaultValue: "'default'",
    },
    {
      name: 'size',
      description: docsCopy('设置列表项内容密度。'),
      type: "'xs' | 'sm' | 'default'",
      defaultValue: "'default'",
    },
    {
      name: 'href',
      description: docsCopy(
        '传入链接地址后使用原生 a 元素，否则渲染为普通 div。'
      ),
      type: 'string',
    },
    {
      name: 'media',
      description: docsCopy('设置列表项的媒体内容。'),
      type: 'ReactNode',
    },
    {
      name: 'mediaType',
      description: docsCopy('选择媒体内容的普通、图标或图片外观。'),
      type: "'default' | 'icon' | 'image'",
      defaultValue: "'default'",
    },
    ...['title', 'description', 'content', 'actions'].map((name) => ({
      name,
      description: docsCopy('配置列表项对应的语义内容或尾部操作。'),
      type: 'ReactNode',
    })),
    {
      name: 'header',
      description: docsCopy('添加横跨整行的前置内容。'),
      type: 'ReactNode',
    },
    {
      name: 'footer',
      description: docsCopy('添加横跨整行的后置内容。'),
      type: 'ReactNode',
    },
  ],
  marker: [
    {
      name: 'variant',
      description: docsCopy('选择纯文本、两侧分隔线或下边框标记。'),
      type: "'default' | 'separator' | 'border'",
      defaultValue: "'default'",
    },
    {
      name: 'href',
      description: docsCopy(
        '传入链接地址后使用原生 a 元素，否则渲染为普通 div。'
      ),
      type: 'string',
    },
    {
      name: 'icon',
      description: docsCopy('设置装饰性状态图标并自动隐藏可访问语义。'),
      type: 'ReactNode',
    },
    {
      name: 'content',
      description: docsCopy('设置可换行的标记文字或链接。'),
      type: 'ReactNode',
    },
  ],
  bubble: [
    {
      component: 'Bubble',
      name: 'variant',
      description: docsCopy('设置消息气泡的强调与语义外观。'),
      type: "'default' | 'secondary' | 'muted' | 'elevated' | 'tinted' | 'outline' | 'ghost' | 'destructive'",
      defaultValue: "'default'",
    },
    {
      component: 'Bubble',
      name: 'align',
      description: docsCopy('将气泡对齐到消息流起始侧或末尾侧。'),
      type: "'start' | 'end'",
      defaultValue: "'start'",
    },
    {
      name: 'contentProps',
      description: docsCopy(
        '向内部内容 div 传递标准 HTML、ARIA、data 属性和事件。'
      ),
      type: 'ComponentProps<"div">',
    },
    {
      component: 'Bubble',
      name: 'side',
      description: docsCopy('设置气泡边缘回应或状态的纵向位置。'),
      type: "'top' | 'bottom'",
    },
    {
      component: 'Bubble',
      name: 'align',
      description: docsCopy('设置气泡边缘回应或状态的横向对齐。'),
      type: "'start' | 'end'",
    },
  ],
  table: [
    {
      component: 'Table.Primitive',
      name: 'classNames',
      description: docsCopy('扩展原生 table 节点的类名。'),
      type: 'Table.PrimitiveClassNames',
    },
    {
      component: 'Table.Primitive',
      name: 'styles',
      description: docsCopy('设置原生 table 节点的行内样式。'),
      type: 'Table.PrimitiveStyles',
    },
    {
      component: 'Table.Primitive',
      name: 'containerRef',
      description: docsCopy('引用内置滚动容器，用于外部滚动控制或尺寸观测。'),
      type: 'Ref<HTMLDivElement>',
    },
    {
      component: 'Table.PrimitiveClassNames',
      name: 'table',
      description: docsCopy('扩展 Table.Primitive 原生 table 节点的类名。'),
      type: 'string',
    },
    {
      component: 'Table.PrimitiveStyles',
      name: 'table',
      description: docsCopy('设置 Table.Primitive 原生 table 节点的行内样式。'),
      type: 'CSSProperties',
    },
    ...(['Table.Head', 'Table.Cell'] as const).flatMap((component) => [
      {
        component,
        name: 'align',
        description: docsCopy('按文字书写方向设置内容靠起始侧、居中或靠末端。'),
        type: "'start' | 'center' | 'end'",
        defaultValue: "'start'",
      },
      {
        component,
        name: 'fixed',
        description: docsCopy('将当前单元格固定在表格起始侧或末端。'),
        type: "'start' | 'end'",
      },
      {
        component,
        name: 'fixedOffset',
        description: docsCopy('设置当前固定单元格前方同侧固定列的累计偏移。'),
        type: 'number | string',
        defaultValue: '0',
      },
      {
        component,
        name: 'ellipsis',
        description: docsCopy(
          '传入 true 时在内容真实溢出后自动显示完整内容 Tooltip；传入 ReactNode 时以该节点作为 Tooltip 内容。'
        ),
        type: 'boolean | ReactNode',
        defaultValue: 'false',
      },
    ]),
  ],
  tooltip: [
    {
      component: 'TooltipProvider',
      name: 'delay',
      description: docsCopy('设置同一 Provider 下 Tooltip 的打开延迟。'),
      type: 'number',
      defaultValue: '0',
    },
    {
      name: 'open',
      description: docsCopy('以受控方式管理 Tooltip。'),
      type: 'boolean',
    },
    {
      name: 'defaultOpen',
      description: docsCopy('设置 Tooltip 非受控模式下的初始状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'onOpenChange',
      description: docsCopy('因悬停、聚焦或关闭导致状态变化时调用。'),
      type: '(open: boolean, eventDetails) => void',
    },
    {
      component: 'TooltipContent',
      name: 'side',
      description: docsCopy('设置内容相对触发器的首选方向。'),
      type: "'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end'",
      defaultValue: "'top'",
    },
    {
      name: 'align',
      description: docsCopy('设置浮层相对触发器的对齐方式。'),
      type: "'start' | 'center' | 'end'",
    },
    {
      name: 'sideOffset',
      description: docsCopy('设置浮层沿首选方向与触发器的间距。'),
      type: 'number',
    },
    {
      name: 'alignOffset',
      description: docsCopy('设置浮层沿对齐轴的偏移。'),
      type: 'number',
    },
  ],
  alert: [
    {
      name: 'variant',
      description: docsCopy(
        '设置提示的语义状态；destructive 作为 error 的兼容别名保留。'
      ),
      type: "'default' | 'info' | 'success' | 'warning' | 'error' | 'destructive'",
      defaultValue: "'default'",
    },
    {
      name: 'AlertAction',
      description: docsCopy(
        '放置查看详情、重试或关闭等与当前提示直接相关的操作。'
      ),
      type: 'component',
    },
  ],
  drawer: [
    {
      name: 'side',
      description: docsCopy('设置面板进入和停靠的方向。'),
      type: "'top' | 'right' | 'bottom' | 'left'",
      defaultValue: "'bottom'",
    },
    {
      name: 'behavior',
      description: docsCopy(
        'adaptive 在不同宽度下调整手柄与贴边样式；gesture 保留触摸抽屉形态；panel 使用稳定面板形态。'
      ),
      type: "'adaptive' | 'gesture' | 'panel'",
      defaultValue: "'adaptive'",
    },
    {
      name: 'container',
      description: docsCopy(
        '将 Portal、视口和面板绑定到指定父容器；父容器需要建立定位和裁切上下文。'
      ),
      type: 'HTMLElement | RefObject<HTMLElement | null>',
    },
    {
      name: 'snapPoints',
      description: docsCopy('为手势模式定义分段展开位置。'),
      type: '(number | string)[]',
    },
    {
      component: 'DrawerContent',
      name: 'closable',
      description: docsCopy(
        '控制右上角关闭操作；true 使用默认图标，false 隐藏，也可传入自定义节点。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'true',
    },
  ],
  popover: [
    {
      name: 'trigger',
      description: docsCopy(
        '设置主要触发方式；hover 模式同时支持鼠标悬停与键盘聚焦。'
      ),
      type: "'click' | 'hover'",
      defaultValue: "'click'",
    },
    {
      name: 'delay',
      description: docsCopy('设置 hover 模式打开前的等待时间，单位为毫秒。'),
      type: 'number',
      defaultValue: '300',
    },
    {
      name: 'closeDelay',
      description: docsCopy('设置 hover 模式关闭前的等待时间，单位为毫秒。'),
      type: 'number',
      defaultValue: '150',
    },
    {
      name: 'open',
      description: docsCopy('以受控方式管理浮层。'),
      type: 'boolean',
    },
    {
      name: 'defaultOpen',
      description: docsCopy('设置浮层非受控模式下的初始状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'onOpenChange',
      description: docsCopy('浮层因触发、聚焦或关闭操作变化时调用。'),
      type: '(open: boolean, eventDetails) => void',
    },
    {
      component: 'PopoverContent',
      name: 'side',
      description: docsCopy('设置内容相对触发器的首选方向。'),
      type: "'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end'",
      defaultValue: "'bottom'",
    },
    {
      name: 'align',
      description: docsCopy('设置浮层相对触发器的对齐方式。'),
      type: "'start' | 'center' | 'end'",
    },
    {
      name: 'sideOffset',
      description: docsCopy('设置浮层沿首选方向与触发器的间距。'),
      type: 'number',
    },
    {
      name: 'alignOffset',
      description: docsCopy('设置浮层沿对齐轴的偏移。'),
      type: 'number',
    },
  ],
  progress: [
    {
      name: 'value',
      description: docsCopy('设置当前进度；传入 null 表示无法确定完成比例。'),
      type: 'number | null',
      defaultValue: 'null',
    },
    {
      name: 'effect',
      description: docsCopy('在数值变化时为指示条前沿增加一次短暂的推进动效。'),
      type: "'none' | 'sparkle'",
      defaultValue: "'none'",
    },
    {
      name: 'min',
      description: docsCopy('设置进度范围的最小值，并同步无障碍数值。'),
      type: 'number',
      defaultValue: '0',
    },
    {
      name: 'max',
      description: docsCopy('设置进度范围的最大值，并同步无障碍数值。'),
      type: 'number',
      defaultValue: '100',
    },
  ],
  skeleton: [
    {
      name: 'effect',
      description: docsCopy(
        '选择镜面扫光、明暗呼吸或静态占位；系统要求减少动态效果时，扫光会自动停止。'
      ),
      type: "'shimmer' | 'pulse' | 'none'",
      defaultValue: "'shimmer'",
    },
  ],
};

for (const [slug, api] of Object.entries(dataDisplayApi)) {
  if (componentDocumentation[slug]) componentDocumentation[slug].api = api;
}

componentDocumentation.carousel.summary = docsCopy(
  '横向浏览同级内容，始终提供景深动效，并支持点位插槽、自动播放、首尾循环和自定义翻页器。'
);
componentDocumentation.carousel.parts = [
  ...['Carousel', 'CarouselContent', 'CarouselItem'].map((name) => ({
    name,
    description: docsCopy('建立轮播上下文、可滚动容器与单个景深内容项。'),
  })),
  ...['CarouselPrevious', 'CarouselNext', 'CarouselDots'].map((name) => ({
    name,
    description: docsCopy(
      '提供开箱即用的前后导航与页码点；支持替换图标、点位内容和组合位置。'
    ),
  })),
  {
    name: 'CarouselPagination',
    description: docsCopy(
      '自定义翻页插槽，通过 render props 提供页码、滚动与播放控制。'
    ),
  },
];
componentDocumentation.carousel.whenToUse = [
  docsCopy('同一层级有多张重点内容卡片，但当前区域只适合突出展示一项。'),
  docsCopy('需要轮播营销亮点、版本更新或媒体内容，并允许用户主动前后浏览。'),
];
componentDocumentation.carousel.accessibility = [
  docsCopy('轮播区域、幻灯片、前后按钮和页码点均保留可识别的语义与键盘操作。'),
  docsCopy(
    '开启自动播放后，动态内容不会持续触发读屏播报；系统要求减少动态效果时会停止自动播放和景深过渡。'
  ),
];
componentDocumentation.carousel.pitfalls = [
  docsCopy(
    '不要用自动播放承载必须阅读或必须操作的内容，用户仍应能通过箭头和页码点主动导航。'
  ),
  docsCopy(
    '自动播放默认悬停暂停；若关闭 pauseOnHover，需要提供其他清晰的暂停方式。'
  ),
  docsCopy('单屏塞入过多文字会让轮播难以扫读，内容较长时改用列表或分页。'),
];

componentDocumentation.counter.summary = docsCopy(
  '以逐位滚动动画呈现持续变化的数字；组件只负责展示，数值和业务操作由外部状态控制。'
);
componentDocumentation.counter.whenToUse = [
  docsCopy('需要强调统计指标、余额、计数或实时读数的变化过程。'),
  docsCopy('需要在固定数位中更新数字，减少整段文本突然替换造成的视觉跳动。'),
];
componentDocumentation.counter.parts = [
  {
    name: 'Counter',
    description: docsCopy(
      '根据 value、places 和格式属性渲染可访问的滚动数值，并提供前后缀与样式扩展点。'
    ),
  },
];
componentDocumentation.counter.accessibility = [
  docsCopy('视觉数字对辅助技术隐藏，并通过 valueText 提供完整、稳定的文本值。'),
  docsCopy(
    '高频更新默认不主动播报；确实需要播报变化时，再设置 aria-live="polite"。'
  ),
];
componentDocumentation.counter.pitfalls = [
  docsCopy(
    'Counter 不管理加减或请求状态；按钮、定时器和业务数据应由外部组件组合。'
  ),
  docsCopy('频繁变化时建议固定 places，避免数位数量变化引起布局跳动。'),
  docsCopy('不要为纯装饰或高频实时数据开启 assertive 播报。'),
];

componentDocumentation.drawer.summary = docsCopy(
  '从视口或指定父容器的任意边缘打开抽屉，并根据 behavior 调整稳定面板与手势呈现。'
);
componentDocumentation.drawer.whenToUse = [
  docsCopy('需要从当前视口边缘承接筛选、详情、导航或短流程任务。'),
  docsCopy('需要把临时面板限制在工作台、预览器或卡片等局部父容器中。'),
];
componentDocumentation.drawer.parts = [
  {
    name: 'Drawer',
    description: docsCopy('管理方向、自适应行为、父容器、开关状态与手势参数。'),
  },
  ...['DrawerTrigger', 'DrawerClose'].map((name) => ({
    name,
    description: docsCopy('连接打开与关闭操作，并保留焦点返回关系。'),
  })),
  {
    name: 'DrawerContent',
    description: docsCopy('渲染面板、遮罩、视口、滑动手柄和标准关闭按钮。'),
  },
  ...['DrawerHeader', 'DrawerFooter'].map((name) => ({
    name,
    description: docsCopy('组合标题说明、正文与底部操作。'),
  })),
];
componentDocumentation.drawer.pitfalls = [
  docsCopy(
    '使用 container 时，父容器必须设置 position: relative 和 overflow: hidden。'
  ),
  docsCopy(
    '不要仅根据设备名称选择行为；触摸密集任务使用 gesture，稳定编辑面板使用 panel，不确定时使用 adaptive。'
  ),
];

componentDocumentation.popover.summary = docsCopy(
  '在触发器附近展示可交互的关联内容；点击和悬停预览共用同一套内容、定位与受控状态 API。'
);
componentDocumentation.popover.whenToUse = [
  docsCopy('需要通过点击打开包含详情、表单或轻量操作的非模态浮层。'),
  docsCopy(
    '需要在不离开当前上下文的前提下，通过悬停或键盘聚焦预览人物、资源等实体信息。'
  ),
];
componentDocumentation.popover.parts = [
  {
    name: 'Popover',
    description: docsCopy(
      '管理触发方式、延迟、受控或非受控打开状态，并为所有子组件提供上下文。'
    ),
  },
  {
    name: 'PopoverTrigger',
    description: docsCopy(
      '连接触发元素，并根据 trigger 响应点击、悬停或键盘聚焦。'
    ),
  },
  {
    name: 'PopoverContent',
    description: docsCopy('在 Portal 中渲染定位后的浮层内容。'),
  },
  ...['PopoverHeader', 'PopoverTitle', 'PopoverDescription'].map((name) => ({
    name,
    description: docsCopy('组织浮层的标题与辅助说明。'),
  })),
];
componentDocumentation.popover.accessibility = [
  docsCopy('hover 模式也会在触发器获得键盘焦点时打开，不能只依赖鼠标操作。'),
  docsCopy('交互式内容使用 click 模式；仅提供一句简短说明时优先使用 Tooltip。'),
];
componentDocumentation.popover.pitfalls = [
  docsCopy(
    '不要在 hover 浮层中放置必须完成的操作，触摸设备和键盘用户需要更稳定的点击入口。'
  ),
  docsCopy(
    '不要同时维护 HoverCard 与 Popover 两套相同内容；实体预览直接使用 trigger="hover"。'
  ),
];

componentDocumentation.collapsible.summary = docsCopy(
  '按需展开一块辅助内容；支持独立按钮或整个自定义 Header 触发，并允许替换状态图标。'
);
componentDocumentation.collapsible.whenToUse = [
  docsCopy('默认只展示摘要，用户需要时再查看日志、详情、说明或高级配置。'),
  docsCopy(
    '页面只需要控制一个内容区域；多个并列区域需要互相协调时使用 Accordion。'
  ),
];
componentDocumentation.collapsible.parts = [
  {
    name: 'Collapsible',
    description: docsCopy(
      '通过 header、content、trigger、icon 与 footer 组合单个可展开内容区域。'
    ),
  },
];
componentDocumentation.collapsible.accessibility = [
  docsCopy(
    'Header 触发和独立按钮触发都使用原生按钮语义，并通过 aria-expanded 传达展开状态。'
  ),
  docsCopy('动效会响应 prefers-reduced-motion；不要移除键盘焦点样式。'),
];
componentDocumentation.collapsible.pitfalls = [
  docsCopy(
    '不要在可点击的 Header 内嵌套链接或按钮；有额外操作时传入 trigger，改用独立按钮触发。'
  ),
  docsCopy(
    '不要用 Collapsible 组织多个需要单选或多选联动的面板，这类结构应使用 Accordion。'
  ),
];

componentDocumentation.table.summary = docsCopy(
  'Table.Primitive 是不管理数据状态的语义表格根：业务直接组合 Table.Header、Table.Row 和 Table.Cell，精确控制原生结构。'
);
componentDocumentation.table.whenToUse = [
  docsCopy('数据已经是可直接渲染的行列结构，不需要 Table 的列模型和数据状态。'),
  docsCopy(
    '需要精确控制表头、汇总、固定列、展开详情或与 Pagination 的组合方式。'
  ),
];
componentDocumentation.table.relatedComponents = [
  {
    name: 'Data Table',
    slug: 'data-table',
    description: docsCopy(
      '常规数据列表优先使用组装好的 Table；它保留 Table 能力并补齐数据状态与默认交互。'
    ),
  },
];
componentDocumentation.table.parts = [
  {
    name: 'Table.Primitive',
    description: docsCopy('建立不管理数据状态的原生 table 与滚动容器。'),
  },
  ...[
    'Table.Header',
    'Table.Body',
    'Table.Footer',
    'Table.Row',
    'Table.Head',
    'Table.Cell',
  ].map((name) => ({
    name,
    description: docsCopy('对应原生表格的表头、表体、表尾、行和单元格语义。'),
  })),
];
componentDocumentation.table.accessibility = [
  docsCopy(
    '使用 Header 与 Head 明确每列的数据含义；列标题过长时通过 ellipsis 保留可聚焦查看的全文 Tooltip。'
  ),
  docsCopy(
    '行展开按钮使用 aria-expanded 表达状态，并在可访问名称中包含当前记录。'
  ),
  docsCopy(
    'Head 与 Cell 的 ellipsis 只在文本真实溢出时启用 Tooltip，并允许键盘聚焦查看全文；传入 ReactNode 可直接替换 Tooltip 内容。'
  ),
];
componentDocumentation.table.pitfalls = [
  docsCopy(
    '固定列需要明确列宽；多列同时固定时使用 fixedOffset 声明前面固定列的累计宽度。'
  ),
  docsCopy(
    '手动分页时只把当前页数据传给 Table.Primitive，由 Pagination 或服务端请求管理页码。'
  ),
  docsCopy(
    '需要搜索、排序、选择或自动分页时使用数据驱动的 Table，不要把这些状态塞进 Table.Primitive。'
  ),
];

componentDocumentation['data-table'].summary = docsCopy(
  'Table 是数据驱动的完整表格：搜索、排序、分页、选择和展开都有受控与非受控闭环，并提供固定列、状态与虚拟滚动。'
);
componentDocumentation['data-table'].typeDefinitionGroups = [
  'Table.Column',
  'Table.ColumnClassNames',
  'Table.ColumnStyles',
  'Table.ClassNames',
  'Table.Styles',
];
componentDocumentation['data-table'].whenToUse = [
  docsCopy(
    '常规业务数据列表默认使用 Table，由 data 与 Table.Column 驱动完整表格。'
  ),
  docsCopy(
    '需要筛选、排序、分页、固定列、分组表头、行展开或虚拟滚动中的任意能力。'
  ),
];
componentDocumentation['data-table'].relatedComponents = [
  {
    name: 'Table',
    slug: 'table',
    description: docsCopy(
      '数据状态由业务自行处理，或需要完全控制表头、汇总、行展开与虚拟表体时直接组合。'
    ),
  },
];
componentDocumentation['data-table'].parts = [
  {
    name: 'Table',
    description: docsCopy(
      '通过 data、columns 和功能配置组装搜索、排序、分页、选择、展开与虚拟滚动。'
    ),
  },
];
componentDocumentation['data-table'].accessibility = [
  docsCopy(
    '分组表头使用 colgroup/col scope，并保留正确的 colSpan 与 rowSpan 关系。'
  ),
  docsCopy(
    '只有图标的行操作必须包含当前记录，例如“v0.12.0 更多操作”，不能让每行都只有“更多”。'
  ),
  docsCopy(
    '展开按钮自动同步 aria-expanded；rowKey 应返回可以辨认且稳定的业务标识。'
  ),
  docsCopy(
    '虚拟滚动会提供 aria-rowcount 和真实 aria-rowindex，业务仍需保证每一行高度固定。'
  ),
];
componentDocumentation['data-table'].pitfalls = [
  docsCopy(
    '不要在 Table 内硬编码业务操作；通过 Table.Column.render 读取当前 row 后组合业务按钮。'
  ),
  docsCopy(
    '不要为了视觉分区手写两个并列表格；使用嵌套 columns 生成真正关联的数据表头。'
  ),
  docsCopy(
    '不要在 Table 外再包一套表格滚动与圆角容器；通过 classNames 定制现有语义区域。'
  ),
  docsCopy(
    '虚拟滚动只适用于固定高度的单行数据，不与 expandable 同时使用；需要动态详情高度时关闭 virtual。'
  ),
  docsCopy('操作较多时保留一个高频动作，其余收进菜单，避免操作列无限变宽。'),
];

componentDocumentation.empty.summary = docsCopy(
  '为空集合或缺失结果提供稳定占位，并通过 props 配置图标、标题、说明和操作。'
);
componentDocumentation.empty.whenToUse = [
  docsCopy('列表、表格、搜索或首次使用场景当前没有可展示内容。'),
  docsCopy('需要解释空状态原因，并提供一个清晰、可执行的下一步。'),
];
componentDocumentation.empty.parts = [
  {
    name: 'Empty',
    description: docsCopy(
      '根据 icon、title、description 和 actions 生成完整空状态。'
    ),
  },
];
componentDocumentation.empty.accessibility = [
  docsCopy('默认装饰图标会从无障碍树中隐藏，标题和说明承担状态表达。'),
  docsCopy(
    '操作文案应说明下一步，例如“清除筛选”或“创建项目”，不要只写“确定”。'
  ),
];
componentDocumentation.empty.pitfalls = [
  docsCopy('不要为普通空状态重复拼装内部结构，优先使用语义 props。'),
  docsCopy('操作较复杂时先封装为一个业务节点，再传给 actions。'),
  docsCopy(
    '加载中、请求失败和权限不足不是空数据，应分别使用 Skeleton、Alert 或专门的权限反馈。'
  ),
];

componentDocumentation.spinner.summary = docsCopy(
  '用旋转图标表示无法预估完成时间的短时等待；尺寸只控制图标本身，组件不会附带按钮或布局容器。'
);
componentDocumentation.spinner.whenToUse = [
  docsCopy('局部内容正在刷新、同步或生成，且预计很快完成。'),
  docsCopy('需要在紧凑状态行、媒体占位或操作旁边提供轻量等待反馈。'),
];
componentDocumentation.spinner.api = [
  {
    name: 'size',
    description: docsCopy('设置加载图标本身的尺寸，不改变周围容器。'),
    type: "'sm' | 'default' | 'lg'",
    defaultValue: "'default'",
  },
  {
    name: 'className',
    description: docsCopy('覆盖尺寸、颜色或其他 SVG 样式。'),
    type: 'string',
  },
];
componentDocumentation.spinner.accessibility = [
  docsCopy(
    '为独立 Spinner 提供描述当前任务的 aria-label，例如“正在同步环境状态”。'
  ),
  docsCopy(
    '区域加载时在最近的容器设置 aria-busy="true"，并保持其他区域可操作。'
  ),
];
componentDocumentation.spinner.pitfalls = [
  docsCopy(
    '不要为了展示尺寸把 Spinner 包进 Button；按钮加载态应由真实操作按钮自行组合。'
  ),
  docsCopy(
    '长时间或可量化任务应使用 Progress，首屏结构加载优先使用 Skeleton。'
  ),
  docsCopy('不要同时在同一局部区域堆叠多个表达相同状态的 Spinner。'),
];

componentDocumentation.toast.summary = docsCopy(
  '在页面顶部短暂反馈操作结果；内置 success、info、warning、error 四种语义样式，并可通过 Provider 隔离全局或局部通知通道。'
);
componentDocumentation.toast.whenToUse = [
  docsCopy('操作已经结束，需要短暂确认结果，但不应打断用户当前任务。'),
  docsCopy(
    '组件树中的深层操作需要调用统一的页面级通知，或工作区内部需要独立的局部通知。'
  ),
];
componentDocumentation.toast.parts = [
  {
    name: 'Toast.Provider',
    description: docsCopy(
      '创建通知 Context，并根据 scope 渲染全局或局部 Toaster。'
    ),
  },
  {
    name: 'useToast',
    description: docsCopy(
      '在 Provider 后代中取得绑定当前通知通道的 toast API。'
    ),
  },
  {
    name: 'Toast.Toaster',
    description: docsCopy(
      '直接配置通知容器的位置、数量、持续时间和局部化方式。'
    ),
  },
];
componentDocumentation.toast.api = [
  {
    component: 'Toast.Provider',
    name: 'scope',
    description: docsCopy('设置 Provider 创建全局通知通道还是局部通知通道。'),
    type: "'global' | 'local'",
    defaultValue: "'global'",
  },
  {
    component: 'Toast.Toaster',
    name: 'scope',
    description: docsCopy('设置通知容器相对视口定位还是相对父容器定位。'),
    type: "'global' | 'local'",
    defaultValue: "'global'",
  },
  {
    component: 'Toast.Toaster',
    name: 'position',
    description: docsCopy('设置通知相对视口或局部容器的出现位置。'),
    type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
    defaultValue: "'top-center'",
  },
  {
    component: 'Toast.Toaster',
    name: 'richColors',
    description: docsCopy('启用内置语义色；默认已经开启，可按需关闭。'),
    type: 'boolean',
    defaultValue: 'true',
  },
];
componentDocumentation.toast.accessibility = [
  docsCopy(
    'Toast 使用非阻塞通知区域；消息标题应简短，并在 description 中说明必要上下文。'
  ),
  docsCopy(
    '局部通知的父容器必须可见且尺寸稳定，避免通知被意外裁切到无法阅读。'
  ),
];
componentDocumentation.toast.pitfalls = [
  docsCopy(
    '不要在同一应用根部挂载多个未指定 id 的全局 Provider，否则同一通知可能重复展示。'
  ),
  docsCopy(
    'scope="local" 时父容器需要 position: relative 和 overflow: hidden。'
  ),
  docsCopy(
    '需要用户立即确认的危险操作使用 Alert Dialog，持续存在的页面状态使用 Alert。'
  ),
];

const dataEntryApi: Record<string, ApiProperty[]> = {
  checkbox: [
    {
      component: 'Checkbox',
      name: 'checked',
      description: docsCopy('设置受控选中状态；状态变化后由调用方传回新值。'),
      type: 'boolean',
    },
    {
      component: 'Checkbox',
      name: 'defaultChecked',
      description: docsCopy('设置非受控模式的初始选中状态，仅在初始化时生效。'),
      type: 'boolean',
    },
    {
      component: 'Checkbox',
      name: 'indeterminate',
      description: docsCopy('表达子项只被部分选择。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Checkbox',
      name: 'onChange',
      description: docsCopy('选中状态变化时调用。'),
      type: '(checked: boolean) => void',
    },
    {
      component: 'Checkbox',
      name: 'variant',
      description: docsCopy(
        '设置标签的视觉表达；task 在选中后弱化文字并添加删除线。'
      ),
      type: "'default' | 'task'",
      defaultValue: "'default'",
    },
    {
      component: 'Checkbox',
      name: 'disabled',
      description: docsCopy('阻止交互并降低视觉强调。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Checkbox.Group',
      name: 'variant',
      description: docsCopy(
        '为组内所有选项设置统一变体，单个 option 可单独覆盖。'
      ),
      type: "'default' | 'task'",
      defaultValue: "'default'",
    },
    {
      component: 'Checkbox.Group',
      name: 'value',
      description: docsCopy('设置受控模式下当前选中的值集合。'),
      type: 'string[]',
    },
    {
      component: 'Checkbox.Group',
      name: 'defaultValue',
      description: docsCopy('设置非受控模式下初始选中的值集合。'),
      type: 'string[]',
    },
    {
      component: 'Checkbox.Group',
      name: 'options',
      description: docsCopy('从标签与值配置生成一组 Checkbox。'),
      type: 'CheckboxOption[]',
    },
  ],
  'date-picker': [
    {
      name: 'display',
      description: docsCopy('选择内联日历或由按钮触发的弹出日历。'),
      type: "'inline' | 'popover'",
      defaultValue: "'popover'",
    },
    {
      name: 'value',
      description: docsCopy('当前选择的日期。'),
      type: 'Date | undefined',
    },
    {
      name: 'onChange',
      description: docsCopy('选择或清除日期时调用。'),
      type: '(date?: Date) => void',
    },
    {
      name: 'placeholder',
      description: docsCopy('未选择日期时的提示。'),
      type: 'string',
      defaultValue: docsCopy("'选择日期'"),
    },
    {
      name: 'disabled',
      description: docsCopy('禁用触发器与日历日期选择。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'calendarProps',
      description: docsCopy('透传月份导航、禁用日期和本地化等日历配置。'),
      type: 'CalendarProps',
    },
    {
      name: 'locale',
      description: docsCopy(
        '同时本地化日历名称、星期、月份和弹出触发器中的日期格式。'
      ),
      type: "'zh' | 'en'",
      defaultValue: "'zh'",
    },
  ],
  form: [
    {
      component: 'Form',
      name: 'form',
      description: docsCopy('连接 Form.useForm 创建的表单实例。'),
      type: 'FormInstance',
    },
    {
      component: 'Form',
      name: 'onSubmit',
      description: docsCopy('校验通过后接收完整表单数据。'),
      type: '(values) => void | Promise<void>',
    },
    {
      component: 'Form.Field',
      name: 'name',
      description: docsCopy('指定当前字段在表单数据中的唯一路径。'),
      type: 'FieldPath',
    },
    {
      component: 'Form.Field',
      name: 'label',
      description: docsCopy('设置字段标签并自动关联实际控件。'),
      type: 'ReactNode',
    },
    {
      component: 'Form.Field',
      name: 'description',
      description: docsCopy('补充字段说明并建立无障碍描述关联。'),
      type: 'ReactNode',
    },
    {
      component: 'Form.Field',
      name: 'rules',
      description: docsCopy('声明当前字段的必填、格式和自定义校验规则。'),
      type: 'RegisterOptions',
    },
    {
      component: 'Form.Field',
      name: 'children',
      description: docsCopy(
        '接收一个控件元素；内置控件自动绑定，自定义控件自动获得标准受控属性。'
      ),
      type: 'ReactElement',
    },
    {
      component: docsCopy('自定义控件'),
      name: docsCopy('注入属性'),
      description: docsCopy(
        '自动提供值、事件、字段状态和 ARIA 属性；控件支持 ref 时启用错误聚焦。'
      ),
      type: 'FormFieldInjectedControlProps<Value>',
    },
    {
      component: 'Form.Field',
      name: 'orientation',
      description: docsCopy('设置标签、内容与控件的排列方向。'),
      type: "'vertical' | 'horizontal' | 'responsive'",
      defaultValue: "'vertical'",
    },
  ],
  input: [
    {
      component: 'Input',
      name: 'type',
      description: docsCopy('选择文本、邮箱、密码等原生输入类型。'),
      type: 'HTMLInputTypeAttribute',
      defaultValue: "'text'",
    },
    {
      component: 'Input',
      name: 'value',
      description: docsCopy('设置受控输入值；内容变化后由调用方负责更新。'),
      type: 'string | number',
    },
    {
      component: 'Input',
      name: 'defaultValue',
      description: docsCopy('设置非受控输入的初始值，仅在初始化时生效。'),
      type: 'string | number',
    },
    {
      component: 'Input',
      name: 'prefix',
      description: docsCopy(
        '在输入内容前显示行内图标或文本，并保持在同一输入边框内。'
      ),
      type: 'ReactNode',
    },
    {
      component: 'Input',
      name: 'suffix',
      description: docsCopy(
        '在输入内容后显示行内文本或关联操作，并保持在同一输入边框内。'
      ),
      type: 'ReactNode',
    },
    {
      component: 'Input',
      name: 'addonBefore',
      description: docsCopy(
        '在输入控件上方显示块级附加内容，适合说明或辅助设置。'
      ),
      type: 'ReactNode',
    },
    {
      component: 'Input',
      name: 'addonAfter',
      description: docsCopy(
        '在输入控件下方显示块级附加内容，适合计数或状态反馈。'
      ),
      type: 'ReactNode',
    },
    {
      component: 'Input',
      name: 'aria-invalid',
      description: docsCopy('标记校验失败并启用错误样式。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Input',
      name: 'readOnly',
      description: docsCopy('阻止修改但保留聚焦、选择和复制能力。'),
      type: 'boolean',
    },
    {
      component: 'Input',
      name: 'disabled',
      description: docsCopy('禁用输入并阻止聚焦和编辑。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Input',
      name: 'classNames',
      description: docsCopy('分别扩展输入控件、前后缀及块级附加区域的类名。'),
      type: 'InputClassNames',
    },
    {
      component: 'Input.OTP',
      name: 'maxLength',
      description: docsCopy('设置验证码总位数。'),
      type: 'number',
      defaultValue: '6',
    },
    {
      component: 'Input.OTP',
      name: 'variant',
      description: docsCopy('切换分组连接方块或逐位独立方块布局。'),
      type: "'connected' | 'separated'",
      defaultValue: "'connected'",
    },
    {
      component: 'Input.OTP',
      name: 'value',
      description: docsCopy(
        '设置受控验证码字符串；内容变化后由调用方负责更新。'
      ),
      type: 'string',
    },
    {
      component: 'Input.OTP',
      name: 'defaultValue',
      description: docsCopy('设置非受控验证码的初始字符串。'),
      type: 'string',
    },
    {
      component: 'Input.OTP',
      name: 'onChange',
      description: docsCopy('验证码内容变化时调用，并返回完整字符串。'),
      type: '(value: string) => void',
    },
    {
      component: 'Input.OTP',
      name: 'pattern',
      description: docsCopy('限制允许输入的字符类型。'),
      type: 'string',
    },
    {
      component: 'Input.TextArea',
      name: 'value',
      description: docsCopy('设置受控多行文本值；内容变化后由调用方负责更新。'),
      type: 'string',
    },
    {
      component: 'Input.TextArea',
      name: 'defaultValue',
      description: docsCopy('设置非受控多行文本的初始值。'),
      type: 'string',
    },
    {
      component: 'Input.TextArea',
      name: 'rows',
      description: docsCopy('设置初始可见文本行数。'),
      type: 'number',
    },
    {
      component: 'Input.TextArea',
      name: 'maxLength',
      description: docsCopy('限制多行文本可输入的字符数量。'),
      type: 'number',
    },
  ],
  'input-number': [
    {
      name: 'value',
      description: docsCopy('设置受控原始数值；空输入使用 null。'),
      type: 'number | null',
    },
    {
      name: 'defaultValue',
      description: docsCopy('设置非受控模式的初始数值；空输入使用 null。'),
      type: 'number | null',
    },
    {
      name: 'onChange',
      description: docsCopy('数值变化时返回未格式化的 number 或 null。'),
      type: '(value: number | null) => void',
    },
    {
      name: 'onChangeComplete',
      description: docsCopy('输入失焦、步进结束或键盘提交数值时返回最终值。'),
      type: '(value: number | null) => void',
    },
    {
      name: 'min',
      description: docsCopy('限制允许输入和步进到达的最小值。'),
      type: 'number',
    },
    {
      name: 'max',
      description: docsCopy('限制允许输入和步进到达的最大值。'),
      type: 'number',
    },
    {
      name: 'step',
      description: docsCopy('设置普通步进幅度。'),
      type: "number | 'any'",
      defaultValue: '1',
    },
    {
      name: 'smallStep',
      description: docsCopy('设置 Alt 组合键对应的步进幅度。'),
      type: 'number',
      defaultValue: '0.1',
    },
    {
      name: 'largeStep',
      description: docsCopy('设置 Shift 组合键对应的步进幅度。'),
      type: 'number',
      defaultValue: '10',
    },
    {
      name: 'format',
      description: docsCopy('使用 Intl.NumberFormatOptions 格式化显示值。'),
      type: 'Intl.NumberFormatOptions',
    },
    {
      name: 'locale',
      description: docsCopy('设置格式化显示值使用的语言区域。'),
      type: 'Intl.LocalesArgument',
    },
    {
      name: 'controls',
      description: docsCopy('显示、隐藏或自定义递增和递减按钮中的图标。'),
      type: 'boolean | InputNumberControls',
      defaultValue: 'true',
    },
    {
      name: 'prefix',
      description: docsCopy('在同一输入边框内展示固定前缀。'),
      type: 'ReactNode',
    },
    {
      name: 'suffix',
      description: docsCopy('在同一输入边框内展示固定单位后缀。'),
      type: 'ReactNode',
    },
    {
      name: 'placeholder',
      description: docsCopy('配置原生输入提示。'),
      type: 'string',
    },
    {
      name: 'autoComplete',
      description: docsCopy('配置原生自动填充提示。'),
      type: 'string',
    },
    {
      name: 'inputMode',
      description: docsCopy('配置软键盘输入模式。'),
      type: 'HTMLAttributes<HTMLInputElement>["inputMode"]',
    },
    {
      name: 'incrementLabel',
      description: docsCopy('本地化递增按钮的可访问名称。'),
      type: 'string',
    },
    {
      name: 'decrementLabel',
      description: docsCopy('本地化递减按钮的可访问名称。'),
      type: 'string',
    },
    {
      name: 'size',
      description: docsCopy('设置紧凑、默认或宽松控件高度。'),
      type: "'sm' | 'default' | 'lg'",
      defaultValue: "'default'",
    },
    ...['disabled', 'readOnly', 'required'].map((name) => ({
      name,
      description: docsCopy('设置对应的原生表单语义。'),
      type: 'boolean',
      defaultValue: 'false',
    })),
    {
      name: 'allowWheelScrub',
      description: docsCopy('选择是否允许悬停滚轮调整数值。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'snapOnStep',
      description: docsCopy('选择步进时是否吸附到最近倍数。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'className',
      description: docsCopy('扩展根节点样式。'),
      type: 'string',
    },
    {
      name: 'classNames',
      description: docsCopy('扩展输入、按钮等语义插槽样式。'),
      type: 'InputNumberClassNames',
    },
    {
      name: docsCopy('原生属性'),
      description: docsCopy('透传标准 HTML、ARIA、data 属性和原生事件。'),
      type: 'InputHTMLAttributes<HTMLInputElement>',
    },
  ],
  radio: [
    {
      component: 'Radio',
      name: 'value',
      description: docsCopy('标识 Radio 在所属分组中的值。'),
      type: 'string | number',
    },
    {
      component: 'Radio.Group',
      name: 'value',
      description: docsCopy('设置受控模式下当前选中的单选值。'),
      type: 'string',
    },
    {
      component: 'Radio.Group',
      name: 'defaultValue',
      description: docsCopy('设置非受控模式下初始选中的单选值。'),
      type: 'string',
    },
    {
      component: 'Radio.Group',
      name: 'onChange',
      description: docsCopy('当前单选值变化时调用。'),
      type: '(value: string) => void',
    },
    {
      component: 'Radio.Group',
      name: 'options',
      description: docsCopy('从标签与值配置生成一组 Radio。'),
      type: 'RadioOption[]',
    },
    {
      component: 'Radio.Group',
      name: 'orientation',
      description: docsCopy('声明键盘导航方向；横向时使用 Stack 自适应换行。'),
      type: "'horizontal' | 'vertical'",
    },
    {
      component: 'Radio.Group',
      name: 'columns',
      description: docsCopy('横向布局允许显示的最大列数。'),
      type: 'number',
      defaultValue: '3',
    },
    {
      component: 'Radio.Group',
      name: 'minColumnWidth',
      description: docsCopy('横向布局中单个选项的期望最小宽度。'),
      type: 'number | string',
      defaultValue: '180',
    },
    {
      component: 'Radio.Group',
      name: 'gap',
      description: docsCopy('设置 Radio.Group 选项之间的水平与垂直间距。'),
      type: 'number | string | [number | string, number | string]',
      defaultValue: '12',
    },
    {
      component: 'Radio.Group',
      name: 'disabled',
      description: docsCopy('禁用整个 Radio.Group 或单个 Radio。'),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  select: [
    {
      component: 'Select',
      name: 'items',
      description: docsCopy(
        '提供固定且可过滤的候选项集合，支持平铺或分组数据。'
      ),
      type: 'Item[] | Group<Item>[]',
    },
    {
      component: 'Select',
      name: 'value',
      description: docsCopy('设置受控模式下当前选择的项目。'),
      type: 'Item | Item[] | null',
    },
    {
      component: 'Select',
      name: 'defaultValue',
      description: docsCopy('设置非受控模式下初始选择的项目。'),
      type: 'Item | Item[] | null',
    },
    {
      component: 'Select',
      name: 'onChange',
      description: docsCopy('选择新项目时调用。'),
      type: '(value: Item | Item[] | null) => void',
    },
    {
      component: 'Select',
      name: 'searchValue',
      description: docsCopy('设置受控模式下用于过滤候选项的搜索关键词。'),
      type: 'string',
    },
    {
      component: 'Select',
      name: 'defaultSearchValue',
      description: docsCopy('设置非受控模式下初始搜索关键词。'),
      type: 'string',
    },
    {
      component: 'Select',
      name: 'onSearch',
      description: docsCopy('搜索关键词变化时调用。'),
      type: '(query: string) => void',
    },
    {
      component: 'Select',
      name: 'onOpenChange',
      description: docsCopy('候选弹层打开或关闭时调用。'),
      type: '(open: boolean) => void',
    },
    {
      component: 'Select',
      name: 'multiple',
      description: docsCopy('允许选择多个值，并配合 SelectChips 展示。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Select',
      name: 'showClear',
      description: docsCopy('在已有选择值时显示清除按钮。'),
      type: 'boolean',
    },
    {
      component: 'Select',
      name: 'showTrigger',
      description: docsCopy('显示用于展开候选列表的尾部按钮。'),
      type: 'boolean',
    },
    {
      component: 'Select',
      name: 'disabled',
      description: docsCopy('禁用 Select。'),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  slider: [
    {
      component: 'Slider',
      name: 'effect',
      description: docsCopy(
        '控制内置反馈：悬停、触摸或聚焦时轻微缩放整体，拖拽越界时仅边缘内容在透明安全区内偏移并回弹，不改变轨道长度；减少动态效果偏好下自动停用。'
      ),
      type: "'none' | 'elastic'",
      defaultValue: "'elastic'",
    },
    {
      component: 'Slider',
      name: 'startIcon',
      description: docsCopy('在轨道起点显示图标，并参与 elastic 边缘反馈。'),
      type: 'ReactNode',
    },
    {
      component: 'Slider',
      name: 'endIcon',
      description: docsCopy('在轨道终点显示图标，并参与 elastic 边缘反馈。'),
      type: 'ReactNode',
    },
    {
      component: 'Slider',
      name: 'startLabel',
      description: docsCopy('在轨道起点显示文字标签。'),
      type: 'ReactNode',
    },
    {
      component: 'Slider',
      name: 'endLabel',
      description: docsCopy('在轨道终点显示文字标签。'),
      type: 'ReactNode',
    },
    {
      component: 'Slider',
      name: 'value',
      description: docsCopy('设置受控模式下当前的一个或多个滑块值。'),
      type: 'number | number[]',
    },
    {
      component: 'Slider',
      name: 'defaultValue',
      description: docsCopy('设置非受控模式下初始的一个或多个滑块值。'),
      type: 'number | number[]',
    },
    {
      component: 'Slider',
      name: 'onChange',
      description: docsCopy('滑块值变化时调用。'),
      type: '(value: number | number[]) => void',
    },
    {
      component: 'Slider',
      name: 'onChangeComplete',
      description: docsCopy('一次指针或键盘调整完成后调用。'),
      type: '(value: number | number[]) => void',
    },
    {
      component: 'Slider',
      name: 'min',
      description: docsCopy('设置允许选择的最小值。'),
      type: 'number',
      defaultValue: '0',
    },
    {
      component: 'Slider',
      name: 'max',
      description: docsCopy('设置允许选择的最大值。'),
      type: 'number',
      defaultValue: '100',
    },
    {
      component: 'Slider',
      name: 'step',
      description: docsCopy('设置每次键盘或指针移动的步长。'),
      type: 'number',
      defaultValue: '1',
    },
    {
      component: 'Slider',
      name: 'orientation',
      description: docsCopy('切换水平或垂直方向。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
  ],
  switch: [
    {
      component: 'Switch',
      name: 'checked',
      description: docsCopy('设置受控开关状态；变化后由调用方传回新值。'),
      type: 'boolean',
    },
    {
      component: 'Switch',
      name: 'defaultChecked',
      description: docsCopy('设置非受控模式的初始开启状态。'),
      type: 'boolean',
    },
    {
      component: 'Switch',
      name: 'onChange',
      description: docsCopy('开关状态变化时立即调用。'),
      type: '(checked: boolean) => void',
    },
    {
      component: 'Switch',
      name: 'disabled',
      description: docsCopy('阻止状态变化并显示不可用状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Switch',
      name: 'name',
      description: docsCopy('设置原生表单提交时使用的字段名称。'),
      type: 'string',
    },
    {
      component: 'Switch',
      name: 'value',
      description: docsCopy('设置开关开启时提交到原生表单的字段值。'),
      type: 'string',
    },
  ],
  toggle: [
    {
      component: 'Toggle',
      name: 'value',
      description: docsCopy('设置受控按下状态；状态变化后由调用方传回新值。'),
      type: 'boolean',
    },
    {
      component: 'Toggle',
      name: 'defaultValue',
      description: docsCopy('设置非受控模式的初始按下状态。'),
      type: 'boolean',
    },
    {
      component: 'Toggle',
      name: 'onChange',
      description: docsCopy('单个 Toggle 的布尔值变化时调用。'),
      type: '(value: boolean) => void',
    },
    {
      component: 'Toggle',
      name: 'variant',
      description: docsCopy('设置透明或描边外观。'),
      type: "'default' | 'outline'",
      defaultValue: "'default'",
    },
    {
      component: 'Toggle.Group',
      name: 'value',
      description: docsCopy('设置受控模式下当前按下的工具值集合。'),
      type: 'string[]',
    },
    {
      component: 'Toggle.Group',
      name: 'defaultValue',
      description: docsCopy('设置非受控模式下初始按下的工具值集合。'),
      type: 'string[]',
    },
    {
      component: 'Toggle.Group',
      name: 'items',
      description: docsCopy(
        '通过 props 声明组项的 value、label、禁用状态与可访问名称。'
      ),
      type: 'ToggleGroupOption[]',
    },
    {
      component: 'Toggle.Group',
      name: 'onChange',
      description: docsCopy('组内按下值变化时调用。'),
      type: '(value: string[]) => void',
    },
    {
      component: 'Toggle.Group',
      name: 'multiple',
      description: docsCopy('允许同时按下多个 Toggle。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'Toggle.Group',
      name: 'orientation',
      description: docsCopy('设置方向并匹配方向键导航。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'horizontal'",
    },
  ],
};

for (const [slug, api] of Object.entries(dataEntryApi)) {
  if (componentDocumentation[slug]) componentDocumentation[slug].api = api;
}

componentDocumentation.input.summary = docsCopy(
  '通过单行、多行、组合输入和验证码承接不同复杂度的录入任务。'
);
componentDocumentation.input.whenToUse = [
  docsCopy('输入单行或多行文本、带前后缀的结构化内容或固定长度验证码。'),
  docsCopy('需要在同一输入任务中组合说明、附加动作和状态反馈。'),
];
componentDocumentation.input.parts = [
  { name: 'Input', description: docsCopy('接收单行文本与原生输入类型。') },
  {
    name: 'Input.TextArea',
    description: docsCopy('接收多行文本，并与 Input 共享状态与样式约定。'),
  },
  {
    name: 'Input.OTP',
    description: docsCopy(
      '接收固定长度验证码，并使用 variant 切换连接或独立方块布局。'
    ),
  },
];

componentDocumentation['input-number'].summary = docsCopy(
  '输入、格式化并通过键盘或步进按钮精确调整数值。'
);
componentDocumentation['input-number'].whenToUse = [
  docsCopy('录入数量、金额、百分比或具有明确步长和边界的数值。'),
  docsCopy('需要保留原始 number 值，同时按语言区域格式化显示内容。'),
];
componentDocumentation['input-number'].parts = [
  {
    name: 'Input.Number',
    description: docsCopy('组合可编辑数值输入、格式化逻辑和可选的增减按钮。'),
  },
];
componentDocumentation['input-number'].accessibility = [
  docsCopy(
    '为独立使用的数字输入提供标签或 aria-label；Form.Field 会自动建立标签与说明关联。'
  ),
  docsCopy(
    '方向键按 step 调整，Alt 和 Shift 分别使用 smallStep 与 largeStep。'
  ),
  docsCopy('增减按钮保持可访问名称，并在到达边界时自动禁用。'),
];
componentDocumentation['input-number'].pitfalls = [
  docsCopy(
    '不要把格式化后的字符串存入业务状态；onChange 已返回原始 number 或 null。'
  ),
  docsCopy(
    '金额和精度要求较高的场景应明确 format 与 step，并在业务层处理十进制定点规则。'
  ),
  docsCopy('只需要范围内粗略选择时优先使用 Slider。'),
];

componentDocumentation.form.summary = docsCopy(
  '通过 Form.Field 统一连接数据录入组件、校验状态和提交行为。'
);
componentDocumentation.form.whenToUse = [
  docsCopy('使用统一方式组织标签、控件、说明和错误信息。'),
  docsCopy('让内置数据录入组件自动连接字段值、校验状态和提交行为。'),
  docsCopy('监听字段或派生值，并根据变化更新关联字段和界面。'),
];
componentDocumentation.form.parts = [
  {
    name: 'Form',
    description: docsCopy('渲染原生表单并连接 Form.useForm 实例。'),
  },
  {
    name: 'Form.useForm',
    description: docsCopy('创建类型化表单实例并管理完整表单状态。'),
  },
  {
    name: 'Form.useWatch',
    description: docsCopy('精确订阅字段或派生值，并隔离当前组件的重渲染。'),
  },
  {
    name: 'Form.useFormInstance',
    description: docsCopy('在 Form 后代组件中读取当前表单实例。'),
  },
  {
    name: 'Form.Field',
    description: docsCopy('自动绑定内置控件，并组织标签、说明和校验错误。'),
  },
];

componentDocumentation.checkbox.summary = docsCopy(
  '使用 Checkbox 标记单个可提交选择，并通过 Checkbox.Group 管理多选值。'
);
componentDocumentation.checkbox.whenToUse = [
  docsCopy('独立状态需要用户确认后再随表单提交。'),
  docsCopy('一组可见选项允许同时选中多个值。'),
];
componentDocumentation.checkbox.parts = [
  {
    name: 'Checkbox',
    description: docsCopy('同时承载选中控件、可点击标签与单个布尔状态。'),
  },
  {
    name: 'Checkbox.Group',
    description: docsCopy('管理多个 Checkbox 的已选值、禁用状态与布局。'),
  },
];

componentDocumentation.radio.summary = docsCopy(
  '使用 Radio 表达单个选项，并通过 Radio.Group 组织互斥选择。'
);
componentDocumentation.radio.whenToUse = [
  docsCopy('候选项较少，并希望用户直接看到、比较所有选项。'),
  docsCopy('一组选项只允许选中一个值。'),
];
componentDocumentation.radio.parts = [
  { name: 'Radio', description: docsCopy('表达单个可选项及其选中状态。') },
  {
    name: 'Radio.Group',
    description: docsCopy('管理一组 Radio 的互斥值、键盘导航与布局。'),
  },
];

componentDocumentation.toggle.summary = docsCopy(
  '使用 Toggle 切换单个工具状态，并通过 Toggle.Group 管理单选或多选工具组。'
);
componentDocumentation.toggle.whenToUse = [
  docsCopy('工具栏中的一个状态需要立即开启或关闭。'),
  docsCopy('一组紧密相关的工具需要共享单选或多选状态与键盘导航。'),
];
componentDocumentation.toggle.parts = [
  {
    name: 'Toggle',
    description: docsCopy('表达单个可按下、可释放的工具状态。'),
  },
  {
    name: 'Toggle.Group',
    description: docsCopy(
      '通过 items props 渲染选项，并管理选择值、排列方向和键盘导航。'
    ),
  },
];

componentDocumentation.select.summary = docsCopy(
  '从固定候选项中选择一个或多个值，并使用同一套交互直接过滤较长列表。'
);
componentDocumentation.select.whenToUse = [
  docsCopy(
    '候选项固定时使用 Select；列表较长时直接输入关键词过滤，无需切换组件。'
  ),
  docsCopy('需要分组、禁用项、多选或自定义弹出层时组合 Select 的对应子组件。'),
];
componentDocumentation.select.parts = [
  {
    name: 'Select',
    description: docsCopy(
      '通过 options、value、onChange 与搜索相关 props 管理完整选择交互。'
    ),
  },
];

const replaceExampleCodes = (slug: string, codes: readonly string[]) => {
  codes.forEach((code, index) => {
    const example = componentDocumentation[slug]?.examples[index];
    if (example) example.code = code;
  });
};

replaceExampleCodes('navigation-menu', [
  docsCopy(`import { NavigationMenu } from '@heliannuuthus/ui'

<NavigationMenu
  items={[
    {
      label: '产品',
      content: ({ Link }) => (
        <div>
          <Link href="/components">组件库</Link>
          <Link href="/tokens">设计令牌</Link>
        </div>
      ),
    },
    { label: '组件', href: '/components', active: true },
  ]}
/>`),
  docsCopy(`import { NavigationMenu } from '@heliannuuthus/ui'

<NavigationMenu
  align="end"
  items={[
    { label: '产品', content: ({ Link }) => <Link href="/components">组件库</Link> },
    { label: '组件', href: '/components' },
  ]}
/>`),
]);

replaceExampleCodes('pagination', [
  `import { Pagination } from '@heliannuuthus/ui'

<Pagination current={page} pageCount={5} onChange={setPage} />`,
  docsCopy(`import { Pagination } from '@heliannuuthus/ui'

<Pagination
  align="start"
  boundaries={2}
  siblings={1}
  current={24}
  total={2480}
  pageSize={20}
  onChange={setPage}
  onPageSizeChange={(page, size) => {
    setPage(page)
    setPageSize(size)
  }}
  pageSizeOptions={[10, 20, 50, 100]}
  pageSizeLabel={(size) => \`\${size} 条 / 页\`}
  showTotal={(total, range) => \`\${range[0]}–\${range[1]} / \${total} 项\`}
  showSizeChanger
  showQuickJumper={{ goButton: '跳转', label: '跳至', suffix: '页' }}
  first
  last
  previous="上一页"
  next="下一页"
  showTitle
  getItemAriaLabel={({ page }) => \`Page \${page}\`}
  getItemHref={(page) => \`#page-\${page}\`}
  renderItem={({ originalElement }) => originalElement}
  classNames={{ summary: 'font-medium' }}
  styles={{ summary: { minWidth: 120 } }}
/>`),
]);

replaceExampleCodes('tabs', [
  docsCopy(`import { Tabs } from '@heliannuuthus/ui'

<Tabs
  defaultValue="overview"
  items={[
    { value: 'overview', label: '概览', content: <Overview /> },
    { value: 'activity', label: '动态', content: <Activity /> },
    { value: 'members', label: '成员', content: <Members /> },
  ]}
/>`),
  docsCopy(`import { Tabs } from '@heliannuuthus/ui'

<Tabs
  defaultValue="preview"
  variant="line"
  centered
  items={[
    { value: 'preview', label: '预览', content: '实时预览当前组件。' },
    { value: 'code', label: '代码', content: '查看组件实现代码。' },
  ]}
/>`),
  docsCopy(`import { Tabs } from '@heliannuuthus/ui'

<Tabs
  animation="slide"
  defaultValue="design"
  items={[
    { value: 'design', label: '设计', content: <Design /> },
    { value: 'code', label: '开发', content: <Development /> },
  ]}
/>`),
]);

replaceExampleCodes('alert', [
  docsCopy(`import { Alert } from '@heliannuuthus/ui'

<Alert
  variant="warning"
  icon={<TriangleAlert />}
  title="回滚镜像即将过期"
  description="建议在发布前重新构建。"
  action={<Button onClick={close}>关闭</Button>}
/>`),
]);

replaceExampleCodes('select', [
  docsCopy(`import { Select } from '@heliannuuthus/ui'

<Select
  value={value}
  onChange={setValue}
  placeholder="搜索成员…"
  showClear
  emptyText="没有找到成员"
  options={members.map((member) => ({ label: member, value: member }))}
/>`),
  docsCopy(`import { Select } from '@heliannuuthus/ui'

<Select
  value={value}
  onChange={setValue}
  placeholder="选择工作区"
  options={groups.map((group) => ({
    label: group.label,
    options: group.items.map((item) => ({
      label: item.label,
      value: item,
      disabled: item.disabled,
    })),
  }))}
/>`),
]);

replaceExampleCodes('alert-dialog', [
  docsCopy(`import { AlertDialog } from '@heliannuuthus/ui'

<AlertDialog
  trigger={<Button variant="destructive">删除预览环境</Button>}
  title="删除 preview-142？"
  description="此操作无法撤销。"
  cancelText="保留环境"
  confirmText="确认删除"
  confirmVariant="destructive"
/>`),
]);

replaceExampleCodes('dialog', [
  docsCopy(`import { Button, Dialog } from '@heliannuuthus/ui'
import { CircleX } from 'lucide-react'

<Dialog
  trigger={<Button>安排发布</Button>}
  title="安排生产环境发布"
  description="选择版本和发布时间。"
  cancelText="取消"
  confirmText="确认安排"
>
  <ReleaseForm />
</Dialog>`),
]);

replaceExampleCodes('drawer', [
  docsCopy(`import { Drawer } from '@heliannuuthus/ui'

<Drawer
  behavior="adaptive"
  side="right"
  trigger={<Button>从右侧打开</Button>}
  title="今晚的发布窗口"
  description="22:00–23:00"
  closeText="关闭"
>
  <ReleaseList />
</Drawer>`),
  docsCopy(`import { Drawer } from '@heliannuuthus/ui'

<Drawer
  behavior="panel"
  container={containerRef}
  side="left"
  trigger={<Button>从左侧打开</Button>}
  title="局部筛选"
>
  <Filters />
</Drawer>`),
]);

replaceExampleCodes('popover', [
  docsCopy(`import { Button, Popover } from '@heliannuuthus/ui'

<Popover
  trigger={<Button>3 位负责人</Button>}
  title="发布负责人"
  description="发布和回滚时会通知这些成员。"
  content={<OwnerList />}
/>`),
  `import { Button, Popover } from '@heliannuuthus/ui'

<Popover
  triggerMode="hover"
  trigger={<Button variant="link">@linmo</Button>}
  content={<OwnerProfile />}
/>`,
]);

replaceExampleCodes('progress', [
  docsCopy(`import { Progress } from '@heliannuuthus/ui'

<Progress effect="sparkle" value={68} label="生产环境" showValue />`),
]);

replaceExampleCodes('layout', [
  docsCopy(`import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout.Header>项目导航</Layout.Header>
  <Layout.Content>页面内容</Layout.Content>
  <Layout.Footer>页脚信息</Layout.Footer>
</Layout>`),
  docsCopy(`import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout.Sidebar width={240}>项目导航</Layout.Sidebar>
  <Layout.Content>工作区内容</Layout.Content>
</Layout>`),
  docsCopy(`import { Layout } from '@heliannuuthus/ui'

<Layout>
  <Layout.Content>工作区内容</Layout.Content>
  <Layout.Sidebar width={280}>详情面板</Layout.Sidebar>
</Layout>`),
]);

replaceExampleCodes('table', [
  docsCopy(`import { Table } from '@heliannuuthus/ui'
import { Button } from '@heliannuuthus/ui'

<Table.Primitive>
  <Table.Header>
    <Table.Row>
      <Table.Head>服务</Table.Head>
      <Table.Head align="center">操作</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Web Console</Table.Cell>
      <Table.Cell align="center">
        <Button
          aria-label="查看 Web Console"
          size="xs"
          variant="ghost"
        >
          查看
        </Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Row><Table.Cell colSpan={2}>共 1 项</Table.Cell></Table.Row>
  </Table.Footer>
</Table.Primitive>`),
]);

replaceExampleCodes('checkbox', [
  componentDocumentation.checkbox.examples[0]?.code ?? '',
  docsCopy(`import { Checkbox } from '@heliannuuthus/ui'

<Checkbox.Group
  defaultValue={['read']}
  onChange={setPermissions}
  options={[
    { label: '读取', value: 'read' },
    { label: '编辑', value: 'write' },
    { label: '管理', value: 'admin' },
  ]}
/>`),
]);

replaceExampleCodes('radio', [
  componentDocumentation.radio.examples[0]?.code ?? '',
  docsCopy(`import { Radio } from '@heliannuuthus/ui'

<Radio.Group
  value={delivery}
  onChange={setDelivery}
  options={[
    { label: '邮件通知', value: 'email' },
    { label: '站内通知', value: 'inbox' },
  ]}
/>`),
  `import { Radio } from '@heliannuuthus/ui'

<Radio.Group
  value={plan}
  onChange={setPlan}
  orientation="vertical"
  options={plans.map((plan) => ({
    className: 'plan-card',
    label: <PlanSummary {...plan} />,
    value: plan.value,
  }))}
/>`,
]);

replaceExampleCodes('toggle', [
  componentDocumentation.toggle.examples[0]?.code ?? '',
  docsCopy(`import { Toggle } from '@heliannuuthus/ui'

<Toggle.Group
  defaultValue={['bold']}
  items={[
    { value: 'bold', label: <Bold />, 'aria-label': '粗体' },
    { value: 'italic', label: <Italic />, 'aria-label': '斜体' },
  ]}
/>`),
]);

const propsOnlySlugs = [
  'accordion',
  'alert',
  'alert-dialog',
  'carousel',
  'collapsible',
  'command',
  'context-menu',
  'dialog',
  'drawer',
  'dropdown-menu',
  'empty',
  'menubar',
  'navigation-menu',
  'pagination',
  'popover',
  'progress',
  'select',
  'tabs',
  'tooltip',
] as const;

for (const slug of propsOnlySlugs) {
  const documentation = componentDocumentation[slug];
  if (!documentation) continue;
  documentation.parts = [
    {
      name: documentation.name,
      description: docsCopy('通过主组件 props 配置内容、状态、行为和扩展点。'),
    },
  ];
  documentation.api = documentation.api
    .filter(
      (property) =>
        property.component == null ||
        property.component === documentation.name ||
        documentation.typeDefinitionGroups?.includes(property.component)
    )
    .map((property) =>
      documentation.typeDefinitionGroups?.includes(property.component ?? '')
        ? property
        : { ...property, component: undefined }
    );
}

componentDocumentation.avatar.parts = [
  {
    name: 'Avatar',
    description: docsCopy('通过图片、回退内容和 badge props 展示头像。'),
  },
  {
    name: 'Avatar.Group',
    description: docsCopy('通过 items、max 与 overlap 展示头像集合。'),
  },
];
componentDocumentation.attachment.parts = [
  {
    name: 'Attachment',
    description: docsCopy('通过标题、说明、媒体和操作 props 展示单个附件。'),
  },
  {
    name: 'Attachment.Group',
    description: docsCopy('通过 items props 展示附件集合。'),
  },
];
componentDocumentation.attachment.api = [
  {
    name: 'title',
    description: docsCopy('设置附件名称。'),
    type: 'ReactNode',
    required: true,
  },
  {
    name: 'description',
    description: docsCopy('设置文件大小、处理状态或错误原因等辅助说明。'),
    type: 'ReactNode',
  },
  {
    name: 'media',
    description: docsCopy('设置文件类型图标或缩略图。'),
    type: 'ReactNode',
  },
  {
    name: 'mediaType',
    description: docsCopy('声明媒体内容是图标还是图片。'),
    type: "'icon' | 'image'",
    defaultValue: "'icon'",
  },
  {
    name: 'actions',
    description: docsCopy('设置与附件直接相关的下载、重试或移除操作。'),
    type: 'ReactNode',
  },
  {
    name: 'trigger',
    description: docsCopy('传入链接或按钮元素，使整个附件成为对应触发区域。'),
    type: 'ReactElement',
  },
  {
    name: 'orientation',
    description: docsCopy('切换行式附件或纵向缩略附件。'),
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
  },
  {
    name: 'size',
    description: docsCopy('设置附件的整体密度。'),
    type: "'xs' | 'sm' | 'default'",
    defaultValue: "'default'",
  },
  {
    name: 'state',
    description: docsCopy('表达附件当前处理阶段并驱动状态样式。'),
    type: "'idle' | 'uploading' | 'processing' | 'error' | 'done'",
    defaultValue: "'done'",
  },
  {
    component: 'Attachment.Group',
    name: 'items',
    description: docsCopy('通过配置数组渲染一组 Attachment。'),
    type: 'readonly AttachmentGroupItem[]',
    required: true,
  },
];
componentDocumentation.bubble.parts = [
  {
    name: 'Bubble',
    description: docsCopy(
      '通过 content、reactions、align 与 variant 配置气泡。'
    ),
  },
  { name: 'Bubble.Group', description: docsCopy('排列一组消息气泡。') },
];
componentDocumentation.bubble.api = [
  {
    name: 'content',
    description: docsCopy('设置气泡中的消息内容。'),
    type: 'ReactNode',
    required: true,
  },
  {
    name: 'contentProps',
    description: docsCopy(
      '向内部内容 div 传递标准 HTML、ARIA、data 属性和事件。'
    ),
    type: 'ComponentProps<"div"> & DataAttributes',
  },
  {
    name: 'reactions',
    description: docsCopy('设置回应、已读状态或其他边缘内容。'),
    type: 'ReactNode',
  },
  {
    name: 'reactionsProps',
    description: docsCopy('控制回应内容的边缘位置并扩展容器属性。'),
    type: 'BubbleReactionsProps',
  },
  {
    name: 'variant',
    description: docsCopy('设置消息气泡的强调与语义外观。'),
    type: "'default' | 'secondary' | 'muted' | 'elevated' | 'tinted' | 'outline' | 'ghost' | 'destructive'",
    defaultValue: "'default'",
  },
  {
    name: 'align',
    description: docsCopy('将气泡对齐到消息流起始侧或末尾侧。'),
    type: "'start' | 'end'",
    defaultValue: "'start'",
  },
];
componentDocumentation.avatar.api = [
  {
    name: 'alt',
    description: docsCopy('为头像图片和默认回退文字提供可访问名称。'),
    type: 'string',
    required: true,
  },
  {
    name: 'src',
    description: docsCopy('设置头像图片资源地址。'),
    type: 'string',
  },
  {
    name: 'fallback',
    description: docsCopy('设置图片不可用时显示的姓名缩写或图标。'),
    type: 'ReactNode',
  },
  {
    name: 'fallbackProps',
    description: docsCopy('配置回退内容的延迟显示和原生 span 属性。'),
    type: 'AvatarFallbackProps',
  },
  {
    name: 'imageProps',
    description: docsCopy('配置头像图片的加载状态回调和原生 img 属性。'),
    type: 'AvatarImageProps',
  },
  {
    name: 'badge',
    description: docsCopy('在头像右下角展示在线、认证等状态节点。'),
    type: 'ReactNode',
  },
  {
    name: 'shape',
    description: docsCopy('设置圆形头像或圆角方形头像。'),
    type: "'circle' | 'square'",
    defaultValue: "'circle'",
  },
  {
    name: 'size',
    description: docsCopy('设置头像尺寸，并同步 AvatarBadge 与分组计数。'),
    type: "'sm' | 'default' | 'lg'",
    defaultValue: "'default'",
  },
  {
    component: 'Avatar.Group',
    name: 'items',
    description: docsCopy('配置头像集合及每个项目的稳定 key。'),
    type: 'readonly AvatarGroupItem[]',
    required: true,
  },
  {
    component: 'Avatar.Group',
    name: 'max',
    description: docsCopy('限制可见头像数量，并自动将剩余数量显示为 +N。'),
    type: 'number',
  },
  {
    component: 'Avatar.Group',
    name: 'overlap',
    description: docsCopy('使用像素值控制相邻头像的重叠程度。'),
    type: 'number',
    defaultValue: '8',
  },
  {
    component: 'Avatar.Group',
    name: 'renderCount',
    description: docsCopy('自定义剩余数量的呈现方式。'),
    type: '(count: number) => ReactNode',
  },
  {
    component: 'Avatar.Group',
    name: 'shape',
    description: docsCopy('为组内头像和自动计数项设置统一形状。'),
    type: "'circle' | 'square'",
  },
  {
    component: 'Avatar.Group',
    name: 'size',
    description: docsCopy('为组内头像和自动计数项设置统一尺寸。'),
    type: "'sm' | 'default' | 'lg'",
  },
];
componentDocumentation.checkbox.parts = [
  { name: 'Checkbox', description: docsCopy('表达单个布尔选择。') },
  {
    name: 'Checkbox.Group',
    description: docsCopy('通过 options props 管理多个选择值。'),
  },
];
componentDocumentation.radio.parts = [
  { name: 'Radio', description: docsCopy('表达单个互斥选项。') },
  {
    name: 'Radio.Group',
    description: docsCopy('通过 options props 管理互斥选择。'),
  },
];
componentDocumentation.toggle.summary = docsCopy(
  '使用 Toggle 切换单个工具状态，并通过 Toggle.Group 管理工具组选项。'
);
componentDocumentation.toggle.parts = [
  {
    name: 'Toggle',
    description: docsCopy('表达单个可按下、可释放的工具状态。'),
  },
  {
    name: 'Toggle.Group',
    description: docsCopy('通过 items props 管理单选或多选工具组。'),
  },
];
componentDocumentation.checkbox.summary = docsCopy(
  '使用 Checkbox 标记单个可提交选择，并通过 Checkbox.Group 管理多选值。'
);
componentDocumentation.radio.summary = docsCopy(
  '使用 Radio 表达单个选项，并通过 Radio.Group 组织互斥选择。'
);
for (const slug of ['checkbox', 'radio', 'toggle'] as const) {
  const prefix = `${componentDocumentation[slug].name}.Group`;
  componentDocumentation[slug].api = componentDocumentation[slug].api.map(
    (property) => ({
      ...property,
      component: property.component === 'Group' ? prefix : property.component,
      description: property.description
        .split(docsCopy('独立导出的 Group'))
        .join(prefix),
    })
  );
}

componentDocumentation.item.parts = [
  {
    name: 'Item',
    description: docsCopy(
      '通过 media、title、description、content、actions、header 与 footer props 配置列表项。'
    ),
  },
  {
    name: 'Item.Group',
    description: docsCopy(
      '通过 items props 渲染一组 Item，并可插入统一分隔内容。'
    ),
  },
];
componentDocumentation.item.api = [
  {
    name: 'variant',
    description: docsCopy('设置列表项的默认、描边或柔和外观。'),
    type: "'default' | 'outline' | 'muted'",
    defaultValue: "'default'",
  },
  {
    name: 'size',
    description: docsCopy('设置列表项内容密度。'),
    type: "'xs' | 'sm' | 'default'",
    defaultValue: "'default'",
  },
  {
    name: 'href',
    description: docsCopy(
      '传入链接地址后使用原生 a 元素，否则渲染为普通 div。'
    ),
    type: 'string',
  },
  {
    name: 'media',
    description: docsCopy('设置列表项起始侧的媒体内容。'),
    type: 'ReactNode',
  },
  {
    name: 'mediaType',
    description: docsCopy('声明媒体内容是普通内容、图标还是图片。'),
    type: "'default' | 'icon' | 'image'",
    defaultValue: "'default'",
  },
  {
    name: 'title',
    description: docsCopy('设置列表项的主要标题。'),
    type: 'ReactNode',
  },
  {
    name: 'description',
    description: docsCopy('设置列表项的辅助说明。'),
    type: 'ReactNode',
  },
  {
    name: 'content',
    description: docsCopy('在标题和说明之外添加自定义内容。'),
    type: 'ReactNode',
  },
  {
    name: 'actions',
    description: docsCopy('设置列表项末尾的相关操作。'),
    type: 'ReactNode',
  },
  {
    name: 'header',
    description: docsCopy('添加横跨整行的前置内容。'),
    type: 'ReactNode',
  },
  {
    name: 'footer',
    description: docsCopy('添加横跨整行的后置内容。'),
    type: 'ReactNode',
  },
  {
    name: 'classNames',
    description: docsCopy('按语义槽位扩展列表项内部样式。'),
    type: 'ItemClassNames',
  },
  {
    component: 'Item.Group',
    name: 'items',
    description: docsCopy('配置一组列表项及每个项目的稳定 key。'),
    type: 'readonly ItemGroupEntry[]',
    required: true,
  },
  {
    component: 'Item.Group',
    name: 'renderItem',
    description: docsCopy('根据当前项目和索引完全自定义列表项渲染。'),
    type: '(item: ItemGroupEntry, index: number) => ReactNode',
  },
  {
    component: 'Item.Group',
    name: 'separator',
    description: docsCopy('在相邻列表项之间显示默认分隔线或自定义内容。'),
    type: 'boolean | ReactNode',
    defaultValue: 'false',
  },
];
componentDocumentation.item.whenToUse = [
  docsCopy('展示成员、动态、文件、设置等具有一致骨架的行级内容。'),
  docsCopy('需要组合媒体、主次文字、尾部操作或跨行元数据时使用。'),
];
componentDocumentation.item.accessibility = [
  docsCopy(
    'Item.Group 默认提供列表与列表项语义；使用 renderItem 时需要保留等价语义。'
  ),
  docsCopy(
    '整行需要跳转时传入 href；行内已有按钮或开关时不要再把整行设为链接。'
  ),
];
componentDocumentation.item.pitfalls = [
  docsCopy('不要只为比较 variant 创建脱离业务上下文的重复列表。'),
  docsCopy('不要在一个列表项中堆叠过多操作；保留一个主要操作，其余收进菜单。'),
];
componentDocumentation.marker.parts = [
  {
    name: 'Marker',
    description: docsCopy('通过 icon、content 与 variant props 配置内容标记。'),
  },
];
componentDocumentation.marker.api = [
  {
    name: 'content',
    description: docsCopy('设置可换行的标记文字或链接。'),
    type: 'ReactNode',
    required: true,
  },
  {
    name: 'icon',
    description: docsCopy('设置装饰性状态图标并自动隐藏可访问语义。'),
    type: 'ReactNode',
  },
  {
    name: 'variant',
    description: docsCopy('选择纯文本、两侧分隔线或下边框标记。'),
    type: "'default' | 'separator' | 'border'",
    defaultValue: "'default'",
  },
  {
    name: 'href',
    description: docsCopy(
      '传入链接地址后使用原生 a 元素，否则渲染为普通 div。'
    ),
    type: 'string',
  },
  {
    name: 'classNames',
    description: docsCopy('分别扩展图标与内容槽位样式。'),
    type: 'MarkerClassNames',
  },
];
componentDocumentation.marker.whenToUse = [
  docsCopy('在连续内容中标记日期、未读边界、状态切换或可跳转位置。'),
  docsCopy('需要一条带文字或图标的轻量分隔规则时使用。'),
];
componentDocumentation.marker.accessibility = [
  docsCopy('装饰性图标会自动从辅助技术中隐藏，状态含义必须同时写入 content。'),
  docsCopy('需要跳转时传入 href，让组件保留原生链接语义和键盘操作。'),
];
componentDocumentation.marker.pitfalls = [
  docsCopy('不要用 Marker 表达具有节点、连接线和顺序关系的完整时间线。'),
  docsCopy('不要用颜色或图标单独表达状态，也不要把长段说明塞进标记文字。'),
];
componentDocumentation.empty.api = componentDocumentation.empty.api.filter(
  (property) =>
    property.name !== 'variant' && !property.name.startsWith('Empty')
);
componentDocumentation.alert.api = componentDocumentation.alert.api.filter(
  (property) => !property.name.startsWith('Alert')
);
componentDocumentation.select.whenToUse = [
  docsCopy('候选项固定时使用 Select；列表较长时直接输入关键词过滤。'),
  docsCopy(
    '通过 options 提供平铺或分组候选项，通过受控或非受控 props 管理选择。'
  ),
];
componentDocumentation.select.api = componentDocumentation.select.api
  .filter((property) => !property.name.startsWith('Select'))
  .map((property) => ({
    ...property,
    name: property.name === 'items' ? 'options' : property.name,
    component:
      property.component === 'SelectTrigger' ? undefined : property.component,
  }));

const inputBasicExample = componentDocumentation.input.examples[0];
if (inputBasicExample) {
  inputBasicExample.title = docsCopy('基础输入');
  inputBasicExample.description = docsCopy(
    '使用标签说明输入目的，并保持默认、悬停和聚焦状态清晰可辨。'
  );
  inputBasicExample.code = `import { Input } from '@heliannuuthus/ui'

<Input type="email" placeholder="name@example.com" />`;
  inputBasicExample.wide = false;
  inputBasicExample.previewHeight = 280;
}

const toggleBasicExample = componentDocumentation.toggle.examples[0];
if (toggleBasicExample) {
  toggleBasicExample.title = docsCopy('非受控状态');
  toggleBasicExample.description = docsCopy(
    '使用 defaultValue 提供初始状态，后续状态由 Toggle 自身管理。'
  );
  toggleBasicExample.code = docsCopy(`import { Toggle } from '@heliannuuthus/ui'

<Toggle defaultValue aria-label="切换粗体">
  <Bold />
  粗体
</Toggle>`);
  toggleBasicExample.previewHeight = 300;
}

componentDocumentation.checkbox.examples.push({
  title: docsCopy('选择状态'),
  description: docsCopy(
    '选中时以向外爆开的粒子确认操作，取消选中时仅收回勾选标记；同时展示不确定和禁用状态。'
  ),
  preview: (
    <div className="example-row">
      <Checkbox className="minimal-control">{docsCopy('未选择')}</Checkbox>
      <Checkbox className="minimal-control" defaultChecked>
        {docsCopy('已选择')}
      </Checkbox>
      <Checkbox className="minimal-control" indeterminate>
        {docsCopy('部分选择')}
      </Checkbox>
      <Checkbox className="minimal-control" disabled>
        {docsCopy('不可用')}
      </Checkbox>
    </div>
  ),
  code: docsCopy(
    `import { Checkbox } from '@heliannuuthus/ui'\n\n<Checkbox>未选择</Checkbox>\n<Checkbox defaultChecked>已选择</Checkbox>\n<Checkbox indeterminate>部分选择</Checkbox>\n<Checkbox disabled>不可用</Checkbox>`
  ),
});

const publicWrapperApi: Partial<Record<string, ApiProperty[]>> = {
  accordion: [
    {
      name: 'items',
      description: docsCopy(
        '配置每个面板的 value、title、content 与禁用状态。'
      ),
      type: 'readonly AccordionItem[]',
    },
    {
      component: 'AccordionItem',
      name: 'value',
      description: docsCopy('设置条目的唯一标识，并用于受控展开值。'),
      type: 'string',
      required: true,
    },
    {
      component: 'AccordionItem',
      name: 'title',
      description: docsCopy('设置触发按钮中显示的标题内容。'),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'AccordionItem',
      name: 'content',
      description: docsCopy('设置条目展开后显示的面板内容。'),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'AccordionItem',
      name: 'disabled',
      description: docsCopy('仅禁用当前条目的展开与收起交互。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'value',
      description: docsCopy('以受控或非受控方式指定当前展开项。'),
      type: 'string[]',
    },
    {
      name: 'defaultValue',
      description: docsCopy('以受控或非受控方式指定当前展开项。'),
      type: 'string[]',
    },
    {
      name: 'onChange',
      description: docsCopy('展开项变化时回传完整 value 数组。'),
      type: '(value: string[]) => void',
    },
    {
      name: 'multiple',
      description: docsCopy('允许同时展开多个条目。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'disabled',
      description: docsCopy('禁用整个 Accordion 的所有条目。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'indicator',
      description: docsCopy(
        '设置 Accordion.Indicator；省略时使用位于末端、随展开状态旋转的默认箭头，传入 null 时隐藏。'
      ),
      type: 'ReactElement<AccordionIndicatorProps> | null',
      defaultValue: '<Accordion.Indicator />',
    },
    {
      component: 'Accordion.Indicator',
      name: 'children',
      description: docsCopy(
        '传入静态节点时随展开状态旋转；传入状态函数时接收 open、disabled 与 value，并完全控制展示内容。'
      ),
      type: 'ReactNode | ((state: AccordionIndicatorState) => ReactNode)',
    },
    {
      component: 'Accordion.Indicator',
      name: 'position',
      description: docsCopy('将指示器放在标题起始侧或末端。'),
      type: "'start' | 'end'",
      defaultValue: "'end'",
    },
    {
      name: 'keepMounted',
      description: docsCopy(
        '关闭面板后仍保留其 DOM，适合保留内部状态；不能与 hiddenUntilFound 同时使用。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'hiddenUntilFound',
      description: docsCopy(
        '通过 hidden="until-found" 保留关闭面板，使浏览器页内查找可以定位并展开内容；不能与 keepMounted 同时使用。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  alert: [
    ...['title', 'description', 'icon'].map((name) => ({
      name,
      description: docsCopy('设置提示标题、补充说明和语义图标。'),
      type: 'ReactNode',
    })),
    {
      name: 'action',
      description: docsCopy('放置与当前提示直接相关的查看、重试或关闭操作。'),
      type: 'ReactNode',
    },
    {
      name: 'variant',
      description: docsCopy('设置提示的语义状态。'),
      type: "'default' | 'info' | 'success' | 'warning' | 'error' | 'destructive'",
      defaultValue: "'default'",
    },
  ],
  'alert-dialog': [
    {
      name: 'trigger',
      description: docsCopy('打开确认对话框的按钮或其他交互元素。'),
      type: 'ReactElement',
    },
    ...['title', 'description', 'media'].map((name) => ({
      name,
      description: docsCopy('设置确认事项、后果说明和辅助图标。'),
      type: 'ReactNode',
    })),
    ...[
      { name: 'confirmText', type: 'ReactNode' },
      { name: 'cancelText', type: 'ReactNode' },
      { name: 'confirmVariant', type: 'ButtonProps["variant"]' },
    ].map((property) => ({
      ...property,
      description: docsCopy('设置确认与取消操作的文字和确认按钮样式。'),
    })),
    {
      name: 'onConfirm',
      description: docsCopy('用户确认操作时调用。'),
      type: '() => void',
    },
    ...[
      { name: 'open', type: 'boolean' },
      { name: 'defaultOpen', type: 'boolean', defaultValue: 'false' },
      { name: 'onOpenChange', type: '(open: boolean) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理打开状态。'),
    })),
  ],
  carousel: [
    {
      name: 'items',
      description: docsCopy('提供轮播数据或直接渲染的节点列表。'),
      type: 'readonly Item[]',
      required: true,
    },
    {
      name: 'renderItem',
      description: docsCopy('根据当前数据项和索引渲染轮播内容。'),
      type: '(item: Item, index: number) => ReactNode',
    },
    {
      name: 'controls',
      description: docsCopy('是否显示上一页与下一页按钮。'),
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      name: 'previousButtonProps',
      description: docsCopy('配置上一页按钮的外观、可访问名称和原生属性。'),
      type: 'ButtonNativeProps',
    },
    {
      name: 'nextButtonProps',
      description: docsCopy('配置下一页按钮的外观、可访问名称和原生属性。'),
      type: 'ButtonNativeProps',
    },
    {
      name: 'pagination',
      description: docsCopy(
        '使用默认点位、关闭分页，或通过函数自定义完整翻页器。'
      ),
      type: "false | 'dots' | ((controls: CarouselControls) => ReactNode)",
      defaultValue: "'dots'",
    },
    {
      name: 'paginationPosition',
      description: docsCopy('将分页内容放在轮播轨道之前或之后。'),
      type: "'before' | 'after'",
      defaultValue: "'after'",
    },
    {
      name: 'renderDot',
      description: docsCopy('根据点位索引和选中状态自定义分页点。'),
      type: '(props: CarouselDotRenderProps) => ReactNode',
    },
    {
      name: 'autoplay',
      description: docsCopy(
        '传 true 以默认 3 秒间隔自动播放，或直接传入正数设置切换秒数。'
      ),
      type: 'boolean | number',
      defaultValue: 'false',
    },
    {
      name: 'loop',
      description: docsCopy(
        '让最后一项与第一项首尾相接；自动播放跨越首尾时始终沿下一页方向继续。'
      ),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'pauseOnHover',
      description: docsCopy('自动播放时，指针进入轮播区域即暂停，离开后继续。'),
      type: 'boolean',
      defaultValue: 'true',
    },
    {
      name: 'ref',
      description: docsCopy(
        '从 Carousel 外部滚动、播放或暂停；底层轮播实例不会暴露。'
      ),
      type: 'React.Ref<CarouselRef>',
    },
  ],
  collapsible: [
    {
      name: 'header',
      description: docsCopy(
        '设置始终可见的摘要内容；未传 trigger 时，整个 Header 同时作为触发器。'
      ),
      type: 'ReactNode',
    },
    {
      name: 'content',
      description: docsCopy('设置展开后显示的内容。'),
      type: 'ReactNode',
      required: true,
    },
    {
      name: 'footer',
      description: docsCopy('设置内容区域后的可选底部信息或操作。'),
      type: 'ReactNode',
    },
    {
      name: 'trigger',
      description: docsCopy(
        '设置独立触发按钮的内容；传入后 Header 保持静态，不再响应展开操作。'
      ),
      type: 'ReactNode',
    },
    {
      name: 'triggerProps',
      description: docsCopy('设置独立触发按钮的外观、尺寸和原生触发器属性。'),
      type: 'CollapsibleTriggerProps',
    },
    {
      name: 'indicator',
      description: docsCopy(
        '统一设置 Header 或独立触发按钮的状态图标；true 使用默认图标，false 隐藏，也可传入自定义节点。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'true',
    },
    {
      name: 'open',
      description: docsCopy('以受控方式设置当前展开状态。'),
      type: 'boolean',
    },
    {
      name: 'defaultOpen',
      description: docsCopy('设置非受控模式的初始展开状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'onOpenChange',
      description: docsCopy('用户展开或收起内容时调用。'),
      type: '(open: boolean, eventDetails) => void',
    },
    {
      name: 'disabled',
      description: docsCopy('阻止触发器改变展开状态。'),
      type: 'boolean',
      defaultValue: 'false',
    },
  ],
  command: [
    {
      name: 'groups',
      description: docsCopy(
        '配置一组或多组命令；每组通过 heading 和 options 描述内容。'
      ),
      type: 'readonly CommandGroup[]',
    },
    {
      name: 'dialog',
      description: docsCopy(
        '传入 Dialog 配置后把命令列表放入模态层，并配置触发器、标题、说明及打开状态；省略时渲染内联列表。'
      ),
      type: 'Omit<DialogProps, "children">',
    },
    {
      name: 'placeholder',
      description: docsCopy('设置搜索输入框没有内容时显示的提示。'),
      type: 'string',
      defaultValue: docsCopy('搜索命令…'),
    },
    {
      name: 'emptyText',
      description: docsCopy('设置过滤后没有匹配命令时显示的内容。'),
      type: 'ReactNode',
      defaultValue: docsCopy('没有找到命令'),
    },
    {
      name: 'inputProps',
      description: docsCopy(
        '配置搜索输入框的原生属性，并通过 value 与 onChange 管理搜索关键词。'
      ),
      type: 'CommandInputProps',
    },
    ...[
      { name: 'value', type: 'string' },
      { name: 'defaultValue', type: 'string' },
      { name: 'onChange', type: '(value: string) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('管理当前选中的命令值，不表示搜索关键词。'),
    })),
    {
      name: 'filter',
      description: docsCopy(
        '省略时使用内置过滤；传 false 关闭过滤，或传入返回匹配分数的自定义过滤函数。'
      ),
      type: 'false | CommandFilter',
      defaultValue: docsCopy('内置过滤'),
    },
    {
      name: 'label',
      description: docsCopy('设置命令列表供辅助技术读取的可访问名称。'),
      type: 'string',
    },
    ...['loop', 'vimBindings', 'disablePointerSelection'].map((name) => ({
      name,
      description: docsCopy(
        '控制首尾循环、Vim 导航键以及指针悬停是否改变当前命令。'
      ),
      type: 'boolean',
    })),
    {
      component: 'CommandGroup',
      name: 'heading',
      description: docsCopy('设置当前命令分组的可选标题。'),
      type: 'ReactNode',
    },
    {
      component: 'CommandGroup',
      name: 'options',
      description: docsCopy('设置当前分组内按顺序展示的命令。'),
      type: 'readonly CommandOption[]',
      required: true,
    },
    {
      component: 'CommandOption',
      name: 'value',
      description: docsCopy('设置命令的唯一值，并参与默认文本匹配。'),
      type: 'string',
      required: true,
    },
    {
      component: 'CommandOption',
      name: 'label',
      description: docsCopy(
        '设置命令列表中显示的主要内容；纯文本标签会自动参与过滤匹配。'
      ),
      type: 'ReactNode',
      required: true,
    },
    {
      component: 'CommandOption',
      name: 'keywords',
      description: docsCopy(
        '补充不显示但可参与过滤匹配的别名；标签为复杂 ReactNode 时也可在这里提供可搜索文本。'
      ),
      type: 'string[]',
    },
    {
      component: 'CommandOption',
      name: 'icon',
      description: docsCopy('设置显示在命令标签前的图标。'),
      type: 'ReactNode',
    },
    {
      component: 'CommandOption',
      name: 'shortcut',
      description: docsCopy('设置显示在命令右侧的快捷键提示。'),
      type: 'ReactNode',
    },
    {
      component: 'CommandOption',
      name: 'disabled',
      description: docsCopy('禁用命令并阻止选择。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      component: 'CommandOption',
      name: 'onSelect',
      description: docsCopy('选择该命令时执行回调并接收命令值。'),
      type: '(value: string) => void',
    },
  ],
  'context-menu': [
    {
      name: 'trigger',
      description: docsCopy('响应右键或菜单键的目标元素。'),
      type: 'ReactElement',
    },
    {
      name: 'items',
      description: docsCopy('配置普通操作、分隔线、选择项和子菜单。'),
      type: 'readonly DropdownMenuEntry[]',
    },
    ...[
      { name: 'open', type: 'boolean' },
      { name: 'defaultOpen', type: 'boolean', defaultValue: 'false' },
      { name: 'onOpenChange', type: '(open: boolean) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理菜单状态。'),
    })),
    {
      name: 'disabled',
      description: docsCopy('禁用上下文菜单触发。'),
      type: 'boolean',
      defaultValue: 'false',
    },
    ...['highlightItemOnHover', 'loopFocus'].map((name) => ({
      name,
      description: docsCopy('控制指针高亮，以及键盘焦点是否在首尾循环。'),
      type: 'boolean',
      defaultValue: 'true',
    })),
    {
      name: 'orientation',
      description: docsCopy('设置菜单键盘导航的排列方向。'),
      type: "'horizontal' | 'vertical'",
      defaultValue: "'vertical'",
    },
  ],
  dialog: [
    {
      name: 'trigger',
      description: docsCopy('可选的对话框触发元素；受控场景可省略。'),
      type: 'ReactElement',
    },
    ...['title', 'description', 'children'].map((name) => ({
      name,
      description: docsCopy('设置任务标题、辅助说明和主体内容。'),
      type: 'ReactNode',
    })),
    {
      name: 'footer',
      description: docsCopy(
        '完全自定义底部操作；省略时可使用 cancelText 与 confirmText。'
      ),
      type: 'ReactNode',
    },
    {
      name: 'closable',
      description: docsCopy(
        '设置右上角关闭控件；true 使用默认图标，ReactNode 自定义图标，false 隐藏控件。'
      ),
      type: 'boolean | ReactNode',
      defaultValue: 'true',
    },
    ...[
      { name: 'confirmText', type: 'ReactNode' },
      { name: 'cancelText', type: 'ReactNode' },
      { name: 'onConfirm', type: '() => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('配置默认底部操作及确认回调。'),
    })),
    ...[
      { name: 'open', type: 'boolean' },
      { name: 'defaultOpen', type: 'boolean', defaultValue: 'false' },
      { name: 'onOpenChange', type: '(open: boolean) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理打开状态。'),
    })),
  ],
  drawer: [
    {
      name: 'trigger',
      description: docsCopy('可选的抽屉触发元素；受控场景可省略。'),
      type: 'ReactElement',
    },
    ...['title', 'description', 'children', 'footer'].map((name) => ({
      name,
      description: docsCopy('配置抽屉头部、主体内容和底部操作。'),
      type: 'ReactNode',
    })),
    ...[
      { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'" },
      { name: 'behavior', type: "'adaptive' | 'gesture' | 'panel'" },
    ].map((property) => ({
      ...property,
      description: docsCopy('设置进入方向以及自适应、手势或稳定面板行为。'),
    })),
    {
      name: 'container',
      description: docsCopy('把抽屉约束在指定父容器内。'),
      type: 'HTMLElement | RefObject<HTMLElement | null>',
    },
    ...[
      { name: 'snapPoints', type: '(number | string)[]' },
      { name: 'snapPoint', type: 'number | string | null' },
      {
        name: 'onSnapChange',
        type: '(value: number | string | null) => void',
      },
    ].map((property) => ({
      ...property,
      description: docsCopy('配置并控制手势抽屉的分段展开位置。'),
    })),
    ...[
      { name: 'open', type: 'boolean' },
      { name: 'defaultOpen', type: 'boolean', defaultValue: 'false' },
      { name: 'onOpenChange', type: '(open: boolean) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理打开状态。'),
    })),
  ],
  'navigation-menu': [
    {
      name: 'items',
      description: docsCopy('配置直接链接或带弹层内容的顶级导航入口。'),
      type: 'NavigationMenuItemConfig[]',
    },
    ...[
      { name: 'align', type: "'start' | 'center' | 'end'" },
      { name: 'orientation', type: "'horizontal' | 'vertical'" },
    ].map((property) => ({
      ...property,
      description: docsCopy('设置弹层对齐方式与导航方向。'),
    })),
    ...[
      { name: 'value', type: 'string | null' },
      { name: 'defaultValue', type: 'string | null' },
      { name: 'onChange', type: '(value: string | null) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理当前展开入口。'),
    })),
    ...['delay', 'closeDelay'].map((name) => ({
      name,
      description: docsCopy('设置打开与关闭富导航面板的延迟。'),
      type: 'number',
    })),
  ],
  popover: [
    ...[
      { name: 'trigger', type: 'ReactElement' },
      { name: 'triggerMode', type: "'click' | 'hover'" },
    ].map((property) => ({
      ...property,
      description: docsCopy('设置触发元素，以及点击或悬停预览模式。'),
    })),
    ...['content', 'title', 'description'].map((name) => ({
      name,
      description: docsCopy('配置浮层主体和可选标题说明。'),
      type: 'ReactNode',
    })),
    ...[
      { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'" },
      { name: 'align', type: "'start' | 'center' | 'end'" },
      { name: 'sideOffset', type: 'number' },
      { name: 'alignOffset', type: 'number' },
    ].map((property) => ({
      ...property,
      description: docsCopy('设置浮层方向、对齐方式和间距。'),
    })),
    ...['delay', 'closeDelay'].map((name) => ({
      name,
      description: docsCopy('设置悬停模式打开与关闭前的等待时间。'),
      type: 'number',
    })),
    ...[
      { name: 'open', type: 'boolean' },
      { name: 'defaultOpen', type: 'boolean', defaultValue: 'false' },
      { name: 'onOpenChange', type: '(open: boolean) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理打开状态。'),
    })),
  ],
  progress: [
    ...[
      { name: 'value', type: 'number | null' },
      { name: 'min', type: 'number' },
      { name: 'max', type: 'number' },
    ].map((property) => ({
      ...property,
      description: docsCopy(
        '设置当前进度与数值范围；value 为 null 时表示进度未知。'
      ),
    })),
    {
      name: 'label',
      description: docsCopy('设置进度名称，并决定是否或如何展示格式化数值。'),
      type: 'ReactNode',
    },
    {
      name: 'showValue',
      description: docsCopy('设置进度名称，并决定是否或如何展示格式化数值。'),
      type: 'boolean | ((value: number | null) => ReactNode)',
    },
    {
      name: 'effect',
      description: docsCopy('在数值推进时显示聚拢在进度前沿的短暂反馈。'),
      type: "'none' | 'sparkle'",
      defaultValue: "'none'",
    },
    ...[
      { name: 'locale', type: 'Intl.LocalesArgument' },
      { name: 'format', type: 'Intl.NumberFormatOptions' },
      {
        name: 'getAriaValueText',
        type: '(value: number, min: number, max: number) => string',
      },
    ].map((property) => ({
      ...property,
      description: docsCopy('配置数值格式和辅助技术读取的完整进度文本。'),
    })),
  ],
  select: [
    {
      name: 'options',
      description: docsCopy('提供平铺或分组候选项。'),
      type: '(SelectOption<Value> | SelectOptionGroup<Value>)[]',
    },
    ...[
      { name: 'value', type: 'Value | Value[] | null' },
      { name: 'defaultValue', type: 'Value | Value[] | null' },
      {
        name: 'onChange',
        type: '(value: Value | Value[] | null) => void',
      },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理当前选择。'),
    })),
    ...[
      { name: 'searchValue', type: 'string' },
      { name: 'defaultSearchValue', type: 'string' },
      { name: 'onSearch', type: '(query: string) => void' },
    ].map((property) => ({
      ...property,
      description: docsCopy('以受控或非受控方式管理搜索关键词。'),
    })),
    ...[
      { name: 'placeholder', type: 'ReactNode' },
      { name: 'emptyText', type: 'ReactNode' },
      { name: 'showClear', type: 'boolean' },
    ].map((property) => ({
      ...property,
      description: docsCopy('设置输入提示、空结果文案和清除操作。'),
    })),
    ...['multiple', 'disabled', 'readOnly', 'required'].map((name) => ({
      name,
      description: docsCopy('设置多选、禁用、只读和表单必填状态。'),
      type: 'boolean',
    })),
    {
      name: 'triggerProps',
      description: docsCopy('配置输入框的标准属性，以及是否显示尾部展开按钮。'),
      type: 'SelectTriggerProps',
    },
  ],
  tooltip: [
    {
      name: 'children',
      description: docsCopy('设置需要补充说明的单个触发元素。'),
      type: 'ReactElement',
      required: true,
    },
    {
      name: 'content',
      description: docsCopy('设置简短提示内容；内容为空时不显示浮层。'),
      type: 'ReactNode',
      required: true,
    },
    {
      name: 'placement',
      type: 'TooltipPlacement',
      defaultValue: "'top'",
      description: docsCopy('设置浮层相对触发器的位置。'),
    },
    {
      name: 'arrow',
      type: 'boolean',
      defaultValue: 'true',
      description: docsCopy('设置是否显示匹配 placement 落点的箭头。'),
    },
    {
      name: 'openDelay',
      type: 'number',
      defaultValue: '100',
      description: docsCopy('设置打开提示前的等待时间，单位为毫秒。'),
    },
    {
      name: 'closeDelay',
      type: 'number',
      defaultValue: '100',
      description: docsCopy('设置关闭提示前的等待时间，单位为毫秒。'),
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: docsCopy('临时禁用提示及其触发行为。'),
    },
    {
      name: 'container',
      type: 'HTMLElement | RefObject<HTMLElement | null>',
      description: docsCopy('将提示 Portal 挂载到指定容器。'),
    },
    {
      name: 'open',
      type: 'boolean',
      description: docsCopy('以受控方式管理提示是否打开。'),
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      defaultValue: 'false',
      description: docsCopy('设置非受控模式下的初始打开状态。'),
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      description: docsCopy('打开状态变化时返回新的显隐状态。'),
    },
    {
      name: 'className',
      type: 'string',
      description: docsCopy('扩展提示定位根节点的 className。'),
    },
    {
      name: 'style',
      type: 'CSSProperties',
      description: docsCopy('设置提示定位根节点的行内样式。'),
    },
    {
      name: 'ref',
      type: 'Ref<HTMLDivElement>',
      description: docsCopy('引用提示定位根节点。'),
    },
  ],
};

for (const [slug, api] of Object.entries(publicWrapperApi)) {
  const documentation = componentDocumentation[slug];
  if (documentation && api) documentation.api = api;
}

componentDocumentation.accordion.typePreviews = [
  {
    name: 'AccordionItem',
    declaration: '{',
    api: [
      {
        name: 'value',
        description: docsCopy('设置条目的唯一标识，并用于受控展开值。'),
        type: 'string',
        required: true,
      },
      {
        name: 'title',
        description: docsCopy('设置触发按钮中显示的标题内容。'),
        type: 'ReactNode',
        required: true,
      },
      {
        name: 'content',
        description: docsCopy('设置条目展开后显示的面板内容。'),
        type: 'ReactNode',
        required: true,
      },
      {
        name: 'disabled',
        description: docsCopy('仅禁用当前条目的展开与收起交互。'),
        type: 'boolean',
      },
    ],
  },
  {
    name: 'AccordionIndicatorProps',
    declaration: "Omit<ComponentProps<'span'>, 'children'> & {",
    api: [
      {
        name: 'children',
        description: docsCopy(
          '传入静态节点时随展开状态旋转；传入状态函数时接收 open、disabled 与 value，并完全控制展示内容。'
        ),
        type: 'ReactNode | ((state: AccordionIndicatorState) => ReactNode)',
      },
      {
        name: 'position',
        description: docsCopy('将指示器放在标题起始侧或末端。'),
        type: "'start' | 'end'",
        defaultValue: "'end'",
      },
    ],
  },
  {
    name: 'AccordionIndicatorState',
    declaration: '{',
    api: [
      {
        name: 'open',
        description: docsCopy('当前条目的面板是否已展开。'),
        type: 'boolean',
      },
      {
        name: 'disabled',
        description: docsCopy('当前条目或整个 Accordion 是否已禁用。'),
        type: 'boolean',
      },
      {
        name: 'value',
        description: docsCopy('当前条目的稳定标识。'),
        type: 'string',
      },
    ],
  },
];
componentDocumentation.accordion.parts = [
  {
    name: 'Accordion',
    description: docsCopy('管理展开值并根据 items 渲染一组关联面板。'),
  },
  {
    name: 'AccordionItem',
    description: docsCopy('描述单个条目的标识、标题、面板内容与禁用状态。'),
  },
  {
    name: 'Accordion.Indicator',
    description: docsCopy(
      '读取当前条目状态，并在标题起始侧或末端渲染展开指示器。'
    ),
  },
];

componentDocumentation.attachment.typePreviews = [
  {
    name: 'AttachmentProps',
    declaration: "Omit<ComponentProps<'div'>, 'children' | 'title'> & {",
    api: componentDocumentation.attachment.api.filter(
      (property) => property.component == null
    ),
  },
  {
    name: 'AttachmentGroupItem',
    declaration: 'AttachmentProps & {',
    api: [
      {
        name: 'key',
        description: docsCopy('在附件集合中为当前项目提供稳定标识。'),
        type: 'React.Key',
      },
      ...componentDocumentation.attachment.api.filter(
        (property) => property.component == null
      ),
    ],
  },
];

componentDocumentation.avatar.typePreviews = [
  {
    name: 'AvatarFallbackProps',
    declaration: "Omit<ComponentProps<'span'>, 'children'> & {",
    api: [
      {
        name: 'delay',
        description: docsCopy('图片尚未完成加载时，延迟显示回退内容的毫秒数。'),
        type: 'number',
      },
    ],
  },
  {
    name: 'AvatarImageProps',
    declaration: "Omit<ComponentProps<'img'>, 'alt' | 'children' | 'src'> & {",
    api: [
      {
        name: 'onLoadingStatusChange',
        description: docsCopy('头像图片加载状态变化时调用。'),
        type: '(status: AvatarImageLoadingStatus) => void',
      },
    ],
  },
  {
    name: 'AvatarImageLoadingStatus',
    definition:
      "type AvatarImageLoadingStatus = 'error' | 'idle' | 'loaded' | 'loading'",
  },
  {
    name: 'AvatarGroupItem',
    declaration: 'AvatarProps & {',
    api: [
      {
        name: 'key',
        description: docsCopy('在头像集合中为当前项目提供稳定标识。'),
        type: 'React.Key',
      },
      ...componentDocumentation.avatar.api.filter(
        (property) => property.component == null
      ),
    ],
  },
];

componentDocumentation.bubble.typePreviews = [
  {
    name: 'DataAttributes',
    definition:
      'type DataAttributes = {\n  [key: `data-${string}`]: boolean | number | string | undefined\n}',
  },
  {
    name: 'BubbleReactionsProps',
    declaration: "ComponentProps<'div'> & {",
    api: [
      {
        name: 'align',
        description: docsCopy('将回应内容对齐到气泡边缘的起始侧或末尾侧。'),
        type: "'start' | 'end'",
        defaultValue: "'end'",
      },
      {
        name: 'side',
        description: docsCopy('将回应内容放在气泡顶部或底部边缘。'),
        type: "'top' | 'bottom'",
        defaultValue: "'bottom'",
      },
    ],
  },
];

componentDocumentation.carousel.typePreviews = [
  {
    name: 'CarouselRef',
    declaration: '{',
    api: [
      {
        name: 'pause',
        description: docsCopy('暂停自动播放。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'play',
        description: docsCopy('恢复自动播放。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'scrollNext',
        description: docsCopy('滚动到下一个轮播项。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'scrollPrev',
        description: docsCopy('滚动到上一个轮播项。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'scrollTo',
        description: docsCopy('根据索引滚动到指定轮播项。'),
        type: '(index: number) => void',
        required: true,
      },
    ],
  },
  {
    name: 'CarouselControls',
    declaration: 'CarouselRef & {',
    api: [
      {
        name: 'canScrollNext',
        description: docsCopy('当前是否可以滚动到下一项。'),
        type: 'boolean',
        required: true,
      },
      {
        name: 'canScrollPrev',
        description: docsCopy('当前是否可以滚动到上一项。'),
        type: 'boolean',
        required: true,
      },
      {
        name: 'currentPage',
        description: docsCopy('当前页码，从 1 开始。'),
        type: 'number',
        required: true,
      },
      {
        name: 'isPlaying',
        description: docsCopy('自动播放当前是否正在运行。'),
        type: 'boolean',
        required: true,
      },
      {
        name: 'pageCount',
        description: docsCopy('轮播总页数。'),
        type: 'number',
        required: true,
      },
      {
        name: 'selectedIndex',
        description: docsCopy('当前轮播项的零起始索引。'),
        type: 'number',
        required: true,
      },
      {
        name: 'scrollSnaps',
        description: docsCopy('底层滚动对齐点集合。'),
        type: 'number[]',
        required: true,
      },
      {
        name: 'pause',
        description: docsCopy('暂停自动播放。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'play',
        description: docsCopy('恢复自动播放。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'scrollNext',
        description: docsCopy('滚动到下一个轮播项。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'scrollPrev',
        description: docsCopy('滚动到上一个轮播项。'),
        type: '() => void',
        required: true,
      },
      {
        name: 'scrollTo',
        description: docsCopy('根据索引滚动到指定轮播项。'),
        type: '(index: number) => void',
        required: true,
      },
    ],
  },
  {
    name: 'CarouselDotRenderProps',
    declaration: '{',
    api: [
      {
        name: 'index',
        description: docsCopy('当前分页点对应的零起始索引。'),
        type: 'number',
        required: true,
      },
      {
        name: 'isSelected',
        description: docsCopy('当前分页点是否对应已选中轮播项。'),
        type: 'boolean',
        required: true,
      },
    ],
  },
  {
    name: 'ButtonNativeProps',
    declaration: "Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {",
    api: [
      {
        name: 'variant',
        description: docsCopy('设置按钮的语义外观。'),
        type: "'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'",
      },
      {
        name: 'size',
        description: docsCopy('设置按钮尺寸。'),
        type: "'xs' | 'sm' | 'default' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'",
      },
      {
        name: 'block',
        description: docsCopy('让按钮填满容器可用宽度。'),
        type: 'boolean',
      },
      {
        name: 'disabled',
        description: docsCopy('禁用按钮交互。'),
        type: 'boolean',
      },
    ],
  },
];

componentDocumentation.collapsible.typePreviews = [
  {
    name: 'CollapsibleTriggerProps',
    declaration:
      "Omit<ButtonNativeProps, 'children' | 'className' | 'href'> & {",
    api: [
      {
        name: 'variant',
        description: docsCopy('设置独立触发按钮的语义外观。'),
        type: "'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'",
      },
      {
        name: 'size',
        description: docsCopy('设置独立触发按钮的尺寸。'),
        type: "'xs' | 'sm' | 'default' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'",
      },
      {
        name: 'disabled',
        description: docsCopy('禁用触发按钮并阻止展开状态变化。'),
        type: 'boolean',
      },
      {
        name: 'aria-label',
        description: docsCopy('为仅图标触发按钮提供可访问名称。'),
        type: 'string',
      },
      {
        name: 'onClick',
        description: docsCopy('处理触发按钮的原生点击事件。'),
        type: 'MouseEventHandler<HTMLButtonElement>',
      },
    ],
  },
];

componentDocumentation.item.typePreviews = [
  {
    name: 'ItemClassNames',
    declaration: '{',
    api: [
      ...[
        'actions',
        'content',
        'description',
        'footer',
        'header',
        'media',
        'title',
      ].map((name) => ({
        name,
        description: docsCopy('扩展对应语义槽位的 className。'),
        type: 'string',
      })),
    ],
  },
  {
    name: 'ItemGroupEntry',
    declaration: 'ItemProps & {',
    api: [
      {
        name: 'key',
        description: docsCopy('在列表项集合中为当前项目提供稳定标识。'),
        type: 'React.Key',
      },
      ...componentDocumentation.item.api.filter(
        (property) => property.component == null
      ),
    ],
  },
];

componentDocumentation.marker.typePreviews = [
  {
    name: 'MarkerClassNames',
    declaration: '{',
    api: [
      {
        name: 'content',
        description: docsCopy('扩展标记内容槽位的 className。'),
        type: 'string',
      },
      {
        name: 'icon',
        description: docsCopy('扩展标记图标槽位的 className。'),
        type: 'string',
      },
    ],
  },
];

componentDocumentation.command.typeDefinitionGroups = [
  'CommandGroup',
  'CommandOption',
];
componentDocumentation.command.typePreviews = [
  {
    name: 'CommandInputProps',
    declaration:
      "Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'defaultValue' | 'onChange' | 'value'> & {",
    api: [
      {
        name: 'value',
        description: docsCopy('以受控方式设置当前搜索关键词。'),
        type: 'string',
      },
      {
        name: 'onChange',
        description: docsCopy('搜索关键词变化时接收新的字符串值。'),
        type: '(value: string) => void',
      },
    ],
  },
];

const semanticStyleContracts = {
  'alert-dialog': {
    componentName: 'AlertDialog',
    slots: ['content'],
  },
  badge: { componentName: 'Badge', slots: ['indicator'] },
  card: {
    componentName: 'Card',
    slots: ['action', 'content', 'description', 'footer', 'header', 'title'],
  },
  carousel: { componentName: 'Carousel', slots: ['content', 'item'] },
  checkbox: {
    apiComponent: 'Checkbox',
    componentName: 'Checkbox',
    slots: ['control', 'label'],
  },
  collapsible: {
    componentName: 'Collapsible',
    slots: ['content', 'header'],
  },
  'context-menu': { componentName: 'ContextMenu', slots: ['content'] },
  counter: { componentName: 'Counter', slots: ['digit', 'visual'] },
  'date-picker': {
    componentName: 'DatePicker',
    slots: ['calendar', 'trigger'],
  },
  dialog: { componentName: 'Dialog', slots: ['content'] },
  drawer: { componentName: 'Drawer', slots: ['content'] },
  'dropdown-menu': { componentName: 'DropdownMenu', slots: ['content'] },
  input: {
    apiComponent: 'Input',
    componentName: 'Input',
    slots: ['addonAfter', 'addonBefore', 'input', 'prefix', 'suffix'],
  },
  'input-number': {
    componentName: 'InputNumber',
    slots: [
      'controls',
      'decrement',
      'group',
      'increment',
      'input',
      'prefix',
      'suffix',
    ],
  },
  item: {
    componentName: 'Item',
    slots: [
      'actions',
      'content',
      'description',
      'footer',
      'header',
      'media',
      'title',
    ],
  },
  marker: { componentName: 'Marker', slots: ['content', 'icon'] },
  pagination: {
    componentName: 'Pagination',
    slots: [
      'content',
      'control',
      'ellipsis',
      'item',
      'pageSize',
      'quickJumper',
      'summary',
    ],
  },
  popover: { componentName: 'Popover', slots: ['content'] },
  radio: {
    apiComponent: 'Radio',
    componentName: 'Radio',
    slots: ['control', 'label'],
  },
  resizable: {
    componentName: 'Resizable',
    slots: ['panel', 'separator'],
  },
  select: { componentName: 'Select', slots: ['trigger'] },
  tabs: {
    componentName: 'Tabs',
    slots: ['indicator', 'list', 'panel', 'tab', 'viewport'],
  },
  tooltip: { componentName: 'Tooltip', slots: ['arrow', 'content'] },
} as const;

for (const [slug, contract] of Object.entries(semanticStyleContracts)) {
  const documentation = componentDocumentation[slug];
  const classNamesType = `${contract.componentName}ClassNames`;
  const stylesType = `${contract.componentName}Styles`;
  const apiComponent =
    'apiComponent' in contract ? contract.apiComponent : undefined;

  documentation.api = documentation.api.filter(
    (property) =>
      !(
        (property.name === 'classNames' || property.name === 'styles') &&
        property.component === apiComponent
      )
  );
  documentation.typePreviews = (documentation.typePreviews ?? []).filter(
    (preview) => preview.name !== classNamesType && preview.name !== stylesType
  );

  documentation.api.push(
    {
      component: apiComponent,
      name: 'classNames',
      description: docsCopy('扩展对应语义槽位的 className。'),
      type: classNamesType,
    },
    {
      component: apiComponent,
      name: 'styles',
      description: docsCopy('按与 classNames 相同的语义区域设置行内样式。'),
      type: stylesType,
    }
  );
  documentation.typeDefinitionGroups = [
    ...new Set([
      ...(documentation.typeDefinitionGroups ?? []),
      classNamesType,
      stylesType,
    ]),
  ];
  documentation.typePreviews = [
    ...(documentation.typePreviews ?? []),
    {
      name: classNamesType,
      declaration: '{',
      api: contract.slots.map((name) => ({
        name,
        description: docsCopy('扩展对应语义槽位的 className。'),
        type: 'string',
      })),
    },
    {
      name: stylesType,
      declaration: '{',
      api: contract.slots.map((name) => ({
        name,
        description: docsCopy('设置对应语义槽位的行内样式。'),
        type: 'React.CSSProperties',
      })),
    },
  ];
}

const publicPropDescription = docsCopy('配置组件的公开状态、行为或扩展点。');
const appendMissingApi = (slug: string, properties: ApiProperty[]) => {
  const documentation = componentDocumentation[slug];
  if (!documentation) return;

  const propertyName = (property: ApiProperty) =>
    property.component
      ? `${property.component}.${property.name}`
      : property.name;
  const existing = new Set(documentation.api.map(propertyName));
  for (const property of properties) {
    if (existing.has(propertyName(property))) continue;
    documentation.api.push(property);
    existing.add(propertyName(property));
  }
};
const publicProperty = (
  name: string,
  type: string,
  options: Partial<
    Pick<ApiProperty, 'component' | 'defaultValue' | 'description' | 'required'>
  > = {}
): ApiProperty => {
  const { description = publicPropDescription, ...propertyOptions } = options;

  return {
    ...propertyOptions,
    name,
    description,
    type,
  };
};

appendMissingApi('alert-dialog', [
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
  publicProperty('size', "'default' | 'sm'", { defaultValue: "'default'" }),
]);
appendMissingApi('context-menu', [
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
]);
appendMissingApi('drawer', [
  publicProperty('closeText', 'ReactNode'),
  publicProperty('closeVariant', 'ButtonProps["variant"]', {
    defaultValue: "'outline'",
  }),
  publicProperty('contentProps', 'ComponentProps<"div">'),
  publicProperty('defaultSnapPoint', 'DrawerSnapPoint | null'),
  publicProperty('disablePointerDismissal', 'boolean', {
    defaultValue: 'false',
  }),
  publicProperty('modal', "boolean | 'trap-focus'"),
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
  publicProperty('closable', 'boolean | ReactNode', { defaultValue: 'true' }),
  publicProperty('handle', 'boolean | ReactNode'),
  publicProperty('sequential', 'boolean'),
  publicProperty('swipeDirection', "'down' | 'left' | 'right' | 'up'"),
]);
appendMissingApi('dropdown-menu', [
  publicProperty('disabled', 'boolean', { defaultValue: 'false' }),
  publicProperty('highlightItemOnHover', 'boolean'),
  publicProperty('loopFocus', 'boolean'),
  publicProperty('modal', 'boolean'),
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
  publicProperty('orientation', "'horizontal' | 'vertical'"),
]);
appendMissingApi('navigation-menu', [
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"nav">'),
]);
appendMissingApi('popover', [
  publicProperty('modal', "boolean | 'trap-focus'"),
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
]);

componentDocumentation.menubar.api = componentDocumentation.menubar.api.filter(
  (property) => property.name !== 'loop'
);
appendMissingApi('menubar', [
  publicProperty('disabled', 'boolean', { defaultValue: 'false' }),
  publicProperty('loopFocus', 'boolean'),
  publicProperty('modal', 'boolean'),
  publicProperty('orientation', "'horizontal' | 'vertical'"),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">'),
]);

appendMissingApi('counter', [
  publicProperty('borderRadius', 'number'),
  publicProperty('gradientHeight', 'number'),
  publicProperty('horizontalPadding', 'number'),
  publicProperty('padding', 'number'),
  publicProperty('textColor', 'string'),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"span">'),
]);
appendMissingApi('date-picker', [
  publicProperty('defaultValue', 'Date'),
  publicProperty('inputRef', 'React.Ref<HTMLButtonElement>'),
  publicProperty('required', 'boolean', { defaultValue: 'false' }),
  publicProperty(docsCopy('原生属性'), 'Pick<ComponentProps<"button">, ...>'),
]);

componentDocumentation.form.api = componentDocumentation.form.api.filter(
  (property) => property.component !== docsCopy('自定义控件')
);
appendMissingApi('form', [
  publicProperty('onInvalid', 'SubmitErrorHandler', { component: 'Form' }),
  publicProperty('onValuesChange', 'FormValuesChangeHandler', {
    component: 'Form',
    description: docsCopy('任意字段值变化后接收完整值和发生变化的字段路径。'),
  }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"form">', {
    component: 'Form',
  }),
  publicProperty('options', 'Parameters<typeof Form.useForm>[0]', {
    component: 'Form.useForm',
    description: docsCopy('设置默认值、校验时机、受控值和解析器等初始化选项。'),
  }),
  publicProperty(
    'name',
    'FieldPath | FieldPath[] | ((values: TFieldValues) => TSelectedValue)',
    {
      component: 'Form.useWatch',
      description: docsCopy('指定要订阅的字段路径、路径集合或派生值选择器。'),
    }
  ),
  publicProperty('form', 'FormInstance', {
    component: 'Form.useWatch',
    description: docsCopy('指定订阅所连接的类型化表单实例。'),
  }),
  publicProperty(
    'return',
    'FieldPathValue<TFieldValues, TName> | TSelectedValue',
    {
      component: 'Form.useWatch',
      description: docsCopy('返回字段值、字段值集合或选择器结果。'),
    }
  ),
  publicProperty('return', 'FormInstance', {
    component: 'Form.useFormInstance',
    description: docsCopy('返回最近一层 Form 提供的表单实例。'),
  }),
  ...(
    [
      [
        'getValues',
        '(name?: FieldPath | FieldPath[]) => ReturnType<FormInstance["getValues"]>',
      ],
      ['reset', '(values?: Parameters<FormInstance["reset"]>[0]) => void'],
      [
        'setError',
        '(name: FieldPath, error: Parameters<FormInstance["setError"]>[1]) => void',
      ],
      ['setValue', '(name: FieldPath, value, options?) => void'],
      ['trigger', '(name?: FieldPath | FieldPath[]) => Promise<boolean>'],
    ] as const
  ).map(([name, type]) =>
    publicProperty(name, type, {
      component: 'FormInstance',
      description: docsCopy('读取或更新表单值与校验状态的类型化实例方法。'),
    })
  ),
  publicProperty('formState', 'FormInstance["formState"]', {
    component: 'FormInstance',
    description: docsCopy('读取提交、校验、脏值、触碰和错误等响应式状态。'),
  }),
  publicProperty('defaultValue', 'FieldPathValue', {
    component: 'Form.Field',
  }),
  publicProperty('disabled', 'boolean', { component: 'Form.Field' }),
  publicProperty('required', 'boolean', { component: 'Form.Field' }),
  publicProperty('shouldUnregister', 'boolean', { component: 'Form.Field' }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Form.Field',
  }),
]);
componentDocumentation.form.typePreviews = [
  ...(componentDocumentation.form.typePreviews ?? []),
  {
    name: 'FormValuesChangeHandler',
    definition: `type FormValuesChangeHandler<TFieldValues> = (
  values: TFieldValues,
  info: FormValuesChangeInfo<TFieldValues>,
) => void`,
  },
  {
    name: 'FormValuesChangeInfo',
    definition: `type FormValuesChangeInfo<TFieldValues> = {
  name?: FieldPath<TFieldValues>
}`,
  },
  {
    name: 'FormFieldInjectedControlProps<Value>',
    declaration: '{',
    api: [
      'value',
      'onChange',
      'onBlur',
      'name',
      'id',
      'disabled',
      'required',
      'aria-describedby',
      'aria-errormessage',
      'aria-invalid',
      'aria-labelledby',
      'aria-required',
    ].map((name) => ({
      name,
      description: docsCopy('由 Form.Field 自动注入自定义控件的字段契约。'),
      type: 'control-specific',
    })),
  },
];

appendMissingApi('checkbox', [
  ...['children', 'form', 'name', 'uncheckedValue', 'value'].map((name) =>
    publicProperty(name, name === 'children' ? 'ReactNode' : 'string', {
      component: 'Checkbox',
    })
  ),
  ...['inputRef', 'parent', 'readOnly', 'required'].map((name) =>
    publicProperty(
      name,
      name === 'inputRef' ? 'React.Ref<HTMLInputElement>' : 'boolean',
      {
        component: 'Checkbox',
      }
    )
  ),
  publicProperty('classNames', 'CheckboxClassNames', { component: 'Checkbox' }),
  ...[
    'allValues',
    'columns',
    'gap',
    'minColumnWidth',
    'name',
    'onChange',
    'orientation',
  ].map((name) =>
    publicProperty(
      name,
      name === 'allValues'
        ? 'string[]'
        : name === 'columns'
          ? 'number'
          : name === 'onChange'
            ? '(value: string[]) => void'
            : name === 'orientation'
              ? "'horizontal' | 'vertical'"
              : name === 'name'
                ? 'string'
                : 'MasonryLength | MasonryGap',
      { component: 'Checkbox.Group' }
    )
  ),
  publicProperty('disabled', 'boolean', { component: 'Checkbox.Group' }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"label">', {
    component: 'Checkbox',
  }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Checkbox.Group',
  }),
]);

appendMissingApi('radio', [
  ...['children', 'classNames', 'inputRef', 'readOnly', 'required'].map(
    (name) =>
      publicProperty(
        name,
        name === 'children'
          ? 'ReactNode'
          : name === 'classNames'
            ? 'RadioClassNames'
            : name === 'inputRef'
              ? 'React.Ref<HTMLInputElement>'
              : 'boolean',
        { component: 'Radio' }
      )
  ),
  publicProperty('disabled', 'boolean', { component: 'Radio' }),
  ...['form', 'inputRef', 'name', 'readOnly', 'required'].map((name) =>
    publicProperty(
      name,
      name === 'inputRef'
        ? 'React.Ref<HTMLInputElement>'
        : name === 'readOnly' || name === 'required'
          ? 'boolean'
          : 'string',
      { component: 'Radio.Group' }
    )
  ),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"label">', {
    component: 'Radio',
  }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Radio.Group',
  }),
]);

appendMissingApi('select', [
  publicProperty('autoComplete', "'list' | 'both' | 'inline' | 'none'"),
  ...[
    'autoHighlight',
    'defaultOpen',
    'highlightItemOnHover',
    'loopFocus',
    'modal',
    'open',
    'openOnInputClick',
  ].map((name) => publicProperty(name, 'boolean')),
  publicProperty('filter', 'null | ((item: Value, query: string) => boolean)'),
  publicProperty('form', 'string'),
  publicProperty('id', 'string'),
  publicProperty(
    'isItemEqualToValue',
    '(item: Value, value: Value) => boolean'
  ),
  publicProperty('itemToStringLabel', '(item: Value) => string'),
  publicProperty('itemToStringValue', '(item: Value) => string'),
  publicProperty('limit', 'number'),
  publicProperty('locale', 'Intl.LocalesArgument'),
  publicProperty('name', 'string'),
  publicProperty('onOpenChange', '(open: boolean) => void'),
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
]);

appendMissingApi('slider', [
  publicProperty('disabled', 'boolean'),
  publicProperty('form', 'string'),
  publicProperty('format', 'Intl.NumberFormatOptions'),
  publicProperty('inputRef', 'React.Ref<HTMLInputElement>'),
  publicProperty('largeStep', 'number'),
  publicProperty('locale', 'Intl.LocalesArgument'),
  publicProperty('minStepsBetweenValues', 'number'),
  publicProperty('name', 'string'),
  publicProperty('thumbCollisionBehavior', "'none' | 'push' | 'swap'"),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">'),
]);
appendMissingApi('switch', [
  publicProperty('form', 'string', { component: 'Switch' }),
  publicProperty('inputRef', 'React.Ref<HTMLInputElement>', {
    component: 'Switch',
  }),
  publicProperty('readOnly', 'boolean', { component: 'Switch' }),
  publicProperty('required', 'boolean', { component: 'Switch' }),
  publicProperty('uncheckedValue', 'string', { component: 'Switch' }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"span">', {
    component: 'Switch',
  }),
]);
appendMissingApi('toggle', [
  publicProperty('inputRef', 'React.Ref<HTMLButtonElement>', {
    component: 'Toggle',
  }),
  publicProperty('required', 'boolean', { component: 'Toggle' }),
  publicProperty(docsCopy('原生属性'), 'ButtonHTMLAttributes', {
    component: 'Toggle',
  }),
  publicProperty('disabled', 'boolean', { component: 'Toggle.Group' }),
  publicProperty('loopFocus', 'boolean', { component: 'Toggle.Group' }),
  publicProperty('variant', "'default' | 'outline'", {
    component: 'Toggle.Group',
  }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Toggle.Group',
  }),
]);
appendMissingApi('input-number', [
  publicProperty('autoFocus', 'boolean'),
  publicProperty('inputProps', 'ComponentProps<"input">'),
  publicProperty('inputRef', 'React.Ref<HTMLInputElement>'),
  publicProperty('onBlur', 'FocusEventHandler<HTMLInputElement>'),
  publicProperty('onFocus', 'FocusEventHandler<HTMLInputElement>'),
]);
appendMissingApi('input', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"input">', {
    component: 'Input',
  }),
  publicProperty(docsCopy('原生属性'), 'InputOTPProps', {
    component: 'Input.OTP',
  }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"textarea">', {
    component: 'Input.TextArea',
  }),
]);

appendMissingApi('masonry', [
  publicProperty('ref', 'React.Ref<HTMLDivElement>'),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">'),
]);
appendMissingApi('stack', [
  publicProperty('children', 'ReactNode'),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">'),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Stack.Compact',
  }),
]);
appendMissingApi('scroll-area', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">'),
]);
appendMissingApi('skeleton', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">'),
]);
appendMissingApi('spinner', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"svg">'),
]);

componentDocumentation.sonner.api = [
  publicProperty(docsCopy('原生属性'), 'SonnerProps'),
];
appendMissingApi('toast', [
  publicProperty('children', 'ReactNode', { component: 'Toast.Provider' }),
  publicProperty('id', 'string', { component: 'Toast.Provider' }),
  publicProperty(docsCopy('原生属性'), 'ToastProviderProps', {
    component: 'Toast.Provider',
  }),
  publicProperty(docsCopy('原生属性'), 'ToasterProps', {
    component: 'Toast.Toaster',
  }),
]);

const nativeRootContracts: Array<[string, string]> = [
  ['accordion', 'AccordionRootProps'],
  ['alert', 'ComponentProps<"div">'],
  ['aspect-ratio', 'AspectRatioProps'],
  ['attachment', 'ComponentProps<"div">'],
  ['avatar', 'ComponentProps<"span">'],
  ['bubble', 'ComponentProps<"div">'],
  ['card', 'ComponentProps<"div">'],
  ['carousel', 'ComponentProps<"div">'],
  ['collapsible', 'CollapsibleRootProps'],
  ['command', 'CommandPrimitiveProps'],
  ['empty', 'ComponentProps<"div">'],
  ['item', 'ComponentProps<"div"> | ComponentProps<"a">'],
  ['kbd', 'ComponentProps<"kbd">'],
  ['marker', 'ComponentProps<"div"> | ComponentProps<"a">'],
  ['pagination', 'ComponentProps<"nav">'],
  ['progress', 'ComponentProps<"div">'],
  ['resizable', 'ResizablePrimitive.GroupProps'],
  ['tabs', 'TabsRootProps'],
  ['table', 'ComponentProps<"div">'],
];
for (const [slug, type] of nativeRootContracts) {
  appendMissingApi(slug, [publicProperty(docsCopy('原生属性'), type)]);
}
appendMissingApi('avatar', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Avatar.Group',
  }),
]);
appendMissingApi('attachment', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Attachment.Group',
  }),
]);
appendMissingApi('item', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Item.Group',
  }),
]);
appendMissingApi('progress', [publicProperty('children', 'ReactNode')]);
appendMissingApi('collapsible', [
  publicProperty('onOpenChangeComplete', '(open: boolean) => void'),
]);
appendMissingApi('button', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"div">', {
    component: 'Button.Group',
  }),
]);
appendMissingApi('accordion', [
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"span">', {
    component: 'Accordion.Indicator',
  }),
]);
appendMissingApi('table', [
  publicProperty(docsCopy('原生属性'), 'Table.PrimitiveProps', {
    component: 'Table.Primitive',
  }),
  ...['Header', 'Body', 'Footer', 'Row'].map((component) =>
    publicProperty(
      docsCopy('原生属性'),
      `ComponentProps<"${component === 'Row' ? 'tr' : component === 'Header' ? 'thead' : component === 'Body' ? 'tbody' : 'tfoot'}">`,
      {
        component: `Table.${component}`,
      }
    )
  ),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"th">', {
    component: 'Table.Head',
  }),
  publicProperty(docsCopy('原生属性'), 'ComponentProps<"td">', {
    component: 'Table.Cell',
  }),
]);

const prunedPrimitiveApi: Readonly<Record<string, readonly string[]>> = {
  'alert-dialog': ['onOpenChangeComplete'],
  'context-menu': [
    'highlightItemOnHover',
    'loopFocus',
    'onOpenChangeComplete',
    'orientation',
  ],
  'dropdown-menu': [
    'highlightItemOnHover',
    'loopFocus',
    'modal',
    'onOpenChangeComplete',
    'orientation',
  ],
  'navigation-menu': ['onOpenChangeComplete'],
  collapsible: ['onOpenChangeComplete'],
  counter: [
    'borderRadius',
    'gradientHeight',
    'horizontalPadding',
    'padding',
    'textColor',
  ],
  drawer: [
    'contentProps',
    'disablePointerDismissal',
    'modal',
    'onOpenChangeComplete',
  ],
  form: ['Form.Field.shouldUnregister'],
  menubar: ['loopFocus', 'modal', 'orientation'],
  popover: ['modal', 'onOpenChangeComplete'],
  select: [
    'autoHighlight',
    'highlightItemOnHover',
    'limit',
    'loopFocus',
    'modal',
    'onOpenChangeComplete',
    'openOnInputClick',
  ],
  toggle: ['Toggle.Group.loopFocus'],
  tooltip: ['disableHoverablePopup', 'trackCursorAxis', 'trigger'],
};

for (const [slug, names] of Object.entries(prunedPrimitiveApi)) {
  const prunedNames = new Set(names);
  componentDocumentation[slug].api = componentDocumentation[slug].api.filter(
    (property) =>
      !prunedNames.has(
        property.component
          ? `${property.component}.${property.name}`
          : property.name
      )
  );
}

componentDocumentation.layout.api = componentDocumentation.layout.api.filter(
  (property) => property.component !== docsCopy('全部组成组件')
);
for (const [component, type] of [
  ['Layout', 'ComponentProps<"div">'],
  ['Layout.Header', 'ComponentProps<"header">'],
  ['Layout.Content', 'ComponentProps<"main">'],
  ['Layout.Footer', 'ComponentProps<"footer">'],
  ['Layout.Sidebar', 'ComponentProps<"aside">'],
] as const) {
  appendMissingApi('layout', [
    publicProperty(docsCopy('原生属性'), type, { component }),
  ]);
}

componentDocumentation.command.parts = [
  {
    name: 'Command',
    description: docsCopy('渲染搜索输入、过滤结果和键盘可导航的命令列表。'),
  },
  {
    name: 'CommandGroup',
    description: docsCopy('描述一个可选标题和该分组包含的命令选项。'),
  },
  {
    name: 'CommandOption',
    description: docsCopy(
      '描述单条命令的值、内容、搜索关键词、状态和执行行为。'
    ),
  },
];
componentDocumentation.command.whenToUse = [
  docsCopy('需要从较多页面、文件、设置或操作中快速搜索并执行命令。'),
  docsCopy('需要同时支持键盘导航、快捷键提示和模糊检索。'),
  docsCopy('需要在页面内嵌列表与模态命令面板之间复用同一组命令数据。'),
];
componentDocumentation.command.accessibility = [
  docsCopy('使用 label 为命令列表提供明确的可访问名称。'),
  docsCopy('键盘用户可以输入关键词，并通过方向键移动、Enter 执行命令。'),
  docsCopy('禁用命令需要使用 disabled，不要仅通过颜色表达不可用状态。'),
];
componentDocumentation.command.pitfalls = [
  docsCopy(
    'placeholder 描述可搜索内容，emptyText 说明搜索无结果，两者不要混用。'
  ),
  docsCopy('value 管理当前命令选择；搜索关键词应通过 inputProps 管理。'),
  docsCopy('shortcut 只负责展示提示，应用仍需自行注册对应的全局快捷键。'),
];

const managedTableDocumentation = componentDocumentation['data-table'];
const customTableDocumentation = componentDocumentation.table;

customTableDocumentation.summary = docsCopy(
  'Table 只负责数据驱动的完整交互；需要完全控制原生表格结构时，从 Table.Primitive 开始并组合 Table.Header、Table.Row 与 Table.Cell。'
);
customTableDocumentation.whenToUse = [
  docsCopy(
    '常规业务数据列表使用 data 与 Table.Column，快速获得搜索、排序、分页、选择、展开和虚拟滚动。'
  ),
  docsCopy(
    '数据已经完成加工，或结构无法由列模型表达时，使用 Table.Primitive 作为根并组合 Table.Header、Table.Body、Table.Row 与 Table.Cell。'
  ),
  docsCopy(
    '既希望沿用统一的表格视觉与无障碍语义，又需要针对业务定制固定列、汇总、操作和详情。'
  ),
];
customTableDocumentation.examples = [
  ...managedTableDocumentation.examples,
  ...customTableDocumentation.examples,
];
customTableDocumentation.typeDefinitionGroups = [
  ...(managedTableDocumentation.typeDefinitionGroups ?? []),
  'Table.PrimitiveClassNames',
  'Table.PrimitiveStyles',
];
customTableDocumentation.semanticDom = {
  description: docsCopy(
    '悬停、聚焦或点击右侧属性行，查看根节点 className/style 与内部 classNames/styles 各字段对应的真实数据表区域。'
  ),
  preview: <TableSemanticDomDemo />,
};
customTableDocumentation.api = [
  ...managedTableDocumentation.api,
  ...customTableDocumentation.api,
];
customTableDocumentation.parts = [
  ...(managedTableDocumentation.parts ?? []),
  ...(customTableDocumentation.parts ?? []),
];
customTableDocumentation.accessibility = [
  ...managedTableDocumentation.accessibility,
  ...customTableDocumentation.accessibility,
];
customTableDocumentation.pitfalls = [
  ...managedTableDocumentation.pitfalls,
  ...customTableDocumentation.pitfalls,
];
customTableDocumentation.relatedComponents = undefined;
delete componentDocumentation['data-table'];

const inheritedPropertyNames = new Set([docsCopy('原生属性'), '...navProps']);
const inheritedTargetsWithoutRootStyle = new Set<string>();

for (const documentation of Object.values(componentDocumentation)) {
  const inheritedProperties = documentation.api.filter((property) =>
    inheritedPropertyNames.has(property.name)
  );
  if (inheritedProperties.length === 0) continue;

  documentation.api = documentation.api.filter(
    (property) => !inheritedPropertyNames.has(property.name)
  );
  const existing = new Set(
    documentation.api.map((property) =>
      property.component
        ? `${property.component}.${property.name}`
        : property.name
    )
  );

  for (const property of inheritedProperties) {
    const target = property.component ?? documentation.name;
    if (inheritedTargetsWithoutRootStyle.has(target)) continue;

    for (const rootProperty of [
      {
        name: 'className',
        description: docsCopy('扩展根节点样式。'),
        type: 'string',
      },
      {
        name: 'style',
        description: docsCopy('扩展根节点行内样式。'),
        type: 'CSSProperties',
      },
    ]) {
      const qualifiedName = property.component
        ? `${property.component}.${rootProperty.name}`
        : rootProperty.name;
      if (existing.has(qualifiedName)) continue;

      documentation.api.push({
        ...rootProperty,
        component: property.component,
      });
      existing.add(qualifiedName);
    }
  }
}

const spaciousPreviewHeights: Record<string, number> = {
  'aspect-ratio': 560,
  masonry: 520,
  resizable: 520,
  'scroll-area': 480,
};

for (const [slug, minimumHeight] of Object.entries(spaciousPreviewHeights)) {
  for (const example of componentDocumentation[slug]?.examples ?? []) {
    example.wide = true;
    const previewHeight =
      typeof example.previewHeight === 'number' ? example.previewHeight : 0;
    example.previewHeight = Math.max(previewHeight, minimumHeight);
  }
}

const masonryNavigationComponents = [
  'breadcrumb',
  'dropdown-menu',
  'menubar',
  'navigation-menu',
] as const;

for (const slug of masonryNavigationComponents) {
  for (const example of componentDocumentation[slug]?.examples ?? []) {
    example.wide = false;
  }
}

for (const documentation of Object.values(componentDocumentation)) {
  const basicExample = documentation.examples[0];
  if (basicExample) {
    basicExample.title = docsCopy('基础用法');
  }
}

const caseCoverageSnippets: Readonly<Record<string, string>> = {
  resizable: `<Resizable
  items={items}
  separator={({ itemKey, nextItemKey, orientation }) => (
    <span>{itemKey} · {nextItemKey} · {orientation}</span>
  )}
/>`,
  'dropdown-menu': `<DropdownMenu defaultOpen={false} disabled items={items} side="right" trigger={trigger} />
<DropdownMenu open={open} onOpenChange={setOpen} items={items} trigger={trigger} />`,
  menubar: `<Menubar disabled items={items} />`,
  'navigation-menu': `<NavigationMenu
  items={items}
  orientation="vertical"
  value={value}
  onChange={setValue}
  delay={100}
  closeDelay={200}
/>
<NavigationMenu defaultValue="docs" items={items} />`,
  tabs: `<Tabs value={value} onChange={setValue} items={items} orientation="vertical" />`,
  'scroll-area': `<ScrollArea orientation="both" className="h-80 w-80">{content}</ScrollArea>`,
  checkbox: `<Checkbox
  checked={checked}
  onChange={setChecked}
  variant="card"
  uncheckedValue="off"
  classNames={{ control: 'border-primary' }}
  styles={{ label: { fontWeight: 600 } }}
>
  Release notifications
</Checkbox>
<Checkbox parent checked={allChecked} onChange={setAllChecked}>All permissions</Checkbox>
<Checkbox.Group allValues={allValues} disabled options={options} />`,
  'date-picker': `<DatePicker defaultValue={new Date()} disabled />
<DatePicker calendarProps={{ fixedWeeks: true }} />`,
  form: `<Form form={form} onInvalid={handleInvalid} onSubmit={handleSubmit}>
  <Form.Field name="team" defaultValue="platform" disabled>
    <Input />
  </Form.Field>
</Form>`,
  input: `<Input
  addonBefore="https://"
  addonAfter=".com"
  classNames={{ input: 'font-mono' }}
  styles={{ prefix: { color: 'var(--muted-foreground)' } }}
/>
<Input.OTP defaultValue="123456" maxLength={6} pattern="[0-9]*" />
<Input.TextArea defaultValue="Release notes" rows={4} />`,
  'input-number': `<Input.Number
  defaultValue={10}
  onChangeComplete={setCommittedValue}
  largeStep={25}
  prefix="¥"
  placeholder="Amount"
  allowWheelScrub
  snapOnStep
  classNames={{ input: 'tabular-nums' }}
  styles={{ controls: { opacity: 0.9 } }}
/>`,
  radio: `<Radio
  value="daily"
  disabled
  classNames={{ control: 'border-primary' }}
  styles={{ label: { fontWeight: 600 } }}
>
  Daily
</Radio>
<Radio.Group defaultValue="daily" disabled gap={16} options={options} />`,
  select: `<Select
  searchValue={query}
  onSearch={setQuery}
  multiple
  disabled={loading}
  locale="en-US"
  options={options}
/>
<Select defaultOpen defaultSearchValue="platform" options={options} />`,
  slider: `<Slider
  defaultValue={[20, 80]}
  disabled={loading}
  format={{ style: 'percent' }}
  locale="en-US"
  largeStep={10}
  minStepsBetweenValues={2}
  thumbCollisionBehavior="push"
  onChangeComplete={setCommittedValue}
/>`,
  switch: `<Switch value="enabled" uncheckedValue="disabled">Notifications</Switch>`,
  toggle: `<Toggle.Group disabled orientation="vertical" items={items} />`,
  counter: `<Counter
  value={1280}
  gap={2}
  prefix="¥"
  springOptions={{ damping: 24, stiffness: 180 }}
  classNames={{ digit: 'tabular-nums' }}
  styles={{ visual: { minWidth: 12 } }}
/>`,
  table: `<Table
  columns={columns}
  data={rows}
  showHeader={false}
  rowProps={(row) => ({ 'data-row-id': row.id })}
/>
<Table.Primitive>
  <Table.Header>
    <Table.Row>
      <Table.Head fixedOffset={48}>Name</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell fixedOffset={48}>Atlas</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Primitive>`,
  tooltip: `<Tooltip
  content="Keyboard shortcut"
  disabled={disabled}
  open={open}
  onOpenChange={(nextOpen) => setOpen(nextOpen)}
  classNames={{ content: 'max-w-64' }}
  styles={{ content: { textAlign: 'start' } }}
>
  <Button>Save</Button>
</Tooltip>
<Tooltip defaultOpen content="Pinned hint"><Button>Help</Button></Tooltip>`,
  'alert-dialog': `<AlertDialog
  open={open}
  onOpenChange={setOpen}
  title="Delete project?"
  description="This action cannot be undone."
  classNames={{ content: 'max-w-lg' }}
  styles={{ content: { minHeight: 240 } }}
/>
<AlertDialog defaultOpen={false} title="Archive project?" />`,
  dialog: `<Dialog
  open={open}
  onOpenChange={setOpen}
  footer={<Button>Save</Button>}
  closable={<CircleX />}
  classNames={{ content: 'max-w-xl' }}
  styles={{ content: { minHeight: 320 } }}
/>
<Dialog closable={false} defaultOpen={false} title="Workspace settings" />`,
  drawer: `<Drawer
  open={open}
  onOpenChange={setOpen}
  snapPoints={[0.25, 0.5, 1]}
  snapPoint={snapPoint}
  onSnapChange={setSnapPoint}
  closable
  handle
  sequential
  swipeDirection="down"
  classNames={{ content: 'max-h-screen' }}
  styles={{ content: { minHeight: 320 } }}
/>
<Drawer defaultOpen={false} defaultSnapPoint={0.5} />`,
  popover: `<Popover
  open={open}
  onOpenChange={setOpen}
  align="start"
  sideOffset={8}
  alignOffset={4}
  classNames={{ content: 'w-80' }}
  styles={{ content: { padding: 16 } }}
/>
<Popover defaultOpen={false} trigger={<Button>Open</Button>} />`,
  progress: `<Progress
  value={completed}
  min={0}
  max={200}
  locale="en-US"
  format={{ style: 'percent' }}
  getAriaValueText={(value, maximum) => value + ' of ' + maximum}
/>`,
  toast: `<Toast.Toaster position="top-right" richColors scope="local" />`,
  command: `<Command
  value={query}
  onChange={setQuery}
  filter={filterCommand}
  label="Quick actions"
  loop
  vimBindings
  disablePointerSelection
  groups={[
    {
      heading: 'Workspace',
      options: [
        {
          value: 'open-settings',
          label: 'Open settings',
          keywords: ['preferences'],
          icon: <Settings />,
          shortcut: '⌘,',
          disabled: false,
          onSelect: openSettings,
        },
      ],
    },
  ]}
/>
<Command defaultValue="settings" groups={groups} />`,
  'context-menu': `<ContextMenu
  trigger={target}
  items={items}
  classNames={{ content: 'min-w-48' }}
  styles={{ content: { padding: 4 } }}
/>`,
};

for (const [slug, snippet] of Object.entries(caseCoverageSnippets)) {
  const examples = componentDocumentation[slug]?.examples;
  const example = examples?.[examples.length - 1];
  if (example) example.code = `${example.code}\n\n${snippet}`;
}

const accordionSingleExample = componentDocumentation.accordion.examples[0];
if (accordionSingleExample) {
  accordionSingleExample.title = docsCopy('单项展开');
}

const apiCaseName = (property: ApiProperty) =>
  property.component ? `${property.component}.${property.name}` : property.name;

const resolveApiCaseName = (name: string, apiNames: Set<string>) => {
  if (apiNames.has(name)) return name;

  const compoundMatches = [...apiNames].filter((candidate) =>
    candidate.endsWith(`.${name}`)
  );
  return compoundMatches.length === 1 ? compoundMatches[0] : name;
};

for (const documentation of Object.values(componentDocumentation)) {
  const apiNames = new Set(documentation.api.map(apiCaseName));

  for (const example of documentation.examples) {
    example.coveredProperties = example.coveredProperties?.map((name) =>
      resolveApiCaseName(name, apiNames)
    );

    for (const axis of example.caseAxes ?? []) {
      for (const option of axis.options) {
        if (!option.properties) continue;
        option.properties = Object.fromEntries(
          Object.entries(option.properties).map(([name, value]) => [
            resolveApiCaseName(name, apiNames),
            value,
          ])
        );
      }
      if (axis.property === false) continue;
      const resolvedName = resolveApiCaseName(
        axis.property ?? axis.name,
        apiNames
      );
      axis.property = apiNames.has(resolvedName) ? resolvedName : false;
    }

    for (const harnessCase of example.cases ?? []) {
      if (!harnessCase.properties) continue;
      harnessCase.properties = Object.fromEntries(
        Object.entries(harnessCase.properties).map(([name, value]) => [
          resolveApiCaseName(name, apiNames),
          value,
        ])
      );
    }
  }

  const basicExample = documentation.examples[0];
  if (!basicExample) continue;
  const basicCases = basicExample.cases
    ? basicExample.cases
    : basicExample.caseAxes
      ? createCasesFromAxes(basicExample.caseAxes)
      : [
          {
            isDefault: true,
            label: docsCopy('默认'),
            properties: {},
            values: {},
          },
        ];
  const defaultIndex = Math.max(
    0,
    basicCases.findIndex((harnessCase) => harnessCase.isDefault)
  );

  basicExample.caseAxes = undefined;
  basicExample.cases = basicCases.map((harnessCase, index) => ({
    ...harnessCase,
    isDefault: index === defaultIndex,
    properties: harnessCase.properties,
  }));
}

const appendTypePreviews = (slug: string, previews: ApiTypePreview[]) => {
  const documentation = componentDocumentation[slug];
  if (!documentation) return;

  documentation.typePreviews = [
    ...(documentation.typePreviews ?? []),
    ...previews,
  ];
};

appendTypePreviews('breadcrumb', [
  {
    name: 'BreadcrumbItem',
    definition: `type BreadcrumbItem = {
  label: ReactNode
  href?: string
  icon?: ReactNode
  disabled?: boolean
  menu?: BreadcrumbMenuItem[]
  separator?: BreadcrumbSeparator
  onClick?: MouseEventHandler<HTMLAnchorElement>
}`,
  },
  {
    name: 'BreadcrumbMenuItem',
    definition: `type BreadcrumbMenuItem = {
  label: ReactNode
  href?: string
  icon?: ReactNode
  disabled?: boolean
  onSelect?: () => void
}`,
  },
  {
    name: 'BreadcrumbSeparator',
    definition:
      "type BreadcrumbSeparator = 'chevron' | 'slash' | 'dot' | ReactNode",
  },
]);

appendTypePreviews('checkbox', [
  {
    name: 'CheckboxOption',
    definition: `type CheckboxOption = {
  className?: string
  disabled?: boolean
  label: ReactNode
  value: string
  variant?: 'default' | 'task'
}`,
  },
]);

appendTypePreviews('command', [
  {
    name: 'CommandFilter',
    definition: `type CommandFilter = (
  value: string,
  search: string,
  keywords?: string[]
) => number`,
  },
]);

appendTypePreviews('drawer', [
  {
    name: 'DrawerSnapPoint',
    definition: 'type DrawerSnapPoint = number | string',
  },
]);

appendTypePreviews('input-number', [
  {
    name: 'InputNumberControls',
    definition: `type InputNumberControls = {
  decrement?: ReactNode
  increment?: ReactNode
}`,
  },
]);

appendTypePreviews('masonry', [
  {
    name: 'MasonryLength',
    definition: 'type MasonryLength = number | string',
  },
  {
    name: 'MasonryGap',
    definition:
      'type MasonryGap = MasonryLength | readonly [MasonryLength, MasonryLength]',
  },
]);

appendTypePreviews('navigation-menu', [
  {
    name: 'NavigationMenuItemConfig',
    definition: `type NavigationMenuItemConfig = {
  active?: boolean
  content?: ReactNode | ((slots: NavigationMenuLinkSlots) => ReactNode)
  disabled?: boolean
  href?: string
  label: ReactNode
  value?: string
}`,
  },
  {
    name: 'NavigationMenuLinkSlots',
    definition: `type NavigationMenuLinkSlots = {
  Link: NavigationMenuLinkComponent
}`,
  },
  {
    name: 'NavigationMenuLinkComponent',
    definition:
      'type NavigationMenuLinkComponent = (props: NavigationMenuLinkProps) => ReactNode',
  },
  {
    name: 'NavigationMenuLinkProps',
    definition: `type NavigationMenuLinkProps = Omit<ComponentProps<'a'>, 'children'> & {
  active?: boolean
  children?: ReactNode
  closeOnClick?: boolean
}`,
  },
]);

appendTypePreviews('layout', [
  {
    name: 'LayoutSidebarLabels',
    definition: `type LayoutSidebarLabels = {
  collapse: string
  expand: string
}`,
  },
]);

appendTypePreviews('pagination', [
  {
    name: 'PaginationAriaLabels',
    definition: `type PaginationAriaLabels = {
  first?: string
  last?: string
  more?: string
  navigation?: string
  next?: string
  page?: (page: number) => string
  pageSize?: string
  previous?: string
  quickJumper?: string
}`,
  },
  {
    name: 'PaginationAriaLabelContext',
    definition: `type PaginationAriaLabelContext = {
  page: number | null
  selected: boolean
  type: PaginationItemType
}`,
  },
  {
    name: 'PaginationItemType',
    definition: `type PaginationItemType =
  | 'page'
  | 'first'
  | 'last'
  | 'next'
  | 'previous'
  | 'ellipsis-start'
  | 'ellipsis-end'`,
  },
  {
    name: 'PaginationQuickJumperOptions',
    definition: `type PaginationQuickJumperOptions = {
  goButton?: ReactNode
  label?: ReactNode
  suffix?: ReactNode
}`,
  },
  {
    name: 'PaginationRenderItemProps',
    definition: `type PaginationRenderItemProps = {
  disabled: boolean
  originalElement: ReactElement
  page: number | null
  selected: boolean
  type: PaginationItemType
}`,
  },
  {
    name: 'PaginationSimpleOptions',
    definition: `type PaginationSimpleOptions = {
  readOnly?: boolean
}`,
  },
  {
    name: 'PaginationSize',
    definition: "type PaginationSize = 'sm' | 'default' | 'lg'",
  },
]);

appendTypePreviews('radio', [
  {
    name: 'RadioOption',
    definition: `type RadioOption<Value = string> = {
  className?: string
  disabled?: boolean
  label: ReactNode
  value: Value
}`,
  },
]);

appendTypePreviews('resizable', [
  {
    name: 'PanelSize',
    definition: `type PanelSize = {
  asPercentage: number
  inPixels: number
}`,
  },
  {
    name: 'ResizableSeparator',
    definition:
      'type ResizableSeparator = ReactNode | ((props: ResizableSeparatorRenderProps) => ReactNode)',
  },
]);

appendTypePreviews('select', [
  {
    name: 'SelectOption',
    definition: `type SelectOption<Value> = {
  disabled?: boolean
  label: ReactNode
  value: Value
}`,
  },
  {
    name: 'SelectOptionGroup',
    definition: `type SelectOptionGroup<Value> = {
  label: ReactNode
  options: readonly SelectOption<Value>[]
}`,
  },
  {
    name: 'SelectTriggerProps',
    definition: `type SelectTriggerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'className'> & {
  children?: ReactNode
  className?: string
  inputRef?: Ref<HTMLInputElement>
  showClear?: boolean
  showTrigger?: boolean
}`,
  },
]);

appendTypePreviews('table', [
  {
    name: 'Table.Render',
    definition:
      'type Table.Render<TData> = (value: unknown, row: TData, index: number) => ReactNode',
  },
  {
    name: 'Table.SearchProps',
    definition: `type Table.SearchProps<TData> = {
  'aria-label'?: string
  columnKeys?: string[]
  defaultValue?: string
  mode?: 'client' | 'manual'
  onChange?: (value: string) => void
  placeholder?: string
  predicate?: (row: TData, query: string) => boolean
  value?: string
}`,
  },
  {
    name: 'Table.SortingProps',
    definition: `type Table.SortingProps = {
  defaultValue?: Table.SortState | null
  mode?: 'client' | 'manual'
  onChange?: (value: Table.SortState | null) => void
  value?: Table.SortState | null
}`,
  },
  {
    name: 'Table.SortState',
    definition: `type Table.SortState = {
  columnKey: string
  order: Table.SortOrder
}`,
  },
  {
    name: 'Table.SortOrder',
    definition: "type Table.SortOrder = 'ascending' | 'descending'",
  },
  {
    name: 'Table.PaginationProps',
    definition: `type Table.PaginationProps = {
  current?: number
  defaultCurrent?: number
  mode?: 'client' | 'manual'
  onChange?: (page: number, pageSize: number) => void
  pageSize?: number
  summary?: boolean | ((total: number, current: number, pageCount: number) => ReactNode)
  total?: number
}`,
  },
  {
    name: 'Table.RowSelectionProps',
    definition: `type Table.RowSelectionProps<TData> = {
  defaultValue?: Key[]
  disabled?: (row: TData, index: number) => boolean
  header?: ReactNode
  labels?: Table.SelectionLabels<TData>
  onChange?: (keys: Key[], rows: readonly TData[]) => void
  value?: Key[]
}`,
  },
  {
    name: 'Table.SelectionLabels',
    definition: `type Table.SelectionLabels<TData> = {
  all?: (rows: readonly TData[]) => string
  item?: (row: TData, index: number) => string
}`,
  },
  {
    name: 'Table.ExpandableProps',
    definition: `type Table.ExpandableProps<TData> = {
  canExpand?: (row: TData, index: number) => boolean
  defaultValue?: Key[]
  header?: ReactNode
  labels?: Table.ExpandLabels<TData>
  onChange?: (keys: Key[]) => void
  render: (row: TData, index: number) => ReactNode
  value?: Key[]
}`,
  },
  {
    name: 'Table.ExpandLabels',
    definition: `type Table.ExpandLabels<TData> = {
  collapse?: (row: TData, index: number) => string
  expand?: (row: TData, index: number) => string
}`,
  },
  {
    name: 'Table.VirtualProps',
    definition: `type Table.VirtualProps = {
  containerHeight?: number | string
  overscan?: number
  rowHeight?: number
}`,
  },
]);

appendTypePreviews('tooltip', [
  {
    name: 'TooltipPlacement',
    definition: `type TooltipPlacement =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'leftTop'
  | 'left'
  | 'leftBottom'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight'`,
  },
  {
    name: 'TooltipProviderDefaults',
    definition: `type TooltipProviderDefaults = {
  arrow?: boolean
  closeDelay?: number
  openDelay?: number
  placement?: TooltipPlacement
}`,
  },
]);

appendTypePreviews('toggle', [
  {
    name: 'ToggleGroupOption',
    definition: `type ToggleGroupOption<Value extends string = string> = {
  label: ReactNode
  value: Value
} & ButtonHTMLAttributes<HTMLButtonElement>`,
  },
]);
