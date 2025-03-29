import { Box, Button, Flex, Icon, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { customIcons } from "../theme/icons";
import { colors } from "../theme/colors";
import CustomButton from "./CustomButton";

function NewPost() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  return (
    <>
      <Flex
        mb={"1.313rem"} alignItems={"center"} flexWrap={"wrap"}>
        <Icon
          display={{ base: "none", md: "block" }}
          color={colors.bg.primary}
          mr={1}
          fontSize={45}
          as={customIcons.newPostCreate}
        />
        <Box width={{ base: "100%", md: "70%" }}>
          <Textarea
            onChange={(e) => setTitle(e.target.value)}
            fontFamily={"serif"}
            color={colors.bg.primary}
            // defaultValue={"Title"}
            placeholder="Title"
            fontSize={{ base: "1.375rem", md: "3.375rem" }}
            overflow="hidden"
            whiteSpace="normal"
            width="100%"
            height={{ base: "6.25rem", md: "12.5rem" }}
            resize="none"
          />
          {title}
        </Box>
      </Flex>
      <Flex mb={"1.313rem"} alignItems={"center"} flexWrap={"wrap"}>
        <Icon
          display={{ base: "none", md: "block" }}
          color={colors.bg.primary}
          mr={1}
          fontSize={45}
          as={customIcons.newPostCreate}
        />
        <Box width={{ base: "100%", md: "70%" }}>
          <Textarea
            onChange={(e) => setStory(e.target.value)}
            fontFamily={"serif"}
            color={colors.bg.primary}
            // defaultValue={"Tell your story..."}
            placeholder="Tell your story..."
            fontSize={{ base: "1.375rem", md: "3.375rem" }}
            overflow="hidden"
            whiteSpace="normal"
            width="100%"
            height={"12.5rem"}
            resize="none"
          />
        </Box>
      </Flex>
      <Flex w={{ base: "100%", md: "73%" }} justifyContent={"flex-end"}>
        <CustomButton title={'Publish'} />
      </Flex>
    </>
  );
}

export default NewPost;
