import * as React from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import type { VariantProps } from 'class-variance-authority';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { buttonVariants, type ButtonNativeProps } from './button';
import type { OpenStateProps } from './internal/public-types';
import { useComponentDefaults } from './provider';

type CollapsibleTriggerProps = Omit<
  ButtonNativeProps,
  'children' | 'className' | 'href'
> &
  VariantProps<typeof buttonVariants>;

type CollapsibleProviderDefaults = Pick<
  CollapsibleTriggerProps,
  'size' | 'variant'
>;

type CollapsibleClassNames = {
  content?: string;
  header?: string;
};

type CollapsibleStyles = {
  content?: React.CSSProperties;
  header?: React.CSSProperties;
};

type CollapsibleProps = Omit<
  React.ComponentProps<'div'>,
  'children' | 'content'
> &
  OpenStateProps & {
    classNames?: CollapsibleClassNames;
    content: React.ReactNode;
    disabled?: boolean;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    indicator?: boolean | React.ReactNode;
    styles?: CollapsibleStyles;
    trigger?: React.ReactNode;
    triggerProps?: CollapsibleTriggerProps;
  };

const Collapsible = ({
  className,
  classNames,
  content,
  footer,
  header,
  indicator = true,
  styles,
  trigger,
  triggerProps,
  ...props
}: CollapsibleProps) => {
  const defaults = useComponentDefaults('Collapsible');
  const {
    size: sizeProp,
    variant: variantProp,
    ...restTriggerProps
  } = triggerProps ?? {};
  const size = sizeProp ?? defaults.size ?? 'default';
  const variant = variantProp ?? defaults.variant ?? 'outline';
  const resolvedIndicator =
    indicator === true ? (
      trigger == null ? (
        <ChevronDownIcon className="size-4" />
      ) : (
        <ChevronRightIcon className="size-4" />
      )
    ) : (
      indicator
    );

  return (
    <CollapsiblePrimitive.Root
      className={cn('group/collapsible', className)}
      data-slot="collapsible"
      {...props}
    >
      {trigger != null ? (
        <div
          className={classNames?.header}
          data-slot="collapsible-header"
          style={styles?.header}
        >
          {header}
          <CollapsiblePrimitive.Trigger
            className={buttonVariants({ size, variant })}
            data-slot="collapsible-trigger"
            {...restTriggerProps}
          >
            {trigger}
            {resolvedIndicator !== false && resolvedIndicator != null ? (
              <span
                aria-hidden
                className="grid size-4 shrink-0 place-items-center text-current transition-transform duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-open/collapsible:rotate-90 motion-reduce:transition-none"
                data-slot="collapsible-trigger-indicator"
              >
                {resolvedIndicator}
              </span>
            ) : null}
          </CollapsiblePrimitive.Trigger>
        </div>
      ) : (
        <CollapsiblePrimitive.Trigger
          className={cn(
            'group/collapsible-trigger flex w-full items-center gap-3 px-4 py-3 text-left text-sm outline-none transition-colors hover:bg-muted/60 focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50',
            classNames?.header
          )}
          data-slot="collapsible-header"
          style={styles?.header}
          {...restTriggerProps}
        >
          {header}
          {resolvedIndicator !== false && resolvedIndicator != null ? (
            <span
              aria-hidden
              className="ml-auto grid size-5 shrink-0 place-items-center text-muted-foreground transition-transform duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-open/collapsible:rotate-180 motion-reduce:transition-none"
              data-slot="collapsible-indicator"
            >
              {resolvedIndicator}
            </span>
          ) : null}
        </CollapsiblePrimitive.Trigger>
      )}
      <CollapsiblePrimitive.Panel
        className={cn(
          "h-(--collapsible-panel-height) origin-top overflow-hidden transition-[height,opacity,transform] duration-240 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[height,opacity,transform] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-ending-style:-translate-y-1.5 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:-translate-y-1.5 data-starting-style:opacity-0 motion-reduce:transform-none motion-reduce:transition-none",
          classNames?.content
        )}
        data-slot="collapsible-content"
        style={styles?.content}
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
};

export {
  Collapsible,
  type CollapsibleClassNames,
  type CollapsibleProps,
  type CollapsibleProviderDefaults,
  type CollapsibleStyles,
  type CollapsibleTriggerProps,
};
