import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Task from './Task';

const task = {
  id: new Date().getTime().toString(),
  title: 'Buy groceries',
  note: '1kg tomatoes, potatoes, orange juice, iceberg sallad',
  done: false,
};

test('task renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task task={task} />, div);
});

test('task renders title', () => {
  render(<Task task={task} />);
  const title = screen.getByText(/Buy groceries/i);
  expect(title).toBeInTheDocument();
});

test('task renders note', () => {
  render(<Task task={task} />);
  const note = screen.getByText(/1kg tomatoes, potatoes, orange juice, iceberg sallad/i);
  expect(note).toBeInTheDocument();
});
