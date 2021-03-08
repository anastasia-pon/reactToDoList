import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const { children } = props;

  const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem('toDoListTheme')) || 'light');

  const themeToggle = () => {
    localStorage.setItem('toDoListTheme', JSON.stringify(theme === 'light' ? 'dark' : 'light'));
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.any,
    ),
    PropTypes.object,
  ]).isRequired,
};
