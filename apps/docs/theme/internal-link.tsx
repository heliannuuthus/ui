import { buttonVariants, cn, type ButtonLinkProps } from '@heliannuuthus/ui';
import { Link } from '@rspress/core/theme-original';

export type InternalButtonLinkProps = ButtonLinkProps;

export const InternalButtonLink = ({
  'aria-disabled': ariaDisabled,
  block = false,
  className,
  disabled = false,
  href,
  onClick,
  size = 'md',
  tabIndex,
  variant = 'default',
  ...props
}: InternalButtonLinkProps) => (
  <Link
    {...props}
    aria-disabled={disabled ? true : ariaDisabled}
    className={cn(
      buttonVariants({ variant, size, className }),
      block && 'w-full',
      disabled &&
        'cursor-not-allowed opacity-50 active:translate-y-0 active:scale-100'
    )}
    data-disabled={disabled ? '' : undefined}
    data-size={size}
    data-slot="button"
    data-variant={variant}
    href={disabled ? undefined : href}
    onClick={(event) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event);
    }}
    tabIndex={disabled ? -1 : tabIndex}
  />
);
