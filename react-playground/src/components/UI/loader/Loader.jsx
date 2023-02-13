import React from "react";
import css from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
