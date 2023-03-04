import React from "react";

import './Task.css'

export default class Task extends React.Component {
    render() {
        return (
            <li>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={ () => console.log('Done!') }/>
                <label>
                    <span className="description">Active task</span>
                    <span className="created">created 5 minutes ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
        )
    }
}
