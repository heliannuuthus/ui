import type * as React from 'react';

type OpenStateProps = {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

type DataAttributes = {
  [key: `data-${string}`]: boolean | number | string | undefined;
};

type PopupAlign = 'center' | 'end' | 'start';
type PopupSide =
  'bottom' | 'inline-end' | 'inline-start' | 'left' | 'right' | 'top';

type PortalContainer = HTMLElement | null | React.RefObject<HTMLElement | null>;

export type {
  DataAttributes,
  OpenStateProps,
  PopupAlign,
  PopupSide,
  PortalContainer,
};
