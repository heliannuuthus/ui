import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
} from 'react';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';
import { Stack, type StackCompactProps } from './stack';

type ButtonVariantOptions = {
  class?: never;
  className?: string;
  size?:
    | 'default'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'icon'
    | 'icon-xs'
    | 'icon-sm'
    | 'icon-lg'
    | null;
  variant?:
    | 'default'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'destructive'
    | 'link'
    | null;
};

const buttonVariants: (props?: ButtonVariantOptions) => string = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px active:not-aria-[haspopup]:scale-[0.97] motion-reduce:active:transform-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:border-primary/25 aria-expanded:bg-accent aria-expanded:text-primary dark:bg-transparent dark:hover:bg-input/30',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-accent aria-expanded:text-primary dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5',
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        lg: 'h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        icon: 'size-9',
        'icon-xs': "size-6 [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonGroupVariants = cva(
  "[&>[data-slot=button]]:bg-clip-border has-[>[data-slot=button-group]]:gap-2 has-[>[data-variant=outline]]:*:data-[slot=input-group]:border-border has-[>[data-variant=outline]]:*:data-[slot=select-trigger]:border-border has-[>[data-variant=outline]]:[&>[data-slot=input-group]:has(:focus-visible)]:border-ring has-[>[data-variant=outline]]:[&>[data-slot=select-trigger]:focus-visible]:border-ring has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-4xl [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[>[data-variant=outline]]:[&>input]:border-border has-[>[data-variant=outline]]:[&>input:focus-visible]:border-ring"
);

type ButtonStyleProps = VariantProps<typeof buttonVariants> & {
  block?: boolean;
};

type AnchorOnlyProps = {
  [
    Key in Exclude<
      keyof AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonHTMLAttributes<HTMLButtonElement>
    >
  ]?: never;
};

type NativeButtonOnlyProps = Omit<
  {
    [
      Key in Exclude<
        keyof ButtonHTMLAttributes<HTMLButtonElement>,
        keyof AnchorHTMLAttributes<HTMLAnchorElement>
      >
    ]?: never;
  },
  'disabled'
>;

type ButtonNativeProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  ButtonStyleProps & {
    href?: never;
  } & AnchorOnlyProps;

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'color' | 'href'
> &
  ButtonStyleProps & {
    disabled?: boolean;
    href: string;
  } & NativeButtonOnlyProps;

type ButtonProps = ButtonNativeProps | ButtonLinkProps;
type ButtonProviderDefaults = Pick<ButtonProps, 'block' | 'size' | 'variant'>;
type ButtonRef = HTMLAnchorElement | HTMLButtonElement;
type ButtonGroupProps = StackCompactProps;

const ButtonRender = (props: ButtonProps, ref: ForwardedRef<ButtonRef>) => {
  const defaults = useComponentDefaults('Button');

  if (props.href !== undefined) {
    const {
      'aria-disabled': ariaDisabled,
      block = defaults.block ?? false,
      className,
      disabled = false,
      href,
      onClick,
      size = defaults.size ?? 'default',
      tabIndex,
      variant = defaults.variant ?? 'default',
      ...linkProps
    } = props;

    return (
      <a
        {...linkProps}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        data-disabled={disabled ? '' : undefined}
        data-size={size}
        data-slot="button"
        data-variant={variant}
        aria-disabled={disabled ? true : ariaDisabled}
        className={cn(
          buttonVariants({ variant, size, className }),
          block && 'w-full',
          disabled &&
            'cursor-not-allowed opacity-50 active:translate-y-0 active:scale-100'
        )}
        href={disabled ? undefined : href}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          onClick?.(event);
        }}
      />
    );
  }

  const {
    block = defaults.block ?? false,
    className,
    size = defaults.size ?? 'default',
    type = 'button',
    variant = defaults.variant ?? 'default',
    ...buttonProps
  } = props;

  return (
    <ButtonPrimitive
      {...buttonProps}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      data-slot="button"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ variant, size, className }),
        block && 'w-full'
      )}
      type={type}
    />
  );
};

const ButtonRoot = forwardRef<ButtonRef, ButtonProps>(ButtonRender);

ButtonRoot.displayName = 'Button';

const ButtonGroup = ({
  block = false,
  className,
  orientation,
  children,
  ...props
}: ButtonGroupProps) => {
  return (
    <Stack.Compact
      role="group"
      data-slot="button-group"
      block={block}
      orientation={orientation ?? 'horizontal'}
      className={cn(
        buttonGroupVariants(),
        block && '[&>[data-slot=button]]:flex-1',
        className
      )}
      {...props}
    >
      {children}
    </Stack.Compact>
  );
};

const Button = Object.assign(ButtonRoot, {
  Group: ButtonGroup,
});

export {
  Button,
  buttonVariants,
  type ButtonGroupProps,
  type ButtonLinkProps,
  type ButtonNativeProps,
  type ButtonProps,
  type ButtonProviderDefaults,
  type ButtonRef,
};
