import * as React from 'react';

import { cn } from '../../lib/utils';
import type { PopupAlign, PopupSide } from './public-types';

type PopupArrowState = {
  align: PopupAlign;
  side: PopupSide;
};

const getPopupArrowEdgeStyle = ({
  align,
  side,
}: PopupArrowState): React.CSSProperties | undefined => {
  if (align === 'center') {
    return undefined;
  }

  if (side === 'top' || side === 'bottom') {
    return align === 'start'
      ? { left: 12, right: 'auto' }
      : { left: 'auto', right: 12 };
  }

  return align === 'start'
    ? { bottom: 'auto', top: 8 }
    : { bottom: 8, top: 'auto' };
};

const RoundedPopupArrow = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'pointer-events-none z-50 h-2 w-4 overflow-hidden data-[side=bottom]:top-[-7px] data-[side=inline-end]:-rotate-90 data-[side=inline-end]:[inset-inline-start:-11px] data-[side=inline-start]:rotate-90 data-[side=inline-start]:[inset-inline-end:-11px] data-[side=left]:right-[-11px] data-[side=left]:rotate-90 data-[side=right]:left-[-11px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-7px] data-[side=top]:rotate-180 rtl:data-[side=inline-end]:rotate-90 rtl:data-[side=inline-start]:-rotate-90',
        className
      )}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="block size-full fill-current"
        viewBox="0 0 16 8"
      >
        <path d="M0 8C1.1 8 2.1 7.55 2.85 6.8L6.6 3.05C7.38 2.27 8.62 2.27 9.4 3.05L13.15 6.8C13.9 7.55 14.9 8 16 8Z" />
      </svg>
    </div>
  );
};

export { getPopupArrowEdgeStyle, RoundedPopupArrow };
export type { PopupArrowState };
