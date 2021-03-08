import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../context/theme';

const Form = props => {
  const { theme } = useContext(ThemeContext);
  const { tasks, setTasks } = props;

  const onSubmit = e => {
    e.preventDefault();

    const task = {
      id: new Date().getTime(),
      title: e.target.querySelector('#title').value,
      note: e.target.querySelector('#note').value,
      done: false,
    };

    tasks.push(task);
    setTasks([...tasks]);

    e.target.querySelector('#title').value = '';
    e.target.querySelector('#note').value = '';
  };

  return (
    <form className={`form ${theme}`} onSubmit={e => onSubmit(e)}>
      <h2>Register New ToDos</h2>
      <input type="text" className="form__input" id="title" name="title" placeholder="Add a title..." required />
      <textarea className="form__input" id="note" name="note" placeholder="Add a note..." rows="3" />
      <input type="submit" className="form__button" value="Add ToDo" />
    </form>
  );
};

Form.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Form;
