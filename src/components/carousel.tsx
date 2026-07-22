'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { useReducedMotion } from 'motion/react';

import { cn } from '../lib/utils';
import { Button } from './button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselVariant = 'default' | 'depth';

type CarouselDotRenderProps = {
  index: number;
  isSelected: boolean;
};

type CarouselProps = {
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  opts?: CarouselOptions;
  pauseOnHover?: boolean;
  plugins?: CarouselPlugin;
  /** @deprecated Prefer the Carousel ref for imperative control. */
  setApi?: (api: CarouselApi) => void;
  variant?: CarouselVariant;
};

type CarouselRef = {
  api: CarouselApi;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  currentPage: number;
  pageCount: number;
  selectedIndex: number;
  scrollSnaps: number[];
  autoplay: boolean;
  variant: CarouselVariant;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  CarouselRef,
  React.ComponentProps<'div'> & CarouselProps
>(function Carousel(
  {
    autoplay = false,
    autoplayDelay = 3000,
    loop,
    opts,
    pauseOnHover = true,
    setApi,
    plugins,
    variant = 'depth',
    'aria-label': ariaLabel = 'Carousel',
    className,
    children,
    onMouseEnter,
    onMouseLeave,
    ...props
  },
  ref
) {
  const resolvedLoop = loop ?? opts?.loop ?? false;
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: 'x',
      loop: resolvedLoop,
    },
    plugins
  );
  const reduceMotion = useReducedMotion();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const isAutoplayPaused =
    autoplay && (reduceMotion || (pauseOnHover && isHovered));
  const resolvedAutoplayDelay =
    Number.isFinite(autoplayDelay) && autoplayDelay > 0 ? autoplayDelay : 3000;

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    const nextSelectedIndex = api.selectedScrollSnap();
    setSelectedIndex(nextSelectedIndex);
    api.slideNodes().forEach((slide, index) => {
      slide.dataset.carouselPosition =
        index === nextSelectedIndex
          ? 'active'
          : index < nextSelectedIndex
            ? 'before'
            : 'after';
    });
  }, []);

  const onInit = React.useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      setScrollSnaps(api.scrollSnapList());
      onSelect(api);
    },
    [onSelect]
  );

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  React.useImperativeHandle(
    ref,
    () => ({ api, scrollNext, scrollPrev, scrollTo }),
    [api, scrollNext, scrollPrev, scrollTo]
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
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

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
    if (
      !api ||
      !autoplay ||
      isAutoplayPaused ||
      scrollSnaps.length <= 1 ||
      (!resolvedLoop && !api.canScrollNext())
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      api.scrollNext();
    }, resolvedAutoplayDelay);

    return () => window.clearTimeout(timer);
  }, [
    api,
    autoplay,
    isAutoplayPaused,
    resolvedAutoplayDelay,
    resolvedLoop,
    scrollSnaps.length,
    selectedIndex,
  ]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        scrollPrev,
        scrollNext,
        scrollTo,
        canScrollPrev,
        canScrollNext,
        currentPage: selectedIndex + 1,
        pageCount: scrollSnaps.length,
        selectedIndex,
        scrollSnaps,
        autoplay,
        autoplayDelay: resolvedAutoplayDelay,
        loop: resolvedLoop,
        pauseOnHover,
        variant,
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
        data-autoplay={autoplay || undefined}
        data-autoplay-state={
          autoplay ? (isAutoplayPaused ? 'paused' : 'playing') : 'idle'
        }
        data-orientation="horizontal"
        data-slot="carousel"
        data-variant={variant}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { autoplay, carouselRef, variant } = useCarousel();

  return (
    <div
      aria-live={autoplay ? 'off' : 'polite'}
      ref={carouselRef}
      className={cn(
        'overflow-hidden',
        variant === 'depth' && '[perspective:1000px]'
      )}
      data-slot="carousel-content"
    >
      <div className={cn('-ml-4 flex', className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { variant } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full pl-4',
        variant === 'depth' &&
          'opacity-55 transition-[transform,opacity] duration-500 ease-out [transform:rotateY(-8deg)_scale(.94)] [transform-style:preserve-3d] data-[carousel-position=active]:z-10 data-[carousel-position=active]:opacity-100 data-[carousel-position=active]:[transform:rotateY(0deg)_scale(1)] data-[carousel-position=before]:[transform:rotateY(8deg)_scale(.94)] motion-reduce:transform-none motion-reduce:transition-none',
        className
      )}
      {...props}
    />
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

export {
  type CarouselApi,
  type CarouselDotRenderProps,
  type CarouselDotsProps,
  type CarouselOptions,
  type CarouselPlugin,
  type CarouselProps,
  type CarouselRef,
  type CarouselVariant,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};
