import { Box, Button, Flex, Icon, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../theme/colors";
import { customIcons } from "../../theme/icons";

function NewPost() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  return (
    <>
      <Flex mb={5} alignItems={"center"} flexWrap={"wrap"}>
        <Icon
          color={colors.bg.primary}
          mr={1}
          fontSize={45}
          as={customIcons.newPostCreate}
        />
        <Box width={"70%"}>
          <Textarea
            onChange={(e) => setTitle(e.target.value)}
            fontFamily={"serif"}
            color={colors.bg.primary}
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
          color={colors.bg.primary}
          mr={1}
          fontSize={45}
          as={customIcons.newPostCreate}
        />
        <Box width={"70%"}>
          <Textarea
            onChange={(e) => setStory(e.target.value)}
            fontFamily={"serif"}
            color={colors.bg.primary}
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
          color={colors.text.primary}
        >
          Publish
        </Button>
      </Flex>
    </>
  );
}

export default NewPost;
