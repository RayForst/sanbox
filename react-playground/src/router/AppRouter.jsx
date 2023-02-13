import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "../components/UI/loader/Loader";
import { AuthContext } from "../context";
import Layout from "../Layout";
import Courses from "../pages/Courses";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Misc from "../pages/Misc";
import PostsPage from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="posts" element={<PostsPage />} />
          <Route exact path="posts/:id" element={<PostsIdPage />} />
          <Route path="misc" element={<Misc />} />
          <Route path="courses" element={<Courses />} />
          <Route path="login" element={<Navigate to="/posts" />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
