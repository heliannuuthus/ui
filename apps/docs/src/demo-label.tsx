import type { ComponentProps } from 'react';

export const DemoLabel = ({ className, ...props }: ComponentProps<'label'>) => (
  <label
    className={['demo-label', className].filter(Boolean).join(' ')}
    {...props}
  />
);
