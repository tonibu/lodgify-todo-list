import React from 'react';
import { connect } from 'react-redux';
import { Todo } from 'modules/todo';
import { deleteTodo } from 'actions/todos';

export const TodoList = (props) => {
  if (props.todos && props.todos.length) {
    return (
      <div>
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            onClickDelete={() => props.handleClickDelete(todo.id)}
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

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickDelete: (id) => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);