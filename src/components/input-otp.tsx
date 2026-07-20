import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';

import { cn } from '../lib/utils';
import { MinusIcon } from 'lucide-react';

type InputOTPShape = 'connected' | 'separated' | 'circle';

const InputOTPShapeContext = React.createContext<InputOTPShape>('connected');

function InputOTP({
  className,
  containerClassName,
  shape = 'connected',
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
  shape?: InputOTPShape;
}) {
  const normalizedShape = shape === 'circle' ? 'separated' : shape;

  return (
    <InputOTPShapeContext.Provider value={normalizedShape}>
      <OTPInput
        data-slot="input-otp"
        data-shape={normalizedShape}
        containerClassName={cn(
          'cn-input-otp flex items-center gap-3 has-disabled:opacity-50',
          containerClassName
        )}
        spellCheck={false}
        className={cn('disabled:cursor-not-allowed', className)}
        {...props}
      />
    </InputOTPShapeContext.Provider>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
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

function InputOTPSlot({
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

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  type InputOTPShape,
};
