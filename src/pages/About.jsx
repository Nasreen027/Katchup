import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import MainPageImage from '../assets/mainPage.png';

const About = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      justifyContent={'center'}
      height={{ base: 'auto', md: '50vh' }}
      p={{ base: 4, md: 8 }}
      mt={{base:'20px', md:'50px',lg:'80px'}}
      ml={{base:'20px', md:'120px'}}
    >
      <Box textAlign={{ base: 'left', md: 'left' }} mb={{ base: 6, md: 0 }}>
        <Heading fontSize={{ base: '6xl', md: 'xl', lg:'9xl' }}>Voices and Visions</Heading>
        <Text fontSize={{ base: 'md', md: '3xl' }} mt={2}>Your voice, your stories, shared with the world.</Text>
        <Button mt={4} size="lg">Start reading</Button>
      </Box>
      <Box flex={1} display={{ base: 'none', md: 'block' }}></Box>
      <Box>
        <Image 
          src={MainPageImage} 
          alt='ideas' 
          maxH={{ base: '50vh', md: '80vh' }} 
          objectFit="cover" 
        />
      </Box>
    </Flex>
  );
};

export default About;
