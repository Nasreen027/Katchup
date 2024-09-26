import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import NotFoundImage from '../assets/404.png';

function NotFound() {
  return (
    <>
    <Flex height={600} backgroundColor={'#e1d6c5'} justifyContent={'center'} alignItems={'center'}
    //  pos={'relative'} top={190}
     >
        <Image src={NotFoundImage} w={400} alt='404 Image'/>
    </Flex>
    </>
  )
}

export default NotFound;

