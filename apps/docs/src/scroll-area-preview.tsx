import { docsCopy } from './i18n/content';
import { useRef, useState } from 'react';
import {
  ScrollArea,
  type ScrollAreaScrollbarVisibility,
} from '@heliannuuthus/ui';
import {
  Check,
  CheckCircle2,
  CircleDot,
  Clock3,
  GitCommitHorizontal,
  Rocket,
} from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

type ReleaseEvent = {
  description: string;
  id: string;
  status: 'complete' | 'current' | 'queued';
  time: string;
  title: string;
};

const releaseEvents: ReleaseEvent[] = [
  {
    id: 'commit',
    title: docsCopy('提交进入发布队列'),
    description: 'style/docs-visual-refinement · 8f2a7e1',
    status: 'complete',
    time: '09:42',
  },
  {
    id: 'types',
    title: docsCopy('类型检查通过'),
    description: docsCopy('应用与组件包均未发现类型错误'),
    status: 'complete',
    time: '09:44',
  },
  {
    id: 'lint',
    title: docsCopy('代码规范检查通过'),
    description: docsCopy('ESLint 与 Prettier 已完成'),
    status: 'complete',
    time: '09:45',
  },
  {
    id: 'build',
    title: docsCopy('生产构建完成'),
    description: docsCopy('文档站资源已生成并压缩'),
    status: 'complete',
    time: '09:48',
  },
  {
    id: 'preview',
    title: docsCopy('预览环境部署中'),
    description: docsCopy('正在同步静态资源与边缘缓存'),
    status: 'current',
    time: docsCopy('现在'),
  },
  {
    id: 'visual',
    title: docsCopy('等待视觉回归'),
    description: docsCopy('桌面与窄屏截图即将开始比对'),
    status: 'queued',
    time: docsCopy('下一步'),
  },
  {
    id: 'approval',
    title: docsCopy('等待发布确认'),
    description: docsCopy('由值班负责人确认本次变更'),
    status: 'queued',
    time: docsCopy('待定'),
  },
  {
    id: 'production',
    title: docsCopy('推送生产环境'),
    description: docsCopy('完成后将逐步刷新全球节点'),
    status: 'queued',
    time: docsCopy('待定'),
  },
];

function EventIcon({ status }: Pick<ReleaseEvent, 'status'>) {
  if (status === 'complete') return <Check />;
  if (status === 'current') return <CircleDot />;
  return <Clock3 />;
}

function AnimatedReleaseEvent({
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
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.45, once: false });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        reduceMotion || inView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.94, y: 10 }
      }
      aria-selected={selected}
      className="scroll-area-release-event"
      data-active={active || undefined}
      data-index={index}
      data-status={event.status}
      id={`release-event-${event.id}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 10 }}
      onClick={onSelect}
      onPointerMove={onActivate}
      ref={ref}
      role="option"
      transition={{
        duration: reduceMotion ? 0 : 0.2,
        delay: reduceMotion ? 0 : Math.min(index * 0.025, 0.15),
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
      <span className="scroll-area-release-event-selected" aria-hidden="true">
        <CheckCircle2 />
      </span>
    </motion.div>
  );
}

export function ScrollAreaAnimatedListDemo({
  scrollbarVisibility = 'auto',
}: {
  scrollbarVisibility?: ScrollAreaScrollbarVisibility;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedEvent = releaseEvents[selectedIndex];

  function moveActive(nextIndex: number) {
    const boundedIndex = Math.max(
      0,
      Math.min(nextIndex, releaseEvents.length - 1)
    );

    setActiveIndex(boundedIndex);
    requestAnimationFrame(() => {
      viewportRef.current
        ?.querySelector<HTMLElement>(`[data-index="${boundedIndex}"]`)
        ?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'nearest',
        });
    });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
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
  }

  return (
    <section className="scroll-area-release-demo">
      <header>
        <span className="scroll-area-release-mark">
          <Rocket />
        </span>
        <div>
          <span>Release stream</span>
          <h3>{docsCopy('组件库发布动态')}</h3>
        </div>
        <span className="scroll-area-release-live">
          <i />
          {docsCopy('进行中')}
        </span>
      </header>

      <ScrollArea
        className="scroll-area-release-list"
        fadeEdges
        fadeSize={52}
        overflowEdgeThreshold={2}
        scrollbarVisibility={scrollbarVisibility}
        viewportProps={{
          'aria-activedescendant': `release-event-${releaseEvents[activeIndex].id}`,
          'aria-label': docsCopy(
            '组件库发布动态，使用上下方向键浏览，按 Enter 选择'
          ),
          onKeyDown: handleKeyDown,
          ref: viewportRef,
          role: 'listbox',
          tabIndex: 0,
        }}
      >
        <div className="scroll-area-release-events">
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
          <GitCommitHorizontal />
          {docsCopy('当前选择')}
        </span>
        <strong aria-live="polite">{selectedEvent.title}</strong>
        <kbd>↑↓</kbd>
        <kbd>Enter</kbd>
      </footer>
    </section>
  );
}
