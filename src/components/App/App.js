import React from "react";

import './App.css'
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

export default class App extends React.Component {

    maxId = 100;

    state =  {
        todoData: [
            this.createItem('Выпить кофе'),
            this.createItem('Покушать'),
            this.createItem('Искупаться')
        ],
        filter: 'All'
    }

    createItem (label) {
        return {
                label: label,
                checked: false,
                id: this.maxId++,
                date: new Date(),
            }

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

    addItem = (label) => {
        this.setState(({todoData}) => {
            const newItem = this.createItem(label)
            return { todoData: [...todoData, newItem]}
        })
    }

    changeCheck(id, data) {
        this.setState(({ todoData }) => ({
            todoData: todoData.map(el => {
                if (id === el.id) el.checked = data;
                return el;
            }),
        }));
    }

    editItem(id, text) {
        this.setState(({ todoData }) => ({
            todoData: todoData.map(el => {
                if (el.id === id) el.label = text;
                return el;
            }),
        }));
    }

    filteredItems() {
        const { todoData, filter } = this.state;
        return todoData.filter(({ checked }) => {
            const all = filter === 'All';
            const completed = filter === 'Completed';
            return all ? true : completed ? checked === true : checked === false;
        });
    }

    clearCompleted() {
        this.setState(({ todoData }) => ({ todoData: todoData.filter(el => !el.checked) }));
    }

    changeFilter(data) {
        this.setState({ filter: data });
    }


    render() {

        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm addItem={this.addItem}/>
                </header>
                <section className="main">
                    <TaskList
                        changeCheck={this.changeCheck.bind(this)}
                        editItem={this.editItem.bind(this)}
                        deletedItem={this.deleteItem.bind(this)}
                        todos={this.filteredItems()}
                    />
                    <Footer
                        changeFilter={this.changeFilter.bind(this)}
                        cleareCompleted={this.clearCompleted.bind(this)}
                        todoCount={this.state.todoData.filter(({ checked }) => !checked).length}
                        filter={this.state.filter}
                    />
                </section>
            </section>
        )
    }
}