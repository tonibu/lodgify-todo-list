import React from 'react';
import { Todo } from 'modules/todo';

export const TodoList = (props) => {
  if (props.todos && props.todos.length) {
    return (
      <div>
        {props.todos.map((todo, index) => (
          <Todo
            key={todo.id}
            onClickDelete={() => props.handleClickDelete(index)}
            text={todo.text} />
        ))}
      </div>
    );
  }

  return (
    <div>You're all done 🌴</div>
  );
};

TodoList.displayName = 'TodoList';