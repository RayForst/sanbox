import React, { useState } from "react";
import Counter from "../components/Examples/Counter";
import CounterClass from "../components/Examples/CounterClass";
import Debounce from "../components/Examples/Debounce";
import Hover from "../components/Examples/Hover";
import InputCustomHook from "../components/Examples/InputCustomHook";
import ReduxSaga from "../components/Examples/ReduxSaga";
import Request from "../components/Examples/Request";
import StoreRedux from "../components/Examples/StoreRedux";

const Misc = () => {
  return (
    <div>
      <h1>Misc</h1>
      <ReduxSaga />
      <StoreRedux />
      <CounterClass />
      <Counter />
      <InputCustomHook />
      <Hover />
      <Debounce />
      <Request />
    </div>
  );
};

export default Misc;
