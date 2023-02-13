import React, { useState } from "react";
import PostService from "../../API/PostService";
import useDebounce from "../../hooks/useDebounce";
import MyInput from "../UI/input/MyInput";

const Debounce = () => {
  const [todoValue, setTodoValue] = useState("");
  const searchTodo = async () => {
    await PostService.getTodosByQuery(todoValue);
  };
  const onTodoChange = (e) => {
    setTodoValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useDebounce(searchTodo, 500);

  return (
    <div>
      <p>
        Debounce + Custom todos
        <a
          href="https://youtu.be/ks8oftGP2oc?t=272"
          rel="noreferrer"
          target="_blank"
        >
          Hooks
        </a>
      </p>

      <div>
        <MyInput type="text" value={todoValue} onChange={onTodoChange} />
      </div>
    </div>
  );
};

export default Debounce;
