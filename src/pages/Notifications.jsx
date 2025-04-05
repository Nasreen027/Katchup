import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../theme/colors";
import ProfilePic from "../assets/myProfile.jpg";

function Notifications() {
  return (
    <>
      <Box
        backgroundColor={colors.bg.primary}
        color={colors.text.primary}
        minWidth="300px"
        p={5}
        boxShadow="xl"
        borderRadius="md"
      >
        <Text fontWeight="bold" mb={2}>
          Notifications
        </Text>
        <Divider mb={2} />
        <Box
          backgroundColor={colors.bg.primary}
          _hover={{ backgroundColor: colors.bg.hover }}
        >
          
          {/* <Flex flexDirection="row" align="flex-start">
            <Box
              overflow={"hidden"}
              backgroundColor={colors.bg.primary}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={50}
              w={45}
              mr={5}
            >
              <Image w={30} src={ProfilePic} />
              </Box>
            <Text fontWeight="medium">John liked your post</Text>
            <Text fontSize="sm" color="gray.500">
              11:11
            </Text>
          </Flex> */}
        </Box>
      </Box>
    </>
  );
}

export default Notifications;
