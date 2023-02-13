import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from "../../store/countReducer";
import { fetchUsers } from "../../store/userReducer";
import MyButton from "../UI/button/MyButton";

const ReduxSaga = () => {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();

  return (
    <div className="component">
      <div>
        <span>{count}</span>
      </div>
      <MyButton onClick={() => dispatch(asyncIncrementCreator())}>
        Инкремент++
      </MyButton>
      <MyButton onClick={() => dispatch(asyncDecrementCreator())}>
        Декремент--
      </MyButton>
      <MyButton onClick={() => dispatch(fetchUsers())}>
        Получить юзеров
      </MyButton>
      <div className="users">
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ReduxSaga;
