import { uniqueId } from 'lodash';
import { setTodoText } from 'actions/todo-input';

export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const createTodo = () => (dispatch, getState) => {
  const { todoInput } = getState();

  dispatch({
    type: CREATE_TODO,
    todo: {
      id: uniqueId(),
      text: todoInput.text,
    },
  });

  dispatch(setTodoText(''));
};

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  todo: {
    id,
  },
});