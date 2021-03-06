import React, { useContext } from 'react';

import { ThemeContext } from '../context/theme';

const Header = () => {
  const { theme, themeToggle } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <h1>ToDo List</h1>
      <label htmlFor="theme__toggle" className="header__toggle-btn">
        <input
          id="theme__toggle"
          type="checkbox"
          onChange={themeToggle}
          onKeyUp={e => (e.key === 'Enter' ? themeToggle() : null)}
          checked={theme === 'dark'}
        />
        <span className="header__toggle-btn__slider" />
      </label>
    </header>
  );
};

export default Header;
