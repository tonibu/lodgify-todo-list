import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from 'modules/todo-input';
import { TodoList } from 'modules/todo-list';
import { uniqueId } from 'lodash';

class App extends Component {

  state = {
    todos: [ { text: 'Add your first todo' } ]
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { todos: prevTodos } = prevState;
    const { todos } = this.state;
    if ( prevTodos.length !== todos.length ) {
      document.querySelector('#counter').innerText = todos.length;
    }
  }

  handleClickAdd = (e) => {
    e.preventDefault();
    
    const todoText = this.props.todoInput && this.props.todoInput.text;
    const { todos } = this.state;
    todoText && this.setState({ todos: [ ...todos, { text: todoText } ] });
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
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p><span id="counter">1</span> remaining</p>
        <TodoList
          todos={todos}
          handleClickDelete={this.handleClickDelete} />
        <TodoInput
          handleFormSubmit={this.handleClickAdd} />
      </div>
    )
  }
};

App.displayName = 'App';

const mapStateToProps = ({ todoInput }) => ({
  todoInput,
});

export default connect(mapStateToProps)(App);