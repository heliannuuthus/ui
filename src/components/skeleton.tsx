import { cn } from '../lib/utils';

type SkeletonEffect = 'shimmer' | 'pulse' | 'none';

const Skeleton = ({
  className,
  effect = 'shimmer',
  ...props
}: React.ComponentProps<'div'> & {
  effect?: SkeletonEffect;
}) => {
  return (
    <div
      data-slot="skeleton"
      data-effect={effect}
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden rounded-2xl bg-muted',
        effect === 'pulse' && 'animate-pulse',
        className
      )}
      {...props}
    />
  );
};

export { Skeleton, type SkeletonEffect };
