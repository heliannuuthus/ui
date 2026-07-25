import * as React from 'react';
import { cn } from '../lib/utils';

const H1 = ({ className, ...props }: React.ComponentProps<'h1'>) => (
  <h1
    className={cn(
      'scroll-m-20 font-heading text-4xl font-extrabold tracking-tight text-balance lg:text-5xl',
      className
    )}
    {...props}
  />
);
const H2 = ({ className, ...props }: React.ComponentProps<'h2'>) => (
  <h2
    className={cn(
      'scroll-m-20 border-b border-border pb-2 font-heading text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
    {...props}
  />
);
const H3 = ({ className, ...props }: React.ComponentProps<'h3'>) => (
  <h3
    className={cn(
      'scroll-m-20 font-heading text-2xl font-semibold tracking-tight',
      className
    )}
    {...props}
  />
);
const H4 = ({ className, ...props }: React.ComponentProps<'h4'>) => (
  <h4
    className={cn(
      'scroll-m-20 font-heading text-xl font-semibold tracking-tight',
      className
    )}
    {...props}
  />
);
const TypographyP = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p
    className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
    {...props}
  />
);
const TypographyLead = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={cn('text-xl text-muted-foreground', className)} {...props} />
);
const TypographyLarge = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div
    className={cn('font-heading text-lg font-semibold', className)}
    {...props}
  />
);
const TypographySmall = ({
  className,
  ...props
}: React.ComponentProps<'small'>) => (
  <small
    className={cn('text-sm font-medium leading-none', className)}
    {...props}
  />
);
const TypographyMuted = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
);
const TypographyBlockquote = ({
  className,
  ...props
}: React.ComponentProps<'blockquote'>) => (
  <blockquote
    className={cn('mt-6 border-s-2 border-primary ps-6 italic', className)}
    {...props}
  />
);
const TypographyCode = ({
  className,
  ...props
}: React.ComponentProps<'code'>) => (
  <code
    className={cn(
      'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      className
    )}
    {...props}
  />
);

export {
  H1,
  H2,
  H3,
  H4,
  TypographyBlockquote as Blockquote,
  TypographyCode as Code,
  TypographyLarge as Large,
  TypographyLead as Lead,
  TypographyMuted as Muted,
  TypographyP as P,
  TypographySmall as Small,
};
