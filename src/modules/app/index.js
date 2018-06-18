import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from 'modules/todo-input';
import TodoList from 'modules/todo-list';


const App = (props) => (
  <div className="todo-list">
    <h1>todos</h1>
    <p><span id="counter">{props.todos.length}</span> remaining</p>
    <TodoList />
    <TodoInput />
  </div>
);

App.displayName = 'App';

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(App);