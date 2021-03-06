import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Form from './Form';

test('form renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});

test('form renders title label', () => {
  render(<Form />);
  const titleLabel = screen.getByText(/Title:/i);
  expect(titleLabel).toBeInTheDocument();
});

test('form renders title input', () => {
  render(<Form />);
  const titleField = screen.getByPlaceholderText(/Add a title.../i);
  expect(titleField).toBeInTheDocument();
});

test('form renders note label', () => {
  render(<Form />);
  const noteLabel = screen.getByText(/Note:/i);
  expect(noteLabel).toBeInTheDocument();
});

test('form renders note input', () => {
  render(<Form />);
  const noteField = screen.getByPlaceholderText(/Add a note.../i);
  expect(noteField).toBeInTheDocument();
});

test('form renders submit button', () => {
  render(<Form />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
