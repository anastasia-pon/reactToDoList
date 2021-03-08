import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '../context/theme';
import Header from './Header';

test('header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeProvider><Header /></ThemeProvider>, div);
});

test('header renders h1', () => {
  render(<ThemeProvider><Header /></ThemeProvider>);
  const h1 = screen.getByText(/ToDo List/i);
  expect(h1).toBeInTheDocument();
});
