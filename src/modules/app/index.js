import React, { Component } from 'react';
import { TodoInput } from 'modules/todo-input';
import { TodoList } from 'modules/todo-list';
import { uniqueId } from 'lodash';

export class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { todos: prevTodos } = prevState;
    const { todos } = this.state;
    if ( prevTodos.length !== todos.length ) {
      document.querySelector('#counter').innerText = todos.length;
    }
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = (e) => {
    e.preventDefault();
    
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  handleClickDelete = index => {
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    this.state.todos.forEach((todo, index) => {
      this.state.todos[index] = { ...todo, id: uniqueId() };
    });
    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p><span id="counter">1</span> remaining</p>
        <TodoList
          todos={todos}
          handleClickDelete={this.handleClickDelete} />
        <TodoInput
          todo={todo}
          handleChange={this.handleChange}
          handleFormSubmit={this.handleClickAdd} />
      </div>
    )
  }

};