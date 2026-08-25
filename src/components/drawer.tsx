'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer';

import { cn } from '../lib/utils';
import { Button } from './button';
import type { OpenStateProps, PortalContainer } from './internal/public-types';
import { XIcon } from 'lucide-react';

type DrawerSide = 'top' | 'right' | 'bottom' | 'left';
type DrawerBehavior = 'adaptive' | 'gesture' | 'panel';
type DrawerSnapPoint = number | string;

const sideToSwipeDirection = {
  top: 'up',
  right: 'right',
  bottom: 'down',
  left: 'left',
} as const;

const swipeDirectionToSide = {
  up: 'top',
  right: 'right',
  down: 'bottom',
  left: 'left',
} as const;

type DrawerContextProps = {
  behavior: DrawerBehavior;
  container: DrawerPrimitive.Portal.Props['container'];
  handle: boolean | React.ReactNode;
  hasSnapPoints: boolean;
  modal: DrawerPrimitive.Root.Props['modal'];
  scope: 'viewport' | 'container';
  side: DrawerSide;
  swipeDirection: NonNullable<DrawerPrimitive.Root.Props['swipeDirection']>;
};

const DrawerContext = React.createContext<DrawerContextProps | null>(null);

const useDrawer = () => {
  const context = React.useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawer must be used within a Drawer.');
  }

  return context;
};

const DrawerRoot = ({
  behavior = 'adaptive',
  container,
  handle,
  modal,
  onSnapChange,
  sequential,
  side,
  snapPoints,
  swipeDirection,
  ...props
}: Omit<
  DrawerPrimitive.Root.Props,
  'handle' | 'onSnapPointChange' | 'snapToSequentialPoints'
> & {
  behavior?: DrawerBehavior;
  container?: DrawerPrimitive.Portal.Props['container'];
  handle?: boolean | React.ReactNode;
  onSnapChange?: (snapPoint: DrawerSnapPoint | null) => void;
  sequential?: boolean;
  side?: DrawerSide;
}) => {
  const resolvedSwipeDirection =
    sideToSwipeDirection[
      side ?? swipeDirectionToSide[swipeDirection ?? 'down']
    ];
  const resolvedSide = side ?? swipeDirectionToSide[resolvedSwipeDirection];
  const resolvedModal = modal ?? (container == null ? true : false);
  const resolvedHandle =
    handle === undefined
      ? behavior === 'adaptive' || behavior === 'gesture'
      : handle;
  const hasSnapPoints = snapPoints != null && snapPoints.length > 0;
  const scope: DrawerContextProps['scope'] =
    container == null ? 'viewport' : 'container';
  const contextValue = React.useMemo(
    () => ({
      behavior,
      container,
      handle: resolvedHandle,
      hasSnapPoints,
      modal: resolvedModal,
      scope,
      side: resolvedSide,
      swipeDirection: resolvedSwipeDirection,
    }),
    [
      behavior,
      container,
      hasSnapPoints,
      resolvedHandle,
      resolvedModal,
      resolvedSide,
      resolvedSwipeDirection,
      scope,
    ]
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        modal={resolvedModal}
        onSnapPointChange={onSnapChange}
        snapPoints={snapPoints}
        snapToSequentialPoints={sequential}
        swipeDirection={resolvedSwipeDirection}
        {...props}
      />
    </DrawerContext.Provider>
  );
};

const DrawerTrigger = ({ ...props }: DrawerPrimitive.Trigger.Props) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

const DrawerPortal = ({
  container,
  ...props
}: DrawerPrimitive.Portal.Props) => {
  const context = useDrawer();

  return (
    <DrawerPrimitive.Portal
      data-slot="drawer-portal"
      container={container ?? context.container}
      {...props}
    />
  );
};

const DrawerClose = ({ ...props }: DrawerPrimitive.Close.Props) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
};

