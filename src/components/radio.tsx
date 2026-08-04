import * as React from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';

import { cn } from '../lib/utils';
import { Stack } from './stack';
import {
  mergeIds,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

type RadioLength = number | string;
type RadioGap =
  RadioLength | readonly [columnGap: RadioLength, rowGap: RadioLength];

type RadioClassNames = {
  control?: string;
  label?: string;
};

type RadioProps<Value = string> = Omit<
  React.ComponentProps<'label'>,
  'children' | 'onChange' | 'value'
> & {
  children?: React.ReactNode;
  className?: string;
  classNames?: RadioClassNames;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  readOnly?: boolean;
  required?: boolean;
  value: Value;
};

type RadioOption<Value = string> = {
  className?: string;
  disabled?: boolean;
  label: React.ReactNode;
  value: Value;
};

type RadioGroupProps<Value = string> = Omit<
  React.ComponentProps<'div'>,
  'children' | 'defaultValue' | 'onChange'
> & {
  columns?: number;
  defaultValue?: Value;
  disabled?: boolean;
  form?: string;
  gap?: RadioGap;
  inputRef?: React.Ref<HTMLInputElement>;
  minColumnWidth?: RadioLength;
  name?: string;
  onChange?: (value: Value) => void;
  options: readonly RadioOption<Value>[];
  orientation?: 'horizontal' | 'vertical';
  readOnly?: boolean;
  required?: boolean;
  value?: Value;
};

function toCssLength(value: RadioLength) {
  return typeof value === 'number' ? `${value}px` : value;
}

function resolveGap(gap: RadioGap) {
  const [columnGap, rowGap] = Array.isArray(gap) ? gap : [gap, gap];
  return [toCssLength(columnGap), toCssLength(rowGap)] as const;
}

function RadioRoot<Value = string>({
  children,
  className,
  classNames,
  disabled,
  onClick,
  readOnly,
  ...props
}: RadioProps<Value>) {
  const [particleBurst, setParticleBurst] = React.useState(0);

  const handleClick: NonNullable<
    RadioPrimitive.Root.Props<Value>['onClick']
  > = (event) => {
    onClick?.(
      event as unknown as React.MouseEvent<HTMLLabelElement, MouseEvent>
    );
    if (
      !event.defaultPrevented &&
      !event.currentTarget.hasAttribute('data-checked') &&
      !disabled &&
      !readOnly
    ) {
      setParticleBurst((current) => current + 1);
    }
  };

  return (
    <RadioPrimitive.Root
      render={<label />}
      data-slot="radio"
      className={cn(
        'group/radio inline-flex w-fit cursor-pointer items-start gap-2 text-sm leading-5 outline-none focus-visible:[&>[data-slot=radio-control]]:border-ring focus-visible:[&>[data-slot=radio-control]]:ring-3 focus-visible:[&>[data-slot=radio-control]]:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
      disabled={disabled}
      onClick={handleClick}
      readOnly={readOnly}
      {...(props as RadioPrimitive.Root.Props<Value>)}
    >
      <span
        data-slot="radio-control"
        className={cn(
          'relative mt-0.5 flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 transition-[background-color,border-color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/radio:border-primary/40 group-hover/radio:bg-primary/10 group-active/radio:scale-90 group-data-disabled/radio:group-active/radio:scale-100 group-data-disabled/radio:group-hover/radio:border-transparent group-data-disabled/radio:group-hover/radio:bg-input/90 group-data-readonly/radio:group-active/radio:scale-100 group-aria-invalid/radio:border-destructive group-aria-invalid/radio:ring-3 group-aria-invalid/radio:ring-destructive/20 group-data-checked/radio:border-primary group-data-checked/radio:bg-primary group-data-checked/radio:text-primary-foreground group-data-checked/radio:group-hover/radio:bg-primary/90 motion-reduce:transition-none dark:group-aria-invalid/radio:border-destructive/50 dark:group-aria-invalid/radio:ring-destructive/40 dark:group-data-checked/radio:bg-primary',
          classNames?.control
        )}
      >
        {particleBurst > 0 && (
          <span
            key={particleBurst}
            aria-hidden="true"
            data-effect="scatter"
            data-slot="radio-particles"
            className="pointer-events-none absolute inset-0"
            onAnimationEnd={() => setParticleBurst(0)}
          >
            {Array.from({ length: 8 }, (_, index) => (
              <span className="selection-particle" key={index} />
            ))}
          </span>
        )}
        <RadioPrimitive.Indicator
          data-slot="radio-indicator"
          className="flex size-4 items-center justify-center transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-starting-style:scale-50 data-starting-style:opacity-0 data-ending-style:scale-50 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <span className="size-2 rounded-full bg-primary-foreground dark:size-2.5" />
        </RadioPrimitive.Indicator>
      </span>
      {children != null && (
        <span
          data-slot="radio-label"
          className={cn('contents', classNames?.label)}
        >
          {children}
        </span>
      )}
    </RadioPrimitive.Root>
  );
}

function RadioGroup<Value = string>({
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-labelledby': ariaLabelledBy,
  className,
  columns = 3,
  defaultValue,
  disabled,
  gap = 12,
  id,
  inputRef,
  minColumnWidth = 180,
  name,
  onBlur,
  onChange,
  options,
  orientation = 'horizontal',
  required,
  value,
  ...props
}: RadioGroupProps<Value>) {
  const formControl = useFormControl<Value>();
  const controlRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );
  const columnCount = Number.isFinite(columns)
    ? Math.max(1, Math.floor(columns))
    : 3;
  const [columnGap, rowGap] = resolveGap(gap);
  const totalGap =
    columnCount === 1
      ? '0px'
      : Array.from({ length: columnCount - 1 }, () => columnGap).join(' + ');
  const itemBasis = `max(${toCssLength(minColumnWidth)}, calc((100% - (${totalGap})) / ${columnCount}))`;

  return (
    <RadioGroupPrimitive
      {...props}
      render={
        <Stack
          block
          gap={0}
          orientation={orientation}
          style={{ columnGap, rowGap }}
          wrap={orientation === 'horizontal'}
        />
      }
      data-slot="radio-group"
      data-orientation={orientation}
      aria-describedby={mergeIds(
        ariaDescribedBy,
        formControl?.descriptionId,
        formControl?.messageId
      )}
      aria-invalid={ariaInvalid ?? formControl?.invalid}
      aria-labelledby={mergeIds(ariaLabelledBy, formControl?.labelId)}
      aria-orientation={orientation}
      className={className}
      defaultValue={formControl ? undefined : defaultValue}
      disabled={disabled || formControl?.disabled}
      id={id ?? formControl?.controlId}
      inputRef={controlRef}
      name={formControl?.name ?? name}
      onBlur={(event) => {
        onBlur?.(event);
        formControl?.onBlur();
      }}
      onValueChange={(nextValue) => {
        onChange?.(nextValue);
        formControl?.onChange(nextValue);
      }}
      required={required || formControl?.required}
      value={formControl ? formControl.value : value}
    >
      {options.map((option) => (
        <RadioRoot
          className={cn(
            orientation === 'horizontal' ? 'min-w-0 flex-1' : 'w-full',
            option.className
          )}
          disabled={option.disabled}
          key={String(option.value)}
          style={
            orientation === 'horizontal' ? { flexBasis: itemBasis } : undefined
          }
          value={option.value}
        >
          {option.label}
        </RadioRoot>
      ))}
    </RadioGroupPrimitive>
  );
}

const Radio = Object.assign(RadioRoot, {
  Group: RadioGroup,
});

export { Radio };
export type { RadioClassNames, RadioGroupProps, RadioOption, RadioProps };
