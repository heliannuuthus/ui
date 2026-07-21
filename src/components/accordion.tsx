import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';

import { cn } from '../lib/utils';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from 'lucide-react';

function Accordion({
  className,
  orientation = 'vertical',
  ...props
}: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      data-orientation={orientation}
      className={cn(
        'flex w-full flex-col overflow-hidden rounded-2xl border',
        className
      )}
      orientation={orientation}
      {...props}
    />
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
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'relative flex flex-1 items-start justify-between gap-6 border border-transparent p-4 text-left text-sm font-medium transition-all outline-none hover:underline aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          data-accordion-orientation-icon="vertical"
          data-accordion-state-icon="closed"
          className="pointer-events-none shrink-0"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          data-accordion-orientation-icon="vertical"
          data-accordion-state-icon="open"
          className="pointer-events-none shrink-0"
        />
        <ChevronRightIcon
          data-slot="accordion-trigger-icon"
          data-accordion-orientation-icon="horizontal"
          data-accordion-state-icon="closed"
          className="pointer-events-none shrink-0"
        />
        <ChevronLeftIcon
          data-slot="accordion-trigger-icon"
          data-accordion-orientation-icon="horizontal"
          data-accordion-state-icon="open"
          className="pointer-events-none shrink-0"
        />
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

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
