import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type AlertVariantOptions = {
  class?: never;
  className?: string;
  variant?:
    'default' | 'info' | 'success' | 'warning' | 'error' | 'destructive' | null;
};

const alertVariants: (props?: AlertVariantOptions) => string = cva(
  "group/alert relative grid w-full gap-0.5 rounded-2xl border px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        info: 'border-info/25 bg-info/10 text-info *:data-[slot=alert-description]:text-info/85',
        success:
          'border-success/25 bg-success/10 text-success *:data-[slot=alert-description]:text-success/85',
        warning:
          'border-warning/25 bg-warning/10 text-warning *:data-[slot=alert-description]:text-warning/85',
        error:
          'border-destructive/25 bg-destructive/10 text-destructive *:data-[slot=alert-description]:text-destructive/85',
        destructive:
          'border-destructive/25 bg-destructive/10 text-destructive *:data-[slot=alert-description]:text-destructive/85',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type AlertProps = Omit<React.ComponentProps<'div'>, 'title'> &
  VariantProps<typeof alertVariants> & {
    action?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    title?: React.ReactNode;
  };

const Alert = (alertProps: AlertProps) => {
  const defaults = useComponentDefaults('Alert');
  const {
    action,
    children,
    className,
    description,
    icon,
    title,
    variant = defaults.variant ?? 'default',
    ...props
  } = alertProps;

  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon}
      {title != null ? (
        <div
          data-slot="alert-title"
          className="font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground"
        >
          {title}
        </div>
      ) : null}
      {description != null || children != null ? (
        <div
          data-slot="alert-description"
          className="text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4"
        >
          {description ?? children}
        </div>
      ) : null}
      {action != null ? (
        <div data-slot="alert-action" className="absolute top-2.5 right-3">
          {action}
        </div>
      ) : null}
    </div>
  );
};

export { Alert, type AlertProps };
