import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../context/theme';
import Task from './Task';

const List = props => {
  const { theme } = useContext(ThemeContext);

  const { tasks, setTasks } = props;

  if (!tasks[0]) {
    return null;
  }

  const onToggle = taskId => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTasks([...tasks]);
  };

  const onRemove = (e, taskId) => {
    e.stopPropagation();
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  };

  const onClear = () => {
    setTasks([]);
  };

  return (
    <div className={`list ${theme}`}>
      <input
        type="button"
        className="list__button"
        value="Clear All"
        onClick={() => onClear()}
        onKeyUp={e => (e.key === 'Enter' ? onClear() : null)}
      />
      {tasks.map(task => (
        <Task
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
          key={task.id}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      note: PropTypes.string,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default List;
