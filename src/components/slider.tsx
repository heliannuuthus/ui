'use client';

import * as React from 'react';
import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';

import { cn } from '../lib/utils';

const MAX_ELASTIC_OVERFLOW = 48;

type SliderEffect = 'none' | 'elastic';
type ElasticEdge = 'none' | 'start' | 'end';

type SliderProps<Value extends number | readonly number[]> =
  SliderPrimitive.Root.Props<Value> & {
    effect?: SliderEffect;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
  };

const elasticTransition = {
  type: 'spring',
  stiffness: 320,
  damping: 18,
  mass: 0.7,
} as const;

function Slider<Value extends number | readonly number[]>({
  className,
  defaultValue,
  disabled,
  effect = 'none',
  endIcon,
  max = 100,
  min = 0,
  orientation = 'horizontal',
  startIcon,
  value,
  ...props
}: SliderProps<Value>) {
  const _values = Array.isArray(value)
    ? value
    : typeof value === 'number'
      ? [value]
      : Array.isArray(defaultValue)
        ? defaultValue
        : typeof defaultValue === 'number'
          ? [defaultValue]
          : [min, max];
  const controlRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [elasticEdge, setElasticEdge] = React.useState<ElasticEdge>('none');
  const trackMainScale = useMotionValue(1);
  const trackCrossScale = useMotionValue(1);
  const startIconOffset = useMotionValue(0);
  const endIconOffset = useMotionValue(0);
  const startIconScale = useMotionValue(1);
  const endIconScale = useMotionValue(1);
  const elasticEnabled = effect === 'elastic' && !reduceMotion && !disabled;

  const resetElastic = React.useCallback(
    (immediate = false) => {
      const reset = (motionValue: typeof trackMainScale, nextValue: number) => {
        if (immediate) motionValue.jump(nextValue);
        else animate(motionValue, nextValue, elasticTransition);
      };

      reset(trackMainScale, 1);
      reset(trackCrossScale, 1);
      reset(startIconOffset, 0);
      reset(endIconOffset, 0);
      reset(startIconScale, 1);
      reset(endIconScale, 1);
    },
    [
      endIconOffset,
      endIconScale,
      startIconOffset,
      startIconScale,
      trackCrossScale,
      trackMainScale,
    ]
  );

  React.useEffect(() => {
    if (!elasticEnabled) {
      setElasticEdge('none');
      resetElastic(true);
    }
  }, [elasticEnabled, resetElastic]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const control = controlRef.current;

    if (!elasticEnabled || event.buttons === 0 || !control) return;

    const rect = control.getBoundingClientRect();
    const vertical = orientation === 'vertical';
    const pointer = vertical ? event.clientY : event.clientX;
    const start = vertical ? rect.top : rect.left;
    const end = vertical ? rect.bottom : rect.right;
    const extent = vertical ? rect.height : rect.width;
    const nextEdge: ElasticEdge =
      pointer < start ? 'start' : pointer > end ? 'end' : 'none';

    setElasticEdge((current) => (current === nextEdge ? current : nextEdge));

    if (nextEdge === 'none') {
      resetElastic(true);
      return;
    }

    const rawOverflow = nextEdge === 'start' ? start - pointer : pointer - end;
    const overflow = decay(rawOverflow, MAX_ELASTIC_OVERFLOW);
    const iconScale = 1 + (overflow / MAX_ELASTIC_OVERFLOW) * 0.28;

    trackMainScale.jump(1 + overflow / Math.max(extent, 1));
    trackCrossScale.jump(1 - (overflow / MAX_ELASTIC_OVERFLOW) * 0.18);
    startIconOffset.jump(nextEdge === 'start' ? -overflow : 0);
    endIconOffset.jump(nextEdge === 'end' ? overflow : 0);
    startIconScale.jump(nextEdge === 'start' ? iconScale : 1);
    endIconScale.jump(nextEdge === 'end' ? iconScale : 1);
  }

  function handlePointerEnd() {
    if (!elasticEnabled) return;
    resetElastic();
  }

  const trackTransformOrigin =
    elasticEdge === 'start'
      ? orientation === 'vertical'
        ? 'center bottom'
        : 'right center'
      : elasticEdge === 'end'
        ? orientation === 'vertical'
          ? 'center top'
          : 'left center'
        : 'center';
  const trackMotionStyle =
    orientation === 'vertical'
      ? {
          scaleX: trackCrossScale,
          scaleY: trackMainScale,
          transformOrigin: trackTransformOrigin,
        }
      : {
          scaleX: trackMainScale,
          scaleY: trackCrossScale,
          transformOrigin: trackTransformOrigin,
        };

  return (
    <SliderPrimitive.Root
      className={cn(
        'group/slider data-horizontal:w-full data-vertical:h-full',
        className
      )}
      data-effect={effect}
      data-slot="slider"
      defaultValue={defaultValue}
      disabled={disabled}
      max={max}
      min={min}
      orientation={orientation}
      thumbAlignment="edge"
      value={value}
      {...props}
    >
      <div
        data-slot="slider-shell"
        className={cn(
          'flex items-center justify-center gap-3',
          orientation === 'vertical' ? 'h-full flex-col' : 'w-full'
        )}
      >
        {startIcon != null && (
          <motion.span
            data-slot="slider-start-icon"
            aria-hidden="true"
            className="flex shrink-0 text-muted-foreground opacity-70 transition-opacity group-hover/slider:opacity-100 [&_svg]:size-4"
            style={
              orientation === 'vertical'
                ? { y: startIconOffset, scale: startIconScale }
                : { x: startIconOffset, scale: startIconScale }
            }
          >
            {startIcon}
          </motion.span>
        )}
        <SliderPrimitive.Control
          ref={controlRef}
          className="relative flex min-w-0 flex-1 touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col"
          onLostPointerCapture={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
        >
          <motion.div
            data-slot="slider-track-motion"
            className="flex min-h-0 min-w-0 grow data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full"
            data-orientation={orientation}
            style={trackMotionStyle}
          >
            <SliderPrimitive.Track
              data-slot="slider-track"
              className="relative grow overflow-hidden rounded-full bg-input/90 transition-[height,width] duration-200 select-none data-horizontal:h-2 data-horizontal:w-full data-vertical:h-full data-vertical:w-2"
            >
              <SliderPrimitive.Indicator
                data-slot="slider-range"
                className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
              />
            </SliderPrimitive.Track>
          </motion.div>
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              key={index}
              className="block h-4 w-6 shrink-0 rounded-full bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow,background-color,transform] select-none not-dark:bg-clip-padding hover:scale-105 hover:ring-4 hover:ring-ring/30 focus-visible:scale-105 focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-dragging:scale-110 data-vertical:h-6 data-vertical:w-4"
            />
          ))}
        </SliderPrimitive.Control>
        {endIcon != null && (
          <motion.span
            data-slot="slider-end-icon"
            aria-hidden="true"
            className="flex shrink-0 text-muted-foreground opacity-70 transition-opacity group-hover/slider:opacity-100 [&_svg]:size-5"
            style={
              orientation === 'vertical'
                ? { y: endIconOffset, scale: endIconScale }
                : { x: endIconOffset, scale: endIconScale }
            }
          >
            {endIcon}
          </motion.span>
        )}
      </div>
    </SliderPrimitive.Root>
  );
}

function decay(value: number, max: number) {
  if (max === 0) return 0;

  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
}

export { Slider, type SliderEffect, type SliderProps };
