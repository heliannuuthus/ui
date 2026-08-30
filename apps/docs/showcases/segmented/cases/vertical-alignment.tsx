import '@heliannuuthus/ui/styles.css';
import { Segmented } from '@heliannuuthus/ui';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import { useState } from 'react';

const copy = {
  en: {
    bottom: 'Bottom',
    center: 'Center',
    label: 'Vertical alignment',
    preview: 'Preview',
    top: 'Top',
  },
  zh: {
    bottom: '底部',
    center: '居中',
    label: '垂直对齐',
    preview: '预览',
    top: '顶部',
  },
} as const;

type Alignment = 'bottom' | 'center' | 'top';

export default function SegmentedVerticalCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const content = copy[locale];
  const [alignment, setAlignment] = useState<Alignment>('center');
  const options = [
    { icon: <ArrowUp />, label: content.top, value: 'top' },
    { icon: <Minus />, label: content.center, value: 'center' },
    { icon: <ArrowDown />, label: content.bottom, value: 'bottom' },
  ] as const;
  const alignmentClass = {
    bottom: 'justify-end',
    center: 'justify-center',
    top: 'justify-start',
  }[alignment];

  return (
    <div className="demo-preview [--demo-preview-height:20rem]">
      <section className="mx-auto grid w-full max-w-md grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl border border-border bg-background p-3 shadow-sm">
        <Segmented
          aria-label={content.label}
          onChange={setAlignment}
          options={options}
          orientation="vertical"
          value={alignment}
        />
        <div
          className={`flex min-h-48 flex-col rounded-xl border border-dashed border-border bg-muted/35 p-3 transition-[justify-content] ${alignmentClass}`}
        >
          <div className="rounded-lg border border-border bg-background px-3 py-2 shadow-sm">
            <span className="text-xs font-medium text-foreground">
              {content.preview}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
