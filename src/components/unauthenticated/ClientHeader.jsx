import {
    Center,
    Divider,
    Flex,
    Icon,
    IconButton,
    Image,
    Link,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import styled from "styled-components";
  import { TfiWrite } from "react-icons/tfi";
  import { FaRegBell } from "react-icons/fa";
  import ProfilePic from "../../assets/myProfile.png";
  import { NavLink, useNavigate } from "react-router-dom";
  import { AuthenticatedRoutesNames } from "../../utilities/util.const";
  import { HiMiniPencilSquare } from "react-icons/hi2";
  
  const CustomLogo = styled.div`
    font-size: 34px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    font-family: cursive;
    margin-right: 33px;
  `;
  
  function ClientHeader() {
    const navigate = useNavigate();
    return (
      <>
        <Flex
          position={"relative"}
          style={{ top: 7 }}
          boxShadow={"0 5px 5px rgba(0, 0, 0, 0.5)"}
          p={3}
          fontSize={18}
        >
          <Flex flexGrow={1}>
            <CustomLogo>Aurora</CustomLogo>
          </Flex>
          <Flex justifyContent={"space-between"} alignItems={"center"} w={230}>
            <NavLink to={AuthenticatedRoutesNames.NewPost}>
                About us
            </NavLink>
            <Center height="40px">
              <Divider
                borderColor={"#e1d6c5"}
                borderWidth={2}
                orientation="vertical"
              />
            </Center>
            <NavLink>
             Write
            </NavLink>
            <Center height="40px">
              <Divider
                borderColor={"#e1d6c5"}
                borderWidth={2}
                orientation="vertical"
              />
            </Center>
            <NavLink>
              Sign in 
            </NavLink>
          </Flex>
        </Flex>
      </>
    );
  }
  
  export default ClientHeader;
  