import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('app renders instruction', () => {
  render(<App />);
  const h2 = screen.getByText(/Register New ToDo/i);
  expect(h2).toBeInTheDocument();
});
