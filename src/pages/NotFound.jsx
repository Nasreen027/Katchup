import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import NotFoundImage from '../assets/404.png';

function NotFound() {
  return (
    <>
    <Flex height={600} backgroundColor={'#e1d6c5'} justifyContent={'center'} alignItems={'center'}
    //  pos={'relative'} top={190}
     >
      <Box>

        <Image src={NotFoundImage} w={400} alt='404 Image' mb={5}/>
        <Text textAlign={'center'} fontSize={20}>Find Something to Read</Text>
      </Box>
    </Flex>
    </>
  )
}

export default NotFound;

