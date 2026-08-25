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
import { useComponentDefaults } from './provider';
import {
  mergeIds,
  registerFormControl,
  useMergedRefs,
  useFormControl,
} from './internal/form-control';

const MAX_ELASTIC_OVERFLOW = 20;
const ACTIVE_SHELL_SCALE = 1.045;
const IDLE_SHELL_OPACITY = 0.88;

type SliderEffect = 'none' | 'elastic';
type ElasticEdge = 'none' | 'start' | 'end';

type SliderProps<Value extends number | readonly number[]> = Omit<
  React.ComponentProps<'div'>,
  'defaultValue' | 'onChange'
> & {
  defaultValue?: Value;
  disabled?: boolean;
  effect?: SliderEffect;
  endIcon?: React.ReactNode;
  endLabel?: React.ReactNode;
  form?: string;
  format?: Intl.NumberFormatOptions;
  inputRef?: React.Ref<HTMLInputElement>;
  largeStep?: number;
  locale?: Intl.LocalesArgument;
  max?: number;
  min?: number;
  minStepsBetweenValues?: number;
  name?: string;
  onChange?: (value: Value extends number ? number : Value) => void;
  onChangeComplete?: (value: Value extends number ? number : Value) => void;
  orientation?: 'horizontal' | 'vertical';
  startIcon?: React.ReactNode;
  startLabel?: React.ReactNode;
  step?: number;
  thumbCollisionBehavior?: 'none' | 'push' | 'swap';
  value?: Value;
};

const elasticTransition = {
  type: 'spring',
  stiffness: 320,
  damping: 18,
  mass: 0.7,
} as const;

