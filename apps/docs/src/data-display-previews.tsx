import { docsCopy } from './i18n/content';
import { Fragment, useRef, useState } from 'react';
import { Accordion } from '@heliannuuthus/ui';
import { Attachment } from '@heliannuuthus/ui';
import { Avatar } from '@heliannuuthus/ui';
import { Badge } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Carousel, type CarouselRef } from '@heliannuuthus/ui';
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

export const AccordionReleaseDemo = ({
  mode = 'single',
}: {
  mode?: 'single' | 'multiple';
}) => {
  const multiple = mode === 'multiple';

  return (
    <div className="display-panel">
      <div className="display-panel-heading">
        <div>
          <span className="display-eyebrow">v0.12.0</span>
          <strong>{docsCopy('生产发布检查')}</strong>
        </div>
        <Badge variant="secondary">{docsCopy('3 / 3 就绪')}</Badge>
      </div>
      <Accordion
        key={mode}
        multiple={multiple}
        defaultValue={multiple ? ['preflight', 'rollback'] : ['preflight']}
        items={[
          {
            value: 'preflight',
            title: docsCopy('预检结果'),
            content: docsCopy('构建、类型检查和 42 项端到端用例均已通过。'),
          },
          {
            value: 'owners',
            title: docsCopy('值班负责人'),
            content: docsCopy('林默负责发布，周一负责回滚与告警确认。'),
          },
          {
            value: 'rollback',
            title: docsCopy('回滚方案'),
            content: docsCopy(
              '保留上一版本镜像，异常时可在 90 秒内切回 v0.11.4。'
            ),
          },
        ]}
      />
    </div>
  );
};

export const CounterBuildDemo = () => {
  const [count, setCount] = useState(1284);

  return (
    <div className="display-counter-card">
      <div>
        <span>{docsCopy('本周构建')}</span>
        <small>{docsCopy('CI 完成的有效构建次数')}</small>
      </div>
      <Counter
        fontSize={60}
        fontWeight={600}
        places={[1000, 100, 10, 1]}
        suffix={<small>{docsCopy('次')}</small>}
        value={count}
        valueText={docsCopy(`${count} 次构建`)}
      />
      <div className="display-counter-actions">
        <Button onClick={() => setCount((value) => Math.max(0, value - 18))}>
          <Minus />
          {docsCopy('减少 18')}
        </Button>
        <Button onClick={() => setCount((value) => value + 24)}>
          <Plus />
          {docsCopy('增加 24')}
        </Button>
        <Button onClick={() => setCount(1284)} variant="ghost">
          <RotateCcw />
          {docsCopy('重置')}
        </Button>
      </div>
    </div>
  );
};

const accordionIndicatorItems = [
  {
    value: 'deployment',
    title: docsCopy('部署策略'),
    content: docsCopy('先灰度 10%，观察十分钟后全量发布。'),
  },
  {
    value: 'cache',
    title: docsCopy('缓存刷新'),
    content: docsCopy('发布完成后刷新边缘节点缓存。'),
  },
];

export const AccordionDefaultIndicatorDemo = () => (
  <Accordion
    data-example="default-indicator"
    defaultValue={['deployment']}
    items={accordionIndicatorItems}
  />
);

export const AccordionStartIndicatorDemo = () => (
  <Accordion
    data-example="start-indicator"
    defaultValue={['deployment']}
    indicator={<Accordion.Indicator position="start" />}
    items={accordionIndicatorItems}
  />
);

export const AccordionStateIndicatorDemo = () => (
  <Accordion
    data-example="state-indicator"
    defaultValue={['deployment']}
    indicator={
      <Accordion.Indicator position="start">
        {({ open }) => (open ? <Minus /> : <Plus />)}
      </Accordion.Indicator>
    }
    items={accordionIndicatorItems}
  />
);

const accordionDisabledItems = [
  {
    value: 'preflight',
    title: docsCopy('预检结果'),
    content: docsCopy('构建、类型检查和 42 项端到端用例均已通过。'),
  },
  {
    value: 'rollback',
    title: docsCopy('回滚方案'),
    content: docsCopy('异常时切回上一版本。'),
  },
];

export const AccordionDisabledItemDemo = () => (
  <Accordion
    defaultValue={['rollback']}
    items={accordionDisabledItems.map((item) => ({
      ...item,
      disabled: item.value === 'preflight',
    }))}
  />
);

export const AccordionDisabledRootDemo = () => (
  <Accordion
    defaultValue={['preflight']}
    disabled
    items={accordionDisabledItems}
  />
);

export const AccordionControlledDemo = () => {
  const [value, setValue] = useState<string[]>(['preflight']);

  return (
    <div className="display-panel">
      <div className="display-panel-heading">
        <div>
          <span className="display-eyebrow">value + onChange</span>
          <strong>{docsCopy('受控展开状态')}</strong>
        </div>
        <Badge variant="secondary">
          {value.length > 0 ? value.join(', ') : docsCopy('全部关闭')}
        </Badge>
      </div>
      <Accordion
        items={accordionDisabledItems}
        onChange={setValue}
        value={value}
      />
    </div>
  );
};

export const AccordionPresenceDemo = ({
  strategy = 'unmount',
}: {
  strategy?: 'findable' | 'mounted' | 'unmount';
}) => (
  <div className="display-panel">
    <div className="display-panel-heading">
      <div>
        <span className="display-eyebrow">{strategy}</span>
        <strong>{docsCopy('关闭面板的保留策略')}</strong>
      </div>
      <Badge variant="outline">
        {strategy === 'findable'
          ? 'hiddenUntilFound'
          : strategy === 'mounted'
            ? 'keepMounted'
            : docsCopy('默认卸载')}
      </Badge>
    </div>
    <Accordion
      items={accordionDisabledItems}
      {...(strategy === 'findable'
        ? { hiddenUntilFound: true as const }
        : strategy === 'mounted'
          ? { keepMounted: true }
          : {})}
    />
  </div>
);

type AttachmentState = 'idle' | 'uploading' | 'processing' | 'error' | 'done';
type AttachmentMediaType = 'icon' | 'image';
type AttachmentOrientation = 'horizontal' | 'vertical';
type AttachmentSize = 'default' | 'sm' | 'xs';

const releaseFiles: Array<{
  description: string;
  icon: typeof FileText;
  name: string;
  state: AttachmentState;
}> = [
  {
    name: 'release-notes.md',
    description: docsCopy('24 KB · 已同步'),
    icon: FileText,
    state: 'done',
  },
  {
    name: 'web-console.tgz',
    description: docsCopy('8.4 MB · 正在校验'),
    icon: FileArchive,
    state: 'processing',
  },
  {
    name: 'source-map.zip',
    description: docsCopy('12.1 MB · 上传失败'),
    icon: FileCode2,
    state: 'error',
  },
];

export const AttachmentBasicDemo = () => (
  <Attachment
    description={docsCopy('8.4 MB · 正在校验')}
    media={<FileArchive />}
    state="processing"
    title="web-console.tgz"
  />
);

export const AttachmentMediaTypeDemo = ({
  mediaType = 'icon',
}: {
  mediaType?: AttachmentMediaType;
}) => (
  <Attachment
    description={
      mediaType === 'image'
        ? docsCopy('2.1 MB · 图片预览')
        : docsCopy('8.4 MB · 压缩文件')
    }
    media={
      mediaType === 'image' ? (
        <img alt={docsCopy('附件缩略图')} src="/heliannuuthus.jpg" />
      ) : (
        <FileArchive />
      )
    }
    mediaType={mediaType}
    title={mediaType === 'image' ? 'cover.jpg' : 'web-console.tgz'}
  />
);

