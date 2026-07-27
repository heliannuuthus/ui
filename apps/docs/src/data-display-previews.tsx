'use client';

import { Fragment, useState, type ReactNode } from 'react';
import { Accordion } from '@heliannuuthus/ui';
import { Attachment } from '@heliannuuthus/ui';
import { Avatar } from '@heliannuuthus/ui';
import { Badge } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Carousel } from '@heliannuuthus/ui';
import { Chart, type ChartConfig } from '@heliannuuthus/ui';
import { Collapsible } from '@heliannuuthus/ui';
import { Counter } from '@heliannuuthus/ui';
import { DataTable, type ColumnDef } from '@heliannuuthus/ui';
import { DropdownMenu } from '@heliannuuthus/ui';
import { Empty } from '@heliannuuthus/ui';
import { Item } from '@heliannuuthus/ui';
import { Marker } from '@heliannuuthus/ui';
import { Bubble } from '@heliannuuthus/ui';
import { Pagination } from '@heliannuuthus/ui';
import { ScrollArea } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { Separator } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { Tooltip } from '@heliannuuthus/ui';
import {
  Activity,
  Archive,
  ArrowLeft,
  ArrowRight,
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
        items={[
          {
            value: 'preflight',
            title: '预检结果',
            content: '构建、类型检查和 42 项端到端用例均已通过。',
          },
          {
            value: 'owners',
            title: '值班负责人',
            content: '林默负责发布，周一负责回滚与告警确认。',
          },
          {
            value: 'rollback',
            title: '回滚方案',
            content: '保留上一版本镜像，异常时可在 90 秒内切回 v0.11.4。',
          },
        ]}
      />
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
        items={[
          {
            value: 'deployment',
            title: '部署策略',
            content: '先灰度 10%，观察十分钟后全量发布。',
          },
          {
            value: 'cache',
            title: '缓存刷新',
            content: '发布完成后刷新边缘节点缓存。',
          },
        ]}
      />
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
      <Attachment.Group
        items={releaseFiles.map((file) => {
          const Icon = file.icon;
          return {
            key: file.name,
            title: file.name,
            description: file.description,
            media: <Icon />,
            orientation,
            state: file.state,
            actions: (
              <Button
                aria-label={`下载 ${file.name}`}
                size="icon-xs"
                variant="ghost"
              >
                {file.state === 'error' ? <RotateCcw /> : <Download />}
              </Button>
            ),
          };
        })}
      />
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
                <Avatar
                  alt={avatarPeople[index]?.initials ?? ''}
                  fallback={avatarPeople[index]?.initials}
                  fallbackProps={{
                    className: `display-avatar-tone-${avatarPeople[index]?.tone}`,
                  }}
                  shape={shape}
                  size={size.value}
                />
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
        <Avatar.Group
          aria-label={`展示 ${Math.min(max, avatarPeople.length)} 位协作者，其余自动汇总`}
          items={avatarPeople.map((person) => ({
            alt: person.initials,
            fallback: person.initials,
            fallbackProps: {
              className: `display-avatar-tone-${person.tone}`,
            },
          }))}
          max={max}
          overlap={overlap}
          size="lg"
        />
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
        <Avatar
          alt="林"
          badge={<span />}
          fallback="林"
          fallbackProps={{ className: 'display-avatar-tone-green' }}
          size="lg"
        />
      ),
      badge: <Badge variant="secondary">在线</Badge>,
    },
    {
      title: '认证状态',
      description: '图标随头像尺寸缩放',
      avatar: (
        <Avatar
          alt="周"
          badge={<Check />}
          fallback="周"
          fallbackProps={{ className: 'display-avatar-tone-blue' }}
          shape="square"
          size="lg"
        />
      ),
      badge: <Badge variant="outline">已认证</Badge>,
    },
    {
      title: '未读提醒',
      description: '将 Badge 渲染到头像锚点',
      avatar: (
        <Avatar
          alt="陈"
          badge={<Badge variant="destructive">8</Badge>}
          fallback="陈"
          fallbackProps={{ className: 'display-avatar-tone-rose' }}
          size="lg"
        />
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
          <Bubble.Group>
            <Bubble
              align="end"
              content="已经补充完成，可以重新评审。"
              reactions="✓ 2"
              variant={reply.variant}
            />
          </Bubble.Group>
          {index < replies.length - 1 && (
            <Separator className="display-bubble-separator" />
          )}
        </div>
      ))}
    </div>
  );
}

