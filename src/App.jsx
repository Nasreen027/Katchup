import "./App.css";
import styled from "styled-components";
import { colors } from "./theme/colors";
import Header from "./components/authenticated/Header";
import Home from "./components/authenticated/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";

const AppContainer = styled.div`
  // backgroundColor:${colors.bg.primary};
  // background-color:#F5F5F5;
  // height:2000px;
  // width:100px;
`;


function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
      <AppContainer>
        {/* <CustomContainer> */}
        <AuthenticatedRoutes/>
        {/* </CustomContainer> */}
      </AppContainer>
      </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
