import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutesNames, UnAuthenticatedRoutesNames } from "../utilities/util.const";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import NewPost from "../components/NewPost";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import PostDetail from "../pages/PostDetail";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={AuthenticatedRoutesNames.Home} element={<Home />} />
        <Route path={AuthenticatedRoutesNames.NewPost} element={<NewPost />} />
        <Route path={AuthenticatedRoutesNames.PostDetail} element={<PostDetail />} />
        <Route path={UnAuthenticatedRoutesNames.About} element={<About />} />
        <Route path={AuthenticatedRoutesNames?.MyProfile} element={<Profile />} />
        <Route path={AuthenticatedRoutesNames?.Setting} element={<Settings />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AuthenticatedRoutes;
