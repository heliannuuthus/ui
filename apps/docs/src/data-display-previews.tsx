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
  AvatarGroupCount,
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
  CarouselPrevious,
  type CarouselDotPosition,
  type CarouselVariant,
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
} from '@heliannuuthus/ui/message';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@heliannuuthus/ui/message-scroller';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@heliannuuthus/ui/tooltip';
import {
  Archive,
  Check,
  CheckCircle2,
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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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

export function AvatarOwnersDemo() {
  const sizes = [
    { label: '小', meta: '24 px', value: 'sm' },
    { label: '中', meta: '32 px', value: 'default' },
    { label: '大', meta: '40 px', value: 'lg' },
  ] as const;

  return (
    <div className="display-avatar-sizes">
      {sizes.map((size) => (
        <div className="display-avatar-size" key={size.value}>
          <div className="display-avatar-size-label">
            <strong>{size.label}</strong>
            <span>{size.meta}</span>
          </div>
          <AvatarGroup aria-label={`${size.label}尺寸的发布负责人`}>
            <Avatar size={size.value}>
              <AvatarFallback>林</AvatarFallback>
              <AvatarBadge>
                <Check />
              </AvatarBadge>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
        </div>
      ))}
    </div>
  );
}

export function BubbleReviewDemo() {
  const replies = [
    { label: '强调', token: 'default', variant: 'default' },
    { label: '柔和', token: 'tinted', variant: 'tinted' },
    { label: '描边', token: 'outline', variant: 'outline' },
  ] as const;

  return (
    <div className="display-bubble-variants">
      {replies.map((reply) => (
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
        </div>
      ))}
    </div>
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
  autoplayDelay,
  dotPosition,
  customControls = false,
  loop = false,
  pauseOnHover,
  variant,
}: {
  autoplay?: boolean;
  autoplayDelay?: number;
  dotPosition?: CarouselDotPosition;
  customControls?: boolean;
  loop?: boolean;
  pauseOnHover?: boolean;
  variant?: CarouselVariant;
}) {
  return (
    <Carousel
      aria-label="版本亮点"
      autoplay={autoplay}
      autoplayDelay={autoplayDelay}
      className={`display-carousel${customControls ? ' has-custom-controls' : ''}${autoplay ? ' display-carousel-autoplay' : ''}`}
      loop={loop}
      pauseOnHover={pauseOnHover}
      variant={variant}
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
      <CarouselPrevious className="display-carousel-previous">
        {customControls ? <span aria-hidden>←</span> : undefined}
      </CarouselPrevious>
      <CarouselNext className="display-carousel-next">
        {customControls ? <span aria-hidden>→</span> : undefined}
      </CarouselNext>
      <CarouselDots position={dotPosition}>
        {customControls
          ? ({ index, isSelected }) => (
              <span
                className="display-carousel-number-dot"
                data-selected={isSelected || undefined}
              >
                {index + 1}
              </span>
            )
          : undefined}
      </CarouselDots>
    </Carousel>
  );
}

export function CarouselAutoplayDemo() {
  return (
    <div className="display-carousel-autoplay-stage">
      <div className="display-carousel-autoplay-heading">
        <span>React Bits 动效变体</span>
        <strong>自动播放，悬停即暂停</strong>
        <small>自动播放 · 首尾循环 · 3D 景深</small>
      </div>
      <CarouselHighlightsDemo
        autoplay
        autoplayDelay={2200}
        loop
        variant="depth"
      />
    </div>
  );
}

const deploymentData = [
  { day: '周一', duration: 8, success: 94 },
  { day: '周二', duration: 6, success: 97 },
  { day: '周三', duration: 11, success: 91 },
  { day: '周四', duration: 5, success: 98 },
  { day: '周五', duration: 7, success: 96 },
  { day: '周六', duration: 4, success: 99 },
];

const deploymentChartConfig = {
  success: { label: '成功率', color: 'var(--primary)' },
  duration: { label: '耗时', color: 'var(--muted-foreground)' },
} satisfies ChartConfig;

export function ChartDeploymentDemo({
  metric = 'success',
}: {
  metric?: 'success' | 'duration';
}) {
  const success = metric === 'success';

  return (
    <div className="display-chart-card">
      <div className="display-panel-heading">
        <div>
          <span className="display-eyebrow">最近 6 天</span>
          <strong>{success ? '生产发布成功率' : '平均部署耗时'}</strong>
        </div>
        <b>{success ? '96.8%' : '6.8 min'}</b>
      </div>
      <ChartContainer
        className="display-chart"
        config={deploymentChartConfig}
        initialDimension={{ width: 520, height: 240 }}
      >
        <BarChart data={deploymentData} margin={{ left: -18, right: 8 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis
            domain={success ? [80, 100] : [0, 14]}
            tickLine={false}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel={false} />}
          />
          <Bar
            dataKey={metric}
            fill={`var(--color-${metric})`}
            radius={[7, 7, 2, 2]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export function CollapsibleBuildDemo() {
  return (
    <Collapsible className="display-build-log">
      <CollapsibleHeader className="display-build-summary">
        <div className="display-status-icon is-success">
          <CheckCircle2 />
        </div>
        <div>
          <strong>构建 #1842 已完成</strong>
          <span>1m 48s · commit 7f92c1a</span>
        </div>
        <Badge variant="secondary">成功</Badge>
        <CollapsibleIndicator />
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
        <CollapsibleTrigger render={<Button size="sm" variant="outline" />}>
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

export function MessageReviewDemo({
  align = 'start',
}: {
  align?: 'start' | 'end';
}) {
  return (
    <MessageGroup className="display-message-group">
      <Message align={align}>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>林</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>林默 · 发布负责人</MessageHeader>
          <Bubble variant={align === 'end' ? 'default' : 'muted'}>
            <BubbleContent>
              预检通过了，我会在流量切换后观察五分钟错误率。
            </BubbleContent>
          </Bubble>
          <MessageFooter>21:46 · 已读</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
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
