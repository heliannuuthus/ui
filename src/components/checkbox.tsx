'use client';

import * as React from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { CheckboxGroup as CheckboxGroupPrimitive } from '@base-ui/react/checkbox-group';
import { CheckIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Masonry, type MasonryGap, type MasonryLength } from './masonry';

type CheckboxClassNames = {
  control?: string;
  label?: string;
};

type CheckboxVariant = 'default' | 'task';

type CheckboxProps = Omit<
  React.ComponentProps<'label'>,
  'children' | 'defaultChecked' | 'onChange'
> & {
  checked?: boolean;
  children?: React.ReactNode;
  className?: string;
  classNames?: CheckboxClassNames;
  defaultChecked?: boolean;
  disabled?: boolean;
  form?: string;
  indeterminate?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  onChange?: (checked: boolean) => void;
  parent?: boolean;
  readOnly?: boolean;
  required?: boolean;
  uncheckedValue?: string;
  value?: string;
  variant?: CheckboxVariant;
};

type CheckboxOption = {
  className?: string;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
  variant?: CheckboxVariant;
};

type CheckboxGroupProps = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> & {
  allValues?: string[];
  columns?: number;
  defaultValue?: string[];
  disabled?: boolean;
  gap?: MasonryGap;
  minColumnWidth?: MasonryLength;
  name?: string;
  onChange?: (value: string[]) => void;
  options: readonly CheckboxOption[];
  orientation?: 'horizontal' | 'vertical';
  value?: string[];
  variant?: CheckboxVariant;
};

const CheckboxGroupNameContext = React.createContext<string | undefined>(
  undefined
);

function CheckboxRoot({
  children,
  className,
  classNames,
  disabled,
  name,
  onChange,
  variant = 'default',
  ...props
}: CheckboxProps) {
  const groupName = React.useContext(CheckboxGroupNameContext);
  const [particleBurst, setParticleBurst] = React.useState(0);

  const handleCheckedChange: NonNullable<
    CheckboxPrimitive.Root.Props['onCheckedChange']
  > = (checked, _eventDetails) => {
    setParticleBurst((current) => (checked ? current + 1 : 0));
    onChange?.(checked);
  };

  return (
    <CheckboxPrimitive.Root
      render={<label />}
      data-slot="checkbox"
      data-variant={variant}
      className={cn(
        'group/checkbox inline-flex w-fit cursor-pointer items-start gap-2 text-sm leading-5 outline-none focus-visible:[&>[data-slot=checkbox-control]]:border-ring focus-visible:[&>[data-slot=checkbox-control]]:ring-3 focus-visible:[&>[data-slot=checkbox-control]]:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
      disabled={disabled}
      name={name ?? groupName}
      onCheckedChange={handleCheckedChange}
      {...(props as CheckboxPrimitive.Root.Props)}
    >
      <span
        data-slot="checkbox-control"
        className={cn(
          'relative mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 transition-[background-color,border-color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/checkbox:border-primary/40 group-hover/checkbox:bg-primary/10 group-active/checkbox:scale-90 group-data-disabled/checkbox:group-active/checkbox:scale-100 group-data-disabled/checkbox:group-hover/checkbox:border-transparent group-data-disabled/checkbox:group-hover/checkbox:bg-input/90 group-data-readonly/checkbox:group-active/checkbox:scale-100 group-aria-invalid/checkbox:border-destructive group-aria-invalid/checkbox:ring-3 group-aria-invalid/checkbox:ring-destructive/20 group-data-checked/checkbox:border-primary group-data-checked/checkbox:bg-primary group-data-checked/checkbox:text-primary-foreground group-data-checked/checkbox:group-hover/checkbox:bg-primary/90 motion-reduce:transition-none dark:group-aria-invalid/checkbox:border-destructive/50 dark:group-aria-invalid/checkbox:ring-destructive/40 dark:group-data-checked/checkbox:bg-primary',
          classNames?.control
        )}
      >
        {particleBurst > 0 && (
          <span
            key={particleBurst}
            aria-hidden="true"
            data-effect="scatter"
            data-slot="checkbox-particles"
            className="pointer-events-none absolute inset-0"
          >
            {Array.from({ length: 8 }, (_, index) => (
              <span className="selection-particle" key={index} />
            ))}
          </span>
        )}
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-starting-style:scale-50 data-starting-style:opacity-0 data-ending-style:scale-50 data-ending-style:opacity-0 motion-reduce:transition-none data-indeterminate:after:h-0.5 data-indeterminate:after:w-2 data-indeterminate:after:rounded-full data-indeterminate:after:bg-current data-indeterminate:[&>svg]:hidden [&>svg]:size-3.5"
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </span>
      {children != null && (
        <span
          data-slot="checkbox-label"
          className={cn(
            'contents',
            variant === 'task' &&
              'block min-w-0 flex-1 transition-colors duration-150 group-data-checked/checkbox:text-muted-foreground group-data-checked/checkbox:line-through group-data-checked/checkbox:decoration-muted-foreground/70 group-data-checked/checkbox:decoration-1 motion-reduce:transition-none',
            classNames?.label
          )}
        >
          {children}
        </span>
      )}
    </CheckboxPrimitive.Root>
  );
}

function CheckboxGroup({
  className,
  columns = 3,
  gap = 12,
  minColumnWidth = 180,
  name,
  onChange,
  options,
  orientation = 'horizontal',
  variant = 'default',
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      data-orientation={orientation}
      aria-orientation={orientation}
      className={cn('w-full', className)}
      onValueChange={onChange}
      {...props}
    >
      <CheckboxGroupNameContext.Provider value={name}>
        <Masonry
          columns={orientation === 'horizontal' ? columns : 1}
          gap={gap}
          items={options.map((option) => ({
            content: (
              <CheckboxRoot
                className={option.className}
                disabled={option.disabled}
                value={option.value}
                variant={option.variant ?? variant}
              >
                {option.label}
              </CheckboxRoot>
            ),
            key: option.value,
          }))}
          minColumnWidth={minColumnWidth}
        />
      </CheckboxGroupNameContext.Provider>
    </CheckboxGroupPrimitive>
  );
}

const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});

export { Checkbox };
export type {
  CheckboxClassNames,
  CheckboxGroupProps,
  CheckboxOption,
  CheckboxProps,
  CheckboxVariant,
};
