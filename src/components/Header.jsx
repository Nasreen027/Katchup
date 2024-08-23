import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

// const Navbar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   //   width:100%;
// `;

const SearchContainer = styled.div`
display:flex;
flex-grow:1;
// background-color:black;
// width:100px;
// height:100px;
`;
const Profile = styled.div`
background-color:red;
height:100px;
 width:100px;
`;

function Header() {
  return (
    <>
      <Flex>
        <SearchContainer>
            <Text>Logo</Text>
            <SearchBar/>
        </SearchContainer>
        {/* <Profile></Profile> */}
      </Flex>
    </>
  );
}

export default Header;
