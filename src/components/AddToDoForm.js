import React, { Component } from "react";
import uuid from "uuid/v4";
import { Add } from '@material-ui/icons';

class AddToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.createToDo({ ...this.state, id: uuid() });
    this.setState({ task: "" });
  };

  render() {
    const { task } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center justify-content-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="task">New Todo</label>
            <input
              required
              className="form-control"
              type="text"
              placeholder="Example: wash my car"
              name="task"
              id="task"
              value={task}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success">
              <Add />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddToDoForm;
