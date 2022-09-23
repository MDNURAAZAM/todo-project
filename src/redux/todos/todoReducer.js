import { initialState } from "./initialState";
import {
  ADDED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }

        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETED:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => {
        return !todo.completed;
      });

    default:
      return state;
  }
};

export default todoReducer;
