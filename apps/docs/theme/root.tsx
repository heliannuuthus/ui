import type { ReactNode } from 'react';

import { themeStorageKey } from './theme-state';

const initialThemeScript = `(() => {
  try {
    const stored = localStorage.getItem('${themeStorageKey}');
    const preference = stored === 'dark' || stored === 'light' || stored === 'system' ? stored : 'light';
    const dark = preference === 'dark' || (preference === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }
})();`;

export const Root = ({ children }: { children: ReactNode }) => (
  <>
    <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
    {children}
  </>
);
