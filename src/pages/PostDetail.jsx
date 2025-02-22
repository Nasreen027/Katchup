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
import styled from "styled-components";

const CustomText = styled.p`
  color: ${colors.text.primary};
  font-size: 1.25rem;
  margin-bottom: 3rem;
`;
const PostDetail = () => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const [follow, setFollow] = useState(false);
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} lineHeight={6}>
        <Box 
        w={{base:"0%", md:"20%"}}
        ></Box>
        <Box w={{base:"100%", md:"70%"}}>
          <Heading fontSize={{base:"1.6rem", md:"2.125rem"}} fontFamily={"sans-serif"} mb={'0.188'}>
            The Upcoming World With Artificial Intelligence
          </Heading>
          <CustomText>
            Porro iusto voluptatibus vel aspernatur eaque rem facere mollitia
            quisquam a iste commodi aut?
          </CustomText>
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
            borderTop={"1px solid #e1d6c5"}
            borderBottom={"1px solid #e1d6c5"}
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
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image w={"100%"} src={AI} mb={10} />
            <CustomText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
              voluptatem magnam voluptas nihil illum, perferendis rerum expedita
              quibusdam quae adipisci error in, pariatur harum ab, modi odit
              beatae. Dolor. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minima eum ducimus esse, ex ab veritatis, quaerat aliquid
              autem, nulla laboriosam cupiditate vero placeat labore repellat
              fuga delectus dolorum quod mollitia!
            </CustomText>
          </Box>
        </Box>
        <Box w={{base:"0%", md:"20%"}}></Box>
      </Flex>
    </>
  );
};

export default PostDetail;
