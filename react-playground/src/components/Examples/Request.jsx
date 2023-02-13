import axios from "axios";
import React from "react";
import PostService from "../../API/PostService";
import useRequest from "../../hooks/useRequest";

const Request = () => {
  const getTodos = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  };
  const [todos, loading, error] = useRequest(getTodos);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Произошла ошибка error</h1>;
  }

  return (
    <div>
      <h1>Todos</h1>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <strong>{todo.id}</strong>
            {todo.title} <strong>{todo.completed}</strong>
          </div>
        ))}
    </div>
  );
};

export default Request;
