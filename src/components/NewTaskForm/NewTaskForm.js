import React from "react";
import PropTypes from 'prop-types';

import './NewTaskForm.css'

export default class NewTaskForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = e => {
        const regexp = /^\s*$/
        if (regexp.test(e.target.value) === true) {
            throw new Error('Пустая строка')
        } else {
            this.setState({
                label: e.target.value
            })
        }

    }

    onSubmit = e => {
        e.preventDefault()
        const { label } = this.state
        this.setState({ label: '' });
        this.props.addItem(label)
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus
                     value={this.state.label}
                     onChange={this.onLabelChange}
        />
        </form>
        )
    }
}

NewTaskForm.propTypes = {
    addItem: PropTypes.func.isRequired,
};
