import React from "react";

import './Task.css'

export default class Task extends React.Component {

    state = {
        done: false,
        edit: false
    }

    onDone = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onEdit = () => {
        this.setState(({edit}) => {
            return {
                edit: !edit
            }
        })
    }

    render() {
        const { label, onDeleted } = this.props
        const { done, edit } = this.state
        let classNames = ''
        let inputEdit = ''
        if (done) {
            classNames = 'completed'
        } else if (edit) {
            classNames = 'editing'
            inputEdit = <input type="text" className="edit" value="Editing task" />
        }


        return (
            <li className={ classNames }>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={ this.onDone }/>
                <label>
                    <span className="description">{ label }</span>
                    <span className="created">created 5 minutes ago</span>
                </label>
                <button className="icon icon-edit" onClick={ this.onEdit }></button>
                <button className="icon icon-destroy" onClick={ onDeleted }></button>
            </div>
                { inputEdit }
        </li>
        )
    }
}
