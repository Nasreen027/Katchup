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
import ProfilePic from "../assets/myProfile.jpg";
import { colors } from "../theme/colors";
import { customIcons } from "../theme/icons";
import { AuthenticatedRoutesNames } from "../utilities/util.const";

function SinglePost() {
  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <Link href={AuthenticatedRoutesNames?.PostDetail} >
    <Card
      w={"48.5rem"}
      h={{base:"23rem",md:"15rem"}}
      p="1.5rem"
      borderRadius="md"
      bg={colors.bg.primary}
      transition="all 0.3s ease"
      // _hover={{ boxShadow: "md", bg: colors.bg.secondary }}
      color={colors.text.primary}
    >
      {/* Post Content */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        gap="1rem"
      >
        <Stack flex="1" spacing="0.5rem">
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Image
                w="2rem"
                h="2rem"
                borderRadius="full"
                src={ProfilePic}
                alt="Author"
              />
              <Text fontSize="sm" fontWeight="bold" ml="0.5rem">
                Iman
              </Text>
            </Flex>
          </Flex>

          <Heading size="md" fontWeight="bold">
            The Perfect Latte
          </Heading>

          <Text fontSize="sm" noOfLines={2}>
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </Stack>
        {/* Post Image */}
        <Image
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
          objectFit="cover"
          w={{ base: "100%", sm: "10rem", md: "12rem" }}
          h="8rem"
          borderRadius="md"
        />
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mt="1.5rem">
        <Box>
          <IconButton
            background="transparent"
            _hover={{ background: "transparent" }}
            fontSize="1.3rem"
            border="none"
            onClick={() => setLike(!like)}
            icon={
              like ? (
                <customIcons.MdOutlineFavorite style={{ color: "red" }} />
              ) : (
                <customIcons.MdFavoriteBorder style={{ fill: "gray" }} />
              )
            }
          />
          <Text as="span" fontSize="sm" ml="0.3rem">
            23
          </Text>
          <IconButton
            ml="1rem"
            background="transparent"
            _hover={{ background: "transparent" }}
            fontSize="1.3rem"
            border="none"
            icon={<customIcons.FaCommentDots style={{ fill: "gray" }} />}
          />
          <Text as="span" fontSize="sm" ml="0.3rem">
            76
          </Text>
        </Box>

        <Flex>
          <IconButton
            background="transparent"
            _hover={{ background: "transparent" }}
            fontSize="1.3rem"
            border="none"
            onClick={() => setBookMark(!bookmark)}
            icon={
              bookmark ? (
                <customIcons.BiSolidBookmark style={{ fill: "black" }} />
              ) : (
                <customIcons.BiBookmark style={{ fill: "gray" }} />
              )
            }
          />
          <IconButton
            ml="0.5rem"
            background="transparent"
            _hover={{ background: "transparent" }}
            fontSize="1.3rem"
            border="none"
            onClick={() => setFollow(!follow)}
            icon={
              follow ? (
                <customIcons.SlUserFollowing style={{ color: "green" }} />
              ) : (
                <customIcons.SlUserFollow style={{ fill: "gray" }} />
              )
            }
          />
        </Flex>
      </Flex>
    </Card>
    </Link>
  );
}

export default SinglePost;
