import React from 'react';
import { connect } from 'react-redux';
import { setTodoText } from 'actions/todo-input';
import { createTodo } from 'actions/todos';

const TodoInput = (props) => (
  <div className="todo-input">
    <form onSubmit={props.handleFormSubmit}>
      <input
        onChange={props.handleChange}
        placeholder="..."
        type="text"
        value={props.todoInput.text}/>
      <button>
        Add
      </button>
    </form>
  </div>
);

TodoInput.displayName = 'TodoInput';

const mapStateToProps = ({ todoInput }) => ({
  todoInput,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => dispatch(setTodoText(e.currentTarget.value)),
  handleFormSubmit: (e) => {
    e.preventDefault();
    dispatch(createTodo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);