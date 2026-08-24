'use client';

import * as React from 'react';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

type ToggleVariantOptions = {
  class?: never;
  className?: string;
  variant?: 'default' | 'outline' | null;
};

const toggleVariants: (props?: ToggleVariantOptions) => string = cva(
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
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'defaultValue' | 'onChange' | 'value'
> &
  ToggleVariantProps & {
    value?: boolean;
    defaultValue?: boolean;
    inputRef?: React.Ref<HTMLButtonElement>;
    onChange?: (value: boolean) => void;
    required?: boolean;
  };

type ToggleGroupOption<Value extends string = string> = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'defaultValue' | 'onChange' | 'value'
> & {
  label: React.ReactNode;
  value: Value;
};

type ToggleGroupProps<Value extends string = string> = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> &
  ToggleVariantProps & {
    defaultValue?: readonly Value[];
    disabled?: boolean;
    items: readonly ToggleGroupOption<Value>[];
    multiple?: boolean;
    onChange?: (value: Value[]) => void;
    orientation?: 'horizontal' | 'vertical';
    value?: readonly Value[];
  };

const ToggleRoot = ({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  className,
  defaultValue,
  disabled,
  id,
  inputRef,
  onChange,
  onBlur,
  required,
  value,
  variant = 'default',
  ...props
}: ToggleProps) => {
  const formControl = useFormControl<boolean>();
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLButtonElement> | undefined
  );

  return (
    <TogglePrimitive
      {...props}
      aria-describedby={mergeIds(
        ariaDescribedBy,
        formControl?.descriptionId,
        formControl?.messageId
      )}
      aria-invalid={ariaInvalid ?? formControl?.invalid}
      aria-required={required || formControl?.required}
      data-slot="toggle"
      data-variant={variant}
      className={cn(toggleVariants({ variant, className }))}
      defaultPressed={formControl ? undefined : defaultValue}
      disabled={disabled || formControl?.disabled}
      id={id ?? formControl?.controlId}
      onBlur={(event) => {
        onBlur?.(event);
        formControl?.onBlur();
      }}
      onPressedChange={(nextValue) => {
        onChange?.(nextValue);
        formControl?.onChange(nextValue);
      }}
      pressed={formControl ? Boolean(formControl.value) : value}
      ref={controlRef}
    />
  );
};

const ToggleGroup = <Value extends string = string>({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-labelledby': ariaLabelledBy,
  className,
  defaultValue,
  disabled,
  id,
  items,
  onChange,
  onBlur,
  orientation = 'horizontal',
  value,
  variant = 'default',
  ...props
}: ToggleGroupProps<Value>) => {
  const formControl = useFormControl<Value[]>();

  return (
    <ToggleGroupPrimitive
      {...props}
      aria-describedby={mergeIds(
        ariaDescribedBy,
        formControl?.descriptionId,
        formControl?.messageId
      )}
      aria-invalid={ariaInvalid ?? formControl?.invalid}
      aria-labelledby={mergeIds(ariaLabelledBy, formControl?.labelId)}
      data-slot="toggle-group"
      data-variant={variant}
      data-orientation={orientation}
      defaultValue={formControl ? undefined : defaultValue}
      disabled={disabled || formControl?.disabled}
      id={id ?? formControl?.controlId}
      orientation={orientation}
      className={cn(
        'group/toggle-group flex w-fit flex-row items-center gap-2 data-vertical:flex-col data-vertical:items-stretch',
        className
      )}
      onBlur={(event) => {
        onBlur?.(event);
        formControl?.onBlur();
      }}
      onValueChange={(nextValue) => {
        onChange?.(nextValue);
        formControl?.onChange(nextValue);
      }}
      value={formControl ? (formControl.value ?? []) : value}
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
};

const Toggle = Object.assign(ToggleRoot, {
  Group: ToggleGroup,
});

registerFormControl(ToggleRoot);
registerFormControl(ToggleGroup);

export { Toggle, toggleVariants };
export type { ToggleGroupOption, ToggleGroupProps, ToggleProps };
