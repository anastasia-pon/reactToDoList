import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  if (!props) {
    return null;
  }

  const { task, onToggle, onRemove } = props;

  const classes = task.done ? 'card status--done' : 'card';

  return (
    <div
      className={classes}
      id={task.id}
      role="button"
      tabIndex={0}
      onClick={() => onToggle(task.id)}
      onKeyUp={e => (e.key === 'Enter' ? onToggle(task.id) : null)}
    >
      {task.done ? <i className="card__checkbox far fa-check-square" /> : <i className="card__checkbox far fa-square" />}
      <p className="card__title">{task.title}</p>
      {task.note ? <p className="card__note">{task.note}</p> : null}
      {task.done
        ? (
          <button
            type="button"
            className="card__button"
            tabIndex={0}
            onClick={e => onRemove(e, task.id)}
            onKeyUp={e => (e.key === 'Enter' ? onRemove(e, task.id) : null)}
          >
            Remove
          </button>
        )
        : null}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Task;