const Slider = <Value extends number | readonly number[]>(
  sliderProps: SliderProps<Value>
) => {
  const defaults = useComponentDefaults('Slider');
  const {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-labelledby': ariaLabelledBy,
    className,
    defaultValue,
    disabled,
    effect = defaults.effect ?? 'elastic',
    endIcon,
    endLabel,
    id,
    inputRef,
    max = 100,
    min = 0,
    name,
    onBlur,
    onChange,
    onChangeComplete,
    orientation = 'horizontal',
    startIcon,
    startLabel,
    value,
    ...props
  } = sliderProps;
  const formControl = useFormControl<Value>();
  const formInputRef = useMergedRefs(
    inputRef,
    formControl?.ref as React.Ref<HTMLInputElement> | undefined
  );
  const resolvedValue = formControl?.value ?? value;
  const resolvedDisabled = disabled || formControl?.disabled;
  const _values = Array.isArray(resolvedValue)
    ? resolvedValue
    : typeof resolvedValue === 'number'
      ? [resolvedValue]
      : Array.isArray(defaultValue)
        ? defaultValue
        : typeof defaultValue === 'number'
          ? [defaultValue]
          : [min, max];
  const controlRef = React.useRef<HTMLDivElement>(null);
  const shellRef = React.useRef<HTMLDivElement>(null);
  const interactionActiveRef = React.useRef(false);
  const pointerActiveRef = React.useRef(false);
  const reduceMotion = useReducedMotion();
  const shellScale = useMotionValue(1);
  const shellOpacity = useMotionValue(
    effect === 'elastic' && !resolvedDisabled ? IDLE_SHELL_OPACITY : 1
  );
  const startIconOffset = useMotionValue(0);
  const endIconOffset = useMotionValue(0);
  const startIconScale = useMotionValue(1);
  const endIconScale = useMotionValue(1);
  const elasticEnabled =
    effect === 'elastic' && !reduceMotion && !resolvedDisabled;

  const setInteractionActive = React.useCallback(
    (active: boolean, immediate = false) => {
      interactionActiveRef.current = active;
      const nextScale = active ? ACTIVE_SHELL_SCALE : 1;
      const nextOpacity = active ? 1 : IDLE_SHELL_OPACITY;

      if (immediate) {
        shellScale.jump(nextScale);
        shellOpacity.jump(nextOpacity);
      } else {
        animate(shellScale, nextScale, elasticTransition);
        animate(shellOpacity, nextOpacity, {
          duration: 0.16,
          ease: 'easeOut',
        });
      }
    },
    [shellOpacity, shellScale]
  );

  const resetElastic = React.useCallback(
    (immediate = false) => {
      const reset = (
        motionValue: typeof startIconOffset,
        nextValue: number
      ) => {
        if (immediate) motionValue.jump(nextValue);
        else animate(motionValue, nextValue, elasticTransition);
      };

      reset(startIconOffset, 0);
      reset(endIconOffset, 0);
      reset(startIconScale, 1);
      reset(endIconScale, 1);
    },
    [endIconOffset, endIconScale, startIconOffset, startIconScale]
  );

  React.useEffect(() => {
    if (!elasticEnabled) {
      interactionActiveRef.current = false;
      pointerActiveRef.current = false;
      shellScale.jump(1);
      shellOpacity.jump(1);
      resetElastic(true);
    } else if (!interactionActiveRef.current) {
      shellScale.jump(1);
      shellOpacity.jump(IDLE_SHELL_OPACITY);
    }
  }, [elasticEnabled, resetElastic, shellOpacity, shellScale]);

  const handlePointerEnter = () => {
    if (!elasticEnabled) return;
    setInteractionActive(true);
  };

  const handlePointerLeave = () => {
    if (!elasticEnabled || pointerActiveRef.current) return;

    const focusWithin = shellRef.current?.matches(':focus-within') ?? false;
    setInteractionActive(focusWithin);
  };

  const handlePointerDown = () => {
    if (!elasticEnabled) return;

    pointerActiveRef.current = true;
    setInteractionActive(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const control = controlRef.current;

    if (!elasticEnabled || event.buttons === 0 || !control) return;

    const rect = control.getBoundingClientRect();
    const vertical = orientation === 'vertical';
    const pointer = vertical ? event.clientY : event.clientX;
    const start = vertical ? rect.top : rect.left;
    const end = vertical ? rect.bottom : rect.right;
    const nextEdge: ElasticEdge =
      pointer < start ? 'start' : pointer > end ? 'end' : 'none';

    if (nextEdge === 'none') {
      resetElastic(true);
      return;
    }

    const rawOverflow = nextEdge === 'start' ? start - pointer : pointer - end;
    const overflow = decay(rawOverflow, MAX_ELASTIC_OVERFLOW);
    const iconScale = 1 + (overflow / MAX_ELASTIC_OVERFLOW) * 0.025;
    const iconOffset = (overflow / MAX_ELASTIC_OVERFLOW) * 4;
    const shellRatio = shellScale.get();

    startIconOffset.jump(nextEdge === 'start' ? -iconOffset / shellRatio : 0);
    endIconOffset.jump(nextEdge === 'end' ? iconOffset / shellRatio : 0);
    startIconScale.jump(nextEdge === 'start' ? iconScale : 1);
    endIconScale.jump(nextEdge === 'end' ? iconScale : 1);
  };

  const handlePointerEnd = () => {
    if (!elasticEnabled) return;

    pointerActiveRef.current = false;
    const interactionActive =
      (shellRef.current?.matches(':hover') ?? false) ||
      (shellRef.current?.matches(':focus-within') ?? false);
    setInteractionActive(interactionActive);
    resetElastic();
  };

  const handleFocus = () => {
    if (!elasticEnabled) return;
    setInteractionActive(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur?.(event);
    formControl?.onBlur();

    if (
      !elasticEnabled ||
      pointerActiveRef.current ||
      event.currentTarget.contains(event.relatedTarget)
    ) {
      return;
    }

    const hovered = event.currentTarget.matches(':hover');
    setInteractionActive(hovered);
  };

  return (
    <SliderPrimitive.Root
      {...props}
      aria-describedby={mergeIds(
        ariaDescribedBy,
        formControl?.descriptionId,
        formControl?.messageId
      )}
      aria-invalid={ariaInvalid ?? formControl?.invalid}
      aria-labelledby={mergeIds(ariaLabelledBy, formControl?.labelId)}
      className={cn(
        'group/slider data-horizontal:w-full data-vertical:h-full',
        effect === 'elastic' &&
          (orientation === 'vertical' ? 'px-2 py-4' : 'px-4 py-2'),
        className
      )}
      data-effect={effect}
      data-slot="slider"
      defaultValue={formControl ? undefined : defaultValue}
      disabled={resolvedDisabled}
      id={id ?? formControl?.controlId}
      max={max}
      min={min}
      name={formControl?.name ?? name}
      onValueChange={(nextValue) => {
        onChange?.(nextValue as Value extends number ? number : Value);
        formControl?.onChange(nextValue as Value);
      }}
      onValueCommitted={(nextValue) =>
        onChangeComplete?.(nextValue as Value extends number ? number : Value)
      }
      orientation={orientation}
      thumbAlignment="edge"
      value={resolvedValue}
    >
      <motion.div
        ref={shellRef}
        data-slot="slider-shell"
        className={cn(
          'flex origin-center items-center justify-center gap-3 will-change-transform',
          orientation === 'vertical' ? 'h-full flex-col' : 'w-full',
          effect === 'elastic' && 'px-3 py-2'
        )}
        onBlurCapture={handleBlur}
        onFocusCapture={handleFocus}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{ opacity: shellOpacity, scale: shellScale }}
      >
        {(startIcon != null || startLabel != null) && (
          <motion.span
            data-slot="slider-start-icon"
            aria-hidden="true"
            className={cn(
              'flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-muted-foreground opacity-80 transition-opacity group-hover/slider:opacity-100 group-focus-within/slider:opacity-100 [&_svg]:size-[18px]',
              orientation === 'vertical' && 'flex-col'
            )}
            style={
              orientation === 'vertical'
                ? { y: startIconOffset, scale: startIconScale }
                : { x: startIconOffset, scale: startIconScale }
            }
          >
            {startIcon}
            {startLabel != null && <span>{startLabel}</span>}
          </motion.span>
        )}
        <SliderPrimitive.Control
          ref={controlRef}
          className="relative flex min-w-0 flex-1 touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col"
          onLostPointerCapture={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
        >
          <div
            data-slot="slider-track-motion"
            className="flex min-h-0 min-w-0 grow data-[orientation=horizontal]:w-full data-[orientation=horizontal]:px-1.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:py-1.5"
            data-orientation={orientation}
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
          </div>
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              aria-describedby={
                index === 0
                  ? mergeIds(
                      ariaDescribedBy,
                      formControl?.descriptionId,
                      formControl?.messageId
                    )
                  : undefined
              }
              aria-invalid={
                index === 0 ? (ariaInvalid ?? formControl?.invalid) : undefined
              }
              aria-labelledby={
                index === 0
                  ? mergeIds(ariaLabelledBy, formControl?.labelId)
                  : undefined
              }
              inputRef={index === 0 ? formInputRef : undefined}
              key={index}
              className="block h-4 w-6 shrink-0 rounded-full bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow,background-color,transform] select-none not-dark:bg-clip-padding hover:scale-105 hover:ring-4 hover:ring-ring/30 focus-visible:scale-105 focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-dragging:scale-110 data-vertical:h-6 data-vertical:w-4"
            />
          ))}
        </SliderPrimitive.Control>
        {(endIcon != null || endLabel != null) && (
          <motion.span
            data-slot="slider-end-icon"
            aria-hidden="true"
            className={cn(
              'flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium text-muted-foreground opacity-80 transition-opacity group-hover/slider:opacity-100 group-focus-within/slider:opacity-100 [&_svg]:size-[18px]',
              orientation === 'vertical' && 'flex-col'
            )}
            style={
              orientation === 'vertical'
                ? { y: endIconOffset, scale: endIconScale }
                : { x: endIconOffset, scale: endIconScale }
            }
          >
            {endIcon}
            {endLabel != null && <span>{endLabel}</span>}
          </motion.span>
        )}
      </motion.div>
    </SliderPrimitive.Root>
  );
};

const decay = (value: number, max: number) => {
  if (max === 0) return 0;

  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
};

registerFormControl(Slider);

export { Slider, type SliderEffect, type SliderProps };