const conversationMessages: ReadonlyArray<{
  time: string;
  author: string;
  avatar: string;
  content: string;
  align?: 'start' | 'end';
  status?: string;
}> = [
  {
    time: '21:40',
    author: '系统',
    avatar: '系',
    content: '预检任务已开始。',
  },
  {
    time: '21:41',
    author: '许澄',
    avatar: '许',
    content: '迁移脚本已在预览环境验证。',
  },
  {
    time: '21:42',
    author: '系统',
    avatar: '系',
    content: '构建 #1842 已通过。',
  },
  {
    time: '21:44',
    author: '周一',
    avatar: '周',
    content: '回滚镜像已确认可用。',
  },
  {
    time: '21:46',
    author: '林默',
    avatar: '林',
    content: '开始切换 10% 生产流量。',
    align: 'end',
  },
  {
    time: '21:47',
    author: '系统',
    avatar: '系',
    content: '错误率维持在 0.04%。',
  },
  {
    time: '21:48',
    author: '林默',
    avatar: '林',
    content: '全量切换完成。',
    align: 'end',
    status: '已读',
  },
];

export function BubbleConversationDemo() {
  return (
    <div className="display-scroller-shell">
      <div className="display-scroller-header">
        <div>
          <strong>发布协作记录</strong>
          <span>7 条消息 · Bubble + Avatar</span>
        </div>
        <Badge variant="secondary">已完成</Badge>
      </div>
      <ScrollArea
        className="display-conversation-scroll"
        fadeEdges
        fadeSize={28}
        overflowEdgeThreshold={2}
        viewportProps={{
          'aria-label': '发布协作消息',
          role: 'list',
          tabIndex: 0,
        }}
      >
        <div className="display-conversation-scroll-list">
          {conversationMessages.map((message) => (
            <div
              className="display-conversation-message"
              data-align={message.align ?? 'start'}
              key={`${message.time}-${message.author}`}
              role="listitem"
            >
              <Avatar
                alt={message.author}
                className="display-conversation-avatar"
                fallback={message.avatar}
                fallbackProps={{
                  className:
                    message.align === 'end'
                      ? 'display-avatar-tone-blue'
                      : 'display-avatar-tone-green',
                }}
                shape={message.align === 'end' ? 'square' : 'circle'}
              />
              <div className="display-conversation-content">
                <span className="display-conversation-meta">
                  {message.author} · {message.time}
                </span>
                <Bubble
                  align={message.align ?? 'start'}
                  content={message.content}
                  variant={message.align === 'end' ? 'tinted' : 'elevated'}
                />
                {message.status && (
                  <span className="display-conversation-status">
                    <Check />
                    {message.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
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
      items={releaseHighlights.map((highlight, index) => {
        const Icon = highlight.icon;
        return (
          <article className="display-highlight" key={highlight.title}>
            <div className="display-highlight-icon">
              <Icon />
            </div>
            <span>
              {highlight.kicker} · 0{index + 1}
            </span>
            <strong>{highlight.title}</strong>
            <p>{highlight.description}</p>
          </article>
        );
      })}
      loop={loop}
      nextButtonProps={{ className: 'display-carousel-next' }}
      pauseOnHover={pauseOnHover}
      paginationPosition={dotPosition === 'top' ? 'before' : 'after'}
      previousButtonProps={{ className: 'display-carousel-previous' }}
    />
  );
}

export function CarouselCustomPaginationDemo() {
  return (
    <Carousel
      aria-label="带自定义翻页器的版本亮点"
      className="display-carousel"
      controls={false}
      items={releaseHighlights.map((highlight, index) => {
        const Icon = highlight.icon;
        return (
          <article className="display-highlight" key={highlight.title}>
            <div className="display-highlight-icon">
              <Icon />
            </div>
            <span>
              {highlight.kicker} · 0{index + 1}
            </span>
            <strong>{highlight.title}</strong>
            <p>{highlight.description}</p>
          </article>
        );
      })}
      pagination={({
        canScrollNext,
        canScrollPrev,
        currentPage,
        pageCount,
        scrollNext,
        scrollPrev,
        scrollTo,
      }) => (
        <div
          aria-label="轮播分页"
          className="display-carousel-pagination"
          role="group"
        >
          <Button
            aria-label="上一页"
            className="display-carousel-pagination-button"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            size="icon-sm"
            variant="ghost"
          >
            <ArrowLeft aria-hidden />
          </Button>
          <div className="display-carousel-pagination-status">
            <span aria-live="polite" className="display-carousel-page-count">
              <strong>{String(currentPage).padStart(2, '0')}</strong>
              <span>/</span>
              <small>{String(Math.max(pageCount, 1)).padStart(2, '0')}</small>
            </span>
            <div
              aria-label="选择轮播页面"
              className="display-carousel-page-track"
              role="group"
            >
              {Array.from({ length: pageCount }, (_, index) => {
                const selected = currentPage === index + 1;

                return (
                  <button
                    aria-current={selected ? 'page' : undefined}
                    aria-label={`前往第 ${index + 1} 页`}
                    data-selected={selected || undefined}
                    key={index}
                    onClick={() => scrollTo(index)}
                    type="button"
                  >
                    <span />
                  </button>
                );
              })}
            </div>
          </div>
          <Button
            aria-label="下一页"
            className="display-carousel-pagination-button"
            disabled={!canScrollNext}
            onClick={scrollNext}
            size="icon-sm"
            variant="ghost"
          >
            <ArrowRight aria-hidden />
          </Button>
        </div>
      )}
    />
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
        <Chart
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
            <Chart.Tooltip
              content={<Chart.TooltipContent indicator="line" />}
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
        </Chart>
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

export function CollapsibleBasicDemo() {
  return (
    <Collapsible
      className="display-collapsible-basic"
      content={
        <p>优化筛选器响应速度，并修复轮播从最后一项回到第一项时的切换动效。</p>
      }
      contentClassName="display-collapsible-basic-content"
      defaultOpen
      header={
        <div className="display-collapsible-summary">
          <strong>本次发布包含 6 项变更</strong>
          <span>点击 Header 收起内容</span>
        </div>
      }
    />
  );
}

function CollapsibleBuildDemo() {
  return (
    <Collapsible
      className="display-build-log"
      defaultOpen
      header={
        <>
          <div className="display-status-icon is-success">
            <CheckCircle2 />
          </div>
          <div>
            <strong>构建 #1842 已完成</strong>
            <span>1m 48s · commit 7f92c1a</span>
          </div>
          <Badge variant="secondary">成功</Badge>
        </>
      }
      headerClassName="display-build-summary"
      icon={<ChevronRight />}
      content={
        <code>
          <span>21:42:08</span> packages/ui build completed
          <br />
          <span>21:42:31</span> docs type-check passed
          <br />
          <span>21:43:02</span> 42 browser checks passed
        </code>
      }
      contentClassName="display-build-content"
      footer={
        <>
          <span>日志保留 30 天</span>
          <Button size="xs" variant="ghost">
            查看构建产物
          </Button>
        </>
      }
    />
  );
}

function CollapsiblePolicyDemo() {
  return (
    <Collapsible
      className="display-build-log display-policy"
      trigger="配置"
      triggerIcon={<ChevronRight />}
      triggerProps={{ size: 'sm', variant: 'outline' }}
      headerClassName="display-build-summary"
      header={
        <div className="display-build-summary">
          <div className="display-status-icon">
            <ShieldCheck />
          </div>
          <div>
            <strong>灰度发布策略</strong>
            <span>先发布到 10% 的生产实例</span>
          </div>
        </div>
      }
      content={
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
      }
      contentClassName="display-policy-content"
      footer={
        <>
          <span>仅影响下一次生产发布</span>
          <Button size="xs">应用策略</Button>
        </>
      }
    />
  );
}

export function CollapsibleTriggerModesDemo() {
  return (
    <div className="display-collapsible-modes">
      <section>
        <div className="display-collapsible-mode-label">
          <span>Header 触发</span>
          <small>整个摘要区域都可点击</small>
        </div>
        <CollapsibleBuildDemo />
      </section>
      <section>
        <div className="display-collapsible-mode-label">
          <span>按钮触发</span>
          <small>Header 静态，仅按钮切换状态</small>
        </div>
        <CollapsiblePolicyDemo />
      </section>
    </div>
  );
}

export function CollapsibleHeaderIconDemo() {
  return (
    <div className="display-collapsible-icon-demo">
      <section>
        <span>默认图标</span>
        <Collapsible
          className="display-collapsible-compact"
          content={<p>使用组件内置的方向图标反馈展开状态。</p>}
          contentClassName="display-collapsible-compact-content"
          header={
            <div className="display-collapsible-summary">
              <strong>部署记录</strong>
              <small>生产环境 · 3 分钟前</small>
            </div>
          }
        />
      </section>
      <section>
        <span>自定义图标</span>
        <Collapsible
          className="display-collapsible-compact"
          content={<p>通过 icon 替换默认图标，Header 内容保持不变。</p>}
          contentClassName="display-collapsible-compact-content"
          header={
            <>
              <span className="display-status-icon is-success">
                <PackageCheck />
              </span>
              <div className="display-collapsible-summary">
                <strong>构建产物已就绪</strong>
                <small>12 个文件 · 2.4 MB</small>
              </div>
            </>
          }
          icon={<ChevronRight />}
        />
      </section>
      <section>
        <span>隐藏图标</span>
        <Collapsible
          className="display-collapsible-compact"
          content={
            <p>传入 icon=null，保留 Header 触发能力但不显示指示图标。</p>
          }
          contentClassName="display-collapsible-compact-content"
          header={
            <div className="display-collapsible-summary">
              <strong>纯文本摘要</strong>
              <small>适合界面已提供其他状态反馈的场景</small>
            </div>
          }
          icon={null}
        />
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

type VirtualDataTableRecord = {
  id: string;
  latency: string;
  region: string;
  service: string;
};

const virtualDataTableRecords: VirtualDataTableRecord[] = Array.from(
  { length: 1000 },
  (_, index) => ({
    id: `EVT-${String(index + 1).padStart(4, '0')}`,
    service: ['Web Console', 'Auth API', 'Event Worker', 'Search Indexer'][
      index % 4
    ],
    region: ['华东', '华北', '新加坡', '法兰克福'][index % 4],
    latency: `${32 + ((index * 17) % 180)} ms`,
  })
);

const releaseColumns: ColumnDef<ReleaseRecord>[] = [
  {
    accessorKey: 'version',
    header: ({ column }) => (
      <DataTable.ColumnHeader column={column}>版本</DataTable.ColumnHeader>
    ),
    meta: {
      cellClassName: 'font-medium',
      fixed: 'start',
      headerClassName: 'w-28',
    },
  },
  { accessorKey: 'environment', header: '环境', enableSorting: false },
  { accessorKey: 'owner', header: '负责人', enableSorting: false },
  {
    accessorKey: 'status',
    header: '状态',
    enableSorting: false,
    render: (_, row) => {
      const status = row.status;
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
      align: 'center',
      fixed: 'end',
      headerClassName: 'w-36',
    },
    render: (_, row) => (
      <DataTable.Actions aria-label={`${row.version} 操作`}>
        <Button size="xs" variant="ghost">
          查看
        </Button>
        <DropdownMenu
          align="end"
          contentClassName="w-44"
          trigger={
            <Button
              aria-label={`${row.version} 更多操作`}
              size="icon-xs"
              variant="ghost"
            >
              <MoreHorizontal />
            </Button>
          }
          items={[
            { label: '下载日志', icon: <Download /> },
            { label: '归档记录', icon: <Archive /> },
            { type: 'separator' },
            { label: '删除记录', icon: <Trash2 />, destructive: true },
          ]}
        />
      </DataTable.Actions>
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
          <DataTable.ColumnHeader column={column}>版本</DataTable.ColumnHeader>
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
        render: (_, row) => {
          const status = row.status;
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
    meta: { align: 'center' },
    columns: [
      {
        id: 'detail',
        header: '记录',
        meta: { align: 'center' },
        render: (_, row) => (
          <DataTable.Actions aria-label={`${row.version} 操作`}>
            <Button size="xs" variant="outline">
              {row.status === '运行中' ? '监控' : '详情'}
            </Button>
          </DataTable.Actions>
        ),
      },
    ],
  },
];

const virtualDataTableColumns: ColumnDef<VirtualDataTableRecord>[] = [
  {
    accessorKey: 'id',
    header: '事件',
    meta: {
      fixed: 'start',
      headerClassName: 'w-32',
      cellClassName: 'font-medium',
    },
  },
  {
    accessorKey: 'service',
    header: '服务',
    meta: {
      ellipsis: true,
      headerClassName: 'w-64',
    },
  },
  {
    accessorKey: 'region',
    header: '区域',
    meta: { headerClassName: 'w-32' },
  },
  {
    accessorKey: 'latency',
    header: '延迟',
    meta: {
      align: 'end',
      headerClassName: 'w-32',
    },
  },
  {
    id: 'actions',
    header: '操作',
    meta: {
      align: 'center',
      fixed: 'end',
      headerClassName: 'w-28',
    },
    render: (_, row) => (
      <DataTable.Actions aria-label={`${row.id} 操作`}>
        <Button size="xs" variant="ghost">
          查看
        </Button>
      </DataTable.Actions>
    ),
  },
];

export function DataTableReleaseDemo() {
  return (
    <div className="display-data-table">
      <DataTable
        caption="最近五次生产与预览环境发布。"
        columns={releaseColumns}
        data={releaseRecords}
        filterColumn="version"
        filterPlaceholder="筛选版本…"
        emptyMessage="没有匹配的发布记录"
        footer={(rows) => `当前页 ${rows.length} 条发布记录`}
        getRowKey={(row) => row.version}
        pagination={{ pageSize: 3 }}
        tableProps={{ className: 'min-w-[820px] table-fixed' }}
      />
    </div>
  );
}

export function DataTableExpandableDemo() {
  return (
    <div className="display-data-table">
      <DataTable
        columns={releaseColumns.slice(0, 4)}
        data={releaseRecords}
        expandable={{
          defaultExpandedRowKeys: ['v0.12.0'],
          render: (row) => (
            <div className="display-data-table-expanded">
              <strong>{row.version} 部署详情</strong>
              <span>
                {row.environment}环境由{row.owner}负责，当前状态为{row.status}。
              </span>
            </div>
          ),
        }}
        getRowKey={(row) => row.version}
        pagination={false}
        tableProps={{ className: 'min-w-[640px] table-fixed' }}
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
        tableProps={{ className: 'min-w-[660px] table-fixed' }}
      />
    </div>
  );
}

export function DataTableVirtualScrollDemo() {
  return (
    <div className="display-data-table">
      <DataTable
        columns={virtualDataTableColumns}
        data={virtualDataTableRecords}
        getRowKey={(row) => row.id}
        pagination={false}
        tableProps={{ className: 'min-w-[900px] table-fixed' }}
        virtual={{
          containerHeight: 320,
          getItemKey: (row) => row.id,
          overscan: 8,
          rowHeight: 48,
        }}
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
    <Empty
      actions={
        <>
          <div className="display-empty-custom-meta">
            <span>12 项规则</span>
            <span>预计 4 分钟</span>
          </div>
          <Button size="sm" variant="outline">
            查看审计进度
          </Button>
        </>
      }
      className="display-empty display-empty-custom"
      description="审计通过前，生产环境不会显示可发布版本。"
      icon={<ShieldCheck />}
      title="等待安全审计"
    />
  );
}

export function ItemActivityDemo({
  variant = 'outline',
}: {
  variant?: 'default' | 'outline' | 'muted';
}) {
  return (
    <Item.Group
      className="display-activity-list"
      items={[
        {
          actions: <Badge variant="outline">2 分钟前</Badge>,
          description: '补充数据库迁移影响与回滚入口。',
          key: 'release-notes',
          media: <GitCommitHorizontal />,
          mediaVariant: 'icon',
          title: '许澄提交了发布说明',
          variant,
        },
        {
          actions: (
            <Button aria-label="更多操作" size="icon-sm" variant="ghost">
              <MoreHorizontal />
            </Button>
          ),
          description: '确认索引变更不会锁定生产表。',
          key: 'review-reply',
          media: <MessageCircle />,
          mediaVariant: 'icon',
          title: '林默回复了检查项',
          variant,
        },
      ]}
    />
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
      <Marker
        content="生产发布开始 · 21:46"
        icon={<CircleDot />}
        variant={variant}
      />
      <div className="display-timeline-event">
        <span>21:48</span>
        <strong>流量切换完成</strong>
      </div>
    </div>
  );
}

const tableRows = [
  ['Web Console', 'v0.12.0', '生产', '查看'],
  ['Auth API', 'v1.8.2', '生产', '查看'],
  ['Worker', 'v0.9.7', '预览', '确认'],
];

export function TableReleaseDemo() {
  return (
    <div className="display-table-shell">
      <Table>
        <Table.Caption>今晚 22:00 发布窗口中的服务。</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>服务</Table.Head>
            <Table.Head>版本</Table.Head>
            <Table.Head>环境</Table.Head>
            <Table.Head align="center">操作</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableRows.map(([service, version, environment, action]) => (
            <Table.Row key={service}>
              <Table.Cell className="display-table-service">
                <Server />
                {service}
              </Table.Cell>
              <Table.Cell>{version}</Table.Cell>
              <Table.Cell>{environment}</Table.Cell>
              <Table.Cell align="center">
                <Button
                  aria-label={`${action} ${service}`}
                  size="xs"
                  type="button"
                  variant={action === '确认' ? 'outline' : 'ghost'}
                >
                  {action}
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>已就绪服务</Table.Cell>
            <Table.Cell>2 / 3</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

const fixedTableRows = [
  [
    'Web Console',
    '体验团队',
    'v0.12.0',
    '生产',
    '42.8k',
    '华东',
    '今天 21:48',
    '健康',
  ],
  [
    'Auth API',
    '身份团队',
    'v1.8.2',
    '生产',
    '128.6k',
    '华北',
    '今天 20:36',
    '健康',
  ],
  [
    'Event Worker',
    '平台团队',
    'v0.9.7',
    '预览',
    '18.4k',
    '新加坡',
    '昨天 23:12',
    '观察',
  ],
  [
    'Billing API',
    '商业团队',
    'v2.4.1',
    '生产',
    '76.2k',
    '法兰克福',
    '昨天 18:04',
    '健康',
  ],
  [
    'Search Indexer',
    '数据团队',
    'v1.3.0',
    '生产',
    '31.7k',
    '华东',
    '周一 16:22',
    '健康',
  ],
  [
    'Audit Stream',
    '安全团队',
    'v0.8.6',
    '预览',
    '12.1k',
    '华北',
    '周一 14:08',
    '观察',
  ],
  [
    'Notification',
    '增长团队',
    'v3.1.4',
    '生产',
    '54.9k',
    '新加坡',
    '周日 22:45',
    '健康',
  ],
];

export function TableFixedDemo() {
  return (
    <div className="display-table-shell display-table-wide">
      <Table className="min-w-[960px] table-fixed">
        <Table.Header>
          <Table.Row>
            <Table.Head fixed="start" className="w-40">
              服务
            </Table.Head>
            <Table.Head className="w-32">负责团队</Table.Head>
            <Table.Head className="w-28">版本</Table.Head>
            <Table.Head className="w-20">环境</Table.Head>
            <Table.Head align="end" className="w-36">
              每分钟请求
            </Table.Head>
            <Table.Head className="w-28">区域</Table.Head>
            <Table.Head className="w-32">最近部署</Table.Head>
            <Table.Head fixed="end" align="center" className="w-24">
              操作
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fixedTableRows.map(
            ([
              service,
              owner,
              version,
              environment,
              requests,
              region,
              deployedAt,
              status,
            ]) => (
              <Table.Row key={service}>
                <Table.Cell fixed="start" className="font-semibold">
                  {service}
                </Table.Cell>
                <Table.Cell>{owner}</Table.Cell>
                <Table.Cell>{version}</Table.Cell>
                <Table.Cell>{environment}</Table.Cell>
                <Table.Cell align="end">{requests}</Table.Cell>
                <Table.Cell>{region}</Table.Cell>
                <Table.Cell>{deployedAt}</Table.Cell>
                <Table.Cell fixed="end" align="center">
                  <Button
                    aria-label={`${status === '健康' ? '监控' : '排查'} ${service}`}
                    size="xs"
                    type="button"
                    variant="ghost"
                  >
                    {status === '健康' ? '监控' : '排查'}
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

const virtualTableRows = Array.from({ length: 1000 }, (_, index) => ({
  id: `EVT-${String(index + 1).padStart(4, '0')}`,
  service: ['Web Console', 'Auth API', 'Event Worker', 'Search Indexer'][
    index % 4
  ],
  region: ['华东', '华北', '新加坡', '法兰克福'][index % 4],
  latency: `${32 + ((index * 17) % 180)} ms`,
  requests: `${(18.4 + ((index * 13) % 720) / 10).toFixed(1)}k`,
  status: index % 9 === 0 ? '观察' : '健康',
}));

function getVirtualTableRowKey(row: (typeof virtualTableRows)[number]) {
  return row.id;
}

export function TableVirtualScrollDemo() {
  return (
    <div className="display-table-shell display-table-wide">
      <div className="display-table-virtual-meta">
        <span>1,000 条单行数据</span>
        <small>当前仅渲染可视区域附近的行</small>
      </div>
      <Table
        aria-rowcount={virtualTableRows.length + 1}
        className="min-w-[820px] table-fixed"
        containerClassName="max-h-80"
      >
        <Table.Header>
          <Table.Row>
            <Table.Head fixed="start" className="w-32">
              事件
            </Table.Head>
            <Table.Head className="w-52">服务</Table.Head>
            <Table.Head className="w-32">区域</Table.Head>
            <Table.Head align="end" className="w-32">
              延迟
            </Table.Head>
            <Table.Head align="end" className="w-36">
              每分钟请求
            </Table.Head>
            <Table.Head fixed="end" align="center" className="w-28">
              操作
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.VirtualBody
          colSpan={6}
          items={virtualTableRows}
          getItemKey={getVirtualTableRowKey}
          rowHeight={48}
          overscan={8}
        >
          {(row) => (
            <Table.Row>
              <Table.Cell fixed="start" className="font-medium">
                {row.id}
              </Table.Cell>
              <Table.Cell>{row.service}</Table.Cell>
              <Table.Cell>{row.region}</Table.Cell>
              <Table.Cell align="end">{row.latency}</Table.Cell>
              <Table.Cell align="end">{row.requests}</Table.Cell>
              <Table.Cell fixed="end" align="center" className="py-2">
                <Button
                  aria-label={`${row.status === '健康' ? '查看' : '排查'} ${row.id}`}
                  size="xs"
                  type="button"
                  variant="ghost"
                >
                  {row.status === '健康' ? '查看' : '排查'}
                </Button>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.VirtualBody>
      </Table>
    </div>
  );
}

const paginatedTableRows = [
  ['REL-1842', 'Web Console', '林默', '已完成'],
  ['REL-1841', 'Auth API', '周一', '已完成'],
  ['REL-1840', 'Event Worker', '许澄', '进行中'],
  ['REL-1839', 'Billing API', '林默', '待审批'],
  ['REL-1838', 'Search Indexer', '周一', '已完成'],
  ['REL-1837', 'Audit Stream', '许澄', '已回滚'],
  ['REL-1836', 'Notification', '林默', '已完成'],
];

export function TablePaginationDemo() {
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const pageCount = Math.ceil(paginatedTableRows.length / pageSize);
  const rows = paginatedTableRows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="display-table-composite">
      <div className="display-table-shell">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>发布单</Table.Head>
              <Table.Head>服务</Table.Head>
              <Table.Head>负责人</Table.Head>
              <Table.Head align="center">操作</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map(([release, service, owner, status]) => (
              <Table.Row key={release}>
                <Table.Cell className="font-medium">{release}</Table.Cell>
                <Table.Cell>{service}</Table.Cell>
                <Table.Cell>{owner}</Table.Cell>
                <Table.Cell align="center">
                  <Button
                    aria-label={`${
                      status === '待审批'
                        ? '审批'
                        : status === '进行中'
                          ? '跟进'
                          : '查看'
                    } ${release}`}
                    size="xs"
                    type="button"
                    variant="ghost"
                  >
                    {status === '待审批'
                      ? '审批'
                      : status === '进行中'
                        ? '跟进'
                        : '查看'}
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="display-table-pagination">
        <span>
          共 {paginatedTableRows.length} 项 · 第 {page} / {pageCount} 页
        </span>
        <Pagination
          current={page}
          onChange={setPage}
          pageCount={pageCount}
          previousText="上一页"
          nextText="下一页"
        />
      </div>
    </div>
  );
}

const expandableTableRows = [
  {
    id: 'REL-1842',
    service: 'Web Console',
    status: '成功',
    duration: '1m 48s',
    detail: '流量已分四批切换完成，错误率维持在 0.03%，无需人工干预。',
  },
  {
    id: 'REL-1841',
    service: 'Auth API',
    status: '观察中',
    duration: '2m 16s',
    detail: '新实例已全部就绪，当前继续观察登录成功率与令牌刷新延迟。',
  },
  {
    id: 'REL-1840',
    service: 'Event Worker',
    status: '待执行',
    duration: '—',
    detail: '等待 Auth API 观察窗口结束后开始部署，预计占用 3 个执行实例。',
  },
];

export function TableExpandableDemo() {
  const [expandedId, setExpandedId] = useState<string | null>('REL-1842');

  return (
    <div className="display-table-shell">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-12">
              <span className="sr-only">展开</span>
            </Table.Head>
            <Table.Head>发布单</Table.Head>
            <Table.Head>服务</Table.Head>
            <Table.Head align="end">耗时</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {expandableTableRows.map((row) => {
            const expanded = expandedId === row.id;

            return (
              <Fragment key={row.id}>
                <Table.Row>
                  <Table.Cell>
                    <Table.ExpandButton
                      aria-label={`${expanded ? '收起' : '展开'} ${row.id}`}
                      expanded={expanded}
                      onExpandedChange={(nextExpanded) =>
                        setExpandedId(nextExpanded ? row.id : null)
                      }
                    />
                  </Table.Cell>
                  <Table.Cell className="font-medium">{row.id}</Table.Cell>
                  <Table.Cell>
                    <span className="display-table-cell-stack">
                      <strong>{row.service}</strong>
                      <small>{row.status}</small>
                    </span>
                  </Table.Cell>
                  <Table.Cell align="end">{row.duration}</Table.Cell>
                </Table.Row>
                {expanded ? (
                  <Table.ExpandedRow colSpan={4}>
                    <strong>部署详情</strong>
                    <p>{row.detail}</p>
                  </Table.ExpandedRow>
                ) : null}
              </Fragment>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

const cellTableRows = [
  {
    service: 'Realtime Collaboration Gateway',
    description: '承载多人编辑光标、文档增量同步以及离线重连后的冲突合并。',
    successRate: '99.98%',
    action: '配置',
  },
  {
    service: 'Notification',
    description: '推送发布通知。',
    successRate: '98.62%',
    action: '查看',
  },
];

function TableActionCell({
  action,
  service,
}: {
  action: string;
  service: string;
}) {
  return (
    <Button
      aria-label={`${action} ${service}`}
      size="xs"
      type="button"
      variant="ghost"
    >
      {action}
      <ArrowUpRight data-icon="inline-end" />
    </Button>
  );
}

export function TableCellDemo() {
  return (
    <div className="display-table-shell display-table-wide">
      <Table className="min-w-[680px] table-fixed">
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-52">服务（靠左）</Table.Head>
            <Table.Head
              ellipsis
              className="w-64"
              ellipsisTooltip="服务说明、最近一次生产部署上下文与异常原因"
            >
              服务说明、最近一次生产部署上下文与异常原因
            </Table.Head>
            <Table.Head align="end" className="w-28">
              成功率（靠右）
            </Table.Head>
            <Table.Head align="center" className="w-28">
              操作（居中）
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cellTableRows.map((row) => (
            <Table.Row key={row.service}>
              <Table.Cell className="font-medium">{row.service}</Table.Cell>
              <Table.Cell ellipsis>{row.description}</Table.Cell>
              <Table.Cell align="end">{row.successRate}</Table.Cell>
              <Table.Cell align="center">
                <TableActionCell action={row.action} service={row.service} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
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
    <div className="display-tooltip-placements" aria-label="Tooltip 八个方位">
      {tooltipPlacements.map((placement) => (
        <div
          className="display-tooltip-placement"
          data-placement={placement.placement}
          key={placement.placement}
        >
          <Tooltip
            align={placement.align}
            content={`${placement.label}提示`}
            delay={100}
            side={placement.side}
            trigger={
              <Button
                aria-label={`在${placement.label}显示 Tooltip`}
                size="sm"
                variant="outline"
              >
                {placement.label}
              </Button>
            }
          />
        </div>
      ))}
      <div className="display-tooltip-reference" aria-hidden="true">
        <span>Tooltip</span>
        <small>悬停外围按钮</small>
      </div>
    </div>
  );
}
