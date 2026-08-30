import '@heliannuuthus/ui/styles.css';
import { Segmented } from '@heliannuuthus/ui';
import { Columns3, List, Rows3 } from 'lucide-react';
import { useState } from 'react';

const copy = {
  en: {
    items: [
      ['Design review', 'Today, 14:30'],
      ['API handoff', 'Tomorrow, 09:00'],
      ['Release notes', 'Friday, 16:00'],
    ],
    options: { board: 'Board', list: 'List', timeline: 'Timeline' },
    subtitle: 'Three items need your attention',
    title: 'Workspace',
    viewLabel: 'Change content view',
  },
  zh: {
    items: [
      ['设计走查', '今天 14:30'],
      ['API 交接', '明天 09:00'],
      ['发布说明', '周五 16:00'],
    ],
    options: { board: '看板', list: '列表', timeline: '时间线' },
    subtitle: '有 3 项内容需要关注',
    title: '工作空间',
    viewLabel: '切换内容视图',
  },
} as const;

type View = 'board' | 'list' | 'timeline';

export default function SegmentedBasicCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const content = copy[locale];
  const [view, setView] = useState<View>('board');
  const options = [
    { icon: <List />, label: content.options.list, value: 'list' },
    { icon: <Columns3 />, label: content.options.board, value: 'board' },
    { icon: <Rows3 />, label: content.options.timeline, value: 'timeline' },
  ] as const;

  return (
    <div className="demo-preview demo-preview-flow [--demo-preview-height:22rem]">
      <section className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4">
          <div className="grid gap-0.5">
            <strong className="text-sm text-foreground">{content.title}</strong>
            <span className="text-xs text-muted-foreground">
              {content.subtitle}
            </span>
          </div>
          <Segmented
            aria-label={content.viewLabel}
            onChange={setView}
            options={options}
            size="sm"
            value={view}
          />
        </header>

        {view === 'list' ? (
          <div className="grid gap-2 p-4">
            {content.items.map(([title, meta], index) => (
              <article
                className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5"
                key={title}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-xs font-semibold text-foreground">
                  {index + 1}
                </span>
                <strong className="min-w-0 flex-1 truncate text-sm">
                  {title}
                </strong>
                <span className="text-xs text-muted-foreground">{meta}</span>
              </article>
            ))}
          </div>
        ) : view === 'timeline' ? (
          <div className="grid gap-0 p-5">
            {content.items.map(([title, meta]) => (
              <article
                className="relative grid gap-0.5 border-l border-border py-2 pl-5 before:absolute before:-left-1 before:top-4 before:size-2 before:rounded-full before:bg-primary"
                key={title}
              >
                <strong className="text-sm">{title}</strong>
                <span className="text-xs text-muted-foreground">{meta}</span>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
            {content.items.map(([title, meta], index) => (
              <article
                className="grid min-h-28 content-between gap-6 rounded-xl border border-border p-3"
                key={title}
              >
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="grid gap-1">
                  <strong className="text-sm">{title}</strong>
                  <span className="text-xs text-muted-foreground">{meta}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
