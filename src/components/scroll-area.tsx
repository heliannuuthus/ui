import * as React from 'react';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';

import { cn } from '../lib/utils';

type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';
type ScrollAreaScrollbarVisibility = 'auto' | 'always' | 'hidden';
type ScrollAreaFadeEdges = boolean | Exclude<ScrollAreaOrientation, 'both'>;
type ScrollAreaOverflowEdgeThreshold =
  | number
  | Partial<{
      xStart: number;
      xEnd: number;
      yStart: number;
      yEnd: number;
    }>;

type ScrollAreaProps = React.ComponentProps<'div'> & {
  fadeEdges?: ScrollAreaFadeEdges;
  fadeSize?: number | string;
  orientation?: ScrollAreaOrientation;
  overflowEdgeThreshold?: ScrollAreaOverflowEdgeThreshold;
  scrollbarVisibility?: ScrollAreaScrollbarVisibility;
  viewportProps?: React.ComponentProps<'div'>;
};

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
  const resolvedStyle = { ...style, ...fadeStyle };

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      data-fade={fadeAxis}
      data-orientation={orientation}
      data-scrollbar-visibility={scrollbarVisibility}
      className={cn('relative', className)}
      style={resolvedStyle}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        {...resolvedViewportProps}
        data-slot="scroll-area-viewport"
        className={cn(
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

type ScrollBarProps = React.ComponentProps<'div'> & {
  keepMounted?: boolean;
  orientation?: Exclude<ScrollAreaOrientation, 'both'>;
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
      className={cn(
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
  type ScrollAreaFadeEdges,
  type ScrollAreaOrientation,
  type ScrollAreaOverflowEdgeThreshold,
  type ScrollAreaProps,
  type ScrollAreaScrollbarVisibility,
  type ScrollBarProps,
};
