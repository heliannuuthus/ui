'use client';

import * as React from 'react';
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
  type SpringOptions,
} from 'motion/react';

import { cn } from '../lib/utils';

type CounterPlace = number | '.';

type CounterClassNames = {
  digit?: string;
  visual?: string;
};

type CounterStyles = {
  digit?: React.CSSProperties;
  visual?: React.CSSProperties;
};

type CounterProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  classNames?: CounterClassNames;
  fontSize?: number;
  fontWeight?: React.CSSProperties['fontWeight'];
  gap?: number;
  places?: readonly CounterPlace[];
  prefix?: React.ReactNode;
  springOptions?: SpringOptions;
  styles?: CounterStyles;
  suffix?: React.ReactNode;
  value: number;
  valueText?: string;
};

type CounterNumberProps = {
  height: number;
  motionValue: MotionValue<number>;
  number: number;
};

const defaultSpringOptions: SpringOptions = {
  stiffness: 120,
  damping: 18,
  mass: 0.7,
};

const CounterNumber = ({ height, motionValue, number }: CounterNumberProps) => {
  const y = useTransform(motionValue, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let position = offset * height;

    if (offset > 5) position -= 10 * height;

    return position;
  });

  return (
    <motion.span
      data-slot="counter-number"
      className="absolute inset-0 flex items-center justify-center"
      style={{ y }}
    >
      {number}
    </motion.span>
  );
};

const RollingDigit = ({
  className,
  digitStyle,
  height,
  place,
  springOptions,
  value,
}: {
  className?: string;
  digitStyle?: React.CSSProperties;
  height: number;
  place: number;
  springOptions: SpringOptions;
  value: number;
}) => {
  const roundedValue = getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(roundedValue, springOptions);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (reduceMotion) animatedValue.jump(roundedValue);
    else animatedValue.set(roundedValue);
  }, [animatedValue, reduceMotion, roundedValue]);

  return (
    <span
      data-slot="counter-digit"
      className={cn(
        'relative w-[1ch] shrink-0 overflow-hidden text-center tabular-nums',
        className
      )}
      style={{ height, ...digitStyle }}
    >
      {Array.from({ length: 10 }, (_, number) => (
        <CounterNumber
          height={height}
          key={number}
          motionValue={animatedValue}
          number={number}
        />
      ))}
    </span>
  );
};

const Counter = ({
  'aria-live': ariaLive = 'off',
  className,
  classNames,
  fontSize = 64,
  fontWeight = 700,
  gap = 4,
  places,
  prefix,
  springOptions = defaultSpringOptions,
  style,
  styles,
  suffix,
  value,
  valueText,
  ...props
}: CounterProps) => {
  const finiteValue = Number.isFinite(value);
  const absoluteValue = Math.abs(value);
  const resolvedPlaces = (places ?? getAutomaticPlaces(absoluteValue)).filter(
    (place) => place === '.' || (Number.isFinite(place) && place > 0)
  );
  const height = fontSize;
  const accessibleValue = valueText ?? String(value);
  const fadeSize = Math.min(12, height / 2);
  const maskImage = `linear-gradient(to bottom, transparent 0, black ${fadeSize}px, black calc(100% - ${fadeSize}px), transparent 100%)`;

  return (
    <span
      data-slot="counter"
      className={cn('relative inline-flex max-w-full align-middle', className)}
      style={style}
      {...props}
    >
      <span className="sr-only" aria-live={ariaLive}>
        {accessibleValue}
      </span>
      <span
        data-slot="counter-visual"
        aria-hidden="true"
        className={cn(
          'relative flex max-w-full items-center overflow-hidden font-heading leading-none tabular-nums select-none',
          classNames?.visual
        )}
        style={{
          borderRadius: 8,
          color: 'inherit',
          direction: 'ltr',
          fontSize,
          fontWeight,
          gap,
          paddingInline: 8,
          WebkitMaskImage: maskImage,
          maskImage,
          ...styles?.visual,
        }}
      >
        {prefix != null && (
          <span
            data-slot="counter-prefix"
            className="flex shrink-0 items-center"
          >
            {prefix}
          </span>
        )}
        {value < 0 && finiteValue && (
          <span data-slot="counter-sign" className="flex shrink-0 items-center">
            −
          </span>
        )}
        {finiteValue ? (
          resolvedPlaces.map((place, index) =>
            place === '.' ? (
              <span
                data-slot="counter-separator"
                className={cn(
                  'flex w-[0.42em] shrink-0 items-center justify-center',
                  classNames?.digit
                )}
                key={`separator-${index}`}
                style={{ height, ...styles?.digit }}
              >
                .
              </span>
            ) : (
              <RollingDigit
                className={classNames?.digit}
                digitStyle={styles?.digit}
                height={height}
                key={`${place}-${index}`}
                place={place}
                springOptions={springOptions}
                value={absoluteValue}
              />
            )
          )
        ) : (
          <span data-slot="counter-fallback">{String(value)}</span>
        )}
        {suffix != null && (
          <span
            data-slot="counter-suffix"
            className="flex shrink-0 items-center"
          >
            {suffix}
          </span>
        )}
      </span>
    </span>
  );
};

const normalizeNearInteger = (value: number) => {
  const nearest = Math.round(value);
  const tolerance = 1e-9 * Math.max(1, Math.abs(value));

  return Math.abs(value - nearest) < tolerance ? nearest : value;
};

const getValueRoundedToPlace = (value: number, place: number) => {
  return Math.floor(normalizeNearInteger(value / place));
};

const getAutomaticPlaces = (value: number): CounterPlace[] => {
  if (!Number.isFinite(value)) return [];

  const normalized = normalizeNearInteger(value);
  const preciseValue = Number(normalized.toPrecision(12));
  const [integerPart = '0', decimalPart] = preciseValue
    .toLocaleString('en-US', {
      maximumFractionDigits: 20,
      useGrouping: false,
    })
    .split('.');
  const integerPlaces = Array.from(
    { length: integerPart.length },
    (_, index) => 10 ** (integerPart.length - index - 1)
  );

  if (!decimalPart) return integerPlaces;

  return [
    ...integerPlaces,
    '.',
    ...Array.from(
      { length: decimalPart.length },
      (_, index) => 10 ** -(index + 1)
    ),
  ];
};

export {
  Counter,
  type CounterClassNames,
  type CounterPlace,
  type CounterProps,
  type CounterStyles,
};
