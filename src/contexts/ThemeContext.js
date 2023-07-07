import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.theme = newTheme;
      return newTheme;
    });
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const selectedTheme = localStorage.theme || (prefersDarkMode ? 'dark' : 'light');

    setTheme(selectedTheme);

    document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
    localStorage.theme = selectedTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
