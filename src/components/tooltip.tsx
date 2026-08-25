import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '../lib/utils';
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

type TooltipArrowOptions = {
  pointAtCenter?: boolean;
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
    arrow?: boolean | TooltipArrowOptions;
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
  arrowStyle?: React.CSSProperties;
  side: PopupSide;
};

const arrowInset = 12;
const placementConfig: Record<TooltipPlacement, TooltipPlacementConfig> = {
  bottom: { align: 'center', side: 'bottom' },
  bottomLeft: {
    align: 'start',
    arrowStyle: { left: arrowInset, right: 'auto' },
    side: 'bottom',
  },
  bottomRight: {
    align: 'end',
    arrowStyle: { left: 'auto', right: arrowInset },
    side: 'bottom',
  },
  left: { align: 'center', side: 'left' },
  leftBottom: {
    align: 'end',
    arrowStyle: { bottom: arrowInset, top: 'auto' },
    side: 'left',
  },
  leftTop: {
    align: 'start',
    arrowStyle: { bottom: 'auto', top: arrowInset },
    side: 'left',
  },
  right: { align: 'center', side: 'right' },
  rightBottom: {
    align: 'end',
    arrowStyle: { bottom: arrowInset, top: 'auto' },
    side: 'right',
  },
  rightTop: {
    align: 'start',
    arrowStyle: { bottom: 'auto', top: arrowInset },
    side: 'right',
  },
  top: { align: 'center', side: 'top' },
  topLeft: {
    align: 'start',
    arrowStyle: { left: arrowInset, right: 'auto' },
    side: 'top',
  },
  topRight: {
    align: 'end',
    arrowStyle: { left: 'auto', right: arrowInset },
    side: 'top',
  },
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
  sideOffset = 4,
  styles,
  trigger,
  ...props
}: TooltipProps) => {
  const resolvedPlacement = placement ? placementConfig[placement] : undefined;
  const arrowPointsAtCenter =
    typeof arrow === 'object' && arrow.pointAtCenter === true;
  const arrowStyle = arrowPointsAtCenter
    ? undefined
    : resolvedPlacement?.arrowStyle;

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
                  className="z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2 data-[side=inline-end]:-left-1 data-[side=inline-end]:translate-x-[1.5px] data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2 data-[side=inline-start]:-right-1 data-[side=inline-start]:translate-x-[-1.5px] data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2 data-[side=left]:-right-1 data-[side=left]:translate-x-[-1.5px] data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2 data-[side=right]:-left-1 data-[side=right]:translate-x-[1.5px] data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5"
                  style={arrowStyle}
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
  type TooltipArrowOptions,
  type TooltipClassNames,
  type TooltipPlacement,
  type TooltipProps,
  type TooltipStyles,
};
