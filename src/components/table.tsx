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
import { ArrowUpDown } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { Input } from './input';
import { Pagination, type PaginationProps } from './pagination';
import {
  TablePrimitive as PrimitiveTable,
  type TableCellAlign,
  type TableCellFixed,
  type TablePrimitiveProps,
  type TableRowProps,
} from './table-primitive';

export type TableColumnAccessor<TData> =
  Extract<keyof TData, string> | ((row: TData) => unknown);

export type TableRender<TData> = (
  value: unknown,
  row: TData,
  index: number
) => React.ReactNode;

export interface TableColumn<TData> {
  accessor?: TableColumnAccessor<TData>;
  align?: TableCellAlign;
  cellClassName?: string | ((row: TData, index: number) => string | undefined);
  columns?: TableColumn<TData>[];
  ellipsis?: boolean;
  ellipsisTooltip?:
    | React.ReactNode
    | ((value: unknown, row: TData, index: number) => React.ReactNode);
  fixed?: TableCellFixed;
  header: React.ReactNode;
  headerClassName?: string;
  headerEllipsis?: boolean;
  headerEllipsisTooltip?: React.ReactNode;
  key?: string;
  render?: TableRender<TData>;
  sortable?: boolean | ((a: TData, b: TData) => number);
  width?: number;
}

export type TableSortOrder = 'ascending' | 'descending';

export interface TableSortState {
  columnKey: string;
  order: TableSortOrder;
}

export interface TableSortingProps {
  defaultValue?: TableSortState | null;
  mode?: 'client' | 'manual';
  onChange?: (value: TableSortState | null) => void;
  value?: TableSortState | null;
}

export interface TableSearchProps<TData> {
  'aria-label'?: string;
  columnKeys?: string[];
  defaultValue?: string;
  mode?: 'client' | 'manual';
  onChange?: (value: string) => void;
  placeholder?: string;
  predicate?: (row: TData, query: string) => boolean;
  value?: string;
}

export interface TableExpandableProps<TData> {
  columnClassName?: string;
  columnHeader?: React.ReactNode;
  defaultExpandedRowKeys?: React.Key[];
  expandedRowKeys?: React.Key[];
  getCollapseLabel?: (row: TData, index: number) => string;
  getExpandLabel?: (row: TData, index: number) => string;
  onExpandedRowKeysChange?: (keys: React.Key[]) => void;
  render: (row: TData, index: number) => React.ReactNode;
  rowExpandable?: (row: TData, index: number) => boolean;
}

export interface TableRowSelectionProps<TData> {
  columnClassName?: string;
  columnHeader?: React.ReactNode;
  defaultSelectedRowKeys?: React.Key[];
  getSelectAllLabel?: (rows: readonly TData[]) => string;
  getSelectLabel?: (row: TData, index: number) => string;
  isRowDisabled?: (row: TData, index: number) => boolean;
  onChange?: (keys: React.Key[], rows: readonly TData[]) => void;
  selectedRowKeys?: React.Key[];
}

interface TablePaginationBaseProps extends Pick<
  PaginationProps,
  'ariaLabels' | 'className' | 'nextText' | 'previousText' | 'siblingCount'
> {
  containerClassName?: string;
  current?: number;
  defaultCurrent?: number;
  onChange?: (page: number, pageSize: number) => void;
  pageSize?: number;
  renderSummary?: (
    total: number,
    current: number,
    pageCount: number
  ) => React.ReactNode;
  showSummary?: boolean;
}

export type TablePaginationProps = TablePaginationBaseProps &
  ({ mode?: 'client'; total?: never } | { mode: 'manual'; total: number });

export interface TableVirtualProps {
  containerHeight?: number | string;
  overscan?: number;
  rowHeight?: number;
}

export type TableSemanticSlot =
  | 'root'
  | 'toolbar'
  | 'container'
  | 'table'
  | 'caption'
  | 'header'
  | 'body'
  | 'footer'
  | 'state'
  | 'pagination';

export type TableClassNames = Partial<Record<TableSemanticSlot, string>>;

interface TableBaseProps<TData> extends Omit<
  React.ComponentProps<'div'>,
  'children'
> {
  caption?: React.ReactNode;
  classNames?: TableClassNames;
  columns: TableColumn<TData>[];
  data: readonly TData[];
  empty?: React.ReactNode;
  error?: React.ReactNode;
  footer?:
    React.ReactNode | ((visibleRows: readonly TData[]) => React.ReactNode);
  loading?: boolean | React.ReactNode;
  pagination?: false | TablePaginationProps;
  rowKey?:
    Extract<keyof TData, string> | ((row: TData, index: number) => React.Key);
  rowProps?: (row: TData, index: number) => Omit<TableRowProps, 'children'>;
  rowSelection?: TableRowSelectionProps<TData>;
  search?: false | TableSearchProps<TData>;
  showHeader?: boolean;
  sorting?: false | TableSortingProps;
  tableProps?: Omit<TablePrimitiveProps, 'children' | 'containerClassName'>;
}

