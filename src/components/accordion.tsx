import * as React from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';

import { cn } from '../lib/utils';
import { ChevronDownIcon } from 'lucide-react';

type AccordionIndicatorPosition = 'start' | 'end';

type AccordionIndicatorOptions = {
  indicator?: React.ReactNode;
  expandedIndicator?: React.ReactNode;
  indicatorPosition?: AccordionIndicatorPosition;
};

type AccordionProps = Omit<AccordionPrimitive.Root.Props, 'orientation'> &
  AccordionIndicatorOptions;

type AccordionIndicatorContextValue = {
  expandedIndicator: React.ReactNode;
  hasExpandedIndicator: boolean;
  indicator: React.ReactNode;
  indicatorPosition: AccordionIndicatorPosition;
};

const AccordionIndicatorContext =
  React.createContext<AccordionIndicatorContextValue>({
    expandedIndicator: undefined,
    hasExpandedIndicator: false,
    indicator: undefined,
    indicatorPosition: 'end',
  });

function Accordion({
  className,
  indicator,
  expandedIndicator,
  indicatorPosition = 'end',
  ...props
}: AccordionProps) {
  return (
    <AccordionIndicatorContext.Provider
      value={{
        indicator,
        expandedIndicator,
        hasExpandedIndicator: expandedIndicator !== undefined,
        indicatorPosition,
      }}
    >
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn(
          'flex w-full flex-col overflow-hidden rounded-2xl border',
          className
        )}
        {...props}
        orientation="vertical"
      />
    </AccordionIndicatorContext.Provider>
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('not-last:border-b data-open:bg-muted/50', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  const {
    indicator,
    expandedIndicator,
    hasExpandedIndicator,
    indicatorPosition,
  } = React.useContext(AccordionIndicatorContext);
  const collapsedIndicator =
    indicator === undefined ? <ChevronDownIcon /> : indicator;
  const hasIndicator =
    collapsedIndicator != null ||
    (hasExpandedIndicator && expandedIndicator != null);

  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        data-indicator-position={indicatorPosition}
        className={cn(
          'relative flex flex-1 items-start justify-start gap-4 border border-transparent p-4 text-left text-sm font-medium transition-all outline-none hover:underline aria-disabled:pointer-events-none aria-disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
        {hasIndicator && (
          <span
            aria-hidden="true"
            data-has-expanded-indicator={
              hasExpandedIndicator ? 'true' : undefined
            }
            data-slot="accordion-indicator"
            className={cn(
              'pointer-events-none inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 [&_svg]:size-4',
              indicatorPosition === 'start' ? 'order-first' : 'ml-auto'
            )}
          >
            <span data-slot="accordion-indicator-collapsed">
              {collapsedIndicator}
            </span>
            {hasExpandedIndicator && (
              <span data-slot="accordion-indicator-expanded">
                {expandedIndicator}
              </span>
            )}
          </span>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden px-4 text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        data-slot="accordion-content-inner"
        className={cn(
          'h-(--accordion-panel-height) pt-0 pb-4 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionIndicatorPosition,
  type AccordionProps,
};
