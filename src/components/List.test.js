import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import List from './List';

test('list renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
});

test('list renders ul', () => {
  render(<List />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

test('list renders Clear List button', () => {
  render(<List />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
