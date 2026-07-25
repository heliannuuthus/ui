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

type CheckboxProps = Omit<
  CheckboxPrimitive.Root.Props,
  'children' | 'className' | 'onCheckedChange' | 'render'
> & {
  children?: React.ReactNode;
  className?: string;
  classNames?: CheckboxClassNames;
  onChange?: (
    checked: boolean,
    eventDetails: CheckboxPrimitive.Root.ChangeEventDetails
  ) => void;
};

type CheckboxOption = {
  className?: string;
  disabled?: boolean;
  label: React.ReactNode;
  value: string;
};

type CheckboxGroupProps = Omit<
  CheckboxGroupPrimitive.Props,
  'children' | 'onChange' | 'onValueChange'
> & {
  columns?: number;
  gap?: MasonryGap;
  minColumnWidth?: MasonryLength;
  name?: string;
  onChange?: (
    value: string[],
    eventDetails: CheckboxGroupPrimitive.ChangeEventDetails
  ) => void;
  options: readonly CheckboxOption[];
  orientation?: 'horizontal' | 'vertical';
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
  ...props
}: CheckboxProps) {
  const groupName = React.useContext(CheckboxGroupNameContext);
  const [particleBurst, setParticleBurst] = React.useState(0);

  const handleCheckedChange: NonNullable<
    CheckboxPrimitive.Root.Props['onCheckedChange']
  > = (checked, eventDetails) => {
    setParticleBurst((current) => (checked ? current + 1 : 0));
    onChange?.(checked, eventDetails);
  };

  return (
    <CheckboxPrimitive.Root
      render={<label />}
      data-slot="checkbox"
      className={cn(
        'group/checkbox inline-flex w-fit cursor-pointer items-start gap-2 text-sm leading-5 outline-none focus-visible:[&>[data-slot=checkbox-control]]:border-ring focus-visible:[&>[data-slot=checkbox-control]]:ring-3 focus-visible:[&>[data-slot=checkbox-control]]:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
      disabled={disabled}
      name={name ?? groupName}
      onCheckedChange={handleCheckedChange}
      {...props}
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
          className={cn('contents', classNames?.label)}
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
  ...props
}: CheckboxGroupProps) {
  return (
    <Masonry
      asChild
      columns={orientation === 'horizontal' ? columns : 1}
      gap={gap}
      minColumnWidth={minColumnWidth}
    >
      <CheckboxGroupPrimitive
        data-slot="checkbox-group"
        data-orientation={orientation}
        aria-orientation={orientation}
        className={cn('w-full', className)}
        onValueChange={onChange}
        {...props}
      >
        <CheckboxGroupNameContext.Provider value={name}>
          {options.map((option) => (
            <CheckboxRoot
              className={option.className}
              disabled={option.disabled}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </CheckboxRoot>
          ))}
        </CheckboxGroupNameContext.Provider>
      </CheckboxGroupPrimitive>
    </Masonry>
  );
}

export { CheckboxRoot as Checkbox, CheckboxGroup as Group };
export type {
  CheckboxClassNames,
  CheckboxGroupProps,
  CheckboxOption,
  CheckboxProps,
};
