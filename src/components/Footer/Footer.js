import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import TasksFilter from '../TasksFilter/TasksFilter';

export default class Footer extends React.Component {
  render() {
    const { todoCount, cleareCompleted, changeFilter, filter } = this.props;
    let itemOrItems = ' items';
    if (todoCount <= 1) {
      itemOrItems = ' item';
    }

    return (
      <footer className="footer">
        <span className="todo-count">
          {todoCount} {itemOrItems} left
        </span>
        <TasksFilter filter={filter} changeFilter={changeFilter} />
        <button className="clear-completed" onClick={cleareCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  todoCount: PropTypes.number,
  clearCompleted: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

Footer.defaultProps = {
  todoCount: 0,
  filter: 'All',
};
