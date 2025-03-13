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
import ProfilePic from "../assets/myProfile.jpg";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { customIcons } from "../theme/icons";
import { AuthenticatedRoutesNames } from "../utilities/util.const";
import { colors } from "../theme/colors";
import CustomDrawer from "./CustomDrawer";
import { CustomLogo } from "../App";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        position={"relative"}
        style={{ top: 7 }}
        boxShadow={"0 5px 5px #1E1E1E"}
        p={3}
      >
        <Flex flexGrow={1} justifyContent={{ base: "center", md: "flex-start" }} >
          <CustomLogo>Aurora</CustomLogo>
          <Box display={{ base: "none", md: "block" }}>
            <SearchBar />
          </Box>
        </Flex>
        <Flex
        color={colors.text.primary}
          display={{ base: "none", md: "flex" }}
          justifyContent={"space-between"} alignItems={"center"} w={190}>
          <NavLink to={AuthenticatedRoutesNames.NewPost}>
            <Flex>
              <Icon fontSize={25} mr={1} as={customIcons.write}  />
              <Text>Write</Text>
            </Flex>
          </NavLink>
          <Center height="40px">
            <Divider
              borderColor={colors.bg.secondary}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <Box position="relative">
            <Menu>
              <MenuButton
              color={colors.text.primary}
                _hover={{ background: "transparent" }}
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

              <MenuList backgroundColor={colors.bg.primary} minWidth="300px" p={2} boxShadow="xl" borderRadius="md">
                <Text fontWeight="bold" mb={2}>
                  Notifications
                </Text>
                <Divider mb={2} />
                <MenuItem backgroundColor={colors.bg.primary} _hover={{ backgroundColor: colors.bg.hover }}>
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
              borderColor={colors.bg.secondary}
              borderWidth={2}
              orientation="vertical"
            />
          </Center>
          <Box
            cursor={"pointer"}
            overflow={"hidden"}
            // backgroundColor={colors.bg.secondary}
            background={colors.bg.accent}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={50}
            // w={45}
            mr={1}
          >
            <Image
             w="2rem"
             h="2rem"
             borderRadius="full"
            src={ProfilePic} onClick={onOpen} />
            <CustomDrawer isOpen={isOpen} onClose={onClose} mode={'profile'} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;