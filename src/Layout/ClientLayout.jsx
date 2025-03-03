import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";
import ClientHeader from "../components/unauthenticated/ClientHeader";

const MainClientComponent = styled.div`
  // background-color: #e1d6c5;
  // background:linear-gradient(45deg, #FCAF45, #FF543E, #D6249F, #285AEB);
  // background: linear-gradient(45deg, #ff7e5f, #feb47b);
  // background: linear-gradient(45deg, #2193b0, #6dd5ed);
  // background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  // background: linear-gradient(45deg, #56ab2f, #a8e063);
  // background: linear-gradient(45deg, #ff0099, #493240);
  // background: linear-gradient(45deg, #7f00ff, #e100ff);
  background-color:black;
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
