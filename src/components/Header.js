import React, { useContext } from 'react';

import { ThemeContext } from '../context/theme';
// write test for the toggle

const Header = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <h1>ToDo List</h1>
      <button
        className="header__toggle-btn"
        type="button"
        onClick={themeToggle}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};

export default Header;
