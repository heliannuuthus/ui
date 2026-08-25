import { cva } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type TagType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';

type TagProps = ComponentPropsWithoutRef<'span'> & {
  type?: TagType;
};

type TagProviderDefaults = Pick<TagProps, 'type'>;

const tagVariants = cva(
  'inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-3xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:pointer-events-none [&>svg]:size-3!',
  {
    variants: {
      type: {
        default: 'bg-muted text-muted-foreground',
        primary: 'bg-primary/10 text-primary',
        info: 'bg-info/10 text-info',
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        error: 'bg-destructive/10 text-destructive',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  }
);

const Tag = forwardRef<HTMLSpanElement, TagProps>((tagProps, ref) => {
  const defaults = useComponentDefaults('Tag');
  const { className, type = defaults.type ?? 'default', ...props } = tagProps;

  return (
    <span
      {...props}
      ref={ref}
      className={cn(tagVariants({ type }), className)}
      data-slot="tag"
      data-type={type}
    />
  );
});

Tag.displayName = 'Tag';

export { Tag, type TagProps, type TagProviderDefaults, type TagType };
