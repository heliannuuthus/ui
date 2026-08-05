import * as React from 'react';

import { cn } from '../lib/utils';
import { ChevronDownIcon } from 'lucide-react';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

type NativeSelectProps = Omit<React.ComponentProps<'select'>, 'size'> & {
  options?: readonly NativeSelectOption[];
  size?: 'sm' | 'default';
};

type NativeSelectOption =
  | {
      disabled?: boolean;
      label: React.ReactNode;
      value: string;
    }
  | {
      label: string;
      options: readonly {
        disabled?: boolean;
        label: React.ReactNode;
        value: string;
      }[];
    };

const NativeSelect = ({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  children,
  className,
  defaultValue,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  options,
  ref,
  required,
  size = 'default',
  value,
  ...props
}: NativeSelectProps) => {
  const formControl = useFormControl<string | readonly string[] | undefined>();
  const selectRef = useMergedRefs(
    ref,
    formControl?.ref as React.Ref<HTMLSelectElement> | undefined
  );

  return (
    <div
      className={cn(
        'group/native-select relative w-fit has-[select:disabled]:opacity-50',
        className
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        {...props}
        aria-describedby={mergeIds(
          ariaDescribedBy,
          formControl?.descriptionId,
          formControl?.messageId
        )}
        aria-invalid={ariaInvalid ?? formControl?.invalid}
        data-slot="native-select"
        data-size={size}
        defaultValue={formControl ? undefined : defaultValue}
        disabled={disabled || formControl?.disabled}
        id={id ?? formControl?.controlId}
        name={formControl?.name ?? name}
        onBlur={(event) => {
          onBlur?.(event);
          formControl?.onBlur();
        }}
        onChange={(event) => {
          onChange?.(event);
          formControl?.onChange(
            event.target.multiple
              ? Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                )
              : event.target.value
          );
        }}
        ref={selectRef}
        required={required || formControl?.required}
        value={formControl ? (formControl.value ?? '') : value}
        className="h-9 w-full min-w-0 appearance-none rounded-3xl border border-input bg-background py-1 pr-8 pl-3 text-sm transition-[color,box-shadow,background-color,border-color] outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground hover:border-primary/35 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-8 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
      >
        {options?.map((option) =>
          'options' in option ? (
            <optgroup key={option.label} label={option.label}>
              {option.options.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          )
        )}
        {children}
      </select>
      <ChevronDownIcon
        className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
};

registerFormControl(NativeSelect);

export { NativeSelect, type NativeSelectOption, type NativeSelectProps };
