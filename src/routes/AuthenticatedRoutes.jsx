import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutesNames } from "../utilities/util.const";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import NewPost from "../components/NewPost";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={AuthenticatedRoutesNames.Home} element={<Home />} />
        <Route path={AuthenticatedRoutesNames.NewPost} element={<NewPost />} />
      </Route>
    </Routes>
  );
};

export default AuthenticatedRoutes;
