import {
  ADDED,
  ALLCOMPLETED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
  CLEARCOMPLETED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorselected = (todoId,color) => {
  return {
    type: COLORSELECTED,
    payload: {
        todoId,
        color
    }
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
