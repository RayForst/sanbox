import React, { useRef } from "react";
import { useHover } from "../../hooks/useHover";
import MyButton from "../UI/button/MyButton";
import Youtube from "../UI/icons/youtube/Youtube";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div className="component">
      <Youtube
        name={"Custom hook for hover."}
        author={"Ulbi TV"}
        sourceLink={"https://youtu.be/ks8oftGP2oc?t=272"}
        status={"completed"}
      />
      <div
        ref={ref}
        style={{
          height: 500,
          width: 500,
          background: isHovering ? "red" : "blue",
        }}
      >
        <MyButton onClick={() => console.log(ref.current)}>Click</MyButton>
      </div>
    </div>
  );
};

export default Hover;
