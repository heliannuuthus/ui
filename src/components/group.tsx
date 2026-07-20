import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const groupVariants = cva(
  'group/group relative flex w-full min-w-0 bg-background transition-[color,box-shadow,background-color,border-color] outline-none has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-3 has-[[aria-invalid=true]]:ring-destructive/20 dark:has-[[aria-invalid=true]]:ring-destructive/40',
  {
    variants: {
      orientation: {
        horizontal:
          'h-9 items-center rounded-4xl border border-input hover:border-primary/35 has-[[data-slot=input]:focus-visible]:border-primary has-[[data-slot=input]:focus-visible]:ring-3 has-[[data-slot=input]:focus-visible]:ring-primary/20 has-[[data-slot=textarea]:focus-visible]:border-primary has-[[data-slot=textarea]:focus-visible]:ring-3 has-[[data-slot=textarea]:focus-visible]:ring-primary/20 has-[>input:focus-visible]:border-primary has-[>input:focus-visible]:ring-3 has-[>input:focus-visible]:ring-primary/20',
        vertical:
          'h-auto flex-col items-stretch rounded-3xl border border-input hover:border-primary/35 has-[[data-slot=input]:focus-visible]:border-primary has-[[data-slot=input]:focus-visible]:ring-3 has-[[data-slot=input]:focus-visible]:ring-primary/20 has-[[data-slot=textarea]:focus-visible]:border-primary has-[[data-slot=textarea]:focus-visible]:ring-3 has-[[data-slot=textarea]:focus-visible]:ring-primary/20',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

type GroupProps = React.ComponentProps<'div'> &
  VariantProps<typeof groupVariants>;

function Group({
  className,
  orientation = 'horizontal',
  ...props
}: GroupProps) {
  return (
    <div
      role="group"
      data-slot="group"
      data-orientation={orientation}
      className={cn(
        groupVariants({ orientation }),
        'in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[>textarea:focus-visible]:border-primary has-[>textarea:focus-visible]:ring-3 has-[>textarea:focus-visible]:ring-primary/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:rounded-3xl has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:rounded-3xl has-[>textarea]:h-auto has-[>textarea]:rounded-2xl has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 [&>input]:flex-1 [&>input]:rounded-none [&>input]:border-0 [&>input]:bg-transparent [&>input]:shadow-none [&>input]:ring-0 [&>input]:focus-visible:ring-0 [&>textarea]:min-h-20 [&>textarea]:flex-1 [&>textarea]:resize-none [&>textarea]:rounded-none [&>textarea]:border-0 [&>textarea]:bg-transparent [&>textarea]:shadow-none [&>textarea]:ring-0 [&>textarea]:focus-visible:ring-0 [&>[data-slot=input]]:flex-1 [&>[data-slot=input]]:rounded-none [&>[data-slot=input]]:border-0 [&>[data-slot=input]]:bg-transparent [&>[data-slot=input]]:shadow-none [&>[data-slot=input]]:ring-0 [&>[data-slot=input]]:focus-visible:ring-0 [&>[data-slot=select-trigger]]:flex-1 [&>[data-slot=select-trigger]]:rounded-none [&>[data-slot=select-trigger]]:border-0 [&>[data-slot=select-trigger]]:bg-transparent [&>[data-slot=select-trigger]]:shadow-none [&>[data-slot=select-trigger]]:ring-0 [&>[data-slot=select-trigger]]:focus-visible:ring-0 [&>[data-slot=textarea]]:min-h-20 [&>[data-slot=textarea]]:flex-1 [&>[data-slot=textarea]]:resize-none [&>[data-slot=textarea]]:rounded-none [&>[data-slot=textarea]]:border-0 [&>[data-slot=textarea]]:bg-transparent [&>[data-slot=textarea]]:shadow-none [&>[data-slot=textarea]]:ring-0 [&>[data-slot=textarea]]:focus-visible:ring-0',
        className
      )}
      {...props}
    />
  );
}

const groupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-2 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/group:opacity-50 **:data-[slot=kbd]:rounded-3xl **:data-[slot=kbd]:bg-muted-foreground/10 **:data-[slot=kbd]:px-1.5 [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-3 has-[>button]:-ml-1 has-[>kbd]:-ml-1',
        'inline-end': 'order-last pr-3 has-[>button]:-mr-1 has-[>kbd]:-mr-1',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 group-has-[>input]/group:pt-3.5 [.border-b]:pb-3.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 group-has-[>input]/group:pb-3.5 [.border-t]:pt-3.5',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  }
);

type GroupAddonProps = React.ComponentProps<'div'> &
  VariantProps<typeof groupAddonVariants>;

function GroupAddon({
  className,
  align = 'inline-start',
  ...props
}: GroupAddonProps) {
  return (
    <div
      role="presentation"
      data-slot="group-addon"
      data-align={align}
      className={cn(groupAddonVariants({ align }), className)}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button, a')) return;
        event.currentTarget.parentElement
          ?.querySelector<HTMLElement>('input, textarea')
          ?.focus();
      }}
      {...props}
    />
  );
}

export {
  Group,
  GroupAddon,
  type GroupAddonProps,
  type GroupProps,
  groupAddonVariants,
  groupVariants,
};
