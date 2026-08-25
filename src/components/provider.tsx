'use client';

import { DirectionProvider as BaseDirectionProvider } from '@base-ui/react/direction-provider';
import * as React from 'react';

import { cn } from '../lib/utils';
import type { AvatarProps } from './avatar';
import type { ButtonProps } from './button';
import type { CardProps } from './card';

type TextDirection = 'ltr' | 'rtl';
type ProviderAppearance = 'dark' | 'light' | 'system';
type ResolvedProviderAppearance = Exclude<ProviderAppearance, 'system'>;

type ProviderThemeColors = Partial<{
  accent: string;
  accentForeground: string;
  background: string;
  border: string;
  card: string;
  cardForeground: string;
  destructive: string;
  foreground: string;
  info: string;
  input: string;
  muted: string;
  mutedForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  ring: string;
  secondary: string;
  secondaryForeground: string;
  success: string;
  warning: string;
}>;

type ProviderTheme = {
  colors?: ProviderThemeColors;
  darkColors?: ProviderThemeColors;
  radius?: string;
};

type ProviderComponents = {
  Avatar?: Pick<AvatarProps, 'shape' | 'size'>;
  Button?: Pick<ButtonProps, 'block' | 'size' | 'variant'>;
  Card?: Pick<CardProps, 'variant'>;
};

type ProviderProps = Omit<React.ComponentProps<'div'>, 'dir'> & {
  appearance?: ProviderAppearance;
  components?: ProviderComponents;
  direction?: TextDirection;
  theme?: ProviderTheme;
};

type ProviderValue = {
  appearance: ProviderAppearance;
  components: ProviderComponents;
  direction: TextDirection;
  resolvedAppearance: ResolvedProviderAppearance;
  theme: ProviderTheme;
};

const defaultProviderValue: ProviderValue = {
  appearance: 'system',
  components: {},
  direction: 'ltr',
  resolvedAppearance: 'light',
  theme: {},
};

const ProviderContext =
  React.createContext<ProviderValue>(defaultProviderValue);

const subscribeToSystemAppearance = (onChange: () => void) => {
  if (typeof window === 'undefined') return () => undefined;

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};

const getSystemAppearance = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const useSystemAppearance = (): ResolvedProviderAppearance => {
  const isDark = React.useSyncExternalStore(
    subscribeToSystemAppearance,
    getSystemAppearance,
    () => false
  );

  return isDark ? 'dark' : 'light';
};

const mergeTheme = (
  parent: ProviderTheme | undefined,
  theme: ProviderTheme | undefined
): ProviderTheme => ({
  colors: { ...parent?.colors, ...theme?.colors },
  darkColors: { ...parent?.darkColors, ...theme?.darkColors },
  radius: theme?.radius ?? parent?.radius,
});

const mergeComponents = (
  parent: ProviderComponents | undefined,
  components: ProviderComponents | undefined
): ProviderComponents => ({
  Avatar: { ...parent?.Avatar, ...components?.Avatar },
  Button: { ...parent?.Button, ...components?.Button },
  Card: { ...parent?.Card, ...components?.Card },
});

const colorVariables = {
  accent: '--accent',
  accentForeground: '--accent-foreground',
  background: '--background',
  border: '--border',
  card: '--card',
  cardForeground: '--card-foreground',
  destructive: '--destructive',
  foreground: '--foreground',
  info: '--info',
  input: '--input',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  popover: '--popover',
  popoverForeground: '--popover-foreground',
  primary: '--primary',
  primaryForeground: '--primary-foreground',
  ring: '--ring',
  secondary: '--secondary',
  secondaryForeground: '--secondary-foreground',
  success: '--success',
  warning: '--warning',
} as const satisfies Record<keyof Required<ProviderThemeColors>, `--${string}`>;

const getThemeStyle = (
  theme: ProviderTheme,
  appearance: ResolvedProviderAppearance
): React.CSSProperties => {
  const colors = {
    ...theme.colors,
    ...(appearance === 'dark' ? theme.darkColors : undefined),
  };
  const variables = Object.entries(colors).reduce<Record<string, string>>(
    (style, [name, value]) => {
      if (value != null) {
        style[colorVariables[name as keyof ProviderThemeColors]] = value;
      }
      return style;
    },
    {}
  );

  if (theme.radius != null) variables['--radius'] = theme.radius;
  return variables as React.CSSProperties;
};

const useProvider = (): ProviderValue => {
  return React.useContext(ProviderContext);
};

const useComponentDefaults = <Name extends keyof ProviderComponents>(
  name: Name
): NonNullable<ProviderComponents[Name]> => {
  return (useProvider().components[name] ?? {}) as NonNullable<
    ProviderComponents[Name]
  >;
};

const Provider = ({
  appearance,
  children,
  className,
  components,
  direction,
  style,
  theme,
  ...props
}: ProviderProps) => {
  const parent = useProvider();
  const systemAppearance = useSystemAppearance();
  const resolvedDirection = direction ?? parent.direction;
  const resolvedAppearanceSetting = appearance ?? parent.appearance;
  const resolvedAppearance =
    resolvedAppearanceSetting === 'system'
      ? systemAppearance
      : resolvedAppearanceSetting;
  const resolvedTheme = React.useMemo(
    () => mergeTheme(parent.theme, theme),
    [parent.theme, theme]
  );
  const resolvedComponents = React.useMemo(
    () => mergeComponents(parent.components, components),
    [components, parent.components]
  );
  const contextValue = React.useMemo<ProviderValue>(
    () => ({
      appearance: resolvedAppearanceSetting,
      components: resolvedComponents,
      direction: resolvedDirection,
      resolvedAppearance,
      theme: resolvedTheme,
    }),
    [
      resolvedAppearance,
      resolvedAppearanceSetting,
      resolvedComponents,
      resolvedDirection,
      resolvedTheme,
    ]
  );

  return (
    <ProviderContext.Provider value={contextValue}>
      <BaseDirectionProvider direction={resolvedDirection}>
        <div
          {...props}
          className={cn(resolvedAppearance === 'dark' && 'dark', className)}
          data-appearance={resolvedAppearance}
          data-slot="provider"
          dir={resolvedDirection}
          style={{
            ...getThemeStyle(resolvedTheme, resolvedAppearance),
            colorScheme: resolvedAppearance,
            ...style,
          }}
        >
          {children}
        </div>
      </BaseDirectionProvider>
    </ProviderContext.Provider>
  );
};

export {
  Provider,
  useComponentDefaults,
  useProvider,
  type ProviderAppearance,
  type ProviderComponents,
  type ProviderProps,
  type ProviderTheme,
  type ProviderThemeColors,
  type ProviderValue,
  type ResolvedProviderAppearance,
  type TextDirection,
};
