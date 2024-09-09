import "./App.css";
import styled from "styled-components";
import { colors } from "./theme/colors";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";
import { FirebaseProvider } from "./context/Firebase";

const AppContainer = styled.div`
  // backgroundColor:${colors.bg.primary};
  // background-color:#F5F5F5;
  // height:2000px;
  // width:100px;
`;

export const CustomHeading = styled.h1`
  font-family: cursive;
  font-size:30px;
  font-weight:bold;
`;

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <FirebaseProvider>
          <AppContainer>
            {/* <CustomContainer> */}
            <AuthenticatedRoutes />
            <UnAuthenticatedRoutes />
            {/* </CustomContainer> */}
          </AppContainer>
          </FirebaseProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
