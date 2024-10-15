import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProfilePic from "../assets/myProfile.png";
import { colors } from "../theme/colors";
import { useFirebase } from "../context/Firebase";
import { AuthenticatedRoutesNames } from "../utilities/util.const";

const CustomDrawer = ({ isOpen, onClose }) => {
  const btnRef = React.useRef();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); 
    onClose();
  };

  const context = useFirebase();
  // console.log(context,'context');

  const handleLogout = () => {
    context?.Logout();
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems={'center'}>
              <Box
                overflow={"hidden"}
                backgroundColor={colors.bg.primary}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={50}
                w={45}
                mr={2}
              >
                <Image w={30} src={ProfilePic} alt="Profile image" />
              </Box>
              <Text>Iman027</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() => handleNavigation(AuthenticatedRoutesNames?.MyProfile)}
              >
                <Text>Profile</Text>
              </Box>
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() => handleNavigation(AuthenticatedRoutesNames?.Setting)}
              >
                <Text>Settings</Text>
              </Box>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
          <Box
                w="100%"
                p={4}
                borderTop="2px solid #e1d6c5"
                cursor="pointer"
                onClick={handleLogout}
              >
                <Text>Logout</Text>
              </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
