import * as React from 'react';

import { cn } from '../lib/utils';

type MasonryLength = number | string;
type MasonryGap = MasonryLength | readonly [MasonryLength, MasonryLength];
type MasonryItemSpan = 'auto' | 'full';

type MasonryItem = Omit<
  React.ComponentProps<'div'>,
  'children' | 'content' | 'key' | 'ref'
> & {
  content: React.ReactNode;
  key: React.Key;
  span?: MasonryItemSpan;
};

type MasonryProps = Omit<React.ComponentProps<'div'>, 'children' | 'ref'> & {
  columns?: number;
  gap?: MasonryGap;
  items: readonly MasonryItem[];
  minColumnWidth?: MasonryLength;
  ref?: React.Ref<HTMLDivElement>;
};

const toCssLength = (value: MasonryLength) => {
  return typeof value === 'number' ? `${value}px` : value;
};

const resolveGap = (gap: MasonryGap) => {
  const [columnGap, rowGap] = Array.isArray(gap) ? gap : [gap, gap];
  return [toCssLength(columnGap), toCssLength(rowGap)] as const;
};

const createColumnTemplate = (
  columns: number,
  minColumnWidth: MasonryLength,
  columnGap: string
) => {
  const gapCount = Math.max(0, columns - 1);
  const totalGap =
    gapCount === 0
      ? '0px'
      : Array.from({ length: gapCount }, () => columnGap).join(' + ');
  const columnFloor = `max(${toCssLength(minColumnWidth)}, calc((100% - (${totalGap})) / ${columns}))`;

  return `repeat(auto-fit, minmax(min(100%, ${columnFloor}), 1fr))`;
};

const assignRef = <T,>(ref: React.Ref<T> | undefined, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref != null) {
    ref.current = value;
  }
};

const createLengthProbe = (container: HTMLElement, value: string) => {
  const probe = document.createElement('span');
  probe.dataset.masonryProbe = '';
  probe.style.position = 'absolute';
  probe.style.visibility = 'hidden';
  probe.style.pointerEvents = 'none';
  probe.style.inlineSize = value;
  probe.style.blockSize = '0';
  container.appendChild(probe);
  return probe;
};

