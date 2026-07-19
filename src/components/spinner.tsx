import { cn } from '../lib/utils';

function Spinner({
  className,
  label = '正在加载',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        'inline-block size-5 animate-spin rounded-full border-2 border-current border-r-transparent text-primary',
        className
      )}
    />
  );
}

export { Spinner };
