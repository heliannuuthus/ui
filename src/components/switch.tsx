import type * as React from 'react';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';

import { cn } from '../lib/utils';
import {
  mergeIds,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

type SwitchProps = Omit<
  React.ComponentProps<'span'>,
  'defaultChecked' | 'onChange'
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  form?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  onChange?: (checked: boolean) => void;
  readOnly?: boolean;
  required?: boolean;
  uncheckedValue?: string;
  value?: string;
};

function Switch({
  checked,
  className,
  defaultChecked,
  disabled,
  id,
  inputRef,
  name,
  onBlur,
  onChange,
  required,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  ...props
}: SwitchProps) {
  const formControl = useFormControl<boolean>();
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );

  function handleCheckedChange(checked: boolean) {
    onChange?.(checked);
    formControl?.onChange(checked);
  }

  return (
    <SwitchPrimitive.Root
      {...props}
      aria-describedby={mergeIds(
        ariaDescribedBy,
        formControl?.descriptionId,
        formControl?.messageId
      )}
      aria-invalid={ariaInvalid ?? formControl?.invalid}
      checked={formControl ? Boolean(formControl.value) : checked}
      data-slot="switch"
      defaultChecked={formControl ? undefined : defaultChecked}
      disabled={disabled || formControl?.disabled}
      id={id ?? formControl?.controlId}
      inputRef={controlRef}
      name={formControl?.name ?? name}
      onBlur={(event) => {
        onBlur?.(event);
        formControl?.onBlur();
      }}
      className={cn(
        'peer group/switch relative inline-flex h-5 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-unchecked:border-transparent data-unchecked:bg-input/90 not-data-disabled:hover:data-checked:bg-primary/80 not-data-disabled:hover:data-unchecked:bg-input data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
      onCheckedChange={handleCheckedChange}
      required={required || formControl?.required}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block h-4 w-6 rounded-full bg-background shadow-sm ring-0 transition-transform not-dark:bg-clip-padding data-checked:translate-x-[calc(100%-8px)] dark:data-checked:bg-primary-foreground data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
export type { SwitchProps };
