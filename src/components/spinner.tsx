import { cn } from '../lib/utils';
import { Loader2Icon } from 'lucide-react';

type SpinnerSize = 'sm' | 'default' | 'lg';

type SpinnerProps = React.ComponentProps<'svg'> & {
  size?: SpinnerSize;
};

const spinnerSizes: Record<SpinnerSize, string> = {
  sm: 'size-3.5',
  default: 'size-4',
  lg: 'size-6',
};

const Spinner = ({ className, size = 'default', ...props }: SpinnerProps) => {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn('animate-spin', spinnerSizes[size], className)}
      {...props}
    />
  );
};

export { Spinner, type SpinnerProps, type SpinnerSize };
