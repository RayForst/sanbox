import "./../styles/App.scss";
import React, { useState, useEffect, useRef } from "react";
import Posts from "./../components/Posts";
import PostsForm from "./../components/Posts/Form";
import PostsFilter from "./../components/Posts/Filter";
import MyModal from "./../components/UI/modal/MyModal";
import MyButton from "./../components/UI/button/MyButton";
import { usePosts } from "./../hooks/usePosts";
import PostService from "./../API/PostService";
import Loader from "./../components/UI/loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import { getPageCount } from "./../utils/pages";
import MyPagination from "./../components/UI/pagination/MyPagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
import { Container } from "@mui/material";

function PostsPage() {
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers["x-total-count"];
    setPosts([...posts, ...response.data]);
    setTotalPages(getPageCount(totalCount, limit));
  });

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const lastElement = useRef();
  const sortAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  /*
    Infinite loading
  */
  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  return (
    <div className="App">
      <Container maxWidth={false}>
        <h1>React.js Knowledges</h1>
        <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostsForm create={createPost} />
        </MyModal>
        <PostsFilter filter={filter} setFilter={setFilter} />
        <MySelect
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue="Количество постов"
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 20, name: "20" },
            { value: 50, name: "50" },
            { value: -1, name: "Показать все" },
          ]}
        ></MySelect>
        {postError && <h1>Произошла ошибка: {postError}</h1>}

        <Posts
          title="Посты 1"
          posts={sortAndSearchedPosts}
          remove={removePost}
        />
        <div ref={lastElement} style={{ height: 20 }}></div>
        {isLoading && <Loader />}

        <MyPagination
          totalPages={totalPages}
          page={page}
          changePage={changePage}
        />
      </Container>
    </div>
  );
}

export default PostsPage;
