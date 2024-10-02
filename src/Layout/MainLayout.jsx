import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const MainLayout = () => {
  // const CustomContainer = styled.div`
  //   width: 80%;
  //   margin: 0 auto;
  //   position: relative;
  //   top: 90px;
  // `;

  const ContentWrapper = styled.div`
    flex-grow: 1;
    min-height:100vh;
  `;

  return (
    <>
      <Header />
      <Box px={20} py={10}>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
