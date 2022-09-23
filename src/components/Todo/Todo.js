import React from "react";
import imageCancel from "../../assets/images/cancel.png";
import {useDispatch} from 'react-redux';
import {toggled, colorselected, deleted} from '../../redux/todos/actions'

const Todo = ({todo}) => {
  const dispatch = useDispatch();
  const {id, text, completed, color} = todo;

  const handleToggle = (todoId) => {
    dispatch(toggled(todoId));
  }

  const handleColorSelected = (todoId, color)=>{
    dispatch(colorselected(todoId, color));
  }

  const handleDelete = (todoId) => {
    dispatch(deleted(todoId));
  }
  return (
    <div className="flex items-center justify-start space-x-4 border-b border-gray-400/20 p-2 last:border-0 hover:bg-gray-100 hover:transition-all">
      <div className={`mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 bg-white ${completed && 'border-green-500  focus-within:border-green-500'}`}>
        <input type="checkbox" checked={completed} onChange={() => handleToggle(id)} className="absolute rounded-full opacity-0" />
        {completed && <svg
          className="pointer-events-none h-3 w-3 fill-current text-green-500"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>}
      </div>

      <div className={`flex-1 select-none ${completed && 'line-through'}`}>
        {text}
      </div>

      <div className={`ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-green-500 hover:bg-green-500 ${color=='green' && 'bg-green-500'}`}  onClick={() => handleColorSelected(id, 'green')}></div>

      <div className={`ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-yellow-500 hover:bg-yellow-500 ${color=='yellow' && 'bg-yellow-500'}`} onClick={() => handleColorSelected(id, 'yellow')}></div>

      <div className={`ml-auto h-4 w-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-red-500 hover:bg-red-500 ${color=='red' && 'bg-red-500'}`} onClick={() => handleColorSelected(id, 'red')}></div>

      <img
        src={imageCancel}
        className="ml-2 h-4 w-4 flex-shrink-0 cursor-pointer"
        alt="Cancel"

        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default Todo;
