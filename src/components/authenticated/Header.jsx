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
import SearchBar from "./SearchBar";
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

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        position={"relative"}
        style={{ top: 7 }}
        boxShadow={"0 5px 5px rgba(0, 0, 0, 0.5)"}
        p={3}
      >
        <Flex flexGrow={1}>
          <CustomLogo>Aurora</CustomLogo>
          <SearchBar />
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={190}>
          <NavLink to={AuthenticatedRoutesNames.NewPost}>
            <Flex>
              <Icon fontSize={25} mr={1} as={HiMiniPencilSquare} />
              <Text>Write</Text>
            </Flex>
          </NavLink>
          <Center height="40px">
            <Divider
              borderColor={"#e1d6c5"}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <NavLink>
            <IconButton
              background={"transparent"}
              fontSize={25}
              border={"none"}
              icon={<FaRegBell />}
            />
          </NavLink>
          <Center height="40px">
            <Divider
              borderColor={"#e1d6c5"}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <NavLink>
            <Flex
              overflow={"hidden"}
              backgroundColor={"#e1d6c5"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={50}
              w={45}
            >
              <Image w={30} src={ProfilePic} />
            </Flex>
          </NavLink>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
