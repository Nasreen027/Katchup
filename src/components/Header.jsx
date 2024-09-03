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
import ProfilePic from '../assets/myProfile.png';
import SearchBar from "./SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import { customIcons } from "../theme/icons";
import { AuthenticatedRoutesNames } from "../utilities/util.const";
import { colors } from "../theme/colors";

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
              <Icon fontSize={25} mr={1} as={customIcons.write} />
              <Text>Write</Text>
            </Flex>
          </NavLink>
          <Center height="40px">
            <Divider
              borderColor={colors.bg.primary}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <NavLink>
            <IconButton
              background={"transparent"}
              fontSize={25}
              border={"none"}
              icon={<customIcons.bell/>}
            />
          </NavLink>
          <Center height="40px">
            <Divider
              borderColor={colors.bg.primary}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <NavLink>
            <Flex
              overflow={"hidden"}
              backgroundColor={colors.bg.primary}
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
