import React from "react";

import './TaskList.css'
import Task from "../Task/Task";

const TaskList = ({ todos, onDeleted }) => {
    const el = todos.map(item => {
        const {id, ...itemProps} = item
        return (
            <Task { ...itemProps } key={id}
            onDeleted={() => onDeleted(id)}/>
        )
    })
    return (
        <ul className="todo-list">
            { el }
        </ul>
    )
}

export default TaskList