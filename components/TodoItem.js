import React, { Component } from 'react'

class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Mark As Completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete To-Do</button>
      </li>
    )
  }

}

export default TodoItem
