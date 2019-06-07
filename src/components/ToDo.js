import React, { Component } from 'react';

class ToDo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing : false,
            task : this.props.task
        };
    }

    handleRemoveToDo = () => {
        this.props.removeToDo(this.props.id);
    }

    handleUpdateToDo = (evt) => {
        evt.preventDefault();

        this.props.updateToDo(this.props.id, this.state.task);
        this.setState({
            isEditing : false
        });
    }

    handleUpdateChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    toggleForm = () => {
        this.setState({
            isEditing : !this.state.isEditing
        });
    }

    generateToDo() {
        const { isEditing } = this.state;
        const { task } = this.props;

        let result;

        if (isEditing) {
            result = 
            <div>
                <form onSubmit={this.handleUpdateToDo}>
                    <input type="text" name="task" onChange={this.handleUpdateChange} value={this.state.task} />
                    <button>Save ToDo</button>
                </form>
            </div>
        } else {
            result = 
            <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemoveToDo}>X</button>
                <div className="todo__task">
                    { task }
                </div>
            </div>
        }

        return result;
    }

    render() {
        return this.generateToDo();
    }
}

export default ToDo;