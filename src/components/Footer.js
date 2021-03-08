import React, { useContext } from 'react';

import { ThemeContext } from '../context/theme';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer ${theme}`}>
      <p>© 2021</p>
    </footer>
  );
};

export default Footer;
