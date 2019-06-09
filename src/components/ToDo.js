import React, { Component } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import { DeleteForever, Save } from '@material-ui/icons';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
      description: 'No description'
    };
  }

  handleRemoveToDo = () => {
    this.props.removeToDo(this.props.id);
  };

  handleUpdateToDo = evt => {
    evt.preventDefault();

    this.props.updateToDo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  };

  handleUpdateChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  generateToDo() {
    const { isEditing } = this.state;
    const { task } = this.props;

    let toDoCard, cardContent;

    if (isEditing) {
      cardContent = (
        <Card.Body>
          <Form onSubmit={this.handleUpdateToDo}>
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  type="text"
                  name="task"
                  onChange={this.handleUpdateChange}
                  value={this.state.task}
                />
              </Col>
              <Col>
                <Button as="input" type="submit" value="save" />
              </Col>
            </Form.Row>
          </Form>
        </Card.Body>
      );
    } else {
      cardContent = (
        <Card.Body>
          <Card.Title className="todo-title">{task}</Card.Title>
          <Card.Body>
            <Card.Link>
              <span onClick={this.toggleForm}>
                Edit
              </span>
            </Card.Link>
          </Card.Body>          
        </Card.Body>
      );
    }

    toDoCard = (
      <Card>
        <button className="btn btn-link card__close" onClick={ this.handleRemoveToDo }>
          <DeleteForever />
        </button>
        { cardContent }
      </Card>
    );

    return toDoCard;
  }

  render() {
    return this.generateToDo();
  }
}

export default ToDo;
