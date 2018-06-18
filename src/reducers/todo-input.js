import { SET_TODO_TEXT } from 'actions/todo-input';

const defaultState = {
  text: '',
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case SET_TODO_TEXT:
      return { 
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};