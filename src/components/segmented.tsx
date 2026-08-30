'use client';

import * as React from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { LayoutGroup, motion, useReducedMotion } from 'motion/react';

import { cn } from '../lib/utils';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';
import { useComponentDefaults } from './provider';

type SegmentedValue = string | number;
type SegmentedSize = 'sm' | 'md' | 'lg';

type SegmentedOption<Value extends SegmentedValue = string> = {
  'aria-label'?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  label: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
  value: Value;
};

type SegmentedClassNames = {
  indicator?: string;
  item?: string;
  label?: string;
};

type SegmentedStyles = {
  [Slot in keyof SegmentedClassNames]?: React.CSSProperties;
};

type SegmentedProps<Value extends SegmentedValue = string> = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> & {
  block?: boolean;
  classNames?: SegmentedClassNames;
  defaultValue?: Value;
  disabled?: boolean;
  form?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  onChange?: (value: Value) => void;
  options: readonly (Value | SegmentedOption<Value>)[];
  orientation?: 'horizontal' | 'vertical';
  readOnly?: boolean;
  required?: boolean;
  size?: SegmentedSize;
  styles?: SegmentedStyles;
  value?: Value | null;
};

type SegmentedProviderDefaults = Pick<SegmentedProps, 'block' | 'size'>;

const normalizeOptions = <Value extends SegmentedValue>(
  options: readonly (Value | SegmentedOption<Value>)[]
) =>
  options.map((option): SegmentedOption<Value> =>
    typeof option === 'string' || typeof option === 'number'
      ? { label: option, value: option }
      : option
  );

const Segmented = <Value extends SegmentedValue = string>({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-labelledby': ariaLabelledBy,
  block: blockProp,
  className,
  classNames,
  defaultValue,
  disabled,
  form,
  id,
  inputRef,
  name,
  onBlur,
  onChange,
  options,
  orientation = 'horizontal',
  readOnly,
  ref,
  required,
  size: sizeProp,
  style,
  styles,
  value,
  ...props
}: SegmentedProps<Value>) => {
  const defaults = useComponentDefaults('Segmented');
  const block = blockProp ?? defaults.block ?? false;
  const size = sizeProp ?? defaults.size ?? 'md';
  const formControl = useFormControl<Value>();
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );
  const reduceMotion = useReducedMotion();
  const layoutGroupId = React.useId();
  const normalizedOptions = React.useMemo(
    () => normalizeOptions(options),
    [options]
  );
  const firstEnabledValue = normalizedOptions.find(
    (option) => !option.disabled
  )?.value;
  const [uncontrolledValue, setUncontrolledValue] = React.useState<
    Value | undefined
  >(() => defaultValue ?? firstEnabledValue);
  const controlled = formControl != null || value !== undefined;
  const requestedValue = formControl ? formControl.value : value;
  const fallbackValue = controlled ? requestedValue : uncontrolledValue;
  const matchingOption = normalizedOptions.find((option) =>
    Object.is(option.value, fallbackValue)
  );
  const resolvedValue =
    matchingOption?.value ?? (controlled ? undefined : firstEnabledValue);
  const itemSize = {
    sm: 'h-7 gap-1.5 px-2.5 text-xs',
    md: 'h-8 gap-1.5 px-3 text-sm',
    lg: 'h-10 gap-2 px-4 text-sm',
  }[size];

  return (
    <LayoutGroup id={layoutGroupId}>
      <RadioGroupPrimitive
        {...props}
        render={<div ref={ref} />}
        aria-describedby={mergeIds(
          ariaDescribedBy,
          formControl?.descriptionId,
          formControl?.messageId
        )}
        aria-invalid={ariaInvalid ?? formControl?.invalid}
        aria-labelledby={mergeIds(ariaLabelledBy, formControl?.labelId)}
        aria-orientation={orientation}
        className={cn(
          'no-scrollbar relative isolate inline-flex max-w-full items-center overflow-auto border border-border/70 bg-muted/65 p-1 text-muted-foreground shadow-inner data-vertical:flex-col data-vertical:items-stretch data-disabled:cursor-not-allowed data-disabled:opacity-50',
          orientation === 'vertical' ? 'rounded-2xl' : 'rounded-full',
          block && 'flex w-full',
          className
        )}
        data-block={block || undefined}
        data-orientation={orientation}
        data-size={size}
        data-slot="segmented"
        disabled={disabled || formControl?.disabled}
        form={form}
        id={id ?? formControl?.controlId}
        inputRef={controlRef}
        name={formControl?.name ?? name}
        onBlur={(event) => {
          onBlur?.(event);
          formControl?.onBlur();
        }}
        onValueChange={(nextValue) => {
          if (!controlled) {
            setUncontrolledValue(nextValue);
          }
          onChange?.(nextValue);
          formControl?.onChange(nextValue);
        }}
        readOnly={readOnly}
        required={required || formControl?.required}
        style={style}
        value={resolvedValue}
      >
        {normalizedOptions.map((option) => {
          const selected = Object.is(option.value, resolvedValue);

          return (
            <RadioPrimitive.Root
              render={<button type="button" />}
              aria-label={option['aria-label']}
              className={cn(
                'relative isolate z-0 inline-flex shrink-0 cursor-pointer items-center justify-center font-medium whitespace-nowrap outline-none transition-colors duration-150 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/45 data-checked:text-foreground data-disabled:pointer-events-none data-disabled:opacity-45 data-readonly:cursor-default data-vertical:w-full data-vertical:justify-start [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
                orientation === 'vertical' ? 'rounded-xl' : 'rounded-full',
                block && 'flex-1',
                itemSize,
                classNames?.item,
                option.className
              )}
              data-slot="segmented-item"
              disabled={option.disabled}
              key={`${typeof option.value}:${String(option.value)}`}
              nativeButton
              style={{ ...styles?.item, ...option.style }}
              title={option.title}
              value={option.value}
            >
              {selected ? (
                <motion.span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute inset-0 -z-1 bg-background shadow-sm ring-1 ring-border/65',
                    orientation === 'vertical' ? 'rounded-xl' : 'rounded-full',
                    classNames?.indicator
                  )}
                  data-slot="segmented-indicator"
                  layoutId="segmented-indicator"
                  style={styles?.indicator}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.2,
                          ease: [0.77, 0, 0.175, 1],
                        }
                  }
                />
              ) : null}
              <span
                className={cn(
                  'relative z-1 inline-flex min-w-0 items-center gap-[inherit]',
                  classNames?.label
                )}
                data-slot="segmented-label"
                style={styles?.label}
              >
                {option.icon}
                {option.label}
              </span>
            </RadioPrimitive.Root>
          );
        })}
      </RadioGroupPrimitive>
    </LayoutGroup>
  );
};

registerFormControl(Segmented);

export { Segmented };
export type {
  SegmentedClassNames,
  SegmentedOption,
  SegmentedProps,
  SegmentedProviderDefaults,
  SegmentedSize,
  SegmentedStyles,
  SegmentedValue,
};
