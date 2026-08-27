'use client';

import * as React from 'react';
import {
  functionalUpdate,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef as TanStackColumnDef,
  type PaginationState,
  type Row,
  type SortingState,
  type Updater,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronRightIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { Input } from './input';
import { Pagination, type PaginationProps } from './pagination';
import { Spinner } from './spinner';
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TablePrimitive as PrimitiveTable,
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
} from './table-primitive';

type TableExpandButtonProps = Omit<
  React.ComponentProps<'button'>,
  'aria-expanded'
> & {
  expanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
};

type TableExpandedRowProps = Omit<React.ComponentProps<'tr'>, 'children'> & {
  children: React.ReactNode;
  colSpan: number;
};

const TableExpandButton = ({
  'aria-label': ariaLabel,
  children,
  className,
  expanded,
  onClick,
  onExpandedChange,
  ...props
}: TableExpandButtonProps) => (
  <button
    type="button"
    aria-expanded={expanded}
    aria-label={ariaLabel ?? (expanded ? '收起行' : '展开行')}
    data-slot="table-expand-button"
    data-state={expanded ? 'expanded' : 'collapsed'}
    className={cn(
      'inline-flex size-7 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30',
      className
    )}
    onClick={(event) => {
      onClick?.(event);
      if (!event.defaultPrevented) onExpandedChange?.(!expanded);
    }}
    {...props}
  >
    {children ?? (
      <ChevronRightIcon
        aria-hidden="true"
        className={cn(
          'size-4 transition-transform duration-200 motion-reduce:transition-none',
          expanded && 'rotate-90'
        )}
      />
    )}
  </button>
);

const TableExpandedRow = ({
  children,
  className,
  colSpan,
  ...props
}: TableExpandedRowProps) => (
  <tr
    data-slot="table-expanded-row"
    className={cn('border-b', className)}
    {...props}
  >
    <td
      colSpan={colSpan}
      data-slot="table-expanded-cell"
      className="bg-muted/35 p-4 whitespace-normal text-muted-foreground"
    >
      {children}
    </td>
  </tr>
);

type TableColumnAccessor<TData> =
  Extract<keyof TData, string> | ((row: TData) => unknown);

type TableRender<TData> = (
  value: unknown,
  row: TData,
  index: number
) => React.ReactNode;

interface TableColumnClassNames<TData> {
  cell?: string | ((row: TData, index: number) => string | undefined);
  header?: string;
}

interface TableColumnStyles<TData> {
  cell?:
    | React.CSSProperties
    | ((row: TData, index: number) => React.CSSProperties | undefined);
  header?: React.CSSProperties;
}

interface TableColumn<TData> {
  accessor?: TableColumnAccessor<TData>;
  align?: TableCellAlign;
  classNames?: TableColumnClassNames<TData>;
  columns?: TableColumn<TData>[];
  ellipsis?: TableEllipsis;
  fixed?: TableCellFixed;
  header: React.ReactNode;
  key?: string;
  render?: TableRender<TData>;
  sortable?: boolean | ((a: TData, b: TData) => number);
  styles?: TableColumnStyles<TData>;
  width?: number;
}

type TableSortOrder = 'ascending' | 'descending';

interface TableSortState {
  columnKey: string;
  order: TableSortOrder;
}

interface TableSortingProps {
  defaultValue?: TableSortState | null;
  mode?: 'client' | 'manual';
  onChange?: (value: TableSortState | null) => void;
  value?: TableSortState | null;
}

interface TableSearchProps<TData> {
  'aria-label'?: string;
  columnKeys?: string[];
  defaultValue?: string;
  mode?: 'client' | 'manual';
  onChange?: (value: string) => void;
  placeholder?: string;
  predicate?: (row: TData, query: string) => boolean;
  value?: string;
}

interface TableExpandLabels<TData> {
  collapse?: (row: TData, index: number) => string;
  expand?: (row: TData, index: number) => string;
}

interface TableExpandableProps<TData> {
  canExpand?: (row: TData, index: number) => boolean;
  className?: string;
  defaultValue?: React.Key[];
  header?: React.ReactNode;
  labels?: TableExpandLabels<TData>;
  onChange?: (keys: React.Key[]) => void;
  render: (row: TData, index: number) => React.ReactNode;
  style?: React.CSSProperties;
  value?: React.Key[];
}

