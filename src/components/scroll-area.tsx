import * as React from 'react';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';

import { cn } from '../lib/utils';
import { useComponentDefaults } from './provider';

type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';
type ScrollAreaScrollbarVisibility = 'auto' | 'always' | 'hidden';
type ScrollAreaScrollbarSize = 'sm' | 'md' | 'lg' | number;

type ScrollAreaScrollbarConfig = {
  size?: ScrollAreaScrollbarSize;
  visibility?: ScrollAreaScrollbarVisibility;
};

type ScrollAreaProps = React.ComponentPropsWithoutRef<'div'> & {
  orientation?: ScrollAreaOrientation;
  scrollbar?: ScrollAreaScrollbarConfig;
};

type ScrollAreaProviderDefaults = {
  scrollbar?: Pick<ScrollAreaScrollbarConfig, 'size' | 'visibility'>;
};

const scrollbarSizes = {
  sm: 6,
  md: 10,
  lg: 14,
} as const;

const resolveScrollbarSize = (size: ScrollAreaScrollbarSize) => {
  return typeof size === 'number' ? size : scrollbarSizes[size];
};

const ScrollBar = ({
  orientation = 'vertical',
  visibility,
}: {
  orientation?: Exclude<ScrollAreaOrientation, 'both'>;
  visibility: Exclude<ScrollAreaScrollbarVisibility, 'hidden'>;
}) => {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-visibility={visibility}
      keepMounted={visibility === 'always'}
      orientation={orientation}
      className="pointer-events-none flex touch-none p-px opacity-0 transition-opacity duration-150 select-none data-hovering:pointer-events-auto data-hovering:opacity-100 data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0 data-[visibility=always]:pointer-events-auto data-[visibility=always]:opacity-100 data-horizontal:h-(--scroll-area-scrollbar-size) data-horizontal:flex-col data-vertical:h-full data-vertical:w-(--scroll-area-scrollbar-size)"
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-primary/30 transition-colors hover:bg-primary/55 active:bg-primary/70"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
};

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      className,
      orientation = 'vertical',
      scrollbar,
      style,
      ...props
    },
    ref
  ) => {
    const defaults = useComponentDefaults('ScrollArea');
    const resolvedScrollbar = { ...defaults.scrollbar, ...scrollbar };
    const { size = 'md', visibility = 'auto' } = resolvedScrollbar;
    const showsScrollbar = visibility !== 'hidden';

    return (
      <ScrollAreaPrimitive.Root
        {...props}
        ref={ref}
        data-slot="scroll-area"
        data-orientation={orientation}
        data-scrollbar-visibility={visibility}
        className={cn('relative', className)}
        style={
          {
            '--scroll-area-scrollbar-size': `${resolveScrollbarSize(size)}px`,
            ...style,
          } as React.CSSProperties
        }
      >
        <ScrollAreaPrimitive.Viewport
          data-slot="scroll-area-viewport"
          className="size-full rounded-[inherit] outline-none"
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        {showsScrollbar &&
          (orientation === 'vertical' || orientation === 'both') && (
            <ScrollBar visibility={visibility} />
          )}
        {showsScrollbar &&
          (orientation === 'horizontal' || orientation === 'both') && (
            <ScrollBar orientation="horizontal" visibility={visibility} />
          )}
        {showsScrollbar && orientation === 'both' && (
          <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
        )}
      </ScrollAreaPrimitive.Root>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';

export {
  ScrollArea,
  type ScrollAreaOrientation,
  type ScrollAreaProps,
  type ScrollAreaProviderDefaults,
  type ScrollAreaScrollbarConfig,
  type ScrollAreaScrollbarSize,
  type ScrollAreaScrollbarVisibility,
};
