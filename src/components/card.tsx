import * as React from 'react';

import { cn } from '../lib/utils';

type CardClassNames = {
  header?: string;
  title?: string;
  description?: string;
  action?: string;
  content?: string;
  footer?: string;
};

type CardVariant = 'elevated' | 'outline' | 'ghost';

type CardProps = Omit<React.ComponentProps<'div'>, 'title'> & {
  variant?: CardVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: CardClassNames;
};

function Card({
  className,
  variant = 'elevated',
  title,
  description,
  action,
  footer,
  classNames,
  children,
  ...props
}: CardProps) {
  const hasHeader = title != null || description != null || action != null;

  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(
        'group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-4xl bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[variant=elevated]:shadow-md data-[variant=elevated]:ring-1 data-[variant=elevated]:ring-foreground/5 data-[variant=outline]:border data-[variant=outline]:border-border data-[variant=ghost]:bg-transparent dark:data-[variant=elevated]:ring-foreground/10',
        className
      )}
      {...props}
    >
      {hasHeader && (
        <div
          data-slot="card-header"
          className={cn(
            'group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-4xl border-b px-(--card-spacing) pb-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
            classNames?.header
          )}
        >
          {title != null && (
            <div
              data-slot="card-title"
              className={cn(
                'font-heading text-base font-medium',
                classNames?.title
              )}
            >
              {title}
            </div>
          )}
          {description != null && (
            <div
              data-slot="card-description"
              className={cn(
                'text-sm text-muted-foreground',
                classNames?.description
              )}
            >
              {description}
            </div>
          )}
          {action != null && (
            <div
              data-slot="card-action"
              className={cn(
                'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
                classNames?.action
              )}
            >
              {action}
            </div>
          )}
        </div>
      )}
      <div
        data-slot="card-content"
        className={cn('px-(--card-spacing)', classNames?.content)}
      >
        {children}
      </div>
      {footer != null && (
        <div
          data-slot="card-footer"
          className={cn(
            'flex items-center rounded-b-4xl border-t px-(--card-spacing) pt-(--card-spacing)',
            classNames?.footer
          )}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

export { Card, type CardClassNames, type CardProps, type CardVariant };
