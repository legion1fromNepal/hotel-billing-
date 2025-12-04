// theme-context.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';

type Theme = 'light' | 'dark'; // 'white' as a possible label for light mode in the UI, but internally it's 'light'

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// FIX: Ensure a default value that matches the context type.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Attempt to read from localStorage, default to 'light'
    const savedTheme = localStorage.getItem('theme');
    // Ensure that only 'dark' or 'light' are valid themes, default to 'light'
    return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme as Theme : 'light';
  });

  useEffect(() => {
    // Directly set the data-theme attribute on the html element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};