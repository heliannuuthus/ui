import * as React from 'react';
import {
  flexRender,
  functionalUpdate,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnDef as TanStackColumnDef,
  type PaginationState,
  type Row,
  type RowData,
  type SortingState,
  type Updater,
} from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Pagination, type PaginationProps } from './pagination';
import { cn } from '../lib/utils';
import {
  Body as TableBody,
  Caption as TableCaption,
  Cell as TableCell,
  ExpandedRow as TableExpandedRow,
  ExpandButton as TableExpandButton,
  Footer as TableFooter,
  Head as TableHead,
  Header as TableHeader,
  Row as TableRow,
  Table,
  VirtualBody as TableVirtualBody,
  type TableCellAlign,
  type TableCellFixed,
  type TableProps,
  type TableRowProps,
} from './table';

export interface DataTableColumnMeta {
  align?: TableCellAlign;
  cellClassName?: string;
  ellipsis?: boolean;
  ellipsisTooltip?: React.ReactNode;
  fixed?: TableCellFixed;
  fixedOffset?: number | string;
  headerEllipsis?: boolean;
  headerEllipsisTooltip?: React.ReactNode;
  headerClassName?: string;
}

export type DataTableRender<TData, TValue = unknown> = (
  value: TValue,
  row: TData,
  index: number
) => React.ReactNode;

type DataTableColumnDefinition<TColumn, TData, TValue> = TColumn extends unknown
  ? Omit<TColumn, 'cell' | 'columns'> & {
      columns?: ColumnDef<TData, unknown>[];
      render?: DataTableRender<TData, TValue>;
    }
  : never;

export type ColumnDef<TData, TValue = unknown> = DataTableColumnDefinition<
  TanStackColumnDef<TData, TValue>,
  TData,
  TValue
>;

/* eslint-disable @typescript-eslint/no-unused-vars -- names must match TanStack's declaration for module augmentation */
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: DataTableColumnMeta['align'];
    cellClassName?: string;
    ellipsis?: boolean;
    ellipsisTooltip?: React.ReactNode;
    fixed?: DataTableColumnMeta['fixed'];
    fixedOffset?: DataTableColumnMeta['fixedOffset'];
    headerEllipsis?: boolean;
    headerEllipsisTooltip?: React.ReactNode;
    headerClassName?: string;
  }
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export interface DataTableExpandableProps<TData> {
  columnClassName?: string;
  columnHeader?: React.ReactNode;
  defaultExpandedRowKeys?: React.Key[];
  expandedRowKeys?: React.Key[];
  onExpandedRowKeysChange?: (keys: React.Key[]) => void;
  render: (row: TData, index: number) => React.ReactNode;
  rowExpandable?: (row: TData, index: number) => boolean;
}

export interface DataTablePaginationProps extends Pick<
  PaginationProps,
  'className' | 'nextText' | 'previousText' | 'siblingCount'
> {
  containerClassName?: string;
  current?: number;
  defaultCurrent?: number;
  onChange?: (page: number, pageSize: number) => void;
  pageSize?: number;
  showSummary?: boolean;
}

export interface DataTableVirtualProps<TData> {
  containerHeight?: number | string;
  getItemKey?: (row: TData, index: number) => React.Key;
  overscan?: number;
  rowHeight?: number;
}

export interface DataTableProps<TData, TValue> extends Omit<
  React.ComponentProps<'div'>,
  'children'
> {
  caption?: React.ReactNode;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  expandable?: DataTableExpandableProps<TData>;
  filterColumn?: string;
  filterPlaceholder?: string;
  emptyMessage?: string;
  footer?:
    React.ReactNode | ((visibleRows: readonly TData[]) => React.ReactNode);
  getRowKey?: (row: TData, index: number) => React.Key;
  pagination?: false | DataTablePaginationProps;
  rowProps?: (row: TData, index: number) => Omit<TableRowProps, 'children'>;
  showHeader?: boolean;
  tableProps?: Omit<TableProps, 'children'>;
  virtual?: boolean | DataTableVirtualProps<TData>;
}

