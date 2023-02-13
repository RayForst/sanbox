import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./Item";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1>Посты не найдены</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post number={index + 1} post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
