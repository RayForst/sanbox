import React from "react";
import { useInput } from "../../hooks/useInput";
import MyButton from "../UI/button/MyButton";
import Youtube from "../UI/icons/youtube/Youtube";
import MyInput from "../UI/input/MyInput";

const InputCustomHook = () => {
  const username = useInput("");
  const password = useInput("");
  return (
    <div className="component">
      <Youtube
        name={"Custom hook for inputs."}
        author={"Ulbi TV"}
        sourceLink={"https://youtu.be/ks8oftGP2oc?t=272"}
        status={"completed"}
      />

      <MyInput {...username} type="text" placeholder="Username" />
      <MyInput {...password} type="password" placeholder="Password" />
      <MyButton onClick={() => console.log(username.value, password.value)}>
        Click
      </MyButton>
    </div>
  );
};

export default InputCustomHook;
