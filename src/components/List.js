import React from 'react';
import Task from './Task';

const List = () => {
  const task = {
    id: new Date().getTime().toString(),
    title: 'Water plants',
    note: 'Aloe, Bamboo, Christmas Tree',
    done: false,
  };

  return (
    <>
      <input type="button" className="form__button" value="Clear All" />
      <ul><Task task={task} /></ul>
    </>
  );
};

export default List;
