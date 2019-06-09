import React, { Component } from "react";
import { CardColumns } from 'react-bootstrap';
import "./ToDoList.css";
import ToDo from "./ToDo";
import AddToDoForm from "./AddToDoForm";

class ToDoList extends Component {
  static defaultProps = {
    title: 'TODO List'
  };

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  createToDo = newToDo => {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  };

  removeToDo = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  updateToDo = (id, updatedTask) => {
    const { todos } = this.state;
    const updatedToDos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedToDos
    });
  };

  render() {
    const { title } = this.props;

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
        <h3>{ title }</h3>
        <AddToDoForm createToDo={this.createToDo} />
        <div className="cards-deck">
          <CardColumns>
            {todos}
          </CardColumns>
        </div>
      </div>
    );
  }
}

export default ToDoList;
