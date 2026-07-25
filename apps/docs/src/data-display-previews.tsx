'use client';

import { useState, type ReactNode } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@heliannuuthus/ui/accordion';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from '@heliannuuthus/ui/attachment';
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
} from '@heliannuuthus/ui/avatar';
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from '@heliannuuthus/ui/bubble';
import { Badge } from '@heliannuuthus/ui/badge';
import { Button } from '@heliannuuthus/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from '@heliannuuthus/ui/carousel';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@heliannuuthus/ui/chart';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleFooter,
  CollapsibleHeader,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from '@heliannuuthus/ui/collapsible';
import { Counter } from '@heliannuuthus/ui/counter';
import {
  DataTable,
  DataTableActions,
  DataTableColumnHeader,
} from '@heliannuuthus/ui/data-table';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@heliannuuthus/ui/dropdown-menu';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@heliannuuthus/ui/empty';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@heliannuuthus/ui/hover-card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@heliannuuthus/ui/item';
import { Marker, MarkerContent, MarkerIcon } from '@heliannuuthus/ui/marker';
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
  MessageStatus,
} from '@heliannuuthus/ui/message';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@heliannuuthus/ui/message-scroller';
import { Slider } from '@heliannuuthus/ui/slider';
import { Stack } from '@heliannuuthus/ui/stack';
import { Separator } from '@heliannuuthus/ui/separator';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@heliannuuthus/ui/table';
import { TypographySmall } from '@heliannuuthus/ui/typography';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@heliannuuthus/ui/tooltip';
import {
  Activity,
  Archive,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  Download,
  FileArchive,
  FileCode2,
  FileText,
  GitCommitHorizontal,
  Inbox,
  MessageCircle,
  Minus,
  MoreHorizontal,
  PackageCheck,
  Plus,
  RotateCcw,
  Server,
  ShieldCheck,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export function AccordionReleaseDemo({
  mode = 'single',
}: {
  mode?: 'single' | 'multiple';
}) {
  const multiple = mode === 'multiple';

  return (
    <div className="display-panel">
      <div className="display-panel-heading">
        <div>
          <span className="display-eyebrow">v0.12.0</span>
          <strong>生产发布检查</strong>
        </div>
        <Badge variant="secondary">3 / 3 就绪</Badge>
      </div>
      <Accordion
        key={mode}
        multiple={multiple}
        defaultValue={multiple ? ['preflight', 'rollback'] : ['preflight']}
      >
        <AccordionItem value="preflight">
          <AccordionTrigger>预检结果</AccordionTrigger>
          <AccordionContent>
            构建、类型检查和 42 项端到端用例均已通过。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="owners">
          <AccordionTrigger>值班负责人</AccordionTrigger>
          <AccordionContent>
            林默负责发布，周一负责回滚与告警确认。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rollback">
          <AccordionTrigger>回滚方案</AccordionTrigger>
          <AccordionContent>
            保留上一版本镜像，异常时可在 90 秒内切回 v0.11.4。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function CounterBuildDemo() {
  const [count, setCount] = useState(1284);

  return (
    <div className="display-counter-card">
      <div>
        <span>本周构建</span>
        <small>CI 完成的有效构建次数</small>
      </div>
      <Counter
        fontSize={60}
        fontWeight={600}
        places={[1000, 100, 10, 1]}
        suffix={<small>次</small>}
        value={count}
        valueText={`${count} 次构建`}
      />
      <div className="display-counter-actions">
        <Button onClick={() => setCount((value) => Math.max(0, value - 18))}>
          <Minus />
          减少 18
        </Button>
        <Button onClick={() => setCount((value) => value + 24)}>
          <Plus />
          增加 24
        </Button>
        <Button onClick={() => setCount(1284)} variant="ghost">
          <RotateCcw />
          重置
        </Button>
      </div>
    </div>
  );
}

export function AccordionModesDemo() {
  return (
    <div className="accordion-modes-demo">
      <section className="accordion-mode-example">
        <div className="accordion-mode-heading">
          <strong>单项展开</strong>
          <span>一次只保留一个面板</span>
        </div>
        <AccordionReleaseDemo mode="single" />
      </section>
      <section className="accordion-mode-example">
        <div className="accordion-mode-heading">
          <strong>多项展开</strong>
          <span>允许同时核对多个面板</span>
        </div>
        <AccordionReleaseDemo mode="multiple" />
      </section>
    </div>
  );
}

function AccordionIndicatorSample({
  description,
  expandedIndicator,
  indicator,
  indicatorPosition,
  kind,
  title,
}: {
  description: string;
  expandedIndicator?: ReactNode;
  indicator?: ReactNode;
  indicatorPosition?: 'start' | 'end';
  kind: 'custom' | 'end' | 'start';
  title: string;
}) {
  return (
    <section className="accordion-indicator-example" data-example={kind}>
      <div className="accordion-mode-heading">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <Accordion
        defaultValue={['deployment']}
        expandedIndicator={expandedIndicator}
        indicator={indicator}
        indicatorPosition={indicatorPosition}
      >
        <AccordionItem value="deployment">
          <AccordionTrigger>部署策略</AccordionTrigger>
          <AccordionContent>
            先灰度 10%，观察十分钟后全量发布。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="cache">
          <AccordionTrigger>缓存刷新</AccordionTrigger>
          <AccordionContent>发布完成后刷新边缘节点缓存。</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export function AccordionIndicatorDemo() {
  return (
    <div className="accordion-indicator-demo">
      <AccordionIndicatorSample
        description="默认位置"
        kind="end"
        title="末端箭头"
      />
      <AccordionIndicatorSample
        description="靠近标题"
        indicatorPosition="start"
        kind="start"
        title="起始箭头"
      />
      <AccordionIndicatorSample
        description="展开状态可替换"
        expandedIndicator={<Minus />}
        indicator={<Plus />}
        kind="custom"
        title="自定义指示器"
      />
    </div>
  );
}

type AttachmentState = 'idle' | 'uploading' | 'processing' | 'error' | 'done';

const releaseFiles: Array<{
  description: string;
  icon: typeof FileText;
  name: string;
  state: AttachmentState;
}> = [
  {
    name: 'release-notes.md',
    description: '24 KB · 已同步',
    icon: FileText,
    state: 'done',
  },
  {
    name: 'web-console.tgz',
    description: '8.4 MB · 正在校验',
    icon: FileArchive,
    state: 'processing',
  },
  {
    name: 'source-map.zip',
    description: '12.1 MB · 上传失败',
    icon: FileCode2,
    state: 'error',
  },
];

export function AttachmentReleaseDemo({
  orientation = 'horizontal',
}: {
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <div className="display-attachments">
      <div className="display-section-label">
        {orientation === 'vertical' ? '纵向缩略卡' : '横向文件行'}
      </div>
      <AttachmentGroup>
        {releaseFiles.map((file) => {
          const Icon = file.icon;
          return (
            <Attachment
              key={file.name}
              orientation={orientation}
              state={file.state}
            >
              <AttachmentMedia>
                <Icon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>{file.name}</AttachmentTitle>
                <AttachmentDescription>
                  {file.description}
                </AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label={`下载 ${file.name}`}>
                  {file.state === 'error' ? <RotateCcw /> : <Download />}
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          );
        })}
      </AttachmentGroup>
    </div>
  );
}

const avatarPeople = [
  { initials: '林', tone: 'blue' },
  { initials: '周', tone: 'amber' },
  { initials: '陈', tone: 'green' },
  { initials: '许', tone: 'rose' },
  { initials: '吴', tone: 'violet' },
  { initials: '宋', tone: 'slate' },
] as const;

export function AvatarShapeDemo() {
  const sizes = [
    { label: '小', meta: '24 px', value: 'sm' },
    { label: '中', meta: '32 px', value: 'default' },
    { label: '大', meta: '40 px', value: 'lg' },
  ] as const;

  return (
    <div className="display-avatar-shapes">
      {(['circle', 'square'] as const).map((shape) => (
        <section className="display-avatar-shape-card" key={shape}>
          <div className="display-avatar-case-heading">
            <strong>{shape === 'circle' ? '圆形' : '圆角方形'}</strong>
            <code>{`shape="${shape}"`}</code>
          </div>
          <div className="display-avatar-size-row">
            {sizes.map((size, index) => (
              <div className="display-avatar-size-item" key={size.value}>
                <Avatar shape={shape} size={size.value}>
                  <AvatarFallback
                    className={`display-avatar-tone-${avatarPeople[index]?.tone}`}
                  >
                    {avatarPeople[index]?.initials}
                  </AvatarFallback>
                </Avatar>
                <span>
                  {size.label} · {size.meta}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function AvatarGroupDemo() {
  const [max, setMax] = useState(4);
  const [overlap, setOverlap] = useState(8);

  return (
    <div className="display-avatar-group-demo">
      <div className="display-avatar-group-stage">
        <div>
          <span>发布协作者</span>
          <strong>当前展示 {Math.min(max, avatarPeople.length)} 人</strong>
        </div>
        <AvatarGroup
          aria-label={`展示 ${Math.min(max, avatarPeople.length)} 位协作者，其余自动汇总`}
          max={max}
          overlap={overlap}
          size="lg"
        >
          {avatarPeople.map((person) => (
            <Avatar key={person.initials}>
              <AvatarFallback className={`display-avatar-tone-${person.tone}`}>
                {person.initials}
              </AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
      <div className="display-avatar-group-controls">
        <label>
          <span>
            最多展示
            <output>{max}</output>
          </span>
          <Slider
            aria-label="最多展示的头像数量"
            effect="none"
            max={6}
            min={1}
            onValueChange={(value) =>
              setMax(Array.isArray(value) ? (value[0] ?? 4) : value)
            }
            step={1}
            value={max}
          />
        </label>
        <label>
          <span>
            重叠程度
            <output>{overlap}px</output>
          </span>
          <Slider
            aria-label="头像重叠程度"
            effect="none"
            max={12}
            min={0}
            onValueChange={(value) =>
              setOverlap(Array.isArray(value) ? (value[0] ?? 8) : value)
            }
            step={2}
            value={overlap}
          />
        </label>
      </div>
    </div>
  );
}

export function AvatarBadgeDemo() {
  const cases = [
    {
      title: '在线状态',
      description: '无内容时显示状态圆点',
      avatar: (
        <Avatar size="lg">
          <AvatarFallback className="display-avatar-tone-green">
            林
          </AvatarFallback>
          <AvatarBadge />
        </Avatar>
      ),
      badge: <Badge variant="secondary">在线</Badge>,
    },
    {
      title: '认证状态',
      description: '图标随头像尺寸缩放',
      avatar: (
        <Avatar shape="square" size="lg">
          <AvatarFallback className="display-avatar-tone-blue">
            周
          </AvatarFallback>
          <AvatarBadge>
            <Check />
          </AvatarBadge>
        </Avatar>
      ),
      badge: <Badge variant="outline">已认证</Badge>,
    },
    {
      title: '未读提醒',
      description: '将 Badge 渲染到头像锚点',
      avatar: (
        <Avatar size="lg">
          <AvatarFallback className="display-avatar-tone-rose">
            陈
          </AvatarFallback>
          <AvatarBadge
            className="display-avatar-notification"
            render={<Badge variant="destructive" />}
          >
            8
          </AvatarBadge>
        </Avatar>
      ),
      badge: <Badge variant="destructive">需要处理</Badge>,
    },
  ];

  return (
    <div className="display-avatar-badge-grid">
      {cases.map((item) => (
        <article className="display-avatar-badge-card" key={item.title}>
          <div className="display-avatar-badge-visual">{item.avatar}</div>
          <div>
            <span>{item.badge}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BubbleVariantsDemo() {
  const replies = [
    { label: '强调', token: 'default', variant: 'default' },
    { label: '浮起', token: 'elevated', variant: 'elevated' },
    { label: '柔和', token: 'tinted', variant: 'tinted' },
    { label: '描边', token: 'outline', variant: 'outline' },
  ] as const;

  return (
    <div className="display-bubble-variants">
      {replies.map((reply, index) => (
        <div className="display-bubble-variant" key={reply.variant}>
          <div className="display-bubble-variant-label">
            <strong>{reply.label}</strong>
            <span>{reply.token}</span>
          </div>
          <BubbleGroup>
            <Bubble align="end" variant={reply.variant}>
              <BubbleContent>已经补充完成，可以重新评审。</BubbleContent>
              <BubbleReactions>✓ 2</BubbleReactions>
            </Bubble>
          </BubbleGroup>
          {index < replies.length - 1 && (
            <Separator className="display-bubble-separator" />
          )}
        </div>
      ))}
    </div>
  );
}

export function MessageConversationDemo() {
  return (
    <MessageGroup
      aria-label="发布评审对话"
      className="display-conversation-list"
      role="list"
    >
      <Message align="start" role="listitem">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback className="display-avatar-tone-green">
              林
            </AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>林默 · 21:42</MessageHeader>
          <Bubble variant="elevated">
            <BubbleContent>
              预检已经通过，迁移脚本和回滚镜像都确认可用。
            </BubbleContent>
          </Bubble>
          <MessageFooter>发布负责人</MessageFooter>
        </MessageContent>
      </Message>

      <Message align="start" role="listitem">
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              我会先切换 10% 流量，观察五分钟后再继续。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      <div className="display-conversation-divider" role="presentation">
        <Separator />
        <span>今天 21:46</span>
        <Separator />
      </div>

      <Message align="end" role="listitem">
        <MessageContent>
          <Bubble align="end" variant="tinted">
            <BubbleContent>收到，我先盯住错误率和延迟。</BubbleContent>
          </Bubble>
          <MessageFooter>
            <MessageStatus status="unread">
              <CircleDot />
              未读
            </MessageStatus>
          </MessageFooter>
        </MessageContent>
      </Message>

      <Message align="end" role="listitem">
        <MessageAvatar>
          <Avatar shape="square">
            <AvatarFallback className="display-avatar-tone-blue">
              周
            </AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>周一 · 21:48</MessageHeader>
          <Bubble align="end" variant="default">
            <BubbleContent>指标稳定，可以继续全量发布。</BubbleContent>
            <BubbleReactions>👍 3</BubbleReactions>
          </Bubble>
          <MessageFooter>
            <MessageStatus status="read">
              <Check />
              已读
            </MessageStatus>
          </MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
}

const releaseHighlights = [
  {
    icon: Sparkles,
    kicker: '体验',
    title: '筛选器响应更快',
    description: '大型列表的输入响应时间降低 42%。',
  },
  {
    icon: ShieldCheck,
    kicker: '可靠性',
    title: '发布前自动预检',
    description: '缺失变量会在进入生产阶段前被拦截。',
  },
  {
    icon: PackageCheck,
    kicker: '组件',
    title: '数据展示案例补齐',
    description: '16 个组件现在都有真实交互场景。',
  },
];

export function CarouselHighlightsDemo({
  autoplay = false,
  dotPosition = 'bottom',
  loop = false,
  pauseOnHover,
}: {
  autoplay?: boolean | number;
  dotPosition?: 'top' | 'bottom';
  loop?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <Carousel
      aria-label="版本亮点"
      autoplay={autoplay}
      className={`display-carousel${autoplay !== false ? ' display-carousel-autoplay' : ''}`}
      loop={loop}
      pauseOnHover={pauseOnHover}
    >
      {dotPosition === 'top' ? <CarouselDots /> : null}
      <CarouselContent>
        {releaseHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <CarouselItem key={highlight.title}>
              <article className="display-highlight">
                <div className="display-highlight-icon">
                  <Icon />
                </div>
                <span>
                  {highlight.kicker} · 0{index + 1}
                </span>
                <strong>{highlight.title}</strong>
                <p>{highlight.description}</p>
              </article>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="display-carousel-previous" />
      <CarouselNext className="display-carousel-next" />
      {dotPosition === 'bottom' ? <CarouselDots /> : null}
    </Carousel>
  );
}

export function CarouselCustomPaginationDemo() {
  return (
    <Carousel
      aria-label="带自定义翻页器的版本亮点"
      className="display-carousel"
    >
      <CarouselContent>
        {releaseHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <CarouselItem key={highlight.title}>
              <article className="display-highlight">
                <div className="display-highlight-icon">
                  <Icon />
                </div>
                <span>
                  {highlight.kicker} · 0{index + 1}
                </span>
                <strong>{highlight.title}</strong>
                <p>{highlight.description}</p>
              </article>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPagination>
        {({
          canScrollNext,
          canScrollPrev,
          currentPage,
          pageCount,
          scrollNext,
          scrollPrev,
        }) => (
          <Stack
            align="center"
            aria-label="轮播分页"
            className="my-3"
            gap={8}
            justify="center"
            orientation="horizontal"
            role="group"
          >
            <Button
              aria-label="上一页"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              size="sm"
              variant="outline"
            >
              上一页
            </Button>
            <TypographySmall
              aria-live="polite"
              className="min-w-14 text-center"
            >
              {currentPage} / {Math.max(pageCount, 1)}
            </TypographySmall>
            <Button
              aria-label="下一页"
              disabled={!canScrollNext}
              onClick={scrollNext}
              size="sm"
              variant="outline"
            >
              下一页
            </Button>
          </Stack>
        )}
      </CarouselPagination>
    </Carousel>
  );
}

export function CarouselAutoplayDemo() {
  return (
    <div className="display-carousel-autoplay-stage">
      <div className="display-carousel-autoplay-heading">
        <span>默认景深动效</span>
        <strong>自动播放，悬停即暂停</strong>
        <small>自动播放 · 首尾循环 · 3D 景深</small>
      </div>
      <CarouselHighlightsDemo autoplay={2.2} loop />
    </div>
  );
}

const deploymentData = [
  { day: '07.21', success: 92.4 },
  { day: '07.22', success: 94.8 },
  { day: '07.23', success: 93.6 },
  { day: '07.24', success: 96.2 },
  { day: '07.25', success: 95.7 },
  { day: '07.26', success: 98.1 },
  { day: '今天', success: 97.4 },
];

const deploymentChartConfig = {
  success: { label: '发布成功率', color: 'var(--primary)' },
} satisfies ChartConfig;

export function ChartDeploymentDemo() {
  return (
    <section aria-label="发布健康度趋势" className="display-chart-story">
      <header className="display-chart-story-header">
        <div className="display-chart-story-title">
          <span className="display-chart-story-mark" aria-hidden="true">
            <Activity />
          </span>
          <div>
            <span>RELEASE PULSE · 7 DAYS</span>
            <strong>发布健康度</strong>
          </div>
        </div>
        <Badge variant="secondary">
          <span className="display-chart-live-dot" aria-hidden="true" />
          系统稳定
        </Badge>
      </header>

      <div className="display-chart-story-summary">
        <div className="display-chart-story-primary">
          <span>生产发布成功率</span>
          <strong>97.4%</strong>
          <small>
            <ArrowUpRight aria-hidden="true" />
            较上周提升 2.6%
          </small>
        </div>
        <dl>
          <div>
            <dt>发布次数</dt>
            <dd>128</dd>
          </div>
          <div>
            <dt>平均耗时</dt>
            <dd>6m 48s</dd>
          </div>
          <div>
            <dt>需要回滚</dt>
            <dd>4</dd>
          </div>
        </dl>
      </div>

      <div className="display-chart-story-plot">
        <div className="display-chart-story-plot-heading">
          <div>
            <strong>成功率趋势</strong>
            <span>目标线 95%</span>
          </div>
          <span>近七日</span>
        </div>
        <ChartContainer
          className="display-chart"
          config={deploymentChartConfig}
          initialDimension={{ width: 720, height: 280 }}
        >
          <AreaChart
            accessibilityLayer
            data={deploymentData}
            margin={{ left: -12, right: 12, top: 12 }}
          >
            <defs>
              <linearGradient
                id="release-health-gradient"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-success)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="88%"
                  stopColor="var(--color-success)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 8" vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="day"
              tickLine={false}
              tickMargin={12}
            />
            <YAxis
              axisLine={false}
              domain={[88, 100]}
              tickFormatter={(value) => `${value}%`}
              tickLine={false}
              width={42}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={false}
            />
            <Area
              dataKey="success"
              fill="url(#release-health-gradient)"
              fillOpacity={1}
              stroke="var(--color-success)"
              strokeWidth={2.5}
              type="monotone"
            />
          </AreaChart>
        </ChartContainer>
      </div>

      <footer className="display-chart-story-footer">
        <div>
          <span className="display-chart-story-legend" aria-hidden="true" />
          发布成功率
        </div>
        <span>每 5 分钟刷新 · UTC+8</span>
      </footer>
    </section>
  );
}

export function CollapsibleBuildDemo() {
  return (
    <Collapsible className="display-build-log" defaultOpen>
      <CollapsibleHeader className="display-build-summary">
        <div className="display-status-icon is-success">
          <CheckCircle2 />
        </div>
        <div>
          <strong>构建 #1842 已完成</strong>
          <span>1m 48s · commit 7f92c1a</span>
        </div>
        <Badge variant="secondary">成功</Badge>
        <CollapsibleIndicator rotation={90}>
          <ChevronRight />
        </CollapsibleIndicator>
      </CollapsibleHeader>
      <CollapsibleContent className="display-build-content">
        <code>
          <span>21:42:08</span> packages/ui build completed
          <br />
          <span>21:42:31</span> docs type-check passed
          <br />
          <span>21:43:02</span> 42 browser checks passed
        </code>
        <CollapsibleFooter className="display-build-footer">
          <span>日志保留 30 天</span>
          <Button size="xs" variant="ghost">
            查看构建产物
          </Button>
        </CollapsibleFooter>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CollapsiblePolicyDemo() {
  return (
    <Collapsible className="display-build-log display-policy">
      <div className="display-build-summary">
        <div className="display-status-icon">
          <ShieldCheck />
        </div>
        <div>
          <strong>灰度发布策略</strong>
          <span>先发布到 10% 的生产实例</span>
        </div>
        <CollapsibleTrigger size="sm" variant="outline">
          配置
          <CollapsibleIndicator className="ml-1" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="display-policy-content">
        <div className="display-policy-grid">
          <div>
            <span>首批流量</span>
            <strong>10%</strong>
          </div>
          <div>
            <span>观察窗口</span>
            <strong>10 分钟</strong>
          </div>
          <div>
            <span>自动回滚</span>
            <strong>错误率 &gt; 2%</strong>
          </div>
        </div>
        <CollapsibleFooter>
          <span>仅影响下一次生产发布</span>
          <Button size="xs">应用策略</Button>
        </CollapsibleFooter>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CollapsibleTriggersDemo() {
  return (
    <div className="display-collapsible-showcase">
      <section>
        <div className="display-collapsible-case-heading">
          <span>Header 触发</span>
          <small>自定义标题内容与方向图标</small>
        </div>
        <CollapsibleBuildDemo />
      </section>
      <section>
        <div className="display-collapsible-case-heading">
          <span>Button 触发</span>
          <small>Header 保持静态，只让按钮控制内容</small>
        </div>
        <CollapsiblePolicyDemo />
      </section>
    </div>
  );
}

type ReleaseRecord = {
  environment: string;
  owner: string;
  status: '成功' | '回滚' | '运行中';
  version: string;
};

const releaseRecords: ReleaseRecord[] = [
  { version: 'v0.12.0', environment: '生产', owner: '林默', status: '成功' },
  { version: 'v0.11.4', environment: '生产', owner: '周一', status: '成功' },
  { version: 'v0.11.3', environment: '预览', owner: '许澄', status: '运行中' },
  { version: 'v0.11.2', environment: '生产', owner: '林默', status: '回滚' },
  { version: 'v0.11.1', environment: '预览', owner: '周一', status: '成功' },
];

const releaseColumns: ColumnDef<ReleaseRecord>[] = [
  {
    accessorKey: 'version',
    header: ({ column }) => (
      <DataTableColumnHeader column={column}>版本</DataTableColumnHeader>
    ),
  },
  { accessorKey: 'environment', header: '环境', enableSorting: false },
  { accessorKey: 'owner', header: '负责人', enableSorting: false },
  {
    accessorKey: 'status',
    header: '状态',
    enableSorting: false,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant={status === '回滚' ? 'destructive' : 'secondary'}>
          {status}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: '操作',
    meta: {
      align: 'end',
      headerClassName: 'w-36',
    },
    cell: ({ row }) => (
      <DataTableActions aria-label={`${row.original.version} 操作`}>
        <Button size="xs" variant="ghost">
          查看
        </Button>
        <DropdownMenuRoot>
          <DropdownMenuTrigger
            render={
              <Button
                aria-label={`${row.original.version} 更多操作`}
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>
              <Download />
              下载日志
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Archive />
              归档记录
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2 />
              删除记录
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </DataTableActions>
    ),
  },
];

const groupedReleaseColumns: ColumnDef<ReleaseRecord>[] = [
  {
    id: 'release',
    header: '发布信息',
    columns: [
      {
        accessorKey: 'version',
        header: ({ column }) => (
          <DataTableColumnHeader column={column}>版本</DataTableColumnHeader>
        ),
      },
      { accessorKey: 'environment', header: '环境', enableSorting: false },
    ],
  },
  {
    id: 'execution',
    header: '执行情况',
    columns: [
      { accessorKey: 'owner', header: '负责人', enableSorting: false },
      {
        accessorKey: 'status',
        header: '状态',
        enableSorting: false,
        cell: ({ row }) => {
          const status = row.original.status;
          return (
            <Badge variant={status === '回滚' ? 'destructive' : 'secondary'}>
              {status}
            </Badge>
          );
        },
      },
    ],
  },
  {
    id: 'operation',
    header: '操作',
    meta: { align: 'end' },
    columns: [
      {
        id: 'detail',
        header: '记录',
        meta: { align: 'end' },
        cell: ({ row }) => (
          <DataTableActions aria-label={`${row.original.version} 操作`}>
            <Button size="xs" variant="outline">
              {row.original.status === '运行中' ? '监控' : '详情'}
            </Button>
          </DataTableActions>
        ),
      },
    ],
  },
];

export function DataTableReleaseDemo() {
  return (
    <div className="display-data-table">
      <DataTable
        columns={releaseColumns}
        data={releaseRecords}
        filterColumn="version"
        filterPlaceholder="筛选版本…"
        emptyMessage="没有匹配的发布记录"
      />
    </div>
  );
}

export function DataTableGroupedHeaderDemo() {
  return (
    <div className="display-data-table display-data-table-grouped">
      <DataTable
        columns={groupedReleaseColumns}
        data={releaseRecords}
        emptyMessage="暂无发布记录"
      />
    </div>
  );
}

export function EmptyReleaseDemo({
  context = 'new',
}: {
  context?: 'new' | 'filtered';
}) {
  const filtered = context === 'filtered';

  return (
    <Empty
      className="display-empty"
      icon={filtered ? <Inbox /> : <Cloud />}
      title={filtered ? '没有匹配的发布记录' : '还没有生产发布'}
      description={
        filtered
          ? '试试缩短版本关键词，或清除当前环境筛选。'
          : '完成预检后，可以从这里安排第一次生产发布。'
      }
      actions={
        <Button size="sm" variant={filtered ? 'outline' : 'default'}>
          {filtered ? <RotateCcw /> : <Plus />}
          {filtered ? '清除筛选' : '安排发布'}
        </Button>
      }
    />
  );
}

export function EmptyDefaultDemo() {
  return <Empty className="display-empty" />;
}

export function EmptyCompositionDemo() {
  return (
    <Empty className="display-empty display-empty-custom" variant="custom">
      <EmptyHeader>
        <EmptyMedia className="display-empty-custom-media">
          <ShieldCheck />
        </EmptyMedia>
        <EmptyTitle>等待安全审计</EmptyTitle>
        <EmptyDescription>
          审计通过前，生产环境不会显示可发布版本。
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="display-empty-custom-meta">
          <span>12 项规则</span>
          <span>预计 4 分钟</span>
        </div>
        <Button size="sm" variant="outline">
          查看审计进度
        </Button>
      </EmptyContent>
    </Empty>
  );
}

export function HoverCardOwnerDemo({
  side = 'bottom',
}: {
  side?: 'bottom' | 'right';
}) {
  return (
    <div className="display-hover-stage">
      发布负责人是{' '}
      <HoverCard>
        <HoverCardTrigger
          render={<button className="display-inline-person" type="button" />}
        >
          @linmo
        </HoverCardTrigger>
        <HoverCardContent side={side}>
          <div className="display-profile">
            <Avatar size="lg">
              <AvatarFallback>林</AvatarFallback>
              <AvatarBadge />
            </Avatar>
            <div>
              <strong>林默</strong>
              <span>平台工程 · 当前在线</span>
            </div>
          </div>
          <p>负责生产发布、监控确认与紧急回滚。</p>
          <div className="display-profile-meta">
            <span>本月 18 次发布</span>
            <span>98% 成功率</span>
          </div>
        </HoverCardContent>
      </HoverCard>
      ，悬停或聚焦名字查看详情。
    </div>
  );
}

export function ItemActivityDemo({
  variant = 'outline',
}: {
  variant?: 'default' | 'outline' | 'muted';
}) {
  return (
    <ItemGroup className="display-activity-list">
      <Item variant={variant}>
        <ItemMedia variant="icon">
          <GitCommitHorizontal />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>许澄提交了发布说明</ItemTitle>
          <ItemDescription>补充数据库迁移影响与回滚入口。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge variant="outline">2 分钟前</Badge>
        </ItemActions>
      </Item>
      <Item variant={variant}>
        <ItemMedia variant="icon">
          <MessageCircle />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>林默回复了检查项</ItemTitle>
          <ItemDescription>确认索引变更不会锁定生产表。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button aria-label="更多操作" size="icon-sm" variant="ghost">
            <MoreHorizontal />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}

export function MarkerTimelineDemo({
  variant = 'separator',
}: {
  variant?: 'default' | 'separator' | 'border';
}) {
  return (
    <div className="display-timeline">
      <div className="display-timeline-event">
        <span>21:42</span>
        <strong>构建通过</strong>
      </div>
      <Marker variant={variant}>
        <MarkerIcon>
          <CircleDot />
        </MarkerIcon>
        <MarkerContent>生产发布开始 · 21:46</MarkerContent>
      </Marker>
      <div className="display-timeline-event">
        <span>21:48</span>
        <strong>流量切换完成</strong>
      </div>
    </div>
  );
}

const scrollerMessages = [
  ['21:40', '系统', '预检任务已开始。'],
  ['21:41', '许澄', '迁移脚本已在预览环境验证。'],
  ['21:42', '系统', '构建 #1842 已通过。'],
  ['21:44', '周一', '回滚镜像已确认可用。'],
  ['21:46', '林默', '开始切换 10% 生产流量。'],
  ['21:47', '系统', '错误率维持在 0.04%。'],
  ['21:48', '林默', '全量切换完成。'],
];

export function MessageScrollerReleaseDemo() {
  return (
    <div className="display-scroller-shell">
      <div className="display-scroller-header">
        <div>
          <strong>发布协作记录</strong>
          <span>7 条消息 · 实时同步</span>
        </div>
        <Badge variant="secondary">已完成</Badge>
      </div>
      <MessageScrollerProvider defaultScrollPosition="start">
        <MessageScroller>
          <MessageScrollerViewport aria-label="发布协作消息">
            <MessageScrollerContent className="display-scroller-content">
              {scrollerMessages.map(([time, author, content], index) => (
                <MessageScrollerItem
                  key={`${time}-${author}`}
                  messageId={`release-message-${index}`}
                  scrollAnchor={index === scrollerMessages.length - 1}
                >
                  <span>{time}</span>
                  <div>
                    <strong>{author}</strong>
                    <p>{content}</p>
                  </div>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}

const tableRows = [
  ['Web Console', 'v0.12.0', '生产', '已发布'],
  ['Auth API', 'v1.8.2', '生产', '已发布'],
  ['Worker', 'v0.9.7', '预览', '待确认'],
];

export function TableReleaseDemo() {
  return (
    <div className="display-table-shell">
      <Table>
        <TableCaption>今晚 22:00 发布窗口中的服务。</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>服务</TableHead>
            <TableHead>版本</TableHead>
            <TableHead>环境</TableHead>
            <TableHead>状态</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows.map(([service, version, environment, status]) => (
            <TableRow key={service}>
              <TableCell className="display-table-service">
                <Server />
                {service}
              </TableCell>
              <TableCell>{version}</TableCell>
              <TableCell>{environment}</TableCell>
              <TableCell>
                <Badge variant={status === '已发布' ? 'secondary' : 'outline'}>
                  {status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>已就绪服务</TableCell>
            <TableCell>2 / 3</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

const tooltipPlacements = [
  { label: '左上', placement: 'top-start', side: 'top', align: 'start' },
  { label: '上方', placement: 'top', side: 'top', align: 'center' },
  { label: '右上', placement: 'top-end', side: 'top', align: 'end' },
  { label: '左侧', placement: 'left', side: 'left', align: 'center' },
  { label: '右侧', placement: 'right', side: 'right', align: 'center' },
  {
    label: '左下',
    placement: 'bottom-start',
    side: 'bottom',
    align: 'start',
  },
  { label: '下方', placement: 'bottom', side: 'bottom', align: 'center' },
  {
    label: '右下',
    placement: 'bottom-end',
    side: 'bottom',
    align: 'end',
  },
] as const;

export function TooltipPlacementsDemo() {
  return (
    <TooltipProvider delay={100}>
      <div className="display-tooltip-placements" aria-label="Tooltip 八个方位">
        {tooltipPlacements.map((placement) => (
          <div
            className="display-tooltip-placement"
            data-placement={placement.placement}
            key={placement.placement}
          >
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    aria-label={`在${placement.label}显示 Tooltip`}
                    size="sm"
                    variant="outline"
                  />
                }
              >
                {placement.label}
              </TooltipTrigger>
              <TooltipContent side={placement.side} align={placement.align}>
                {placement.label}提示
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
        <div className="display-tooltip-reference" aria-hidden="true">
          <span>Tooltip</span>
          <small>悬停外围按钮</small>
        </div>
      </div>
    </TooltipProvider>
  );
}
