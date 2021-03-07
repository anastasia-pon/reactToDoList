import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Form from './Form';

const Test = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Buy groceries',
      note: '1kg tomatoes, potatoes, orange juice, iceberg sallad',
      done: true,
    },
    {
      id: 2,
      title: 'Water plants',
      note: 'Aloe, Bamboo, Christmas Tree',
      done: false,
    },
  ]);
  return (
    <Form tasks={tasks} setTasks={setTasks} />
  );
};

test('form renders without crashing', () => {
  const tasks = [{
    id: 1,
    title: 'Buy groceries',
    note: '1kg tomatoes, potatoes, orange juice, iceberg sallad',
    done: true,
  }];
  const div = document.createElement('div');
  ReactDOM.render(<Form tasks={tasks} setTasks={e => e} />, div);
});

test('form renders title label', () => {
  render(<Test />);
  const titleLabel = screen.getByText(/Title:/i);
  expect(titleLabel).toBeInTheDocument();
});

test('form renders title input', () => {
  render(<Test />);
  const titleField = screen.getByPlaceholderText(/Add a title.../i);
  expect(titleField).toBeInTheDocument();
});

test('form renders note label', () => {
  render(<Test />);
  const noteLabel = screen.getByText(/Note:/i);
  expect(noteLabel).toBeInTheDocument();
});

test('form renders note input', () => {
  render(<Test />);
  const noteField = screen.getByPlaceholderText(/Add a note.../i);
  expect(noteField).toBeInTheDocument();
});

test('form renders submit button', () => {
  render(<Test />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
