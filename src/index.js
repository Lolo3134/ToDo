import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
import TestButton from "./components/TestButton/TestButton";

class App extends Component {

    maxId = 100;

    state =  {
        todoData: [
            { label: 'Выпить кофе', done: false, id: 1 },
            { label: 'Покушать', done: false, id: 2 },
            { label: 'Искупаться', done: false, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex(el => el.id === id)
            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            return {
                todoData: newArr
            }
        })
    }

    // addItem = (txt) => {
    //     const newItem = {
    //         label: txt,
    //         done: false,
    //         id: this.maxId++
    //     }
    //
    //     this.setState(({todoData}) => {
    //         const newArr = [...todoData, newItem]
    //         return {
    //             todoData: newArr
    //         }
    //     })
    // }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className="main">
                    <TaskList todos={ this.state.todoData }
                    onDeleted={this.deleteItem}/>
                    <Footer />
                </section>
                <TestButton onItemAdded={this.addItem}/>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
