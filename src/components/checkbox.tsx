'use client';

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { useState } from 'react';

import { cn } from '../lib/utils';
import { CheckIcon } from 'lucide-react';

function Checkbox({
  className,
  onCheckedChange,
  ...props
}: CheckboxPrimitive.Root.Props) {
  const [particleBurst, setParticleBurst] = useState(0);

  const handleCheckedChange: NonNullable<
    CheckboxPrimitive.Root.Props['onCheckedChange']
  > = (checked, eventDetails) => {
    setParticleBurst((current) => (checked ? current + 1 : 0));
    onCheckedChange?.(checked, eventDetails);
  };

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer relative flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-[background-color,border-color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:-inset-x-3 after:-inset-y-2 hover:border-primary/40 hover:bg-primary/10 active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100 group-has-disabled/field:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-transparent disabled:hover:bg-input/90 disabled:active:scale-100 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary/90 data-readonly:cursor-default data-readonly:active:scale-100 dark:data-checked:bg-primary',
        className
      )}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      {particleBurst > 0 && (
        <span
          key={particleBurst}
          aria-hidden="true"
          data-effect="scatter"
          data-slot="checkbox-particles"
          className="pointer-events-none absolute inset-0"
        >
          {Array.from({ length: 8 }, (_, index) => (
            <span className="checkbox-particle" key={index} />
          ))}
        </span>
      )}
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-starting-style:scale-50 data-starting-style:opacity-0 data-ending-style:scale-50 data-ending-style:opacity-0 motion-reduce:transition-none data-indeterminate:after:h-0.5 data-indeterminate:after:w-2 data-indeterminate:after:rounded-full data-indeterminate:after:bg-current data-indeterminate:[&>svg]:hidden [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
