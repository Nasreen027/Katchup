import React from "react";
import { Route, Routes } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.const";
import Register from "../pages/Register";
import ClientLayout from "../Layout/ClientLayout";
import Login from "../pages/Login";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ClientHome from "../pages/ClientHome";

const UnAuthenticatedRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route
            path={UnAuthenticatedRoutesNames?.ClientHome}
            element={<ClientHome />}
          />
          <Route path={UnAuthenticatedRoutesNames.About} element={<About />} />
        {/* <Route
          path='*'
          element={<NotFound />}
        /> */}
        </Route>
        <Route
          path={UnAuthenticatedRoutesNames.Register}
          element={<Register />}
        />
        <Route path={UnAuthenticatedRoutesNames.Login} element={<Login />} />
      </Routes>
    </>
  );
};

export default UnAuthenticatedRoutes;
