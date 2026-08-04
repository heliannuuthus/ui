import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

import { cn } from '../lib/utils';
import { buttonVariants } from './button';

type PaginationProps = Omit<React.ComponentProps<'nav'>, 'onChange'> & {
  ariaLabels?: {
    more?: string;
    navigation?: string;
    next?: string;
    previous?: string;
  };
  current: number;
  getItemHref?: (page: number) => string;
  nextText?: React.ReactNode;
  onChange?: (page: number) => void;
  pageCount: number;
  previousText?: React.ReactNode;
  siblingCount?: number;
};

const getVisiblePages = (
  current: number,
  pageCount: number,
  siblingCount: number
) => {
  if (pageCount <= siblingCount * 2 + 5) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const pages: Array<number | 'ellipsis-start' | 'ellipsis-end'> = [1];
  const start = Math.max(2, current - siblingCount);
  const end = Math.min(pageCount - 1, current + siblingCount);

  if (start > 2) pages.push('ellipsis-start');
  for (let page = start; page <= end; page += 1) pages.push(page);
  if (end < pageCount - 1) pages.push('ellipsis-end');
  pages.push(pageCount);
  return pages;
};

const Pagination = ({
  'aria-label': ariaLabel,
  ariaLabels,
  className,
  current,
  getItemHref,
  nextText = '下一页',
  onChange,
  pageCount,
  previousText = '上一页',
  siblingCount = 1,
  ...props
}: PaginationProps) => {
  const normalizedPageCount = Math.max(1, Math.trunc(pageCount));
  const normalizedCurrent = Math.min(
    normalizedPageCount,
    Math.max(1, Math.trunc(current))
  );
  const pages = getVisiblePages(
    normalizedCurrent,
    normalizedPageCount,
    Math.max(0, Math.trunc(siblingCount))
  );
  const resolvedAriaLabels = {
    more: '更多页面',
    navigation: '分页',
    next: '前往下一页',
    previous: '前往上一页',
    ...ariaLabels,
  };

  const renderControl = (
    page: number,
    label: React.ReactNode,
    options?: { active?: boolean; disabled?: boolean; ariaLabel?: string }
  ) => {
    const commonProps = {
      'aria-current': options?.active ? ('page' as const) : undefined,
      'aria-disabled': options?.disabled || undefined,
      'aria-label': options?.ariaLabel,
      className: cn(
        buttonVariants({
          variant: options?.active ? 'outline' : 'ghost',
          size: typeof label === 'number' ? 'icon' : 'default',
        }),
        options?.disabled && 'pointer-events-none opacity-50'
      ),
      'data-active': options?.active || undefined,
      'data-slot': 'pagination-link',
    };

    if (getItemHref != null) {
      return (
        <a
          {...commonProps}
          href={getItemHref(page)}
          onClick={(event) => {
            if (options?.disabled) event.preventDefault();
            else onChange?.(page);
          }}
        >
          {label}
        </a>
      );
    }

    return (
      <button
        {...commonProps}
        disabled={options?.disabled}
        onClick={() => onChange?.(page)}
        type="button"
      >
        {label}
      </button>
    );
  };

  return (
    <nav
      aria-label={ariaLabel ?? resolvedAriaLabels.navigation}
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    >
      <ul data-slot="pagination-content" className="flex items-center gap-1">
        <li data-slot="pagination-item">
          {renderControl(
            normalizedCurrent - 1,
            <>
              <ChevronLeftIcon data-icon="inline-start" />
              <span className="hidden sm:block">{previousText}</span>
            </>,
            {
              disabled: normalizedCurrent === 1,
              ariaLabel: resolvedAriaLabels.previous,
            }
          )}
        </li>
        {pages.map((page) => (
          <li data-slot="pagination-item" key={page}>
            {typeof page === 'number' ? (
              renderControl(page, page, { active: page === normalizedCurrent })
            ) : (
              <span
                aria-hidden
                data-slot="pagination-ellipsis"
                className="flex size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4"
              >
                <MoreHorizontalIcon />
                <span className="sr-only">{resolvedAriaLabels.more}</span>
              </span>
            )}
          </li>
        ))}
        <li data-slot="pagination-item">
          {renderControl(
            normalizedCurrent + 1,
            <>
              <span className="hidden sm:block">{nextText}</span>
              <ChevronRightIcon data-icon="inline-end" />
            </>,
            {
              disabled: normalizedCurrent === normalizedPageCount,
              ariaLabel: resolvedAriaLabels.next,
            }
          )}
        </li>
      </ul>
    </nav>
  );
};

export { Pagination, type PaginationProps };
