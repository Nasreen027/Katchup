import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import ProfilePic from "../assets/myProfile.png";
import SearchBar from "./SearchBar";
import { NavLink, } from "react-router-dom";
import { customIcons } from "../theme/icons";
import { AuthenticatedRoutesNames } from "../utilities/util.const";
import { colors } from "../theme/colors";
import CustomDrawer from "./CustomDrawer";

const CustomLogo = styled.div`
  font-size: 34px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  font-family: cursive;
  margin-right: 33px;
`;

function Header() {
  const {isOpen, onOpen, onClose} = useDisclosure();
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
          <Box position="relative">
            <Menu>
              <MenuButton
              _hover={{background:"transparent"}}
              
                as={IconButton}
                background="transparent"
                fontSize={25}
                border="none"
                icon={
                  <Box position="relative">
                    <customIcons.bell />
                    <Badge
                    h={4}
                      colorScheme="red"
                      borderRadius="50%"
                      position="absolute"
                      top="-7px"
                      right="-7px"
                      fontSize="0.8rem"
                      zIndex={1}
                    >
                      11
                    </Badge>
                  </Box>
                }
              />

              <MenuList minWidth="300px" p={2} boxShadow="xl" borderRadius="md">
                <Text fontWeight="bold" mb={2}>
                  Notifications
                </Text>
                <Divider mb={2} />
                <MenuItem _hover={{ backgroundColor: "#f5f5f5" }}>
                  <Flex flexDirection="column" align="flex-start">
                    <Text fontWeight="medium">John liked your post</Text>
                    <Text fontSize="sm" color="gray.500">
                      11:11
                    </Text>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Center height="40px">
            <Divider
              borderColor={colors.bg.primary}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <Box
          cursor={'pointer'}
                    overflow={"hidden"}
                    backgroundColor={colors.bg.primary}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={50}
                    w={45}
                    mr={1}
                  >
                    <Image w={30} src={ProfilePic} onClick={onOpen} />
                    <CustomDrawer isOpen={isOpen} onClose={onClose}/>
                  </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
