import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="component">
      <h3>Counter value: {count}</h3>
      <MyButton onClick={increment}>Increment</MyButton>
      <MyButton onClick={decrement}>Decrement</MyButton>
    </div>
  );
};

export default Counter;
