import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      position="relative"
      bottom="0"
      width="100%"
      borderTop="1px solid #660033"
      py={4}
      // bg="#fff"
    >
      <Text textAlign="center" color="black">
        © All Rights Reserved | Aurora | Developed by Nasreen.
      </Text>
    </Box>
  );
};

export default Footer;
