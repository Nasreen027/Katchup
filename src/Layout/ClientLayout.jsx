import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ClientHeader from "../components/unauthenticated/clientHeader";
import Footer from "../components/Footer";

const ClientLayout = () => {
  // const CustomContainer = styled.div`
  //   width: 80%;
  //   margin: 0 auto;
  //   position: relative;
  //   top: 90px;
  // `;

  return (
    <>
      <ClientHeader />
      <Box>
        <Outlet />
      </Box>
      <Footer/>
    </>
  );
};

export default ClientLayout;
