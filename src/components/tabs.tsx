import * as React from 'react';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type TabsAnimation = 'none' | 'fade' | 'slide';

type TabsListVariantOptions = {
  class?: never;
  className?: string;
  variant?: 'default' | 'line' | 'outline' | 'soft' | null;
};

const tabsListVariants: (props?: TabsListVariantOptions) => string = cva(
  'no-scrollbar group/tabs-list relative isolate inline-flex w-fit max-w-full items-center justify-center rounded-full p-1 text-muted-foreground group-data-horizontal/tabs:h-9 group-data-horizontal/tabs:justify-start group-data-horizontal/tabs:overflow-x-auto group-data-horizontal/tabs:overflow-y-hidden group-data-horizontal/tabs:overscroll-x-contain group-data-horizontal/tabs:scroll-smooth group-data-horizontal/tabs:snap-x group-data-horizontal/tabs:snap-proximity group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:rounded-2xl data-[centered=true]:self-center data-[variant=line]:rounded-none motion-reduce:scroll-auto',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        line: 'gap-1 bg-transparent',
        outline: 'gap-1 border border-border bg-background',
        soft: 'gap-1 bg-primary/8',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type TabsItem = {
  content: React.ReactNode;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
};

type TabsScrollLabels = {
  end: string;
  start: string;
};

type TabsClassNames = {
  indicator?: string;
  list?: string;
  panel?: string;
  tab?: string;
  viewport?: string;
};

type TabsStyles = {
  indicator?: React.CSSProperties;
  list?: React.CSSProperties;
  panel?: React.CSSProperties;
  tab?: React.CSSProperties;
  viewport?: React.CSSProperties;
};

type TabsProps = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> &
  VariantProps<typeof tabsListVariants> & {
    animation?: TabsAnimation;
    centered?: boolean;
    classNames?: TabsClassNames;
    defaultValue?: string | null;
    items: readonly TabsItem[];
    onChange?: (value: string | null) => void;
    orientation?: 'horizontal' | 'vertical';
    scrollLabels?: Partial<TabsScrollLabels>;
    styles?: TabsStyles;
    value?: string | null;
  };

type TabsProviderDefaults = Pick<
  TabsProps,
  'animation' | 'centered' | 'variant'
>;

const Tabs = ({
  animation: animationProp,
  centered: centeredProp,
  className,
  classNames,
  items,
  onChange,
  orientation = 'horizontal',
  scrollLabels,
  styles,
  variant: variantProp,
  ...props
}: TabsProps) => {
  const defaults = useComponentDefaults('Tabs');
  const animation = animationProp ?? defaults.animation ?? 'fade';
  const centered = centeredProp ?? defaults.centered ?? false;
  const variant = variantProp ?? defaults.variant ?? 'default';
  const listRef = React.useRef<HTMLDivElement>(null);
  const [overflowState, setOverflowState] = React.useState({
    end: false,
    overflow: false,
    start: false,
  });
  const indicatorVariants = {
    default: 'rounded-full bg-primary shadow-sm',
    line: 'rounded-full bg-primary group-data-horizontal/tabs-list:top-auto group-data-horizontal/tabs-list:bottom-0 group-data-horizontal/tabs-list:h-0.5 group-data-vertical/tabs-list:right-0 group-data-vertical/tabs-list:left-auto group-data-vertical/tabs-list:w-0.5',
    outline: 'rounded-full border border-border bg-background shadow-sm',
    soft: 'rounded-full bg-primary/12',
  } as const;
  const updateOverflowState = React.useCallback(() => {
    const list = listRef.current;

    if (list == null || orientation !== 'horizontal') {
      setOverflowState((current) =>
        current.overflow || current.start || current.end
          ? { end: false, overflow: false, start: false }
          : current
      );
      return;
    }

    const tabs = Array.from(
      list.querySelectorAll<HTMLElement>('[data-slot="tabs-trigger"]')
    );
    const firstTab = tabs[0];
    const lastTab = tabs[tabs.length - 1];
    const overflow = list.scrollWidth > list.clientWidth + 1;
    const listRect = list.getBoundingClientRect();
    const direction = getComputedStyle(list).direction;
    const firstRect = firstTab?.getBoundingClientRect();
    const lastRect = lastTab?.getBoundingClientRect();
    const start =
      overflow &&
      firstRect != null &&
      (direction === 'rtl'
        ? firstRect.right > listRect.right + 1
        : firstRect.left < listRect.left - 1);
    const end =
      overflow &&
      lastRect != null &&
      (direction === 'rtl'
        ? lastRect.left < listRect.left - 1
        : lastRect.right > listRect.right + 1);
    const next = { end, overflow, start };

    setOverflowState((current) =>
      current.end === next.end &&
      current.overflow === next.overflow &&
      current.start === next.start
        ? current
        : next
    );
  }, [orientation]);

  React.useEffect(() => {
    const list = listRef.current;
    if (list == null) return;

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(updateOverflowState);
    resizeObserver?.observe(list);
    for (const tab of list.querySelectorAll('[data-slot="tabs-trigger"]')) {
      resizeObserver?.observe(tab);
    }
    list.addEventListener('scroll', updateOverflowState, { passive: true });
    updateOverflowState();

    return () => {
      resizeObserver?.disconnect();
      list.removeEventListener('scroll', updateOverflowState);
    };
  }, [items, updateOverflowState]);

  const scrollTabs = (side: 'start' | 'end') => {
    const list = listRef.current;
    if (list == null) return;

    const direction = getComputedStyle(list).direction;
    const distance = Math.max(120, list.clientWidth * 0.8);
    const forward = side === 'end' ? 1 : -1;
    const rtl = direction === 'rtl' ? -1 : 1;

    list.scrollBy({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      left: distance * forward * rtl,
    });
  };
  const showScrollButtons =
    orientation === 'horizontal' && overflowState.overflow;
  const resolvedScrollLabels = {
    end: scrollLabels?.end ?? 'Scroll tabs forward',
    start: scrollLabels?.start ?? 'Scroll tabs backward',
  };

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      data-animation={animation}
      className={cn(
        'group/tabs flex min-w-0 max-w-full gap-2 data-horizontal:flex-col',
        className
      )}
      onValueChange={onChange}
      orientation={orientation}
      {...props}
    >
      <div
        className={cn(
          'flex min-w-0 max-w-full items-center gap-1 data-[centered=true]:self-center',
          overflowState.overflow ? 'w-full' : 'w-fit'
        )}
        data-centered={centered}
        data-orientation={orientation}
        data-slot="tabs-list-shell"
      >
        {showScrollButtons ? (
          <button
            aria-label={resolvedScrollLabels.start}
            className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground shadow-xs transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-30 [&_svg]:size-4 rtl:[&_svg]:rotate-180"
            data-side="start"
            data-slot="tabs-scroll-button"
            disabled={!overflowState.start}
            onClick={() => scrollTabs('start')}
            type="button"
          >
            <ChevronLeft />
          </button>
        ) : null}
        <TabsPrimitive.List
          ref={listRef}
          data-slot="tabs-list"
          data-variant={variant}
          data-centered={centered}
          className={cn(
            tabsListVariants({ variant }),
            overflowState.overflow && 'min-w-0 flex-1',
            classNames?.list
          )}
          style={{
            scrollbarWidth: orientation === 'horizontal' ? 'none' : undefined,
            ...styles?.list,
          }}
        >
          {items.map((item) => (
            <TabsPrimitive.Tab
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              data-slot="tabs-trigger"
              className={cn(
                "relative z-1 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-2 rounded-full border border-transparent! bg-transparent px-3 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-colors duration-150 group-data-horizontal/tabs-list:flex-none group-data-horizontal/tabs-list:snap-nearest group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:rounded-2xl group-data-vertical/tabs:px-3 group-data-vertical/tabs:py-1.5 hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                'data-active:text-primary-foreground dark:data-active:text-primary-foreground',
                'group-data-[variant=line]/tabs-list:data-active:text-primary group-data-[variant=soft]/tabs-list:data-active:text-primary group-data-[variant=outline]/tabs-list:data-active:text-foreground',
                classNames?.tab
              )}
              style={styles?.tab}
              onFocus={(event) => {
                if (orientation === 'horizontal') {
                  event.currentTarget.scrollIntoView({
                    block: 'nearest',
                    inline: 'nearest',
                  });
                }
              }}
            >
              {item.label}
            </TabsPrimitive.Tab>
          ))}
          <TabsPrimitive.Indicator
            data-slot="tabs-indicator"
            className={cn(
              'pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) -z-1 h-(--active-tab-height) w-(--active-tab-width) transition-[top,left,width,height] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
              indicatorVariants[variant ?? 'default'],
              classNames?.indicator
            )}
            style={styles?.indicator}
          />
        </TabsPrimitive.List>
        {showScrollButtons ? (
          <button
            aria-label={resolvedScrollLabels.end}
            className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground shadow-xs transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-30 [&_svg]:size-4 rtl:[&_svg]:rotate-180"
            data-side="end"
            data-slot="tabs-scroll-button"
            disabled={!overflowState.end}
            onClick={() => scrollTabs('end')}
            type="button"
          >
            <ChevronRight />
          </button>
        ) : null}
      </div>
      <div
        className={cn(
          'relative grid min-w-0 flex-1 overflow-clip',
          classNames?.viewport
        )}
        data-slot="tabs-content-viewport"
        style={styles?.viewport}
      >
        {items.map((item) => (
          <TabsPrimitive.Panel
            key={item.value}
            value={item.value}
            data-slot="tabs-content"
            className={cn(
              'tabs-content-motion col-start-1 row-start-1 min-w-0 text-sm outline-none',
              classNames?.panel
            )}
            style={styles?.panel}
          >
            {item.content}
          </TabsPrimitive.Panel>
        ))}
      </div>
    </TabsPrimitive.Root>
  );
};

export {
  Tabs,
  tabsListVariants,
  type TabsAnimation,
  type TabsClassNames,
  type TabsItem,
  type TabsProps,
  type TabsProviderDefaults,
  type TabsScrollLabels,
  type TabsStyles,
};
