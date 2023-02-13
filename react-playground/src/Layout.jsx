import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import MyButton from "./components/UI/button/MyButton";
import { AuthContext } from "./context";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/UI/layout/Header";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container maxWidth={false}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
