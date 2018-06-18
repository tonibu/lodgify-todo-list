import { uniqueId } from 'lodash';
import {
  CREATE_TODO,
  DELETE_TODO
} from 'actions/todos';

const defaultState = [{
  id: uniqueId(),
  text: 'Add your first todo',
}];

export default (state = defaultState, action) => {
  switch(action.type) {
    case CREATE_TODO:
      return [ ...state, action.todo ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.todo.id);
    default:
      return state;
  }
};