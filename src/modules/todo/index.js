import React from 'react';

export const Todo = (props) => (
  <div className="todo-item">
    {props.text}
    <span onClick={props.onClickDelete}>&times;</span>
  </div>
);

Todo.displayName = 'Todo';