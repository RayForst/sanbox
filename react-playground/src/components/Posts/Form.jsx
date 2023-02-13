import React, { useState } from "react";
import MyButton from "./../UI/button/MyButton";
import MyInput from "./../UI/input/MyInput";
import classes from "./Form.module.scss";

const Form = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <section className="component">
      <h2>Добавление поста</h2>
      <form className={classes.form}>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </section>
  );
};

export default Form;
