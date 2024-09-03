import React from "react";
import { Route, Routes } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.const";
import NotFound from "../pages/notFound";
import Register from "../pages/Register";
import ClientLayout from "../Layout/ClientLayout";
import Login from "../pages/Login";

const UnAuthenticatedRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route
            path={UnAuthenticatedRoutesNames.NotFound}
            element={<NotFound />}
          />
          <Route
            path={UnAuthenticatedRoutesNames.Register}
            element={<Register />}
          />
          <Route path={UnAuthenticatedRoutesNames.Login} element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default UnAuthenticatedRoutes;
