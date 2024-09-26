import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";
import ClientHeader from "../components/unauthenticated/ClientHeader";

const MainClientComponent = styled.div`
  background-color: #e1d6c5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const ClientLayout = () => {
  return (
    <MainClientComponent>
      <ClientHeader />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </MainClientComponent>
  );
};

export default ClientLayout;
