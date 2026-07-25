import { cva } from 'class-variance-authority';

import { cn } from '../lib/utils';
import { Compact, type StackCompactProps } from './stack';

const buttonGroupVariants = cva(
  "[&>[data-slot=button]]:bg-clip-border has-[>[data-slot=button-group]]:gap-2 has-[>[data-variant=outline]]:*:data-[slot=input-group]:border-border has-[>[data-variant=outline]]:*:data-[slot=select-trigger]:border-border has-[>[data-variant=outline]]:[&>[data-slot=input-group]:has(:focus-visible)]:border-ring has-[>[data-variant=outline]]:[&>[data-slot=select-trigger]:focus-visible]:border-ring has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-4xl [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[>[data-variant=outline]]:[&>input]:border-border has-[>[data-variant=outline]]:[&>input:focus-visible]:border-ring"
);

type ButtonGroupProps = StackCompactProps;

function ButtonGroup({
  className,
  orientation,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <Compact
      role="group"
      data-slot="button-group"
      orientation={orientation ?? 'horizontal'}
      className={cn(buttonGroupVariants(), className)}
      {...props}
    >
      {children}
    </Compact>
  );
}

export { ButtonGroup, type ButtonGroupProps, buttonGroupVariants };