const useMasonryLayout = (
  containerRef: React.RefObject<HTMLElement | null>,
  columns: number,
  minColumnWidth: string
) => {
  React.useLayoutEffect(() => {
    const container = containerRef.current;
    if (container == null || typeof ResizeObserver === 'undefined') return;

    let frame = 0;
    const lengthProbe = createLengthProbe(container, minColumnWidth);
    const resizeObserver = new ResizeObserver(() => scheduleLayout());

    const layout = () => {
      frame = 0;
      const computedStyle = getComputedStyle(container);
      const paddingInlineStart =
        Number.parseFloat(computedStyle.paddingInlineStart) || 0;
      const paddingInlineEnd =
        Number.parseFloat(computedStyle.paddingInlineEnd) || 0;
      const paddingBlockStart =
        Number.parseFloat(computedStyle.paddingBlockStart) || 0;
      const paddingBlockEnd =
        Number.parseFloat(computedStyle.paddingBlockEnd) || 0;
      const containerWidth = Math.max(
        0,
        container.clientWidth - paddingInlineStart - paddingInlineEnd
      );
      if (containerWidth <= 0) return;

      const columnGap = Number.parseFloat(computedStyle.columnGap) || 0;
      const rowGap = Number.parseFloat(computedStyle.rowGap) || 0;
      const measuredMinimum = lengthProbe.getBoundingClientRect().width;
      const minimumWidth =
        measuredMinimum > 0 ? measuredMinimum : containerWidth;
      const resolvedColumns = Math.min(
        columns,
        Math.max(
          1,
          Math.floor((containerWidth + columnGap) / (minimumWidth + columnGap))
        )
      );
      const columnWidth =
        (containerWidth - columnGap * (resolvedColumns - 1)) / resolvedColumns;
      const items = Array.from(container.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && child.dataset.masonryProbe == null
      );

      for (const item of items) {
        const full = item.dataset.span === 'full';
        item.style.position = 'absolute';
        item.style.insetBlockStart = '0';
        item.style.insetInlineStart = '0';
        item.style.boxSizing = 'border-box';
        item.style.inlineSize = `${full ? containerWidth : columnWidth}px`;
        item.style.translate = `${paddingInlineStart}px ${paddingBlockStart}px`;
      }

      const columnHeights = Array.from({ length: resolvedColumns }, () => 0);

      for (const item of items) {
        const itemHeight = item.getBoundingClientRect().height;
        const full = item.dataset.span === 'full';

        if (full) {
          const blockOffset = Math.max(...columnHeights);
          item.style.translate = `${paddingInlineStart}px ${
            paddingBlockStart + blockOffset
          }px`;
          columnHeights.fill(blockOffset + itemHeight + rowGap);
          continue;
        }

        let columnIndex = 0;
        for (let index = 1; index < columnHeights.length; index += 1) {
          if (columnHeights[index] < columnHeights[columnIndex]) {
            columnIndex = index;
          }
        }

        const inlineOffset = columnIndex * (columnWidth + columnGap);
        const blockOffset = columnHeights[columnIndex];
        item.style.translate = `${paddingInlineStart + inlineOffset}px ${
          paddingBlockStart + blockOffset
        }px`;
        columnHeights[columnIndex] = blockOffset + itemHeight + rowGap;
      }

      const contentHeight = Math.max(...columnHeights, 0);
      const resolvedContentHeight = Math.max(0, contentHeight - rowGap);
      const borderBlockStart =
        Number.parseFloat(computedStyle.borderBlockStartWidth) || 0;
      const borderBlockEnd =
        Number.parseFloat(computedStyle.borderBlockEndWidth) || 0;
      const containerHeight =
        computedStyle.boxSizing === 'border-box'
          ? resolvedContentHeight +
            paddingBlockStart +
            paddingBlockEnd +
            borderBlockStart +
            borderBlockEnd
          : resolvedContentHeight;
      container.style.height = `${containerHeight}px`;
      container.dataset.resolvedColumns = String(resolvedColumns);
    };

    const scheduleLayout = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    };

    const observeChildren = () => {
      for (const child of container.children) {
        if (
          child instanceof HTMLElement &&
          child.dataset.masonryProbe == null
        ) {
          resizeObserver.observe(child);
        }
      }
    };

    const mutationObserver = new MutationObserver(() => {
      observeChildren();
      scheduleLayout();
    });

    resizeObserver.observe(container);
    observeChildren();
    mutationObserver.observe(container, { childList: true });
    scheduleLayout();

    return () => {
      cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      lengthProbe.remove();
    };
  }, [columns, containerRef, minColumnWidth]);
};

const Masonry = ({
  className,
  columns = 3,
  gap = 16,
  items,
  minColumnWidth = 240,
  ref,
  style,
  ...props
}: MasonryProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const columnCount = Number.isFinite(columns)
    ? Math.max(1, Math.floor(columns))
    : 3;
  const [columnGap, rowGap] = resolveGap(gap);
  const minimumWidth = toCssLength(minColumnWidth);
  const setContainerRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      assignRef(ref, node);
    },
    [ref]
  );

  useMasonryLayout(containerRef, columnCount, minimumWidth);

  return (
    <div
      ref={setContainerRef}
      data-layout="masonry"
      data-slot="masonry"
      data-columns={columnCount}
      className={cn('relative grid items-start', className)}
      style={{
        columnGap,
        gridTemplateColumns: createColumnTemplate(
          columnCount,
          minimumWidth,
          columnGap
        ),
        rowGap,
        ...style,
      }}
      {...props}
    >
      {items.map(
        ({
          className: itemClassName,
          content,
          key,
          span = 'auto',
          ...itemProps
        }) => (
          <div
            {...itemProps}
            className={cn(
              'min-w-0',
              span === 'full' && 'col-span-full',
              itemClassName
            )}
            data-slot="masonry-item"
            data-span={span}
            key={key}
          >
            {content}
          </div>
        )
      )}
    </div>
  );
};

export { Masonry };
export type {
  MasonryGap,
  MasonryItem,
  MasonryItemSpan,
  MasonryLength,
  MasonryProps,
};
