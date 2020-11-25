import React, { useState, useContext, useEffect } from 'react';
import { darkTheme } from '../styles/theme/darkTheme';
import { lightTheme } from '../styles/theme/lightTheme';

export const ThemeContext = React.createContext({
  theme: null,
  handleThemeChange: (themeName: 'LIGHT' | 'DARK') => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeChange = (themeType: 'LIGHT' | 'DARK') => {
    localStorage.setItem('theme', themeType);
    switch (themeType) {
      case 'LIGHT':
        setTheme(lightTheme);
        break;
      case 'DARK':
        setTheme(darkTheme);
        break;
      default:
        setTheme(lightTheme);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ handleThemeChange: handleThemeChange, theme: theme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  useEffect(() => {
    const themeName = localStorage.getItem('theme') as 'DARK' | 'LIGHT';
    if (themeName !== null) {
      context.handleThemeChange(themeName);
    }
  }, [context]);

  return context;
};
