import {
  Box,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { TfiWrite } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
import ProfilePic from '../assets/myProfile.png';

const CustomLogo = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  display: inline-block;
  // padding: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
  // box-shadow: 0 0 10px rgba(0,0,0,0.1);
  font-family: cursive;
  margin-right: 33px;
`;

function Header() {
  return (
    <>
      <Flex position={"relative"} top={10}>
        <Flex flexGrow={1}>
          <CustomLogo>Aurora</CustomLogo>
          {/* <Image width={250} src={Logo} height={48} /> */}
          <InputGroup
            height={50}
            width={300}
            backgroundColor={"#e1d6c5"}
            borderRadius={50}
          >
            <Input
              fontSize={20}
              pr="4.5rem"
              placeholder="Search"
              borderRadius={50}
              border={"none"}
              p={25}
              backgroundColor={"#e1d6c5"}
            />
            <InputRightElement width="4.5rem" h="1.75rem">
              <IconButton
                border={"none"}
                backgroundColor={"transparent"}
                icon={<CiSearch fontSize={"30px"} />}
                mt={23}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex justifyContent={"space-between"}
        alignItems={'center'}
         w={190}
         >
          <Box>
            <Link textDecoration={"none"} fontSize={20} color={"black"} href="">
              <Box>
                <IconButton
                  fontSize={23}
                  border={"none"}
                  mr={3}
                  icon={<TfiWrite />}
                />
                Write
              </Box>
            </Link>
          </Box>
          <Link>
            <IconButton fontSize={25} border={"none"} icon={<FaRegBell />} />
          </Link>
          <Link>
          <Flex backgroundColor={'#e1d6c5'} justifyContent={'center'} alignItems={'center'} borderRadius={50} w={45}>
          <Image
          w={30} src={ProfilePic}/>
          </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
