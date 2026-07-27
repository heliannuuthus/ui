import * as React from 'react';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';

import { cn } from '../lib/utils';

type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';
type ScrollAreaScrollbarVisibility = 'auto' | 'always' | 'hidden';
type ScrollAreaFadeEdges = boolean | Exclude<ScrollAreaOrientation, 'both'>;

type ScrollAreaProps = ScrollAreaPrimitive.Root.Props & {
  fadeEdges?: ScrollAreaFadeEdges;
  fadeSize?: number | string;
  orientation?: ScrollAreaOrientation;
  scrollbarVisibility?: ScrollAreaScrollbarVisibility;
  viewportProps?: ScrollAreaPrimitive.Viewport.Props;
};

type StatefulClassName<State> = string | ((state: State) => string | undefined);

function mergeClassName<State>(
  baseClassName: string,
  className: StatefulClassName<State> | undefined
): StatefulClassName<State> {
  if (typeof className === 'function') {
    return (state) => cn(baseClassName, className(state));
  }

  return cn(baseClassName, className);
}

function toCssLength(value: number | string) {
  return typeof value === 'number' ? `${value}px` : value;
}

function ScrollArea({
  className,
  children,
  fadeEdges = false,
  fadeSize = 40,
  orientation = 'vertical',
  scrollbarVisibility = 'auto',
  style,
  viewportProps,
  ...props
}: ScrollAreaProps) {
  const fadeAxis = fadeEdges === true ? 'vertical' : fadeEdges || undefined;
  const {
    className: viewportClassName,
    style: viewportStyle,
    ...resolvedViewportProps
  } = viewportProps ?? {};
  const fadeStyle = fadeAxis
    ? ({
        '--scroll-area-fade-size': toCssLength(fadeSize),
      } as React.CSSProperties)
    : undefined;
  const resolvedStyle =
    typeof style === 'function'
      ? (state: ScrollAreaPrimitive.Root.State) => ({
          ...style(state),
          ...fadeStyle,
        })
      : { ...style, ...fadeStyle };

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      data-fade={fadeAxis}
      data-orientation={orientation}
      data-scrollbar-visibility={scrollbarVisibility}
      className={mergeClassName<ScrollAreaPrimitive.Root.State>(
        'relative',
        className
      )}
      style={resolvedStyle}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        {...resolvedViewportProps}
        data-slot="scroll-area-viewport"
        className={mergeClassName<ScrollAreaPrimitive.Viewport.State>(
          'size-full rounded-[inherit] outline-none',
          viewportClassName
        )}
        style={viewportStyle}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {scrollbarVisibility !== 'hidden' &&
        (orientation === 'vertical' || orientation === 'both') && (
          <ScrollBar visibility={scrollbarVisibility} />
        )}
      {scrollbarVisibility !== 'hidden' &&
        (orientation === 'horizontal' || orientation === 'both') && (
          <ScrollBar
            orientation="horizontal"
            visibility={scrollbarVisibility}
          />
        )}
      {scrollbarVisibility !== 'hidden' && orientation === 'both' && (
        <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
      )}
    </ScrollAreaPrimitive.Root>
  );
}

type ScrollBarProps = ScrollAreaPrimitive.Scrollbar.Props & {
  visibility?: Exclude<ScrollAreaScrollbarVisibility, 'hidden'>;
};

function ScrollBar({
  className,
  orientation = 'vertical',
  visibility = 'auto',
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      data-visibility={visibility}
      orientation={orientation}
      className={mergeClassName<ScrollAreaPrimitive.Scrollbar.State>(
        'pointer-events-none flex touch-none p-px opacity-0 transition-[opacity,colors] duration-150 select-none data-hovering:pointer-events-auto data-hovering:opacity-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 data-[visibility=always]:pointer-events-auto data-[visibility=always]:opacity-100 data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent',
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-primary/30 transition-colors hover:bg-primary/55 active:bg-primary/70"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

const ScrollAreaCompound = Object.assign(ScrollArea, {
  Bar: ScrollBar,
});

export {
  ScrollAreaCompound as ScrollArea,
  ScrollBar as Bar,
  type ScrollAreaFadeEdges,
  type ScrollAreaOrientation,
  type ScrollAreaProps,
  type ScrollAreaScrollbarVisibility,
  type ScrollBarProps,
};
