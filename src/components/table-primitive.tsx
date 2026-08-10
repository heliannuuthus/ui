'use client';

import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { cn } from '../lib/utils';
import { Tooltip } from './tooltip';

type TableCellAlign = 'start' | 'center' | 'end';
type TableCellFixed = 'start' | 'end';
type TableEllipsis = boolean | React.ReactNode;

type TablePrimitiveSemanticSlot = 'container' | 'table';

interface TablePrimitiveClassNames {
  container?: string;
  table?: string;
}

interface TablePrimitiveStyles {
  container?: React.CSSProperties;
  table?: React.CSSProperties;
}

type TablePrimitiveProps = Omit<
  React.ComponentProps<'table'>,
  'className' | 'style'
> & {
  classNames?: TablePrimitiveClassNames;
  containerRef?: React.Ref<HTMLDivElement>;
  styles?: TablePrimitiveStyles;
};

type TableHeadProps = Omit<React.ComponentProps<'th'>, 'align'> & {
  align?: TableCellAlign;
  ellipsis?: TableEllipsis;
  fixed?: TableCellFixed;
  fixedOffset?: number | string;
};

type TableCellProps = Omit<React.ComponentProps<'td'>, 'align'> & {
  align?: TableCellAlign;
  ellipsis?: TableEllipsis;
  fixed?: TableCellFixed;
  fixedOffset?: number | string;
};

type TableRowProps = React.ComponentProps<'tr'>;

type TableVirtualRowProps = TableRowProps & {
  'data-virtual-index'?: number;
};

type TableVirtualBodyProps<TItem> = Omit<
  React.ComponentProps<'tbody'>,
  'children'
> & {
  children: (
    item: TItem,
    index: number
  ) => React.ReactElement<TableVirtualRowProps>;
  colSpan: number;
  getItemKey?: (item: TItem, index: number) => React.Key;
  items: readonly TItem[];
  overscan?: number;
  rowHeight?: number;
  rowIndexOffset?: number;
};

type TableContextValue = {
  containerElement: HTMLDivElement | null;
};

const TableContext = React.createContext<TableContextValue>({
  containerElement: null,
});

const assignRef = <TValue,>(
  ref: React.Ref<TValue> | undefined,
  value: TValue | null
) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref != null) {
    (ref as React.MutableRefObject<TValue | null>).current = value;
  }
};

const getAlignmentClassName = (align?: TableCellAlign) => {
  if (align === 'center') return 'text-center';
  if (align === 'end') return 'text-end';
  return 'text-start';
};

const getFixedCellStyle = (
  fixed: TableCellFixed | undefined,
  fixedOffset: number | string,
  style: React.CSSProperties | undefined
) => {
  if (fixed == null) return style;

  return {
    ...style,
    [fixed === 'start' ? 'insetInlineStart' : 'insetInlineEnd']: fixedOffset,
  };
};

const TableEllipsisContent = ({
  children,
  tooltipContent,
}: {
  children: React.ReactNode;
  tooltipContent: React.ReactNode;
}) => {
  const contentRef = React.useRef<HTMLSpanElement>(null);
  const [overflowing, setOverflowing] = React.useState(false);

  React.useEffect(() => {
    const content = contentRef.current;
    if (content == null) return;

    const updateOverflowing = () => {
      setOverflowing(content.scrollWidth > content.clientWidth);
    };

    updateOverflowing();

    if (typeof ResizeObserver === 'undefined') return;
    const resizeObserver = new ResizeObserver(updateOverflowing);
    resizeObserver.observe(content);

    return () => resizeObserver.disconnect();
  }, [children]);

  return (
    <Tooltip
      content={tooltipContent}
      delay={300}
      disabled={!overflowing}
      trigger={
        <span
          ref={contentRef}
          data-slot="table-ellipsis-content"
          data-overflowing={overflowing || undefined}
          className="block truncate outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          tabIndex={overflowing ? 0 : undefined}
        >
          {children}
        </span>
      }
    />
  );
};

const TableRoot = ({
  classNames,
  containerRef,
  styles,
  ...props
}: TablePrimitiveProps) => {
  const [containerElement, setContainerElement] =
    React.useState<HTMLDivElement | null>(null);
  const handleContainerRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      setContainerElement(node);
      assignRef(containerRef, node);
    },
    [containerRef]
  );
  const contextValue = React.useMemo(
    () => ({ containerElement }),
    [containerElement]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <div
        ref={handleContainerRef}
        data-slot="table-container"
        className={cn('relative w-full overflow-auto', classNames?.container)}
        style={styles?.container}
      >
        <table
          data-slot="table"
          className={cn('w-full text-sm', classNames?.table)}
          style={styles?.table}
          {...props}
        />
      </div>
    </TableContext.Provider>
  );
};

const TableHeader = ({
  className,
  ...props
}: React.ComponentProps<'thead'>) => {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        'sticky top-0 z-20 bg-background [&_tr]:border-b',
        className
      )}
      {...props}
    />
  );
};

const TableBody = ({ className, ...props }: React.ComponentProps<'tbody'>) => {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
};

