import React from "react";
import { UnAuthenticatedRoutesNames } from "../utilities/util.const";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainPageImage from "../assets/mainPage.png";
import { colors } from "../theme/colors";

const ClientHome = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "center" }}
      justifyContent={"center"}
      height={{ base: "auto", md: "50vh" }}
      p={{ base: 4, md: 8 }}
      mt={{ base: "1.25rem", md: "3.125rem", lg: "5rem" }}
      // ml={{ base: "20px", md: "120px" }}
      color={colors.text.primary}
    >
      <Box textAlign={{ base: "left", md: "left" }} mb={{ base: 6, md: 0 }}>
        <Heading fontSize={{ base: "6xl", md: "6xl", lg: "8xl", xl: "9xl" }}>
          Voices and Visions
        </Heading>
        <Text fontSize={{ base: "md", md: "3xl" }} mt={2}>
          Your voice, your stories, shared with the world.
        </Text>
        <Button
        background={colors.button.bg}
          mt={4}
          size="lg"
          onClick={() => navigate(UnAuthenticatedRoutesNames?.Register)}
        >
          Start reading
        </Button>
      </Box>
      <Box flex={1} display={{ base: "none", md: "block" }}></Box>
      <Box>
        <Image
          src={MainPageImage}
          alt="ideas"
          maxH={{ base: "50vh", md: "100vh" }}
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default ClientHome;
