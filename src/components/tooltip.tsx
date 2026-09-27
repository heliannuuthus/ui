import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '../lib/utils';
import { getPopupArrowEdgeStyle } from './internal/popup-arrow';
import { useComponentDefaults } from './provider';

type TooltipPrimitiveRootProps = TooltipPrimitive.Root.Props;
type TooltipPrimitiveTriggerProps = TooltipPrimitive.Trigger.Props;
type TooltipPrimitivePortalProps = TooltipPrimitive.Portal.Props;
type TooltipPrimitivePositionerProps = TooltipPrimitive.Positioner.Props;

type TooltipAlign = NonNullable<TooltipPrimitivePositionerProps['align']>;
type TooltipSide = NonNullable<TooltipPrimitivePositionerProps['side']>;

type TooltipClassNames = {
  arrow?: string;
  content?: string;
};

type TooltipStyles = {
  arrow?: React.CSSProperties;
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

type TooltipOpenChange = (
  open: Parameters<NonNullable<TooltipPrimitiveRootProps['onOpenChange']>>[0]
) => void;

type TooltipProps = Omit<
  React.ComponentPropsWithRef<'div'>,
  'children' | 'content' | 'dangerouslySetInnerHTML'
> &
  Pick<TooltipPrimitiveRootProps, 'defaultOpen' | 'disabled' | 'open'> & {
    arrow?: boolean;
    children: React.ReactElement;
    classNames?: TooltipClassNames;
    closeDelay?: TooltipPrimitiveTriggerProps['closeDelay'];
    container?: TooltipPrimitivePortalProps['container'];
    content: React.ReactNode;
    onOpenChange?: TooltipOpenChange;
    openDelay?: TooltipPrimitiveTriggerProps['delay'];
    placement?: TooltipPlacement;
    styles?: TooltipStyles;
  };

type TooltipProviderDefaults = {
  arrow?: TooltipProps['arrow'];
  closeDelay?: TooltipProps['closeDelay'];
  openDelay?: TooltipProps['openDelay'];
  placement?: TooltipProps['placement'];
};

type TooltipPlacementConfig = {
  align: TooltipAlign;
  side: TooltipSide;
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
  arrow: arrowProp,
  children,
  className,
  classNames,
  closeDelay: closeDelayProp,
  container,
  content,
  defaultOpen,
  disabled = false,
  onOpenChange,
  open,
  openDelay: openDelayProp,
  placement: placementProp,
  ref,
  style,
  styles,
  ...rootProps
}: TooltipProps) => {
  const defaults = useComponentDefaults('Tooltip');
  const arrow = arrowProp ?? defaults.arrow ?? true;
  const closeDelay = closeDelayProp ?? defaults.closeDelay ?? 100;
  const openDelay = openDelayProp ?? defaults.openDelay ?? 100;
  const placement = placementProp ?? defaults.placement ?? 'top';
  const resolvedPlacement = placementConfig[placement];
  const isContentEmpty = content == null || content === false || content === '';

  return (
    <TooltipPrimitive.Root
      defaultOpen={defaultOpen}
      disabled={disabled || isContentEmpty}
      onOpenChange={onOpenChange}
      open={open}
    >
      <TooltipPrimitive.Trigger
        closeDelay={closeDelay}
        data-slot="tooltip-trigger"
        delay={openDelay}
        render={children}
      />
      <TooltipPrimitive.Portal container={container}>
        <TooltipPrimitive.Positioner
          {...rootProps}
          ref={ref}
          align={resolvedPlacement.align}
          alignOffset={0}
          className={cn('isolate z-50', className)}
          data-slot="tooltip"
          positionMethod={container == null ? undefined : 'fixed'}
          side={resolvedPlacement.side}
          sideOffset={11}
          style={style}
        >
          <TooltipPrimitive.Popup
            className={cn(
              'z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-sm bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-lg data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
              classNames?.content
            )}
            data-slot="tooltip-content"
            style={styles?.content}
          >
            {content}
            {arrow ? (
              <TooltipPrimitive.Arrow
                className={classNames?.arrow}
                data-popup-arrow=""
                data-slot="tooltip-arrow"
                style={(state) => ({
                  ...getPopupArrowEdgeStyle(state),
                  ...styles?.arrow,
                })}
              />
            ) : null}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

export {
  Tooltip,
  type TooltipClassNames,
  type TooltipPlacement,
  type TooltipProps,
  type TooltipProviderDefaults,
  type TooltipStyles,
};
