import * as React from 'react';
import { cn } from '../lib/utils';

const Card = ({ className, ...props }: React.ComponentProps<'section'>) => (
  <section
    className={cn(
      'rounded-2xl border border-border bg-card text-card-foreground shadow-[0_18px_55px_-30px_rgb(15_23_42/0.35)]',
      className
    )}
    {...props}
  />
);
const CardHeader = ({
  className,
  ...props
}: React.ComponentProps<'header'>) => (
  <header className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
);
const CardTitle = ({ className, ...props }: React.ComponentProps<'h2'>) => (
  <h2
    className={cn('text-xl font-semibold tracking-tight', className)}
    {...props}
  />
);
const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => (
  <p
    className={cn('text-sm leading-6 text-muted-foreground', className)}
    {...props}
  />
);
const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn('px-6 pb-6', className)} {...props} />
);
const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<'footer'>) => (
  <footer
    className={cn('flex items-center gap-3 px-6 pb-6', className)}
    {...props}
  />
);

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
