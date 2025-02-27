import React, { useState } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import ProfilePic from "../assets/myProfile.png";
import { colors } from "../theme/colors";
import { useFirebase } from "../context/Firebase";
import { AuthenticatedRoutesNames } from "../utilities/util.const";
import { customIcons } from "../theme/icons";

const CustomDrawer = ({ isOpen, onClose, mode, comments = [] }) => {
  // const [mode, setMode] = useState("profile");
  const btnRef = React.useRef();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  const context = useFirebase();
  const handleLogout = () => {
    context?.Logout();
  };

  return (
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
          {mode === "profile" ? (
            <Flex alignItems="center">
              <Box
                overflow="hidden"
                backgroundColor={colors.bg.primary}
                borderRadius={50}
                w={45}
                mr={2}
              >
                <Image w={30} src={ProfilePic} alt="Profile image" />
              </Box>
              <Text>Iman027</Text>
            </Flex>
          ) : (
            <Text>Comments</Text>
          )}
        </DrawerHeader>

        <DrawerBody>
          {mode === "profile" ? (
            <VStack spacing={4} align="stretch">
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() =>
                  handleNavigation(AuthenticatedRoutesNames?.MyProfile)
                }
              >
                <Text>Profile</Text>
              </Box>
              <Box
                w="100%"
                p={4}
                borderBottom="1px solid #e1d6c5"
                cursor="pointer"
                onClick={() =>
                  handleNavigation(AuthenticatedRoutesNames?.Setting)
                }
              >
                <Text>Settings</Text>
              </Box>
            </VStack>
          ) : (
            <VStack spacing={4} align="stretch">
              {/* {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <Box key={index} p={3} borderBottom="1px solid #e1d6c5">
                    <Text fontWeight="bold">{comment.user}</Text>
                    <Text>{comment.text}</Text>
                  </Box>
                ))
              ) : (
                <Text>No comments yet</Text>
              )} */}
              <Box borderBottom="1px solid #e1d6c5" p={3}>
                <Flex alignItems="center">
                  <Box
                    overflow="hidden"
                    backgroundColor={colors.bg.primary}
                    borderRadius={50}
                    w={45}
                    mr={2}
                  >
                    <Image w={30} src={ProfilePic} alt="Profile image" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Sara</Text>
                    <Text>Love the article!</Text>
                  </Box>
                </Flex>
                <Flex>
                  <Link _hover={{ textDecoration: "none" }}>
                    <IconButton
                      _hover={{
                        bg: "transparent",
                      }}
                      background={"transparent"}
                      fontSize={25}
                      border={"none"}
                      // onClick={() => setBookMark(!bookmark)}
                      icon={<customIcons.MdFavoriteBorder />}
                    />
                  </Link>
                </Flex>
              </Box>
            </VStack>
          )}
        </DrawerBody>

        {mode === "profile" && (
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
        )}
      </DrawerContent>
    </Drawer>
  );
};
export default CustomDrawer;
