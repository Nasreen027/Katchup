import styled from "styled-components";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./context/Firebase";
import { colors } from "./theme/colors";

export const CustomHeading = styled.h1`
  font-family: cursive;
  font-size: 1.875rem;
  font-weight: bold;
  color:${colors.text.primary};
`;
const AppContainer = styled.div`
  margin:0 auto;
  background-color:black;
`;
export const CustomLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  font-family: cursive;
  margin-right: 2.063rem;
  background: ${colors.bg.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
