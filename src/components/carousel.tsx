'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { useReducedMotion } from 'motion/react';

import { cn } from '../lib/utils';
import { Button } from './button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type EmblaCarouselApi = UseEmblaCarouselType[1];
type CarouselAutoplay = boolean | number;
type CarouselScrollDirection = 'next' | 'prev';

type CarouselDotRenderProps = {
  index: number;
  isSelected: boolean;
};

type CarouselProps<Item = React.ReactNode> = Omit<
  React.ComponentProps<'div'>,
  'children'
> & {
  autoplay?: CarouselAutoplay;
  contentClassName?: string;
  controls?: boolean;
  itemClassName?: string;
  items: readonly Item[];
  loop?: boolean;
  nextButtonProps?: React.ComponentProps<typeof Button>;
  pauseOnHover?: boolean;
  pagination?:
    false | 'dots' | ((controls: CarouselControls) => React.ReactNode);
  paginationPosition?: 'before' | 'after';
  previousButtonProps?: React.ComponentProps<typeof Button>;
  renderDot?: (props: CarouselDotRenderProps) => React.ReactNode;
  renderItem?: (item: Item, index: number) => React.ReactNode;
};

type CarouselRef = {
  pause: () => void;
  play: () => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
};

type CarouselControls = CarouselRef & {
  canScrollNext: boolean;
  canScrollPrev: boolean;
  currentPage: number;
  isPlaying: boolean;
  pageCount: number;
  selectedIndex: number;
  scrollSnaps: number[];
};

type CarouselContextValue = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  autoplayEnabled: boolean;
  controls: CarouselControls;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function getCarouselPosition({
  direction,
  index,
  loop,
  selectedIndex,
  slideCount,
}: {
  direction: CarouselScrollDirection;
  index: number;
  loop: boolean;
  selectedIndex: number;
  slideCount: number;
}): 'active' | 'after' | 'before' {
  if (index === selectedIndex) return 'active';
  if (!loop || slideCount <= 1) {
    return index < selectedIndex ? 'before' : 'after';
  }

  const forwardDistance = (index - selectedIndex + slideCount) % slideCount;
  const backwardDistance = (selectedIndex - index + slideCount) % slideCount;

  if (forwardDistance === backwardDistance) {
    return direction === 'next' ? 'after' : 'before';
  }

  return forwardDistance < backwardDistance ? 'after' : 'before';
}

function useCarouselContext() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function useCarousel() {
  return useCarouselContext().controls;
}

