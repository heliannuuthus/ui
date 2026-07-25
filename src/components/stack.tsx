import * as React from 'react';

import { cn } from '../lib/utils';

type StackGap = number | readonly [number, number];
type StackAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type StackJustify =
  'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type StackOrientation = 'horizontal' | 'vertical';

type StackProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  align?: StackAlign;
  block?: boolean;
  children?: React.ReactNode;
  gap?: StackGap;
  justify?: StackJustify;
  orientation?: StackOrientation;
  separator?: React.ReactNode;
  wrap?: boolean;
};

type StackCompactProps = Omit<
  StackProps,
  'align' | 'gap' | 'separator' | 'wrap'
>;

const alignments: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const justifications: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

function resolveGap(gap: StackGap) {
  if (typeof gap === 'number') return [gap, gap] as const;
  return gap;
}

function StackRoot({
  align = 'stretch',
  block = false,
  children,
  className,
  gap = 12,
  justify = 'start',
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
        block && 'w-full',
        orientation === 'vertical' && 'flex-col',
        orientation === 'horizontal' && wrap && 'flex-wrap',
        alignments[align],
        justifications[justify],
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
    '*:data-slot:rounded-r-none [&>[data-slot]:first-child]:rounded-l-4xl! [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-4xl! [&>[data-slot]~[data-slot]]:-ml-px [&>[data-slot]~[data-slot]]:rounded-l-none',
  vertical:
    'flex-col *:data-slot:rounded-b-none [&>[data-slot]:first-child]:rounded-t-4xl! [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-4xl! [&>[data-slot]~[data-slot]]:-mt-px [&>[data-slot]~[data-slot]]:rounded-t-none',
};

function StackCompact({
  block = false,
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
      block={block}
      gap={0}
      orientation={orientation}
      className={cn(
        block ? 'w-full' : 'w-fit',
        '*:focus-visible:relative *:focus-visible:z-10 [&>[data-slot]:has(:focus-visible)]:relative [&>[data-slot]:has(:focus-visible)]:z-10 [&>[data-slot=input]:focus-visible]:ring-0 [&>[data-slot=input-group]:has(:focus-visible)]:ring-0 [&>[data-slot=select-trigger]:has(:focus-visible)]:ring-0',
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
  StackJustify,
  StackOrientation,
  StackProps,
};
