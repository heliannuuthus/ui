import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

import { cn } from '../lib/utils';
import { buttonVariants } from './button';
import { Select } from './select';

type PaginationSize = 'sm' | 'default' | 'lg';

type PaginationItemType =
  | 'page'
  | 'first'
  | 'last'
  | 'next'
  | 'previous'
  | 'ellipsis-start'
  | 'ellipsis-end';

type PaginationAriaLabels = {
  first?: string;
  last?: string;
  more?: string;
  navigation?: string;
  next?: string;
  page?: (page: number) => string;
  pageSize?: string;
  previous?: string;
  quickJumper?: string;
};

type PaginationAriaLabelContext = {
  page: number | null;
  selected: boolean;
  type: PaginationItemType;
};

type PaginationClassNames = {
  content?: string;
  control?: string;
  ellipsis?: string;
  item?: string;
  pageSize?: string;
  quickJumper?: string;
  summary?: string;
};

type PaginationStyles = {
  [Slot in keyof PaginationClassNames]?: React.CSSProperties;
};

type PaginationQuickJumperOptions = {
  goButton?: React.ReactNode;
  label?: React.ReactNode;
  suffix?: React.ReactNode;
};

type PaginationSimpleOptions = {
  readOnly?: boolean;
};

type PaginationRenderItemProps = {
  disabled: boolean;
  originalElement: React.ReactElement;
  page: number | null;
  selected: boolean;
  type: PaginationItemType;
};

type PaginationBaseProps = Omit<
  React.ComponentPropsWithoutRef<'nav'>,
  'children' | 'onChange'
> & {
  align?: 'start' | 'center' | 'end';
  ariaLabels?: PaginationAriaLabels;
  boundaries?: number;
  classNames?: PaginationClassNames;
  current?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  first?: boolean | React.ReactNode;
  getItemAriaLabel?: (context: PaginationAriaLabelContext) => string;
  getItemHref?: (page: number, type: PaginationItemType) => string;
  hideOnSinglePage?: boolean;
  last?: boolean | React.ReactNode;
  next?: boolean | React.ReactNode;
  onChange?: (page: number, pageSize: number) => void;
  onPageSizeChange?: (page: number, pageSize: number) => void;
  pageCount?: number;
  pageSize?: number;
  pageSizeLabel?: (pageSize: number) => React.ReactNode;
  pageSizeOptions?: readonly number[];
  previous?: boolean | React.ReactNode;
  renderItem?: (item: PaginationRenderItemProps) => React.ReactNode;
  showQuickJumper?: boolean | PaginationQuickJumperOptions;
  showSizeChanger?: boolean;
  showTitle?: boolean;
  showTotal?:
    | boolean
    | ((total: number, range: readonly [number, number]) => React.ReactNode);
  siblings?: number;
  simple?: boolean | PaginationSimpleOptions;
  size?: PaginationSize;
  styles?: PaginationStyles;
  total?: number;
};

type PaginationProps = PaginationBaseProps;

