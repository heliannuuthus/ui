import * as React from 'react';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

type TabsAnimation = 'none' | 'fade' | 'slide';

const tabsListVariants = cva(
  'group/tabs-list relative isolate inline-flex w-fit items-center justify-center rounded-full p-1 text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:rounded-2xl data-[centered=true]:self-center data-[variant=line]:rounded-none',
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

type TabsProps = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> &
  VariantProps<typeof tabsListVariants> & {
    animation?: TabsAnimation;
    centered?: boolean;
    defaultValue?: string | null;
    indicatorClassName?: string;
    items: readonly TabsItem[];
    listClassName?: string;
    onValueChange?: (value: string | null) => void;
    orientation?: 'horizontal' | 'vertical';
    panelClassName?: string;
    tabClassName?: string;
    value?: string | null;
  };

function Tabs({
  animation = 'fade',
  centered = false,
  className,
  indicatorClassName,
  items,
  listClassName,
  orientation = 'horizontal',
  panelClassName,
  tabClassName,
  variant = 'default',
  ...props
}: TabsProps) {
  const indicatorVariants = {
    default: 'rounded-full bg-primary shadow-sm',
    line: 'rounded-full bg-primary group-data-horizontal/tabs-list:top-auto group-data-horizontal/tabs-list:bottom-0 group-data-horizontal/tabs-list:h-0.5 group-data-vertical/tabs-list:right-0 group-data-vertical/tabs-list:left-auto group-data-vertical/tabs-list:w-0.5',
    outline: 'rounded-full border border-border bg-background shadow-sm',
    soft: 'rounded-full bg-primary/12',
  } as const;

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      data-animation={animation}
      className={cn(
        'group/tabs flex gap-2 data-horizontal:flex-col',
        className
      )}
      orientation={orientation}
      {...props}
    >
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={variant}
        data-centered={centered}
        className={cn(tabsListVariants({ variant }), listClassName)}
      >
        {items.map((item) => (
          <TabsPrimitive.Tab
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            data-slot="tabs-trigger"
            className={cn(
              "relative z-1 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-2 rounded-full border border-transparent! bg-transparent px-3 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-colors duration-150 group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:rounded-2xl group-data-vertical/tabs:px-3 group-data-vertical/tabs:py-1.5 hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              'data-active:text-primary-foreground dark:data-active:text-primary-foreground',
              'group-data-[variant=line]/tabs-list:data-active:text-primary group-data-[variant=soft]/tabs-list:data-active:text-primary group-data-[variant=outline]/tabs-list:data-active:text-foreground',
              tabClassName
            )}
          >
            {item.label}
          </TabsPrimitive.Tab>
        ))}
        <TabsPrimitive.Indicator
          data-slot="tabs-indicator"
          className={cn(
            'pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) -z-1 h-(--active-tab-height) w-(--active-tab-width) transition-[top,left,width,height] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
            indicatorVariants[variant ?? 'default'],
            indicatorClassName
          )}
        />
      </TabsPrimitive.List>
      {items.map((item) => (
        <TabsPrimitive.Panel
          key={item.value}
          value={item.value}
          data-slot="tabs-content"
          className={cn(
            'tabs-content-motion flex-1 text-sm outline-none',
            panelClassName
          )}
        >
          {item.content}
        </TabsPrimitive.Panel>
      ))}
    </TabsPrimitive.Root>
  );
}

export {
  Tabs,
  tabsListVariants,
  type TabsAnimation,
  type TabsItem,
  type TabsProps,
};
