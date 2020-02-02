import React, { createContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { baseTheme, variants, dark, light } from '../theme';

const ThemeCtx = createContext();

const LS_KEY = 'swapi-hooked-dark-theme';

function getFromLs(key) {
  const dark = JSON.parse(localStorage.getItem(key));
  return dark || false;
}

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => getFromLs(LS_KEY));
  const [theme, setTheme] = useState({ ...baseTheme, ...variants, ...dark });

  function toggleTheme() {
    setIsDark((dark) => !dark);
    localStorage.setItem(LS_KEY, JSON.stringify(!isDark));
    getFromLs(LS_KEY);
  }

  React.useEffect(() => {
    isDark
      ? setTheme({ ...baseTheme, ...variants, ...light })
      : setTheme({ ...baseTheme, ...variants, ...dark });
  }, [isDark]);
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeCtx.Provider value={{ isDark, toggleTheme }}>{children}</ThemeCtx.Provider>
    </EmotionThemeProvider>
  );
}

export { ThemeCtx, ThemeProvider };