const DrawerOverlay = ({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props) => {
  const { scope } = useDrawer();

  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      data-scope={scope}
      className={cn(
        'inset-0 z-50 bg-black/30 opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] select-none data-[scope=container]:absolute data-[scope=viewport]:fixed data-[scope=viewport]:min-h-dvh data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-backdrop-filter:backdrop-blur-sm supports-[-webkit-touch-callout:none]:data-[scope=viewport]:absolute',
        className
      )}
      {...props}
    />
  );
};

const DrawerSwipeHandle = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="drawer-swipe-handle"
      aria-hidden="true"
      className={cn(
        'relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[behavior=adaptive]/drawer-popup:md:hidden group-data-[swipe-axis=x]/drawer-popup:h-full group-data-[swipe-axis=x]/drawer-popup:w-3 group-data-[swipe-axis=x]/drawer-popup:items-center group-data-[swipe-axis=y]/drawer-popup:h-3 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center group-data-[swipe-direction=down]/drawer-popup:items-end group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=left]/drawer-popup:justify-start group-data-[swipe-direction=right]/drawer-popup:justify-end group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start after:block after:shrink-0 after:rounded-full after:bg-muted group-data-[swipe-axis=x]/drawer-popup:after:h-[100px] group-data-[swipe-axis=x]/drawer-popup:after:w-1.5 group-data-[swipe-axis=y]/drawer-popup:after:h-1.5 group-data-[swipe-axis=y]/drawer-popup:after:w-[100px] active:cursor-grabbing',
        className
      )}
      {...props}
    />
  );
};

const DrawerContent = ({
  className,
  children,
  closable = true,
  ...props
}: DrawerPrimitive.Popup.Props & {
  closable?: boolean | React.ReactNode;
}) => {
  const {
    behavior,
    handle,
    hasSnapPoints,
    modal,
    scope,
    side,
    swipeDirection,
  } = useDrawer();
  const swipeAxis =
    swipeDirection === 'down' || swipeDirection === 'up' ? 'y' : 'x';

  return (
    <DrawerPortal data-slot="drawer-portal">
      {modal === true && (
        <DrawerOverlay data-snap-points={hasSnapPoints ? '' : undefined} />
      )}
      <DrawerPrimitive.Viewport
        data-slot="drawer-viewport"
        data-modal={modal}
        data-scope={scope}
        className="pointer-events-none inset-0 z-50 select-none data-[modal=true]:pointer-events-auto data-[scope=container]:absolute data-[scope=viewport]:fixed"
      >
        <DrawerPrimitive.Popup
          data-slot="drawer-popup"
          data-behavior={behavior}
          data-scope={scope}
          data-side={side}
          data-swipe-axis={swipeAxis}
          data-snap-points={hasSnapPoints ? '' : undefined}
          className={cn(
            // Base.
            'group/drawer-popup pointer-events-auto z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col rounded-4xl border border-popover bg-popover text-sm text-popover-foreground shadow-xl transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [--drawer-bleed-background:transparent] [--drawer-inset:--spacing(2)] [--drawer-stacked-shadow:0_-20px_25px_-5px_rgb(0_0_0/0.1),0_-8px_10px_-6px_rgb(0_0_0/0.1)] [interpolate-size:allow-keywords] data-[behavior=adaptive]:md:m-0 data-[behavior=adaptive]:md:rounded-none data-[behavior=panel]:m-0 data-[behavior=panel]:rounded-none data-[scope=container]:absolute data-[scope=viewport]:fixed data-[swipe-direction=down]:data-nested-drawer-open:shadow-(--drawer-stacked-shadow) dark:border-border',
            // Nested.
            'data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95',
            // Bleed.
            'after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-popover)) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full',
            // Sizing.
            '[--drawer-content-height:var(--drawer-height,auto)] data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]',
            // Stack.
            '[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]',
            // Transitions.
            'data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
            // Axis: y.
            'data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)',
            // Axis: x.
            'data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row',
            // Direction: down.
            'data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]',
            // Direction: up.
            'data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]',
            // Direction: left.
            'data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]',
            // Direction: right.
            'data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]',
            className
          )}
          {...props}
        >
          {handle !== false && handle != null ? (
            handle === true ? (
              <DrawerSwipeHandle />
            ) : (
              handle
            )
          ) : null}
          <DrawerPrimitive.Content
            data-slot="drawer-content"
            className={cn(
              'flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none'
            )}
          >
            {children}
          </DrawerPrimitive.Content>
          {closable !== false && closable != null ? (
            <DrawerPrimitive.Close
              data-slot="drawer-close"
              render={
                <Button
                  aria-label="关闭抽屉"
                  className="absolute top-4 right-4 z-20 bg-secondary"
                  size="icon-sm"
                  variant="ghost"
                />
              }
            >
              {closable === true ? <XIcon /> : closable}
            </DrawerPrimitive.Close>
          ) : null}
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPortal>
  );
};

const DrawerHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...props}
    />
  );
};

const DrawerFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex shrink-0 flex-col gap-2 p-4 pt-0', className)}
      {...props}
    />
  );
};

const DrawerTitle = ({ className, ...props }: DrawerPrimitive.Title.Props) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        'font-heading text-base font-medium text-foreground',
        className
      )}
      {...props}
    />
  );
};

const DrawerDescription = ({
  className,
  ...props
}: DrawerPrimitive.Description.Props) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-sm text-balance text-muted-foreground', className)}
      {...props}
    />
  );
};

type DrawerClassNames = {
  content?: string;
};

type DrawerStyles = {
  content?: React.CSSProperties;
};

type DrawerProps = OpenStateProps & {
  behavior?: DrawerBehavior;
  children?: React.ReactNode;
  classNames?: DrawerClassNames;
  closable?: boolean | React.ReactNode;
  closeText?: React.ReactNode;
  closeVariant?: React.ComponentProps<typeof Button>['variant'];
  container?: PortalContainer;
  defaultSnapPoint?: DrawerSnapPoint | null;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  handle?: boolean | React.ReactNode;
  onSnapChange?: (snapPoint: DrawerSnapPoint | null) => void;
  sequential?: boolean;
  side?: DrawerSide;
  snapPoint?: DrawerSnapPoint | null;
  snapPoints?: DrawerSnapPoint[];
  styles?: DrawerStyles;
  swipeDirection?: 'down' | 'left' | 'right' | 'up';
  title?: React.ReactNode;
  trigger?: React.ReactElement;
};

const Drawer = ({
  children,
  classNames,
  closable,
  closeText,
  closeVariant = 'outline',
  description,
  footer,
  styles,
  title,
  trigger,
  ...props
}: DrawerProps) => {
  return (
    <DrawerRoot {...props}>
      {trigger != null ? <DrawerTrigger render={trigger} /> : null}
      <DrawerContent
        className={classNames?.content}
        closable={closable}
        style={styles?.content}
      >
        {title != null || description != null ? (
          <DrawerHeader>
            {title != null ? <DrawerTitle>{title}</DrawerTitle> : null}
            {description != null ? (
              <DrawerDescription>{description}</DrawerDescription>
            ) : null}
          </DrawerHeader>
        ) : null}
        {children}
        {footer != null || closeText != null ? (
          <DrawerFooter>
            {footer}
            {closeText != null ? (
              <DrawerClose render={<Button variant={closeVariant} />}>
                {closeText}
              </DrawerClose>
            ) : null}
          </DrawerFooter>
        ) : null}
      </DrawerContent>
    </DrawerRoot>
  );
};

export {
  Drawer,
  type DrawerBehavior,
  type DrawerClassNames,
  type DrawerProps,
  type DrawerSide,
  type DrawerSnapPoint,
  type DrawerStyles,
};
