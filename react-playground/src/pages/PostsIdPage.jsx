import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "./../API/PostService";

const PostsIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [params.id]);

  return (
    <div>
      <h4>Страница поста: {params.id}</h4>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}

      <h2>Комментарии</h2>

      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((c) => (
            <div key={c.id} style={{ marginTop: 15 }}>
              <h5>{c.email}</h5>
              <div>{c.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsIdPage;
