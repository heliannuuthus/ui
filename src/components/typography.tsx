import { cva } from 'class-variance-authority';
import {
  createElement,
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardedRef,
  type ReactElement,
  type RefAttributes,
} from 'react';

import { cn } from '../lib/utils';

type TypographyTitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

type TypographyTitleProps = ComponentPropsWithoutRef<'h1'> & {
  level?: TypographyTitleLevel;
};

const titleElements = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const satisfies Record<TypographyTitleLevel, keyof HTMLElementTagNameMap>;

const titleVariants = cva('scroll-m-20 font-heading tracking-tight', {
  variants: {
    level: {
      1: 'text-4xl font-extrabold text-balance lg:text-5xl',
      2: 'border-b border-border pb-2 text-3xl font-semibold first:mt-0',
      3: 'text-2xl font-semibold',
      4: 'text-xl font-semibold',
      5: 'text-lg font-semibold',
      6: 'text-base font-semibold',
    },
  },
  defaultVariants: {
    level: 1,
  },
});

const TypographyTitle = forwardRef<HTMLHeadingElement, TypographyTitleProps>(
  ({ className, level = 1, ...props }, ref) => {
    const Component = titleElements[level];

    return (
      <Component
        ref={ref}
        className={cn(titleVariants({ level }), className)}
        {...props}
      />
    );
  }
);

TypographyTitle.displayName = 'Typography.Title';

type TypographyTextElement = 'div' | 'p' | 'small' | 'span';
type TypographyTextSize = 'sm' | 'md' | 'lg' | 'xl';
type TypographyTextTone = 'default' | 'muted';
type TypographyTextWeight = 'normal' | 'medium' | 'semibold';

type TypographyTextOwnProps<Element extends TypographyTextElement> = {
  as?: Element;
  size?: TypographyTextSize;
  tone?: TypographyTextTone;
  weight?: TypographyTextWeight;
};

type TypographyTextProps<Element extends TypographyTextElement = 'span'> =
  TypographyTextOwnProps<Element> &
    Omit<
      ComponentPropsWithoutRef<Element>,
      keyof TypographyTextOwnProps<Element>
    >;

type TypographyTextComponent = <Element extends TypographyTextElement = 'span'>(
  props: TypographyTextProps<Element> & RefAttributes<ComponentRef<Element>>
) => ReactElement | null;

const textVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm leading-5',
      md: 'text-base leading-7',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-8',
    },
    tone: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: {
    size: 'md',
    tone: 'default',
    weight: 'normal',
  },
});

const TypographyTextRender = <Element extends TypographyTextElement = 'span'>(
  {
    as,
    className,
    size = 'md',
    tone = 'default',
    weight = 'normal',
    ...props
  }: TypographyTextProps<Element>,
  ref: ForwardedRef<ComponentRef<Element>>
) => {
  return createElement(as ?? 'span', {
    ...props,
    ref,
    className: cn(textVariants({ size, tone, weight }), className),
  });
};

const TypographyTextRoot = forwardRef(TypographyTextRender);

TypographyTextRoot.displayName = 'Typography.Text';

const TypographyText = TypographyTextRoot as TypographyTextComponent;

type TypographyBlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const TypographyBlockquote = forwardRef<
  HTMLQuoteElement,
  TypographyBlockquoteProps
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn('mt-6 border-s-2 border-primary ps-6 italic', className)}
    {...props}
  />
));

TypographyBlockquote.displayName = 'Typography.Blockquote';

type TypographyCodeProps = ComponentPropsWithoutRef<'code'>;

const TypographyCode = forwardRef<HTMLElement, TypographyCodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
      {...props}
    />
  )
);

TypographyCode.displayName = 'Typography.Code';

const Typography = {
  Blockquote: TypographyBlockquote,
  Code: TypographyCode,
  Text: TypographyText,
  Title: TypographyTitle,
} as const;

export {
  Typography,
  type TypographyBlockquoteProps,
  type TypographyCodeProps,
  type TypographyTextElement,
  type TypographyTextProps,
  type TypographyTextSize,
  type TypographyTextTone,
  type TypographyTextWeight,
  type TypographyTitleLevel,
  type TypographyTitleProps,
};
