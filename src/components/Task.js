import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  const { task } = props;
  console.log(task);
  return (
    <>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Task;
