import { cva, type VariantProps } from 'class-variance-authority';
import { InboxIcon } from 'lucide-react';

import { cn } from '../lib/utils';

type EmptyVariant = 'default' | 'custom';

interface EmptyProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  actions?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  variant?: EmptyVariant;
}

function Empty({
  actions,
  children,
  className,
  description,
  icon = <InboxIcon aria-hidden="true" />,
  title = '暂无内容',
  variant = 'default',
  ...props
}: EmptyProps) {
  const isCustom = variant === 'custom' || children != null;

  return (
    <div
      data-slot="empty"
      data-variant={isCustom ? 'custom' : 'default'}
      className={cn(
        'flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-2xl border-dashed p-12 text-center text-balance',
        className
      )}
      {...props}
    >
      {isCustom ? (
        children
      ) : (
        <>
          <EmptyHeader>
            {icon != null ? (
              <EmptyMedia aria-hidden="true" variant="icon">
                {icon}
              </EmptyMedia>
            ) : null}
            {title != null ? <EmptyTitle>{title}</EmptyTitle> : null}
            {description != null ? (
              <EmptyDescription>{description}</EmptyDescription>
            ) : null}
          </EmptyHeader>
          {actions != null ? <EmptyContent>{actions}</EmptyContent> : null}
        </>
      )}
    </div>
  );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-header"
      className={cn('flex max-w-sm flex-col items-center gap-2', className)}
      {...props}
    />
  );
}

const emptyMediaVariants = cva(
  'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-background text-muted-foreground shadow-xs ring-4 ring-muted/45 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-title"
      className={cn(
        'font-heading text-lg font-medium tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="empty-description"
      className={cn(
        'text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className
      )}
      {...props}
    />
  );
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
        className
      )}
      {...props}
    />
  );
}

export {
  Empty,
  type EmptyProps,
  type EmptyVariant,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};
