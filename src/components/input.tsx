import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';

import { cn } from '../lib/utils';
import {
  InputOTP as InputOTPPrimitive,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from './input-otp';

type InputOTPVariant = 'connected' | 'segmented' | 'separated' | 'circle';

type NativeInputProps = React.ComponentProps<'input'> & {
  variant?: never;
};

type OTPInputProps = Omit<
  React.ComponentProps<typeof InputOTPPrimitive>,
  | 'children'
  | 'className'
  | 'containerClassName'
  | 'maxLength'
  | 'render'
  | 'shape'
  | 'type'
> & {
  type: 'otp';
  variant?: InputOTPVariant;
  maxLength?: number;
  className?: string;
};

type InputProps = NativeInputProps | OTPInputProps;

function OTPInput({
  className,
  maxLength = 6,
  variant = 'connected',
  autoComplete = 'one-time-code',
  ...props
}: OTPInputProps) {
  const slotCount = Number.isFinite(maxLength)
    ? Math.max(1, Math.floor(maxLength))
    : 6;
  const slots = Array.from({ length: slotCount }, (_, index) => index);
  const splitIndex = Math.ceil(slotCount / 2);
  const normalizedVariant = variant === 'circle' ? 'separated' : variant;
  const shape = normalizedVariant === 'separated' ? 'separated' : 'connected';

  const renderSlots = (indices: number[]) =>
    indices.map((index) => (
      <InputOTPSlot key={`otp-slot-${index}`} index={index} />
    ));

  return (
    <InputOTPPrimitive
      {...props}
      autoComplete={autoComplete}
      containerClassName={className}
      data-variant={normalizedVariant}
      maxLength={slotCount}
      shape={shape}
    >
      {normalizedVariant === 'segmented' && slotCount > 1 ? (
        <>
          <InputOTPGroup>
            {renderSlots(slots.slice(0, splitIndex))}
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>{renderSlots(slots.slice(splitIndex))}</InputOTPGroup>
        </>
      ) : (
        <InputOTPGroup>{renderSlots(slots)}</InputOTPGroup>
      )}
    </InputOTPPrimitive>
  );
}

function Input(props: InputProps) {
  if (props.type === 'otp') {
    return <OTPInput {...(props as OTPInputProps)} />;
  }

  const {
    className,
    type,
    variant: _variant,
    ...nativeProps
  } = props as NativeInputProps;

  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'h-9 w-full min-w-0 rounded-3xl border border-input bg-background px-3 py-1 text-base transition-[color,box-shadow,background-color,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary/35 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted/50 disabled:opacity-60 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...nativeProps}
    />
  );
}

export { Input, type InputOTPVariant, type InputProps, type OTPInputProps };
