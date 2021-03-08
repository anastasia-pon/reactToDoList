import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '../context/theme';
import Footer from './Footer';

test('footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeProvider><Footer /></ThemeProvider>, div);
});

test('footer renders copyright', () => {
  render(<ThemeProvider><Footer /></ThemeProvider>);
  const h2 = screen.getByText(/© 2021/i);
  expect(h2).toBeInTheDocument();
});
