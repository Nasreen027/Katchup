import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  // const CustomContainer = styled.div`
  //   width: 80%;
  //   margin: 0 auto;
  //   position: relative;
  //   top: 90px;
  // `;

  return (
    <>
      <Header />
      <Box px={20} py={10}>
        <Outlet />
      </Box>
      <Footer/>
    </>
  );
};

export default MainLayout;
