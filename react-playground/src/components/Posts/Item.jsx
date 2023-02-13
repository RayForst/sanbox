import React from "react";
import MyButton from "../UI/button/MyButton";
import classes from "./Item.module.scss";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.post + " component"}>
      <article className="post__content">
        <h2>
          {props.post.id}.{props.post.title}
        </h2>
        <p className={classes.p}>{props.post.body}</p>
      </article>

      <div className={classes.post__btns}>
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>

        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
