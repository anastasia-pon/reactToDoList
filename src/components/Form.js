import React from 'react';

const Form = () => (
  <form className="form">
    <label htmlFor="title" className="form__label">
      Title:
      <input type="text" className="form__input" id="title" name="title" placeholder="Add a title..." required />
    </label>
    <label htmlFor="note" className="form__label">
      Note:
      <textarea className="form__input" id="note" name="description" placeholder="Add a note..." rows="3" />
    </label>
    <input type="submit" className="form__button" value="Add ToDo" />
  </form>
);

export default Form;
