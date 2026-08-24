import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

type AttachmentVariantOptions = {
  class?: never;
  className?: string;
  orientation?: 'horizontal' | 'vertical' | null;
  size?: 'default' | 'sm' | 'xs' | null;
};

const attachmentVariants: (props?: AttachmentVariantOptions) => string = cva(
  'group/attachment relative flex w-fit max-w-full min-w-0 shrink-0 flex-wrap rounded-3xl border bg-card text-card-foreground transition-colors focus-within:ring-1 focus-within:ring-ring/30 has-[>a,>button]:hover:bg-muted/50 data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed',
  {
    variants: {
      size: {
        default:
          'gap-2 text-sm has-data-[slot=attachment-content]:px-2.5 has-data-[slot=attachment-content]:py-2 has-data-[slot=attachment-media]:p-2',
        sm: 'gap-2.5 text-xs has-data-[slot=attachment-content]:px-2 has-data-[slot=attachment-content]:py-1.5 has-data-[slot=attachment-media]:p-1.5',
        xs: 'gap-1.5 rounded-2xl text-xs has-data-[slot=attachment-content]:px-1.5 has-data-[slot=attachment-content]:py-1 has-data-[slot=attachment-media]:p-1',
      },
      orientation: {
        horizontal: 'min-w-40 items-center',
        vertical: 'w-24 flex-col has-data-[slot=attachment-content]:w-30',
      },
    },
  }
);

type AttachmentProps = Omit<React.ComponentProps<'div'>, 'children' | 'title'> &
  VariantProps<typeof attachmentVariants> & {
    actions?: React.ReactNode;
    description?: React.ReactNode;
    media?: React.ReactNode;
    mediaType?: 'icon' | 'image';
    state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done';
    title: React.ReactNode;
    trigger?: React.ReactElement;
  };

const Attachment = ({
  actions,
  className,
  description,
  media,
  mediaType = 'icon',
  title,
  trigger,
  state = 'done',
  size = 'default',
  orientation = 'horizontal',
  ...props
}: AttachmentProps) => {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    >
      {media != null ? (
        <AttachmentMedia variant={mediaType}>{media}</AttachmentMedia>
      ) : null}
      <AttachmentContent>
        <AttachmentTitle>{title}</AttachmentTitle>
        {description != null ? (
          <AttachmentDescription>{description}</AttachmentDescription>
        ) : null}
      </AttachmentContent>
      {actions != null ? (
        <AttachmentActions>{actions}</AttachmentActions>
      ) : null}
      {trigger != null ? <AttachmentTrigger render={trigger} /> : null}
    </div>
  );
};

const attachmentMediaVariants = cva(
  "relative flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-muted text-foreground group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-xl group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        icon: '',
        image:
          'opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'icon',
    },
  }
);

const AttachmentMedia = ({
  className,
  variant = 'icon',
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof attachmentMediaVariants>) => {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  );
};

const AttachmentContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        'max-w-full min-w-0 flex-1 leading-tight group-data-[orientation=vertical]/attachment:px-1',
        className
      )}
      {...props}
    />
  );
};

const AttachmentTitle = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        'block max-w-full min-w-0 truncate font-medium group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer',
        className
      )}
      {...props}
    />
  );
};

const AttachmentDescription = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        'mt-0.5 block min-w-0 truncate text-xs text-muted-foreground group-data-[state=error]/attachment:text-destructive/80',
        'max-w-full',
        className
      )}
      {...props}
    />
  );
};

const AttachmentActions = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        'relative z-20 flex shrink-0 items-center group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:right-3 group-data-[orientation=vertical]/attachment:gap-1',
        className
      )}
      {...props}
    />
  );
};

const AttachmentTrigger = ({
  className,
  render,
  type,
  ...props
}: useRender.ComponentProps<'button'>) => {
  return useRender({
    defaultTagName: 'button',
    props: mergeProps<'button'>(
      {
        type: render ? type : (type ?? 'button'),
        className: cn('absolute inset-0 z-10 outline-none', className),
      },
      props
    ),
    render,
    state: {
      slot: 'attachment-trigger',
    },
  });
};

type AttachmentGroupItem = AttachmentProps & {
  key?: React.Key;
};

type AttachmentGroupProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  items: readonly AttachmentGroupItem[];
};

const AttachmentGroup = ({
  className,
  items,
  ...props
}: AttachmentGroupProps) => {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        'flex min-w-0 scroll-fade-x snap-x snap-mandatory scroll-px-1 scrollbar-none gap-3 overflow-x-auto overscroll-x-contain py-1 *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start',
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <Attachment
          {...item}
          key={item.key ?? `${String(item.title)}-${index}`}
        />
      ))}
    </div>
  );
};

const AttachmentCompound = Object.assign(Attachment, {
  Group: AttachmentGroup,
});

export {
  AttachmentCompound as Attachment,
  type AttachmentGroupItem,
  type AttachmentGroupProps,
  type AttachmentProps,
};