export type TableProps<TData> = TableBaseProps<TData> &
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

export interface TableActionsProps extends React.ComponentProps<'div'> {
  'aria-label': string;
  align?: TableCellAlign;
}

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
  leadingWidth: number
) => {
  const leaves = flattenColumns(columns);
  const offsets = new Map<string, number>();
  let startOffset = leadingWidth;

  for (const { column, key } of leaves) {
    if (column.fixed !== 'start') continue;
    offsets.set(key, startOffset);
    startOffset += column.width ?? 160;
  }

  let endOffset = 0;
  for (const { column, key } of [...leaves].reverse()) {
    if (column.fixed !== 'end') continue;
    offsets.set(key, endOffset);
    endOffset += column.width ?? 160;
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

const TableActions = ({
  align = 'center',
  className,
  ...props
}: TableActionsProps) => {
  return (
    <div
      data-slot="table-actions"
      data-align={align}
      role="group"
      className={cn(
        'flex items-center gap-1',
        align === 'start' && 'justify-start',
        align === 'center' && 'justify-center',
        align === 'end' && 'justify-end',
        className
      )}
      {...props}
    />
  );
};

const ManagedTable = <TData,>({
  caption,
  className,
  classNames,
  columns,
  data,
  empty = '暂无数据',
  error,
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
  tableProps,
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
  const [uncontrolledExpandedRowKeys, setUncontrolledExpandedRowKeys] =
    React.useState<React.Key[]>(expandable?.defaultExpandedRowKeys ?? []);
  const expandedRowKeys =
    expandable?.expandedRowKeys ?? uncontrolledExpandedRowKeys;
  const [uncontrolledSelectedRowKeys, setUncontrolledSelectedRowKeys] =
    React.useState<React.Key[]>(rowSelection?.defaultSelectedRowKeys ?? []);
  const selectedRowKeys =
    rowSelection?.selectedRowKeys ?? uncontrolledSelectedRowKeys;

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
    () => getFixedOffsets(columns, leadingWidth),
    [columns, leadingWidth]
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
  const expandedRowKeySet = React.useMemo(
    () => new Set(expandedRowKeys),
    [expandedRowKeys]
  );
  const selectedRowKeySet = React.useMemo(
    () => new Set(selectedRowKeys),
    [selectedRowKeys]
  );
  const resolveRowKey = React.useCallback(
    (row: Row<TData>) => resolveRecordKey(row.original, row.index),
    [resolveRecordKey]
  );
  const selectableRows = React.useMemo(
    () =>
      visibleRows.filter(
        (row) => !rowSelection?.isRowDisabled?.(row.original, row.index)
      ),
    [rowSelection, visibleRows]
  );
  const visibleSelectedCount = selectableRows.filter((row) =>
    selectedRowKeySet.has(resolveRowKey(row))
  ).length;

  const emitSelection = React.useCallback(
    (keys: React.Key[]) => {
      if (rowSelection?.selectedRowKeys == null) {
        setUncontrolledSelectedRowKeys(keys);
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
          ? Array.from(new Set([...selectedRowKeys, key]))
          : selectedRowKeys.filter((selectedKey) => selectedKey !== key)
      );
    },
    [emitSelection, resolveRowKey, selectedRowKeys]
  );
  const setVisibleRowsSelected = React.useCallback(
    (selected: boolean) => {
      const visibleKeys = selectableRows.map(resolveRowKey);
      const visibleKeySet = new Set(visibleKeys);
      emitSelection(
        selected
          ? Array.from(new Set([...selectedRowKeys, ...visibleKeys]))
          : selectedRowKeys.filter((key) => !visibleKeySet.has(key))
      );
    },
    [emitSelection, resolveRowKey, selectableRows, selectedRowKeys]
  );
  const setRowExpanded = React.useCallback(
    (row: Row<TData>, expanded: boolean) => {
      if (!expandable) return;
      const key = resolveRowKey(row);
      const nextKeys = expanded
        ? Array.from(new Set([...expandedRowKeys, key]))
        : expandedRowKeys.filter((expandedKey) => expandedKey !== key);
      if (expandable.expandedRowKeys == null) {
        setUncontrolledExpandedRowKeys(nextKeys);
      }
      expandable.onExpandedRowKeysChange?.(nextKeys);
    },
    [expandable, expandedRowKeys, resolveRowKey]
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
        typeof column.cellClassName === 'function'
          ? column.cellClassName(row.original, row.index)
          : column.cellClassName;
      const tooltip =
        typeof column.ellipsisTooltip === 'function'
          ? column.ellipsisTooltip(value, row.original, row.index)
          : column.ellipsisTooltip;

      return (
        <PrimitiveTable.Cell
          key={cell.id}
          align={column.align}
          data-column-id={cell.column.id}
          ellipsis={column.ellipsis}
          ellipsisTooltip={tooltip}
          fixed={column.fixed}
          fixedOffset={meta.fixedOffset}
          className={resolvedCellClassName}
          style={column.width ? { width: column.width } : undefined}
        >
          {rendered}
        </PrimitiveTable.Cell>
      );
    });

  const renderRow = (row: Row<TData>) => {
    const key = resolveRowKey(row);
    const disabled = rowSelection?.isRowDisabled?.(row.original, row.index);
    const resolvedRowProps = rowProps?.(row.original, row.index);

    return (
      <PrimitiveTable.Row
        {...resolvedRowProps}
        key={String(key)}
        data-state={selectedRowKeySet.has(key) ? 'selected' : undefined}
      >
        {rowSelection ? (
          <PrimitiveTable.Cell
            fixed="start"
            fixedOffset={0}
            className={cn('w-11', rowSelection.columnClassName)}
          >
            <Checkbox
              aria-label={
                rowSelection.getSelectLabel?.(row.original, row.index) ??
                `选择 ${String(key)}`
              }
              checked={selectedRowKeySet.has(key)}
              disabled={disabled}
              onChange={(checked) => setRowSelected(row, checked)}
            />
          </PrimitiveTable.Cell>
        ) : null}
        {expandable ? (
          <PrimitiveTable.Cell
            fixed="start"
            fixedOffset={rowSelection ? SELECTION_COLUMN_WIDTH : 0}
            className={cn('w-12', expandable.columnClassName)}
          >
            {expandable.rowExpandable?.(row.original, row.index) !== false ? (
              <PrimitiveTable.ExpandButton
                aria-label={
                  expandedRowKeySet.has(key)
                    ? (expandable.getCollapseLabel?.(row.original, row.index) ??
                      `收起 ${String(key)}`)
                    : (expandable.getExpandLabel?.(row.original, row.index) ??
                      `展开 ${String(key)}`)
                }
                expanded={expandedRowKeySet.has(key)}
                onExpandedChange={(expanded) => setRowExpanded(row, expanded)}
              />
            ) : null}
          </PrimitiveTable.Cell>
        ) : null}
        {renderCells(row)}
      </PrimitiveTable.Row>
    );
  };

  const isLoading = loading !== false && loading != null;
  const stateContent =
    error != null
      ? error
      : isLoading
        ? loading === true
          ? '加载中…'
          : loading
        : visibleRows.length === 0
          ? empty
          : null;
  const {
    className: nativeTableClassName,
    containerRef,
    containerStyle,
    ...resolvedTableProps
  } = tableProps ?? {};

  return (
    <div
      data-slot="table-root"
      className={cn('grid gap-3', classNames?.root, className)}
      {...props}
    >
      {searchOptions ? (
        <div data-slot="table-toolbar" className={classNames?.toolbar}>
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
        {...resolvedTableProps}
        aria-busy={isLoading || undefined}
        aria-rowcount={
          resolvedTableProps['aria-rowcount'] ??
          (virtualOptions ? totalRows + (showHeader ? 1 : 0) : undefined)
        }
        className={cn(classNames?.table, nativeTableClassName)}
        containerClassName={cn(
          'rounded-xl border border-border',
          classNames?.container
        )}
        containerRef={containerRef}
        containerStyle={{
          ...(virtualOptions
            ? { maxHeight: virtualOptions.containerHeight ?? 360 }
            : undefined),
          ...containerStyle,
        }}
      >
        {caption != null ? (
          <PrimitiveTable.Caption className={classNames?.caption}>
            {caption}
          </PrimitiveTable.Caption>
        ) : null}
        {showHeader ? (
          <PrimitiveTable.Header className={classNames?.header}>
            {table.getHeaderGroups().map((group, groupIndex, groups) => (
              <PrimitiveTable.Row key={group.id}>
                {rowSelection && groupIndex === 0 ? (
                  <PrimitiveTable.Head
                    fixed="start"
                    fixedOffset={0}
                    className={cn('w-11', rowSelection.columnClassName)}
                    rowSpan={groups.length}
                  >
                    {rowSelection.columnHeader ?? (
                      <Checkbox
                        aria-label={
                          rowSelection.getSelectAllLabel?.(
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
                  </PrimitiveTable.Head>
                ) : null}
                {expandable && groupIndex === 0 ? (
                  <PrimitiveTable.Head
                    fixed="start"
                    fixedOffset={rowSelection ? SELECTION_COLUMN_WIDTH : 0}
                    className={cn('w-12', expandable.columnClassName)}
                    rowSpan={groups.length}
                  >
                    {expandable.columnHeader ?? (
                      <span className="sr-only">展开行</span>
                    )}
                  </PrimitiveTable.Head>
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

                  return (
                    <PrimitiveTable.Head
                      key={header.id}
                      align={column.align}
                      colSpan={header.colSpan}
                      ellipsis={column.headerEllipsis}
                      ellipsisTooltip={column.headerEllipsisTooltip}
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
                        column.headerClassName
                      )}
                      style={column.width ? { width: column.width } : undefined}
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
                    </PrimitiveTable.Head>
                  );
                })}
              </PrimitiveTable.Row>
            ))}
          </PrimitiveTable.Header>
        ) : null}
        {stateContent != null ? (
          <PrimitiveTable.Body className={classNames?.body}>
            <PrimitiveTable.Row>
              <PrimitiveTable.Cell
                colSpan={Math.max(1, visibleColumnCount)}
                data-slot="table-state"
                className={cn(
                  'h-24 text-center text-muted-foreground',
                  classNames?.state
                )}
              >
                {stateContent}
              </PrimitiveTable.Cell>
            </PrimitiveTable.Row>
          </PrimitiveTable.Body>
        ) : virtualOptions ? (
          <PrimitiveTable.VirtualBody
            className={classNames?.body}
            colSpan={visibleColumnCount}
            items={visibleRows}
            getItemKey={resolveRowKey}
            overscan={virtualOptions.overscan}
            rowHeight={virtualOptions.rowHeight}
            rowIndexOffset={showHeader ? 2 : 1}
          >
            {(row) => renderRow(row)}
          </PrimitiveTable.VirtualBody>
        ) : (
          <PrimitiveTable.Body className={classNames?.body}>
            {visibleRows.map((row) => (
              <React.Fragment key={String(resolveRowKey(row))}>
                {renderRow(row)}
                {expandable &&
                expandedRowKeySet.has(resolveRowKey(row)) &&
                expandable.rowExpandable?.(row.original, row.index) !==
                  false ? (
                  <PrimitiveTable.ExpandedRow colSpan={visibleColumnCount}>
                    {expandable.render(row.original, row.index)}
                  </PrimitiveTable.ExpandedRow>
                ) : null}
              </React.Fragment>
            ))}
          </PrimitiveTable.Body>
        )}
        {footer != null ? (
          <PrimitiveTable.Footer className={classNames?.footer}>
            <PrimitiveTable.Row>
              <PrimitiveTable.Cell colSpan={visibleColumnCount}>
                {typeof footer === 'function'
                  ? footer(visibleRows.map((row) => row.original))
                  : footer}
              </PrimitiveTable.Cell>
            </PrimitiveTable.Row>
          </PrimitiveTable.Footer>
        ) : null}
      </PrimitiveTable>
      {paginationOptions && pageCount > 1 && stateContent == null ? (
        <div
          data-slot="table-pagination"
          className={cn(
            'flex flex-wrap items-center justify-between gap-3',
            classNames?.pagination,
            paginationOptions.containerClassName
          )}
        >
          {paginationOptions.showSummary !== false ? (
            <span className="text-sm text-muted-foreground">
              {paginationOptions.renderSummary?.(
                totalRows,
                currentPage,
                pageCount
              ) ?? (
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
            nextText={paginationOptions.nextText}
            onChange={(page) => table.setPageIndex(page - 1)}
            pageCount={pageCount}
            previousText={paginationOptions.previousText}
            siblingCount={paginationOptions.siblingCount}
          />
        </div>
      ) : null}
    </div>
  );
};

const TableCompound = Object.assign(ManagedTable, {
  Actions: TableActions,
  Body: PrimitiveTable.Body,
  Caption: PrimitiveTable.Caption,
  Cell: PrimitiveTable.Cell,
  ExpandedRow: PrimitiveTable.ExpandedRow,
  ExpandButton: PrimitiveTable.ExpandButton,
  Footer: PrimitiveTable.Footer,
  Head: PrimitiveTable.Head,
  Header: PrimitiveTable.Header,
  Primitive: PrimitiveTable,
  Row: PrimitiveTable.Row,
  VirtualBody: PrimitiveTable.VirtualBody,
});

export { TableCompound as Table };
