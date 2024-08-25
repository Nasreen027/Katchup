import React from "react";
import Header from "../components/authenticated/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";

const MainLayout = () => {
  const CustomContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: 90px;
  `;

  return (
    <>
      <Header />
      <Box px={20} py={10}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
