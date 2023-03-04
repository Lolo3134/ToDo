import React from "react";

import './TaskList.css'
import Task from "../Task/Task";

const TaskList = () => {
    return (
        <ul className="todo-list">
            <Task />
            <Task />
            <Task />
        </ul>
    )
}

export default TaskList