import * as React from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '../lib/utils';

type AccordionIndicatorPosition = 'start' | 'end';

type AccordionItem = {
  content: React.ReactNode;
  disabled?: boolean;
  title: React.ReactNode;
  value: string;
};

type AccordionProps = Omit<
  AccordionPrimitive.Root.Props,
  'children' | 'orientation'
> & {
  expandedIndicator?: React.ReactNode;
  indicator?: React.ReactNode;
  indicatorPosition?: AccordionIndicatorPosition;
  items: readonly AccordionItem[];
};

type AccordionIndicatorProps = {
  expandedIndicator?: React.ReactNode;
  indicator?: React.ReactNode;
  position: AccordionIndicatorPosition;
};

function AccordionIndicator({
  expandedIndicator,
  indicator,
  position,
}: AccordionIndicatorProps) {
  const collapsedIndicator =
    indicator === undefined ? (
      position === 'start' ? (
        <span
          data-slot="accordion-disclosure-triangle"
          className="size-0 border-y-4 border-l-[6px] border-y-transparent border-l-current"
        />
      ) : (
        <ChevronDownIcon />
      )
    ) : (
      indicator
    );
  const hasExpandedIndicator = expandedIndicator !== undefined;

  if (
    collapsedIndicator == null &&
    (!hasExpandedIndicator || expandedIndicator == null)
  ) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      data-has-expanded-indicator={hasExpandedIndicator ? 'true' : undefined}
      data-slot="accordion-indicator"
      className={cn(
        'pointer-events-none inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 motion-reduce:transition-none [&_svg]:size-4',
        position === 'start' ? 'order-first' : 'ml-auto'
      )}
    >
      <span data-slot="accordion-indicator-collapsed">
        {collapsedIndicator}
      </span>
      {hasExpandedIndicator ? (
        <span data-slot="accordion-indicator-expanded">
          {expandedIndicator}
        </span>
      ) : null}
    </span>
  );
}

function Accordion({
  className,
  expandedIndicator,
  indicator,
  indicatorPosition = 'end',
  items,
  ...props
}: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        'flex w-full flex-col overflow-hidden rounded-2xl border',
        className
      )}
      {...props}
      orientation="vertical"
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          data-slot="accordion-item"
          className="not-last:border-b data-open:bg-muted/50"
        >
          <AccordionPrimitive.Header
            data-slot="accordion-header"
            className="flex"
          >
            <AccordionPrimitive.Trigger
              data-slot="accordion-trigger"
              data-indicator-position={indicatorPosition}
              className="relative flex flex-1 items-start justify-start gap-4 border border-transparent p-4 text-left text-sm font-medium transition-all outline-none hover:underline aria-disabled:pointer-events-none aria-disabled:opacity-50"
            >
              {item.title}
              <AccordionIndicator
                expandedIndicator={expandedIndicator}
                indicator={indicator}
                position={indicatorPosition}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Panel
            data-slot="accordion-content"
            className="overflow-hidden px-4 text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
          >
            <div
              data-slot="accordion-content-inner"
              className="h-(--accordion-panel-height) pt-0 pb-4 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4"
            >
              {item.content}
            </div>
          </AccordionPrimitive.Panel>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export {
  Accordion,
  type AccordionIndicatorPosition,
  type AccordionItem,
  type AccordionProps,
};
