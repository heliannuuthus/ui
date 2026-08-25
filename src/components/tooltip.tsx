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

type TooltipPlacement =
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'top'
  | 'top-left'
  | 'top-right';

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
    classNames?: TooltipClassNames;
    content: React.ReactNode;
    delay?: number;
    disabled?: boolean;
    sideOffset?: number;
    styles?: TooltipStyles;
    trigger: React.ReactElement;
  };

const placementSides: Record<TooltipPlacement, PopupSide> = {
  bottom: 'bottom',
  'bottom-left': 'bottom',
  'bottom-right': 'bottom',
  left: 'left',
  right: 'right',
  top: 'top',
  'top-left': 'top',
  'top-right': 'top',
};

const getPlacementAnchorRect = (rect: DOMRect, placement: TooltipPlacement) => {
  const horizontalInset = Math.min(16, rect.width / 2);
  const x = placement.endsWith('-left')
    ? rect.left + horizontalInset
    : placement.endsWith('-right')
      ? rect.right - horizontalInset
      : rect.left + rect.width / 2;
  const y = placement.startsWith('top')
    ? rect.top
    : placement.startsWith('bottom')
      ? rect.bottom
      : rect.top + rect.height / 2;

  return new DOMRect(x, y, 0, 0);
};

const Tooltip = ({
  align = 'center',
  alignOffset = 0,
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
  const triggerRef = React.useRef<HTMLElement>(null);
  const setTriggerRef = React.useCallback((element: HTMLElement | null) => {
    triggerRef.current = element;
  }, []);
  const placementAnchor = React.useMemo(() => {
    if (!placement) return undefined;

    return {
      get contextElement() {
        return triggerRef.current ?? undefined;
      },
      getBoundingClientRect() {
        const rect = triggerRef.current?.getBoundingClientRect();
        return rect
          ? getPlacementAnchorRect(rect, placement)
          : new DOMRect(0, 0, 0, 0);
      },
    };
  }, [placement]);

  return (
    <TooltipPrimitive.Provider delay={delay}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props}>
        <TooltipPrimitive.Trigger
          data-slot="tooltip-trigger"
          ref={setTriggerRef}
          render={trigger}
        />
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Positioner
            align={placement ? 'center' : align}
            alignOffset={alignOffset}
            anchor={placementAnchor}
            side={placement ? placementSides[placement] : side}
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
              <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:translate-x-[1.5px] data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:translate-x-[-1.5px] data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:translate-x-[-1.5px] data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:translate-x-[1.5px] data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" />
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
