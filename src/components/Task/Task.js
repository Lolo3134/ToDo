import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      value: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      editItem,
      todo: { id },
    } = this.props;
    editItem(id, this.state.value);
    this.setState({ value: '' });
    this.setState({ editing: false });
  }

  render() {
    const { changeCheck, todo, deleteItem } = this.props;
    const { label, id, checked, date } = todo;
    return (
      <li className={checked ? 'completed' : this.state.editing ? 'editing' : null}>
        <div className="view">
          <input
            id={id}
            className="toggle"
            type="checkbox"
            onChange={(event) => changeCheck(id, event.target.checked)}
            checked={checked}
          />
          <label htmlFor={id}>
            <span className="description">{label}</span>
            <span className="created">
              {`created ${formatDistanceToNow(date, {
                includeSeconds: true,
                addSuffix: true,
              })}`}
            </span>
          </label>
          <button
            type="button"
            onClick={() => this.setState(({ editing }) => ({ editing: !editing, value: this.props.todo.label }))}
            className="icon icon-edit"
          />
          <button type="button" onClick={() => deleteItem(id)} className="icon icon-destroy" />
        </div>
        {this.state.editing && (
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              onChange={(event) => this.setState({ value: event.target.value })}
              type="text"
              className="edit"
              value={this.state.value}
            />
          </form>
        )}
      </li>
    );
  }
}

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    checked: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }),
  deleteItem: PropTypes.func.isRequired,
  changeCheck: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

Task.defaultProps = {
  todo: {},
};
