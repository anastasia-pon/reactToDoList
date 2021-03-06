import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

test('footer renders copyright', () => {
  render(<Footer />);
  const h2 = screen.getByText(/© 2021/i);
  expect(h2).toBeInTheDocument();
});