const getVisiblePages = (
  current: number,
  pageCount: number,
  siblings: number,
  boundaries: number
) => {
  const visible = new Set<number>();
  const boundary = Math.max(0, Math.trunc(boundaries));
  const sibling = Math.max(0, Math.trunc(siblings));

  for (let page = 1; page <= Math.min(boundary, pageCount); page += 1) {
    visible.add(page);
  }
  for (
    let page = Math.max(1, pageCount - boundary + 1);
    page <= pageCount;
    page += 1
  ) {
    visible.add(page);
  }
  for (
    let page = Math.max(1, current - sibling);
    page <= Math.min(pageCount, current + sibling);
    page += 1
  ) {
    visible.add(page);
  }

  const sortedPages = Array.from(visible).sort((left, right) => left - right);
  const items: Array<number | 'ellipsis-start' | 'ellipsis-end'> = [];

  sortedPages.forEach((page, index) => {
    const previousPage = sortedPages[index - 1];

    if (previousPage != null) {
      const gap = page - previousPage;
      if (gap === 2) items.push(previousPage + 1);
      else if (gap > 2) {
        items.push(page < current ? 'ellipsis-start' : 'ellipsis-end');
      }
    }
    items.push(page);
  });

  return items;
};

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      'aria-label': ariaLabel,
      align = 'center',
      ariaLabels,
      boundaries = 1,
      className,
      classNames,
      current,
      defaultCurrent = 1,
      defaultPageSize = 10,
      disabled = false,
      first = false,
      getItemAriaLabel,
      getItemHref,
      hideOnSinglePage = false,
      last = false,
      next = true,
      onChange,
      onPageSizeChange,
      pageCount: pageCountProp,
      pageSize,
      pageSizeLabel = (value) => `${value} / 页`,
      pageSizeOptions = [10, 20, 50, 100],
      previous = true,
      renderItem,
      showQuickJumper = false,
      showSizeChanger = false,
      showTitle = true,
      showTotal = false,
      siblings = 1,
      simple = false,
      size = 'default',
      style,
      styles,
      total,
      ...props
    },
    ref
  ) => {
    const [uncontrolledCurrent, setUncontrolledCurrent] = React.useState(
      Math.max(1, Math.trunc(defaultCurrent))
    );
    const [uncontrolledPageSize, setUncontrolledPageSize] = React.useState(
      Math.max(1, Math.trunc(defaultPageSize))
    );
    const simpleInputRef = React.useRef<HTMLInputElement>(null);
    const quickInputRef = React.useRef<HTMLInputElement>(null);
    const resolvedPageSize = Math.max(
      1,
      Math.trunc(pageSize ?? uncontrolledPageSize)
    );
    const normalizedTotal = Math.max(0, Math.trunc(total ?? 0));
    const normalizedPageCount = Math.max(
      1,
      Math.trunc(
        (pageCountProp ?? Math.ceil(normalizedTotal / resolvedPageSize)) || 1
      )
    );
    const normalizedCurrent = Math.min(
      normalizedPageCount,
      Math.max(1, Math.trunc(current ?? uncontrolledCurrent))
    );
    const resolvedAriaLabels = {
      first: '前往第一页',
      last: '前往最后一页',
      more: '更多页面',
      navigation: '分页',
      next: '前往下一页',
      page: (page: number) => `前往第 ${page} 页`,
      pageSize: '每页条数',
      previous: '前往上一页',
      quickJumper: '跳转页码',
      ...ariaLabels,
    };
    const controlSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default';
    const iconSize =
      size === 'sm' ? 'icon-sm' : size === 'lg' ? 'icon-lg' : 'icon';
    const pages = getVisiblePages(
      normalizedCurrent,
      normalizedPageCount,
      siblings,
      boundaries
    );
    const normalizedPageSizeOptions = Array.from(
      new Set(
        [...pageSizeOptions, resolvedPageSize]
          .map((option) => Math.trunc(option))
          .filter((option) => option > 0)
      )
    ).sort((left, right) => left - right);
    const range = [
      normalizedTotal === 0
        ? 0
        : (normalizedCurrent - 1) * resolvedPageSize + 1,
      normalizedTotal === 0
        ? 0
        : Math.min(normalizedCurrent * resolvedPageSize, normalizedTotal),
    ] as const;

    const requestPage = (requestedPage: number) => {
      if (disabled || !Number.isFinite(requestedPage)) return;
      const nextPage = Math.min(
        normalizedPageCount,
        Math.max(1, Math.trunc(requestedPage))
      );
      if (nextPage === normalizedCurrent) return;
      if (current === undefined) setUncontrolledCurrent(nextPage);
      onChange?.(nextPage, resolvedPageSize);
    };

    const requestPageSize = (requestedPageSize: number | null) => {
      if (
        disabled ||
        requestedPageSize == null ||
        !Number.isFinite(requestedPageSize)
      ) {
        return;
      }

      const nextPageSize = Math.max(1, Math.trunc(requestedPageSize));
      if (nextPageSize === resolvedPageSize) return;
      const nextPageCount = Math.max(
        1,
        (pageCountProp ?? Math.ceil(normalizedTotal / nextPageSize)) || 1
      );
      const nextPage = Math.min(normalizedCurrent, nextPageCount);

      if (pageSize === undefined) setUncontrolledPageSize(nextPageSize);
      if (current === undefined) setUncontrolledCurrent(nextPage);
      onPageSizeChange?.(nextPage, nextPageSize);
      onChange?.(nextPage, nextPageSize);
    };

    const resolveAriaLabel = (
      type: PaginationItemType,
      page: number | null,
      selected: boolean
    ) => {
      const customLabel = getItemAriaLabel?.({ page, selected, type });
      if (customLabel != null) return customLabel;

      if (type === 'first') return resolvedAriaLabels.first;
      if (type === 'last') return resolvedAriaLabels.last;
      if (type === 'next') return resolvedAriaLabels.next;
      if (type === 'previous') return resolvedAriaLabels.previous;
      if (type === 'page' && page != null) {
        return resolvedAriaLabels.page(page);
      }
      return resolvedAriaLabels.more;
    };

    const renderControl = (
      page: number,
      label: React.ReactNode,
      type: PaginationItemType,
      options?: {
        iconOnly?: boolean;
        selected?: boolean;
        unavailable?: boolean;
      }
    ) => {
      const selected = options?.selected ?? false;
      const unavailable = disabled || (options?.unavailable ?? false);
      const itemAriaLabel = resolveAriaLabel(type, page, selected);
      const commonProps = {
        'aria-current': selected ? ('page' as const) : undefined,
        'aria-disabled': unavailable || undefined,
        'aria-label': itemAriaLabel,
        className: cn(
          buttonVariants({
            variant: selected ? 'outline' : 'ghost',
            size: type === 'page' || options?.iconOnly ? iconSize : controlSize,
          }),
          type === 'page' && 'tabular-nums',
          classNames?.control,
          unavailable && 'pointer-events-none opacity-50'
        ),
        'data-active': selected || undefined,
        'data-slot': 'pagination-control',
        'data-type': type,
        style: styles?.control,
        title: showTitle ? itemAriaLabel : undefined,
      };
      const href = unavailable ? undefined : getItemHref?.(page, type);
      const originalElement =
        href != null ? (
          <a
            {...commonProps}
            href={unavailable ? undefined : href}
            onClick={(event) => {
              if (unavailable) {
                event.preventDefault();
                return;
              }
              requestPage(page);
            }}
            tabIndex={unavailable ? -1 : undefined}
          >
            {label}
          </a>
        ) : (
          <button
            {...commonProps}
            disabled={unavailable}
            onClick={() => requestPage(page)}
            type="button"
          >
            {label}
          </button>
        );

      return (
        renderItem?.({
          disabled: unavailable,
          originalElement,
          page,
          selected,
          type,
        }) ?? originalElement
      );
    };

    const renderEllipsis = (type: 'ellipsis-start' | 'ellipsis-end') => {
      const originalElement = (
        <span
          aria-hidden="true"
          className={cn(
            'flex size-9 items-center justify-center [&_svg:not([class*=size-])]:size-4',
            size === 'sm' && 'size-8',
            size === 'lg' && 'size-10',
            classNames?.ellipsis
          )}
          data-slot="pagination-ellipsis"
          data-type={type}
          style={styles?.ellipsis}
          title={showTitle ? resolvedAriaLabels.more : undefined}
        >
          <MoreHorizontalIcon />
          <span className="sr-only">{resolvedAriaLabels.more}</span>
        </span>
      );

      return (
        renderItem?.({
          disabled: true,
          originalElement,
          page: null,
          selected: false,
          type,
        }) ?? originalElement
      );
    };

    const submitInputPage = (
      input: React.RefObject<HTMLInputElement | null>,
      clear = false
    ) => {
      const value = Number(input.current?.value);
      requestPage(value);
      if (clear && input.current) input.current.value = '';
    };

    if (hideOnSinglePage && normalizedPageCount <= 1) return null;

    const previousControl =
      previous === false || previous == null
        ? null
        : renderControl(
            Math.max(1, normalizedCurrent - 1),
            previous === true ? (
              <ChevronLeftIcon data-icon="inline-start" />
            ) : (
              previous
            ),
            'previous',
            {
              iconOnly: previous === true,
              unavailable: normalizedCurrent === 1,
            }
          );
    const nextControl =
      next === false || next == null
        ? null
        : renderControl(
            Math.min(normalizedPageCount, normalizedCurrent + 1),
            next === true ? <ChevronRightIcon data-icon="inline-end" /> : next,
            'next',
            {
              iconOnly: next === true,
              unavailable: normalizedCurrent === normalizedPageCount,
            }
          );

    return (
      <nav
        {...props}
        ref={ref}
        aria-disabled={disabled || undefined}
        aria-label={ariaLabel ?? resolvedAriaLabels.navigation}
        className={cn(
          'flex w-full flex-nowrap items-center gap-2',
          align === 'start' && 'justify-start',
          align === 'center' && '[justify-content:safe_center]',
          align === 'end' && '[justify-content:safe_end]',
          className
        )}
        data-disabled={disabled || undefined}
        data-simple={simple ? '' : undefined}
        data-size={size}
        data-slot="pagination"
        style={style}
      >
        {showTotal ? (
          <span
            aria-live="polite"
            className={cn(
              'shrink-0 whitespace-nowrap text-xs text-muted-foreground tabular-nums',
              classNames?.summary
            )}
            data-slot="pagination-summary"
            style={styles?.summary}
          >
            {typeof showTotal === 'function'
              ? showTotal(normalizedTotal, range)
              : `共 ${normalizedTotal} 项`}
          </span>
        ) : null}

        <ul
          className={cn(
            'flex shrink-0 items-center gap-0.5',
            classNames?.content
          )}
          data-slot="pagination-content"
          style={styles?.content}
        >
          {first !== false && first != null && !simple ? (
            <li
              className={classNames?.item}
              data-slot="pagination-item"
              style={styles?.item}
            >
              {renderControl(
                1,
                first === true ? <ChevronsLeftIcon /> : first,
                'first',
                {
                  iconOnly: first === true,
                  unavailable: normalizedCurrent === 1,
                }
              )}
            </li>
          ) : null}
          {previousControl ? (
            <li
              className={classNames?.item}
              data-slot="pagination-item"
              style={styles?.item}
            >
              {previousControl}
            </li>
          ) : null}

          {simple ? (
            <li
              className={classNames?.item}
              data-slot="pagination-item"
              style={styles?.item}
            >
              <form
                className="flex items-center gap-2 text-sm"
                onSubmit={(event) => {
                  event.preventDefault();
                  submitInputPage(simpleInputRef);
                }}
              >
                {typeof simple === 'object' && simple.readOnly ? (
                  <span aria-current="page">{normalizedCurrent}</span>
                ) : (
                  <input
                    ref={simpleInputRef}
                    aria-label={resolvedAriaLabels.quickJumper}
                    className="h-8 w-14 rounded-md border border-input bg-background px-2 text-center outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                    defaultValue={normalizedCurrent}
                    disabled={disabled}
                    key={normalizedCurrent}
                    max={normalizedPageCount}
                    min={1}
                    type="number"
                  />
                )}
                <span aria-hidden="true" className="text-muted-foreground">
                  / {normalizedPageCount}
                </span>
              </form>
            </li>
          ) : (
            pages.map((page) => (
              <li
                className={classNames?.item}
                data-slot="pagination-item"
                key={page}
                style={styles?.item}
              >
                {typeof page === 'number'
                  ? renderControl(page, page, 'page', {
                      selected: page === normalizedCurrent,
                    })
                  : renderEllipsis(page)}
              </li>
            ))
          )}

          {nextControl ? (
            <li
              className={classNames?.item}
              data-slot="pagination-item"
              style={styles?.item}
            >
              {nextControl}
            </li>
          ) : null}
          {last !== false && last != null && !simple ? (
            <li
              className={classNames?.item}
              data-slot="pagination-item"
              style={styles?.item}
            >
              {renderControl(
                normalizedPageCount,
                last === true ? <ChevronsRightIcon /> : last,
                'last',
                {
                  iconOnly: last === true,
                  unavailable: normalizedCurrent === normalizedPageCount,
                }
              )}
            </li>
          ) : null}
        </ul>

        {showSizeChanger ? (
          <span
            className={cn('shrink-0', classNames?.pageSize)}
            data-slot="pagination-page-size"
            style={styles?.pageSize}
          >
            <Select<number>
              classNames={{
                trigger: cn(
                  'w-28 text-xs tabular-nums',
                  size === 'sm' && 'h-8 w-28',
                  size === 'lg' && 'h-10 w-32'
                ),
              }}
              disabled={disabled}
              itemToStringLabel={(value) => {
                const label = pageSizeLabel(value);
                return typeof label === 'string' || typeof label === 'number'
                  ? String(label)
                  : String(value);
              }}
              onChange={requestPageSize}
              options={normalizedPageSizeOptions.map((option) => ({
                label: pageSizeLabel(option),
                value: option,
              }))}
              triggerProps={{
                'aria-label': resolvedAriaLabels.pageSize,
              }}
              value={resolvedPageSize}
            />
          </span>
        ) : null}

        {showQuickJumper && !simple ? (
          <form
            className={cn(
              'flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground',
              classNames?.quickJumper
            )}
            data-slot="pagination-quick-jumper"
            onSubmit={(event) => {
              event.preventDefault();
              submitInputPage(quickInputRef, true);
            }}
            style={styles?.quickJumper}
          >
            <span>
              {typeof showQuickJumper === 'object'
                ? (showQuickJumper.label ?? '跳至')
                : '跳至'}
            </span>
            <input
              ref={quickInputRef}
              aria-label={resolvedAriaLabels.quickJumper}
              className="h-8 w-12 appearance-none rounded-md border border-input bg-background px-2 text-center text-foreground tabular-nums outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              disabled={disabled}
              inputMode="numeric"
              max={normalizedPageCount}
              min={1}
              type="number"
            />
            <span>
              {typeof showQuickJumper === 'object'
                ? (showQuickJumper.suffix ?? '页')
                : '页'}
            </span>
            {typeof showQuickJumper === 'object' &&
            showQuickJumper.goButton != null ? (
              <button
                className={buttonVariants({ size: 'sm', variant: 'outline' })}
                disabled={disabled}
                type="submit"
              >
                {showQuickJumper.goButton}
              </button>
            ) : null}
          </form>
        ) : null}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

export {
  Pagination,
  type PaginationAriaLabelContext,
  type PaginationAriaLabels,
  type PaginationClassNames,
  type PaginationItemType,
  type PaginationProps,
  type PaginationQuickJumperOptions,
  type PaginationRenderItemProps,
  type PaginationSimpleOptions,
  type PaginationSize,
  type PaginationStyles,
};
