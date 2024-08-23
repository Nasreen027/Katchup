// import { background, Box, ChakraProvider, Container } from '@chakra-ui/react'
import "./App.css";
import styled from "styled-components";
import { colors } from "./theme/colors";
// import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/home";

const AppContainer = styled.div`
  // backgroundColor:${colors.bg.primary};
  // background-color:#F5F5F5;
  // height:2000px;
  // width:100px;
`;

const CustomContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      {/* <ChakraProvider> */}
      <AppContainer>
        <Header />
        <CustomContainer>
          <Home />
        </CustomContainer>
      </AppContainer>
      {/* </ChakraProvider> */}
    </>
  );
}

export default App;
