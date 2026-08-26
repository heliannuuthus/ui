import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '../lib/utils';
import { getPopupArrowEdgeStyle } from './internal/popup-arrow';
import type {
  OpenStateProps,
  PopupAlign,
  PopupSide,
} from './internal/public-types';

type TooltipClassNames = {
  content?: string;
};

type TooltipStyles = {
  content?: React.CSSProperties;
};

type TooltipPlacement =
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftBottom'
  | 'leftTop'
  | 'right'
  | 'rightBottom'
  | 'rightTop'
  | 'top'
  | 'topLeft'
  | 'topRight';

type TooltipPositionProps =
  | {
      align?: PopupAlign;
      alignOffset?: number;
      placement?: never;
      side?: PopupSide;
    }
  | {
      align?: never;
      alignOffset?: number;
      placement: TooltipPlacement;
      side?: never;
    };

type TooltipProps = OpenStateProps &
  TooltipPositionProps & {
    arrow?: boolean;
    classNames?: TooltipClassNames;
    content: React.ReactNode;
    delay?: number;
    disabled?: boolean;
    sideOffset?: number;
    styles?: TooltipStyles;
    trigger: React.ReactElement;
  };

type TooltipPlacementConfig = {
  align: PopupAlign;
  side: PopupSide;
};

const placementConfig: Record<TooltipPlacement, TooltipPlacementConfig> = {
  bottom: { align: 'center', side: 'bottom' },
  bottomLeft: { align: 'start', side: 'bottom' },
  bottomRight: { align: 'end', side: 'bottom' },
  left: { align: 'center', side: 'left' },
  leftBottom: { align: 'end', side: 'left' },
  leftTop: { align: 'start', side: 'left' },
  right: { align: 'center', side: 'right' },
  rightBottom: { align: 'end', side: 'right' },
  rightTop: { align: 'start', side: 'right' },
  top: { align: 'center', side: 'top' },
  topLeft: { align: 'start', side: 'top' },
  topRight: { align: 'end', side: 'top' },
};

const Tooltip = ({
  align = 'center',
  alignOffset = 0,
  arrow = true,
  classNames,
  content,
  delay = 0,
  placement,
  side = 'top',
  sideOffset = 11,
  styles,
  trigger,
  ...props
}: TooltipProps) => {
  const resolvedPlacement = placement ? placementConfig[placement] : undefined;

  return (
    <TooltipPrimitive.Provider delay={delay}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props}>
        <TooltipPrimitive.Trigger
          data-slot="tooltip-trigger"
          render={trigger}
        />
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Positioner
            align={resolvedPlacement?.align ?? align}
            alignOffset={alignOffset}
            side={resolvedPlacement?.side ?? side}
            sideOffset={sideOffset}
            className="isolate z-50"
          >
            <TooltipPrimitive.Popup
              data-slot="tooltip-content"
              className={cn(
                'z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-lg data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
                classNames?.content
              )}
              style={styles?.content}
            >
              {content}
              {arrow !== false ? (
                <TooltipPrimitive.Arrow
                  data-popup-arrow=""
                  data-slot="tooltip-arrow"
                  style={getPopupArrowEdgeStyle}
                />
              ) : null}
            </TooltipPrimitive.Popup>
          </TooltipPrimitive.Positioner>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export {
  Tooltip,
  type TooltipClassNames,
  type TooltipPlacement,
  type TooltipProps,
  type TooltipStyles,
};
