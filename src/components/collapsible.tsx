import * as React from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import type { VariantProps } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { buttonVariants } from './button';

type CollapsibleProps = Omit<
  CollapsiblePrimitive.Root.Props,
  'children' | 'content'
> & {
  content: React.ReactNode;
  contentClassName?: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  headerClassName?: string;
  icon?: React.ReactNode;
  trigger?: React.ReactNode;
  triggerProps?: Omit<
    CollapsiblePrimitive.Trigger.Props,
    'children' | 'className'
  > &
    VariantProps<typeof buttonVariants>;
};

function Collapsible({
  className,
  content,
  contentClassName,
  footer,
  header,
  headerClassName,
  icon = <ChevronDownIcon className="size-4" />,
  trigger,
  triggerProps,
  ...props
}: CollapsibleProps) {
  const {
    size = 'default',
    variant = 'outline',
    ...restTriggerProps
  } = triggerProps ?? {};

  return (
    <CollapsiblePrimitive.Root
      className={cn('group/collapsible', className)}
      data-slot="collapsible"
      {...props}
    >
      {trigger != null ? (
        <div className={headerClassName} data-slot="collapsible-header">
          {header}
          <CollapsiblePrimitive.Trigger
            className={buttonVariants({ size, variant })}
            data-slot="collapsible-trigger"
            {...restTriggerProps}
          >
            {trigger}
          </CollapsiblePrimitive.Trigger>
        </div>
      ) : (
        <CollapsiblePrimitive.Trigger
          className={cn(
            'group/collapsible-trigger flex w-full items-center gap-3 px-4 py-3 text-left text-sm outline-none transition-colors hover:bg-muted/60 focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50',
            headerClassName
          )}
          data-slot="collapsible-header"
          {...restTriggerProps}
        >
          {header}
          {icon != null ? (
            <span
              aria-hidden
              className="ml-auto grid size-5 shrink-0 place-items-center text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-open/collapsible:rotate-180 motion-reduce:transition-none"
              data-slot="collapsible-indicator"
            >
              {icon}
            </span>
          ) : null}
        </CollapsiblePrimitive.Trigger>
      )}
      <CollapsiblePrimitive.Panel
        className={cn(
          "h-(--collapsible-panel-height) origin-top overflow-hidden transition-[height,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[height,opacity,transform] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-ending-style:scale-y-95 data-ending-style:-translate-y-1 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:scale-y-95 data-starting-style:-translate-y-1 data-starting-style:opacity-0 motion-reduce:transform-none motion-reduce:transition-none",
          contentClassName
        )}
        data-slot="collapsible-content"
      >
        {content}
      </CollapsiblePrimitive.Panel>
      {footer != null ? (
        <div
          className="flex items-center justify-between gap-3 border-t px-4 py-3 text-sm"
          data-slot="collapsible-footer"
        >
          {footer}
        </div>
      ) : null}
    </CollapsiblePrimitive.Root>
  );
}

export { Collapsible, type CollapsibleProps };
