import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const alertVariants = cva('grid gap-1 rounded-xl border p-4 text-sm', {
  variants: {
    variant: {
      default: 'border-border bg-muted/55 text-foreground',
      destructive: 'border-destructive/25 bg-destructive/5 text-destructive',
      success: 'border-success/25 bg-success/5 text-success',
    },
  },
  defaultVariants: { variant: 'default' },
});
function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}
const AlertTitle = ({ className, ...props }: React.ComponentProps<'h3'>) => (
  <h3 className={cn('font-semibold', className)} {...props} />
);
const AlertDescription = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div className={cn('text-current/80', className)} {...props} />
);
export { Alert, AlertDescription, AlertTitle };
