import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';

import { cn } from '../lib/utils';

type InputProps = React.ComponentProps<'input'>;
type TextAreaProps = React.ComponentProps<'textarea'>;

function InputRoot({ className, type, ...props }: InputProps) {
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

const Input = Object.assign(InputRoot, { TextArea });

export { Input, TextArea };
export type { InputProps, TextAreaProps };
