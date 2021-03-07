import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const { children } = props;

  const [theme, setTheme] = useState('light');

  const themeToggle = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));
  // setDark(!dark);
  // window.localStorage.setItem('darkTheme', !dark);

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};
