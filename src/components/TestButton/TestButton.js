import React from "react";

import './TestButton.css'

export default class TestButton extends React.Component {
    render() {
        return (
            <div className='testBtn'>
                <button
                onClick={() => this.props.onItemAdded('Hello')}>Add Item</button>
            </div>
        )
    }
}