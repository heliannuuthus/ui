import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { InputGroup } from './internal/input-group';

type InputOTPVariant = 'connected' | 'separated';

type InputClassNames = {
  addonAfter?: string;
  addonBefore?: string;
  input?: string;
  prefix?: string;
  root?: string;
  suffix?: string;
};

type InputProps = Omit<React.ComponentProps<'input'>, 'prefix'> & {
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  classNames?: InputClassNames;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

type InputOTPProps = Omit<
  React.ComponentProps<typeof OTPInput>,
  | 'children'
  | 'className'
  | 'containerClassName'
  | 'maxLength'
  | 'render'
  | 'type'
> & {
  variant?: InputOTPVariant;
  maxLength?: number;
  className?: string;
};

type TextAreaProps = React.ComponentProps<'textarea'>;

const InputOTPShapeContext = React.createContext<InputOTPVariant>('connected');

function OTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  const shape = React.useContext(InputOTPShapeContext);

  return (
    <div
      data-slot="input-otp-group"
      data-shape={shape}
      className={cn(
        'flex items-center has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
        shape === 'connected' && 'rounded-lg',
        shape === 'separated' && 'gap-3',
        className
      )}
      {...props}
    />
  );
}

function OTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const shape = React.useContext(InputOTPShapeContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      data-shape={shape}
      className={cn(
        'relative flex size-10 items-center justify-center bg-background text-sm transition-[color,box-shadow,background-color,border-color] outline-none aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-primary data-[active=true]:ring-3 data-[active=true]:ring-primary/20 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40',
        shape === 'connected' &&
          'border-y border-r border-input first:rounded-l-lg first:border-l last:rounded-r-lg',
        shape === 'separated' && 'rounded-lg border border-input',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

function OTPSeparator() {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      role="separator"
    >
      <MinusIcon />
    </div>
  );
}

function OTPField({
  className,
  maxLength = 6,
  variant = 'connected',
  autoComplete = 'one-time-code',
  ...props
}: InputOTPProps) {
  const slotCount = Number.isFinite(maxLength)
    ? Math.max(1, Math.floor(maxLength))
    : 6;
  const slots = Array.from({ length: slotCount }, (_, index) => index);
  const splitIndex = Math.ceil(slotCount / 2);
  const shape = variant === 'separated' ? 'separated' : 'connected';

  const renderSlots = (indices: number[]) =>
    indices.map((index) => <OTPSlot key={index} index={index} />);

  return (
    <InputOTPShapeContext.Provider value={shape}>
      <OTPInput
        {...props}
        autoComplete={autoComplete}
        className="disabled:cursor-not-allowed"
        containerClassName={cn(
          'cn-input-otp flex w-full items-center justify-center gap-3 has-disabled:opacity-50',
          className
        )}
        data-slot="input-otp"
        data-variant={variant}
        maxLength={slotCount}
        spellCheck={false}
      >
        {variant === 'connected' && slotCount > 1 ? (
          <>
            <OTPGroup>{renderSlots(slots.slice(0, splitIndex))}</OTPGroup>
            <OTPSeparator />
            <OTPGroup>{renderSlots(slots.slice(splitIndex))}</OTPGroup>
          </>
        ) : (
          <OTPGroup>{renderSlots(slots)}</OTPGroup>
        )}
      </OTPInput>
    </InputOTPShapeContext.Provider>
  );
}

function InputRoot({
  addonAfter,
  addonBefore,
  className,
  classNames,
  prefix,
  suffix,
  type,
  ...props
}: InputProps) {
  const hasDecoration =
    addonAfter != null ||
    addonBefore != null ||
    prefix != null ||
    suffix != null;

  if (hasDecoration) {
    return (
      <InputGroup className={cn(classNames?.root, className)}>
        {addonBefore != null ? (
          <InputGroup.Addon
            align="block-start"
            className={classNames?.addonBefore}
          >
            {addonBefore}
          </InputGroup.Addon>
        ) : null}
        {prefix != null ? (
          <InputGroup.Addon align="inline-start" className={classNames?.prefix}>
            {prefix}
          </InputGroup.Addon>
        ) : null}
        <InputGroup.Input
          {...props}
          className={classNames?.input}
          type={type}
        />
        {suffix != null ? (
          <InputGroup.Addon align="inline-end" className={classNames?.suffix}>
            {suffix}
          </InputGroup.Addon>
        ) : null}
        {addonAfter != null ? (
          <InputGroup.Addon
            align="block-end"
            className={classNames?.addonAfter}
          >
            {addonAfter}
          </InputGroup.Addon>
        ) : null}
      </InputGroup>
    );
  }

  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'h-9 w-full min-w-0 rounded-3xl border border-input bg-background px-3 py-1 text-base transition-[color,box-shadow,background-color,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary/35 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  );
}

function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex field-sizing-content min-h-16 w-full resize-none rounded-2xl border border-input bg-background px-3 py-3 text-base transition-[color,box-shadow,background-color,border-color] outline-none placeholder:text-muted-foreground hover:border-primary/35 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  );
}

const Input = Object.assign(InputRoot, {
  OTP: OTPField,
  TextArea,
});

export { Input };
export type {
  InputClassNames,
  InputOTPVariant,
  InputOTPProps,
  InputProps,
  TextAreaProps,
};
