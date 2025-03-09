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
    min-height: 100vh;
    // display:flex;
    // justify-content:center;
    // max-width:80%;
  `;

  return (
    <>
      <Header />
      <Box 
      px={{base:"1rem",md:"2rem"}}
       py={10}
       >
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
