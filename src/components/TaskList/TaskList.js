import React from 'react';
import PropTypes from 'prop-types';

import './TaskList.css';
import Task from '../Task/Task';

export default class TaskList extends React.Component {


  render() {
    const { todos, changeCheck, editItem, deletedItem } = this.props

    const el = todos.map((item) => {
      return <Task todo={item} key={item.id} deleteItem={deletedItem} changeCheck={changeCheck} editItem={editItem} />;
    });

    return <ul className="todo-list">{el}</ul>;
  }
}

TaskList.defaultProps = {
  todos: {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  changeCheck: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
