import * as React from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { cn } from '../lib/utils';

type AccordionIndicatorPosition = 'start' | 'end';

type AccordionItem = {
  content: React.ReactNode;
  disabled?: boolean;
  title: React.ReactNode;
  value: string;
};

type AccordionPresenceProps =
  | {
      hiddenUntilFound: true;
      keepMounted?: never;
    }
  | {
      hiddenUntilFound?: false;
      keepMounted?: boolean;
    };

type AccordionRootProps = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> & {
  defaultValue?: string[];
  disabled?: boolean;
  indicator?: React.ReactElement<AccordionIndicatorProps> | null;
  items: readonly AccordionItem[];
  multiple?: boolean;
  onChange?: (value: string[]) => void;
  value?: string[];
};

type AccordionProps = AccordionRootProps & AccordionPresenceProps;

type AccordionIndicatorState = {
  disabled: boolean;
  open: boolean;
  value: string;
};

type AccordionIndicatorProps = Omit<
  React.ComponentProps<'span'>,
  'children'
> & {
  children?:
    React.ReactNode | ((state: AccordionIndicatorState) => React.ReactNode);
  position?: AccordionIndicatorPosition;
};

const AccordionIndicatorContext = React.createContext<
  AccordionIndicatorState | undefined
>(undefined);

const AccordionIndicator = ({
  children,
  className,
  position = 'end',
  ...props
}: AccordionIndicatorProps) => {
  const state = React.useContext(AccordionIndicatorContext);

  if (!state) {
    throw new Error(
      'Accordion.Indicator must be rendered through the Accordion indicator prop.'
    );
  }

  const rendersState = typeof children === 'function';
  const content = rendersState
    ? children(state)
    : (children ??
      (position === 'start' ? <ChevronRightIcon /> : <ChevronLeftIcon />));

  if (content == null) return null;

  return (
    <span
      {...props}
      aria-hidden="true"
      data-disabled={state.disabled ? '' : undefined}
      data-open={state.open ? '' : undefined}
      data-position={position}
      data-slot="accordion-indicator"
      className={cn(
        'pointer-events-none inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 motion-reduce:transition-none [&_svg]:size-4',
        position === 'start' ? 'order-first' : 'ml-auto',
        !rendersState && state.open && position === 'start' && 'rotate-90',
        !rendersState && state.open && position === 'end' && '-rotate-90',
        className
      )}
    >
      {content}
    </span>
  );
};

const AccordionRoot = ({
  className,
  indicator,
  items,
  onChange,
  ...props
}: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        'flex w-full flex-col overflow-hidden rounded-2xl border',
        className
      )}
      onValueChange={onChange}
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
              className="relative flex flex-1 items-start justify-start gap-4 border border-transparent p-4 text-left text-sm font-medium transition-all outline-none hover:underline aria-disabled:pointer-events-none aria-disabled:opacity-50"
              render={(triggerProps, state) => (
                <button {...triggerProps}>
                  {item.title}
                  <AccordionIndicatorContext.Provider
                    value={{
                      disabled: state.disabled,
                      open: state.open,
                      value: item.value,
                    }}
                  >
                    {indicator === undefined ? (
                      <AccordionIndicator />
                    ) : (
                      indicator
                    )}
                  </AccordionIndicatorContext.Provider>
                </button>
              )}
            />
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
};

const Accordion = Object.assign(AccordionRoot, {
  Indicator: AccordionIndicator,
});

export {
  Accordion,
  type AccordionIndicatorPosition,
  type AccordionIndicatorProps,
  type AccordionIndicatorState,
  type AccordionItem,
  type AccordionProps,
};
