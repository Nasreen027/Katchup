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
import CustomButton from "../components/CustomButton";
import { colors } from "../theme/colors";

const ProfilePage = () => {
  return (
    <>
      <Flex color={colors?.text?.primary} mb={5} flexDirection={{ base: 'row', md: 'row' }} justifyContent={'center'} gap={'1.875rem'}>
        <Box textAlign={'center'}>
          <Avatar
            size="2xl"
            boxSize={'13.125rem'}
            name="Iman"
            src="https://via.placeholder.com/150"
          />
        </Box>
        <Box w={'14.563rem'}>
          <Flex mb={5} alignItems={'center'} gap={'1.875rem'}>
            <Text fontSize="lg" fontWeight="bold" >iman027</Text>
            <CustomButton title={'Edit Profile'} />
          </Flex>
          <Flex mb={5} alignItems={'center'} gap={'1.875rem'}>
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
          <Box>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo magnam commodi.</Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default ProfilePage;
