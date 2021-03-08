import React, { useContext } from 'react';

import { ThemeContext } from '../context/theme';
// write test for the toggle

const Header = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <h1>ToDo List</h1>
      <div />
      <label htmlFor="theme__toggle" className="header__toggle-btn">
        <input
          id="theme__toggle"
          type="checkbox"
          onClick={themeToggle}
          onKeyUp={e => (e.key === 'Enter' ? themeToggle() : null)}
          defaultChecked={theme === 'dark'}
        />
        <span className="header__toggle-btn__slider" />
      </label>
    </header>
  );
};

export default Header;
