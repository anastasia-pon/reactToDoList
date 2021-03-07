import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Task from './Task';

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

  return tasks.map(task => (
    <Task
      task={task}
      onToggle={e => e}
      onRemove={e => e}
      tabIndex={-1}
      key={task.id}
    />
  ));
};

test('task renders without crashing', () => {
  const task = {
    id: 1,
    title: 'Buy groceries',
    note: '1kg tomatoes, potatoes, orange juice, iceberg sallad',
    done: true,
  };
  const div = document.createElement('div');
  ReactDOM.render(<Task task={task} onToggle={e => e} onRemove={e => e} tabIndex={-1} />, div);
});

test('task renders title', () => {
  render(<Test />);
  const title = screen.getByText(/Buy groceries/i);
  expect(title).toBeInTheDocument();
});

test('task renders note', () => {
  render(<Test />);
  const note = screen.getByText(/1kg tomatoes, potatoes, orange juice, iceberg sallad/i);
  expect(note).toBeInTheDocument();
});

test('task renders as not done if not done', () => {
  render(<Test />);
  const card = screen.getByText(/Water plants/i);
  const cardClass = card.parentNode.classList.contains('status--done');
  expect(cardClass).toBe(false);
});

test('done task renders a remove button', () => {
  render(<Test />);
  const card = screen.getByText(/Buy groceries/i).parentNode;
  const removeButton = card.querySelector('.card__button');
  expect(removeButton).toBeInTheDocument();
});

// test('not done task does not display its remove button', () => {
//   render(<Test />);
//   const card = screen.getByText(/Buy groceries/i).parentNode;
//   const removeButton = card.querySelector('.card__button');
//   expect(removeButton).toBeInTheDocument();
// });
