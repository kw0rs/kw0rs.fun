import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeProviderContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState(() => {
    try {
      const storedTheme = localStorage.getItem(storageKey);
      if (storedTheme) {
        return storedTheme;
      }
      return defaultTheme;
    } catch (e) {
      // If localStorage is not available
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme: string) => {
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (e) {
      // If localStorage is not available
    }
    setThemeState(newTheme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

