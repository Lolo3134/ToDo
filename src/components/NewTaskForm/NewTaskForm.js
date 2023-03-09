import React from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  render() {
    const { addItem } = this.props;
    const onSubmit = (e) => {
      e.preventDefault();
      if (this.state.label.trim()) addItem(this.state.label);
      this.setState({ label: '' });
    };

    return (
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
          onChange={(e) => this.setState({ label: e.target.value })}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};