export interface DataTableColumnHeaderProps<TData, TValue> extends Omit<
  React.ComponentProps<typeof Button>,
  'children' | 'disabled' | 'onClick'
> {
  column: Column<TData, TValue>;
  children: React.ReactNode;
}

export interface DataTableActionsProps extends React.ComponentProps<'div'> {
  'aria-label': string;
  align?: TableCellAlign;
}

function resolveColumns<TData, TValue>(
  columns: ColumnDef<TData, TValue>[]
): TanStackColumnDef<TData, TValue>[] {
  return columns.map((column) => {
    const {
      columns: childColumns,
      render,
      ...columnDefinition
    } = column as ColumnDef<TData, TValue> & {
      columns?: ColumnDef<TData, unknown>[];
    };

    return {
      ...columnDefinition,
      ...(childColumns ? { columns: resolveColumns(childColumns) } : undefined),
      ...(render
        ? {
            cell: (context) =>
              render(
                context.getValue() as TValue,
                context.row.original,
                context.row.index
              ),
          }
        : undefined),
    } as TanStackColumnDef<TData, TValue>;
  });
}

function DataTableColumnHeader<TData, TValue>({
  column,
  children,
  className,
  ...props
}: DataTableColumnHeaderProps<TData, TValue>) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={cn('-ml-3', className)}
      disabled={!column.getCanSort()}
      data-sort={column.getIsSorted() || undefined}
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      {...props}
    >
      {children}
      <ArrowUpDown aria-hidden="true" />
    </Button>
  );
}

