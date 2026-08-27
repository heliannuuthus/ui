import { useCallback, useLayoutEffect, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';
type ThemePreference = Theme | 'system';

const themeStorageKey = 'heliannuuthus-ui-theme';
const themePreferenceEvent = 'heliannuuthus-ui-theme-change';

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === 'dark' || value === 'light' || value === 'system';

const readThemePreference = (): ThemePreference => {
  if (typeof window === 'undefined') return 'light';

  try {
    const stored = window.localStorage.getItem(themeStorageKey);
    return isThemePreference(stored) ? stored : 'light';
  } catch {
    return 'light';
  }
};

const resolveSystemTheme = (): Theme =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const applyTheme = (theme: Theme) => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
};

const subscribeToSystemTheme = (onChange: () => void) => {
  if (typeof window === 'undefined') return () => undefined;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', onChange);
  return () => mediaQuery.removeEventListener('change', onChange);
};

const subscribeToThemePreference = (onChange: () => void) => {
  if (typeof window === 'undefined') return () => undefined;

  const handleStorage = (event: StorageEvent) => {
    if (event.key === themeStorageKey) onChange();
  };
  window.addEventListener('storage', handleStorage);
  window.addEventListener(themePreferenceEvent, onChange);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(themePreferenceEvent, onChange);
  };
};

export const useThemeState = () => {
  const preference = useSyncExternalStore<ThemePreference>(
    subscribeToThemePreference,
    readThemePreference,
    () => 'light'
  );
  const systemTheme = useSyncExternalStore<Theme>(
    subscribeToSystemTheme,
    resolveSystemTheme,
    () => 'light'
  );
  const resolvedTheme = preference === 'system' ? systemTheme : preference;

  const setTheme = useCallback((nextPreference: ThemePreference) => {
    try {
      window.localStorage.setItem(themeStorageKey, nextPreference);
    } catch {
      // Storage availability must not block an in-session theme change.
    }
    window.dispatchEvent(new Event(themePreferenceEvent));
  }, []);

  useLayoutEffect(() => applyTheme(resolvedTheme), [resolvedTheme]);

  return [preference, setTheme, resolvedTheme] as const;
};

export { isThemePreference, themeStorageKey, type ThemePreference };
