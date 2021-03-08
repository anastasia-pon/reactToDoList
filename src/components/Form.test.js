import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '../context/theme';
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
    <ThemeProvider><Form tasks={tasks} setTasks={setTasks} /></ThemeProvider>
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
  ReactDOM.render(<ThemeProvider><Form tasks={tasks} setTasks={e => e} /></ThemeProvider>, div);
});

test('form renders title input', () => {
  render(<Test />);
  const titleField = screen.getByPlaceholderText(/Add a title.../i);
  expect(titleField).toBeInTheDocument();
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
