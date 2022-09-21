import React from "react";
import imageCancel from "../../assets/images/cancel.png";

const Todo = () => {
  return (
    <div className="flex items-center justify-start space-x-4 border-b border-gray-400/20 p-2 last:border-0 hover:bg-gray-100 hover:transition-all">
      <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 border-green-500 bg-white focus-within:border-green-500">
        <input type="checkbox" className="absolute rounded-full opacity-0" />
        <svg
          className="pointer-events-none hidden h-3 w-3 fill-current text-green-500"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className="flex-1 select-none line-through">
        Learn React from Learn with Sumit YouTube Channel
      </div>

      <div className="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-green-500 bg-green-500 hover:bg-green-500"></div>

      <div className="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-yellow-500 hover:bg-yellow-500"></div>

      <div className="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-red-500 hover:bg-red-500"></div>

      <img
        src={imageCancel}
        className="ml-2 h-4 w-4 flex-shrink-0 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
