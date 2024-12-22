import styled from "styled-components";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/Firebase";

export const CustomHeading = styled.h1`
  font-family: cursive;
  font-size: 30px;
  font-weight: bold;
`;
const AppContainer = styled.div`
  margin:0 auto;
`;

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <FirebaseProvider>
          <AppContainer>
            <AppRoutes />
          </AppContainer>
        </FirebaseProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
