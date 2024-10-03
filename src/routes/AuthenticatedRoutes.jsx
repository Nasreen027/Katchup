import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutesNames, UnAuthenticatedRoutesNames } from "../utilities/util.const";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import NewPost from "../components/NewPost";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={AuthenticatedRoutesNames.Home} element={<Home />} />
        <Route path={AuthenticatedRoutesNames.NewPost} element={<NewPost />} />
        <Route path={UnAuthenticatedRoutesNames.About} element={<About />} />
      </Route>
        <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
