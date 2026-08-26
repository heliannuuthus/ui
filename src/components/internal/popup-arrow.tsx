import * as React from 'react';

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

export { getPopupArrowEdgeStyle };
export type { PopupArrowState };
