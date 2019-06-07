import React, { Component } from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
import AddToDoForm from './AddToDoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    createToDo = (newToDo) => {
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    }

    removeToDo = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    updateToDo = (id, updatedTask) => {
        const { todos } = this.state;
        const updatedToDos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({
            todos: updatedToDos
        });
    }

    render() {

        const todos = this.state.todos.map(todo => {
            return (
                <ToDo 
                    key={todo.id}
                    task={todo.task}
                    id={todo.id}
                    removeToDo={this.removeToDo}
                    updateToDo={this.updateToDo}
                />
            );
        });

        return (
            <div className="todo-list">
                <div>LIST OF TO DOS</div>
                <AddToDoForm createToDo={this.createToDo} />
                <ul>
                    { todos }
                </ul>
            </div>
        );
    }
}

export default ToDoList;