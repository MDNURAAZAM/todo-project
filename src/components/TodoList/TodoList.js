import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const { status, colors } = filters;

  const filterByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;

      default:
        return todo;
    }
  };

  const filterByColor = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 max-h-[300px] overflow-y-auto text-sm text-gray-700">
      {todos
        .filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <Todo todo={todo} key={todo.id}></Todo>
        ))}
    </div>
  );
};

export default TodoList;
