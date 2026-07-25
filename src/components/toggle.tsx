'use client';

import * as React from 'react';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

const toggleVariants = cva(
  "group/toggle inline-flex h-9 min-w-9 items-center justify-center gap-1 rounded-3xl px-3 text-sm font-medium whitespace-nowrap transition-colors outline-none has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary/85 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type ToggleVariantProps = VariantProps<typeof toggleVariants>;

type ToggleProps<Value extends string = string> = Omit<
  TogglePrimitive.Props<Value>,
  'onChange' | 'onPressedChange'
> &
  ToggleVariantProps & {
    onChange?: (
      pressed: boolean,
      eventDetails: TogglePrimitive.ChangeEventDetails
    ) => void;
  };

type ToggleGroupProps<Value extends string = string> = Omit<
  ToggleGroupPrimitive.Props<Value>,
  'onChange' | 'onValueChange'
> &
  ToggleVariantProps & {
    onChange?: (
      value: Value[],
      eventDetails: ToggleGroupPrimitive.ChangeEventDetails
    ) => void;
  };

const ToggleGroupContext = React.createContext<ToggleVariantProps | null>(null);

function ToggleRoot<Value extends string = string>({
  className,
  variant = 'default',
  onChange,
  ...props
}: ToggleProps<Value>) {
  const group = React.useContext(ToggleGroupContext);
  const resolvedVariant = group?.variant ?? variant;

  return (
    <TogglePrimitive
      data-slot={group ? 'toggle-group-item' : 'toggle'}
      data-variant={resolvedVariant}
      className={cn(
        group && 'shrink-0',
        toggleVariants({
          variant: resolvedVariant,
          className,
        })
      )}
      onPressedChange={onChange}
      {...props}
    />
  );
}

function ToggleGroup<Value extends string = string>({
  children,
  className,
  onChange,
  orientation = 'horizontal',
  variant = 'default',
  ...props
}: ToggleGroupProps<Value>) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        'group/toggle-group flex w-fit flex-row items-center gap-2 data-vertical:flex-col data-vertical:items-stretch',
        className
      )}
      onValueChange={onChange}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

const Toggle = Object.assign(ToggleRoot, { Group: ToggleGroup });

export { Toggle, toggleVariants };
export type { ToggleGroupProps, ToggleProps };
