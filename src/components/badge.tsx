import {
  Children,
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from 'react';

import { cn } from '../lib/utils';

type BadgeClasses = {
  indicator?: string;
};

type BadgeStyles = {
  indicator?: CSSProperties;
};

type BadgeContentIndicator = Exclude<ReactNode, boolean | null | undefined>;

type BadgeSharedProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'> & {
  children?: ReactNode;
  classes?: BadgeClasses;
  max?: number;
  offset?: readonly [horizontal: number, vertical: number];
  styles?: BadgeStyles;
};

type BadgeDotProps = BadgeSharedProps & {
  indicator: true;
  label: string;
};

type BadgeContentProps = BadgeSharedProps & {
  indicator: BadgeContentIndicator;
  label?: string;
};

type BadgeHiddenProps = BadgeSharedProps & {
  indicator?: false | null | undefined;
  label?: string;
};

type BadgeProps = BadgeDotProps | BadgeContentProps | BadgeHiddenProps;

const normalizeFiniteNumber = (value: number, fallback = 0) => {
  return Number.isFinite(value) ? value : fallback;
};

const getDisplayIndicator = (indicator: BadgeContentIndicator, max: number) => {
  const maximum = Math.max(0, Math.floor(normalizeFiniteNumber(max, 99)));

  return typeof indicator === 'number' && indicator > maximum
    ? `${maximum}+`
    : indicator;
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className,
      classes,
      indicator,
      label,
      max = 99,
      offset = [0, 0],
      style,
      styles,
      ...props
    },
    ref
  ) => {
    const hasAnchor = Children.count(children) > 0;
    const visible =
      indicator !== false && indicator !== null && indicator !== undefined;
    const dot = indicator === true;
    const horizontalOffset = normalizeFiniteNumber(offset[0]);
    const verticalOffset = normalizeFiniteNumber(offset[1]);

    return (
      <span
        {...props}
        ref={ref}
        className={cn(
          'inline-flex align-middle',
          hasAnchor && 'relative',
          className
        )}
        data-slot="badge"
        style={style}
      >
        {children}
        {visible ? (
          <sup
            aria-label={label}
            className={cn(
              'inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full border border-transparent bg-destructive px-1.5 text-[11px] leading-none font-semibold text-white whitespace-nowrap tabular-nums ring-2 ring-background dark:bg-destructive',
              dot && 'size-2.5 min-w-0 p-0',
              hasAnchor &&
                'absolute top-0 end-0 z-10 translate-x-[calc(50%+var(--badge-offset-x))] translate-y-[calc(-50%+var(--badge-offset-y))] rtl:translate-x-[calc(-50%-var(--badge-offset-x))]',
              classes?.indicator
            )}
            data-slot="badge-indicator"
            style={
              {
                '--badge-offset-x': `${horizontalOffset}px`,
                '--badge-offset-y': `${verticalOffset}px`,
                ...styles?.indicator,
              } as CSSProperties
            }
          >
            {dot
              ? null
              : getDisplayIndicator(indicator as BadgeContentIndicator, max)}
          </sup>
        ) : null}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, type BadgeClasses, type BadgeProps, type BadgeStyles };
