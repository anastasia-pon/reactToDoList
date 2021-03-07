import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';

import List from './List';

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
    <List tasks={tasks} setTasks={setTasks} />
  );
};

test('list renders without crashing', () => {
  const tasks = [{
    id: 1,
    title: 'Buy groceries',
    note: '1kg tomatoes, potatoes, orange juice, iceberg sallad',
    done: true,
  }];
  const div = document.createElement('div');
  ReactDOM.render(<List tasks={tasks} setTasks={e => e} />, div);
});

test('list renders Clear List button', () => {
  render(<Test />);
  const button = screen.getByText('Clear All');
  expect(button).toBeInTheDocument();
});

test('list renders list', () => {
  render(<Test />);
  const button = screen.getByText('Clear All');
  const list = button.nextElementSibling.classList.contains('list');
  expect(list).toBe(true);
});

test('list renders two tasks', () => {
  render(<Test />);
  const task1 = screen.getByText('Buy groceries');
  expect(task1).toBeInTheDocument();

  const task2 = screen.getByText('Water plants');
  expect(task2).toBeInTheDocument();
});

test('list renders only a message if no tasks are supplied', () => {
  render(<List tasks={[]} setTasks={test => test} />);
  const message = screen.queryByText('There are no ToDos');
  expect(message).toBeInTheDocument();

  const button = screen.queryByText('Clear All');
  expect(button).toBeNull();
});

test('task renders as done if done', () => {
  render(<Test />);
  const card = screen.getByText(/Buy groceries/i);
  const cardClass = card.parentNode.classList.contains('status--done');
  expect(cardClass).toBe(true);
});

test('Done toggle works on a task ', () => {
  render(<Test />);
  const card = screen.getByText(/Water plants/i).parentNode;
  ReactTestUtils.Simulate.click(card);
  const cardClassOneClick = card.classList.contains('status--done');
  expect(cardClassOneClick).toBe(true);

  ReactTestUtils.Simulate.click(card);
  const cardClassTwoClicks = card.classList.contains('status--done');
  expect(cardClassTwoClicks).toBe(false);
});

test('clicking on a task mutates only one item from the tasks array', () => {
  render(<Test />);
  const task1 = screen.getByText(/Buy groceries/i).parentNode;
  ReactTestUtils.Simulate.click(task1);
  const task1Class = task1.classList.contains('status--done');
  expect(task1Class).toBe(false);

  const task2 = screen.getByText(/Water plants/i).parentNode;
  const task2Class = task2.classList.contains('status--done');
  expect(task2Class).toBe(false);
});