export const AttachmentStateDemo = ({
  state = 'done',
}: {
  state?: AttachmentState;
}) => {
  const descriptions: Record<AttachmentState, string> = {
    done: docsCopy('8.4 MB · 已完成'),
    error: docsCopy('8.4 MB · 上传失败'),
    idle: docsCopy('8.4 MB · 等待上传'),
    processing: docsCopy('8.4 MB · 正在校验'),
    uploading: docsCopy('8.4 MB · 正在上传'),
  };

  return (
    <Attachment
      description={descriptions[state]}
      media={<FileArchive />}
      state={state}
      title="web-console.tgz"
    />
  );
};

export const AttachmentSizeDemo = ({
  size = 'default',
}: {
  size?: AttachmentSize;
}) => (
  <Attachment
    description={docsCopy('8.4 MB · 已完成')}
    media={<FileArchive />}
    size={size}
    title="web-console.tgz"
  />
);

export const AttachmentOrientationDemo = ({
  orientation = 'horizontal',
}: {
  orientation?: AttachmentOrientation;
}) => (
  <Attachment
    description={docsCopy('8.4 MB · 已完成')}
    media={<FileArchive />}
    orientation={orientation}
    title="web-console.tgz"
  />
);

export const AttachmentActionsDemo = () => (
  <Attachment
    actions={
      <Button aria-label={docsCopy('下载 web-console.tgz')} size="icon-xs">
        <Download />
      </Button>
    }
    description={docsCopy('8.4 MB · 已完成')}
    media={<FileArchive />}
    title="web-console.tgz"
  />
);

export const AttachmentTriggerDemo = () => (
  <Attachment
    description={docsCopy('单击附件打开预览')}
    media={<FileText />}
    title="release-notes.md"
    trigger={
      <a
        aria-label={docsCopy('预览 release-notes.md')}
        href="#attachment-trigger"
      />
    }
  />
);

