import * as React from 'react';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';

import { cn } from '../lib/utils';
import { Masonry, type MasonryGap, type MasonryLength } from './masonry';

type RadioClassNames = {
  control?: string;
  label?: string;
};

type RadioProps<Value = string> = Omit<
  RadioPrimitive.Root.Props<Value>,
  'children' | 'className' | 'render'
> & {
  children?: React.ReactNode;
  className?: string;
  classNames?: RadioClassNames;
};

type RadioOption<Value = string> = {
  className?: string;
  disabled?: boolean;
  label: React.ReactNode;
  value: Value;
};

type RadioGroupProps<Value = string> = Omit<
  RadioGroupPrimitive.Props<Value>,
  'children' | 'onChange' | 'onValueChange'
> & {
  columns?: number;
  gap?: MasonryGap;
  minColumnWidth?: MasonryLength;
  onChange?: (
    value: Value,
    eventDetails: RadioGroupPrimitive.ChangeEventDetails
  ) => void;
  options: readonly RadioOption<Value>[];
  orientation?: 'horizontal' | 'vertical';
};

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
    onClick?.(event);
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
      {...props}
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
  className,
  columns = 3,
  gap = 12,
  minColumnWidth = 180,
  onChange,
  options,
  orientation = 'horizontal',
  ...props
}: RadioGroupProps<Value>) {
  return (
    <Masonry
      asChild
      columns={orientation === 'horizontal' ? columns : 1}
      gap={gap}
      minColumnWidth={minColumnWidth}
    >
      <RadioGroupPrimitive
        data-slot="radio-group"
        data-orientation={orientation}
        aria-orientation={orientation}
        className={cn('w-full', className)}
        onValueChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <RadioRoot
            className={option.className}
            disabled={option.disabled}
            key={String(option.value)}
            value={option.value}
          >
            {option.label}
          </RadioRoot>
        ))}
      </RadioGroupPrimitive>
    </Masonry>
  );
}

export { RadioRoot as Radio, RadioGroup as Group };
export type { RadioClassNames, RadioGroupProps, RadioOption, RadioProps };
