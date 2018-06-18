import React from 'react';

export const TodoInput = (props) => (
  <div className="todo-input">
    <form onSubmit={props.handleFormSubmit}>
      <input
        onChange={props.handleChange}
        placeholder="..."
        type="text"
        value={props.todo}/>
      <button>
        Add
      </button>
    </form>
  </div>
);

TodoInput.displayName = 'TodoInput';