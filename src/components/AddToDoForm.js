import React, { Component } from 'react';
import uuid from 'uuid/v4';

class AddToDoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task: ''
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        this.props.createToDo({...this.state, id: uuid()});
        this.setState({ task: '' });
    }

    render() {

        const { task } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                    type="text"
                    placeholder="New Todo"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange}
                />
                <button>Add ToDo</button>
            </form>
        )
    }
}

export default AddToDoForm;