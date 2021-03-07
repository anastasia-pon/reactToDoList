import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../context/theme';

const Form = props => {
  const { theme } = useContext(ThemeContext);

  const { tasks, setTasks } = props;

  const onSubmit = e => {
    e.preventDefault();

    // tostring all values?
    const formData = new FormData(e.target);
    const task = {
      id: new Date().getTime(),
      title: formData.get('title'),
      note: formData.get('description'),
      done: false,
    };

    tasks.push(task);
    setTasks([...tasks]);

    e.target.querySelector('#title').value = '';
    e.target.querySelector('#note').value = '';
  };

  return (
    <form className={`form ${theme}`} onSubmit={e => onSubmit(e)}>
      <label htmlFor="title" className="form__label">
        Title:
        <input type="text" className="form__input" id="title" name="title" placeholder="Add a title..." required />
      </label>
      <label htmlFor="note" className="form__label">
        Note:
        <textarea className="form__input" id="note" name="note" placeholder="Add a note..." rows="3" />
      </label>
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
