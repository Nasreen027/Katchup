import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomHeading } from '../App'

const PostDetail = () => {
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'} textAlign={'center'} lineHeight={6}>
        <Box w={20}></Box>
        <Box flexGrow={1}>
        <Heading fontSize={44} fontFamily={'sans-serif'}>Best Strategy to Achieve Profitable Harvest</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iusto voluptatibus vel aspernatur eaque culpa eum magnam dolor laudantium provident excepturi, minus rem facere mollitia quisquam a iste commodi aut?</Text>
        </Box>
        <Box w={20}></Box>
      </Flex>
    </>
  )
}

export default PostDetail
