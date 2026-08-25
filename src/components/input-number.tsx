import * as React from 'react';
import { NumberField } from '@base-ui/react/number-field';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';
import { useComponentDefaults } from './provider';

type InputNumberSize = 'sm' | 'default' | 'lg';

type InputNumberControls = {
  decrement?: React.ReactNode;
  increment?: React.ReactNode;
};

type InputNumberClassNames = {
  controls?: string;
  decrement?: string;
  group?: string;
  increment?: string;
  input?: string;
  prefix?: string;
  suffix?: string;
};

type InputNumberStyles = {
  [Slot in keyof InputNumberClassNames]?: React.CSSProperties;
};

type InputNumberProps = Omit<
  NumberField.Root.Props,
  | 'autoFocus'
  | 'className'
  | 'defaultValue'
  | 'inputMode'
  | 'inputRef'
  | 'onBlur'
  | 'onFocus'
  | 'onValueChange'
  | 'onValueCommitted'
> & {
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
  autoFocus?: boolean;
  className?: string;
  classNames?: InputNumberClassNames;
  controls?: boolean | InputNumberControls;
  decrementLabel?: string;
  defaultValue?: number | null;
  incrementLabel?: string;
  inputProps?: Omit<
    NumberField.Input.Props,
    | 'aria-describedby'
    | 'aria-errormessage'
    | 'aria-invalid'
    | 'aria-label'
    | 'aria-labelledby'
    | 'autoComplete'
    | 'autoFocus'
    | 'className'
    | 'disabled'
    | 'id'
    | 'inputMode'
    | 'name'
    | 'onFocus'
    | 'placeholder'
    | 'readOnly'
    | 'required'
    | 'value'
  >;
  inputRef?: React.Ref<HTMLInputElement>;
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>['inputMode'];
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: number | null) => void;
  onChangeComplete?: (value: number | null) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  prefix?: React.ReactNode;
  size?: InputNumberSize;
  suffix?: React.ReactNode;
  styles?: InputNumberStyles;
};

const InputNumber = ({
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  autoComplete,
  autoFocus,
  className,
  classNames,
  controls = true,
  decrementLabel = 'Decrease value',
  defaultValue,
  disabled,
  id,
  incrementLabel = 'Increase value',
  inputProps,
  inputRef,
  inputMode,
  name,
  onBlur,
  onChange,
  onChangeComplete,
  onFocus,
  placeholder,
  prefix,
  readOnly,
  ref,
  required,
  size: sizeProp,
  suffix,
  styles,
  value,
  ...props
}: InputNumberProps) => {
  const defaults = useComponentDefaults('Input');
  const size = sizeProp ?? defaults.Number?.size ?? 'default';
  const formControl = useFormControl<number | null | undefined>();
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );
  const controlIcons = typeof controls === 'object' ? controls : undefined;
  const isDisabled = disabled || formControl?.disabled;
  const isRequired = required || formControl?.required;

  return (
    <NumberField.Root
      {...props}
      className={cn('group/input-number inline-flex w-full min-w-0', className)}
      data-size={size}
      data-slot="input-number"
      defaultValue={formControl ? undefined : (defaultValue ?? undefined)}
      disabled={isDisabled}
      id={id ?? formControl?.controlId}
      inputRef={controlRef}
      name={formControl?.name ?? name}
      onValueChange={(nextValue) => {
        onChange?.(nextValue);
        formControl?.onChange(nextValue);
      }}
      onValueCommitted={onChangeComplete}
      readOnly={readOnly}
      ref={ref}
      required={isRequired}
      value={formControl ? (formControl.value ?? null) : value}
    >
      <NumberField.Group
        className={cn(
          'relative flex h-9 w-full min-w-0 items-stretch overflow-hidden rounded-3xl border border-input bg-background transition-[color,box-shadow,background-color,border-color] outline-none hover:border-primary/35 focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/20 has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-3 has-[[aria-invalid=true]]:ring-destructive/20 data-disabled:cursor-not-allowed data-disabled:bg-muted/50 data-disabled:opacity-60 group-data-[size=lg]/input-number:h-10 group-data-[size=sm]/input-number:h-8 dark:has-[[aria-invalid=true]]:border-destructive/50 dark:has-[[aria-invalid=true]]:ring-destructive/40',
          classNames?.group
        )}
        data-slot="input-number-group"
        style={styles?.group}
      >
        {prefix != null ? (
          <span
            className={cn(
              'flex shrink-0 items-center pl-3 text-sm text-muted-foreground [&_svg:not([class*=size-])]:size-4',
              classNames?.prefix
            )}
            data-slot="input-number-prefix"
            style={styles?.prefix}
          >
            {prefix}
          </span>
        ) : null}
        <NumberField.Input
          {...inputProps}
          aria-describedby={mergeIds(
            ariaDescribedBy,
            formControl?.descriptionId,
            formControl?.messageId
          )}
          aria-errormessage={ariaErrorMessage ?? formControl?.messageId}
          aria-invalid={ariaInvalid ?? formControl?.invalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={cn(
            'h-full min-w-0 flex-1 bg-transparent px-3 py-1 text-base tabular-nums outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm',
            prefix != null && 'pl-2',
            suffix != null && 'pr-2',
            controls !== false && 'pr-2',
            classNames?.input
          )}
          data-slot="input-number-input"
          inputMode={inputMode}
          onBlur={(event) => {
            inputProps?.onBlur?.(event);
            onBlur?.(event);
            formControl?.onBlur();
          }}
          onFocus={onFocus}
          placeholder={placeholder}
          style={{ ...inputProps?.style, ...styles?.input }}
        />
        {suffix != null ? (
          <span
            className={cn(
              'flex shrink-0 items-center pr-3 text-sm text-muted-foreground [&_svg:not([class*=size-])]:size-4',
              classNames?.suffix
            )}
            data-slot="input-number-suffix"
            style={styles?.suffix}
          >
            {suffix}
          </span>
        ) : null}
        {controls !== false ? (
          <span
            className={cn(
              'flex w-7 shrink-0 flex-col border-l border-input',
              classNames?.controls
            )}
            data-slot="input-number-controls"
            style={styles?.controls}
          >
            <NumberField.Increment
              aria-label={incrementLabel}
              className={cn(
                'flex min-h-0 flex-1 cursor-pointer items-center justify-center border-b border-input text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:z-10 focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none',
                classNames?.increment
              )}
              data-slot="input-number-increment"
              style={styles?.increment}
            >
              {controlIcons?.increment ?? (
                <ChevronUpIcon aria-hidden="true" className="size-3" />
              )}
            </NumberField.Increment>
            <NumberField.Decrement
              aria-label={decrementLabel}
              className={cn(
                'flex min-h-0 flex-1 cursor-pointer items-center justify-center text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:z-10 focus-visible:bg-accent focus-visible:text-accent-foreground disabled:pointer-events-none',
                classNames?.decrement
              )}
              data-slot="input-number-decrement"
              style={styles?.decrement}
            >
              {controlIcons?.decrement ?? (
                <ChevronDownIcon aria-hidden="true" className="size-3" />
              )}
            </NumberField.Decrement>
          </span>
        ) : null}
      </NumberField.Group>
    </NumberField.Root>
  );
};

registerFormControl(InputNumber);

export { InputNumber };
export type {
  InputNumberClassNames,
  InputNumberControls,
  InputNumberProps,
  InputNumberSize,
  InputNumberStyles,
};
