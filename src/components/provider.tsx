'use client';

import { DirectionProvider as BaseDirectionProvider } from '@base-ui/react/direction-provider';
import * as React from 'react';

import { cn } from '../lib/utils';
import type { AlertProps } from './alert';
import type { AlertDialogProps } from './alert-dialog';
import type { AttachmentProps } from './attachment';
import type { AvatarProps } from './avatar';
import type { BreadcrumbProps } from './breadcrumb';
import type { BubbleProps } from './bubble';
import type { ButtonProps } from './button';
import type { CardProps } from './card';
import type { CheckboxProps } from './checkbox';
import type { CollapsibleProps } from './collapsible';
import type { DropdownMenuProps } from './dropdown-menu';
import type { InputNumberProps } from './input-number';
import type { InputOTPProps } from './input';
import type { ItemProps } from './item';
import type { MarkerProps } from './marker';
import type { MenubarProps } from './menubar';
import type { PaginationProps } from './pagination';
import type { ProgressProps } from './progress';
import type { ScrollAreaProps } from './scroll-area';
import type { SliderProps } from './slider';
import type { SpinnerProps } from './spinner';
import type { TabsProps } from './tabs';
import type { TagProps } from './tag';
import type { ToggleProps } from './toggle';
import type { TypographyTextProps } from './typography';

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
  Alert?: Pick<AlertProps, 'variant'>;
  AlertDialog?: Pick<AlertDialogProps, 'size'>;
  Attachment?: Pick<AttachmentProps, 'size'>;
  Avatar?: Pick<AvatarProps, 'shape' | 'size'>;
  Breadcrumb?: Pick<BreadcrumbProps, 'size' | 'variant'>;
  Bubble?: Pick<BubbleProps, 'variant'>;
  Button?: Pick<ButtonProps, 'block' | 'size' | 'variant'>;
  Card?: Pick<CardProps, 'variant'>;
  Checkbox?: Pick<CheckboxProps, 'variant'>;
  Collapsible?: Pick<
    NonNullable<CollapsibleProps['triggerProps']>,
    'size' | 'variant'
  >;
  DropdownMenu?: Pick<DropdownMenuProps, 'size'>;
  Input?: {
    Number?: Pick<InputNumberProps, 'size'>;
    OTP?: Pick<InputOTPProps, 'variant'>;
  };
  Item?: Pick<ItemProps, 'size' | 'variant'>;
  Marker?: Pick<MarkerProps, 'variant'>;
  Menubar?: Pick<MenubarProps, 'size'>;
  Pagination?: Pick<PaginationProps, 'size'>;
  Progress?: Pick<ProgressProps, 'effect'>;
  ScrollArea?: Pick<ScrollAreaProps, 'scrollbar'>;
  Slider?: Pick<SliderProps<number>, 'effect'>;
  Spinner?: Pick<SpinnerProps, 'size'>;
  Tabs?: Pick<TabsProps, 'animation' | 'centered' | 'variant'>;
  Tag?: Pick<TagProps, 'type'>;
  Toggle?: Pick<ToggleProps, 'variant'>;
  Typography?: {
    Text?: Pick<TypographyTextProps, 'size' | 'tone' | 'weight'>;
  };
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
): ProviderComponents => {
  const merged: Record<string, object> = { ...parent };

  for (const [name, defaults] of Object.entries(components ?? {})) {
    const parentDefaults = merged[name] ?? {};
    merged[name] = { ...parentDefaults, ...defaults };

    if (name === 'ScrollArea') {
      type ScrollAreaDefaults = NonNullable<ProviderComponents['ScrollArea']>;
      const parentScrollbar = (parentDefaults as ScrollAreaDefaults).scrollbar;
      const scrollbar = (defaults as ScrollAreaDefaults).scrollbar;
      (merged[name] as ScrollAreaDefaults).scrollbar = {
        ...parentScrollbar,
        ...scrollbar,
      };
    }

    if (name === 'Input') {
      type InputDefaults = NonNullable<ProviderComponents['Input']>;
      const parentNumber = (parentDefaults as InputDefaults).Number;
      const number = (defaults as InputDefaults).Number;
      const parentOTP = (parentDefaults as InputDefaults).OTP;
      const otp = (defaults as InputDefaults).OTP;
      (merged[name] as InputDefaults).Number = {
        ...parentNumber,
        ...number,
      };
      (merged[name] as InputDefaults).OTP = {
        ...parentOTP,
        ...otp,
      };
    }

    if (name === 'Typography') {
      type TypographyDefaults = NonNullable<ProviderComponents['Typography']>;
      const parentText = (parentDefaults as TypographyDefaults).Text;
      const text = (defaults as TypographyDefaults).Text;
      (merged[name] as TypographyDefaults).Text = {
        ...parentText,
        ...text,
      };
    }
  }

  return merged as ProviderComponents;
};

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
