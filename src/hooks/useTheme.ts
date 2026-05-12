import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const KEY = 'kr-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Theme | null) ?? 'dark';
    setTheme(stored);
    document.documentElement.dataset.theme = stored;
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(KEY, next);
      document.documentElement.dataset.theme = next;
      return next;
    });
  };

  return { theme, toggle };
}
