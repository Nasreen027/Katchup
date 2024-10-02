import "./App.css";
import styled from "styled-components";
import { colors } from "./theme/colors";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";
import { FirebaseProvider, useFirebase } from "./context/Firebase";

const AppContainer = styled.div`
  // backgroundColor:${colors.bg.primary};
  // background-color:#F5F5F5;

`;

export const CustomHeading = styled.h1`
  font-family: cursive;
  font-size: 30px;
  font-weight: bold;
`;

function App() {
  const context = useFirebase();
  const token = context?.token;
  if (!token) {
    // console.log("user does not exist");
  } else {
    // console.log(token, "token from app");
  }
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
