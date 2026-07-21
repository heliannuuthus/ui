import * as React from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '../lib/utils';

type CollapsibleProps = CollapsiblePrimitive.Root.Props;
type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props;
type CollapsibleHeaderProps = CollapsiblePrimitive.Trigger.Props;
type CollapsibleContentProps = CollapsiblePrimitive.Panel.Props;
type CollapsibleFooterProps = React.ComponentProps<'div'>;
type CollapsibleIndicatorProps = React.ComponentProps<'span'>;

function Collapsible({ className, ...props }: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root
      className={cn('group/collapsible', className)}
      data-slot="collapsible"
      {...props}
    />
  );
}

function CollapsibleTrigger({ className, ...props }: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.Trigger
      className={cn('group/collapsible-trigger', className)}
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleHeader({ className, ...props }: CollapsibleHeaderProps) {
  return (
    <CollapsiblePrimitive.Trigger
      className={cn(
        'group/collapsible-trigger flex w-full items-center gap-3 px-4 py-3 text-left text-sm outline-none transition-colors hover:bg-muted/60 focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      data-slot="collapsible-header"
      {...props}
    />
  );
}

function CollapsibleIndicator({
  className,
  children,
  ...props
}: CollapsibleIndicatorProps) {
  return (
    <span
      aria-hidden
      className={cn(
        'ml-auto grid size-5 shrink-0 place-items-center text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        className
      )}
      data-slot="collapsible-indicator"
      {...props}
    >
      {children ?? <ChevronDownIcon className="size-4" />}
    </span>
  );
}

function CollapsibleContent({ className, ...props }: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Panel
      className={cn(
        "h-(--collapsible-panel-height) origin-top overflow-hidden transition-[height,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[height,opacity,transform] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-ending-style:scale-y-95 data-ending-style:-translate-y-1 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:scale-y-95 data-starting-style:-translate-y-1 data-starting-style:opacity-0 motion-reduce:transform-none motion-reduce:transition-none",
        className
      )}
      data-slot="collapsible-content"
      {...props}
    />
  );
}

function CollapsibleFooter({ className, ...props }: CollapsibleFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 border-t px-4 py-3 text-sm',
        className
      )}
      data-slot="collapsible-footer"
      {...props}
    />
  );
}

export {
  type CollapsibleContentProps,
  type CollapsibleFooterProps,
  type CollapsibleHeaderProps,
  type CollapsibleIndicatorProps,
  type CollapsibleProps,
  type CollapsibleTriggerProps,
  Collapsible,
  CollapsibleContent,
  CollapsibleFooter,
  CollapsibleHeader,
  CollapsibleIndicator,
  CollapsibleTrigger,
};
