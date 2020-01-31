import React, { createContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { baseTheme, variants, dark, light } from '../theme';

const ThemeCtx = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState({ ...baseTheme, ...variants, ...dark });

  function toggleTheme() {
    setIsDark((dark) => !dark);
  }

  React.useEffect(() => {
    isDark
      ? setTheme({ ...baseTheme, ...variants, ...light })
      : setTheme({ ...baseTheme, ...variants, ...dark });
  }, [isDark]);
  console.info('THEME', theme);
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeCtx.Provider value={{ isDark, toggleTheme }}>{children}</ThemeCtx.Provider>
    </EmotionThemeProvider>
  );
}

export { ThemeCtx, ThemeProvider };
