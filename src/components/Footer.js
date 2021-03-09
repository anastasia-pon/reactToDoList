import React, { useContext } from 'react';

import { ThemeContext } from '../context/theme';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer ${theme}`}>
      <p>
        © 2021
        {' '}
        <a className="footer__git" href="https://github.com/anastasia-pon/reactToDoList">
          Source
          {' '}
          <i className="fab fa-github" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
