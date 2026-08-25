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
const arrowCrossSize = 16;
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
                  data-slot="tooltip-arrow"
                  className="pointer-events-none z-50 size-4 overflow-hidden text-foreground data-[side=bottom]:-top-4 data-[side=inline-end]:-rotate-90 data-[side=inline-end]:[inset-inline-start:-16px] data-[side=inline-start]:rotate-90 data-[side=inline-start]:[inset-inline-end:-16px] data-[side=left]:-right-4 data-[side=left]:rotate-90 data-[side=right]:-left-4 data-[side=right]:-rotate-90 data-[side=top]:-bottom-4 data-[side=top]:rotate-180 rtl:data-[side=inline-end]:rotate-90 rtl:data-[side=inline-start]:-rotate-90"
                  style={arrowStyle}
                >
                  <svg
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-2 w-4 fill-current"
                    viewBox="0 0 16 8"
                  >
                    <path d="M0 8A4 4 0 0 0 2.83 6.83L6.59 3.07A2 2 0 0 1 9.41 3.07L13.17 6.83A4 4 0 0 0 16 8Z" />
                  </svg>
                </TooltipPrimitive.Arrow>
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
