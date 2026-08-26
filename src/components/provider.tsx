'use client';

import { DirectionProvider as BaseDirectionProvider } from '@base-ui/react/direction-provider';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import * as React from 'react';

import { cn } from '../lib/utils';
import type { AlertProviderDefaults } from './alert';
import type { AlertDialogProviderDefaults } from './alert-dialog';
import type { AttachmentProviderDefaults } from './attachment';
import type { AvatarProviderDefaults } from './avatar';
import type { BreadcrumbProviderDefaults } from './breadcrumb';
import type { BubbleProviderDefaults } from './bubble';
import type { ButtonProviderDefaults } from './button';
import type { CardProviderDefaults } from './card';
import type { CheckboxProviderDefaults } from './checkbox';
import type { CollapsibleProviderDefaults } from './collapsible';
import type { DropdownMenuProviderDefaults } from './dropdown-menu';
import type { InputNumberProviderDefaults } from './input-number';
import type { InputOTPProviderDefaults } from './input';
import type { ItemProviderDefaults } from './item';
import type { MarkerProviderDefaults } from './marker';
import type { MenubarProviderDefaults } from './menubar';
import type { PaginationProviderDefaults } from './pagination';
import type { ProgressProviderDefaults } from './progress';
import type { ScrollAreaProviderDefaults } from './scroll-area';
import type { SliderProviderDefaults } from './slider';
import type { SpinnerProviderDefaults } from './spinner';
import type { TabsProviderDefaults } from './tabs';
import type { TagProviderDefaults } from './tag';
import type { ToggleProviderDefaults } from './toggle';
import type { TooltipProviderDefaults } from './tooltip';
import type { TypographyTextProviderDefaults } from './typography';

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
  Alert?: AlertProviderDefaults;
  AlertDialog?: AlertDialogProviderDefaults;
  Attachment?: AttachmentProviderDefaults;
  Avatar?: AvatarProviderDefaults;
  Breadcrumb?: BreadcrumbProviderDefaults;
  Bubble?: BubbleProviderDefaults;
  Button?: ButtonProviderDefaults;
  Card?: CardProviderDefaults;
  Checkbox?: CheckboxProviderDefaults;
  Collapsible?: CollapsibleProviderDefaults;
  DropdownMenu?: DropdownMenuProviderDefaults;
  Input?: {
    Number?: InputNumberProviderDefaults;
    OTP?: InputOTPProviderDefaults;
  };
  Item?: ItemProviderDefaults;
  Marker?: MarkerProviderDefaults;
  Menubar?: MenubarProviderDefaults;
  Pagination?: PaginationProviderDefaults;
  Progress?: ProgressProviderDefaults;
  ScrollArea?: ScrollAreaProviderDefaults;
  Slider?: SliderProviderDefaults;
  Spinner?: SpinnerProviderDefaults;
  Tabs?: TabsProviderDefaults;
  Tag?: TagProviderDefaults;
  Toggle?: ToggleProviderDefaults;
  Tooltip?: TooltipProviderDefaults;
  Typography?: {
    Text?: TypographyTextProviderDefaults;
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
  const tooltipDefaults = resolvedComponents.Tooltip;

  return (
    <ProviderContext.Provider value={contextValue}>
      <BaseDirectionProvider direction={resolvedDirection}>
        <TooltipPrimitive.Provider
          closeDelay={tooltipDefaults?.closeDelay ?? 100}
          delay={tooltipDefaults?.openDelay ?? 100}
          timeout={tooltipDefaults?.skipDelayDuration ?? 400}
        >
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
        </TooltipPrimitive.Provider>
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
