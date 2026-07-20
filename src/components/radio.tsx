'use client';

import * as React from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';

import { cn } from '../lib/utils';

const RadioGroupContext = React.createContext(false);

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupContext.Provider value>
      <RadioGroupPrimitive
        data-slot="radio-group"
        className={cn('grid w-full gap-3', className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  );
}

type RadioProps<Value = unknown> = Omit<
  RadioPrimitive.Root.Props<Value>,
  'value'
> & {
  value?: Value;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
  form?: string;
};

function Radio<Value = string>({
  className,
  value,
  checked,
  defaultChecked,
  onCheckedChange,
  name,
  form,
  ...props
}: RadioProps<Value>) {
  const isInGroup = React.useContext(RadioGroupContext);
  const uncheckedValue = React.useMemo(() => ({ unchecked: true }), []);
  const resolvedValue = value ?? ('on' as Value);

  const control = (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        'group/radio peer relative flex size-4 flex-none cursor-pointer items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-[background-color,border-color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:-inset-x-3 after:-inset-y-2 hover:border-primary/40 hover:bg-primary/10 active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-transparent disabled:hover:bg-input/90 disabled:active:scale-100 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary/90 data-readonly:cursor-default data-readonly:active:scale-100 dark:data-checked:bg-primary',
        className
      )}
      value={resolvedValue}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span className="size-2 rounded-full bg-primary-foreground dark:size-2.5" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );

  if (isInGroup) {
    return control;
  }

  return (
    <RadioGroupPrimitive
      data-slot="radio-standalone"
      className="contents"
      name={name}
      form={form}
      value={
        checked === undefined
          ? undefined
          : checked
            ? resolvedValue
            : uncheckedValue
      }
      defaultValue={defaultChecked ? resolvedValue : uncheckedValue}
      onValueChange={(nextValue) =>
        onCheckedChange?.(nextValue === resolvedValue)
      }
    >
      {control}
    </RadioGroupPrimitive>
  );
}

/** @deprecated Use Radio instead. */
const RadioGroupItem = Radio;

export { Radio, RadioGroup, RadioGroupItem };
export type { RadioProps };
