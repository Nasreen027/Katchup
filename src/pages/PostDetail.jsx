import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomHeading } from "../App";
import { colors } from "../theme/colors";
import ProfilePic from "../assets/myProfile.png";
import AI from "../assets/ai.jpg";
import { customIcons } from "../theme/icons";

const PostDetail = () => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const [follow, setFollow] = useState(false);
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} lineHeight={6}>
        <Box w={"20%"}></Box>
        <Box w={"70%"}>
          <Heading fontSize={50} fontFamily={"sans-serif"} mb={3}>
            The Upcoming World With Artificial Intelligence
          </Heading>
          <Text color={colors.text.primary} fontSize={20} mb={3}>
            Porro iusto voluptatibus vel aspernatur eaque rem facere mollitia
            quisquam a iste commodi aut?
          </Text>
          <Flex alignItems={"center"} mb={10}>
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
            <Box>
              <Flex alignItems="center">
                <Text fontSize={17}>Iman</Text>
                <Text mx={2}>•</Text>
                <Text color="green.500" cursor="pointer">
                  Follow
                </Text>
              </Flex>
              <Text mt={1} color="gray.600">
                Published in <span>Better Humans</span>
              </Text>
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            borderTop={'1px solid #e1d6c5'}
            borderBottom={'1px solid #e1d6c5'}
            mb={10}
            // w={900}
            justifyContent={"space-between"}
          >
            <Box>
              <Link _hover={{ textDecoration: "none" }} mr={4}>
                <IconButton
                  _hover={{
                    bg: "transparent",
                  }}
                  background={"transparent"}
                  fontSize={25}
                  border={"none"}
                  onClick={() => setLike(!like)}
                  icon={
                    like === true ? (
                      <customIcons.MdOutlineFavorite style={{ color: "red" }} />
                    ) : (
                      <customIcons.MdFavoriteBorder />
                    )
                  }
                />
                <span>23</span>
              </Link>
              <Link _hover={{ textDecoration: "none" }}>
                <IconButton
                  _hover={{
                    bg: "transparent",
                  }}
                  background={"transparent"}
                  fontSize={25}
                  border={"none"}
                  icon={<customIcons.FaCommentDots />}
                />
                <span>76</span>
              </Link>
            </Box>
            <Box flex={1}></Box>
            <Box>
              <Link _hover={{ textDecoration: "none" }}>
                <IconButton
                  _hover={{
                    bg: "transparent",
                  }}
                  background={"transparent"}
                  fontSize={25}
                  border={"none"}
                  onClick={() => setBookMark(!bookmark)}
                  icon={
                    bookmark === true ? (
                      <customIcons.BiSolidBookmark />
                    ) : (
                      <customIcons.BiBookmark />
                    )
                  }
                />
              </Link>
              <Link _hover={{ textDecoration: "none" }}>
                <IconButton
                  _hover={{
                    bg: "transparent",
                  }}
                  background={"transparent"}
                  fontSize={25}
                  border={"none"}
                  onClick={() => setFollow(!follow)}
                  icon={
                    follow === true ? (
                      <customIcons.SlUserFollowing style={{ color: "green" }} />
                    ) : (
                      <customIcons.SlUserFollow />
                    )
                  }
                />
              </Link>
            </Box>
          </Flex>
          <Box
            overflow={"hidden"}
            //   backgroundColor={colors.bg.primary}
            justifyContent={"center"}
            alignItems={"center"}
            //   borderRadius={50}
            //   w={45}
            //   mr={5}
          >
            <Image w={"100%"} src={AI} />
          </Box>
        </Box>
        <Box w={"20%"}></Box>
      </Flex>
    </>
  );
};

export default PostDetail;