const TableVirtualBody = <TItem,>({
  children,
  className,
  colSpan,
  getItemKey,
  items,
  overscan = 8,
  rowHeight = 48,
  rowIndexOffset = 2,
  style,
  ...props
}: TableVirtualBodyProps<TItem>) => {
  const { containerElement } = React.useContext(TableContext);
  const resolvedRowHeight = Math.max(1, rowHeight);
  const estimateSize = React.useCallback(
    () => resolvedRowHeight,
    [resolvedRowHeight]
  );
  const resolveItemKey = React.useCallback(
    (index: number) => getItemKey?.(items[index] as TItem, index) ?? index,
    [getItemKey, items]
  );
  const virtualizer = useVirtualizer({
    count: items.length,
    estimateSize,
    getItemKey: resolveItemKey,
    getScrollElement: () => containerElement,
    overscan,
  });
  const virtualRows = virtualizer.getVirtualItems();
  const firstVirtualRow = virtualRows[0];
  const lastVirtualRow = virtualRows[virtualRows.length - 1];
  const paddingTop = firstVirtualRow?.start ?? 0;
  const paddingBottom = lastVirtualRow
    ? virtualizer.getTotalSize() - lastVirtualRow.end
    : 0;

  return (
    <tbody
      data-slot="table-virtual-body"
      className={className}
      style={style}
      {...props}
    >
      {paddingTop > 0 ? (
        <tr aria-hidden="true" data-slot="table-virtual-spacer">
          <td
            colSpan={colSpan}
            style={{ height: paddingTop, padding: 0, border: 0 }}
          />
        </tr>
      ) : null}
      {virtualRows.map((virtualRow) => {
        const row = children(
          items[virtualRow.index] as TItem,
          virtualRow.index
        );

        return React.cloneElement(row, {
          'aria-rowindex': rowIndexOffset + virtualRow.index,
          'data-virtual-index': virtualRow.index,
          key: virtualRow.key,
          className: cn(
            row.props.className,
            virtualRow.index === items.length - 1 && 'border-b-0'
          ),
          style: {
            ...row.props.style,
            height: virtualRow.size,
          },
        });
      })}
      {paddingBottom > 0 ? (
        <tr aria-hidden="true" data-slot="table-virtual-spacer">
          <td
            colSpan={colSpan}
            style={{ height: paddingBottom, padding: 0, border: 0 }}
          />
        </tr>
      ) : null}
    </tbody>
  );
};

const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<'tfoot'>) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'border-t bg-muted/50 font-medium [&>tr]:bg-muted/50 [&>tr]:last:border-b-0',
        className
      )}
      {...props}
    />
  );
};

const TableRow = ({ className, ...props }: TableRowProps) => {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'border-b bg-background transition-colors [&>*]:transition-colors hover:bg-muted/50 hover:[&>*]:bg-muted/50 has-aria-expanded:bg-muted/50 has-aria-expanded:[&>*]:bg-muted/50 data-[state=selected]:bg-muted data-[state=selected]:[&>*]:bg-muted',
        className
      )}
      {...props}
    />
  );
};

const TableHead = ({
  align = 'start',
  children,
  className,
  ellipsis = false,
  fixed,
  fixedOffset = 0,
  style,
  title,
  ...props
}: TableHeadProps) => {
  const ellipsisEnabled = ellipsis != null && ellipsis !== false;

  return (
    <th
      data-slot="table-head"
      data-align={align}
      data-ellipsis={ellipsisEnabled || undefined}
      data-fixed={fixed}
      className={cn(
        'h-12 bg-inherit px-3 align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0',
        getAlignmentClassName(align),
        fixed === 'start' && 'sticky z-30 shadow-[1px_0_0_var(--border)]',
        fixed === 'end' && 'sticky z-30 shadow-[-1px_0_0_var(--border)]',
        className
      )}
      style={getFixedCellStyle(fixed, fixedOffset, style)}
      title={ellipsisEnabled ? undefined : title}
      {...props}
    >
      {ellipsisEnabled ? (
        <TableEllipsisContent
          tooltipContent={ellipsis === true ? (title ?? children) : ellipsis}
        >
          {children}
        </TableEllipsisContent>
      ) : (
        children
      )}
    </th>
  );
};

const TableCell = ({
  align = 'start',
  children,
  className,
  ellipsis = false,
  fixed,
  fixedOffset = 0,
  style,
  title,
  ...props
}: TableCellProps) => {
  const ellipsisEnabled = ellipsis != null && ellipsis !== false;

  return (
    <td
      data-slot="table-cell"
      data-align={align}
      data-ellipsis={ellipsisEnabled || undefined}
      data-fixed={fixed}
      className={cn(
        'bg-inherit p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        getAlignmentClassName(align),
        fixed === 'start' && 'sticky z-10 shadow-[1px_0_0_var(--border)]',
        fixed === 'end' && 'sticky z-10 shadow-[-1px_0_0_var(--border)]',
        className
      )}
      style={getFixedCellStyle(fixed, fixedOffset, style)}
      title={ellipsisEnabled ? undefined : title}
      {...props}
    >
      {ellipsisEnabled ? (
        <TableEllipsisContent
          tooltipContent={ellipsis === true ? (title ?? children) : ellipsis}
        >
          {children}
        </TableEllipsisContent>
      ) : (
        children
      )}
    </td>
  );
};

const TablePrimitive = TableRoot;

export {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TablePrimitive,
  TableRow,
  TableVirtualBody,
  type TableCellAlign,
  type TableCellFixed,
  type TableCellProps,
  type TableEllipsis,
  type TableHeadProps,
  type TablePrimitiveClassNames,
  type TablePrimitiveProps,
  type TablePrimitiveSemanticSlot,
  type TablePrimitiveStyles,
  type TableVirtualBodyProps,
};
