import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { UnAuthenticatedRoutesNames } from "../utilities/util.const";
import NotFound from "../pages/notFound";
import Register from "../pages/Register";
import ClientLayout from "../Layout/ClientLayout";

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
        </Route>
      </Routes>
    </>
  );
};

export default UnAuthenticatedRoutes;
