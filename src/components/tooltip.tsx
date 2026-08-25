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
const arrowCrossSize = 12;
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
  const arrowStyle = resolvedPlacement?.arrowStyle;
  const resolvedAlignOffset =
    arrowPointsAtCenter && arrowStyle
      ? ({
          anchor,
          side: resolvedSide,
        }: {
          anchor: { height: number; width: number };
          side: PopupSide;
        }) => {
          const anchorSize =
            resolvedSide === 'top' || resolvedSide === 'bottom'
              ? anchor.width
              : anchor.height;

          return (
            alignOffset +
            Math.max(0, anchorSize / 2 - arrowInset - arrowCrossSize / 2)
          );
        }
      : alignOffset;

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
            alignOffset={resolvedAlignOffset}
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
                  className="z-50 bg-foreground data-[side=bottom]:-top-1.5 data-[side=bottom]:h-1.5 data-[side=bottom]:w-3 data-[side=bottom]:[clip-path:polygon(50%_0,100%_100%,0_100%)] data-[side=inline-end]:h-3 data-[side=inline-end]:w-1.5 data-[side=inline-end]:[clip-path:polygon(100%_0,0_50%,100%_100%)] data-[side=inline-end]:[inset-inline-start:-6px] data-[side=inline-start]:h-3 data-[side=inline-start]:w-1.5 data-[side=inline-start]:[clip-path:polygon(0_0,100%_50%,0_100%)] data-[side=inline-start]:[inset-inline-end:-6px] data-[side=left]:-right-1.5 data-[side=left]:h-3 data-[side=left]:w-1.5 data-[side=left]:[clip-path:polygon(0_0,100%_50%,0_100%)] data-[side=right]:-left-1.5 data-[side=right]:h-3 data-[side=right]:w-1.5 data-[side=right]:[clip-path:polygon(100%_0,0_50%,100%_100%)] data-[side=top]:-bottom-1.5 data-[side=top]:h-1.5 data-[side=top]:w-3 data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)] rtl:data-[side=inline-end]:[clip-path:polygon(0_0,100%_50%,0_100%)] rtl:data-[side=inline-start]:[clip-path:polygon(100%_0,0_50%,100%_100%)]"
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
