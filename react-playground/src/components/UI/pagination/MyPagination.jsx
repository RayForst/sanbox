import React from "react";
import css from "./MyPagination.module.scss";
import { getPagesArray } from "../../../utils/pages";

const MyPagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={css.pagination}>
      {pagesArray.map((p) => (
        <span
          className={page === p ? [css.item, css.active].join(" ") : css.item}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default MyPagination;
