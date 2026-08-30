import '@heliannuuthus/ui/styles.css';
import { Segmented } from '@heliannuuthus/ui';
import { Columns3, List, Rows3 } from 'lucide-react';
import { useState } from 'react';

const labels = {
  en: {
    compact: 'Compact',
    comfortable: 'Comfortable',
    items: ['Getting started', 'Design principles', 'Component API'],
    label: 'Reading density',
    spacious: 'Spacious',
  },
  zh: {
    compact: '紧凑',
    comfortable: '舒适',
    items: ['快速开始', '设计理念', '组件 API'],
    label: '阅读密度',
    spacious: '宽松',
  },
} as const;

type Density = 'compact' | 'comfortable' | 'spacious';

export default function SegmentedLayoutsCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const copy = labels[locale];
  const [density, setDensity] = useState<Density>('comfortable');
  const options = [
    { icon: <List />, label: copy.compact, value: 'compact' },
    { icon: <Rows3 />, label: copy.comfortable, value: 'comfortable' },
    { icon: <Columns3 />, label: copy.spacious, value: 'spacious' },
  ] as const;
  const rowPadding = {
    compact: 'py-1.5',
    comfortable: 'py-3',
    spacious: 'py-5',
  }[density];

  return (
    <div className="demo-preview demo-preview-flow [--demo-preview-height:20rem]">
      <section className="mx-auto grid w-full max-w-md gap-4 rounded-2xl border border-border bg-background p-4 shadow-sm">
        <Segmented
          aria-label={copy.label}
          block
          onChange={setDensity}
          options={options}
          value={density}
        />
        <div className="overflow-hidden rounded-xl border border-border px-3">
          {copy.items.map((item, index) => (
            <div
              className={`flex items-center gap-3 border-border transition-[padding] duration-200 ${rowPadding} ${index === 0 ? '' : 'border-t'}`}
              key={item}
            >
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="flex-1 text-sm font-medium">{item}</span>
              <span className="text-xs tabular-nums text-muted-foreground">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
