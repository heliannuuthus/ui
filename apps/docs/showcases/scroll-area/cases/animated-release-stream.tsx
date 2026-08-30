import '@heliannuuthus/ui/styles.css';
import { Kbd, ScrollArea, Typography } from '@heliannuuthus/ui';
import {
  Check,
  CheckCircle2,
  CircleDot,
  Clock3,
  GitCommitHorizontal,
  Rocket,
} from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef, useState, type KeyboardEvent } from 'react';
import './animated-release-stream.css';

type ReleaseEvent = {
  description: string;
  id: string;
  status: 'complete' | 'current' | 'queued';
  time: string;
  title: string;
};

const createReleaseEvents = (locale: 'en' | 'zh'): ReleaseEvent[] => {
  if (locale === 'en') {
    return [
      {
        id: 'commit',
        title: 'Commit entered the release queue',
        description: 'docs/scroll-area-motion · 8f2a7e1',
        status: 'complete',
        time: '09:42',
      },
      {
        id: 'types',
        title: 'Type checks passed',
        description: 'Application and component package are clear',
        status: 'complete',
        time: '09:44',
      },
      {
        id: 'lint',
        title: 'Code quality checks passed',
        description: 'ESLint and Prettier completed',
        status: 'complete',
        time: '09:45',
      },
      {
        id: 'build',
        title: 'Production build completed',
        description: 'Documentation assets generated and compressed',
        status: 'complete',
        time: '09:48',
      },
      {
        id: 'preview',
        title: 'Deploying preview environment',
        description: 'Syncing static assets and edge cache',
        status: 'current',
        time: 'Now',
      },
      {
        id: 'visual',
        title: 'Waiting for visual regression',
        description: 'Desktop and narrow screenshots are next',
        status: 'queued',
        time: 'Next',
      },
      {
        id: 'approval',
        title: 'Waiting for release approval',
        description: 'The on-call owner will confirm this change',
        status: 'queued',
        time: 'Pending',
      },
      {
        id: 'production',
        title: 'Promote to production',
        description: 'Global nodes refresh progressively afterward',
        status: 'queued',
        time: 'Pending',
      },
    ];
  }

  return [
    {
      id: 'commit',
      title: '提交进入发布队列',
      description: 'docs/scroll-area-motion · 8f2a7e1',
      status: 'complete',
      time: '09:42',
    },
    {
      id: 'types',
      title: '类型检查通过',
      description: '应用与组件包均未发现类型错误',
      status: 'complete',
      time: '09:44',
    },
    {
      id: 'lint',
      title: '代码规范检查通过',
      description: 'ESLint 与 Prettier 已完成',
      status: 'complete',
      time: '09:45',
    },
    {
      id: 'build',
      title: '生产构建完成',
      description: '文档站资源已生成并压缩',
      status: 'complete',
      time: '09:48',
    },
    {
      id: 'preview',
      title: '预览环境部署中',
      description: '正在同步静态资源与边缘缓存',
      status: 'current',
      time: '现在',
    },
    {
      id: 'visual',
      title: '等待视觉回归',
      description: '桌面与窄屏截图即将开始比对',
      status: 'queued',
      time: '下一步',
    },
    {
      id: 'approval',
      title: '等待发布确认',
      description: '由值班负责人确认本次变更',
      status: 'queued',
      time: '待定',
    },
    {
      id: 'production',
      title: '推送生产环境',
      description: '完成后将逐步刷新全球节点',
      status: 'queued',
      time: '待定',
    },
  ];
};

const EventIcon = ({ status }: Pick<ReleaseEvent, 'status'>) => {
  if (status === 'complete') return <Check aria-hidden />;
  if (status === 'current') return <CircleDot aria-hidden />;
  return <Clock3 aria-hidden />;
};

