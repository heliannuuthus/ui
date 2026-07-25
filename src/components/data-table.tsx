import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnDef,
  type RowData,
  type SortingState,
} from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { cn } from '../lib/utils';
import {
  Body as TableBody,
  Cell as TableCell,
  Head as TableHead,
  Header as TableHeader,
  Row as TableRow,
  Table,
} from './table';

export interface DataTableColumnMeta {
  align?: 'start' | 'center' | 'end';
  cellClassName?: string;
  headerClassName?: string;
}

/* eslint-disable @typescript-eslint/no-unused-vars -- names must match TanStack's declaration for module augmentation */
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: DataTableColumnMeta['align'];
    cellClassName?: string;
    headerClassName?: string;
  }
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export interface DataTableProps<TData, TValue> extends Omit<
  React.ComponentProps<'div'>,
  'children'
> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumn?: string;
  filterPlaceholder?: string;
  emptyMessage?: string;
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
}

function getAlignmentClassName(align?: DataTableColumnMeta['align']) {
  if (align === 'center') return 'text-center';
  if (align === 'end') return 'text-right';
  return undefined;
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

function DataTableActions({ className, ...props }: DataTableActionsProps) {
  return (
    <div
      data-slot="data-table-actions"
      role="group"
      className={cn('flex items-center justify-end gap-1', className)}
      {...props}
    />
  );
}

function DataTable<TData, TValue>({
  columns,
  data,
  filterColumn,
  filterPlaceholder = '筛选…',
  emptyMessage = '暂无数据',
  className,
  ...props
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

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
      <div className="overflow-hidden rounded-xl border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => {
                  const meta = header.column.columnDef.meta;
                  const sorting = header.column.getIsSorted();

                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
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
                        getAlignmentClassName(meta?.align),
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
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? 'selected' : undefined}
                >
                  {row.getVisibleCells().map((cell) => {
                    const meta = cell.column.columnDef.meta;

                    return (
                      <TableCell
                        key={cell.id}
                        data-column-id={cell.column.id}
                        className={cn(
                          getAlignmentClassName(meta?.align),
                          meta?.cellClassName
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getVisibleLeafColumns().length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          上一页
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          下一页
        </Button>
      </div>
    </div>
  );
}

export {
  DataTable,
  DataTableActions as Actions,
  DataTableColumnHeader as ColumnHeader,
};
