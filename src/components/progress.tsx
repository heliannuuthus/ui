'use client';

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';

import { cn } from '../lib/utils';

type ProgressEffect = 'none' | 'sparkle';

function Progress({
  className,
  children,
  effect = 'none',
  label,
  showValue = false,
  value,
  ...props
}: ProgressPrimitive.Root.Props & {
  effect?: ProgressEffect;
  label?: React.ReactNode;
  showValue?: boolean | ((value: number | null) => React.ReactNode);
}) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      data-effect={effect}
      className={cn('flex flex-wrap gap-3', className)}
      {...props}
    >
      {label != null ? <ProgressLabel>{label}</ProgressLabel> : null}
      {showValue ? (
        <ProgressValue>
          {(_formattedValue, currentValue) =>
            typeof showValue === 'function'
              ? showValue(currentValue)
              : currentValue == null
                ? '—'
                : `${currentValue}%`
          }
        </ProgressValue>
      ) : null}
      {children}
      <ProgressTrack>
        <ProgressIndicator>
          {effect === 'sparkle' && value !== null ? (
            <ProgressMagic key={value} />
          ) : null}
        </ProgressIndicator>
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        'relative flex h-3 w-full items-center overflow-hidden rounded-full bg-muted',
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        'relative h-full bg-primary transition-[width] duration-500 ease-out',
        className
      )}
      {...props}
    />
  );
}

function ProgressMagic() {
  return (
    <span aria-hidden="true" data-slot="progress-magic">
      <span data-slot="progress-magic-particle" />
      <span data-slot="progress-magic-particle" />
      <span data-slot="progress-magic-particle" />
    </span>
  );
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn('text-sm font-medium', className)}
      data-slot="progress-label"
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        'ml-auto text-sm text-muted-foreground tabular-nums',
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  );
}

export { Progress, type ProgressEffect };
