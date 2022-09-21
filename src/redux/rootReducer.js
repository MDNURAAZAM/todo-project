import { combineReducers } from "redux";
import filtersReducer from "./filter/filtersReducer";
import todoReducer from "./todos/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
