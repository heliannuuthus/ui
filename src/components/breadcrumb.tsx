import * as React from 'react';
import {
  ChevronRightIcon,
  CircleIcon,
  HomeIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

import { cn } from '../lib/utils';
import { DropdownMenu, type DropdownMenuEntry } from './dropdown-menu';

type BreadcrumbMenuItem = {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
};

type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  menu?: BreadcrumbMenuItem[];
  separator?: BreadcrumbSeparator;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type BreadcrumbSeparator = 'chevron' | 'slash' | 'dot' | React.ReactNode;

type BreadcrumbProps = Omit<React.ComponentProps<'nav'>, 'children'> & {
  items: BreadcrumbItem[];
  variant?: 'default' | 'underline' | 'pill';
  separator?: BreadcrumbSeparator;
  size?: 'sm' | 'default' | 'lg';
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  homeIcon?: boolean | React.ReactNode;
  collapseLabel?: string;
};

type BreadcrumbEntry =
  | { type: 'item'; item: BreadcrumbItem; index: number }
  | { type: 'collapsed'; items: BreadcrumbItem[] };

const getEntries = (
  items: BreadcrumbItem[],
  maxItems: number | undefined,
  itemsBeforeCollapse: number,
  itemsAfterCollapse: number
): BreadcrumbEntry[] => {
  if (!maxItems || items.length <= maxItems || maxItems < 2) {
    return items.map((item, index) => ({ type: 'item', item, index }));
  }

  const before = Math.max(1, Math.min(itemsBeforeCollapse, maxItems - 1));
  const after = Math.max(1, Math.min(itemsAfterCollapse, maxItems - before));
  const hiddenEnd = Math.max(before, items.length - after);

  return [
    ...items.slice(0, before).map((item, index) => ({
      type: 'item' as const,
      item,
      index,
    })),
    { type: 'collapsed' as const, items: items.slice(before, hiddenEnd) },
    ...items.slice(hiddenEnd).map((item, index) => ({
      type: 'item' as const,
      item,
      index: hiddenEnd + index,
    })),
  ];
};

const Separator = ({ value }: { value: BreadcrumbSeparator }) => {
  const content =
    value === 'chevron' ? (
      <ChevronRightIcon />
    ) : value === 'slash' ? (
      <span className="px-0.5 text-[0.9em] leading-none">/</span>
    ) : value === 'dot' ? (
      <CircleIcon className="fill-current" />
    ) : (
      value
    );

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className="flex shrink-0 items-center text-muted-foreground/65 [&>svg]:size-3.5 data-[separator=dot]:[&>svg]:size-1"
      data-separator={value === 'dot' ? 'dot' : undefined}
    >
      {content}
    </li>
  );
};

const getMenuEntries = (items: BreadcrumbMenuItem[]): DropdownMenuEntry[] => {
  return items.map((item) => ({
    label: item.label,
    href: item.href,
    icon: item.icon,
    disabled: item.disabled,
    onSelect: item.onSelect,
  }));
};

const ItemMenu = ({
  item,
  className,
}: {
  item: BreadcrumbItem;
  className: string;
}) => {
  return (
    <DropdownMenu
      trigger={
        <button className={className} type="button">
          {item.icon}
          {item.label}
          <ChevronRightIcon className="size-3 rotate-90 opacity-60" />
        </button>
      }
      items={getMenuEntries(item.menu ?? [])}
      classNames={{ content: 'w-auto min-w-40' }}
    />
  );
};

const CollapsedItems = ({
  items,
  label,
  className,
}: {
  items: BreadcrumbItem[];
  label: string;
  className: string;
}) => {
  return (
    <DropdownMenu
      trigger={
        <button
          aria-label={label}
          className={cn(className, 'px-1.5')}
          type="button"
        >
          <MoreHorizontalIcon />
        </button>
      }
      items={getMenuEntries(items)}
      classNames={{ content: 'w-auto min-w-40' }}
    />
  );
};

const Breadcrumb = ({
  items,
  variant = 'default',
  separator = 'chevron',
  size = 'default',
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 2,
  homeIcon = false,
  collapseLabel = '显示完整路径',
  className,
  ...props
}: BreadcrumbProps) => {
  const entries = getEntries(
    items,
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse
  );
  const itemClassName = cn(
    'inline-flex min-w-0 items-center gap-1.5 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/35',
    size === 'sm' && 'text-xs',
    size === 'default' && 'text-sm',
    size === 'lg' && 'text-base',
    variant === 'default' && 'hover:text-foreground',
    variant === 'underline' &&
      'rounded-none underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground',
    variant === 'pill' &&
      'rounded-full bg-muted px-2.5 py-1 text-foreground hover:bg-accent'
  );

  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      data-variant={variant}
      className={cn(className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground sm:gap-2">
        {entries.map((entry, entryIndex) => {
          const previousEntry = entries[entryIndex - 1];
          const previousItem =
            previousEntry?.type === 'item' ? previousEntry.item : undefined;
          const entrySeparator = previousItem?.separator ?? separator;

          return (
            <React.Fragment
              key={
                entry.type === 'collapsed'
                  ? 'collapsed'
                  : `${entry.index}-${String(entry.item.label)}`
              }
            >
              {entryIndex > 0 && <Separator value={entrySeparator} />}
              <li className="inline-flex min-w-0 items-center">
                {entry.type === 'collapsed' ? (
                  <CollapsedItems
                    items={entry.items}
                    label={collapseLabel}
                    className={itemClassName}
                  />
                ) : entry.item.menu?.length ? (
                  <ItemMenu item={entry.item} className={itemClassName} />
                ) : entry.index === items.length - 1 ? (
                  <span
                    aria-current="page"
                    className={cn(
                      itemClassName,
                      variant !== 'pill' && 'font-medium text-foreground'
                    )}
                  >
                    {entry.item.icon}
                    {entry.item.label}
                  </span>
                ) : (
                  <a
                    href={entry.item.href}
                    aria-disabled={entry.item.disabled || undefined}
                    className={cn(
                      itemClassName,
                      entry.item.disabled &&
                        'pointer-events-none cursor-not-allowed opacity-45'
                    )}
                    onClick={entry.item.onClick}
                  >
                    {entry.index === 0 && homeIcon ? (
                      homeIcon === true ? (
                        <HomeIcon />
                      ) : (
                        homeIcon
                      )
                    ) : (
                      entry.item.icon
                    )}
                    {entry.item.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export {
  Breadcrumb,
  type BreadcrumbItem,
  type BreadcrumbMenuItem,
  type BreadcrumbProps,
  type BreadcrumbSeparator,
};