const Carousel = React.forwardRef<CarouselRef, CarouselProps>(function Carousel(
  {
    autoplay = false,
    contentClassName,
    controls = true,
    itemClassName,
    items,
    loop = false,
    nextButtonProps,
    pauseOnHover = true,
    pagination = 'dots',
    paginationPosition = 'after',
    previousButtonProps,
    renderDot,
    renderItem,
    'aria-label': ariaLabel = 'Carousel',
    className,
    onMouseEnter,
    onMouseLeave,
    ...props
  },
  ref
) {
  const [carouselRef, api] = useEmblaCarousel({
    align: 'start',
    axis: 'x',
    loop,
    slidesToScroll: 1,
  });
  const reduceMotion = useReducedMotion();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const selectedIndexRef = React.useRef(0);
  const scrollDirectionRef = React.useRef<CarouselScrollDirection>('next');
  const autoplayDelay =
    autoplay === true
      ? 3000
      : typeof autoplay === 'number' &&
          Number.isFinite(autoplay) &&
          autoplay > 0
        ? autoplay * 1000
        : null;
  const autoplayEnabled = autoplayDelay != null;
  const isAutoplayPaused =
    !autoplayEnabled ||
    reduceMotion ||
    isManuallyPaused ||
    (pauseOnHover && isHovered);
  const isPlaying = autoplayEnabled && !isAutoplayPaused;
  const paginationNode =
    pagination === 'dots' ? (
      <CarouselDots>{renderDot}</CarouselDots>
    ) : typeof pagination === 'function' ? (
      <CarouselPagination>{pagination}</CarouselPagination>
    ) : null;

  const onSelect = React.useCallback(
    (api: EmblaCarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      const nextSelectedIndex = api.selectedScrollSnap();
      const previousSelectedIndex = selectedIndexRef.current;
      const slideCount = api.slideNodes().length;

      if (nextSelectedIndex !== previousSelectedIndex && slideCount > 1) {
        if (loop) {
          const forwardDistance =
            (nextSelectedIndex - previousSelectedIndex + slideCount) %
            slideCount;
          const backwardDistance =
            (previousSelectedIndex - nextSelectedIndex + slideCount) %
            slideCount;

          if (forwardDistance !== backwardDistance) {
            scrollDirectionRef.current =
              forwardDistance < backwardDistance ? 'next' : 'prev';
          }
        } else {
          scrollDirectionRef.current =
            nextSelectedIndex > previousSelectedIndex ? 'next' : 'prev';
        }
      }

      selectedIndexRef.current = nextSelectedIndex;
      setSelectedIndex(nextSelectedIndex);
      api.slideNodes().forEach((slide, index) => {
        slide.dataset.carouselPosition = getCarouselPosition({
          direction: scrollDirectionRef.current,
          index,
          loop,
          selectedIndex: nextSelectedIndex,
          slideCount,
        });
      });
    },
    [loop]
  );

  const onInit = React.useCallback(
    (api: EmblaCarouselApi) => {
      if (!api) return;
      setScrollSnaps(api.scrollSnapList());
      onSelect(api);
    },
    [onSelect]
  );

  const scrollPrev = React.useCallback(() => {
    scrollDirectionRef.current = 'prev';
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    scrollDirectionRef.current = 'next';
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      const slideCount = scrollSnaps.length;

      if (slideCount > 1 && index !== selectedIndexRef.current) {
        if (loop) {
          const forwardDistance =
            (index - selectedIndexRef.current + slideCount) % slideCount;
          const backwardDistance =
            (selectedIndexRef.current - index + slideCount) % slideCount;
          scrollDirectionRef.current =
            forwardDistance <= backwardDistance ? 'next' : 'prev';
        } else {
          scrollDirectionRef.current =
            index > selectedIndexRef.current ? 'next' : 'prev';
        }
      }

      api?.scrollTo(index);
    },
    [api, loop, scrollSnaps.length]
  );

  const pause = React.useCallback(() => setIsManuallyPaused(true), []);
  const play = React.useCallback(() => setIsManuallyPaused(false), []);

  React.useImperativeHandle(
    ref,
    () => ({
      pause,
      play,
      scrollNext,
      scrollPrev,
      scrollTo,
    }),
    [pause, play, scrollNext, scrollPrev, scrollTo]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api) return;
    onInit(api);
    api.on('reInit', onInit);
    api.on('select', onSelect);

    return () => {
      api.off('reInit', onInit);
      api.off('select', onSelect);
    };
  }, [api, onInit, onSelect]);

  React.useEffect(() => {
    if (!autoplayEnabled) setIsManuallyPaused(false);
  }, [autoplayEnabled]);

  React.useEffect(() => {
    if (
      !api ||
      autoplayDelay == null ||
      isAutoplayPaused ||
      scrollSnaps.length <= 1 ||
      (!loop && !api.canScrollNext())
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollDirectionRef.current = 'next';
      api.scrollNext();
    }, autoplayDelay);

    return () => window.clearTimeout(timer);
  }, [
    api,
    autoplayDelay,
    isAutoplayPaused,
    loop,
    scrollSnaps.length,
    selectedIndex,
  ]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        autoplayEnabled,
        controls: {
          canScrollNext,
          canScrollPrev,
          currentPage: selectedIndex + 1,
          isPlaying,
          pageCount: scrollSnaps.length,
          pause,
          play,
          scrollNext,
          scrollPrev,
          scrollSnaps,
          scrollTo,
          selectedIndex,
        },
      }}
    >
      <div
        aria-label={ariaLabel}
        onKeyDownCapture={handleKeyDown}
        onMouseEnter={(event) => {
          onMouseEnter?.(event);
          if (pauseOnHover) setIsHovered(true);
        }}
        onMouseLeave={(event) => {
          onMouseLeave?.(event);
          setIsHovered(false);
        }}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-autoplay={
          autoplayEnabled ? (autoplay === true ? 'true' : autoplay) : undefined
        }
        data-autoplay-state={
          autoplayEnabled ? (isPlaying ? 'playing' : 'paused') : 'idle'
        }
        data-orientation="horizontal"
        data-slot="carousel"
        {...props}
      >
        {paginationPosition === 'before' ? paginationNode : null}
        <CarouselContent className={contentClassName}>
          {items.map((item, index) => (
            <CarouselItem className={itemClassName} key={index}>
              {renderItem ? renderItem(item, index) : item}
            </CarouselItem>
          ))}
        </CarouselContent>
        {controls ? (
          <>
            <CarouselPrevious {...previousButtonProps} />
            <CarouselNext {...nextButtonProps} />
          </>
        ) : null}
        {paginationPosition === 'after' ? paginationNode : null}
      </div>
    </CarouselContext.Provider>
  );
});

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { autoplayEnabled, carouselRef } = useCarouselContext();

  return (
    <div
      aria-live={autoplayEnabled ? 'off' : 'polite'}
      ref={carouselRef}
      className="overflow-hidden [perspective:1000px]"
      data-slot="carousel-content"
    >
      <div className={cn('-ml-4 flex', className)} {...props} />
    </div>
  );
}

