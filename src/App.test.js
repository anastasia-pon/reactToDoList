import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from './context/theme';
import App from './App';
import Form from './components/Form';
import List from './components/List';

const Test = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Buy groceries',
      note: '1kg tomatoes, potatoes, orange juice, iceberg sallad',
      done: false,
    },
    {
      id: 2,
      title: 'Water plants',
      note: 'Aloe, Bamboo, Christmas Tree',
      done: false,
    },
  ]);
  return (
    <ThemeProvider>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </ThemeProvider>
  );
};

test('app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, div);
});

test('app renders instruction', () => {
  render(<ThemeProvider><App /></ThemeProvider>);
  const h2 = screen.getByText(/Register New ToDo/i);
  expect(h2).toBeInTheDocument();
});

test('form updates the list of tasks', () => {
  render(<Test />);
  const titleField = screen.getByPlaceholderText(/Add a title.../i);
  titleField.value = 'Draw butterflies';
  const form = titleField.parentNode;
  const noteField = screen.getByPlaceholderText(/Add a note.../i);
  noteField.value = 'Yellow, white, blue';
  ReactTestUtils.Simulate.submit(form);

  const clearButton = screen.getByText('Clear All');
  const listLength = clearButton.parentNode.children.length;
  expect(listLength).toBe(4);
});

test('form creates a task with a unique id', () => {
  render(<Test />);
  const titleField = screen.getByPlaceholderText(/Add a title.../i);
  const form = titleField.parentNode;
  titleField.value = 'Draw butterflies';
  const noteField = screen.getByPlaceholderText(/Add a note.../i);
  noteField.value = 'Yellow, white, blue';
  ReactTestUtils.Simulate.submit(form);

  titleField.value = 'Draw elephants';
  noteField.value = 'Orange, grey, white';
  ReactTestUtils.Simulate.submit(form);

  const button = screen.getByText('Clear All');
  const task4 = button.parentNode.lastChild;
  const task3 = task4.previousElementSibling;
  const comparison = task3.id === task4.id;
  expect(comparison).toBe(false);
});

test('a remove button deletes the task from the list', () => {
  render(<Test />);
  const card = screen.getByText(/Water plants/i).parentNode;
  const list = card.parentNode;
  expect(card).toBeInTheDocument();
  ReactTestUtils.Simulate.click(card);

  const removeButton = card.querySelector('.card__button');
  ReactTestUtils.Simulate.click(removeButton);
  expect(list.children.length).toBe(2);
});
