import { Box, Button, Flex, Icon, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { colors } from "../../theme/colors";

function NewPost() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  return (
    <>
      <Flex mb={5} alignItems={"center"} flexWrap={"wrap"}>
        <Icon
          color={"#e1d6c5"}
          mr={1}
          fontSize={45}
          as={IoIosAddCircleOutline}
        />
        <Box width={"70%"}>
          <Textarea
            onChange={(e) => setTitle(e.target.value)}
            fontFamily={"serif"}
            color={"#e1d6c5"}
            // defaultValue={"Title"}
            placeholder="Title"
            fontSize={54}
            overflow="hidden"
            whiteSpace="normal"
            width="100%"
            height="200px"
            resize="none"
          />
          {title}
        </Box>
      </Flex>
      <Flex mb={5} alignItems={"center"} flexWrap={"wrap"}>
        <Icon
          color={"#e1d6c5"}
          mr={1}
          fontSize={45}
          as={IoIosAddCircleOutline}
        />
        <Box width={"70%"}>
          <Textarea
            onChange={(e) => setStory(e.target.value)}
            fontFamily={"serif"}
            color={"#e1d6c5"}
            // defaultValue={"Tell your story..."}
            placeholder="Tell your story..."
            fontSize={30}
            overflow="hidden"
            whiteSpace="normal"
            width="100%"
            height="200px"
            resize="none"
          />
        </Box>
      </Flex>
      <Flex w={"73%"} justifyContent={"flex-end"}>
        <Button
          borderRadius={50}
          backgroundColor={colors.bg.accent}
          color={colors.bg.primary}
        >
          Publish
        </Button>
      </Flex>
    </>
  );
}

export default NewPost;