interface TableSelectionLabels<TData> {
  all?: (rows: readonly TData[]) => string;
  item?: (row: TData, index: number) => string;
}

interface TableRowSelectionProps<TData> {
  className?: string;
  defaultValue?: React.Key[];
  disabled?: (row: TData, index: number) => boolean;
  header?: React.ReactNode;
  labels?: TableSelectionLabels<TData>;
  onChange?: (keys: React.Key[], rows: readonly TData[]) => void;
  style?: React.CSSProperties;
  value?: React.Key[];
}

interface TablePaginationBaseProps extends Pick<
  PaginationProps,
  'ariaLabels' | 'className' | 'next' | 'previous' | 'siblings'
> {
  current?: number;
  defaultCurrent?: number;
  onChange?: (page: number, pageSize: number) => void;
  pageSize?: number;
  summary?:
    | boolean
    | ((total: number, current: number, pageCount: number) => React.ReactNode);
}

type TablePaginationProps = TablePaginationBaseProps &
  ({ mode?: 'client'; total?: never } | { mode: 'manual'; total: number });

interface TableVirtualProps {
  containerHeight?: number | string;
  overscan?: number;
  rowHeight?: number;
}

type TableSemanticSlot =
  | 'toolbar'
  | 'container'
  | 'table'
  | 'header'
  | 'body'
  | 'footer'
  | 'state'
  | 'pagination';

interface TableClassNames {
  body?: string;
  container?: string;
  footer?: string;
  header?: string;
  pagination?: string;
  state?: string;
  table?: string;
  toolbar?: string;
}

interface TableStyles {
  body?: React.CSSProperties;
  container?: React.CSSProperties;
  footer?: React.CSSProperties;
  header?: React.CSSProperties;
  pagination?: React.CSSProperties;
  state?: React.CSSProperties;
  table?: React.CSSProperties;
  toolbar?: React.CSSProperties;
}

interface TableBaseProps<TData> extends Omit<
  React.ComponentProps<'div'>,
  'children'
> {
  classNames?: TableClassNames;
  columns: TableColumn<TData>[];
  data: readonly TData[];
  footer?:
    React.ReactNode | ((visibleRows: readonly TData[]) => React.ReactNode);
  loading?: boolean;
  pagination?: false | TablePaginationProps;
  rowKey?:
    Extract<keyof TData, string> | ((row: TData, index: number) => React.Key);
  rowProps?: (
    row: TData,
    index: number
  ) => Omit<React.ComponentProps<'tr'>, 'children'>;
  rowSelection?: TableRowSelectionProps<TData>;
  search?: false | TableSearchProps<TData>;
  showHeader?: boolean;
  sorting?: false | TableSortingProps;
  styles?: TableStyles;
}

type TableProps<TData> = TableBaseProps<TData> &
  (
    | {
        expandable?: TableExpandableProps<TData>;
        virtual?: false | undefined;
      }
    | {
        expandable?: never;
        virtual: true | TableVirtualProps;
      }
  );

type InternalColumnMeta<TData> = {
  column: TableColumn<TData>;
  fixedOffset?: number;
};

const SELECTION_COLUMN_WIDTH = 44;
const EXPANSION_COLUMN_WIDTH = 48;

const resolveColumnKey = <TData,>(
  column: TableColumn<TData>,
  path: number[]
) => {
  if (column.key) return column.key;
  if (typeof column.accessor === 'string') return column.accessor;

  return `column-${path.join('-')}`;
};

const readColumnValue = <TData,>(column: TableColumn<TData>, row: TData) => {
  if (typeof column.accessor === 'function') return column.accessor(row);
  if (typeof column.accessor === 'string') return row[column.accessor];
  return undefined;
};

const flattenColumns = <TData,>(columns: TableColumn<TData>[]) => {
  const flattened: Array<{ column: TableColumn<TData>; key: string }> = [];

  const visit = (items: TableColumn<TData>[], parentPath: number[] = []) => {
    items.forEach((column, index) => {
      const path = [...parentPath, index];
      if (column.columns?.length) {
        visit(column.columns, path);
      } else {
        flattened.push({ column, key: resolveColumnKey(column, path) });
      }
    });
  };

  visit(columns);
  return flattened;
};

