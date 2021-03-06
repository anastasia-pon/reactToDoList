import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

test('header renders h1', () => {
  render(<Header />);
  const h1 = screen.getByText(/ToDo List/i);
  expect(h1).toBeInTheDocument();
});

// test('header renders toggle', () => {
//   render(<Header />);
//   const h1 = screen.querySelector('.toggle');
//   expect(h1).toBeInTheDocument();
// });
