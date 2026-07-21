import * as React from 'react';

import { cn } from '../lib/utils';

type StackGap = 'sm' | 'md' | 'lg' | number | readonly [number, number];
type StackAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type StackOrientation = 'horizontal' | 'vertical';

type StackProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  align?: StackAlign;
  children?: React.ReactNode;
  gap?: StackGap;
  orientation?: StackOrientation;
  separator?: React.ReactNode;
  wrap?: boolean;
};

type StackCompactProps = Omit<
  StackProps,
  'align' | 'gap' | 'separator' | 'wrap'
>;

const presetGaps = {
  sm: 8,
  md: 12,
  lg: 16,
} as const;

const alignments: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

function resolveGap(gap: StackGap) {
  if (typeof gap === 'string') {
    const value = presetGaps[gap];
    return [value, value] as const;
  }
  if (typeof gap === 'number') return [gap, gap] as const;
  return gap;
}

function StackRoot({
  align = 'stretch',
  children,
  className,
  gap = 'md',
  orientation = 'vertical',
  separator,
  style,
  wrap = false,
  ...props
}: StackProps) {
  const items = React.Children.toArray(children);
  const [columnGap, rowGap] = resolveGap(gap);

  return (
    <div
      data-slot="stack"
      data-orientation={orientation}
      data-wrap={wrap || undefined}
      className={cn(
        'inline-flex max-w-full',
        orientation === 'vertical' && 'flex-col',
        orientation === 'horizontal' && wrap && 'flex-wrap',
        alignments[align],
        className
      )}
      style={{ columnGap, rowGap, ...style }}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && separator != null && (
            <span
              data-slot="stack-separator"
              className="inline-flex shrink-0 items-center self-stretch"
            >
              {separator}
            </span>
          )}
          {item}
        </React.Fragment>
      ))}
    </div>
  );
}

const compactOrientations: Record<StackOrientation, string> = {
  horizontal:
    '*:data-slot:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-4xl! [&>[data-slot]~[data-slot]]:-ml-px [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0',
  vertical:
    'flex-col *:data-slot:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-4xl! [&>[data-slot]~[data-slot]]:-mt-px [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0',
};

function StackCompact({
  children,
  className,
  orientation = 'horizontal',
  role = 'group',
  ...props
}: StackCompactProps) {
  return (
    <StackRoot
      align="stretch"
      data-slot="stack-compact"
      role={role}
      gap={0}
      orientation={orientation}
      className={cn(
        'w-fit *:focus-visible:relative *:focus-visible:z-10',
        compactOrientations[orientation],
        className
      )}
      {...props}
    >
      {children}
    </StackRoot>
  );
}

const Stack = Object.assign(StackRoot, { Compact: StackCompact });

export { Stack };
export type {
  StackAlign,
  StackCompactProps,
  StackGap,
  StackOrientation,
  StackProps,
};