const getFixedOffsets = <TData,>(
  columns: TableColumn<TData>[],
  leadingWidth: number,
  automaticColumnWidths: ReadonlyMap<string, number>
) => {
  const leaves = flattenColumns(columns);
  const offsets = new Map<string, number>();
  let startOffset = leadingWidth;

  for (const { column, key } of leaves) {
    if (column.fixed !== 'start') continue;
    offsets.set(key, startOffset);
    startOffset += column.width ?? automaticColumnWidths.get(key) ?? 160;
  }

  let endOffset = 0;
  for (const { column, key } of [...leaves].reverse()) {
    if (column.fixed !== 'end') continue;
    offsets.set(key, endOffset);
    endOffset += column.width ?? automaticColumnWidths.get(key) ?? 160;
  }

  return offsets;
};

const resolveColumns = <TData,>(
  columns: TableColumn<TData>[],
  fixedOffsets: Map<string, number>,
  parentPath: number[] = []
): TanStackColumnDef<TData>[] => {
  return columns.map((column, index) => {
    const path = [...parentPath, index];
    const key = resolveColumnKey(column, path);
    const sorter = column.sortable;
    const children = column.columns?.length
      ? resolveColumns(column.columns, fixedOffsets, path)
      : undefined;

    return {
      id: key,
      header: column.header,
      ...(children
        ? { columns: children }
        : {
            accessorFn: (row: TData) => readColumnValue(column, row),
            enableSorting: column.sortable !== false && column.sortable != null,
            sortingFn:
              typeof sorter === 'function'
                ? (rowA, rowB) => sorter(rowA.original, rowB.original)
                : 'auto',
          }),
      meta: {
        column,
        fixedOffset: fixedOffsets.get(key),
      } as InternalColumnMeta<TData>,
    } as TanStackColumnDef<TData>;
  });
};

