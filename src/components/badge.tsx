import { cva, type VariantProps } from 'class-variance-authority';
import {
  Children,
  forwardRef,
  type AnchorHTMLAttributes,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

import { cn } from '../lib/utils';

const badgeVariants = cva(
  'group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-3xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary:
          'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
        destructive:
          'bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20',
        outline:
          'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
        ghost:
          'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeIndicatorVariants = cva(
  'inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full border border-transparent px-1.5 text-[11px] leading-none font-semibold whitespace-nowrap tabular-nums ring-2 ring-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-white dark:bg-destructive',
        outline: 'border-border bg-background text-foreground',
        ghost: 'bg-muted text-muted-foreground',
        link: 'bg-primary text-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'destructive',
    },
  }
);

type BadgeStyleProps = VariantProps<typeof badgeVariants>;

type BadgeLabelProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color'> &
  BadgeStyleProps & {
    count?: never;
    dot?: never;
    href?: never;
  };

type BadgeLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'color' | 'href'
> &
  BadgeStyleProps & {
    count?: never;
    dot?: never;
    href: string;
  };

type BadgeNotificationSharedProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  'children' | 'color'
> &
  BadgeStyleProps & {
    children?: ReactNode;
    indicatorClassName?: string;
    indicatorLabel?: string;
    offset?: readonly [horizontal: number, vertical: number];
    overflowCount?: number;
    showZero?: boolean;
  };

type BadgeCountProps = BadgeNotificationSharedProps & {
  count: ReactNode;
  dot?: boolean;
  href?: never;
};

type BadgeDotProps = BadgeNotificationSharedProps & {
  count?: ReactNode;
  dot: true;
  href?: never;
};

type BadgeProps =
  BadgeLabelProps | BadgeLinkProps | BadgeCountProps | BadgeDotProps;

type BadgeRef = HTMLAnchorElement | HTMLSpanElement;

const getDisplayCount = (count: ReactNode, overflowCount: number) => {
  const maximum = Number.isFinite(overflowCount)
    ? Math.max(0, Math.floor(overflowCount))
    : 99;

  return typeof count === 'number' && count > maximum ? `${maximum}+` : count;
};

const hasNotification = (props: BadgeProps) => {
  return 'count' in props || props.dot === true;
};

const normalizeOffset = (value: number) => {
  return Number.isFinite(value) ? value : 0;
};

const Badge = forwardRef<BadgeRef, BadgeProps>((props, ref) => {
  if (hasNotification(props)) {
    const {
      children,
      className,
      count,
      dot = false,
      indicatorClassName,
      indicatorLabel,
      offset = [0, 0],
      overflowCount = 99,
      showZero = false,
      style,
      variant = 'destructive',
      ...notificationProps
    } = props as BadgeCountProps | BadgeDotProps;
    const hasCount = count !== null && count !== undefined;
    const isZero = count === 0 || count === '0';
    const visible = (dot && !hasCount) || (hasCount && (showZero || !isZero));
    const displayCount = getDisplayCount(count, overflowCount);
    const hasAnchor = Children.count(children) > 0;
    const horizontalOffset = normalizeOffset(offset[0]);
    const verticalOffset = normalizeOffset(offset[1]);
    const indicator = visible ? (
      <sup
        aria-label={indicatorLabel ?? (dot ? '有新通知' : undefined)}
        className={cn(
          badgeIndicatorVariants({ variant }),
          dot && 'size-2.5 min-w-0 p-0',
          hasAnchor && 'absolute top-0 right-0 z-10',
          indicatorClassName
        )}
        data-slot="badge-indicator"
        style={
          hasAnchor
            ? {
                transform: `translate(calc(50% + ${horizontalOffset}px), calc(-50% + ${verticalOffset}px))`,
              }
            : undefined
        }
      >
        {dot ? null : displayCount}
      </sup>
    ) : null;

    if (!hasAnchor) {
      return (
        <span
          {...notificationProps}
          ref={ref as ForwardedRef<HTMLSpanElement>}
          className={cn('inline-flex align-middle', className)}
          data-slot="badge-notification"
          style={style}
        >
          {children}
          {indicator}
        </span>
      );
    }

    return (
      <span
        {...notificationProps}
        ref={ref as ForwardedRef<HTMLSpanElement>}
        className={cn('relative inline-flex align-middle', className)}
        data-slot="badge-notification"
        style={style}
      >
        {children}
        {indicator}
      </span>
    );
  }

  if (typeof props.href === 'string') {
    const {
      className,
      href,
      variant = 'link',
      ...linkProps
    } = props as BadgeLinkProps;

    return (
      <a
        {...linkProps}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={cn(badgeVariants({ variant }), className)}
        data-slot="badge"
        href={href}
      />
    );
  }

  const {
    className,
    variant = 'default',
    ...labelProps
  } = props as BadgeLabelProps;

  return (
    <span
      {...labelProps}
      ref={ref as ForwardedRef<HTMLSpanElement>}
      className={cn(badgeVariants({ variant }), className)}
      data-slot="badge"
    />
  );
});

Badge.displayName = 'Badge';

export {
  Badge,
  badgeVariants,
  type BadgeCountProps,
  type BadgeDotProps,
  type BadgeLabelProps,
  type BadgeLinkProps,
  type BadgeProps,
  type BadgeRef,
};
