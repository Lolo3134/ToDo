import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList />
          <Footer />
        </section>
      </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