const ManagedTable = <TData,>({
  'aria-describedby': ariaDescribedBy,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  className,
  classNames,
  columns,
  data,
  expandable,
  footer,
  loading = false,
  pagination,
  rowKey,
  rowProps,
  rowSelection,
  search,
  showHeader = true,
  sorting,
  style,
  styles,
  virtual,
  ...props
}: TableProps<TData>) => {
  const paginationOptions = React.useMemo(
    () => (pagination === false ? null : (pagination ?? {})),
    [pagination]
  );
  const searchOptions = React.useMemo(
    () => (search === false || search == null ? null : search),
    [search]
  );
  const sortingOptions = React.useMemo(
    () => (sorting === false ? null : (sorting ?? {})),
    [sorting]
  );
  const pageSize = Math.max(1, paginationOptions?.pageSize ?? 10);
  const [uncontrolledPage, setUncontrolledPage] = React.useState(
    paginationOptions?.defaultCurrent ?? 1
  );
  const currentPage = Math.max(
    1,
    paginationOptions?.current ?? uncontrolledPage
  );
  const [uncontrolledSearch, setUncontrolledSearch] = React.useState(
    searchOptions?.defaultValue ?? ''
  );
  const searchValue = searchOptions?.value ?? uncontrolledSearch;
  const [uncontrolledSort, setUncontrolledSort] =
    React.useState<TableSortState | null>(sortingOptions?.defaultValue ?? null);
  const sortValue =
    sortingOptions?.value !== undefined
      ? sortingOptions.value
      : uncontrolledSort;
  const [uncontrolledExpandedKeys, setUncontrolledExpandedKeys] =
    React.useState<React.Key[]>(expandable?.defaultValue ?? []);
  const expandedKeys = expandable?.value ?? uncontrolledExpandedKeys;
  const [uncontrolledSelectedKeys, setUncontrolledSelectedKeys] =
    React.useState<React.Key[]>(rowSelection?.defaultValue ?? []);
  const selectedKeys = rowSelection?.value ?? uncontrolledSelectedKeys;

  const [automaticColumnWidths, setAutomaticColumnWidths] = React.useState<
    ReadonlyMap<string, number>
  >(() => new Map());
  const [tableContainer, setTableContainer] =
    React.useState<HTMLDivElement | null>(null);

  const resolveRecordKey = React.useCallback(
    (row: TData, index: number): React.Key => {
      if (typeof rowKey === 'function') return rowKey(row, index);
      if (typeof rowKey === 'string') return row[rowKey] as React.Key;
      if (typeof row === 'object' && row != null && 'key' in row) {
        return (row as { key: React.Key }).key;
      }
      return index;
    },
    [rowKey]
  );

  const leafColumns = React.useMemo(() => flattenColumns(columns), [columns]);
  const automaticallySizedColumnKeys = React.useMemo(
    () =>
      new Set(
        leafColumns
          .filter(({ column }) => column.width == null)
          .map(({ key }) => key)
      ),
    [leafColumns]
  );
  const filteredData = React.useMemo(() => {
    const query = searchValue.trim().toLocaleLowerCase();
    if (
      searchOptions == null ||
      searchOptions.mode === 'manual' ||
      query.length === 0
    ) {
      return [...data];
    }
    if (searchOptions.predicate) {
      return data.filter((row) => searchOptions.predicate!(row, searchValue));
    }

    const searchableKeys = searchOptions.columnKeys
      ? new Set(searchOptions.columnKeys)
      : null;
    return data.filter((row) =>
      leafColumns.some(({ column, key }) => {
        if (searchableKeys && !searchableKeys.has(key)) return false;
        const value = readColumnValue(column, row);
        return String(value ?? '')
          .toLocaleLowerCase()
          .includes(query);
      })
    );
  }, [data, leafColumns, searchOptions, searchValue]);

  const leadingWidth =
    (rowSelection ? SELECTION_COLUMN_WIDTH : 0) +
    (expandable ? EXPANSION_COLUMN_WIDTH : 0);
  const fixedOffsets = React.useMemo(
    () => getFixedOffsets(columns, leadingWidth, automaticColumnWidths),
    [automaticColumnWidths, columns, leadingWidth]
  );
  const resolvedColumns = React.useMemo(
    () => resolveColumns(columns, fixedOffsets),
    [columns, fixedOffsets]
  );
  const sortingState = React.useMemo<SortingState>(
    () =>
      sortValue
        ? [
            {
              id: sortValue.columnKey,
              desc: sortValue.order === 'descending',
            },
          ]
        : [],
    [sortValue]
  );
  const paginationState = React.useMemo<PaginationState>(
    () => ({ pageIndex: currentPage - 1, pageSize }),
    [currentPage, pageSize]
  );
  const handleSortingChange = React.useCallback(
    (updater: Updater<SortingState>) => {
      const nextSorting = functionalUpdate(updater, sortingState);
      const first = nextSorting[0];
      const nextValue = first
        ? {
            columnKey: first.id,
            order: first.desc
              ? ('descending' as const)
              : ('ascending' as const),
          }
        : null;
      if (sortingOptions?.value === undefined) setUncontrolledSort(nextValue);
      sortingOptions?.onChange?.(nextValue);
    },
    [sortingOptions, sortingState]
  );
  const handlePaginationChange = React.useCallback(
    (updater: Updater<PaginationState>) => {
      const nextState = functionalUpdate(updater, paginationState);
      const nextPage = nextState.pageIndex + 1;
      if (paginationOptions?.current == null) setUncontrolledPage(nextPage);
      paginationOptions?.onChange?.(nextPage, nextState.pageSize);
    },
    [paginationOptions, paginationState]
  );

  const totalRows =
    paginationOptions?.mode === 'manual'
      ? paginationOptions.total
      : filteredData.length;
  const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));
  const table = useReactTable({
    data: filteredData,
    columns: resolvedColumns,
    state: {
      ...(sortingOptions ? { sorting: sortingState } : undefined),
      ...(paginationOptions ? { pagination: paginationState } : undefined),
    },
    getRowId: (row, index) => String(resolveRecordKey(row, index)),
    onSortingChange: handleSortingChange,
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: sortingOptions != null,
    ...(sortingOptions?.mode === 'manual'
      ? { manualSorting: true }
      : sortingOptions
        ? { getSortedRowModel: getSortedRowModel() }
        : undefined),
    ...(paginationOptions?.mode === 'manual'
      ? { manualPagination: true, pageCount }
      : paginationOptions
        ? { getPaginationRowModel: getPaginationRowModel() }
        : undefined),
    autoResetPageIndex: false,
  });

  const virtualOptions =
    virtual === true ? {} : virtual === false ? null : (virtual ?? null);
  const visibleRows = table.getRowModel().rows;
  const visibleColumnCount =
    table.getVisibleLeafColumns().length +
    (rowSelection ? 1 : 0) +
    (expandable ? 1 : 0);
  const expandedKeySet = React.useMemo(
    () => new Set(expandedKeys),
    [expandedKeys]
  );
  const selectedKeySet = React.useMemo(
    () => new Set(selectedKeys),
    [selectedKeys]
  );
  const resolveRowKey = React.useCallback(
    (row: Row<TData>) => resolveRecordKey(row.original, row.index),
    [resolveRecordKey]
  );
  const selectableRows = React.useMemo(
    () =>
      visibleRows.filter(
        (row) => !rowSelection?.disabled?.(row.original, row.index)
      ),
    [rowSelection, visibleRows]
  );
  const visibleSelectedCount = selectableRows.filter((row) =>
    selectedKeySet.has(resolveRowKey(row))
  ).length;

  const emitSelection = React.useCallback(
    (keys: React.Key[]) => {
      if (rowSelection?.value == null) {
        setUncontrolledSelectedKeys(keys);
      }
      const keySet = new Set(keys);
      rowSelection?.onChange?.(
        keys,
        data.filter((row, index) => keySet.has(resolveRecordKey(row, index)))
      );
    },
    [data, resolveRecordKey, rowSelection]
  );
  const setRowSelected = React.useCallback(
    (row: Row<TData>, selected: boolean) => {
      const key = resolveRowKey(row);
      emitSelection(
        selected
          ? Array.from(new Set([...selectedKeys, key]))
          : selectedKeys.filter((selectedKey) => selectedKey !== key)
      );
    },
    [emitSelection, resolveRowKey, selectedKeys]
  );
  const setVisibleRowsSelected = React.useCallback(
    (selected: boolean) => {
      const visibleKeys = selectableRows.map(resolveRowKey);
      const visibleKeySet = new Set(visibleKeys);
      emitSelection(
        selected
          ? Array.from(new Set([...selectedKeys, ...visibleKeys]))
          : selectedKeys.filter((key) => !visibleKeySet.has(key))
      );
    },
    [emitSelection, resolveRowKey, selectableRows, selectedKeys]
  );
  const setRowExpanded = React.useCallback(
    (row: Row<TData>, expanded: boolean) => {
      if (!expandable) return;
      const key = resolveRowKey(row);
      const nextKeys = expanded
        ? Array.from(new Set([...expandedKeys, key]))
        : expandedKeys.filter((expandedKey) => expandedKey !== key);
      if (expandable.value == null) {
        setUncontrolledExpandedKeys(nextKeys);
      }
      expandable.onChange?.(nextKeys);
    },
    [expandable, expandedKeys, resolveRowKey]
  );

  const renderCells = (row: Row<TData>) =>
    row.getVisibleCells().map((cell) => {
      const meta = cell.column.columnDef.meta as InternalColumnMeta<TData>;
      const column = meta.column;
      const value = cell.getValue();
      const rendered = column.render
        ? column.render(value, row.original, row.index)
        : (value as React.ReactNode);
      const resolvedCellClassName =
        typeof column.classNames?.cell === 'function'
          ? column.classNames.cell(row.original, row.index)
          : column.classNames?.cell;
      const resolvedCellStyle =
        typeof column.styles?.cell === 'function'
          ? column.styles.cell(row.original, row.index)
          : column.styles?.cell;
      const width = column.width ?? automaticColumnWidths.get(cell.column.id);

      return (
        <TableCell
          key={cell.id}
          align={column.align}
          data-column-id={cell.column.id}
          ellipsis={column.ellipsis}
          fixed={column.fixed}
          fixedOffset={meta.fixedOffset}
          className={resolvedCellClassName}
          style={{
            ...resolvedCellStyle,
            ...(width != null ? { width } : undefined),
          }}
        >
          {rendered}
        </TableCell>
      );
    });

  const renderRow = (row: Row<TData>) => {
    const key = resolveRowKey(row);
    const disabled = rowSelection?.disabled?.(row.original, row.index);
    const resolvedRowProps = rowProps?.(row.original, row.index);

    return (
      <TableRow
        {...resolvedRowProps}
        key={String(key)}
        data-state={selectedKeySet.has(key) ? 'selected' : undefined}
      >
        {rowSelection ? (
          <TableCell
            key="selection"
            fixed="start"
            fixedOffset={0}
            className={cn('w-11', rowSelection.className)}
            style={rowSelection.style}
          >
            <Checkbox
              aria-label={
                rowSelection.labels?.item?.(row.original, row.index) ??
                `选择 ${String(key)}`
              }
              checked={selectedKeySet.has(key)}
              disabled={disabled}
              onChange={(checked) => setRowSelected(row, checked)}
            />
          </TableCell>
        ) : null}
        {expandable ? (
          <TableCell
            key="expansion"
            fixed="start"
            fixedOffset={rowSelection ? SELECTION_COLUMN_WIDTH : 0}
            className={cn('w-12', expandable.className)}
            style={expandable.style}
          >
            {expandable.canExpand?.(row.original, row.index) !== false ? (
              <TableExpandButton
                aria-label={
                  expandedKeySet.has(key)
                    ? (expandable.labels?.collapse?.(row.original, row.index) ??
                      `收起 ${String(key)}`)
                    : (expandable.labels?.expand?.(row.original, row.index) ??
                      `展开 ${String(key)}`)
                }
                expanded={expandedKeySet.has(key)}
                onExpandedChange={(expanded) => setRowExpanded(row, expanded)}
              />
            ) : null}
          </TableCell>
        ) : null}
        {renderCells(row)}
      </TableRow>
    );
  };

  const stateContent =
    loading === true ? (
      <span className="inline-flex items-center justify-center gap-2">
        <Spinner aria-label="加载中" size="sm" />
        <span>加载中…</span>
      </span>
    ) : visibleRows.length === 0 ? (
      '暂无数据'
    ) : null;
  React.useLayoutEffect(() => {
    if (tableContainer == null || automaticallySizedColumnKeys.size === 0) {
      return;
    }

    const measuredWidths = new Map<string, number>();
    tableContainer
      .querySelectorAll<HTMLElement>('[data-column-id]')
      .forEach((element) => {
        const key = element.dataset.columnId;
        if (!key || !automaticallySizedColumnKeys.has(key)) return;

        const width = Math.ceil(element.getBoundingClientRect().width);
        if (width <= 0) return;
        measuredWidths.set(key, Math.max(measuredWidths.get(key) ?? 0, width));
      });

    if (measuredWidths.size === 0) return;
    setAutomaticColumnWidths((currentWidths) => {
      let changed = false;
      const nextWidths = new Map(currentWidths);
      measuredWidths.forEach((width, key) => {
        if (width > (currentWidths.get(key) ?? 0)) {
          nextWidths.set(key, width);
          changed = true;
        }
      });
      return changed ? nextWidths : currentWidths;
    });
  }, [automaticallySizedColumnKeys, tableContainer, visibleRows]);

  React.useEffect(() => {
    if (tableContainer == null || typeof ResizeObserver === 'undefined') return;

    let previousWidth = Math.round(tableContainer.clientWidth);
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const nextWidth = Math.round(entry.contentRect.width);
      if (Math.abs(nextWidth - previousWidth) <= 1) return;
      previousWidth = nextWidth;
      setAutomaticColumnWidths(new Map());
    });
    resizeObserver.observe(tableContainer);
    return () => resizeObserver.disconnect();
  }, [tableContainer]);

  return (
    <div
      data-slot="table-root"
      className={cn('grid gap-3', className)}
      style={style}
      {...props}
    >
      {searchOptions ? (
        <div
          data-slot="table-toolbar"
          className={classNames?.toolbar}
          style={styles?.toolbar}
        >
          <Input
            aria-label={
              searchOptions['aria-label'] ??
              searchOptions.placeholder ??
              '搜索表格'
            }
            placeholder={searchOptions.placeholder ?? '搜索…'}
            value={searchValue}
            onChange={(event) => {
              const nextValue = event.target.value;
              if (searchOptions.value === undefined) {
                setUncontrolledSearch(nextValue);
              }
              if (paginationOptions?.current == null) setUncontrolledPage(1);
              searchOptions.onChange?.(nextValue);
            }}
            className="max-w-sm"
          />
        </div>
      ) : null}
      <PrimitiveTable
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-busy={loading || undefined}
        aria-rowcount={
          virtualOptions ? totalRows + (showHeader ? 1 : 0) : undefined
        }
        className={cn('rounded-xl border border-border', classNames?.container)}
        classNames={{ table: classNames?.table }}
        containerRef={setTableContainer}
        style={{
          ...styles?.container,
          ...(virtualOptions
            ? { maxHeight: virtualOptions.containerHeight ?? 360 }
            : undefined),
        }}
        styles={{ table: styles?.table }}
      >
        {showHeader ? (
          <TableHeader className={classNames?.header} style={styles?.header}>
            {table.getHeaderGroups().map((group, groupIndex, groups) => (
              <TableRow key={group.id}>
                {rowSelection && groupIndex === 0 ? (
                  <TableHead
                    key="selection"
                    fixed="start"
                    fixedOffset={0}
                    className={cn('w-11', rowSelection.className)}
                    rowSpan={groups.length}
                    style={rowSelection.style}
                  >
                    {rowSelection.header ?? (
                      <Checkbox
                        aria-label={
                          rowSelection.labels?.all?.(
                            selectableRows.map((row) => row.original)
                          ) ?? '选择当前页全部行'
                        }
                        checked={
                          selectableRows.length > 0 &&
                          visibleSelectedCount === selectableRows.length
                        }
                        indeterminate={
                          visibleSelectedCount > 0 &&
                          visibleSelectedCount < selectableRows.length
                        }
                        onChange={setVisibleRowsSelected}
                      />
                    )}
                  </TableHead>
                ) : null}
                {expandable && groupIndex === 0 ? (
                  <TableHead
                    key="expansion"
                    fixed="start"
                    fixedOffset={rowSelection ? SELECTION_COLUMN_WIDTH : 0}
                    className={cn('w-12', expandable.className)}
                    rowSpan={groups.length}
                    style={expandable.style}
                  >
                    {expandable.header ?? (
                      <span className="sr-only">展开行</span>
                    )}
                  </TableHead>
                ) : null}
                {group.headers.map((header) => {
                  const meta = header.column.columnDef
                    .meta as InternalColumnMeta<TData>;
                  const column = meta.column;
                  const sortDirection = header.column.getIsSorted();
                  const isGroup = header.subHeaders.length > 0;
                  const headerContent = header.isPlaceholder
                    ? null
                    : column.header;
                  const width =
                    column.width ?? automaticColumnWidths.get(header.column.id);

                  return (
                    <TableHead
                      key={header.id}
                      align={column.align}
                      colSpan={header.colSpan}
                      ellipsis={column.ellipsis}
                      fixed={isGroup ? undefined : column.fixed}
                      fixedOffset={isGroup ? undefined : meta.fixedOffset}
                      rowSpan={header.rowSpan > 1 ? header.rowSpan : undefined}
                      scope={isGroup ? 'colgroup' : 'col'}
                      aria-sort={
                        sortDirection
                          ? sortDirection === 'asc'
                            ? 'ascending'
                            : 'descending'
                          : header.column.getCanSort()
                            ? 'none'
                            : undefined
                      }
                      data-column-id={header.column.id}
                      data-header-group={isGroup ? '' : undefined}
                      className={cn(
                        isGroup && 'bg-muted/40 font-semibold',
                        column.classNames?.header
                      )}
                      style={{
                        ...column.styles?.header,
                        ...(width != null ? { width } : undefined),
                      }}
                    >
                      {header.column.getCanSort() ? (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="-ml-3"
                          data-sort={sortDirection || undefined}
                          onClick={() =>
                            header.column.toggleSorting(sortDirection === 'asc')
                          }
                        >
                          {headerContent}
                          <ArrowUpDown aria-hidden="true" />
                        </Button>
                      ) : (
                        headerContent
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
        ) : null}
        {stateContent != null ? (
          <TableBody className={classNames?.body} style={styles?.body}>
            <TableRow>
              <TableCell
                colSpan={Math.max(1, visibleColumnCount)}
                data-slot="table-state"
                className={cn(
                  'h-24 text-center text-muted-foreground',
                  classNames?.state
                )}
                style={styles?.state}
              >
                {stateContent}
              </TableCell>
            </TableRow>
          </TableBody>
        ) : virtualOptions ? (
          <TableVirtualBody
            className={classNames?.body}
            colSpan={visibleColumnCount}
            items={visibleRows}
            getItemKey={resolveRowKey}
            overscan={virtualOptions.overscan}
            rowHeight={virtualOptions.rowHeight}
            rowIndexOffset={showHeader ? 2 : 1}
            style={styles?.body}
          >
            {(row) => renderRow(row)}
          </TableVirtualBody>
        ) : (
          <TableBody className={classNames?.body} style={styles?.body}>
            {visibleRows.map((row) => (
              <React.Fragment key={String(resolveRowKey(row))}>
                {renderRow(row)}
                {expandable &&
                expandedKeySet.has(resolveRowKey(row)) &&
                expandable.canExpand?.(row.original, row.index) !== false ? (
                  <TableExpandedRow colSpan={visibleColumnCount}>
                    {expandable.render(row.original, row.index)}
                  </TableExpandedRow>
                ) : null}
              </React.Fragment>
            ))}
          </TableBody>
        )}
        {footer != null ? (
          <TableFooter className={classNames?.footer} style={styles?.footer}>
            <TableRow>
              <TableCell colSpan={visibleColumnCount}>
                {typeof footer === 'function'
                  ? footer(visibleRows.map((row) => row.original))
                  : footer}
              </TableCell>
            </TableRow>
          </TableFooter>
        ) : null}
      </PrimitiveTable>
      {paginationOptions && pageCount > 1 && stateContent == null ? (
        <div
          data-slot="table-pagination"
          className={cn(
            'flex flex-wrap items-center justify-between gap-3',
            classNames?.pagination
          )}
          style={styles?.pagination}
        >
          {paginationOptions.summary !== false ? (
            <span className="text-sm text-muted-foreground">
              {typeof paginationOptions.summary === 'function' ? (
                paginationOptions.summary(totalRows, currentPage, pageCount)
              ) : (
                <>
                  共 {totalRows} 项 · 第 {currentPage} / {pageCount} 页
                </>
              )}
            </span>
          ) : null}
          <Pagination
            className={cn('mx-0 w-auto', paginationOptions.className)}
            ariaLabels={paginationOptions.ariaLabels}
            current={Math.min(currentPage, pageCount)}
            next={paginationOptions.next}
            onChange={(page) => table.setPageIndex(page - 1)}
            pageCount={pageCount}
            previous={paginationOptions.previous}
            siblings={paginationOptions.siblings}
          />
        </div>
      ) : null}
    </div>
  );
};

// Function declaration is required for the Table value/type namespace merge.
// eslint-disable-next-line func-style
function Table<TData>(props: TableProps<TData>) {
  return <ManagedTable {...props} />;
}

// Namespace merging exposes types as Table.Column and Table.Props.
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Table {
  export const Body = TableBody;
  export const Cell = TableCell;
  export const Footer = TableFooter;
  export const Head = TableHead;
  export const Header = TableHeader;
  export const Primitive = PrimitiveTable;
  export const Row = TableRow;

  export type CellAlign = TableCellAlign;
  export type CellFixed = TableCellFixed;
  export type CellProps = TableCellProps;
  export type ClassNames = TableClassNames;
  export type Column<TData> = TableColumn<TData>;
  export type ColumnAccessor<TData> = TableColumnAccessor<TData>;
  export type ColumnClassNames<TData> = TableColumnClassNames<TData>;
  export type ColumnStyles<TData> = TableColumnStyles<TData>;
  export type Ellipsis = TableEllipsis;
  export type ExpandLabels<TData> = TableExpandLabels<TData>;
  export type ExpandableProps<TData> = TableExpandableProps<TData>;
  export type HeadProps = TableHeadProps;
  export type PaginationProps = TablePaginationProps;
  export type PrimitiveClassNames = TablePrimitiveClassNames;
  export type PrimitiveProps = TablePrimitiveProps;
  export type PrimitiveSemanticSlot = TablePrimitiveSemanticSlot;
  export type PrimitiveStyles = TablePrimitiveStyles;
  export type Props<TData> = TableProps<TData>;
  export type Render<TData> = TableRender<TData>;
  export type RowSelectionProps<TData> = TableRowSelectionProps<TData>;
  export type SelectionLabels<TData> = TableSelectionLabels<TData>;
  export type SearchProps<TData> = TableSearchProps<TData>;
  export type SemanticSlot = TableSemanticSlot;
  export type SortingProps = TableSortingProps;
  export type SortOrder = TableSortOrder;
  export type SortState = TableSortState;
  export type Styles = TableStyles;
  export type VirtualBodyProps<TItem> = TableVirtualBodyProps<TItem>;
  export type VirtualProps = TableVirtualProps;
}

export { Table };
