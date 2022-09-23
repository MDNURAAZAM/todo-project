import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import imageDoubleTick from "../../assets/images/double-tick.png";
import imageNotes from "../../assets/images/notes.png";
import imagePlus from "../../assets/images/plus.png";
import { clearcompleted, allcompleted, added } from "../../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(text));
    setText("");
  };
  return (
    <div>
      <form
        className="flex items-center rounded-md bg-gray-100 px-4 py-4"
        onSubmit={handleSubmit}
      >
        <img src={imageNotes} className="h-6 w-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full border-none bg-gray-100 px-4 py-1 text-lg text-gray-500 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className={`h-8 w-8 appearance-none bg-[url(${imagePlus})] bg-contain bg-no-repeat`}
        ></button>
      </form>

      <ul className="my-4 flex justify-between text-xs text-gray-500">
        <li
          className="flex cursor-pointer space-x-1"
          onClick={() => dispatch(allcompleted())}
        >
          <img className="h-4 w-4" src={imageDoubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => dispatch(clearcompleted())}
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
