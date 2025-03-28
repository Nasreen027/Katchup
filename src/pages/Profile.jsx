import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <>
    {/* // <Box maxW="600px" mx="auto" p={5} bg="white" borderRadius="lg" boxShadow="lg" color={'white'}> */}
      {/* Profile Header */}
      <Box>
        <Flex>
        <Avatar
          size="2xl"
          name="John Doe"
          src="https://via.placeholder.com/150"
        />
        <Heading fontSize="2xl" mt={3}>
          John Doe
        </Heading>
        <Text color="gray.500">@johndoe</Text>
        <Text mt={2} textAlign="center">
          Passionate Web Developer | React & Chakra UI Enthusiast 🚀
        </Text>
        <Button leftIcon={<Icon as={FaEdit} />} mt={3} colorScheme="blue">
          Edit Profile
        </Button>
        </Flex>
      </Box>

      <Divider my={5} />

      {/* Stats Section */}
      <Flex justify="space-around" textAlign="center">
        <VStack>
          <Text fontSize="lg" fontWeight="bold">120</Text>
          <Text fontSize="sm" color="gray.500">Posts</Text>
        </VStack>
        <VStack>
          <Text fontSize="lg" fontWeight="bold">10K</Text>
          <Text fontSize="sm" color="gray.500">Followers</Text>
        </VStack>
        <VStack>
          <Text fontSize="lg" fontWeight="bold">500</Text>
          <Text fontSize="sm" color="gray.500">Following</Text>
        </VStack>
      </Flex>
    {/* // </Box> */}
    </>
  );
};

export default ProfilePage;
