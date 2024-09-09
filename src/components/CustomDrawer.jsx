import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CustomDrawer = ({ isOpen, onClose }) => {
  const btnRef = React.useRef();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleNavigation = (path) => {
    navigate(path); // Programmatically navigate to the specified path
    onClose(); // Close the drawer after navigation
  };

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
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() => handleNavigation("/section1")}
              >
                <Text>Profile</Text>
              </Box>
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() => handleNavigation("/section2")}
              >
                <Text>Settings</Text>
              </Box>
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() => handleNavigation("/section3")}
              >
                <Text>Logout</Text>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
