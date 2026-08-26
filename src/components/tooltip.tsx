import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '../lib/utils';
import { getPopupArrowEdgeStyle } from './internal/popup-arrow';
import type { DataAttributes } from './internal/public-types';
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

type TooltipPositioning = Pick<
  TooltipPrimitivePositionerProps,
  | 'alignOffset'
  | 'arrowPadding'
  | 'collisionAvoidance'
  | 'collisionBoundary'
  | 'collisionPadding'
  | 'disableAnchorTracking'
  | 'positionMethod'
  | 'sideOffset'
  | 'sticky'
>;

type TooltipContentProps = Omit<
  React.ComponentPropsWithRef<'div'>,
  'children' | 'dangerouslySetInnerHTML'
> &
  DataAttributes;

type TooltipOpenChangeDetails = Parameters<
  NonNullable<TooltipPrimitiveRootProps['onOpenChange']>
>[1];
type TooltipActions = TooltipPrimitive.Root.Actions;

type TooltipTriggerProps =
  | {
      children: React.ReactElement;
      trigger?: never;
    }
  | {
      children?: never;
      /** @deprecated Pass the trigger element as children instead. */
      trigger: React.ReactElement;
    };

type TooltipPositionProps =
  | {
      placement?: TooltipPlacement;
      positioning?: TooltipPositioning;
      align?: never;
      alignOffset?: never;
      side?: never;
      sideOffset?: never;
    }
  | {
      placement?: never;
      positioning?: never;
      /** @deprecated Use placement, or positioning for advanced offsets. */
      align?: TooltipAlign;
      /** @deprecated Use positioning.alignOffset. */
      alignOffset?: number;
      /** @deprecated Use placement. */
      side?: TooltipSide;
      /** @deprecated Use positioning.sideOffset. */
      sideOffset?: number;
    };

type TooltipTrackingProps =
  | {
      container?: TooltipPrimitivePortalProps['container'];
      followCursor?: false;
    }
  | {
      container?: never;
      followCursor:
        | true
        | Exclude<
            NonNullable<TooltipPrimitiveRootProps['trackCursorAxis']>,
            'both' | 'none'
          >;
    };

type TooltipProps = Omit<
  React.ComponentPropsWithRef<'div'>,
  'children' | 'content' | 'dangerouslySetInnerHTML'
> &
  Pick<
    TooltipPrimitiveRootProps,
    | 'actionsRef'
    | 'defaultOpen'
    | 'disabled'
    | 'onOpenChange'
    | 'onOpenChangeComplete'
    | 'open'
  > &
  TooltipTriggerProps &
  TooltipPositionProps & {
    arrow?: boolean;
    classNames?: TooltipClassNames;
    closeDelay?: TooltipPrimitiveTriggerProps['closeDelay'];
    closeOnClick?: TooltipPrimitiveTriggerProps['closeOnClick'];
    content: React.ReactNode;
    contentProps?: TooltipContentProps;
    /** @deprecated Use openDelay. */
    delay?: TooltipPrimitiveTriggerProps['delay'];
    interactive?: boolean;
    keepMounted?: TooltipPrimitivePortalProps['keepMounted'];
    openDelay?: TooltipPrimitiveTriggerProps['delay'];
    styles?: TooltipStyles;
  } & TooltipTrackingProps;

type TooltipProviderDefaults = {
  arrow?: TooltipProps['arrow'];
  closeDelay?: TooltipProps['closeDelay'];
  interactive?: TooltipProps['interactive'];
  openDelay?: TooltipProps['openDelay'];
  placement?: TooltipProps['placement'];
  skipDelayDuration?: TooltipPrimitive.Provider.Props['timeout'];
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
  actionsRef,
  align: legacyAlign,
  alignOffset: legacyAlignOffset,
  arrow: arrowProp,
  children,
  className,
  classNames,
  closeDelay: closeDelayProp,
  closeOnClick = true,
  container,
  content,
  contentProps,
  delay,
  defaultOpen,
  disabled = false,
  followCursor = false,
  interactive: interactiveProp,
  keepMounted = false,
  onOpenChange,
  onOpenChangeComplete,
  open,
  openDelay: openDelayProp,
  placement: placementProp,
  positioning,
  ref,
  side: legacySide,
  sideOffset: legacySideOffset,
  style,
  styles,
  trigger,
  ...rootProps
}: TooltipProps) => {
  const defaults = useComponentDefaults('Tooltip');
  const arrow = arrowProp ?? defaults.arrow ?? true;
  const closeDelay = closeDelayProp ?? defaults.closeDelay ?? 100;
  const interactive = interactiveProp ?? defaults.interactive ?? true;
  const openDelay = openDelayProp ?? delay ?? defaults.openDelay ?? 100;
  const placement = placementProp ?? defaults.placement ?? 'top';
  const resolvedPlacement = placementConfig[placement];
  const resolvedTrigger = children ?? trigger;
  const trackCursorAxis =
    followCursor === true
      ? 'both'
      : followCursor === false
        ? 'none'
        : followCursor;
  const isContentEmpty = content == null || content === false || content === '';
  const {
    className: contentClassName,
    style: contentStyle,
    ...restContentProps
  } = contentProps ?? {};

  return (
    <TooltipPrimitive.Root
      actionsRef={actionsRef}
      defaultOpen={defaultOpen}
      disableHoverablePopup={!interactive}
      disabled={disabled || isContentEmpty}
      onOpenChange={onOpenChange}
      onOpenChangeComplete={onOpenChangeComplete}
      open={open}
      trackCursorAxis={trackCursorAxis}
    >
      <TooltipPrimitive.Trigger
        closeDelay={closeDelay}
        closeOnClick={closeOnClick}
        data-slot="tooltip-trigger"
        delay={openDelay}
        render={resolvedTrigger}
      />
      <TooltipPrimitive.Portal container={container} keepMounted={keepMounted}>
        <TooltipPrimitive.Positioner
          {...rootProps}
          {...positioning}
          ref={ref}
          align={legacyAlign ?? resolvedPlacement.align}
          alignOffset={legacyAlignOffset ?? positioning?.alignOffset ?? 0}
          className={cn('isolate z-50', className)}
          data-slot="tooltip"
          positionMethod={
            positioning?.positionMethod ??
            (container == null ? undefined : 'fixed')
          }
          side={legacySide ?? resolvedPlacement.side}
          sideOffset={legacySideOffset ?? positioning?.sideOffset ?? 11}
          style={style}
        >
          <TooltipPrimitive.Popup
            {...restContentProps}
            className={cn(
              'z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-sm bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-lg data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
              classNames?.content,
              contentClassName
            )}
            data-slot="tooltip-content"
            style={{ ...styles?.content, ...contentStyle }}
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
  type TooltipActions,
  type TooltipClassNames,
  type TooltipContentProps,
  type TooltipOpenChangeDetails,
  type TooltipPlacement,
  type TooltipPositioning,
  type TooltipProps,
  type TooltipProviderDefaults,
  type TooltipStyles,
};
