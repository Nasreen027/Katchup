import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProfilePic from "../assets/myProfile.png";
import { colors } from "../theme/colors";
import { customIcons } from "../theme/icons";
import { AuthenticatedRoutesNames } from "../utilities/util.const";

function SinglePost() {
  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <>
    <Link _hover={{ textDecoration: "none" }}
    //  to={AuthenticatedRoutesNames?.PostDetail}
     >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100px", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Flex>
              <Box>
                <Heading size="md">The perfect latte</Heading>

                <Text py="2">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </Box>
              <Box flexGrow={1}></Box>
              <Link _hover={{ textDecoration: "none" }}>
                <Flex alignItems={"center"}>
                  <Box
                    overflow={"hidden"}
                    backgroundColor={colors.bg.primary}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={50}
                    w={45}
                    mr={1}
                  >
                    <Image
                     w={30}
                      src={ProfilePic} />
                  </Box>
                  <Text>Iman</Text>
                </Flex>
              </Link>
            </Flex>
          </CardBody>

          <CardFooter>
            <Flex
              alignItems={"center"}
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
                        <customIcons.MdOutlineFavorite
                          style={{ color: "red" }}
                        />
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
                        <customIcons.SlUserFollowing
                          style={{ color: "green" }}
                        />
                      ) : (
                        <customIcons.SlUserFollow />
                      )
                    }
                  />
                </Link>
              </Box>
            </Flex>
          </CardFooter>
        </Stack>
      </Card>
      </Link>
    </>
  );
}

export default SinglePost;