export const AttachmentGroupDemo = ({
  orientation = 'horizontal',
}: {
  orientation?: AttachmentOrientation;
}) => {
  return (
    <div className="display-attachments">
      <div className="display-section-label">
        {orientation === 'vertical'
          ? docsCopy('纵向缩略卡')
          : docsCopy('横向文件行')}
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
                aria-label={docsCopy(`下载 ${file.name}`)}
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
};

const avatarPeople = [
  { initials: docsCopy('林'), tone: 'blue' },
  { initials: docsCopy('周'), tone: 'amber' },
  { initials: docsCopy('陈'), tone: 'green' },
  { initials: docsCopy('许'), tone: 'rose' },
  { initials: docsCopy('吴'), tone: 'violet' },
  { initials: docsCopy('宋'), tone: 'slate' },
] as const;

export const AvatarShapeDemo = ({
  shape = 'circle',
  size = 'default',
}: {
  shape?: 'circle' | 'square';
  size?: 'default' | 'lg' | 'sm';
}) => {
  const sizeLabel = {
    default: docsCopy('中'),
    lg: docsCopy('大'),
    sm: docsCopy('小'),
  }[size];
  const sizePixels = { default: 32, lg: 40, sm: 24 }[size];

  return (
    <div className="display-avatar-shapes">
      <section className="display-avatar-shape-card">
        <div className="display-avatar-case-heading">
          <strong>
            {shape === 'circle' ? docsCopy('圆形') : docsCopy('圆角方形')}
          </strong>
          <code>{`shape="${shape}" size="${size}"`}</code>
        </div>
        <div className="display-avatar-size-row">
          <div className="display-avatar-size-item">
            <Avatar
              alt={avatarPeople[0]?.initials ?? ''}
              fallback={avatarPeople[0]?.initials}
              fallbackProps={{
                className: `display-avatar-tone-${avatarPeople[0]?.tone}`,
              }}
              shape={shape}
              size={size}
            />
            <span>
              {sizeLabel} · {sizePixels} px
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AvatarGroupDemo = () => {
  const [max, setMax] = useState(4);
  const [overlap, setOverlap] = useState(8);

  return (
    <div className="display-avatar-group-demo">
      <div className="display-avatar-group-stage">
        <div>
          <span>{docsCopy('发布协作者')}</span>
          <strong>
            {docsCopy('当前展示')}
            {Math.min(max, avatarPeople.length)}
            {docsCopy('人')}
          </strong>
        </div>
        <Avatar.Group
          aria-label={docsCopy(
            `展示 ${Math.min(max, avatarPeople.length)} 位协作者，其余自动汇总`
          )}
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
            {docsCopy('最多展示')}
            <output>{max}</output>
          </span>
          <Slider
            aria-label={docsCopy('最多展示的头像数量')}
            effect="none"
            max={6}
            min={1}
            onChange={(value) =>
              setMax(Array.isArray(value) ? (value[0] ?? 4) : value)
            }
            step={1}
            value={max}
          />
        </label>
        <label>
          <span>
            {docsCopy('重叠程度')}
            <output>{overlap}px</output>
          </span>
          <Slider
            aria-label={docsCopy('头像重叠程度')}
            effect="none"
            max={12}
            min={0}
            onChange={(value) =>
              setOverlap(Array.isArray(value) ? (value[0] ?? 8) : value)
            }
            step={2}
            value={overlap}
          />
        </label>
      </div>
    </div>
  );
};

export const AvatarBadgeDemo = () => {
  const cases = [
    {
      title: docsCopy('在线状态'),
      description: docsCopy('无内容时显示状态圆点'),
      avatar: (
        <Avatar
          alt={docsCopy('林')}
          badge={<span />}
          fallback={docsCopy('林')}
          fallbackProps={{ className: 'display-avatar-tone-green' }}
          size="lg"
        />
      ),
      badge: <Badge variant="secondary">{docsCopy('在线')}</Badge>,
    },
    {
      title: docsCopy('认证状态'),
      description: docsCopy('图标随头像尺寸缩放'),
      avatar: (
        <Avatar
          alt={docsCopy('周')}
          badge={<Check />}
          fallback={docsCopy('周')}
          fallbackProps={{ className: 'display-avatar-tone-blue' }}
          shape="square"
          size="lg"
        />
      ),
      badge: <Badge variant="outline">{docsCopy('已认证')}</Badge>,
    },
    {
      title: docsCopy('未读提醒'),
      description: docsCopy('将 Badge 渲染到头像锚点'),
      avatar: (
        <Avatar
          alt={docsCopy('陈')}
          badge={<Badge variant="destructive">8</Badge>}
          fallback={docsCopy('陈')}
          fallbackProps={{ className: 'display-avatar-tone-rose' }}
          size="lg"
        />
      ),
      badge: <Badge variant="destructive">{docsCopy('需要处理')}</Badge>,
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
};

export const AvatarSourceDemo = ({
  source = 'image',
}: {
  source?: 'fallback' | 'image';
}) => {
  const [status, setStatus] = useState('idle');

  return (
    <div className="flex items-center gap-4 rounded-3xl border p-5">
      <Avatar
        alt={docsCopy('林默')}
        fallback={docsCopy('林')}
        fallbackProps={{ delay: 0 }}
        imageProps={{ onLoadingStatusChange: setStatus }}
        size="lg"
        src={source === 'image' ? '/heliannuuthus.jpg' : '/missing-avatar.jpg'}
      />
      <div className="grid gap-1 text-sm">
        <strong>
          {source === 'image' ? docsCopy('图片头像') : docsCopy('回退内容')}
        </strong>
        <span className="text-muted-foreground">
          {docsCopy('加载状态')}：{status}
        </span>
      </div>
    </div>
  );
};

export const AvatarCountDemo = ({ custom = false }: { custom?: boolean }) => (
  <div className="rounded-3xl border p-5">
    <Avatar.Group
      items={avatarPeople.map((person) => ({
        alt: person.initials,
        fallback: person.initials,
        fallbackProps: { className: `display-avatar-tone-${person.tone}` },
      }))}
      max={3}
      renderCount={
        custom
          ? (count) => <Badge variant="secondary">+{count}</Badge>
          : undefined
      }
      shape="square"
      size="lg"
    />
  </div>
);

type BubbleVariant =
  | 'default'
  | 'secondary'
  | 'muted'
  | 'elevated'
  | 'tinted'
  | 'outline'
  | 'ghost'
  | 'destructive';

export const BubbleVariantsDemo = ({
  variant = 'default',
}: {
  variant?: BubbleVariant;
}) => (
  <div className="display-bubble-variants">
    <div className="display-bubble-variant">
      <div className="display-bubble-variant-label">
        <strong>{docsCopy('气泡预览')}</strong>
        <span>{variant}</span>
      </div>
      <Bubble.Group>
        <Bubble
          align="end"
          content={docsCopy('已经补充完成，可以重新评审。')}
          reactions="✓ 2"
          variant={variant}
        />
      </Bubble.Group>
    </div>
  </div>
);

export const BubbleAlignmentDemo = ({
  align = 'start',
}: {
  align?: 'end' | 'start';
}) => (
  <Bubble.Group className="w-full rounded-3xl border p-5">
    <Bubble
      align={align}
      content={
        align === 'end'
          ? docsCopy('这条消息靠末端对齐。')
          : docsCopy('这条消息靠起始端对齐。')
      }
      variant={align === 'end' ? 'tinted' : 'elevated'}
    />
  </Bubble.Group>
);

export const BubbleReactionsDemo = ({
  position = 'bottom-end',
}: {
  position?: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start';
}) => {
  const [side, align] = position.split('-') as [
    'bottom' | 'top',
    'end' | 'start',
  ];

  return (
    <div className="w-full rounded-3xl border p-8">
      <Bubble
        content={docsCopy('回应内容可以锚定在气泡的四个边角。')}
        reactions={<Button size="xs">👍 2</Button>}
        reactionsProps={{ align, side }}
        variant="elevated"
      />
    </div>
  );
};

export const BubbleContentPropsDemo = () => (
  <Bubble
    content={docsCopy('内容节点可以接收语义、事件和样式扩展。')}
    contentProps={{
      'aria-live': 'polite',
      className: 'border-primary/30 ring-3 ring-primary/10',
      role: 'status',
    }}
    variant="outline"
  />
);

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
    author: docsCopy('系统'),
    avatar: docsCopy('系'),
    content: docsCopy('预检任务已开始。'),
  },
  {
    time: '21:41',
    author: docsCopy('许澄'),
    avatar: docsCopy('许'),
    content: docsCopy('迁移脚本已在预览环境验证。'),
  },
  {
    time: '21:42',
    author: docsCopy('系统'),
    avatar: docsCopy('系'),
    content: docsCopy('构建 #1842 已通过。'),
  },
  {
    time: '21:44',
    author: docsCopy('周一'),
    avatar: docsCopy('周'),
    content: docsCopy('回滚镜像已确认可用。'),
  },
  {
    time: '21:46',
    author: docsCopy('林默'),
    avatar: docsCopy('林'),
    content: docsCopy('开始切换 10% 生产流量。'),
    align: 'end',
  },
  {
    time: '21:47',
    author: docsCopy('系统'),
    avatar: docsCopy('系'),
    content: docsCopy('错误率维持在 0.04%。'),
  },
  {
    time: '21:48',
    author: docsCopy('林默'),
    avatar: docsCopy('林'),
    content: docsCopy('全量切换完成。'),
    align: 'end',
    status: docsCopy('已读'),
  },
];

export const BubbleConversationDemo = () => {
  return (
    <div className="display-scroller-shell">
      <div className="display-scroller-header">
        <div>
          <strong>{docsCopy('发布协作记录')}</strong>
          <span>{docsCopy('7 条消息 · Bubble + Avatar')}</span>
        </div>
        <Badge variant="secondary">{docsCopy('已完成')}</Badge>
      </div>
      <ScrollArea
        className="display-conversation-scroll"
        fadeEdges
        fadeSize={28}
        overflowEdgeThreshold={2}
        viewportProps={{
          'aria-label': docsCopy('发布协作消息'),
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
};

const releaseHighlights = [
  {
    icon: Sparkles,
    kicker: docsCopy('体验'),
    title: docsCopy('筛选器响应更快'),
    description: docsCopy('大型列表的输入响应时间降低 42%。'),
  },
  {
    icon: ShieldCheck,
    kicker: docsCopy('可靠性'),
    title: docsCopy('发布前自动预检'),
    description: docsCopy('缺失变量会在进入生产阶段前被拦截。'),
  },
  {
    icon: PackageCheck,
    kicker: docsCopy('组件'),
    title: docsCopy('数据展示案例补齐'),
    description: docsCopy('16 个组件现在都有真实交互场景。'),
  },
];

export const CarouselHighlightsDemo = ({
  autoplay = false,
  controls = true,
  dotPosition = 'bottom',
  loop = false,
  pauseOnHover,
}: {
  autoplay?: boolean | number;
  controls?: boolean;
  dotPosition?: 'top' | 'bottom';
  loop?: boolean;
  pauseOnHover?: boolean;
}) => {
  return (
    <Carousel
      aria-label={docsCopy('版本亮点')}
      autoplay={autoplay}
      className={`display-carousel${autoplay !== false ? ' display-carousel-autoplay' : ''}`}
      controls={controls}
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
};

export const CarouselCustomPaginationDemo = () => {
  return (
    <Carousel
      aria-label={docsCopy('带自定义翻页器的版本亮点')}
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
          aria-label={docsCopy('轮播分页')}
          className="display-carousel-pagination"
          role="group"
        >
          <Button
            aria-label={docsCopy('上一页')}
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
              aria-label={docsCopy('选择轮播页面')}
              className="display-carousel-page-track"
              role="group"
            >
              {Array.from({ length: pageCount }, (_, index) => {
                const selected = currentPage === index + 1;

                return (
                  <button
                    aria-current={selected ? 'page' : undefined}
                    aria-label={docsCopy(`前往第 ${index + 1} 页`)}
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
            aria-label={docsCopy('下一页')}
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
};

export const CarouselAutoplayDemo = () => {
  return (
    <div className="display-carousel-autoplay-stage">
      <div className="display-carousel-autoplay-heading">
        <span>{docsCopy('默认景深动效')}</span>
        <strong>{docsCopy('自动播放，悬停即暂停')}</strong>
        <small>{docsCopy('自动播放 · 首尾循环 · 3D 景深')}</small>
      </div>
      <CarouselHighlightsDemo autoplay={2.2} loop />
    </div>
  );
};

export const CarouselControlsDemo = ({
  mode = 'buttons',
}: {
  mode?: 'buttons' | 'none';
}) => <CarouselHighlightsDemo controls={mode === 'buttons'} />;

export const CarouselDotsDemo = ({
  mode = 'default',
}: {
  mode?: 'custom' | 'default' | 'hidden';
}) => (
  <Carousel
    aria-label={docsCopy('分页点示例')}
    className="display-carousel"
    controls={false}
    items={releaseHighlights.map((highlight) => {
      const Icon = highlight.icon;
      return (
        <article className="display-highlight" key={highlight.title}>
          <div className="display-highlight-icon">
            <Icon />
          </div>
          <strong>{highlight.title}</strong>
          <p>{highlight.description}</p>
        </article>
      );
    })}
    pagination={mode === 'hidden' ? false : 'dots'}
    renderDot={
      mode === 'custom'
        ? ({ index, isSelected }) => (
            <span aria-hidden>{isSelected ? `0${index + 1}` : '·'}</span>
          )
        : undefined
    }
  />
);

export const CarouselClassNamesDemo = () => (
  <Carousel
    aria-label={docsCopy('自定义轨道与项目宽度')}
    className="display-carousel"
    contentClassName="gap-3"
    controls={false}
    itemClassName="basis-2/3 pl-3"
    items={releaseHighlights.map((highlight) => (
      <div className="rounded-3xl border p-6" key={highlight.title}>
        <strong>{highlight.title}</strong>
        <p className="mt-2 text-sm text-muted-foreground">
          {highlight.description}
        </p>
      </div>
    ))}
  />
);

export const CarouselRefDemo = () => {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className="grid w-full gap-4">
      <Carousel
        aria-label={docsCopy('外部控制的轮播')}
        className="display-carousel"
        controls={false}
        items={releaseHighlights.map((highlight) => highlight.title)}
        pagination="dots"
        ref={carouselRef}
        renderItem={(title) => (
          <div className="rounded-3xl border p-8 text-center font-medium">
            {title}
          </div>
        )}
      />
      <div className="flex justify-center gap-2">
        <Button onClick={() => carouselRef.current?.scrollPrev()}>
          {docsCopy('上一项')}
        </Button>
        <Button onClick={() => carouselRef.current?.scrollNext()}>
          {docsCopy('下一项')}
        </Button>
      </div>
    </div>
  );
};

const deploymentData = [
  { day: '07.21', success: 92.4 },
  { day: '07.22', success: 94.8 },
  { day: '07.23', success: 93.6 },
  { day: '07.24', success: 96.2 },
  { day: '07.25', success: 95.7 },
  { day: '07.26', success: 98.1 },
  { day: docsCopy('今天'), success: 97.4 },
];

const deploymentChartConfig = {
  success: { label: docsCopy('发布成功率'), color: 'var(--primary)' },
} satisfies ChartConfig;

export const ChartDeploymentDemo = () => {
  return (
    <section
      aria-label={docsCopy('发布健康度趋势')}
      className="display-chart-story"
    >
      <header className="display-chart-story-header">
        <div className="display-chart-story-title">
          <span className="display-chart-story-mark" aria-hidden="true">
            <Activity />
          </span>
          <div>
            <span>RELEASE PULSE · 7 DAYS</span>
            <strong>{docsCopy('发布健康度')}</strong>
          </div>
        </div>
        <Badge variant="secondary">
          <span className="display-chart-live-dot" aria-hidden="true" />
          {docsCopy('系统稳定')}
        </Badge>
      </header>

      <div className="display-chart-story-summary">
        <div className="display-chart-story-primary">
          <span>{docsCopy('生产发布成功率')}</span>
          <strong>97.4%</strong>
          <small>
            <ArrowUpRight aria-hidden="true" />
            {docsCopy('较上周提升 2.6%')}
          </small>
        </div>
        <dl>
          <div>
            <dt>{docsCopy('发布次数')}</dt>
            <dd>128</dd>
          </div>
          <div>
            <dt>{docsCopy('平均耗时')}</dt>
            <dd>6m 48s</dd>
          </div>
          <div>
            <dt>{docsCopy('需要回滚')}</dt>
            <dd>4</dd>
          </div>
        </dl>
      </div>

      <div className="display-chart-story-plot">
        <div className="display-chart-story-plot-heading">
          <div>
            <strong>{docsCopy('成功率趋势')}</strong>
            <span>{docsCopy('目标线 95%')}</span>
          </div>
          <span>{docsCopy('近七日')}</span>
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
          {docsCopy('发布成功率')}
        </div>
        <span>{docsCopy('每 5 分钟刷新 · UTC+8')}</span>
      </footer>
    </section>
  );
};

export const CollapsibleBasicDemo = () => {
  return (
    <Collapsible
      className="display-collapsible-basic"
      content={
        <p>
          {docsCopy(
            '优化筛选器响应速度，并修复轮播从最后一项回到第一项时的切换动效。'
          )}
        </p>
      }
      contentClassName="display-collapsible-basic-content"
      defaultOpen
      header={
        <div className="display-collapsible-summary">
          <strong>{docsCopy('本次发布包含 6 项变更')}</strong>
          <span>{docsCopy('点击 Header 收起内容')}</span>
        </div>
      }
    />
  );
};

const CollapsibleBuildDemo = () => {
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
            <strong>{docsCopy('构建 #1842 已完成')}</strong>
            <span>1m 48s · commit 7f92c1a</span>
          </div>
          <Badge variant="secondary">{docsCopy('成功')}</Badge>
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
          <span>{docsCopy('日志保留 30 天')}</span>
          <Button size="xs" variant="ghost">
            {docsCopy('查看构建产物')}
          </Button>
        </>
      }
    />
  );
};

const CollapsiblePolicyDemo = () => {
  return (
    <Collapsible
      className="display-build-log display-policy"
      trigger={docsCopy('配置')}
      triggerIcon={<ChevronRight />}
      triggerProps={{ size: 'sm', variant: 'outline' }}
      headerClassName="display-build-summary"
      header={
        <div className="display-build-summary">
          <div className="display-status-icon">
            <ShieldCheck />
          </div>
          <div>
            <strong>{docsCopy('灰度发布策略')}</strong>
            <span>{docsCopy('先发布到 10% 的生产实例')}</span>
          </div>
        </div>
      }
      content={
        <div className="display-policy-grid">
          <div>
            <span>{docsCopy('首批流量')}</span>
            <strong>10%</strong>
          </div>
          <div>
            <span>{docsCopy('观察窗口')}</span>
            <strong>{docsCopy('10 分钟')}</strong>
          </div>
          <div>
            <span>{docsCopy('自动回滚')}</span>
            <strong>{docsCopy('错误率 > 2%')}</strong>
          </div>
        </div>
      }
      contentClassName="display-policy-content"
      footer={
        <>
          <span>{docsCopy('仅影响下一次生产发布')}</span>
          <Button size="xs">{docsCopy('应用策略')}</Button>
        </>
      }
    />
  );
};

export const CollapsibleTriggerModesDemo = ({
  mode = 'header',
}: {
  mode?: 'button' | 'header';
}) => {
  const usesButton = mode === 'button';

  return (
    <div className="display-collapsible-modes">
      <section>
        <div className="display-collapsible-mode-label">
          <span>
            {usesButton ? docsCopy('按钮触发') : docsCopy('Header 触发')}
          </span>
          <small>
            {usesButton
              ? docsCopy('Header 静态，仅按钮切换状态')
              : docsCopy('整个摘要区域都可点击')}
          </small>
        </div>
        {usesButton ? <CollapsiblePolicyDemo /> : <CollapsibleBuildDemo />}
      </section>
    </div>
  );
};

export const CollapsibleHeaderIconDemo = ({
  iconMode = 'default',
}: {
  iconMode?: 'custom' | 'default' | 'hidden';
}) => {
  const icon =
    iconMode === 'custom' ? (
      <ChevronRight />
    ) : iconMode === 'hidden' ? null : undefined;

  return (
    <div className="display-collapsible-icon-demo">
      <section>
        <span>
          {iconMode === 'custom'
            ? docsCopy('自定义图标')
            : iconMode === 'hidden'
              ? docsCopy('隐藏图标')
              : docsCopy('默认图标')}
        </span>
        <Collapsible
          className="display-collapsible-compact"
          content={
            <p>
              {iconMode === 'custom'
                ? docsCopy('通过 icon 替换默认图标，Header 内容保持不变。')
                : iconMode === 'hidden'
                  ? docsCopy(
                      '传入 icon=null，保留 Header 触发能力但不显示指示图标。'
                    )
                  : docsCopy('使用组件内置的方向图标反馈展开状态。')}
            </p>
          }
          contentClassName="display-collapsible-compact-content"
          header={
            <div className="display-collapsible-summary">
              <strong>{docsCopy('部署记录')}</strong>
              <small>{docsCopy('生产环境 · 3 分钟前')}</small>
            </div>
          }
          icon={icon}
        />
      </section>
    </div>
  );
};

export const CollapsibleStateDemo = ({
  mode = 'controlled',
}: {
  mode?: 'controlled' | 'disabled';
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      className="display-collapsible-basic"
      content={<p>{docsCopy('展开状态由调用方读取和更新。')}</p>}
      contentClassName="display-collapsible-basic-content"
      disabled={mode === 'disabled'}
      header={
        <div className="display-collapsible-summary">
          <strong>
            {mode === 'disabled'
              ? docsCopy('不可展开的摘要')
              : docsCopy('受控的摘要')}
          </strong>
          <span>{open ? docsCopy('已展开') : docsCopy('已收起')}</span>
        </div>
      }
      onOpenChange={setOpen}
      open={open}
    />
  );
};

type ReleaseRecord = {
  environment: string;
  owner: string;
  status: string;
  version: string;
};

const releaseRecords: ReleaseRecord[] = [
  {
    version: 'v0.12.0',
    environment: docsCopy('生产'),
    owner: docsCopy('林默'),
    status: docsCopy('成功'),
  },
  {
    version: 'v0.11.4',
    environment: docsCopy('生产'),
    owner: docsCopy('周一'),
    status: docsCopy('成功'),
  },
  {
    version: 'v0.11.3',
    environment: docsCopy('预览'),
    owner: docsCopy('许澄'),
    status: docsCopy('运行中'),
  },
  {
    version: 'v0.11.2',
    environment: docsCopy('生产'),
    owner: docsCopy('林默'),
    status: docsCopy('回滚'),
  },
  {
    version: 'v0.11.1',
    environment: docsCopy('预览'),
    owner: docsCopy('周一'),
    status: docsCopy('成功'),
  },
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
    region: [
      docsCopy('华东'),
      docsCopy('华北'),
      docsCopy('新加坡'),
      docsCopy('法兰克福'),
    ][index % 4],
    latency: `${32 + ((index * 17) % 180)} ms`,
  })
);

const releaseColumns: ColumnDef<ReleaseRecord>[] = [
  {
    accessorKey: 'version',
    header: ({ column }) => (
      <DataTable.ColumnHeader column={column}>
        {docsCopy('版本')}
      </DataTable.ColumnHeader>
    ),
    meta: {
      cellClassName: 'font-medium',
      fixed: 'start',
      headerClassName: 'w-28',
    },
  },
  {
    accessorKey: 'environment',
    header: docsCopy('环境'),
    enableSorting: false,
  },
  { accessorKey: 'owner', header: docsCopy('负责人'), enableSorting: false },
  {
    accessorKey: 'status',
    header: docsCopy('状态'),
    enableSorting: false,
    render: (_, row) => {
      const status = row.status;
      return (
        <Badge
          variant={status === docsCopy('回滚') ? 'destructive' : 'secondary'}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    header: docsCopy('操作'),
    meta: {
      align: 'center',
      fixed: 'end',
      headerClassName: 'w-36',
    },
    render: (_, row) => (
      <DataTable.Actions aria-label={docsCopy(`${row.version} 操作`)}>
        <Button size="xs" variant="ghost">
          {docsCopy('查看')}
        </Button>
        <DropdownMenu
          align="end"
          contentClassName="w-44"
          trigger={
            <Button
              aria-label={docsCopy(`${row.version} 更多操作`)}
              size="icon-xs"
              variant="ghost"
            >
              <MoreHorizontal />
            </Button>
          }
          items={[
            { label: docsCopy('下载日志'), icon: <Download /> },
            { label: docsCopy('归档记录'), icon: <Archive /> },
            { type: 'separator' },
            {
              label: docsCopy('删除记录'),
              icon: <Trash2 />,
              destructive: true,
            },
          ]}
        />
      </DataTable.Actions>
    ),
  },
];

const groupedReleaseColumns: ColumnDef<ReleaseRecord>[] = [
  {
    id: 'release',
    header: docsCopy('发布信息'),
    columns: [
      {
        accessorKey: 'version',
        header: ({ column }) => (
          <DataTable.ColumnHeader column={column}>
            {docsCopy('版本')}
          </DataTable.ColumnHeader>
        ),
      },
      {
        accessorKey: 'environment',
        header: docsCopy('环境'),
        enableSorting: false,
      },
    ],
  },
  {
    id: 'execution',
    header: docsCopy('执行情况'),
    columns: [
      {
        accessorKey: 'owner',
        header: docsCopy('负责人'),
        enableSorting: false,
      },
      {
        accessorKey: 'status',
        header: docsCopy('状态'),
        enableSorting: false,
        render: (_, row) => {
          const status = row.status;
          return (
            <Badge
              variant={
                status === docsCopy('回滚') ? 'destructive' : 'secondary'
              }
            >
              {status}
            </Badge>
          );
        },
      },
    ],
  },
  {
    id: 'operation',
    header: docsCopy('操作'),
    meta: { align: 'center' },
    columns: [
      {
        id: 'detail',
        header: docsCopy('记录'),
        meta: { align: 'center' },
        render: (_, row) => (
          <DataTable.Actions aria-label={docsCopy(`${row.version} 操作`)}>
            <Button size="xs" variant="outline">
              {row.status === docsCopy('运行中')
                ? docsCopy('监控')
                : docsCopy('详情')}
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
    header: docsCopy('事件'),
    meta: {
      fixed: 'start',
      headerClassName: 'w-32',
      cellClassName: 'font-medium',
    },
  },
  {
    accessorKey: 'service',
    header: docsCopy('服务'),
    meta: {
      ellipsis: true,
      headerClassName: 'w-64',
    },
  },
  {
    accessorKey: 'region',
    header: docsCopy('区域'),
    meta: { headerClassName: 'w-32' },
  },
  {
    accessorKey: 'latency',
    header: docsCopy('延迟'),
    meta: {
      align: 'end',
      headerClassName: 'w-32',
    },
  },
  {
    id: 'actions',
    header: docsCopy('操作'),
    meta: {
      align: 'center',
      fixed: 'end',
      headerClassName: 'w-28',
    },
    render: (_, row) => (
      <DataTable.Actions aria-label={docsCopy(`${row.id} 操作`)}>
        <Button size="xs" variant="ghost">
          {docsCopy('查看')}
        </Button>
      </DataTable.Actions>
    ),
  },
];

export const DataTableReleaseDemo = () => {
  return (
    <div className="display-data-table">
      <DataTable
        caption={docsCopy('最近五次生产与预览环境发布。')}
        columns={releaseColumns}
        data={releaseRecords}
        filterColumn="version"
        filterPlaceholder={docsCopy('筛选版本…')}
        emptyMessage={docsCopy('没有匹配的发布记录')}
        footer={(rows) => docsCopy(`当前页 ${rows.length} 条发布记录`)}
        getRowKey={(row) => row.version}
        pagination={{
          ariaLabels: {
            more: docsCopy('更多页面'),
            navigation: docsCopy('分页'),
            next: docsCopy('前往下一页'),
            previous: docsCopy('前往上一页'),
          },
          nextText: docsCopy('下一页'),
          pageSize: 3,
          previousText: docsCopy('上一页'),
          renderSummary: (total, current, pageCount) =>
            docsCopy(`共 ${total} 项 · 第 ${current} / ${pageCount} 页`),
        }}
        tableProps={{ className: 'min-w-[820px] table-fixed' }}
      />
    </div>
  );
};

export const DataTableExpandableDemo = () => {
  return (
    <div className="display-data-table">
      <DataTable
        columns={releaseColumns.slice(0, 4)}
        data={releaseRecords}
        expandable={{
          columnHeader: <span className="sr-only">{docsCopy('展开行')}</span>,
          defaultExpandedRowKeys: ['v0.12.0'],
          getCollapseLabel: (row) => `${docsCopy('收起')} ${row.version}`,
          getExpandLabel: (row) => `${docsCopy('展开')} ${row.version}`,
          render: (row) => (
            <div className="display-data-table-expanded">
              <strong>
                {row.version}
                {docsCopy('部署详情')}
              </strong>
              <span>
                {row.environment}
                {docsCopy('环境由')}
                {row.owner}
                {docsCopy('负责，当前状态为')}
                {row.status}。
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
};

export const DataTableGroupedHeaderDemo = () => {
  return (
    <div className="display-data-table display-data-table-grouped">
      <DataTable
        columns={groupedReleaseColumns}
        data={releaseRecords}
        emptyMessage={docsCopy('暂无发布记录')}
        tableProps={{ className: 'min-w-[660px] table-fixed' }}
      />
    </div>
  );
};

export const DataTableVirtualScrollDemo = () => {
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
};

export const EmptyReleaseDemo = ({
  context = 'new',
}: {
  context?: 'new' | 'filtered';
}) => {
  const filtered = context === 'filtered';

  return (
    <Empty
      className="display-empty"
      icon={filtered ? <Inbox /> : <Cloud />}
      title={
        filtered ? docsCopy('没有匹配的发布记录') : docsCopy('还没有生产发布')
      }
      description={
        filtered
          ? docsCopy('试试缩短版本关键词，或清除当前环境筛选。')
          : docsCopy('完成预检后，可以从这里安排第一次生产发布。')
      }
      actions={
        <Button size="sm" variant={filtered ? 'outline' : 'default'}>
          {filtered ? <RotateCcw /> : <Plus />}
          {filtered ? docsCopy('清除筛选') : docsCopy('安排发布')}
        </Button>
      }
    />
  );
};

export const EmptyDefaultDemo = () => {
  return <Empty className="display-empty" title={docsCopy('暂无内容')} />;
};

export const EmptyCompositionDemo = () => {
  return (
    <Empty
      actions={
        <>
          <div className="display-empty-custom-meta">
            <span>{docsCopy('12 项规则')}</span>
            <span>{docsCopy('预计 4 分钟')}</span>
          </div>
          <Button size="sm" variant="outline">
            {docsCopy('查看审计进度')}
          </Button>
        </>
      }
      className="display-empty display-empty-custom"
      description={docsCopy('审计通过前，生产环境不会显示可发布版本。')}
      icon={<ShieldCheck />}
      title={docsCopy('等待安全审计')}
    />
  );
};

export const EmptyIconDemo = ({
  mode = 'default',
}: {
  mode?: 'custom' | 'default' | 'hidden';
}) => (
  <Empty
    className="display-empty"
    description={docsCopy('图标只辅助说明状态，标题始终明确表达结果。')}
    icon={
      mode === 'custom' ? <ShieldCheck /> : mode === 'hidden' ? null : undefined
    }
    title={
      mode === 'custom'
        ? docsCopy('等待安全审计')
        : mode === 'hidden'
          ? docsCopy('没有匹配结果')
          : docsCopy('暂无内容')
    }
  />
);

export const ItemActivityDemo = ({
  variant = 'outline',
}: {
  variant?: 'default' | 'outline' | 'muted';
}) => {
  return (
    <Item.Group
      className="display-activity-list"
      items={[
        {
          actions: <Badge variant="outline">{docsCopy('2 分钟前')}</Badge>,
          description: docsCopy('补充数据库迁移影响与回滚入口。'),
          key: 'release-notes',
          media: <GitCommitHorizontal />,
          mediaType: 'icon',
          title: docsCopy('许澄提交了发布说明'),
          variant,
        },
        {
          actions: (
            <Button
              aria-label={docsCopy('更多操作')}
              size="icon-sm"
              variant="ghost"
            >
              <MoreHorizontal />
            </Button>
          ),
          description: docsCopy('确认索引变更不会锁定生产表。'),
          key: 'review-reply',
          media: <MessageCircle />,
          mediaType: 'icon',
          title: docsCopy('林默回复了检查项'),
          variant,
        },
      ]}
    />
  );
};

export const ItemSizeDemo = ({
  size = 'default',
}: {
  size?: 'default' | 'sm' | 'xs';
}) => (
  <Item
    description={docsCopy('不同密度不会改变内容语义。')}
    media={<GitCommitHorizontal />}
    mediaType="icon"
    size={size}
    title={docsCopy('发布说明已更新')}
    variant="outline"
  />
);

export const ItemMediaTypeDemo = ({
  mediaType = 'default',
}: {
  mediaType?: 'default' | 'icon' | 'image';
}) => (
  <Item
    description={docsCopy('媒体类型决定起始内容的尺寸和裁切方式。')}
    media={
      mediaType === 'image' ? (
        <img alt={docsCopy('发布封面')} src="/heliannuuthus.jpg" />
      ) : (
        <FileText />
      )
    }
    mediaType={mediaType}
    title={docsCopy('发布资料')}
    variant="outline"
  />
);

export const ItemStructureDemo = ({
  slot = 'content',
}: {
  slot?: 'actions' | 'content' | 'footer' | 'header';
}) => (
  <Item
    actions={
      slot === 'actions' ? <Button size="xs">{docsCopy('查看')}</Button> : null
    }
    content={
      slot === 'content' ? <Badge variant="secondary">production</Badge> : null
    }
    description={docsCopy('每个结构字段都拥有独立的语义槽位。')}
    classNames={
      slot === 'content' ? { content: 'rounded-xl bg-muted/50 p-2' } : undefined
    }
    footer={
      slot === 'footer' ? <small>{docsCopy('更新于 2 分钟前')}</small> : null
    }
    header={slot === 'header' ? <Badge variant="outline">v0.12.0</Badge> : null}
    title={docsCopy('生产发布')}
    variant="outline"
  />
);

export const ItemLinkDemo = () => (
  <Item
    description={docsCopy('传入 href 后根节点使用原生链接语义。')}
    href="#item-link"
    media={<ArrowUpRight />}
    mediaType="icon"
    title={docsCopy('查看发布详情')}
    variant="outline"
  />
);

export const ItemGroupDemo = ({
  separator = 'default',
}: {
  separator?: 'custom' | 'default' | 'none';
}) => (
  <Item.Group
    className="display-activity-list"
    items={[
      { key: 'build', title: docsCopy('构建完成') },
      { key: 'release', title: docsCopy('发布完成') },
    ]}
    separator={
      separator === 'custom' ? (
        <Marker content={docsCopy('进入生产阶段')} variant="separator" />
      ) : (
        separator === 'default'
      )
    }
  />
);

export const ItemGroupRenderDemo = () => (
  <Item.Group
    className="display-activity-list"
    items={[
      { key: 'preflight', title: docsCopy('预检完成') },
      { key: 'release', title: docsCopy('发布完成') },
    ]}
    renderItem={(item, index) => (
      <Item
        {...item}
        actions={<Badge variant="outline">0{index + 1}</Badge>}
        variant="outline"
      />
    )}
  />
);

export const MarkerTimelineDemo = ({
  variant = 'separator',
}: {
  variant?: 'default' | 'separator' | 'border';
}) => {
  return (
    <div className="display-timeline">
      <div className="display-timeline-event">
        <span>21:42</span>
        <strong>{docsCopy('构建通过')}</strong>
      </div>
      <Marker
        content={docsCopy('生产发布开始 · 21:46')}
        icon={<CircleDot />}
        variant={variant}
      />
      <div className="display-timeline-event">
        <span>21:48</span>
        <strong>{docsCopy('流量切换完成')}</strong>
      </div>
    </div>
  );
};

export const MarkerLinkDemo = () => (
  <Marker
    classNames={{ content: 'font-medium', icon: 'text-primary' }}
    content={docsCopy('查看完整发布记录')}
    href="#release-history"
    icon={<ArrowUpRight />}
  />
);

const tableRows = [
  ['Web Console', 'v0.12.0', docsCopy('生产'), docsCopy('查看')],
  ['Auth API', 'v1.8.2', docsCopy('生产'), docsCopy('查看')],
  ['Worker', 'v0.9.7', docsCopy('预览'), docsCopy('确认')],
];

export const TableReleaseDemo = () => {
  return (
    <div className="display-table-shell">
      <Table>
        <Table.Caption>
          {docsCopy('今晚 22:00 发布窗口中的服务。')}
        </Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>{docsCopy('服务')}</Table.Head>
            <Table.Head>{docsCopy('版本')}</Table.Head>
            <Table.Head>{docsCopy('环境')}</Table.Head>
            <Table.Head align="center">{docsCopy('操作')}</Table.Head>
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
                  variant={action === docsCopy('确认') ? 'outline' : 'ghost'}
                >
                  {action}
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>{docsCopy('已就绪服务')}</Table.Cell>
            <Table.Cell>2 / 3</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

const fixedTableRows = [
  [
    'Web Console',
    docsCopy('体验团队'),
    'v0.12.0',
    docsCopy('生产'),
    '42.8k',
    docsCopy('华东'),
    docsCopy('今天 21:48'),
    docsCopy('健康'),
  ],
  [
    'Auth API',
    docsCopy('身份团队'),
    'v1.8.2',
    docsCopy('生产'),
    '128.6k',
    docsCopy('华北'),
    docsCopy('今天 20:36'),
    docsCopy('健康'),
  ],
  [
    'Event Worker',
    docsCopy('平台团队'),
    'v0.9.7',
    docsCopy('预览'),
    '18.4k',
    docsCopy('新加坡'),
    docsCopy('昨天 23:12'),
    docsCopy('观察'),
  ],
  [
    'Billing API',
    docsCopy('商业团队'),
    'v2.4.1',
    docsCopy('生产'),
    '76.2k',
    docsCopy('法兰克福'),
    docsCopy('昨天 18:04'),
    docsCopy('健康'),
  ],
  [
    'Search Indexer',
    docsCopy('数据团队'),
    'v1.3.0',
    docsCopy('生产'),
    '31.7k',
    docsCopy('华东'),
    docsCopy('周一 16:22'),
    docsCopy('健康'),
  ],
  [
    'Audit Stream',
    docsCopy('安全团队'),
    'v0.8.6',
    docsCopy('预览'),
    '12.1k',
    docsCopy('华北'),
    docsCopy('周一 14:08'),
    docsCopy('观察'),
  ],
  [
    'Notification',
    docsCopy('增长团队'),
    'v3.1.4',
    docsCopy('生产'),
    '54.9k',
    docsCopy('新加坡'),
    docsCopy('周日 22:45'),
    docsCopy('健康'),
  ],
];

export const TableFixedDemo = () => {
  return (
    <div className="display-table-shell display-table-wide">
      <Table className="min-w-[960px] table-fixed">
        <Table.Header>
          <Table.Row>
            <Table.Head fixed="start" className="w-40">
              {docsCopy('服务')}
            </Table.Head>
            <Table.Head className="w-32">{docsCopy('负责团队')}</Table.Head>
            <Table.Head className="w-28">{docsCopy('版本')}</Table.Head>
            <Table.Head className="w-20">{docsCopy('环境')}</Table.Head>
            <Table.Head align="end" className="w-36">
              {docsCopy('每分钟请求')}
            </Table.Head>
            <Table.Head className="w-28">{docsCopy('区域')}</Table.Head>
            <Table.Head className="w-32">{docsCopy('最近部署')}</Table.Head>
            <Table.Head fixed="end" align="center" className="w-24">
              {docsCopy('操作')}
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
                    aria-label={`${status === docsCopy('健康') ? docsCopy('监控') : docsCopy('排查')} ${service}`}
                    size="xs"
                    type="button"
                    variant="ghost"
                  >
                    {status === docsCopy('健康')
                      ? docsCopy('监控')
                      : docsCopy('排查')}
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

const virtualTableRows = Array.from({ length: 1000 }, (_, index) => ({
  id: `EVT-${String(index + 1).padStart(4, '0')}`,
  service: ['Web Console', 'Auth API', 'Event Worker', 'Search Indexer'][
    index % 4
  ],
  region: [
    docsCopy('华东'),
    docsCopy('华北'),
    docsCopy('新加坡'),
    docsCopy('法兰克福'),
  ][index % 4],
  latency: `${32 + ((index * 17) % 180)} ms`,
  requests: `${(18.4 + ((index * 13) % 720) / 10).toFixed(1)}k`,
  status: index % 9 === 0 ? docsCopy('观察') : docsCopy('健康'),
}));

const getVirtualTableRowKey = (row: (typeof virtualTableRows)[number]) => {
  return row.id;
};

export const TableVirtualScrollDemo = () => {
  return (
    <div className="display-table-shell display-table-wide">
      <div className="display-table-virtual-meta">
        <span>{docsCopy('1,000 条单行数据')}</span>
        <small>{docsCopy('当前仅渲染可视区域附近的行')}</small>
      </div>
      <Table
        aria-rowcount={virtualTableRows.length + 1}
        className="min-w-[820px] table-fixed"
        containerClassName="max-h-80"
      >
        <Table.Header>
          <Table.Row>
            <Table.Head fixed="start" className="w-32">
              {docsCopy('事件')}
            </Table.Head>
            <Table.Head className="w-52">{docsCopy('服务')}</Table.Head>
            <Table.Head className="w-32">{docsCopy('区域')}</Table.Head>
            <Table.Head align="end" className="w-32">
              {docsCopy('延迟')}
            </Table.Head>
            <Table.Head align="end" className="w-36">
              {docsCopy('每分钟请求')}
            </Table.Head>
            <Table.Head fixed="end" align="center" className="w-28">
              {docsCopy('操作')}
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
                  aria-label={`${row.status === docsCopy('健康') ? docsCopy('查看') : docsCopy('排查')} ${row.id}`}
                  size="xs"
                  type="button"
                  variant="ghost"
                >
                  {row.status === docsCopy('健康')
                    ? docsCopy('查看')
                    : docsCopy('排查')}
                </Button>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.VirtualBody>
      </Table>
    </div>
  );
};

const paginatedTableRows = [
  ['REL-1842', 'Web Console', docsCopy('林默'), docsCopy('已完成')],
  ['REL-1841', 'Auth API', docsCopy('周一'), docsCopy('已完成')],
  ['REL-1840', 'Event Worker', docsCopy('许澄'), docsCopy('进行中')],
  ['REL-1839', 'Billing API', docsCopy('林默'), docsCopy('待审批')],
  ['REL-1838', 'Search Indexer', docsCopy('周一'), docsCopy('已完成')],
  ['REL-1837', 'Audit Stream', docsCopy('许澄'), docsCopy('已回滚')],
  ['REL-1836', 'Notification', docsCopy('林默'), docsCopy('已完成')],
];

export const TablePaginationDemo = () => {
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
              <Table.Head>{docsCopy('发布单')}</Table.Head>
              <Table.Head>{docsCopy('服务')}</Table.Head>
              <Table.Head>{docsCopy('负责人')}</Table.Head>
              <Table.Head align="center">{docsCopy('操作')}</Table.Head>
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
                      status === docsCopy('待审批')
                        ? docsCopy('审批')
                        : status === docsCopy('进行中')
                          ? docsCopy('跟进')
                          : docsCopy('查看')
                    } ${release}`}
                    size="xs"
                    type="button"
                    variant="ghost"
                  >
                    {status === docsCopy('待审批')
                      ? docsCopy('审批')
                      : status === docsCopy('进行中')
                        ? docsCopy('跟进')
                        : docsCopy('查看')}
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="display-table-pagination">
        <span>
          {docsCopy('共')}
          {paginatedTableRows.length}
          {docsCopy('项 · 第')}
          {page} / {pageCount}
          {docsCopy('页')}
        </span>
        <Pagination
          ariaLabels={{
            more: docsCopy('更多页面'),
            navigation: docsCopy('分页'),
            next: docsCopy('前往下一页'),
            previous: docsCopy('前往上一页'),
          }}
          current={page}
          onChange={setPage}
          pageCount={pageCount}
          previousText={docsCopy('上一页')}
          nextText={docsCopy('下一页')}
        />
      </div>
    </div>
  );
};

const expandableTableRows = [
  {
    id: 'REL-1842',
    service: 'Web Console',
    status: docsCopy('成功'),
    duration: '1m 48s',
    detail: docsCopy(
      '流量已分四批切换完成，错误率维持在 0.03%，无需人工干预。'
    ),
  },
  {
    id: 'REL-1841',
    service: 'Auth API',
    status: docsCopy('观察中'),
    duration: '2m 16s',
    detail: docsCopy(
      '新实例已全部就绪，当前继续观察登录成功率与令牌刷新延迟。'
    ),
  },
  {
    id: 'REL-1840',
    service: 'Event Worker',
    status: docsCopy('待执行'),
    duration: '—',
    detail: docsCopy(
      '等待 Auth API 观察窗口结束后开始部署，预计占用 3 个执行实例。'
    ),
  },
];

export const TableExpandableDemo = () => {
  const [expandedId, setExpandedId] = useState<string | null>('REL-1842');

  return (
    <div className="display-table-shell">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-12">
              <span className="sr-only">{docsCopy('展开')}</span>
            </Table.Head>
            <Table.Head>{docsCopy('发布单')}</Table.Head>
            <Table.Head>{docsCopy('服务')}</Table.Head>
            <Table.Head align="end">{docsCopy('耗时')}</Table.Head>
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
                      aria-label={`${expanded ? docsCopy('收起') : docsCopy('展开')} ${row.id}`}
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
                    <strong>{docsCopy('部署详情')}</strong>
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
};

const cellTableRows = [
  {
    service: 'Realtime Collaboration Gateway',
    description: docsCopy(
      '承载多人编辑光标、文档增量同步以及离线重连后的冲突合并。'
    ),
    successRate: '99.98%',
    action: docsCopy('配置'),
  },
  {
    service: 'Notification',
    description: docsCopy('推送发布通知。'),
    successRate: '98.62%',
    action: docsCopy('查看'),
  },
];

const TableActionCell = ({
  action,
  service,
}: {
  action: string;
  service: string;
}) => {
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
};

export const TableCellDemo = () => {
  return (
    <div className="display-table-shell display-table-wide">
      <Table className="min-w-[680px] table-fixed">
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-52">{docsCopy('服务（靠左）')}</Table.Head>
            <Table.Head
              ellipsis
              className="w-64"
              ellipsisTooltip={docsCopy(
                '服务说明、最近一次生产部署上下文与异常原因'
              )}
            >
              {docsCopy('服务说明、最近一次生产部署上下文与异常原因')}
            </Table.Head>
            <Table.Head align="end" className="w-28">
              {docsCopy('成功率（靠右）')}
            </Table.Head>
            <Table.Head align="center" className="w-28">
              {docsCopy('操作（居中）')}
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
};

const tooltipPlacements = [
  {
    label: docsCopy('左上'),
    placement: 'top-start',
    side: 'top',
    align: 'start',
  },
  { label: docsCopy('上方'), placement: 'top', side: 'top', align: 'center' },
  { label: docsCopy('右上'), placement: 'top-end', side: 'top', align: 'end' },
  { label: docsCopy('左侧'), placement: 'left', side: 'left', align: 'center' },
  {
    label: docsCopy('右侧'),
    placement: 'right',
    side: 'right',
    align: 'center',
  },
  {
    label: docsCopy('左下'),
    placement: 'bottom-start',
    side: 'bottom',
    align: 'start',
  },
  {
    label: docsCopy('下方'),
    placement: 'bottom',
    side: 'bottom',
    align: 'center',
  },
  {
    label: docsCopy('右下'),
    placement: 'bottom-end',
    side: 'bottom',
    align: 'end',
  },
] as const;

export const TooltipPlacementsDemo = () => {
  return (
    <div
      className="display-tooltip-placements"
      aria-label={docsCopy('Tooltip 八个方位')}
    >
      {tooltipPlacements.map((placement) => (
        <div
          className="display-tooltip-placement"
          data-placement={placement.placement}
          key={placement.placement}
        >
          <Tooltip
            align={placement.align}
            content={docsCopy(`${placement.label}提示`)}
            delay={100}
            side={placement.side}
            trigger={
              <Button
                aria-label={docsCopy(`在${placement.label}显示 Tooltip`)}
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
        <small>{docsCopy('悬停外围按钮')}</small>
      </div>
    </div>
  );
};
