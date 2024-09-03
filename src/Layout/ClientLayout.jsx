import React from "react";
import Header from "../components/authenticated/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ClientHeader from "../components/unauthenticated/clientHeader";

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
    </>
  );
};

export default ClientLayout;
