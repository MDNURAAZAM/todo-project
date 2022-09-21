import React from "react";
import Todo from "../Todo/Todo";

const TodoList = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <Todo></Todo>
    </div>
  );
};

export default TodoList;
