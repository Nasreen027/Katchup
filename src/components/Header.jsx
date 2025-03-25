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
import { CollapsibleBasic } from "./Collapsible";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isSearchBarOpen, onToggle } = useDisclosure();
  console.log(isSearchBarOpen, 'isSearchBarOpenheader');
  return (
    <>
      <Flex
        // position={"relative"}
        // style={{ top: 7 }}
        // boxShadow={"0 5px 5px #1E1E1E"}
        p={3}
        position="fixed"
        // bottom="0"
        left="0"
        right="0"
        bg={colors.bg.primary}
        color={colors.text.primary}
        boxShadow="0 -2px 5px rgba(0, 0, 0, 0.2)"
        justifyContent="space-around"
        alignItems="center"
        paddingY={2}
        zIndex={1000}
      >
        <Flex flexGrow={1} justifyContent={{ base: "center", md: "flex-start" }} >
          <CustomLogo>Katchup</CustomLogo>
          <Box display={{ base: "none", md: "block" }}>
            <SearchBar />
          </Box>
          <Box display={{base:"block",md:'none'}} >
          <CollapsibleBasic />
          </Box>
        </Flex>
        <Flex
          color={colors.text.primary}
          display={{ base: "none", md: "flex" }}
          justifyContent={"space-between"} alignItems={"center"} w={190}>
          <NavLink to={AuthenticatedRoutesNames.NewPost}>
            <Flex>
              <Icon fontSize={25} mr={1} as={customIcons.write} />
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

      {/* Bottom Mobile Header */}
      <Flex
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        bg={colors.bg.primary}
        color={colors.text.primary}
        boxShadow="0 -2px 5px rgba(0, 0, 0, 0.2)"
        display={{ base: "flex", md: "none" }} // Show on mobile only
        justifyContent="space-around"
        alignItems="center"
        paddingY={2}
        zIndex={1000}
      >
         <NavLink to={AuthenticatedRoutesNames.Home}>
          <Flex>
            <Icon fontSize={25} mr={1} as={customIcons.home} />
            {/* <Text>Write</Text> */}
          </Flex>
        </NavLink>
        <NavLink to={AuthenticatedRoutesNames.NewPost}>
          <Flex>
            <Icon fontSize={25} mr={1} as={customIcons.write} />
            {/* <Text>Write</Text> */}
          </Flex>
        </NavLink>
        <NavLink to={AuthenticatedRoutesNames.Notifications}>
          <Flex>
            <Icon fontSize={25} mr={1} as={customIcons.bell} />
          </Flex>
        </NavLink>
        <Box
          cursor={"pointer"}
          overflow={"hidden"}
          background={colors.bg.accent}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={50}
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
    </>
  );
}

export default Header;