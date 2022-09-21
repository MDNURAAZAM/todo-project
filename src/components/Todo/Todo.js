import React from "react";
import imageCancel from "../../assets/images/cancel.png";

const Todo = () => {
  return (
    <div class="flex items-center justify-start space-x-4 border-b border-gray-400/20 p-2 last:border-0 hover:bg-gray-100 hover:transition-all">
      <div class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 border-green-500 bg-white focus-within:border-green-500">
        <input type="checkbox" class="absolute rounded-full opacity-0" />
        <svg
          class="pointer-events-none hidden h-3 w-3 fill-current text-green-500"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div class="flex-1 select-none line-through">
        Learn React from Learn with Sumit YouTube Channel
      </div>

      <div class="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-green-500 bg-green-500 hover:bg-green-500"></div>

      <div class="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-yellow-500 hover:bg-yellow-500"></div>

      <div class="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-red-500 hover:bg-red-500"></div>

      <img
        src={imageCancel}
        class="ml-2 h-4 w-4 flex-shrink-0 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
