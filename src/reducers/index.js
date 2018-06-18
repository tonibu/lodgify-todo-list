import { combineReducers } from 'redux';
import todoInput from 'reducers/todo-input';
import todos from 'reducers/todos';

export default combineReducers({ 
  todoInput,
  todos,
});