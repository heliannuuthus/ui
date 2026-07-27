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

type ToggleProps = Omit<
  TogglePrimitive.Props<string>,
  | 'defaultPressed'
  | 'defaultValue'
  | 'onChange'
  | 'onPressedChange'
  | 'pressed'
  | 'value'
> &
  ToggleVariantProps & {
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (
      value: boolean,
      eventDetails: TogglePrimitive.ChangeEventDetails
    ) => void;
  };

type ToggleGroupOption<Value extends string = string> = Omit<
  TogglePrimitive.Props<Value>,
  | 'children'
  | 'defaultPressed'
  | 'onChange'
  | 'onPressedChange'
  | 'pressed'
  | 'value'
> & {
  label: React.ReactNode;
  value: Value;
};

type ToggleGroupProps<Value extends string = string> = Omit<
  ToggleGroupPrimitive.Props<Value>,
  'children' | 'onChange' | 'onValueChange'
> &
  ToggleVariantProps & {
    items: readonly ToggleGroupOption<Value>[];
    onChange?: (
      value: Value[],
      eventDetails: ToggleGroupPrimitive.ChangeEventDetails
    ) => void;
  };

function ToggleRoot({
  className,
  defaultValue,
  variant = 'default',
  onChange,
  value,
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      data-variant={variant}
      className={cn(toggleVariants({ variant, className }))}
      defaultPressed={defaultValue}
      onPressedChange={onChange}
      pressed={value}
      {...props}
    />
  );
}

function ToggleGroup<Value extends string = string>({
  className,
  items,
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
      {items.map(({ className: itemClassName, label, value, ...itemProps }) => (
        <TogglePrimitive
          data-slot="toggle-group-item"
          data-variant={variant}
          className={cn(
            'shrink-0',
            toggleVariants({
              variant,
              className: itemClassName,
            })
          )}
          key={value}
          value={value}
          {...itemProps}
        >
          {label}
        </TogglePrimitive>
      ))}
    </ToggleGroupPrimitive>
  );
}

const Toggle = Object.assign(ToggleRoot, {
  Group: ToggleGroup,
});

export { Toggle, ToggleGroup as Group, toggleVariants };
export type { ToggleGroupOption, ToggleGroupProps, ToggleProps };
