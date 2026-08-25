import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';
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

const Spinner = ({
  className,
  size: sizeProp,
  ...props
}: SpinnerProps): React.JSX.Element => {
  const defaults = useComponentDefaults('Spinner');
  const size = sizeProp ?? defaults.size ?? 'default';

  return (
    <Loader2Icon
      data-size={size}
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn('animate-spin', spinnerSizes[size], className)}
      {...props}
    />
  );
};

export { Spinner, type SpinnerProps, type SpinnerSize };