function DataTableActions({
  align = 'center',
  className,
  ...props
}: DataTableActionsProps) {
  return (
    <div
      data-slot="data-table-actions"
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
}

function DataTable<TData, TValue>({
  caption,
  columns,
  data,
  expandable,
  filterColumn,
  filterPlaceholder = '筛选…',
  emptyMessage = '暂无数据',
  footer,
  getRowKey,
  pagination,
  rowProps,
  showHeader = true,
  tableProps,
  virtual,
  className,
  ...props
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const paginationOptions = React.useMemo(
    () => (pagination === false ? null : (pagination ?? {})),
    [pagination]
  );
  const pageSize = Math.max(1, paginationOptions?.pageSize ?? 10);
  const [uncontrolledPage, setUncontrolledPage] = React.useState(
    paginationOptions?.defaultCurrent ?? 1
  );
  const currentPage = Math.max(
    1,
    paginationOptions?.current ?? uncontrolledPage
  );
  const paginationState = React.useMemo<PaginationState>(
    () => ({ pageIndex: currentPage - 1, pageSize }),
    [currentPage, pageSize]
  );
  const handlePaginationChange = React.useCallback(
    (updater: Updater<PaginationState>) => {
      const nextState = functionalUpdate(updater, paginationState);
      const nextPage = nextState.pageIndex + 1;

      if (paginationOptions?.current == null) {
        setUncontrolledPage(nextPage);
      }
      paginationOptions?.onChange?.(nextPage, nextState.pageSize);
    },
    [paginationOptions, paginationState]
  );
  const [uncontrolledExpandedRowKeys, setUncontrolledExpandedRowKeys] =
    React.useState<React.Key[]>(expandable?.defaultExpandedRowKeys ?? []);
  const expandedRowKeys =
    expandable?.expandedRowKeys ?? uncontrolledExpandedRowKeys;
  const expandedRowKeySet = React.useMemo(
    () => new Set(expandedRowKeys),
    [expandedRowKeys]
  );
  const resolvedColumns = React.useMemo(
    () => resolveColumns(columns),
    [columns]
  );
  const table = useReactTable({
    data,
    columns: resolvedColumns,
    state: { sorting },
    onSortingChange: setSorting,
    ...(paginationOptions
      ? {
          state: { sorting, pagination: paginationState },
          onPaginationChange: handlePaginationChange,
        }
      : undefined),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(paginationOptions
      ? { getPaginationRowModel: getPaginationRowModel() }
      : undefined),
  });
  const {
    containerClassName: tableContainerClassName,
    containerStyle,
    ...resolvedTableProps
  } = tableProps ?? {};
  const virtualOptions =
    virtual === true ? {} : virtual === false ? null : (virtual ?? null);
  const supportsExpandedRows = expandable != null && virtualOptions == null;
  const visibleRows = table.getRowModel().rows;
  const visibleColumnCount =
    table.getVisibleLeafColumns().length + (supportsExpandedRows ? 1 : 0);
  const resolveRowKey = React.useCallback(
    (row: Row<TData>) => getRowKey?.(row.original, row.index) ?? row.id,
    [getRowKey]
  );
  const setRowExpanded = React.useCallback(
    (row: Row<TData>, expanded: boolean) => {
      if (expandable == null) return;

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
      const meta = cell.column.columnDef.meta;

      return (
        <TableCell
          key={cell.id}
          align={meta?.align}
          data-column-id={cell.column.id}
          ellipsis={meta?.ellipsis}
          ellipsisTooltip={meta?.ellipsisTooltip}
          fixed={meta?.fixed}
          fixedOffset={
            meta?.fixedOffset ??
            (supportsExpandedRows && meta?.fixed === 'start' ? 48 : undefined)
          }
          className={meta?.cellClassName}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      );
    });
  const renderRow = (row: Row<TData>) => {
    const resolvedRowProps = rowProps?.(row.original, row.index);

    return (
      <TableRow
        {...resolvedRowProps}
        key={row.id}
        data-state={row.getIsSelected() ? 'selected' : undefined}
      >
        {supportsExpandedRows ? (
          <TableCell
            fixed="start"
            className={cn('w-12', expandable.columnClassName)}
          >
            {expandable.rowExpandable?.(row.original, row.index) !== false ? (
              <TableExpandButton
                aria-label={`${
                  expandedRowKeySet.has(resolveRowKey(row)) ? '收起' : '展开'
                } ${String(resolveRowKey(row))}`}
                expanded={expandedRowKeySet.has(resolveRowKey(row))}
                onExpandedChange={(expanded) => setRowExpanded(row, expanded)}
              />
            ) : null}
          </TableCell>
        ) : null}
        {renderCells(row)}
      </TableRow>
    );
  };

  return (
    <div
      data-slot="data-table"
      className={cn('grid gap-3', className)}
      {...props}
    >
      {filterColumn ? (
        <Input
          aria-label={filterPlaceholder}
          placeholder={filterPlaceholder}
          value={
            (table.getColumn(filterColumn)?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      ) : null}
      <Table
        {...resolvedTableProps}
        aria-rowcount={
          resolvedTableProps['aria-rowcount'] ??
          (virtualOptions
            ? table.getFilteredRowModel().rows.length + (showHeader ? 1 : 0)
            : undefined)
        }
        containerClassName={cn(
          'rounded-xl border border-border',
          tableContainerClassName
        )}
        containerStyle={{
          ...(virtualOptions
            ? { maxHeight: virtualOptions.containerHeight ?? 360 }
            : undefined),
          ...containerStyle,
        }}
      >
        {caption != null ? <TableCaption>{caption}</TableCaption> : null}
        {showHeader ? (
          <TableHeader>
            {table.getHeaderGroups().map((group, groupIndex, groups) => (
              <TableRow key={group.id}>
                {supportsExpandedRows && groupIndex === 0 ? (
                  <TableHead
                    fixed="start"
                    className={cn('w-12', expandable.columnClassName)}
                    rowSpan={groups.length}
                  >
                    {expandable.columnHeader ?? (
                      <span className="sr-only">展开行</span>
                    )}
                  </TableHead>
                ) : null}
                {group.headers.map((header) => {
                  const meta = header.column.columnDef.meta;
                  const sorting = header.column.getIsSorted();

                  return (
                    <TableHead
                      key={header.id}
                      align={meta?.align}
                      colSpan={header.colSpan}
                      ellipsis={meta?.headerEllipsis}
                      ellipsisTooltip={meta?.headerEllipsisTooltip}
                      fixed={meta?.fixed}
                      fixedOffset={
                        meta?.fixedOffset ??
                        (supportsExpandedRows && meta?.fixed === 'start'
                          ? 48
                          : undefined)
                      }
                      rowSpan={header.rowSpan > 1 ? header.rowSpan : undefined}
                      scope={header.subHeaders.length ? 'colgroup' : 'col'}
                      aria-sort={
                        sorting
                          ? sorting === 'asc'
                            ? 'ascending'
                            : 'descending'
                          : header.column.getCanSort()
                            ? 'none'
                            : undefined
                      }
                      data-column-id={header.column.id}
                      data-header-group={
                        header.subHeaders.length ? '' : undefined
                      }
                      className={cn(
                        header.subHeaders.length && 'bg-muted/40 font-semibold',
                        meta?.headerClassName
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
        ) : null}
        {visibleRows.length ? (
          virtualOptions ? (
            <TableVirtualBody
              colSpan={visibleColumnCount}
              items={visibleRows}
              getItemKey={(row) =>
                virtualOptions.getItemKey?.(row.original, row.index) ??
                resolveRowKey(row)
              }
              overscan={virtualOptions.overscan}
              rowHeight={virtualOptions.rowHeight}
              rowIndexOffset={showHeader ? 2 : 1}
            >
              {(row) => renderRow(row)}
            </TableVirtualBody>
          ) : (
            <TableBody>
              {visibleRows.map((row) => (
                <React.Fragment key={row.id}>
                  {renderRow(row)}
                  {supportsExpandedRows &&
                  expandedRowKeySet.has(resolveRowKey(row)) &&
                  expandable.rowExpandable?.(row.original, row.index) !==
                    false ? (
                    <TableExpandedRow colSpan={visibleColumnCount}>
                      {expandable.render(row.original, row.index)}
                    </TableExpandedRow>
                  ) : null}
                </React.Fragment>
              ))}
            </TableBody>
          )
        ) : (
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={visibleColumnCount}
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          </TableBody>
        )}
        {footer != null ? (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={visibleColumnCount}>
                {typeof footer === 'function'
                  ? footer(visibleRows.map((row) => row.original))
                  : footer}
              </TableCell>
            </TableRow>
          </TableFooter>
        ) : null}
      </Table>
      {paginationOptions && table.getPageCount() > 1 ? (
        <div
          data-slot="data-table-pagination"
          className={cn(
            'flex flex-wrap items-center justify-between gap-3',
            paginationOptions.containerClassName
          )}
        >
          {paginationOptions.showSummary !== false ? (
            <span className="text-sm text-muted-foreground">
              共 {table.getFilteredRowModel().rows.length} 项 · 第 {currentPage}{' '}
              / {table.getPageCount()} 页
            </span>
          ) : null}
          <Pagination
            className={cn('mx-0 w-auto', paginationOptions.className)}
            current={currentPage}
            nextText={paginationOptions.nextText}
            onChange={(page) => table.setPageIndex(page - 1)}
            pageCount={table.getPageCount()}
            previousText={paginationOptions.previousText}
            siblingCount={paginationOptions.siblingCount}
          />
        </div>
      ) : null}
    </div>
  );
}

const DataTableCompound = Object.assign(DataTable, {
  Actions: DataTableActions,
  ColumnHeader: DataTableColumnHeader,
});

export {
  DataTableCompound as DataTable,
  DataTableActions as Actions,
  DataTableColumnHeader as ColumnHeader,
};