function CarouselItem({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'group/carousel-item min-w-0 shrink-0 grow-0 basis-full pl-4 data-[carousel-position=active]:z-10',
        className
      )}
      {...props}
    >
      <div
        className="h-full opacity-55 transition-[transform,opacity] duration-500 ease-out [transform:rotateY(-8deg)_scale(.94)] [transform-style:preserve-3d] group-data-[carousel-position=active]/carousel-item:opacity-100 group-data-[carousel-position=active]/carousel-item:[transform:rotateY(0deg)_scale(1)] group-data-[carousel-position=before]/carousel-item:[transform:rotateY(8deg)_scale(.94)] motion-reduce:transform-none motion-reduce:transition-none"
        data-slot="carousel-item-content"
      >
        {children}
      </div>
    </div>
  );
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon-sm',
  children,
  disabled,
  onClick,
  'aria-label': ariaLabel = 'Previous slide',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      aria-label={ariaLabel}
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute inset-y-0 -left-12 my-auto touch-manipulation rounded-full',
        className
      )}
      disabled={disabled || !canScrollPrev}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) scrollPrev();
      }}
      {...props}
    >
      {children ?? <ChevronLeftIcon aria-hidden />}
    </Button>
  );
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon-sm',
  children,
  disabled,
  onClick,
  'aria-label': ariaLabel = 'Next slide',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      aria-label={ariaLabel}
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute inset-y-0 -right-12 my-auto touch-manipulation rounded-full',
        className
      )}
      disabled={disabled || !canScrollNext}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) scrollNext();
      }}
      {...props}
    >
      {children ?? <ChevronRightIcon aria-hidden />}
    </Button>
  );
}

type CarouselDotsProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children?:
    React.ReactNode | ((props: CarouselDotRenderProps) => React.ReactNode);
};

function CarouselDots({ className, children, ...props }: CarouselDotsProps) {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel();
  const customDot = typeof children === 'function';

  if (scrollSnaps.length <= 1) return null;

  return (
    <div
      aria-label="Choose slide"
      className={cn(
        'my-3 flex min-h-5 items-center justify-center gap-1.5',
        className
      )}
      data-slot="carousel-dots"
      role="group"
      {...props}
    >
      {scrollSnaps.map((scrollSnap, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={isSelected}
            className="group/dot grid size-5 touch-manipulation place-items-center rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            data-selected={isSelected || undefined}
            data-slot="carousel-dot"
            key={scrollSnap}
            onClick={() => scrollTo(index)}
            type="button"
          >
            {customDot ? (
              children({ index, isSelected })
            ) : children ? (
              children
            ) : (
              <span className="size-1.5 rounded-full bg-muted-foreground/45 transition-all group-data-[selected]/dot:size-2 group-data-[selected]/dot:bg-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}

type CarouselPaginationProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children?:
    React.ReactNode | ((controls: CarouselControls) => React.ReactNode);
};

function CarouselPagination({ children, ...props }: CarouselPaginationProps) {
  const controls = useCarousel();

  if (children == null) return null;

  return (
    <div data-slot="carousel-pagination" {...props}>
      {typeof children === 'function' ? children(controls) : children}
    </div>
  );
}

export {
  type CarouselAutoplay,
  type CarouselControls,
  type CarouselDotRenderProps,
  type CarouselProps,
  type CarouselRef,
  Carousel,
  useCarousel,
};
