import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

const markerVariants = cva(
  "group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-sm text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground",
  {
    variants: {
      variant: {
        default: '',
        separator:
          'before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border',
        border: 'border-b border-border pb-2',
      },
    },
  }
);

type MarkerClassNames = {
  content?: string;
  icon?: string;
};

type MarkerProps = Omit<useRender.ComponentProps<'div'>, 'children'> &
  VariantProps<typeof markerVariants> & {
    classNames?: MarkerClassNames;
    content: React.ReactNode;
    icon?: React.ReactNode;
  };

function Marker({
  className,
  classNames,
  content,
  icon,
  render,
  variant = 'default',
  ...props
}: MarkerProps) {
  return useRender({
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        children: (
          <>
            {icon != null ? (
              <span
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  classNames?.icon
                )}
                data-slot="marker-icon"
              >
                {icon}
              </span>
            ) : null}
            <span
              className={cn(
                'min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
                classNames?.content
              )}
              data-slot="marker-content"
            >
              {content}
            </span>
          </>
        ),
        className: cn(markerVariants({ className, variant })),
      },
      props
    ),
    render,
    state: {
      slot: 'marker',
      variant,
    },
  });
}

export { Marker, markerVariants, type MarkerClassNames, type MarkerProps };
