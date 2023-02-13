import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../asyncActions/customers";
import {
  addCustomerAction,
  removeCustomerAction,
} from "../../store/customerReducer";
import MyButton from "../UI/button/MyButton";
import Youtube from "../UI/icons/youtube/Youtube";

const StoreRedux = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };

  const getCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };

  const addCustomer = (name) => {
    const customer = { name, id: Date.now() };

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="component">
      <Youtube
        name={"Redux пример"}
        author={"Ulbi TV"}
        sourceLink={"https://youtu.be/Dzzeir85i3c"}
        title={"Тест тайтл"}
        status={"completed"}
      />

      <div style={{ fontSize: 30 }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <MyButton onClick={() => addCash()}>Пополнить счет</MyButton>
        <MyButton onClick={() => getCash()}>Снять со счета</MyButton>
        <MyButton onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </MyButton>
        <MyButton onClick={() => getCash()}>Удалить клиента</MyButton>
        <MyButton onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </MyButton>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                margin: 5,
              }}
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <h1>Клиенты отсуствуют</h1>
      )}
    </div>
  );
};

export default StoreRedux;
