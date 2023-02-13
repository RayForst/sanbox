import { Link } from "@mui/material";
import React, { useState } from "react";
import css from "./Youtube.module.scss";

const Youtube = ({
  name,
  author,
  sourceLink,
  duration = undefined,
  status = "",
  title = false,
}) => {
  return (
    <div
      className={[css.youtubeContainer, css[status]].join(" ")}
      title={title}
    >
      <Link
        rel="noreferrer"
        href={sourceLink}
        className={css.sourceContainer}
        target={"_blank"}
      >
        <span>
          {name} <strong></strong>
        </span>
        <div className={css.youtubeLogo}></div>
      </Link>
      <div>
        {duration && <span className={css.duration}>{duration}</span>}
        от <strong>{author}</strong>
      </div>
    </div>
  );
};

export default Youtube;