const AnimatedReleaseEvent = ({
  active,
  event,
  index,
  onActivate,
  onSelect,
  selected,
}: {
  active: boolean;
  event: ReleaseEvent;
  index: number;
  onActivate: () => void;
  onSelect: () => void;
  selected: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.45, once: false });
  const reduceMotion = useReducedMotion();
  const visibleTransform = 'translateY(0) scale(1)';
  const hiddenTransform = reduceMotion
    ? visibleTransform
    : 'translateY(10px) scale(0.96)';

  return (
    <motion.div
      animate={
        inView
          ? { opacity: 1, transform: visibleTransform }
          : { opacity: 0, transform: hiddenTransform }
      }
      aria-selected={selected}
      className="scroll-area-release-event"
      data-active={active || undefined}
      data-index={index}
      data-status={event.status}
      id={`release-event-${event.id}`}
      initial={{ opacity: 0, transform: hiddenTransform }}
      onClick={onSelect}
      onPointerMove={onActivate}
      ref={ref}
      role="option"
      transition={{
        delay: reduceMotion ? 0 : Math.min(index * 0.03, 0.15),
        duration: reduceMotion ? 0.15 : 0.2,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <span className="scroll-area-release-event-icon">
        <EventIcon status={event.status} />
      </span>
      <span className="scroll-area-release-event-copy">
        <strong>{event.title}</strong>
        <small>{event.description}</small>
      </span>
      <time>{event.time}</time>
      <span aria-hidden className="scroll-area-release-event-selected">
        <CheckCircle2 />
      </span>
    </motion.div>
  );
};

export default function ScrollAreaAnimatedReleaseCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const releaseEvents = createReleaseEvents(locale);
  const selectedEvent = releaseEvents[selectedIndex];
  const copy =
    locale === 'en'
      ? {
          current: 'Current selection',
          heading: 'Component library release stream',
          label:
            'Component library release stream. Use Up and Down to browse, then press Enter to select.',
          live: 'In progress',
        }
      : {
          current: '当前选择',
          heading: '组件库发布动态',
          label: '组件库发布动态，使用上下方向键浏览，按 Enter 选择。',
          live: '进行中',
        };

  const moveActive = (nextIndex: number) => {
    const boundedIndex = Math.max(
      0,
      Math.min(nextIndex, releaseEvents.length - 1)
    );

    setActiveIndex(boundedIndex);
    requestAnimationFrame(() => {
      contentRef.current
        ?.querySelector<HTMLElement>(`[data-index="${boundedIndex}"]`)
        ?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'nearest',
        });
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      moveActive(activeIndex + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      moveActive(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      moveActive(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      moveActive(releaseEvents.length - 1);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedIndex(activeIndex);
    }
  };

  return (
    <div className="demo-preview demo-preview-scroll-area">
      <section className="scroll-area-release-demo">
        <header>
          <span className="scroll-area-release-mark">
            <Rocket aria-hidden />
          </span>
          <div>
            <span>Release stream</span>
            <Typography.Title level={4}>{copy.heading}</Typography.Title>
          </div>
          <span className="scroll-area-release-live">
            <i aria-hidden />
            {copy.live}
          </span>
        </header>

        <ScrollArea
          aria-activedescendant={`release-event-${releaseEvents[activeIndex].id}`}
          aria-label={copy.label}
          className="scroll-area-release-list"
          onKeyDown={handleKeyDown}
          role="listbox"
          scrollbar={{ visibility: 'hidden' }}
          tabIndex={0}
        >
          <div className="scroll-area-release-events" ref={contentRef}>
            {releaseEvents.map((event, index) => (
              <AnimatedReleaseEvent
                active={index === activeIndex}
                event={event}
                index={index}
                key={event.id}
                onActivate={() => setActiveIndex(index)}
                onSelect={() => {
                  setActiveIndex(index);
                  setSelectedIndex(index);
                }}
                selected={index === selectedIndex}
              />
            ))}
          </div>
        </ScrollArea>

        <footer>
          <span>
            <GitCommitHorizontal aria-hidden />
            {copy.current}
          </span>
          <strong aria-live="polite">{selectedEvent.title}</strong>
          <Kbd keys={['↑', '↓']} separator="" />
          <Kbd>Enter</Kbd>
        </footer>
      </section>
    </div>
  );
}
