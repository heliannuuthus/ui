import * as React from 'react';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type CardClassNames = {
  header?: string;
  title?: string;
  description?: string;
  action?: string;
  content?: string;
  footer?: string;
};

type CardStyles = {
  [Slot in keyof CardClassNames]?: React.CSSProperties;
};

type CardVariant = 'elevated' | 'outline' | 'ghost';

type CardHeader = {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

type CardProps = React.ComponentProps<'div'> & {
  variant?: CardVariant;
  header?: CardHeader;
  footer?: React.ReactNode;
  classNames?: CardClassNames;
  styles?: CardStyles;
};

type CardProviderDefaults = Pick<CardProps, 'variant'>;

const Card = (cardProps: CardProps) => {
  const defaults = useComponentDefaults('Card');
  const {
    className,
    variant = defaults.variant ?? 'elevated',
    header,
    footer,
    classNames,
    styles,
    children,
    ...props
  } = cardProps;

  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(
        'group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-4xl bg-card pt-(--card-spacing) pb-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(6)] has-[>[data-slot=card-footer]]:pb-0 has-[>[data-slot=card-header]]:pt-0 has-[>img:first-child]:pt-0 data-[variant=elevated]:shadow-md data-[variant=elevated]:ring-1 data-[variant=elevated]:ring-foreground/5 data-[variant=outline]:border data-[variant=outline]:border-border data-[variant=ghost]:bg-transparent dark:data-[variant=elevated]:ring-foreground/10',
        className
      )}
      {...props}
    >
      {header != null && (
        <div
          data-slot="card-header"
          className={cn(
            'group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-4xl border-b px-(--card-spacing) pt-(--card-spacing) pb-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
            classNames?.header
          )}
          style={styles?.header}
        >
          {header.title != null && (
            <div
              data-slot="card-title"
              className={cn(
                'font-heading text-base font-medium',
                classNames?.title
              )}
              style={styles?.title}
            >
              {header.title}
            </div>
          )}
          {header.description != null && (
            <div
              data-slot="card-description"
              className={cn(
                'text-sm text-muted-foreground',
                classNames?.description
              )}
              style={styles?.description}
            >
              {header.description}
            </div>
          )}
          {header.action != null && (
            <div
              data-slot="card-action"
              className={cn(
                'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
                classNames?.action
              )}
              style={styles?.action}
            >
              {header.action}
            </div>
          )}
        </div>
      )}
      <div
        data-slot="card-content"
        className={cn('px-(--card-spacing)', classNames?.content)}
        style={styles?.content}
      >
        {children}
      </div>
      {footer != null && (
        <div
          data-slot="card-footer"
          className={cn(
            'flex items-center rounded-b-4xl border-t px-(--card-spacing) pt-(--card-spacing) pb-(--card-spacing)',
            classNames?.footer
          )}
          style={styles?.footer}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export {
  Card,
  type CardHeader,
  type CardClassNames,
  type CardProps,
  type CardProviderDefaults,
  type CardStyles,
  type CardVariant,
};
