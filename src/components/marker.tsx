import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type MarkerVariantOptions = {
  class?: never;
  className?: string;
  variant?: 'default' | 'separator' | 'border' | null;
};

const markerVariants: (props?: MarkerVariantOptions) => string = cva(
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

type MarkerStyles = {
  [Slot in keyof MarkerClassNames]?: React.CSSProperties;
};

type MarkerSharedProps = VariantProps<typeof markerVariants> & {
  classNames?: MarkerClassNames;
  content: React.ReactNode;
  icon?: React.ReactNode;
  styles?: MarkerStyles;
};

type MarkerDivProps = Omit<React.ComponentProps<'div'>, 'children'> &
  MarkerSharedProps & {
    href?: never;
  };

type MarkerLinkProps = Omit<React.ComponentProps<'a'>, 'children' | 'href'> &
  MarkerSharedProps & {
    href: string;
  };

type MarkerProps = MarkerDivProps | MarkerLinkProps;

const Marker = ({
  className,
  classNames,
  content,
  icon,
  styles,
  variant: variantProp,
  ...props
}: MarkerProps) => {
  const defaults = useComponentDefaults('Marker');
  const variant = variantProp ?? defaults.variant ?? 'default';
  const children = (
    <>
      {icon != null ? (
        <span
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
            classNames?.icon
          )}
          data-slot="marker-icon"
          style={styles?.icon}
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
        style={styles?.content}
      >
        {content}
      </span>
    </>
  );
  const rootProps = {
    className: cn(markerVariants({ className, variant })),
    'data-slot': 'marker',
    'data-variant': variant,
  };

  if (typeof props.href === 'string') {
    return (
      <a {...props} {...rootProps}>
        {children}
      </a>
    );
  }

  return (
    <div {...props} {...rootProps}>
      {children}
    </div>
  );
};

export {
  Marker,
  markerVariants,
  type MarkerClassNames,
  type MarkerDivProps,
  type MarkerLinkProps,
  type MarkerProps,
  type MarkerStyles,
};
